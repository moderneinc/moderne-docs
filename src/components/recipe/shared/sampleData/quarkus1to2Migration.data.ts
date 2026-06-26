// AUTO-EXTRACTED from docs/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/quarkus1to2migration.md — real generated content for parity.
// Regenerate via scripts/.extract-preview-recipes.mjs if the source changes.

import type { ExtractedContent } from '../types';

export const quarkus1to2MigrationContent: ExtractedContent = {
  "tags": [],
  "infoAdmonition": "This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.",
  "preconditions": [],
  "subRecipes": [
    {
      "name": "Quarkus 1.13 migration from Quarkus 1.11",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/quarkus/quarkus1to1_13migration"
    },
    {
      "name": "Use `@GrpcClient`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/grpcserviceannotationtogrpcclient"
    },
    {
      "name": "Remove `avro-maven-plugin`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/removeavromavenplugin"
    },
    {
      "name": "Use `@Identifier(\"default-kafka-broker\")`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/useidentifierondefaultkafkabroker"
    },
    {
      "name": "Use `PanacheEntityBase` static methods",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/usepanacheentitybasestaticmethods"
    },
    {
      "name": "Use `Uni&lt;T extends PanacheEntityBase&gt;`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/usepanacheentitybaseunit"
    },
    {
      "name": "Use `Uni&lt;T extends ReactivePanacheMongoEntityBase&gt;`",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/usereactivepanachemongoentitybaseunit"
    },
    {
      "name": "Change property key",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/properties/changepropertykey"
    },
    {
      "name": "Change property key",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/properties/changepropertykey"
    },
    {
      "name": "Change property key",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/properties/changepropertykey"
    },
    {
      "name": "Change property value",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/properties/changepropertyvalue"
    },
    {
      "name": "Change property key",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/properties/changepropertykey"
    },
    {
      "name": "Change property value",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/properties/changepropertyvalue"
    },
    {
      "name": "Change type",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/changetype"
    },
    {
      "name": "Change type",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/changetype"
    },
    {
      "name": "Change type",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/changetype"
    },
    {
      "name": "Change Maven parent",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/maven/changeparentpom"
    },
    {
      "name": "Upgrade Gradle or Maven dependency versions",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion"
    },
    {
      "name": "Change Maven parent",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/maven/changeparentpom"
    },
    {
      "name": "Upgrade Gradle or Maven dependency versions",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion"
    },
    {
      "name": "Upgrade Maven plugin version",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion"
    },
    {
      "name": "Rename package name",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/changepackage"
    }
  ],
  "yaml": "---\ntype: specs.openrewrite.org/v1beta/recipe\nname: org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration\ndisplayName: Quarkus 2.x migration from Quarkus 1.x\ndescription: |\n  Migrates Quarkus 1.x to 2.x.\nrecipeList:\n  - org.openrewrite.quarkus.Quarkus1to1_13Migration\n  - org.openrewrite.quarkus.quarkus2.GrpcServiceAnnotationToGrpcClient\n  - org.openrewrite.quarkus.quarkus2.RemoveAvroMavenPlugin\n  - org.openrewrite.quarkus.quarkus2.UseIdentifierOnDefaultKafkaBroker\n  - org.openrewrite.quarkus.quarkus2.UsePanacheEntityBaseStaticMethods\n  - org.openrewrite.quarkus.quarkus2.UsePanacheEntityBaseUniT\n  - org.openrewrite.quarkus.quarkus2.UseReactivePanacheMongoEntityBaseUniT\n  - org.openrewrite.properties.ChangePropertyKey:\n      oldPropertyKey: smallrye.jwt.sign.key-location\n      newPropertyKey: smallrye.jwt.sign.key.location\n  - org.openrewrite.properties.ChangePropertyKey:\n      oldPropertyKey: smallrye.jwt.encrypt.key-location\n      newPropertyKey: smallrye.jwt.encrypt.key.location\n  - org.openrewrite.properties.ChangePropertyKey:\n      oldPropertyKey: quarkus.neo4j.pool.metrics-enabled\n      newPropertyKey: quarkus.neo4j.pool.metrics.enabled\n  - org.openrewrite.properties.ChangePropertyValue:\n      propertyKey: quarkus.quartz.force-start\n      newValue: forced\n  - org.openrewrite.properties.ChangePropertyKey:\n      oldPropertyKey: quarkus.quartz.force-start\n      newPropertyKey: quarkus.quartz.start-mode\n  - org.openrewrite.properties.ChangePropertyValue:\n      propertyKey: quarkus.quartz.store-type\n      newValue: jdbc-cmt\n      oldValue: db\n  - org.openrewrite.java.ChangeType:\n      oldFullyQualifiedTypeName: io.quarkus.qute.api.CheckedTemplate\n      newFullyQualifiedTypeName: io.quarkus.qute.CheckedTemplate\n  - org.openrewrite.java.ChangeType:\n      oldFullyQualifiedTypeName: io.quarkus.qute.api.ResourcePath\n      newFullyQualifiedTypeName: io.quarkus.qute.Location\n  - org.openrewrite.java.ChangeType:\n      oldFullyQualifiedTypeName: io.quarkus.mongodb.runtime.MongoClientName\n      newFullyQualifiedTypeName: io.quarkus.mongodb.MongoClientName\n  - org.openrewrite.maven.ChangeParentPom:\n      oldGroupId: io.quarkus\n      oldArtifactId: quarkus-universe-bom\n      newVersion: 2.x\n  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:\n      groupId: io.quarkus\n      artifactId: quarkus-universe-bom\n      newVersion: 2.x\n  - org.openrewrite.maven.ChangeParentPom:\n      oldGroupId: io.quarkus\n      oldArtifactId: quarkus-bom\n      newVersion: 2.x\n  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:\n      groupId: io.quarkus\n      artifactId: quarkus-bom\n      newVersion: 2.x\n  - org.openrewrite.maven.UpgradePluginVersion:\n      groupId: io.quarkus\n      artifactId: quarkus-maven-plugin\n      newVersion: 2.x\n  - org.openrewrite.java.ChangePackage:\n      oldPackageName: io.vertx.core.http.HttpMethod\n      newPackageName: io.quarkus.vertx.web.Route.HttpMethod\n      recursive: false\n",
  "options": [],
  "usedBy": [
    {
      "name": "Upgrade to Quarkus 3.26",
      "href": "https://docs.moderne.io/user-documentation/recipes/recipe-catalog/devcenter/upgradequarkus3_x"
    }
  ],
  "examples": [
    {
      "name": "Quarkus1to2MigrationPropertiesTest#smallryeJwt",
      "variants": [
        {
          "language": "properties",
          "before": "smallrye.jwt.sign.key-location=/keys/signing\nsmallrye.jwt.encrypt.key-location=/keys/encrypt",
          "after": "smallrye.jwt.sign.key.location=/keys/signing\nsmallrye.jwt.encrypt.key.location=/keys/encrypt",
          "diff": "@@ -1,2 +1,2 @@\n-smallrye.jwt.sign.key-location=/keys/signing\n-smallrye.jwt.encrypt.key-location=/keys/encrypt\n+smallrye.jwt.sign.key.location=/keys/signing\n+smallrye.jwt.encrypt.key.location=/keys/encrypt\n"
        }
      ]
    },
    {
      "name": "Quarkus1to2MigrationTest#quteResourcePathToLocation",
      "variants": [
        {
          "language": "java",
          "before": "import io.quarkus.qute.api.ResourcePath;\nimport io.quarkus.qute.Template;\n\nclass ReportGenerator {\n    @ResourcePath(\"reports/v1/report_01\")\n    Template report;\n\n    void generate() {\n        String result = report\n                .data(\"samples\", new Object())\n                .render();\n    }\n}",
          "after": "import io.quarkus.qute.Location;\nimport io.quarkus.qute.Template;\n\nclass ReportGenerator {\n    @Location(\"reports/v1/report_01\")\n    Template report;\n\n    void generate() {\n        String result = report\n                .data(\"samples\", new Object())\n                .render();\n    }\n}",
          "diff": "@@ -1,1 +1,1 @@\n-import io.quarkus.qute.api.ResourcePath;\n+import io.quarkus.qute.Location;\nimport io.quarkus.qute.Template;\n@@ -5,1 +5,1 @@\n\nclass ReportGenerator {\n-   @ResourcePath(\"reports/v1/report_01\")\n+   @Location(\"reports/v1/report_01\")\n    Template report;"
        }
      ]
    },
    {
      "name": "Quarkus1to2MigrationPropertiesTest#smallryeJwt",
      "variants": [
        {
          "language": "properties",
          "before": "smallrye.jwt.sign.key-location=/keys/signing\nsmallrye.jwt.encrypt.key-location=/keys/encrypt",
          "after": "smallrye.jwt.sign.key.location=/keys/signing\nsmallrye.jwt.encrypt.key.location=/keys/encrypt",
          "diff": "@@ -1,2 +1,2 @@\n-smallrye.jwt.sign.key-location=/keys/signing\n-smallrye.jwt.encrypt.key-location=/keys/encrypt\n+smallrye.jwt.sign.key.location=/keys/signing\n+smallrye.jwt.encrypt.key.location=/keys/encrypt\n"
        }
      ]
    },
    {
      "name": "Quarkus1to2MigrationTest#quteResourcePathToLocation",
      "variants": [
        {
          "language": "java",
          "before": "import io.quarkus.qute.api.ResourcePath;\nimport io.quarkus.qute.Template;\n\nclass ReportGenerator {\n    @ResourcePath(\"reports/v1/report_01\")\n    Template report;\n\n    void generate() {\n        String result = report\n                .data(\"samples\", new Object())\n                .render();\n    }\n}",
          "after": "import io.quarkus.qute.Location;\nimport io.quarkus.qute.Template;\n\nclass ReportGenerator {\n    @Location(\"reports/v1/report_01\")\n    Template report;\n\n    void generate() {\n        String result = report\n                .data(\"samples\", new Object())\n                .render();\n    }\n}",
          "diff": "@@ -1,1 +1,1 @@\n-import io.quarkus.qute.api.ResourcePath;\n+import io.quarkus.qute.Location;\nimport io.quarkus.qute.Template;\n@@ -5,1 +5,1 @@\n\nclass ReportGenerator {\n-   @ResourcePath(\"reports/v1/report_01\")\n+   @Location(\"reports/v1/report_01\")\n    Template report;"
        }
      ]
    }
  ],
  "usage": {
    "recipeName": "org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration",
    "displayName": "Quarkus 2.x migration from Quarkus 1.x",
    "groupId": "org.openrewrite.recipe",
    "artifactId": "rewrite-quarkus",
    "versionKey": "VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS"
  },
  "dataTables": [
    {
      "name": "org.openrewrite.maven.table.MavenMetadataFailures",
      "displayName": "Maven metadata failures",
      "description": "Attempts to resolve maven metadata that failed.",
      "columns": [
        {
          "name": "Group id",
          "description": "The groupId of the artifact for which the metadata download failed."
        },
        {
          "name": "Artifact id",
          "description": "The artifactId of the artifact for which the metadata download failed."
        },
        {
          "name": "Version",
          "description": "The version of the artifact for which the metadata download failed."
        },
        {
          "name": "Maven repository",
          "description": "The URL of the Maven repository that the metadata download failed on."
        },
        {
          "name": "Snapshots",
          "description": "Does the repository support snapshots."
        },
        {
          "name": "Releases",
          "description": "Does the repository support releases."
        },
        {
          "name": "Failure",
          "description": "The reason the metadata download failed."
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
