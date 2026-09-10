---
title: "Find LLM freeform output flowing into a structured parser (OWASP LLM01)"
sidebar_label: "Find LLM freeform output flowing into a structured parser (OWASP LLM01)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find LLM freeform output flowing into a structured parser (OWASP LLM01)"}
  description={"Find code where the plain-text output of an LLM chat call flows into a structured parser (`ObjectMapper.readValue`/`readTree`, `Gson.fromJson`). Model output is read through the LangChain4j, Spring AI, OpenAI, Anthropic, and Azure AI Inference Java SDKs. The caller expects JSON but nothing enforced structured output on the model call — an attacker who influences the prompt (any LLM01 vector) can break parsing or steer downstream logic by producing content the parser accepts as valid but that carries injected instructions. Fix by switching to a schema-enforcing call: LangChain4j structured output APIs, Spring AI `.entity(...)`, or provider-native JSON mode / tool use. Taint tracking follows the value through user-defined transformations between the model call and the parser."}
  fqName={"org.openrewrite.ai.security.FindMissingStructuredOutput"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["OWASP-LLM01"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.ai.security.FindMissingStructuredOutput"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.ai.security.FindMissingStructuredOutput"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/ai/security/findmissingstructuredoutput.md"}
  moderneOnly
>

<RecipeHeader.Title>Find LLM freeform output flowing into a structured parser (OWASP LLM01)</RecipeHeader.Title>

<RecipeHeader.Description>Find code where the plain-text output of an LLM chat call flows into a structured parser (`ObjectMapper.readValue`/`readTree`, `Gson.fromJson`). Model output is read through the LangChain4j, Spring AI, OpenAI, Anthropic, and Azure AI Inference Java SDKs. The caller expects JSON but nothing enforced structured output on the model call — an attacker who influences the prompt (any LLM01 vector) can break parsing or steer downstream logic by producing content the parser accepts as valid but that carries injected instructions. Fix by switching to a schema-enforcing call: LangChain4j structured output APIs, Spring AI `.entity(...)`, or provider-native JSON mode / tool use. Taint tracking follows the value through user-defined transformations between the model call and the parser.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import dev.langchain4j.model.chat.ChatModel;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nclass Extractor {\n    record Data(String name, int age) {}\n    Data extract(ChatModel model, ObjectMapper mapper) throws Exception {\n        String reply = model.chat(\"Return JSON with name and age\");\n        return mapper.readValue(reply, Data.class);\n    }\n}\n","after":"import dev.langchain4j.model.chat.ChatModel;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nclass Extractor {\n    record Data(String name, int age) {}\n    Data extract(ChatModel model, ObjectMapper mapper) throws Exception {\n        String reply = /*~~(Freeform LLM output flows into a structured parser — no schema enforced on the model call (OWASP LLM01).)~~>*/model.chat(\"Return JSON with name and age\");\n        return mapper.readValue(reply, Data.class);\n    }\n}\n","diff":"@@ -7,1 +7,1 @@\n    record Data(String name, int age) {}\n    Data extract(ChatModel model, ObjectMapper mapper) throws Exception {\n-       String reply = model.chat(\"Return JSON with name and age\");\n+       String reply = /*~~(Freeform LLM output flows into a structured parser — no schema enforced on the model call (OWASP LLM01).)~~>*/model.chat(\"Return JSON with name and age\");\n        return mapper.readValue(reply, Data.class);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.ai.security.FindMissingStructuredOutput","displayName":"Find LLM freeform output flowing into a structured parser (OWASP LLM01)","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

