---
sidebar_label: Generative AI architecture
description: A detailed technical document about all of the places Moderne uses generative AI.
---

# Generative AI architecture

Moderne offers a variety of features and recipes that utilize AI to enhance your experience. All of these are highly customizable so that you can choose to only enable or use the ones you're comfortable with.

This architecture doc will walk through all of the AI components that use **generative AI**. In other words, these AI components generate new content based on your requests.

:::warning
All AI tools and features may produce incorrect or incomplete results. Please ensure that you thoroughly review any results for clarity and accuracy before sharing or using.

**Note**: Our general philosophy is to create AI tools that help you _find_ and _discover_ things. However, we ensure that the core recipes themselves don't use AI unless explicitly described as such, so we can guarantee deterministic, consistent, and reliable changes.
:::

## Moddy (chatbot) - restricted beta

Moddy is an AI chatbot that can search for OpenRewrite recipes and execute them within the Moderne Platform. There is also a [standalone version of Moddy](../../../user-documentation/moderne-cli/getting-started/moddy-desktop.md) available in restricted beta.

<figure>
  ![](./assets/moddy.png)
  <figcaption>_A preview of Moddy_</figcaption>
</figure>

#### Deployment

Deployed as part of the Moderne Platform. Moderne customers can choose whether or not to enable this chatbot in their tenants.

#### AI models

Moddy does not include its own model. You configure your own. Right now we support Anthropic, but other models have been tested and performed relatively similarly. We plan to support all generative models via their APIs.

#### State management

Conversation history is stored locally in the browser (e.g., cookies/local storage). If a user clears their browser data or switches devices, their history is lost.

#### Workflow

<figure>
  ![](./assets/moddy-steps.png)
  <figcaption>_AI model interactions_</figcaption>
</figure>

## Third party AI integrations (public Moderne Platform only)

The public Moderne Platform offers users the ability to connect to third party services to improve the Moderne experience. For example, you may wish to connect to OpenAI to enable AI summaries and suggestions.

<figure>
  ![](./assets/third-party-integ.png)
  <figcaption>_Connecting the Moderne Platform to OpenAI_</figcaption>
</figure>

#### Deployment

This is deployed by default in the public Moderne Platform. It is not available in private Moderne tenants.

#### AI models

Integrates with external AI services. As of February 2025, the only integration available is with OpenAI.

#### State mangement

API keys are stored only on the user's machine (their browser) and are used on demand.

## Frequently asked questions

### Can I configure and customize AI features?

Moderne customers can choose what AI features they want to enable or disable. For instance, you can:

* Disable AI-powered search and rely on keyword matching only.
* Choose not to import any of the AI-powered recipes.
* Toggle the Moddy chatbot availability.

Furthermore, many of our AI features offer you the flexibility of bringing your own model so that you can ensure that the model you use meets your safety and security standards.

### What models do you use and how are they trained?

Moddy Desktop does not include its own model. You configure your own. Right now we support Anthropic, but other models have been tested and performed relatively similarly. We plan to support all generative models via their APIs.

Third party AI integrations use whatever model you connect to.

### What data does Moddy desktop send to the models?

Recipe results and data tables.
