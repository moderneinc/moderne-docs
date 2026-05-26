import { describe, it, expect } from 'vitest';
import { checkMarkdown } from './check-markdown.mjs';

// ---------------------------------------------------------------------------
// Rule: no-bare-mdx-expression
// ---------------------------------------------------------------------------

describe('no-bare-mdx-expression', () => {
  it('flags a bare {identifier} in prose', async () => {
    const md = `Must be of the form https://{account}.blob.core.windows.net/{container}.`;
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues).toHaveLength(2);
    expect(issues[0]).toMatchObject({ rule: 'no-bare-mdx-expression', line: 1 });
    expect(issues[0].message).toContain('{account}');
    expect(issues[1].message).toContain('{container}');
  });

  it('flags a bare {identifier} in a table cell', async () => {
    const md = [
      '| Option | Description |',
      '| --- | --- |',
      '| `--api-url` | URL of the form https://api.example.com/Accounts/{SID}/Messages.json |',
    ].join('\n');
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues).toHaveLength(1);
    expect(issues[0].message).toContain('{SID}');
  });

  it('does not flag {identifier} inside inline code backticks', async () => {
    const md = 'Use the form `https://{account}.blob.core.windows.net/{container}`.';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues).toHaveLength(0);
  });

  it('does not flag {identifier} inside a fenced code block', async () => {
    const md = [
      'Configure the URL:',
      '',
      '```',
      'https://{account}.blob.core.windows.net/{container}',
      '```',
    ].join('\n');
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues).toHaveLength(0);
  });

  it('does not flag JSX boolean attributes like prop={false}', async () => {
    const md = '<RecipeBuilder showGradle={false} showMaven={false} />';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues).toHaveLength(0);
  });

  it('does not flag JS literals: {true}, {false}, {null}, {undefined}', async () => {
    const md = 'Values: {true}, {false}, {null}, {undefined}.';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues).toHaveLength(0);
  });

  it('does not flag {identifier} inside frontmatter', async () => {
    const md = [
      '---',
      'title: Deploy to {account}',
      '---',
      '',
      'Normal content here.',
    ].join('\n');
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues).toHaveLength(0);
  });

  it('reports the correct line number', async () => {
    const md = [
      '# Title',
      '',
      'Normal line.',
      '',
      'The URL is https://{account}.blob.core.windows.net/.',
    ].join('\n');
    const issues = (await checkMarkdown(md, 'test.md')).filter(i => i.rule === 'no-bare-mdx-expression');
    expect(issues).toHaveLength(1);
    expect(issues[0].line).toBe(5);
  });
});

// ---------------------------------------------------------------------------
// Rule: no-h1-in-body
//
// Docusaurus renders the frontmatter `title` as the page <h1>. A # heading
// in the document body creates a double-h1, breaking page layout.
// ---------------------------------------------------------------------------

describe('no-h1-in-body', () => {
  it('flags a # h1 when frontmatter also has title: (double-h1 bug)', async () => {
    const md = ['---', 'title: My Page', '---', '', '# My Page'].join('\n');
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'no-h1-in-body')).toHaveLength(1);
    expect(issues.find(i => i.rule === 'no-h1-in-body')).toMatchObject({ severity: 'warning' });
  });

  it('does not flag # h1 when frontmatter has no title (body h1 is the page title)', async () => {
    const md = ['---', 'description: A description.', '---', '', '# My Page'].join('\n');
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'no-h1-in-body')).toHaveLength(0);
  });

  it('does not flag # h1 with no frontmatter at all', async () => {
    const md = '# My Page\n\nContent here.';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'no-h1-in-body')).toHaveLength(0);
  });

  it('does not flag ## h2 headings even with title in frontmatter', async () => {
    const md = ['---', 'title: My Page', '---', '', '## Section heading'].join('\n');
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'no-h1-in-body')).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Rule: valid-admonition-type
//
// :::badtype silently renders as nothing in Docusaurus. Only the five
// standard types are valid: note, tip, info, warning, danger, caution.
// ---------------------------------------------------------------------------

describe('valid-admonition-type', () => {
  it('flags an unknown admonition type', async () => {
    const md = ':::important\nSome content.\n:::';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'valid-admonition-type')).toHaveLength(1);
  });

  it('does not flag :::note', async () => {
    const md = ':::note\nSome content.\n:::';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'valid-admonition-type')).toHaveLength(0);
  });

  it('does not flag :::warning', async () => {
    const md = ':::warning\nSome content.\n:::';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'valid-admonition-type')).toHaveLength(0);
  });

  it('does not flag :::tip, :::info, :::danger, :::caution, :::summary', async () => {
    const md = [
      ':::tip\nA\n:::',
      '',
      ':::info\nB\n:::',
      '',
      ':::danger\nC\n:::',
      '',
      ':::caution\nD\n:::',
      '',
      ':::summary\nE\n:::',
    ].join('\n');
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'valid-admonition-type')).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Rule: unordered-list-marker-style
//
// STYLE_GUIDE Rule 3: use * for bullets, not -. Exception: docs/releases/
// files may use dashes (changelog convention).
// ---------------------------------------------------------------------------

describe('unordered-list-marker-style', () => {
  it('flags dash bullets outside docs/releases/', async () => {
    const md = '- Item one\n- Item two';
    const issues = await checkMarkdown(md, 'docs/guide.md');
    expect(issues.filter(i => i.rule === 'unordered-list-marker-style').length).toBeGreaterThan(0);
  });

  it('does not flag asterisk bullets', async () => {
    const md = '* Item one\n* Item two';
    const issues = await checkMarkdown(md, 'docs/guide.md');
    expect(issues.filter(i => i.rule === 'unordered-list-marker-style')).toHaveLength(0);
  });

  it('allows dash bullets in docs/releases/ files', async () => {
    const md = '- Item one\n- Item two';
    const issues = await checkMarkdown(md, 'docs/releases/changelog.md');
    expect(issues.filter(i => i.rule === 'unordered-list-marker-style')).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Rule: no-consecutive-blank-lines
//
// STYLE_GUIDE Rule 21: at most one blank line between content blocks.
// ---------------------------------------------------------------------------

describe('no-consecutive-blank-lines', () => {
  it('flags two consecutive blank lines', async () => {
    const md = 'Paragraph one.\n\n\nParagraph two.';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'no-consecutive-blank-lines').length).toBeGreaterThan(0);
  });

  it('does not flag a single blank line between paragraphs', async () => {
    const md = 'Paragraph one.\n\nParagraph two.';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'no-consecutive-blank-lines')).toHaveLength(0);
  });

  it('does not flag consecutive blank lines in recipe-catalog files (generated content)', async () => {
    const md = 'Paragraph one.\n\n\nParagraph two.';
    const issues = await checkMarkdown(md, 'docs/user-documentation/recipes/recipe-catalog/SomeRecipe.md');
    expect(issues.filter(i => i.rule === 'no-consecutive-blank-lines')).toHaveLength(0);
  });

  it('does not flag consecutive blank lines in recipe lists files (generated content)', async () => {
    const md = 'Paragraph one.\n\n\nParagraph two.';
    const issues = await checkMarkdown(md, 'docs/user-documentation/recipes/lists/all-recipes.md');
    expect(issues.filter(i => i.rule === 'no-consecutive-blank-lines')).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Rule: unordered-list-marker-style (generated file exclusions)
// ---------------------------------------------------------------------------

describe('unordered-list-marker-style (generated exclusions)', () => {
  it('does not flag dash bullets in recipe lists files (generated content)', async () => {
    const md = '- Item one\n- Item two';
    const issues = await checkMarkdown(md, 'docs/user-documentation/recipes/lists/all-recipes.md');
    expect(issues.filter(i => i.rule === 'unordered-list-marker-style')).toHaveLength(0);
  });

  it('does not flag dash bullets in recipe-catalog files (generated content)', async () => {
    const md = '- Item one\n- Item two';
    const issues = await checkMarkdown(md, 'docs/user-documentation/recipes/recipe-catalog/SomeRecipe.md');
    expect(issues.filter(i => i.rule === 'unordered-list-marker-style')).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Rule: image-alt-text
//
// STYLE_GUIDE Rule 19: all images must have meaningful, descriptive alt text.
// Reported as a warning (not error) so existing content can be fixed
// incrementally.
// ---------------------------------------------------------------------------

describe('image-alt-text', () => {
  it('flags an image with empty alt text as a warning', async () => {
    const md = '![](./screenshot.png)';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'image-alt-text')).toHaveLength(1);
    expect(issues.find(i => i.rule === 'image-alt-text')).toMatchObject({ severity: 'warning' });
  });

  it('does not flag an image with descriptive alt text', async () => {
    const md = '![Screenshot of the recipe builder dashboard](./screenshot.png)';
    const issues = await checkMarkdown(md, 'test.md');
    expect(issues.filter(i => i.rule === 'image-alt-text')).toHaveLength(0);
  });
});
