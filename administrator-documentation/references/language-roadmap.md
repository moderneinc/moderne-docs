# Language roadmap

{% hint style="info" %}
If you want to find out more about what languages we currently support, please see our [supported languages doc](supported-languages.md).
{% endhint %}

There are three stages we track as we add support for new languages. These are:

* **Parser** - This is the first stage of any new language. In this stage, a parser is created so that the new language's code can be parsed into a [Lossless Semantic Tree](concepts/lossless-semantic-trees.md) (LST). Once that happens, a simple recipe can be run on it to produce a style-preserving diff. These recipes will start to appear in the Moderne UI. Please note, though, that these recipes will _still be written in Java_ regardless of what language is being added.
* **Recipe catalog** - In this stage, the goal is to build useful recipes specific to the language being added. These could include things such as migrations, CVE patches, static application security tests (SAST), or even language-specific build tools. Work on this stage can happen at the same time as the subsequent stage (native developer experience).
* **Native developer experience** - In this stage, the goal is to make it so recipes can be developed in the same language they're being run on (e.g., a TypeScript recipe would be written in TypeScript rather than in Java). This means that the open-source community for this language can more easily participate in recipe development rather than having to learn Java. Work on this stage can happen at the same time as the previous stage (recipe catalog).

Below you can find a table of languages, which stages are currently done, and which stages are left to do. Please note that this is a **tentative** timeline. Anything below is subject to change.

| **Language** | **Parser**   | **Recipe catalog**  | **Native devex**      |
| ------------ | ------------ | ------------------- | --------------------- |
| Java         | Available    | Available           | Available             |
| Kotlin       | Available    | Available           | Available             |
| Groovy       | Available    | Available           | Available             |
| Ruby         | Available    | In progress         | Available             |
| Python       | In progress  | In progress         | In progress           |
| TypeScript   | Available    | In progress         | In progress           |
| COBOL        | Available    | In progress         | No plans to support   |
| C#           | In progress  | In progress         | No plans to support   |
