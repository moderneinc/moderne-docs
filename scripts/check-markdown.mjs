#!/usr/bin/env node
/**
 * Generalized markdown linter using the MDX AST.
 *
 * Parses .md/.mdx files with the same unified + remark-mdx pipeline that
 * Docusaurus uses, so lint results faithfully reflect what the build sees.
 * Built on remark-lint so any remark-lint plugin can be dropped in.
 *
 * Usage:
 *   node scripts/check-markdown.mjs [files...]
 *   node scripts/check-markdown.mjs docs/**\/*.md
 *
 * API (for testing):
 *   import { checkMarkdown } from './check-markdown.mjs';
 *   const issues = await checkMarkdown(content, filename);
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdx from 'remark-mdx';
import remarkDirective from 'remark-directive';
import remarkLint from 'remark-lint';
import { lintRule } from 'unified-lint-rule';
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';
import remarkLintNoConsecutiveBlankLines from 'remark-lint-no-consecutive-blank-lines';
import { visit } from 'unist-util-visit';
import { VFile } from 'vfile';
import { readFileSync } from 'fs';
import { resolve, relative } from 'path';

// ---------------------------------------------------------------------------
// Custom rule: no-bare-mdx-expression
//
// A bare {Identifier} in markdown prose is a valid MDX expression that MDX
// compiles into a JSX interpolation. If the identifier is not defined in scope
// (e.g. {account} from a URL template like https://{account}.example.com),
// SSG rendering throws `ReferenceError: account is not defined` at build time.
// ---------------------------------------------------------------------------

const JS_LITERALS = new Set([
  'true', 'false', 'null', 'undefined', 'void', 'NaN', 'Infinity',
]);

const noBareExpression = lintRule(
  { origin: 'remark-lint:no-bare-mdx-expression' },
  (tree, file) => {
    visit(tree, 'mdxTextExpression', (node) => {
      const val = node.value.trim();
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(val)) return;
      if (JS_LITERALS.has(val)) return;
      file.message(
        `Bare MDX expression {${val}} will throw ReferenceError at SSG. ` +
        `Wrap in backticks if literal: \`{${val}}\``,
        node,
      );
    });
  },
);

// ---------------------------------------------------------------------------
// Custom rule: no-h1-in-body
//
// Docusaurus renders the frontmatter `title` field as the page <h1>. A
// # heading in the document body creates a double-h1, breaking page layout.
// ---------------------------------------------------------------------------

const noH1InBody = lintRule(
  { origin: 'remark-lint:no-h1-in-body' },
  (tree, file) => {
    const frontmatter = tree.children.find(n => n.type === 'yaml');
    if (!frontmatter || !/^title:/m.test(frontmatter.value)) return;
    visit(tree, 'heading', (node) => {
      if (node.depth === 1) {
        file.message(
          'Do not use # h1 headings when frontmatter has title:. ' +
          'Docusaurus injects the frontmatter title as h1, creating a double-h1.',
          node,
        );
      }
    });
  },
);

// ---------------------------------------------------------------------------
// Custom rule: valid-admonition-type
//
// :::badtype silently renders as nothing in Docusaurus. Only the standard
// Docusaurus admonition types are valid.
// ---------------------------------------------------------------------------

const VALID_ADMONITION_TYPES = new Set([
  'note', 'tip', 'info', 'warning', 'danger', 'caution',
  'summary', // custom type configured in docusaurus.config.ts
]);

const validAdmonitionType = lintRule(
  { origin: 'remark-lint:valid-admonition-type' },
  (tree, file) => {
    visit(tree, 'containerDirective', (node) => {
      if (!VALID_ADMONITION_TYPES.has(node.name)) {
        file.message(
          `Unknown admonition type "${node.name}". ` +
          `Valid types: ${[...VALID_ADMONITION_TYPES].join(', ')}.`,
          node,
        );
      }
    });
  },
);

// ---------------------------------------------------------------------------
// Custom rule: image-alt-text
//
// STYLE_GUIDE Rule 19: all images must have meaningful, descriptive alt text.
// ---------------------------------------------------------------------------

const imageAltText = lintRule(
  { origin: 'remark-lint:image-alt-text' },
  (tree, file) => {
    visit(tree, 'image', (node) => {
      if (!node.alt || node.alt.trim() === '') {
        file.message('Images must have descriptive alt text (Rule 19).', node);
      }
    });
  },
);

// ---------------------------------------------------------------------------
// Processor
// ---------------------------------------------------------------------------

const processor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkMdx)
  .use(remarkDirective)
  .use(remarkLint)
  // errors — build-breaking or silent failures
  .use(noBareExpression, [2])
  .use(validAdmonitionType, [2])
  // warnings — style guide, fixed incrementally
  .use(noH1InBody, [1])
  .use(remarkLintUnorderedListMarkerStyle, [1, '*'])
  .use(remarkLintNoConsecutiveBlankLines, [1])
  .use(imageAltText, [1]);

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Lint markdown content and return an array of issues.
 * @param {string} content   Raw markdown/MDX source.
 * @param {string} filename  Used for path-based rule exceptions.
 * @returns {Promise<{ rule: string, line: number, col: number, message: string, severity: string }[]>}
 */
export async function checkMarkdown(content, filename) {
  const file = new VFile({ value: content, path: filename });
  const tree = processor.parse(file);
  await processor.run(tree, file);
  const isReleasesFile = /\bdocs[\\/]releases[\\/]/.test(filename ?? '');
  const isGeneratedFile = /\bdocs[\\/]user-documentation[\\/]recipes[\\/](recipe-catalog|lists)[\\/]/.test(filename ?? '');
  const GENERATED_EXCLUDED = new Set(['no-h1-in-body', 'no-consecutive-blank-lines', 'unordered-list-marker-style']);
  return file.messages
    .filter(msg => !(isReleasesFile && msg.ruleId === 'unordered-list-marker-style'))
    .filter(msg => !(isGeneratedFile && GENERATED_EXCLUDED.has(msg.ruleId)))
    .map(msg => {
      const start = msg.place?.start ?? msg.place;
      return {
        rule: msg.ruleId ?? msg.source ?? 'unknown',
        line: start?.line ?? 0,
        col: start?.column ?? 0,
        message: msg.reason,
        severity: msg.fatal === true ? 'error' : 'warning',
      };
    });
}

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

function printIssue(file, issue) {
  const loc = `${file}:${issue.line}:${issue.col}`;
  const tag = issue.severity === 'error' ? 'error' : 'warning';
  console.log(`${loc}: [${tag}] (${issue.rule}) ${issue.message}`);
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node scripts/check-markdown.mjs <file> [file...]');
    process.exit(2);
  }

  let errorCount = 0;
  for (const pattern of args) {
    let files;
    try {
      readFileSync(pattern);
      files = [pattern];
    } catch {
      const { execSync } = await import('child_process');
      const base = pattern.replace(/\/\*\*.*$/, '') || '.';
      const ext = pattern.match(/\*\.(m?d[x]?)$/)?.[1] ?? 'md';
      const found = execSync(`find ${base} -name "*.${ext}" -not -path "*/node_modules/*"`)
        .toString().trim().split('\n').filter(Boolean);
      files = found;
    }

    for (const file of files) {
      const content = readFileSync(resolve(file), 'utf8');
      const issues = await checkMarkdown(content, file);
      for (const issue of issues) {
        printIssue(relative(process.cwd(), file), issue);
        if (issue.severity === 'error') errorCount++;
      }
    }
  }

  if (errorCount > 0) {
    console.error(`\n${errorCount} error(s) found.`);
    process.exit(1);
  }
}
