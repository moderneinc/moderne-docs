---
title: "Migrate to Hibernate 7.0.x (Moderne Edition)"
sidebar_label: "Migrate to Hibernate 7.0.x (Moderne Edition)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Hibernate 7.0.x"}
  description={"This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x."}
  fqName={"io.moderne.hibernate.MigrateToHibernate70"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate to Hibernate 7.0.x"}
  description={"This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.MigrateToHibernate70"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.MigrateToHibernate70"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate70-moderne-edition.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Migrate to Hibernate 6.6.x","href":"hibernate/migratetohibernate66-moderne-edition"},{"name":"Migrate to Hibernate 7.0.x","href":"hibernate/migratetohibernate70-community-edition"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Remove a Gradle or Maven dependency","href":"java/dependencies/removedependency"},{"name":"Add Gradle or Maven dependency","href":"java/dependencies/adddependency"},{"name":"Remove a Gradle or Maven dependency","href":"java/dependencies/removedependency"},{"name":"Remove a Gradle or Maven dependency","href":"java/dependencies/removedependency"},{"name":"Remove annotation","href":"java/removeannotation"},{"name":"Remove annotation","href":"java/removeannotation"},{"name":"Remove annotation","href":"java/removeannotation"},{"name":"Remove annotation","href":"java/removeannotation"},{"name":"Remove annotation","href":"java/removeannotation"},{"name":"Remove annotation","href":"java/removeannotation"},{"name":"Migrate `@JdbcType` and legacy `@Type` to `@JdbcTypeCode`","href":"hibernate/update70/migratejdbctypetojdbctypecode"},{"name":"Migrate Session interface method calls","href":"hibernate/update70/migratesessioninterface"},{"name":"Migrate Session save/update/delete method calls","href":"hibernate/update70/migratesessiontodefertojpa"},{"name":"Migrate NaturalIdLoadAccess method calls","href":"hibernate/update70/migratenaturalidloadaccess"},{"name":"Migrate NaturalIdMultiLoadAccess method calls","href":"hibernate/update70/migratenaturalidmultiloadaccess"},{"name":"Replace hibernate annotations with Jakarta variants","href":"hibernate/update70/replacehibernatewithjakartaannotations"},{"name":"Migrate to @TargetEmbeddable","href":"hibernate/update70/migratetotargetembeddable"},{"name":"Migrate implicit cascade=PERSIST for @Id and @MapsId associations","href":"hibernate/update70/addcascadepersisttoidmappedassociations"},{"name":"Replace Session.buildLockRequest with LockOptions","href":"hibernate/update70/replacesessionlockrequest"},{"name":"Migrate LockOptions to direct parameters","href":"hibernate/update70/migratelockoptionstodirectparameters"},{"name":"Null safe Transaction#getTimeout()","href":"hibernate/update70/unboxingtransactiontimeout"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Remove unnecessary cast to `Session` for `SessionFactory.createEntityManager()`","href":"hibernate/update70/removeunnecessarycasttosession"},{"name":"Migrate `setFlushMode()` to `setQueryFlushMode()`","href":"hibernate/update70/migratesetflushmodetosetqueryflushmode"},{"name":"Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` invocations","href":"hibernate/update70/usertypenullsafegetsharedsessioncontractimplementorrecipe"},{"name":"Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` implementations","href":"hibernate/update70/usertypesharedsessioncontractimplementor"},{"name":"Remove leaking of SessionFactoryImplementor from `org.hibernate.usertype.CompositeUserType` invocations and implementations","href":"hibernate/update70/compositeusertypesessionfactoryimplementor"},{"name":"Migrate `MetamodelImplementor` to Hibernate 7.0","href":"hibernate/update70/migratemetamodelimplementor"},{"name":"Migrate `Configurable.configure()` to use `GeneratorCreationContext`","href":"hibernate/update70/migrateconfigurabletogeneratorcreationcontext"},{"name":"Migrate Hibernate `Integrator#integrate` method","href":"hibernate/update70/migrateintegratormethod"},{"name":"Migrate JPQL `trunc()` to `cast(... as date)`","href":"hibernate/update70/migratejpqltrunctodatecast"},{"name":"Migrate @Query to @NativeQuery for unsupported JPQL","href":"hibernate/update70/migratequerytonativequery"},{"name":"Find native queries with enum parameters requiring SpEL conversion","href":"hibernate/update70/findnativequeryrawenumparameters"},{"name":"Migrate to Hibernate 7 JFR APIs","href":"hibernate/update70/migratetohibernate7jfr"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <properties>\n    <maven.compiler.release>17</maven.compiler.release>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.hibernate.orm</groupId>\n      <artifactId>hibernate-core</artifactId>\n      <version>6.5.0.Final</version>\n    </dependency>\n  </dependencies>\n</project>\n"},"variants":[]},{"unchanged":{"language":"xml","code":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <properties>\n    <maven.compiler.release>17</maven.compiler.release>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.hibernate.orm</groupId>\n      <artifactId>hibernate-core</artifactId>\n      <version>6.5.0.Final</version>\n    </dependency>\n  </dependencies>\n</project>\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.MigrateToHibernate70","displayName":"Migrate to Hibernate 7.0.x","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false,"useFullyQualifiedCliName":true}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

