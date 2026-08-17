---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://docs.openrewrite.org/reference/moderne-recipes).

:::info
This changelog is automatically generated from GitHub releases and only contains information from the past year.
:::

## August 17, 2026

#### rewrite-cobol - 2.22.0

* Fix three COBOL parse gaps: EXEC DLI, EXIT paragraphs, and RD PAGE
* Stop PICTURE strings from consuming the entry that follows them
* Parse four more constructs found in real CICS and IMS COBOL
* Stop silently skipping a COPY REPLACING rule, and refuse partial words
* Model JCL statements in the LST, and stop losing statements to column 73
* Give every COBOL node an identity of its own

## August 12, 2026

#### rewrite-cobol - v2.21.1

* Move CI and publishing onto the openrewrite gh-automation workflows

#### rewrite-cobol - 2.21.0

* Pass Code Genome Project artifact credentials to the shared workflows

## July 29, 2026

#### rewrite-cobol - 2.20.3

* Updated repository to use OpenRewrite version v8.88.0

## July 14, 2026

#### rewrite-cobol - 2.20.2

* Updated repository to use OpenRewrite version v8.87.0

## July 7, 2026

#### rewrite-cobol - 2.20.1

* Read and tokenize JCL .prm members once by path, not per source

## July 1, 2026

#### rewrite-cobol - 2.20.0

* Stop exposing the ANTLR4 codegen tool as a runtime dependency
* Expand external SYSIN/SYSTSIN .prm members into the JCL LST

## June 17, 2026

#### rewrite-cobol - 2.19.0

* Recognize .dcl (DCLGEN) files as copybooks for EXEC SQL INCLUDE
* Increase default Cobol parser timeout to 10 minutes

## June 3, 2026

#### rewrite-cobol - 2.18.0

* Regenerate recipes.csv

## May 21, 2026

#### rewrite-cobol - 2.17.5

* Updated repository to use OpenRewrite version v8.83.0

## May 6, 2026

#### rewrite-cobol - v2.17.4

- OpenRewrite v8.81.6

## April 27, 2026

#### rewrite-cobol - 2.17.3

* Updated repository to use OpenRewrite version v8.81.0

## April 21, 2026

#### rewrite-cobol - 2.17.2

* Updated repository to use OpenRewrite version v8.80.0

## April 8, 2026

#### rewrite-cobol - 2.17.1

* Updated repository to use OpenRewrite version v8.79.0

## March 25, 2026

#### rewrite-cobol - 2.17.0

* Add JCL FindWord search recipe

## March 12, 2026

#### rewrite-cobol - 2.16.0

* Lombok Best Practices

## March 4, 2026

#### rewrite-cobol - 2.15.1

* Updated repository to use OpenRewrite version v8.75.0

## February 25, 2026

#### rewrite-cobol - 2.15.0

* Update Prethink context

## February 23, 2026

#### rewrite-cobol - 2.14.2

* Add data tables to search recipes for CLI output
* Fixing the copybook being output with potentially an absolute path rather than the standard relative one we expect everywhere else.

## February 20, 2026

#### rewrite-cobol - 2.14.1

* Remove excessive estimatedEffortPerOccurrence override
* Adopt Moderne Source Available License
* Making copybook lexing / parsing errors actually report more meaningful line number information and allowing parsing of other files to continue after encountering a parse failure on a file.

## February 11, 2026

#### rewrite-cobol - 2.14.0

* Drop `cobol-cli`
* Bypass the adapt() method call to prevent ClassCastException
* Drop `model`, which appears unused

## January 20, 2026

#### rewrite-cobol - 2.13.2

* Updated repository to use OpenRewrite version v8.72.0

#### rewrite-cobol - 2.13.1

* Upgrading Antlr to 4.13.2
* Regenerate Antlr sources with Antlr 4.13.2

