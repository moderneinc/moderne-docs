---
description: >-
  Detailed information on how the Moderne CLI interacts with the Bazel build
  tool.
---

# Bazel support

Moderne CLI interacts with the [Bazel](https://bazel.build/) build tool to parse repositories into the Lossless Semantic Tree (LST). Bazel build files are discovered automatically by [mod build](../cli-reference.md#mod-build) in the same way other build tools like Maven or Gradle are discovered.

Moderne CLI will execute Bazel with a [bazelisk](https://github.com/bazelbuild/bazelisk) wrapper if present, otherwise falling back on a PATH installed Bazel executable.

The CLI executes `bazel query` to find Bazel rules of type `java_library` or `kt_jvm_library`, followed by a `bazel build` for each rule matched by that query. The build step applies an [aspect](https://bazel.build/extending/aspects) that extracts information about the rule's source sets and classpath which is then forwarded on to the OpenRewrite parser to produce LSTs.

## Partitioning Bazel repositories

To control the scope of the `bazel query` step, you can customize the CLI's [build steps](build-steps.md). For Bazel repositories, generally you will want to go one step further and introduce build partitions to carve up the repository into business functional units, with an LST being produced for each unit.

The `bazel` build step type has a configurable `targetExpression` configuration (that defaults to `//:all`). Any Bazel query [expression](https://bazel.build/query/language#expressions) is valid here, allowing a wide range of options for how to partition the repository. For example:

* Rules with a particular [attribute](https://bazel.build/query/language#attr)
* Fixed [words](https://bazel.build/query/language#target-patterns) which correspond to fixed named targets or wildcard patterns of them
* Rules with a particular [label](https://bazel.build/query/language#labels)

```yaml
build:
  partitions:
    - name: bookings
      steps:
        - type: bazel
          targetExpression: //:bookings
    - name: payments
      steps:
        - type: bazel
          targetExpression: //:payments

```

## Example Bazel repository

Moderne maintains a public example Bazel repository.&#x20;

1. Clone [https://github.com/moderneinc/bazel-examples](https://github.com/moderneinc/bazel-examples) and `cd` into the directory containing the cloned repository.
2. Execute `mod build .`
3. Examine the `.moderne/build/<DATE_TIME_HASH>/manifest.csv` file to see that the CLI correctly identified Java source files as such and parsed them into `J.CompilationUnit`.

<pre class="language-csv"><code class="lang-csv">n,sourcePath,sourceFileType,buildTool,buildToolVersion,checksum,lineCount
1,"LICENSE",Quark,mod,3.6.2,86d3f3a95c324c9479bd8986968f4327,0
2,"README.md",PlainText,mod,3.6.2,9806770b48fee4ff1a0eb2bce1c66176,2
3,"bazel-java-maven/.gitignore",PlainText,mod,3.6.2,a8edf8bbdab71497f7cd11360a582a86,5
...
10,"bazel-java-maven/src/main/java/com/example/myproject/App.java",<a data-footnote-ref href="#user-content-fn-1">J.CompilationUnit</a>,mod,3.6.2,4b01908c328578022630cccdb1719d04,0
11,"bazel-java-maven/src/test/java/com/example/myproject/TestApp.java",<a data-footnote-ref href="#user-content-fn-2">J.CompilationUnit</a>,mod,3.6.2,b8b7619c3321903bd9549b4f0b8bfd88,0
</code></pre>

## Troubleshooting: Repositories that have both Bazel build files and another build tool like Gradle configured at the same folder level

The default build steps used by the CLI give precedence to Maven or Gradle if they are also present. You can customize the default build steps to give precedence to Bazel as described in [build steps](build-steps.md).

## Troubleshooting: What Bazel command did the Moderne CLI execute to produce the LST?

The Bazel command that the Moderne CLI is executing is logged at this path relative to the root of the repository being parsed.

`.moderne/build/<DATA_TIME_HASH>/build.log`

<figure><img src="../../../.gitbook/assets/image (45).png" alt=""><figcaption><p>The <code>bazel query</code> and <code>bazel build</code> phases are both shown in the build log</p></figcaption></figure>

## Troubleshooting: Why were Java files not parsed as Java LSTs?

At the end of build, a manifest is created that itemizes each file that is contained in the LST and how it was parsed. A sure sign that the Bazel rule configuration is not correctly identfying Java source sets is a series of Java file entries in the manifest that are listed as "Quarks", as seen in the image below.

<figure><img src="../../../.gitbook/assets/image (3) (1) (1) (1) (1).png" alt=""><figcaption><p>A manifest showing a LST produced with a misconfigured Bazel rule.</p></figcaption></figure>

A quark is an LST type that simply indicates the presence of a file, but does not keep its contents. Java-specific recipes will not operate on Quarks to make changes.

The Moderne CLI augments the build with an Aspect that emits information on matching rules into a file in `bazel-out/<ARCH>/bin/<RULE>.compilation_info.json`.

<figure><img src="../../../.gitbook/assets/image (5) (1) (1).png" alt=""><figcaption><p>A compilaton_info.json written for the <code>java-maven-lib</code> Bazel rule.</p></figcaption></figure>

The JSON structure is easily human readable, and gives insight into the Moderne CLI's understanding of the Java source files that the rule is responsible for and the classpath that should be used to parse those source files.

<figure><img src="../../../.gitbook/assets/image (6) (1) (1).png" alt=""><figcaption><p>Expect any file in the <code>srcs</code> list to show up in the manifest.csv as a <code>J.CompilationUnit</code>, i.e. a correctly parsed Java source file.</p></figcaption></figure>

[^1]: Indication that parsing is configured correctly.

[^2]: Indication that parsing is configured correctly.
