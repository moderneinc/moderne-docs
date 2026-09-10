---
title: "Find prompt injection (OWASP LLM01)"
sidebar_label: "Find prompt injection (OWASP LLM01)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find prompt injection (OWASP LLM01)"}
  description={"Find HTTP request data that flows into an LLM prompt without intermediate validation. Sources are servlet request accessors (`getParameter`, `getHeader`, `getReader`, `getInputStream`), Spring `WebRequest` accessors, and Spring MVC handler parameters bound with `@RequestParam`, `@PathVariable`, `@RequestHeader`, `@RequestBody`, `@RequestPart`, `@CookieValue`, or `@MatrixVariable`; sinks are the message-content methods of the OpenAI, Anthropic, Azure AI Inference, LangChain4j, and Spring AI Java SDKs. A hit means the untrusted string reaches the model text without leaving the method and warrants a guardrail (allowlist, structured input, or provider-side guardrail)."}
  fqName={"org.openrewrite.ai.security.FindPromptInjection"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["OWASP-LLM01"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.ai.security.FindPromptInjection"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.ai.security.FindPromptInjection"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/ai/security/findpromptinjection.md"}
  moderneOnly
>

<RecipeHeader.Title>Find prompt injection (OWASP LLM01)</RecipeHeader.Title>

<RecipeHeader.Description>Find HTTP request data that flows into an LLM prompt without intermediate validation. Sources are servlet request accessors (`getParameter`, `getHeader`, `getReader`, `getInputStream`), Spring `WebRequest` accessors, and Spring MVC handler parameters bound with `@RequestParam`, `@PathVariable`, `@RequestHeader`, `@RequestBody`, `@RequestPart`, `@CookieValue`, or `@MatrixVariable`; sinks are the message-content methods of the OpenAI, Anthropic, Azure AI Inference, LangChain4j, and Spring AI Java SDKs. A hit means the untrusted string reaches the model text without leaving the method and warrants a guardrail (allowlist, structured input, or provider-side guardrail).</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import javax.servlet.http.HttpServletRequest;\nimport com.openai.models.chat.completions.ChatCompletionUserMessageParam;\n\nclass Controller {\n    void handle(HttpServletRequest req) {\n        String q = req.getParameter(\"q\");\n        ChatCompletionUserMessageParam.builder().content(q).build();\n    }\n}\n","after":"import javax.servlet.http.HttpServletRequest;\nimport com.openai.models.chat.completions.ChatCompletionUserMessageParam;\n\nclass Controller {\n    void handle(HttpServletRequest req) {\n        String q = /*~~(Untrusted input flows into an LLM prompt (OWASP LLM01).)~~>*/req.getParameter(\"q\");\n        ChatCompletionUserMessageParam.builder().content(q).build();\n    }\n}\n","diff":"@@ -6,1 +6,1 @@\nclass Controller {\n    void handle(HttpServletRequest req) {\n-       String q = req.getParameter(\"q\");\n+       String q = /*~~(Untrusted input flows into an LLM prompt (OWASP LLM01).)~~>*/req.getParameter(\"q\");\n        ChatCompletionUserMessageParam.builder().content(q).build();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.ai.security.FindPromptInjection","displayName":"Find prompt injection (OWASP LLM01)","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

