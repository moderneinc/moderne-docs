import { describe, it, expect } from 'vitest';
import { buildRecipeJsonLd } from './buildRecipeJsonLd';

describe('buildRecipeJsonLd', () => {
  it('builds a SoftwareSourceCode object from recipe fields', () => {
    const ld = buildRecipeJsonLd({
      displayName: 'Common static analysis',
      description: 'Applies static analysis recipes.',
      fqName: 'org.openrewrite.staticanalysis.CommonStaticAnalysis',
      languages: ['Java'],
      license: 'Apache License 2.0',
      sourceUrl: 'https://github.com/openrewrite/rewrite-static-analysis',
    });
    expect(ld['@context']).toBe('https://schema.org');
    expect(ld['@type']).toBe('SoftwareSourceCode');
    expect(ld.name).toBe('Common static analysis');
    expect(ld.programmingLanguage).toEqual(['Java']);
    expect(ld.codeRepository).toBe('https://github.com/openrewrite/rewrite-static-analysis');
    expect(ld.identifier).toBe('org.openrewrite.staticanalysis.CommonStaticAnalysis');
  });

  it('omits codeRepository when no sourceUrl is provided', () => {
    const ld = buildRecipeJsonLd({
      displayName: 'X',
      description: 'd',
      fqName: 'org.x.X',
      languages: [],
      license: 'Apache License 2.0',
    });
    expect('codeRepository' in ld).toBe(false);
  });
});
