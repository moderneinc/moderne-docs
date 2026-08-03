export interface DataTableColumn { name: string; description: string; }
export interface SubRecipe { name: string; href: string; }
export interface ExampleVariant { language: string; before: string; after: string; diff?: string; newFile?: boolean; }
export interface ExampleParameter { parameter: string; value: string; }
export interface RecipeExample { name?: string; parameters?: ExampleParameter[]; unchanged?: { language: string; code: string }; variants: ExampleVariant[]; }
/** A jar that has to be installed alongside the recipe's own package for it to resolve at runtime. */
export interface CompanionJar { groupId: string; artifactId: string; versionKey?: string; }
export interface UsageProps {
  recipeName: string; displayName: string; groupId?: string; artifactId?: string; versionKey?: string;
  requiresConfiguration?: boolean; cliOptions?: string; useFullyQualifiedCliName?: boolean;
  npmPackage?: string; pipPackage?: string; nugetPackage?: string; goPackage?: string;
  companionJars?: CompanionJar[];
}
export interface RecipeOption { type: string; name: string; required: boolean; description: string; example?: string; }
export interface RecipeDataTable { name: string; displayName: string; description: string; columns: DataTableColumn[]; }
export interface ExtractedContent {
  tags: string[];
  infoAdmonition: string | null;
  preconditions: string[];
  subRecipes: SubRecipe[];
  yaml: string | null;
  options: RecipeOption[];
  usedBy: SubRecipe[];
  examples: RecipeExample[];
  usage: UsageProps;
  dataTables: RecipeDataTable[];
}
