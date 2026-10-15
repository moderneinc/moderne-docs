import { describe, it, expect } from 'vitest';
import { extractGuide, renderScript, validateRecipes } from './generate-pov-script.mjs';

const guide = [
  '## Setup',
  '',
  '```bash',
  'mod config recipes jar install org.openrewrite.recipe:rewrite-spring:LATEST',
  '```',
  '',
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
  '<RecipeHeader fqName={"org.openrewrite.java.spring.search.FindApiEndpoints"} artifact={"org.openrewrite.recipe:rewrite-spring"} />',
  '',
  '<DataTableList tables={[{"name":"org.openrewrite.java.spring.table.ApiEndpoints"},{"name":"org.openrewrite.table.SourcesFileResults"}]}>',
  '</DataTableList>',
].join('\n');

function validate(markdown, readCatalogPage = () => catalogPage) {
  const { recipes, modules } = extractGuide(markdown);
  return validateRecipes(recipes, modules, readCatalogPage);
}

describe('extractGuide', () => {
  it('collects bash blocks under CLI commands headings and every installed module', () => {
    expect(extractGuide(guide)).toEqual({
      recipes: [
        {
          section: 'Code search',
          title: 'Find Spring API endpoints',
          catalogLink: '../catalog/findapiendpoints.md',
          commands: 'mod run . --recipe org.openrewrite.java.spring.search.FindApiEndpoints\n' +
            'mod study . --last-recipe-run --data-table ApiEndpoints',
        },
      ],
      modules: ['org.openrewrite.recipe:rewrite-spring:LATEST'],
    });
  });

  it('reads modules from an install command split across lines', () => {
    const wrapped = guide.replace(' org.openrewrite.recipe:rewrite-spring:LATEST', ' \\\n  org.openrewrite.recipe:rewrite-spring:LATEST \\\n  org.openrewrite.recipe:rewrite-sql:LATEST  ');
    expect(extractGuide(wrapped).modules)
      .toEqual(['org.openrewrite.recipe:rewrite-spring:LATEST', 'org.openrewrite.recipe:rewrite-sql:LATEST']);
  });
});

describe('validateRecipes', () => {
  it('accepts commands that match the linked catalog page', () => {
    expect(validate(guide)).toEqual([]);
  });

  it('flags a data table the linked recipe does not produce', () => {
    const errors = validate(guide.replace('--data-table ApiEndpoints', '--data-table DatabaseColumnsUsed'));
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('studies DatabaseColumnsUsed');
  });

  it('flags a recipe that does not match its catalog link', () => {
    expect(validate(guide.replace('search.FindApiEndpoints', 'search.FindTypes'))[0])
      .toContain('runs org.openrewrite.java.spring.search.FindTypes');
  });

  it('flags a recipe module missing from the install command', () => {
    expect(validate(guide.replace('rewrite-spring:LATEST', 'rewrite-sql:LATEST'))[0])
      .toContain('needs org.openrewrite.recipe:rewrite-spring');
  });

  it('flags a catalog link that does not resolve', () => {
    const errors = validate(guide, () => {
      throw new Error('ENOENT');
    });
    expect(errors[0]).toContain('could not be read');
  });

  it('flags a catalog page without a recipe header', () => {
    expect(validate(guide, () => '# Not a recipe')[0]).toContain('has no RecipeHeader');
  });

  it('names the section for CLI commands outside a recipe heading', () => {
    const errors = validate(guide.replace('### [Find Spring API endpoints](../catalog/findapiendpoints.md)\n\n', ''));
    expect(errors[0]).toBe('"Code search" has no recipe catalog link in its heading');
  });
});

describe('renderScript', () => {
  it('hoists install commands into the single install step', () => {
    const recipes = [{
      section: 'DevCenter',
      title: 'DevCenter starter',
      commands: '# Install the DevCenter starter recipes\nmod config recipes jar install \\\n  a:b:LATEST\n\nmod run . --recipe D',
    }];
    const script = renderScript(recipes, ['a:b:LATEST']);
    expect(script.match(/mod config recipes jar install/g)).toHaveLength(1);
    expect(script).not.toContain('# Install the DevCenter starter recipes');
    expect(script).toContain('  set -e\n  mod run . --recipe D\n)');
  });
});
