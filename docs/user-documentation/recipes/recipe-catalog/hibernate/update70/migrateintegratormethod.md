---
title: "Migrate Hibernate `Integrator#integrate` method"
sidebar_label: "Migrate Hibernate `Integrator#integrate` method"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Hibernate `Integrator#integrate` method"}
  description={"Migrate Hibernate `Integrator#integrate` method from deprecated signature to Hibernate 7 compatible signature. Changes `integrate(Metadata, SessionFactoryImplementor, SessionFactoryServiceRegistry)` to `integrate(Metadata, BootstrapContext, SessionFactoryImplementor)`."}
  fqName={"io.moderne.hibernate.update70.MigrateIntegratorMethod"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate Hibernate `Integrator#integrate` method"}
  description={"Migrate Hibernate `Integrator#integrate` method from deprecated signature to Hibernate 7 compatible signature. Changes `integrate(Metadata, SessionFactoryImplementor, SessionFactoryServiceRegistry)` to `integrate(Metadata, BootstrapContext, SessionFactoryImplementor)`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.update70.MigrateIntegratorMethod"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.update70.MigrateIntegratorMethod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/update70/migrateintegratormethod.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.hibernate.boot.Metadata;\nimport org.hibernate.engine.spi.SessionFactoryImplementor;\nimport org.hibernate.integrator.spi.Integrator;\nimport org.hibernate.service.Service;\nimport org.hibernate.service.spi.SessionFactoryServiceRegistry;\n\nclass ServiceRegistryUsingIntegrator implements Integrator {\n    @Override\n    public void integrate(Metadata metadata,\n                        SessionFactoryImplementor sessionFactory,\n                        SessionFactoryServiceRegistry serviceRegistry) {\n        SomeService service = serviceRegistry.getService(SomeService.class);\n    }\n\n    static class SomeService implements Service {\n    }\n}\n","after":"import org.hibernate.boot.Metadata;\nimport org.hibernate.boot.spi.BootstrapContext;\nimport org.hibernate.engine.spi.SessionFactoryImplementor;\nimport org.hibernate.integrator.spi.Integrator;\nimport org.hibernate.service.Service;\nimport org.hibernate.service.ServiceRegistry;\n\nclass ServiceRegistryUsingIntegrator implements Integrator {\n    @Override\n    public void integrate(Metadata metadata,\n                        BootstrapContext bootstrapContext,\n                        SessionFactoryImplementor sessionFactory) {\n        ServiceRegistry serviceRegistry = bootstrapContext.getServiceRegistry();\n        SomeService service = serviceRegistry.getService(SomeService.class);\n    }\n\n    static class SomeService implements Service {\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport org.hibernate.boot.Metadata;\n+import org.hibernate.boot.spi.BootstrapContext;\nimport org.hibernate.engine.spi.SessionFactoryImplementor;\n@@ -5,1 +6,1 @@\nimport org.hibernate.integrator.spi.Integrator;\nimport org.hibernate.service.Service;\n-import org.hibernate.service.spi.SessionFactoryServiceRegistry;\n+import org.hibernate.service.ServiceRegistry;\n\n@@ -10,2 +11,3 @@\n    @Override\n    public void integrate(Metadata metadata,\n-                       SessionFactoryImplementor sessionFactory,\n-                       SessionFactoryServiceRegistry serviceRegistry) {\n+                       BootstrapContext bootstrapContext,\n+                       SessionFactoryImplementor sessionFactory) {\n+       ServiceRegistry serviceRegistry = bootstrapContext.getServiceRegistry();\n        SomeService service = serviceRegistry.getService(SomeService.class);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.update70.MigrateIntegratorMethod","displayName":"Migrate Hibernate `Integrator#integrate` method","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

