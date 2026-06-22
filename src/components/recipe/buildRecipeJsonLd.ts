export interface RecipeJsonLdInput {
  displayName: string;
  description: string;
  fqName: string;
  languages: string[];
  license: string;
  sourceUrl?: string;
}

/** Deterministic schema.org SoftwareSourceCode metadata for a recipe (no AI). */
export function buildRecipeJsonLd(input: RecipeJsonLdInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: input.displayName,
    description: input.description,
    identifier: input.fqName,
    programmingLanguage: input.languages,
    license: input.license,
    ...(input.sourceUrl ? { codeRepository: input.sourceUrl } : {}),
  };
}
