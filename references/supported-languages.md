# Supported languages

Moderne is continuously adding support for new languages and formats. As of July 2023, Moderne supports:

## Programming languages

* Java
* Kotlin
* Groovy
* COBOL
* Python ([LST](/concepts/lossless-semantic-trees.md) support)
* TypeScript ([LST](/concepts/lossless-semantic-trees.md) support)

## Data formats

* XML
* Properties
* YAML
* JSON
* Protobuf

## Build tools

* Maven
* Gradle

## Frameworks

Framework migration recipes are developed through collaboration between the Moderne team, the original framework authors, and the wider OSS community. Each recipe in our [recipe catalog](https://docs.openrewrite.org/recipes) includes a list of contributing authors.

Many different frameworks are supported such as (but not limited to):

* Spring
* Quarkus
* Micronaut
* Jakarta

## Future plans

There are three stages we track as we add support for new languages. These are:

* **Parser** - This is the first stage of any new language. In this stage, a parser is created so that the new language's code can be parsed into a [Lossless Semantic Tree](/concepts/lossless-semantic-trees.md) (LST). Once that happens, a simple recipe can be run on it to produce a style-preserving diff. These recipes will start to appear in the Moderne UI. Please note, though, that these recipes will _still be written in Java_ regardless of what language is being added.

* **Recipe catalog** - In this stage, the goal is to build useful recipes specific to the language being added. These could include things such as migrations, CVE patches, static application security tests (SAST), or even language-specific build tools. Work on this stage can happen at the same time as the subsequent stage (native developer experience).

* **Native developer experience** - In this stage, the goal is to make it so recipes can be developed in the same language they're being run on (e.g., a TypeScript recipe would be written in TypeScript rather than in Java). This means that the open-source community for this language can more easily participate in recipe development rather than having to learn Java. Work on this stage can happen at the same time as the previous stage (recipe catalog). 

Below you can find a table of languages, which stages are currently done, and which stages are left to do. Please note that this is a **tentative** timeline. Anything below is subject to change.

| **Language**                 | **Parser**                                                  | **Recipe catalog**                                   | **Native devex**                                     |
|------------------------------|-------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| Java                         | Available                                                   | Available                                            | Available                                            |
| Kotlin                       | Available                                                   | Available                                            | Available                                            |
| Groovy                       | Available                                                   | Available                                            | Available                                            |
| Python                       | Aiming to finish by Q4 2023 (partially available right now) | Work begins early 2024. Aiming to finish by Q4 2024. | Work begins early 2024. Aiming to finish by Q4 2024. |
| TypeScript                   | Available                                                   | Work begins early 2024. Aiming to finish by Q4 2024. | Work begins early 2024. Aiming to finish by Q4 2024. |
| COBOL                        | Available                                                   | Aiming to finish by Nov 2023.                        | No plans to support                                  |
| C#                           | Aiming to finish by Q4 2023                                 | Work begins early 2024. Aiming to finish by Q4 2024. | No plans to support                                  |
