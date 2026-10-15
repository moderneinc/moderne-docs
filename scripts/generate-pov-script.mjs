#!/usr/bin/env node
/**
 * Builds static/scripts/proof-of-value.sh from the proof of value guide. Every bash block under a
 * "#### CLI commands" heading becomes one step, and the recipe and data tables each step uses are
 * checked against the recipe catalog page its "###" heading links to.
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdx from 'remark-mdx';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const GUIDE_PATH = 'docs/user-documentation/moderne-platform/getting-started/proof-of-value.md';
const SCRIPT_PATH = 'static/scripts/proof-of-value.sh';

// The CLI ships with the core OpenRewrite modules, so only recipe modules need installing.
const BUNDLED_GROUP = 'org.openrewrite:';
const INSTALL_COMMAND = /^\s*mod config recipes jar install\s+(.+)$/;

const parser = unified().use(remarkParse).use(remarkFrontmatter).use(remarkMdx);

export function extractGuide(markdown) {
  const recipes = [];
  const modules = new Set();
  let section = null;
  let heading = null;
  let inCliCommands = false;

  visit(parser.parse(markdown), (node) => {
    if (node.type === 'heading') {
      inCliCommands = node.depth === 4 && toString(node) === 'CLI commands';
      if (node.depth === 2) {
        section = toString(node);
        heading = { title: section };
      }
      if (node.depth === 3) {
        heading = { title: toString(node), catalogLink: node.children.find((child) => child.type === 'link')?.url };
      }
    } else if (node.type === 'code' && node.lang === 'bash') {
      for (const line of node.value.replace(/\\\n\s*/g, ' ').split('\n')) {
        line.match(INSTALL_COMMAND)?.[1].trim().split(/\s+/).forEach((module) => modules.add(module));
      }
      if (inCliCommands) recipes.push({ section, ...heading, commands: node.value });
    }
  });

  return { recipes, modules: [...modules] };
}

function catalogEntry(catalogMarkdown) {
  const entry = { fqName: null, artifact: null, dataTables: [] };
  visit(parser.parse(catalogMarkdown), 'mdxJsxFlowElement', (node) => {
    const attribute = (name) => JSON.parse(node.attributes.find((a) => a.name === name).value.value);
    if (node.name === 'RecipeHeader') {
      entry.fqName = attribute('fqName');
      entry.artifact = attribute('artifact');
    }
    if (node.name === 'DataTableList') entry.dataTables = attribute('tables').map((table) => table.name.split('.').pop());
  });
  return entry;
}

export function validateRecipes(recipes, modules, readCatalogPage) {
  const installed = new Set(modules.map((module) => module.split(':').slice(0, 2).join(':')));
  const errors = [];
  for (const recipe of recipes) {
    if (!recipe.catalogLink) {
      errors.push(`"${recipe.title}" has no recipe catalog link in its heading`);
      continue;
    }
    let catalogPage;
    try {
      catalogPage = readCatalogPage(recipe.catalogLink);
    } catch {
      errors.push(`"${recipe.title}" links to ${recipe.catalogLink}, which could not be read`);
      continue;
    }
    const entry = catalogEntry(catalogPage);
    if (!entry.fqName) {
      errors.push(`"${recipe.title}" links to ${recipe.catalogLink}, which has no RecipeHeader`);
      continue;
    }
    if (!entry.artifact.startsWith(BUNDLED_GROUP) && !installed.has(entry.artifact)) {
      errors.push(`"${recipe.title}" needs ${entry.artifact}, which the recipe install command does not include`);
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

// Install commands are hoisted into the script's single install step, along with the comments that
// introduce them, so a section that installs its own module for standalone readers doesn't repeat it.
function recipeSteps(commands) {
  const kept = [];
  let inInstall = false;
  for (const line of commands.split('\n')) {
    if (inInstall || INSTALL_COMMAND.test(line)) {
      if (!inInstall) while (kept.length > 0 && kept.at(-1).trim().startsWith('#')) kept.pop();
      inInstall = line.trimEnd().endsWith('\\');
    } else {
      kept.push(line);
    }
  }
  return kept.join('\n').trim().replace(/^(?=.)/gm, '  ');
}

function functionName(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

export function renderScript(recipes, modules) {
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
    ['mod config recipes jar install', ...modules].join(' \\\n  ') + ' || exit 1',
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

function generate() {
  const guidePath = resolve(ROOT, GUIDE_PATH);
  const { recipes, modules } = extractGuide(readFileSync(guidePath, 'utf8'));

  const errors = validateRecipes(recipes, modules, (link) => readFileSync(resolve(dirname(guidePath), link), 'utf8'));
  if (errors.length > 0) {
    throw new Error(`${GUIDE_PATH} has CLI commands that do not match the recipe catalog:\n  ${errors.join('\n  ')}`);
  }

  return renderScript(recipes, modules);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    writeFileSync(resolve(ROOT, SCRIPT_PATH), generate(), { mode: 0o755 });
    console.log(`Wrote ${SCRIPT_PATH}.`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
