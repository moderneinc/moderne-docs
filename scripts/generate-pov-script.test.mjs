import { describe, it, expect } from 'vitest';
import { embedScript, extractRecipes, renderScript, validateRecipes, withoutEmbeddedScript } from './generate-pov-script.mjs';

const guide = [
  '## Code search',
  '',
  '### [Find Spring API endpoints](../catalog/findapiendpoints.md)',
  '',
  '#### CLI commands',
  '',
  '```bash',
  'mod run . --recipe org.openrewrite.java.spring.search.FindApiEndpoints',
  'mod study . --last-recipe-run --data-table ApiEndpoints',
  '```',
  '',
  '#### Recipe results',
  '',
  '```bash',
  'not a CLI command',
  '```',
].join('\n');

const catalogPage = [
  '<RecipeHeader fqName={"org.openrewrite.java.spring.search.FindApiEndpoints"} />',
  '<DataTableList tables={[{"name":"org.openrewrite.java.spring.table.ApiEndpoints"},{"name":"org.openrewrite.table.SourcesFileResults"}]}>',
].join('\n');

describe('extractRecipes', () => {
  it('collects bash blocks under CLI commands headings only', () => {
    expect(extractRecipes(guide)).toEqual([
      {
        section: 'Code search',
        title: 'Find Spring API endpoints',
        catalogLink: '../catalog/findapiendpoints.md',
        commands: 'mod run . --recipe org.openrewrite.java.spring.search.FindApiEndpoints\n' +
          'mod study . --last-recipe-run --data-table ApiEndpoints',
      },
    ]);
  });
});

describe('validateRecipes', () => {
  it('accepts data tables the linked recipe produces', () => {
    expect(validateRecipes(extractRecipes(guide), () => catalogPage)).toEqual([]);
  });

  it('flags a data table the linked recipe does not produce', () => {
    const recipes = extractRecipes(guide.replace('--data-table ApiEndpoints', '--data-table DatabaseColumnsUsed'));
    const errors = validateRecipes(recipes, () => catalogPage);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('studies DatabaseColumnsUsed');
  });

  it('flags a recipe that does not match its catalog link', () => {
    const recipes = extractRecipes(guide.replace('search.FindApiEndpoints', 'search.FindTypes'));
    expect(validateRecipes(recipes, () => catalogPage)[0]).toContain('runs org.openrewrite.java.spring.search.FindTypes');
  });

  it('flags a catalog link that does not resolve', () => {
    const errors = validateRecipes(extractRecipes(guide), () => {
      throw new Error('ENOENT');
    });
    expect(errors[0]).toContain('does not exist');
  });
});

describe('renderScript', () => {
  it('leaves out mod git apply', () => {
    const recipes = [{ section: 'AI', title: 'Prethink', commands: 'mod run . --recipe P\n\nmod git apply . --last-recipe-run' }];
    const script = renderScript(recipes, 'mod config recipes jar install a:b:LATEST');
    expect(script).toContain('mod run . --recipe P\n)');
    expect(script).not.toContain('mod git apply .');
  });
});

describe('embedScript', () => {
  it('replaces the embedded script and is ignored when extracting recipes', () => {
    const page = `${guide}\n\n{/* proof-of-value-script:start */}\n{/* proof-of-value-script:end */}\n`;
    const embedded = embedScript(page, 'mod run . --recipe X\n');
    expect(embedded).toContain('```bash title="proof-of-value.sh"\nmod run . --recipe X\n```');
    expect(embedScript(embedded, 'mod run . --recipe X\n')).toBe(embedded);
    expect(withoutEmbeddedScript(embedded)).not.toContain('--recipe X');
  });
});
