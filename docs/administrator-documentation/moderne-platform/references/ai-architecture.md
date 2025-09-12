---
sidebar_label: AI architecture
description: A detailed technical document about all of the places Moderne uses AI.
---

# AI architecture

Moderne has integrated AI capabilities into our solution set in a number of ways to enhance your experience, including: 

* **Moddy, a multi-repo AI agent** that is an optional component to the Moderne Platform, combines suggestive AI with deterministic OpenRewrite recipes to help developers search, analyze, and transform codebases. 
* **An AI-driven recipe search function** in the Moderne Platform enables you to use natural language search to find the most relevant recipes among thousands.
* **A small set of OpenRewrite recipes that relegate tasks to AI** for certain functions.

This architecture document will walk through all of the components and their use of AI.

:::warning
All AI tools and features may produce incorrect or incomplete results. Please ensure that you thoroughly review any results for clarity and accuracy before sharing or using.

**Note**: Our general philosophy is to create AI tools that help you _find_ and _discover_ things. However, we ensure that the core recipes themselves don't use AI unless explicitly described as such, so we can guarantee deterministic, consistent, and reliable changes.
:::

## Moddy (AI agent) - SaaS restricted beta

Moddy is a multi-repo AI agent that developers can optionally interact with in the Moderne Platform. It uses a BYOM (bring-your-own-model) approach to support its work, but leverages OpenRewrite recipes to do the heavy lifting of code search and transformation. There is also a [standalone version of Moddy](../../../user-documentation/moderne-cli/getting-started/moddy-desktop.md) available in restricted beta.

Moddy integrates with your AI LLMs to interpret natural language queries, search for recipes, summarize recipe options, run recipes to transform code and generate data tables, summarize recipe runs, and summarize data from data tables while making suggestions.

Moddy does not use generative AI to make changes to your code. All code changes are made by deterministic OpenRewrite recipes. Developers must still review diffs and issue PRs themselves (just like using the Moderne Platform without Moddy).

<figure>
  ![](./assets/moddy.png)
  <figcaption>_A preview of Moddy_</figcaption>
</figure>

#### Deployment

Deployed as part of the Moderne Platform. Moderne customers can choose whether or not to enable this AI agent in their tenants.

#### AI models

Moddy does not include its own model. You configure your own. Right now we support Anthropic, but other models have been tested and performed relatively similarly. We plan to support additional generative models via their APIs.

#### State management

Conversation history is stored locally in the browser (e.g., cookies/local storage). If a user clears their browser data or switches devices, their history is lost.

#### Workflow

<figure>
  ![](./assets/moddy-steps.png)
  <figcaption>_AI model interactions_</figcaption>
</figure>

## AI recipe search

Moderne offers users the ability to search for recipes with AI. This can help if you don't remember the name of a recipe or if you don't even know if a recipe exists or not. For more details about AI search, check out our [guide on how to use AI to search for recipe](../../../user-documentation/moderne-platform/how-to-guides/moderne-platform-search.md#ai-search).

<figure>
  ![](./assets/ai-search-example.png)
  <figcaption>_Searching for recipes using AI_</figcaption>
</figure>

#### Deployment

Deployed as part of the Moderne Platform. You can [choose whether or not to enable this](../../../user-documentation/moderne-platform/how-to-guides/moderne-platform-search.md#how-to-enable-or-disable-ai-search), though.

#### AI models

We use two BAAI embedding models – one for retrieval and one for reranking. We obtain the models from HuggingFace and deploy them using LangChain.

#### State management

Search results are saved on the worker, similar to any recipe run result. No data is permanently stored.

## OpenRewrite recipes using AI

### Rewrite comprehension

Moderne offers recipes that can read and comprehend your code – and then provide updates to your code or READMEs based on that understanding. 

For instance, if you created or updated a project that didn't have a useful README, you could [run a recipe to generate a useful one](https://github.com/openrewrite/rewrite-docker/pull/10). 

For more details into how to install and run this recipe, check out our [recipe documentation](https://docs.openrewrite.org/recipes/knowledge/docs/updateopenrewritereadme).

#### Deployment

Exists inside of the `rewrite-comprehension` JAR. Only deployed if you deploy this artifact to your tenant alongside the other recipe artifacts.

:::info
While private tenants can technically deploy this and use our key, we expect most, if not all, external calls to Gemini will be blocked. If you're interested in the feature on your private tenant, please talk to us so we can figure something out.
:::

#### AI models

Uses a bring-your-own-model (BYOM) configuration. It supports OpenAI, Gemini, Anthropic, and Ollama.

#### State management

No data is saved – all interactions are stateless. Recipe results are ephemeral, like any non-AI recipe.

### AI recipe recommendations

Moderne has created recipes that can look through your code base and offer suggestions of recipes that you should consider running to help modernize or secure your code base. 

Check out the [get recommendations recipe documentation](https://docs.openrewrite.org/recipes/ai/research/getrecommendations#recommendations) for more information into how to use this. You might also find it beneficial to read about [AI embeddings and how we use them](https://www.moderne.ai/blog/what-are-embeddings-and-why-are-they-great-for-code-impact-analysis).

#### Deployment

Exists inside of the `rewrite-ai-search` JAR. Only deployed if you deploy this artifact to your tenant alongside the other recipe artifacts.

#### AI models

Uses [QwenCoder](https://huggingface.co/Qwen/Qwen2.5-Coder-1.5B) for generative recommendations. Uses BAAI embedding models for clustering-based smart sampling and search, with K-means clustering.

#### State management

Recipe recommendation results are stored on the worker, similar other recipe runs. No data is permanently saved.

## Frequently asked questions

### Can I configure and customize AI features?

Moderne customers can choose what AI features they want to enable or disable. For instance, you can:

* Disable AI-powered search and rely on keyword matching only.
* Choose not to import any of the AI-powered recipes.
* Toggle the Moddy AI agent availability.

Furthermore, many of our AI features offer you the flexibility of bringing your own model so that you can ensure that the model you use meets your safety and security standards.

### What models do you use and how are they trained?

Moddy Desktop does not include its own model. You configure your own. Right now we support Anthropic, but other models have been tested and performed relatively similarly. We plan to support all generative models via their APIs.

Third party AI integrations use whatever model you connect to.

### What data does Moddy desktop send to the models?

Recipe results and data tables.
