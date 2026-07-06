export interface CategorySubcategory {
  label: string;
  href: string;
  /** Total recipes in this subcategory (deep count). */
  totalRecipeCount: number;
}

export interface CategoryData {
  label: string;
  href: string;
  /** Human-readable purpose line from the generator (italic description). Not all categories have one. */
  description?: string;
  /** Total recipes across all subdirectories (deep count, not just direct children). */
  totalRecipeCount: number;
  /** Direct recipe pages at this level (not counting nested). */
  directRecipeCount: number;
  /** Whether the category contains composite (multi-step migration) recipes. */
  hasComposites: boolean;
  /** All subcategories at every depth, flattened. */
  subcategories: CategorySubcategory[];
}

export interface RecipeResult {
  displayName: string;
  fqName: string;
  href: string;
  description: string;
  categoryPath: string[];
  type: 'Composite recipe' | 'Single recipe';
  appLink: string;
}
