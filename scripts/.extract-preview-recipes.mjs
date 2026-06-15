// One-off extractor for the recipe-frame preview. Reads real generated recipe
// pages and emits *.data.ts modules with structural content at parity, in a
// unified shape that supports multi-language examples. Not part of the build.
import { readFileSync, writeFileSync } from 'fs';
import path from 'node:path';

const ROOT = 'docs/user-documentation/recipes/recipe-catalog';
const SITE = 'https://docs.moderne.io';
const CATALOG_URL = `${SITE}/user-documentation/recipes/recipe-catalog`;

/** Resolve a recipe-list link (relative or site-absolute) to a real docs.moderne.io URL. */
function resolveHref(baseDir, rel) {
  if (rel.startsWith('http')) return rel;
  if (rel.startsWith('/')) return SITE + rel;
  return `${CATALOG_URL}/${path.posix.normalize(path.posix.join(baseDir, rel))}`;
}

function codeAfter(label, body) {
  // Fence may carry an info string (e.g. ```xml title="pom.xml"), so match to end of line.
  const re = new RegExp('###### ' + label + '\\n```[^\\n]*\\n([\\s\\S]*?)\\n```');
  const m = body.match(re);
  return m ? m[1] : null;
}

function parseTabsGroup(group) {
  // Returns { variants:[{language,before,after}], diff:string|null }
  // value can contain dots/dashes (e.g. "pom.xml", "build.gradle"), so accept any non-quote chars.
  const items = [...group.matchAll(/<TabItem value="([^"]+)"[^>]*>([\s\S]*?)<\/TabItem>/g)];
  const variants = [];
  let diff = null;
  for (const [, value, inner] of items) {
    if (value === 'diff') {
      const d = inner.match(/```diff\n([\s\S]*?)\n```/);
      if (d) diff = d[1];
    } else {
      const before = codeAfter('Before', inner);
      const after = codeAfter('After', inner);
      if (before != null && after != null) variants.push({ language: value, before, after });
    }
  }
  return { variants, diff };
}

function parseParameters(chunk) {
  // An example may declare the option values it was run with: "###### Parameters" + a table.
  const m = chunk.match(/###### Parameters\n([\s\S]*?)(?=\n\n|<Tabs|###### )/);
  if (!m) return undefined;
  const rows = [...m[1].matchAll(/^\|(.+?)\|(.+?)\|\s*$/gm)];
  const params = rows
    .filter((r) => r[1].trim() !== 'Parameter' && !/^[-\s]+$/.test(r[1]))
    .map((r) => ({ parameter: r[1].trim().replace(/`/g, ''), value: r[2].trim().replace(/`/g, '') }));
  return params.length ? params : undefined;
}

function parseExamples(md) {
  // Grab the Examples section: from "## Example(s)" to the next "## " heading.
  const secMatch = md.match(/\n## Examples?\n([\s\S]*?)(?=\n## )/);
  if (!secMatch) return [];
  const section = secMatch[1];

  // Multiple examples use "##### Example N"; single uses the whole section.
  const markers = [...section.matchAll(/^##### (Example \d+)/gm)];
  let chunks;
  if (markers.length) {
    chunks = [];
    for (let i = 0; i < markers.length; i++) {
      const start = markers[i].index;
      const end = i + 1 < markers.length ? markers[i + 1].index : section.length;
      chunks.push(section.slice(start, end));
    }
  } else {
    chunks = [section];
  }

  const examples = [];
  for (const chunk of chunks) {
    const nameM = chunk.match(/`([A-Za-z0-9_]+#[A-Za-z0-9_]+)`/);
    const groups = [...chunk.matchAll(/<Tabs[^>]*>([\s\S]*?)<\/Tabs>/g)];
    const variants = [];
    for (const [, g] of groups) {
      const parsed = parseTabsGroup(g);
      for (const v of parsed.variants) variants.push({ ...v, diff: parsed.diff || undefined });
    }
    if (variants.length) {
      examples.push({ name: nameM ? nameM[1] : undefined, parameters: parseParameters(chunk), variants });
    }
  }
  return examples;
}

function parseSubRecipes(md, baseDir) {
  // The recipe list lives in the "recipe-list" tab. Some pages prefix it with a
  // **Preconditions** block then **Recipes**; others list bullets directly.
  const tab = md.match(/<TabItem value="recipe-list"[^>]*>([\s\S]*?)<\/TabItem>/);
  if (!tab) return [];
  let body = tab[1];
  if (body.includes('**Recipes**')) body = body.slice(body.indexOf('**Recipes**'));
  return [...body.matchAll(/^\* \[(.+?)\]\((.+?)\)/gm)].map((x) => ({
    name: x[1].replace(/&quot;/g, '"'),
    href: resolveHref(baseDir, x[2]),
  }));
}

function parseRunRecipe(md) {
  const m = md.match(/<RunRecipe([\s\S]*?)\/>/);
  if (!m) return { recipeName: '', displayName: '' };
  const block = m[1];
  const str = (name) => {
    // Double-quoted attribute, e.g. groupId="..."
    const s = block.match(new RegExp(`${name}="([^"]*)"`));
    if (s) return s[1];
    // Brace expression with a quoted string, e.g. cliOptions={' --recipe-option "version=11"'}
    const e = block.match(new RegExp(`${name}=\\{(['"])([\\s\\S]*?)\\1\\}`));
    return e ? e[2] : undefined;
  };
  const bool = (name) => {
    const b = block.match(new RegExp(`${name}=\\{(true|false)\\}`));
    if (b) return b[1] === 'true';
    // JSX boolean shorthand: a bare attribute (e.g. requiresConfiguration) means true.
    if (new RegExp(`(?:^|\\s)${name}(?=\\s|/|>|$)`).test(block)) return true;
    return undefined;
  };
  const usage = {
    recipeName: str('recipeName') ?? '',
    displayName: str('displayName') ?? '',
    groupId: str('groupId'),
    artifactId: str('artifactId'),
    versionKey: str('versionKey'),
    requiresConfiguration: bool('requiresConfiguration'),
    cliOptions: str('cliOptions'),
    useFullyQualifiedCliName: bool('useFullyQualifiedCliName'),
    npmPackage: str('npmPackage'),
    pipPackage: str('pipPackage'),
    nugetPackage: str('nugetPackage'),
  };
  // drop undefined keys for a clean object
  Object.keys(usage).forEach((k) => usage[k] === undefined && delete usage[k]);
  return usage;
}

function parseUsedBy(md, baseDir) {
  const m = md.match(/\n## Used by\n([\s\S]*?)(?=\n## )/);
  if (!m) return [];
  return [...m[1].matchAll(/^\* \[(.+?)\]\((.+?)\)/gm)].map((x) => ({
    name: x[1].replace(/&quot;/g, '"'),
    href: resolveHref(baseDir, x[2]),
  }));
}

function parseInfoAdmonition(md) {
  const m = md.match(/:::info\n([\s\S]*?)\n:::/);
  return m ? m[1].trim() : null;
}

function parseTags(md) {
  // Real tags live in a "### Tags" section (often RSPEC rule links). Many recipes have none.
  const m = md.match(/\n### Tags\n([\s\S]*?)(?=\n#{2,3} )/);
  if (!m) return [];
  return [...m[1].matchAll(/^\* \[(.+?)\]/gm)].map((x) => x[1].replace(/`/g, ''));
}

function parsePreconditions(md) {
  const m = md.match(/\*\*Preconditions\*\*\n\n([\s\S]*?)\n\n/);
  if (!m) return [];
  return [...m[1].matchAll(/^\* \[(.+?)\]/gm)].map((x) => x[1].replace(/`/g, ''));
}

function parseYaml(md) {
  const m = md.match(/```yaml\n([\s\S]*?)\n```/);
  return m ? m[1] : null;
}

function parseOptions(md) {
  const block = md.match(/## Options\n\n([\s\S]*?)\n\n/);
  if (!block) return [];
  const rows = [...block[1].matchAll(/^\| (.+?) \| (.+?) \| (.+?) \| (.*?) \|$/gm)];
  return rows
    .filter((r) => !/^[-\s|]+$/.test(r[1]) && r[1].trim() !== 'Type')
    .map((r) => ({
      type: r[1].replace(/`/g, '').trim(),
      name: r[2].trim(),
      // The generator marks optional options with a leading "*Optional*." in the
      // description; capture it as a real field, then strip it from the prose.
      required: !/\*Optional\*/.test(r[3]),
      description: r[3].replace(/\*Optional\*\.?\s*/, '').trim(),
      example: r[4].replace(/`/g, '').trim(),
    }));
}

function parseDataTables(md) {
  if (!md.includes('## Data Tables')) return [];
  const dt = md.slice(md.indexOf('## Data Tables'));
  const blocks = [...dt.matchAll(/### (.+)\n\*\*(.+?)\*\*\n\n_(.+?)_\n\n([\s\S]*?)(?=\n<\/TabItem>)/g)];
  return blocks.map((b) => {
    const [, title, name, desc, tbl] = b;
    const rows = [...tbl.matchAll(/^\| (.+?) \| (.+?) \|$/gm)];
    const columns = rows
      .filter((c) => !/^[-\s|]+$/.test(c[1]) && c[1].trim() !== 'Column Name')
      .map((c) => ({ name: c[1].trim(), description: c[2].trim() }));
    return { name, displayName: title.trim(), description: desc.trim(), columns };
  });
}

const targets = [
  { file: 'staticanalysis/commonstaticanalysis.md', varName: 'commonStaticAnalysisContent', out: 'commonStaticAnalysis.data.ts' },
  { file: 'staticanalysis/replaceduplicatestringliterals.md', varName: 'replaceDuplicateStringLiteralsContent', out: 'replaceDuplicateStringLiterals.data.ts' },
  { file: 'quarkus/quarkus2/quarkus1to2migration.md', varName: 'quarkus1to2MigrationContent', out: 'quarkus1to2Migration.data.ts' },
  { file: 'java/migrate/upgradejavaversion.md', varName: 'upgradeJavaVersionContent', out: 'upgradeJavaVersion.data.ts' },
];

for (const t of targets) {
  const md = readFileSync(`${ROOT}/${t.file}`, 'utf8');
  const baseDir = path.posix.dirname(t.file);
  const content = {
    tags: parseTags(md),
    infoAdmonition: parseInfoAdmonition(md),
    preconditions: parsePreconditions(md),
    subRecipes: parseSubRecipes(md, baseDir),
    yaml: parseYaml(md),
    options: parseOptions(md),
    usedBy: parseUsedBy(md, baseDir),
    examples: parseExamples(md),
    usage: parseRunRecipe(md),
    dataTables: parseDataTables(md),
  };
  const body =
    `// AUTO-EXTRACTED from ${ROOT}/${t.file} — real generated content for parity.\n` +
    `// Regenerate via scripts/.extract-preview-recipes.mjs if the source changes.\n\n` +
    `import type { ExtractedContent } from './recipeData';\n\n` +
    `export const ${t.varName}: ExtractedContent = ${JSON.stringify(content, null, 2)};\n`;
  writeFileSync(`src/pages/recipe-frame-preview/_components/${t.out}`, body);
  const langs = [...new Set(content.examples.flatMap((e) => e.variants.map((v) => v.language)))];
  console.log(
    `${t.out}: subRecipes=${content.subRecipes.length} options=${content.options.length} examples=${content.examples.length} langs=[${langs}] dataTables=${content.dataTables.length} yaml=${content.yaml ? 'yes' : 'no'}`
  );
}
