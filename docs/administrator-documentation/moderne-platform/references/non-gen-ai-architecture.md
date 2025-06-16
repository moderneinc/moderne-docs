---
sidebar_label: Non-generative AI architecture
description: A detailed technical document about all of the places Moderne uses non-generative AI.
---

# Non-generative AI architecture

Moderne offers a variety of features and recipes that utilize AI to enhance your experience. All of these are highly customizable so that you can choose to only enable or use the ones you're comfortable with.

This architecture doc will walk through all of the AI components that **do not** use generative AI. In other words, these AI components analyze existing data without creating new content.

:::warning
All AI tools and features may produce incorrect or incomplete results. Please ensure that you thoroughly review any results for clarity and accuracy before sharing or using.

**Note**: Our general philosophy is to create AI tools that help you _find_ and _discover_ things. However, we ensure that the core recipes themselves don't use AI unless explicitly described as such, so we can guarantee deterministic, consistent, and reliable changes.
:::

## AI recipe search

Moderne offers users the ability to search for recipes with AI. This can help if you don't remember the name of a recipe or if you don't even know if a recipe exists or not. For more details about AI search, check out our [guide on how to use AI to search for recipe](../../../user-documentation/moderne-platform/how-to-guides/moderne-platform-search.md#ai-search).

<figure>
  ![](./assets/ai-search-example.png)
  <figcaption>_Searching for recipes using AI_</figcaption>
</figure>

### Deployment

Deployed as part of the Moderne Platform. You can [choose whether or not to enable this](../../../user-documentation/moderne-platform/how-to-guides/moderne-platform-search.md#how-to-enable-or-disable-ai-search), though.

### AI models

We use two BAAI embedding models – one for retrieval and one for reranking. We obtain the models from HuggingFace and deploy them using LangChain.

### State management

Search results are saved on the worker, similar to any recipe run result. No data is permanently stored.

## AI recipe recommendations

Moderne has created recipes that can look through your code base and offer suggestions of recipes that you should consider running to help modernize or secure your code base. 

Check out the [get recommendations recipe documentation](https://docs.openrewrite.org/recipes/ai/research/getrecommendations#recommendations) for more information into how to use this. You might also find it beneficial to read about [AI embeddings and how we use them](https://www.moderne.ai/blog/what-are-embeddings-and-why-are-they-great-for-code-impact-analysis).

### Deployment

Exists inside of the `rewrite-ai-search` JAR. Only deployed if you deploy this artifact to your tenant alongside the other recipe artifacts.

### AI models

Uses [QwenCoder](https://huggingface.co/Qwen/Qwen2.5-Coder-1.5B) for generative recommendations. Uses BAAI embedding models for clustering-based smart sampling and search, with K-means clustering.

### State management

Recipe recommendation results are stored on the worker, similar to any recipe run. No data is permanently saved.

## Rewrite comprehension

Moderne offers recipes that can read and comprehend your code – and then provide updates to your code or READMEs based on that understanding. 

For instance, if you created or updated a project that didn't have a useful README, you could [run a recipe to generate a useful one](https://github.com/openrewrite/rewrite-docker/pull/10). 

For more details into how to install and run this recipe, check out our [recipe documentation](https://docs.openrewrite.org/recipes/knowledge/docs/updateopenrewritereadme).

### Deployment

Exists inside of the `rewrite-comprehension` JAR. Only deployed if you deploy this artifact to your tenant alongside the other recipe artifacts.

:::info
While private tenants can technically deploy this and use our key, we expect most, if not all, external calls to Gemini will be blocked. If you're interested in the feature on your private tenant, please talk to us so we can figure something out.
:::

### AI models

Uses a bring-your-own-model (BYOM) configuration. It supports OpenAI, Gemini, Anthropic, and Ollama.

### State management

No data is saved – all interactions are stateless. Recipe results are ephemeral, like any non-AI recipe.