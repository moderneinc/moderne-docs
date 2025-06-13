---
sidebar_label: Moddy Desktop
description: Getting started with Moddy Desktop.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started with Moddy Desktop

Moddy is a multi-repo AI agent (**currently in a restricted beta**) that combines natural language with the accuracy and scalability of Moderne and OpenRewrite. With it, you can analyze and modify large and complex codebases. For instance, you could ask it questions like, "How do I use Apache Commons?" or "Help me upgrade to Spring Boot 3.5," and it would search for the appropriate OpenRewrite recipes and then execute them for you.

In this guide, we'll walk you through everything you need to know about Moddy Desktop – from installation instructions to architecture design.

## Prerequisites

In order for Moddy Desktop to function, you will need to have already [setup and configured the Moderne CLI](./cli-intro.md).

## Installation

We support installing Moddy Desktop via Homebrew (MacOS) or Chocolatey (Windows):

<Tabs>
<TabItem value="homebrew" label="Homebrew (MacOS)">

```bash
brew install --cask moderneinc/moderne/moddy-desktop
```

</TabItem>

<TabItem value="chocolatey" label="Chocolatey (Windows)">

```bash
choco install moddy-desktop
```
</TabItem>
</Tabs>

## Using Moddy Desktop

### Initial configuration

When you first launch Moddy, you will be prompted to fill in an Anthropic API key and to provide a working directory. The working directory should be the directory that contains all of the repositories you wish to ask questions about or run recipes against. You can change this after the fact as desired.

<figure>
  ![](./assets/initial-moddy-config.png)
  <figcaption>_The initialization screen in Moddy Desktop._</figcaption>
</figure>

### Components

Once you've configured a key and working directory, you will be taken to a page where you can ask a question or provide Moddy instructions:

<figure>
  ![](./assets/moddy-welcome.png)
  <figcaption></figcaption>
</figure>

#### Thread history

In the top-left corner, you will see an expansion icon. When clicked, this will let you see all previous conversations (if any exist). You can click on one to continue that conversation or you can delete them if you decide you no longer want them to exist.

<figure>
  ![](./assets/moddy-thread.gif)
  <figcaption></figcaption>
</figure>

#### Settings

In the top-right corner, you will see a settings icon. When clicked, this will allow you to change the API key, select a different working directory, or point to a different location for the Moderne CLI.

<figure>
  ![](./assets/moddy-settings.png)
  <figcaption></figcaption>
</figure>

## How data flows

The AI model is chosen by the customer. All traffic to the model is routed via an on-prem agent (not to be confused with an AI agent). The deployment is BYOM and any generative model is supported.

<figure>
  ![](./assets/data-flow.png)
  <figcaption>_The flow of data from you to the LLM to an OpenRewrite recipe._</figcaption>
</figure>

<figure>
  ![](./assets/air-gapped-moddy.png)
  <figcaption>_What an air-gapped environment might look like._</figcaption>
</figure>

## Frequently asked questions

### What models do you use and how are they trained?

Moddy Desktop does not include its own model. You configure your own. Right now we support Anthropic, but other models have been tested and performed relatively similarly. We plan to support all Generative models via their APIs.

Models deployed to your on-prem environment can also be supported.

### What data doees Moddy desktop send to the models?

Recipe results and data tables.
