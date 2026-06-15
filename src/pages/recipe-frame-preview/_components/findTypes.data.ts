// AUTO-EXTRACTED from docs/user-documentation/recipes/recipe-catalog/java/search/findtypes.md — real generated content for parity.
// Regenerate via scripts/.extract-preview-recipes.mjs if the source changes.

import type { ExtractedContent } from './recipeData';

export const findTypesContent: ExtractedContent = {
  "tags": [],
  "infoAdmonition": null,
  "preconditions": [],
  "subRecipes": [],
  "yaml": null,
  "options": [
    {
      "type": "String",
      "name": "fullyQualifiedTypeName",
      "required": true,
      "description": "A fully-qualified type name, that is used to find matching type references. Supports glob expressions. `java..*` finds every type from every subpackage of the `java` package.",
      "example": "java.util.List"
    },
    {
      "type": "Boolean",
      "name": "checkAssignability",
      "required": false,
      "description": "When enabled, find type references that are assignable to the provided type.",
      "example": ""
    }
  ],
  "usedBy": [
    {
      "name": "Find deprecated `PathMatcher` usage",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/framework/finddeprecatedpathmatcherusage"
    },
    {
      "name": "Report types deprecated or removed in WebLogic version 14.1.2",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/com/oracle/weblogic/rewrite/reportdeprecatedorremoved1412.md"
    },
    {
      "name": "Report types deprecated or removed in WebLogic version 15.1.1",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/com/oracle/weblogic/rewrite/reportdeprecatedorremoved1511.md"
    }
  ],
  "examples": [
    {
      "parameters": [
        {
          "parameter": "fullyQualifiedTypeName",
          "value": "a.A1"
        },
        {
          "parameter": "checkAssignability",
          "value": "false"
        }
      ],
      "variants": [
        {
          "language": "java",
          "before": "import a.A1;\npublic class B extends A1 {}",
          "after": "import a.A1;\npublic class B extends /*~~>*/A1 {}",
          "diff": "@@ -2,1 +2,1 @@\nimport a.A1;\n-public class B extends A1 {}\n+public class B extends /*~~>*/A1 {}\n"
        }
      ]
    }
  ],
  "usage": {
    "recipeName": "org.openrewrite.java.search.FindTypes",
    "displayName": "Find types",
    "groupId": "org.openrewrite",
    "artifactId": "rewrite-java",
    "versionKey": "VERSION_ORG_OPENREWRITE_REWRITE_JAVA",
    "requiresConfiguration": true,
    "cliOptions": " --recipe-option \"fullyQualifiedTypeName=java.util.List\""
  },
  "dataTables": [
    {
      "name": "org.openrewrite.java.table.TypeUses",
      "displayName": "Type uses",
      "description": "The source code of matching type uses.",
      "columns": [
        {
          "name": "Source file",
          "description": "The source file that the method call occurred in."
        },
        {
          "name": "Source",
          "description": "The source code of the type use."
        },
        {
          "name": "Concrete type",
          "description": "The concrete type in use, which may be a subtype of a searched type."
        }
      ]
    },
    {
      "name": "org.openrewrite.table.SourcesFileResults",
      "displayName": "Source files that had results",
      "description": "Source files that were modified by the recipe run.",
      "columns": [
        {
          "name": "Source path before the run",
          "description": "The source path of the file before the run. `null` when a source file was created during the run."
        },
        {
          "name": "Source path after the run",
          "description": "A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."
        },
        {
          "name": "Parent of the recipe that made changes",
          "description": "In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."
        },
        {
          "name": "Recipe that made changes",
          "description": "The specific recipe that made a change."
        },
        {
          "name": "Estimated time saving",
          "description": "An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."
        },
        {
          "name": "Cycle",
          "description": "The recipe cycle in which the change was made."
        }
      ]
    },
    {
      "name": "org.openrewrite.table.SearchResults",
      "displayName": "Source files that had search results",
      "description": "Search results that were found during the recipe run.",
      "columns": [
        {
          "name": "Source path of search result before the run",
          "description": "The source path of the file with the search result markers present."
        },
        {
          "name": "Source path of search result after run the run",
          "description": "A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."
        },
        {
          "name": "Result",
          "description": "The trimmed printed tree of the LST element that the marker is attached to."
        },
        {
          "name": "Description",
          "description": "The content of the description of the marker."
        },
        {
          "name": "Recipe that added the search marker",
          "description": "The specific recipe that added the Search marker."
        }
      ]
    },
    {
      "name": "org.openrewrite.table.SourcesFileErrors",
      "displayName": "Source files that errored on a recipe",
      "description": "The details of all errors produced by a recipe run.",
      "columns": [
        {
          "name": "Source path",
          "description": "The file that failed to parse."
        },
        {
          "name": "Recipe that made changes",
          "description": "The specific recipe that made a change."
        },
        {
          "name": "Stack trace",
          "description": "The stack trace of the failure."
        }
      ]
    },
    {
      "name": "org.openrewrite.table.RecipeRunStats",
      "displayName": "Recipe performance",
      "description": "Statistics used in analyzing the performance of recipes.",
      "columns": [
        {
          "name": "The recipe",
          "description": "The recipe whose stats are being measured both individually and cumulatively."
        },
        {
          "name": "Source file count",
          "description": "The number of source files the recipe ran over."
        },
        {
          "name": "Source file changed count",
          "description": "The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."
        },
        {
          "name": "Cumulative scanning time (ns)",
          "description": "The total time spent across the scanning phase of this recipe."
        },
        {
          "name": "Max scanning time (ns)",
          "description": "The max time scanning any one source file."
        },
        {
          "name": "Cumulative edit time (ns)",
          "description": "The total time spent across the editing phase of this recipe."
        },
        {
          "name": "Max edit time (ns)",
          "description": "The max time editing any one source file."
        }
      ]
    }
  ]
};
