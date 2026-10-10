---
title: "Migrate `@AutoValue` classes to Kotlin data classes"
sidebar_label: "Migrate `@AutoValue` classes to Kotlin data classes"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `@AutoValue` classes to Kotlin data classes"}
  description={"Replaces a Java or Kotlin `@AutoValue` abstract class with a Kotlin `data class` and rewrites its Kotlin and Java callers: `x()` accessors become `x` property reads (`getX()` in Java) and the static or companion `create(..)` factory becomes the constructor. A Java class becomes a `.kt` file in place of the `.java` file. Only classes consisting of abstract accessors and a single forwarding factory are converted; every `@AutoValue` class is listed in the `AutoValueClasses` data table with the reason it was skipped."}
  fqName={"org.openrewrite.kotlin.migrate.autovalue.AutoValueToDataClass"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.migrate.autovalue.AutoValueToDataClass"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.migrate.autovalue.AutoValueToDataClass"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/migrate/autovalue/autovaluetodataclass.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `@AutoValue` classes to Kotlin data classes</RecipeHeader.Title>

<RecipeHeader.Description>Replaces a Java or Kotlin `@AutoValue` abstract class with a Kotlin `data class` and rewrites its Kotlin and Java callers: `x()` accessors become `x` property reads (`getX()` in Java) and the static or companion `create(..)` factory becomes the constructor. A Java class becomes a `.kt` file in place of the `.java` file. Only classes consisting of abstract accessors and a single forwarding factory are converted; every `@AutoValue` class is listed in the `AutoValueClasses` data table with the reason it was skipped.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"keepJavaAccessors","required":false,"description":"Give each property a `@get:JvmName` matching the AutoValue accessor, so Java call sites such as `foo.bar()` keep compiling unchanged instead of being rewritten to `foo.getBar()`. Factories still become constructors. Default `false`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"keepJavaAccessors","value":"null"}],"variants":[{"language":"java","before":"package com.example.app;\n\nimport com.example.Money;\n\nclass Checkout {\n    String describe(Money price) {\n        return price.currency() + price.amount();\n    }\n\n    Money free() {\n        return Money.create(\"EUR\", 0L, null);\n    }\n}\n","after":"package com.example.app;\n\nimport com.example.Money;\n\nclass Checkout {\n    String describe(Money price) {\n        return price.getCurrency() + price.getAmount();\n    }\n\n    Money free() {\n        return new Money(\"EUR\", 0L, null);\n    }\n}\n","diff":"@@ -7,1 +7,1 @@\nclass Checkout {\n    String describe(Money price) {\n-       return price.currency() + price.amount();\n+       return price.getCurrency() + price.getAmount();\n    }\n@@ -11,1 +11,1 @@\n\n    Money free() {\n-       return Money.create(\"EUR\", 0L, null);\n+       return new Money(\"EUR\", 0L, null);\n    }\n","newFile":false},{"language":"kotlin","before":"package com.example\n\nimport com.google.auto.value.AutoValue\n\n@AutoValue\nabstract class Money {\n    abstract fun currency(): String\n    abstract fun amount(): Long\n    abstract fun note(): String?\n\n    companion object {\n        @JvmStatic\n        fun create(currency: String, amount: Long, note: String?): Money = AutoValue_Money(currency, amount, note)\n    }\n}\n","after":"package com.example\n\ndata class Money(\n    val currency: String,\n    val amount: Long,\n    val note: String?,\n)\n","diff":"@@ -3,1 +3,5 @@\npackage com.example\n\n-import com.google.auto.value.AutoValue\n+data class Money(\n+   val currency: String,\n+   val amount: Long,\n+   val note: String?,\n+)\n\n@@ -5,12 +9,0 @@\nimport com.google.auto.value.AutoValue\n\n-@AutoValue\n-abstract class Money {\n-   abstract fun currency(): String\n-   abstract fun amount(): Long\n-   abstract fun note(): String?\n-\n-   companion object {\n-       @JvmStatic\n-       fun create(currency: String, amount: Long, note: String?): Money = AutoValue_Money(currency, amount, note)\n-   }\n-}\n-\n","newFile":false},{"language":"kotlin","before":"package com.example.app\n\nimport com.example.Money\n\nfun describe(price: Money): String = price.currency() + price.amount()\n\nfun free(): Money = Money.create(\"EUR\", 0L, null)\n","after":"package com.example.app\n\nimport com.example.Money\n\nfun describe(price: Money): String = price.currency + price.amount\n\nfun free(): Money = Money(\"EUR\", 0L, null)\n","diff":"@@ -5,1 +5,1 @@\nimport com.example.Money\n\n-fun describe(price: Money): String = price.currency() + price.amount()\n+fun describe(price: Money): String = price.currency + price.amount\n\n@@ -7,1 +7,1 @@\nfun describe(price: Money): String = price.currency() + price.amount()\n\n-fun free(): Money = Money.create(\"EUR\", 0L, null)\n+fun free(): Money = Money(\"EUR\", 0L, null)\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.migrate.autovalue.AutoValueToDataClass","displayName":"Migrate `@AutoValue` classes to Kotlin data classes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-kotlin","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_KOTLIN","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"keepJavaAccessors=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kotlin.migrate.autovalue.AutoValueClasses","displayName":"AutoValue classes","description":"Every `@AutoValue` class found, with the reason it was not migrated to a data class where applicable.","columns":[{"name":"Source path","description":"The source file declaring the class."},{"name":"Class name","description":"The fully qualified name of the `@AutoValue` class."},{"name":"Skip reason","description":"Why the class was not migrated; empty when it was."},{"name":"Features","description":"What the class uses beyond plain accessors (builder, `@Memoized`, supertypes, adapters, custom methods) and how its builder is used at call sites."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

