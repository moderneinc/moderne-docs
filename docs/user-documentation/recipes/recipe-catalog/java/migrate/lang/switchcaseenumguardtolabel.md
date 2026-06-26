---
title: "Use switch cases labels for enums"
sidebar_label: "Use switch cases labels for enums"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/lang/switchcaseenumguardtolabel" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use switch cases labels for enums"}
  description={"Use switch case labels when a guard is checking equality with an enum."}
  fqName={"org.openrewrite.java.migrate.lang.SwitchCaseEnumGuardToLabel"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/lang/SwitchCaseEnumGuardToLabel.java"}
/>

<RecipeHeader
  displayName={"Use switch cases labels for enums"}
  description={"Use switch case labels when a guard is checking equality with an enum."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.lang.SwitchCaseEnumGuardToLabel"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.lang.SwitchCaseEnumGuardToLabel"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/lang/switchcaseenumguardtolabel.md"}
/>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package suits;\npublic enum Suit {\n    CLUBS, DIAMONDS, HEARTS, SPADES, JOKER, SCORECARD\n}\n"},"variants":[{"language":"java","before":"import suits.Suit;\nclass Test {\n    void score(Object obj) {\n        switch (obj) {\n            case null -> System.out.println(\"You did not enter the test yet\");\n            case Suit s when s == Suit.CLUBS -> System.out.println(\"Clubs\");\n            case Suit s when s.equals(Suit.DIAMONDS) -> System.out.println(\"Diamonds\");\n            case Suit s when Suit.HEARTS.equals(s) -> {\n                System.out.println(\"Hearts\");\n            }\n            case Suit s when Suit.SPADES == s -> System.out.println(\"Spades\");\n            case Suit s when Suit.JOKER == s -> System.out.println(s);\n            case Integer i -> System.out.println(\"Sorry?\");\n            case String s -> System.out.println(\"Sorry?\");\n            default -> System.out.println(\"Sorry?\");\n        }\n    }\n}\n","after":"import suits.Suit;\nclass Test {\n    void score(Object obj) {\n        switch (obj) {\n            case null -> System.out.println(\"You did not enter the test yet\");\n            case Suit.CLUBS -> System.out.println(\"Clubs\");\n            case Suit.DIAMONDS -> System.out.println(\"Diamonds\");\n            case Suit.HEARTS -> {\n                System.out.println(\"Hearts\");\n            }\n            case Suit.SPADES -> System.out.println(\"Spades\");\n            case Suit.JOKER -> System.out.println(Suit.JOKER);\n            case Integer i -> System.out.println(\"Sorry?\");\n            case String s -> System.out.println(\"Sorry?\");\n            default -> System.out.println(\"Sorry?\");\n        }\n    }\n}\n","diff":"@@ -6,3 +6,3 @@\n        switch (obj) {\n            case null -> System.out.println(\"You did not enter the test yet\");\n-           case Suit s when s == Suit.CLUBS -> System.out.println(\"Clubs\");\n-           case Suit s when s.equals(Suit.DIAMONDS) -> System.out.println(\"Diamonds\");\n-           case Suit s when Suit.HEARTS.equals(s) -> {\n+           case Suit.CLUBS -> System.out.println(\"Clubs\");\n+           case Suit.DIAMONDS -> System.out.println(\"Diamonds\");\n+           case Suit.HEARTS -> {\n                System.out.println(\"Hearts\");\n@@ -11,2 +11,2 @@\n                System.out.println(\"Hearts\");\n            }\n-           case Suit s when Suit.SPADES == s -> System.out.println(\"Spades\");\n-           case Suit s when Suit.JOKER == s -> System.out.println(s);\n+           case Suit.SPADES -> System.out.println(\"Spades\");\n+           case Suit.JOKER -> System.out.println(Suit.JOKER);\n            case Integer i -> System.out.println(\"Sorry?\");\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.lang.SwitchCaseEnumGuardToLabel","displayName":"Use switch cases labels for enums","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

