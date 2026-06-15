// AUTO-EXTRACTED from docs/user-documentation/recipes/recipe-catalog/java/migrate/upgradejavaversion.md — real generated content for parity.
// Regenerate via scripts/.extract-preview-recipes.mjs if the source changes.

import type { ExtractedContent } from './recipeData';

export const upgradeJavaVersionContent: ExtractedContent = {
  "tags": [],
  "infoAdmonition": "This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.",
  "preconditions": [],
  "subRecipes": [
    {
      "name": "Use Maven compiler plugin release configuration",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/maven/usemavencompilerpluginreleaseconfiguration"
    },
    {
      "name": "Update Maven Java project properties",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/maven/updatemavenprojectpropertyjavaversion"
    },
    {
      "name": "Upgrade jenkins java version",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/jenkins/upgradejavaversion"
    },
    {
      "name": "Update Gradle project Java compatibility",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/gradle/updatejavacompatibility"
    },
    {
      "name": "Update SDKMan Java version",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/updatesdkman"
    },
    {
      "name": "Upgrade Docker image Java version",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradedockerimageversion"
    }
  ],
  "yaml": "---\ntype: specs.openrewrite.org/v1beta/recipe\nname: org.openrewrite.java.migrate.UpgradeJavaVersion\ndisplayName: Upgrade Java version\ndescription: |\n  Upgrade build plugin configuration to use the specified Java version. This recipe changes `java.toolchain.languageVersion` in `build.gradle(.kts)` of gradle projects, or maven-compiler-plugin target version and related settings. Will not downgrade if the version is newer than the specified version.\n\nrecipeList:\n  - org.openrewrite.maven.UseMavenCompilerPluginReleaseConfiguration\n  - org.openrewrite.maven.UpdateMavenProjectPropertyJavaVersion\n  - org.openrewrite.jenkins.UpgradeJavaVersion\n  - org.openrewrite.gradle.UpdateJavaCompatibility:\n      allowDowngrade: false\n  - org.openrewrite.java.migrate.UpdateSdkMan:\n      newVersion: null\n  - org.openrewrite.java.migrate.UpgradeDockerImageVersion\n",
  "options": [
    {
      "type": "Integer",
      "name": "version",
      "required": true,
      "description": "The Java version to upgrade to.",
      "example": "11"
    }
  ],
  "usedBy": [
    {
      "name": "Migrate from Micronaut 3.x to 4.x",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/micronaut/micronaut3to4migration.md"
    },
    {
      "name": "Migrate from Micronaut 4.x to 5.x",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/micronaut/micronaut4to5migration.md"
    },
    {
      "name": "Migrate to Java 8",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradetojava8.md"
    },
    {
      "name": "Upgrade Java to 11+ for Kafka clients",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/kafka/upgradejavaforkafkaclients"
    },
    {
      "name": "Upgrade Java to 17+ for Kafka broker/tools",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/kafka/upgradejavaforkafkabroker"
    },
    {
      "name": "Upgrade build to Java 11",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradebuildtojava11.md"
    },
    {
      "name": "Upgrade build to Java 17",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradebuildtojava17.md"
    },
    {
      "name": "Upgrade build to Java 21",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradebuildtojava21.md"
    },
    {
      "name": "Upgrade build to Java 24 for Kotlin pre-2.3",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradebuildtojava24.md"
    },
    {
      "name": "Upgrade build to Java 25 (non-Kotlin)",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradebuildtojava25.md"
    },
    {
      "name": "Upgrade build to Java 25 for Kotlin 2.3+",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/migrate/upgradebuildtojava25forkotlin.md"
    }
  ],
  "examples": [
    {
      "parameters": [
        {
          "parameter": "version",
          "value": "17"
        }
      ],
      "variants": [
        {
          "language": "pom.xml",
          "before": "<project>\n  <modelVersion>4.0.0</modelVersion>\n\n  <properties>\n    <java.version>1.8</java.version>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n  </properties>\n\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>",
          "after": "<project>\n  <modelVersion>4.0.0</modelVersion>\n\n  <properties>\n    <java.version>17</java.version>\n    <maven.compiler.source>17</maven.compiler.source>\n    <maven.compiler.target>17</maven.compiler.target>\n  </properties>\n\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>",
          "diff": "--- pom.xml\n+++ pom.xml\n@@ -5,3 +5,3 @@\n\n  <properties>\n-   <java.version>1.8</java.version>\n-   <maven.compiler.source>1.8</maven.compiler.source>\n-   <maven.compiler.target>1.8</maven.compiler.target>\n+   <java.version>17</java.version>\n+   <maven.compiler.source>17</maven.compiler.source>\n+   <maven.compiler.target>17</maven.compiler.target>\n  </properties>"
        }
      ]
    }
  ],
  "usage": {
    "recipeName": "org.openrewrite.java.migrate.UpgradeJavaVersion",
    "displayName": "Upgrade Java version",
    "groupId": "org.openrewrite.recipe",
    "artifactId": "rewrite-migrate-java",
    "versionKey": "VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA",
    "requiresConfiguration": true,
    "cliOptions": " --recipe-option \"version=11\""
  },
  "dataTables": [
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
