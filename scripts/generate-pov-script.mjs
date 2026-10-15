#!/usr/bin/env node
/**
 * Builds static/scripts/proof-of-value.sh from the CLI commands in the proof of value guide,
 * and embeds the same script in the guide itself.
 *
 * Every bash block under a "#### CLI commands" heading becomes one step of the script. The data
 * tables each step studies are checked against the recipe catalog page its "###" heading links to.
 *
 * Usage:
 *   node scripts/generate-pov-script.mjs           Regenerate the script and the guide
 *   node scripts/generate-pov-script.mjs --check   Fail if either is out of date
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const GUIDE_PATH = 'docs/user-documentation/moderne-platform/getting-started/proof-of-value.md';
const SCRIPT_PATH = 'static/scripts/proof-of-value.sh';

const START_MARKER = '{/* proof-of-value-script:start */}';
const END_MARKER = '{/* proof-of-value-script:end */}';

export function withoutEmbeddedScript(markdown) {
  const start = markdown.indexOf(START_MARKER);
  const end = markdown.indexOf(END_MARKER);
  if (start === -1 || end === -1) return markdown;
  return markdown.slice(0, start) + markdown.slice(end + END_MARKER.length);
}

export function extractRecipes(markdown) {
  const recipes = [];
  let section = null;
  let heading = null;
  let inCliCommands = false;
  let fence = null;

  for (const line of markdown.split('\n')) {
    if (fence) {
      if (line.trim().startsWith('```')) {
        if (fence.collect) {
          recipes.push({ section, ...heading, commands: fence.lines.join('\n') });
        }
        fence = null;
      } else {
        fence.lines.push(line);
      }
      continue;
    }

    const fenceOpen = line.match(/^\s*```(\w*)/);
    if (fenceOpen) {
      fence = { lines: [], collect: inCliCommands && fenceOpen[1] === 'bash' };
      continue;
    }

    const headingMatch = line.match(/^(#{2,4}) (.+)$/);
    if (!headingMatch) continue;
    const [, hashes, text] = headingMatch;
    inCliCommands = hashes === '####' && text === 'CLI commands';
    if (hashes === '##') {
      section = text;
    } else if (hashes === '###') {
      const link = text.match(/^\[(.+)\]\((.+)\)$/);
      heading = link ? { title: link[1], catalogLink: link[2] } : { title: text };
    }
  }

  return recipes;
}

export function extractInstallCommand(markdown) {
  const match = markdown.match(/^\s*(mod config recipes jar install .+)$/m);
  if (!match) throw new Error(`No "mod config recipes jar install" command found in ${GUIDE_PATH}`);
  return match[1].trim();
}

function catalogEntry(catalogMarkdown) {
  const fqName = catalogMarkdown.match(/fqName=\{"([^"]+)"\}/)?.[1];
  const tables = catalogMarkdown.match(/<DataTableList tables=\{(\[.*\])\}>/)?.[1];
  const dataTables = tables ? JSON.parse(tables).map((table) => table.name.split('.').pop()) : [];
  return { fqName, dataTables };
}

export function validateRecipes(recipes, readCatalogPage) {
  const errors = [];
  for (const recipe of recipes) {
    if (!recipe.catalogLink) {
      errors.push(`"${recipe.title}" has no recipe catalog link in its heading`);
      continue;
    }
    let entry;
    try {
      entry = catalogEntry(readCatalogPage(recipe.catalogLink));
    } catch {
      errors.push(`"${recipe.title}" links to ${recipe.catalogLink}, which does not exist`);
      continue;
    }
    for (const [, recipeId] of recipe.commands.matchAll(/--recipe\s+(\S+)/g)) {
      if (recipeId !== entry.fqName) {
        errors.push(`"${recipe.title}" runs ${recipeId}, but its heading links to ${entry.fqName}`);
      }
    }
    for (const [, dataTable] of recipe.commands.matchAll(/--data-table\s+(\S+)/g)) {
      if (!entry.dataTables.includes(dataTable)) {
        errors.push(
          `"${recipe.title}" studies ${dataTable}, which ${entry.fqName} does not produce. ` +
          `Its data tables are: ${entry.dataTables.join(', ')}`,
        );
      }
    }
  }
  return errors;
}

function functionName(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function recipeSteps(commands) {
  return commands
    .split('\n')
    .filter((line) => !/^\s*mod git apply\b/.test(line))
    .join('\n')
    .trim()
    .split('\n')
    .map((line) => (line ? `  ${line}` : line))
    .join('\n');
}

export function renderScript(recipes, installCommand) {
  const names = new Set();

  const lines = [
    '#!/usr/bin/env bash',
    '#',
    '# Runs every recipe in the Moderne proof of value guide and exports the data tables it reviews:',
    '# https://docs.moderne.io/user-documentation/moderne-platform/getting-started/proof-of-value',
    '#',
    '# Usage: bash proof-of-value.sh [directory]',
    '#',
    '# Point it at the directory where you cloned your repositories and built their LSTs; it defaults',
    '# to the current directory. A recipe that fails is reported at the end without stopping the rest.',
    '# The script never changes your working tree, so `mod git apply` steps from the guide are left out.',
    '#',
    `# Generated from ${GUIDE_PATH}`,
    '# by `yarn generate:pov-script`. Edit the guide instead of this file.',
    '',
    'cd "${1:-.}" || exit 1',
    '',
    'failed=()',
    '',
    'run_recipe() {',
    '  echo',
    '  echo "==> $1"',
    '  # Not `"$2" || ...`: bash ignores set -e inside a function called from a condition.',
    '  "$2"',
    '  if [ $? -ne 0 ]; then',
    '    failed+=("$1")',
    '  fi',
    '}',
    '',
    'echo "==> Installing recipe modules"',
    installCommand.replace(/ (?=\S+:\S+:\S+)/g, ' \\\n  ') + ' || exit 1',
  ];

  let section = null;
  for (const recipe of recipes) {
    if (recipe.section !== section) {
      section = recipe.section;
      lines.push('', `# ${section}`);
    }
    const name = functionName(recipe.title);
    if (names.has(name)) throw new Error(`Two recipes in ${GUIDE_PATH} share the title "${recipe.title}"`);
    names.add(name);
    lines.push(
      '',
      `${name}() (`,
      '  set -e',
      recipeSteps(recipe.commands),
      ')',
      `run_recipe ${JSON.stringify(recipe.title)} ${name}`,
    );
  }

  lines.push(
    '',
    'echo',
    'if [ ${#failed[@]} -eq 0 ]; then',
    '  echo "All recipes completed."',
    'else',
    '  echo "These recipes failed:"',
    `  printf '  %s\\n' "\${failed[@]}"`,
    '  exit 1',
    'fi',
  );

  return lines.join('\n') + '\n';
}

export function embedScript(markdown, script) {
  const start = markdown.indexOf(START_MARKER);
  const end = markdown.indexOf(END_MARKER);
  if (start === -1 || end === -1) {
    throw new Error(`${GUIDE_PATH} is missing the ${START_MARKER} and ${END_MARKER} markers`);
  }
  const block = `${START_MARKER}\n\n\`\`\`bash title="proof-of-value.sh"\n${script}\`\`\`\n\n`;
  return markdown.slice(0, start) + block + markdown.slice(end);
}

function generate() {
  const guidePath = resolve(ROOT, GUIDE_PATH);
  const guide = readFileSync(guidePath, 'utf8');
  const source = withoutEmbeddedScript(guide);
  const recipes = extractRecipes(source);

  const errors = validateRecipes(recipes, (link) => readFileSync(resolve(dirname(guidePath), link), 'utf8'));
  if (errors.length > 0) {
    throw new Error(`${GUIDE_PATH} has CLI commands that do not match the recipe catalog:\n  ${errors.join('\n  ')}`);
  }

  const script = renderScript(recipes, extractInstallCommand(source));
  return { guide, updatedGuide: embedScript(guide, script), script };
}

function readIfExists(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return null;
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const { guide, updatedGuide, script } = generate();
    const scriptPath = resolve(ROOT, SCRIPT_PATH);
    if (process.argv.includes('--check')) {
      const stale = [
        ...(readIfExists(scriptPath) === script ? [] : [SCRIPT_PATH]),
        ...(guide === updatedGuide ? [] : [GUIDE_PATH]),
      ];
      if (stale.length > 0) {
        console.error(`Out of date: ${stale.join(', ')}. Run \`yarn generate:pov-script\` and commit the result.`);
        process.exit(1);
      }
      console.log('Proof of value script is up to date.');
    } else {
      writeFileSync(scriptPath, script, { mode: 0o755 });
      writeFileSync(resolve(ROOT, GUIDE_PATH), updatedGuide);
      console.log(`Wrote ${SCRIPT_PATH} and updated ${GUIDE_PATH}.`);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
