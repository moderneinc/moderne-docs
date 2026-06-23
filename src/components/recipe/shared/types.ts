export interface DataTableColumn { name: string; description: string; }
export interface SubRecipe { name: string; href: string; }
export interface ExampleVariant { language: string; before: string; after: string; diff?: string; newFile?: boolean; }
export interface ExampleParameter { parameter: string; value: string; }
export interface RecipeExample { name?: string; parameters?: ExampleParameter[]; unchanged?: { language: string; code: string }; variants: ExampleVariant[]; }
export interface UsageProps {
  recipeName: string; displayName: string; groupId?: string; artifactId?: string; versionKey?: string;
  requiresConfiguration?: boolean; cliOptions?: string; useFullyQualifiedCliName?: boolean;
  npmPackage?: string; pipPackage?: string; nugetPackage?: string;
}
export interface RecipeOption { type: string; name: string; required: boolean; description: string; example?: string; }
export interface RecipeDataTable { name: string; displayName: string; description: string; columns: DataTableColumn[]; }
export interface RelatedRecipe { title: string; description: string; }
export interface GlanceStat { label: string; value: string; }
export interface SourceLink { label: string; href: string; }
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
export interface RecipePreviewData {
  key: string; tabLabel: string; displayName: string; fqName: string; description: string; license: string;
  type: 'Composite recipe' | 'Single recipe'; languages: string[]; tags: string[];
  appliesToLanguages?: string[]; alsoAvailableIn?: { language: string; href: string }[];
  sourceLinks: SourceLink[]; atAGlance: GlanceStat[]; infoAdmonition: string | null; preconditions: string[];
  options: RecipeOption[]; subRecipes: SubRecipe[]; yaml?: string | null; usedBy: SubRecipe[];
  examples: RecipeExample[]; usage: UsageProps; usageVariants?: { label: string; props: UsageProps }[];
  dataTables: RecipeDataTable[]; appLink: string; relatedRecipes: RelatedRecipe[]; rawMarkdownUrl: string;
}
