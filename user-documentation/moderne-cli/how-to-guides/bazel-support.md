---
description: >-
  Detailed information on how the Moderne CLI interacts with the Bazel build
  tool.
---

# Bazel support

Moderne CLI interacts with the [Bazel](https://bazel.build/) build tool to parse repositories into the Lossless Semantic Tree (LST). Bazel build files are discovered automatically by [mod build](../cli-reference.md#mod-build) in the same way other build tools like Maven or Gradle are discovered.

Moderne CLI will execute Bazel with a [bazelisk](https://github.com/bazelbuild/bazelisk) wrapper if present, otherwise falling back on a PATH installed Bazel executable.

### Configuring the Bazel rule to use

By default the CLI executes the Bazel rule `java-maven-lib`, which is likely not the rule that you need.

| Command                                                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`mod config build bazel rule edit <RULE>`](../cli-reference.md#mod-config-build-bazel) | Globally sets the rule for all Bazel repositories that don't have a rule configured explicitly.                                                                                                                                                                                                                                              |
| `mod config build bazel rule edit <RULE> --local=<REPO_DIR>`                            | Sets the rule for the repository (or repositories) rooted at `<REPO_DIR>` . This overrides the global rule configuration for this repo. The configuration is saved in an implicitly gitignored file so isn't seen as a tracked change to git.                                                                                                |
| `mod config build bazel rule edit <RULE> --local=<REPO_DIR> --save`                     | Sets the rule for the repository (or repositories) rooted at `<REPO_DIR>` . This overrides the global rule configuration for this repo. The configuration is saved in a `.modernecfg` file that is seen as a tracked change to git, and can be committed to source control for others to benefit from the configuration with their own CLIs. |

### Example Bazel repository

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

### Troubleshooting: Repositories that have both Bazel build files and another build tool like Gradle configured at the same folder level

The Moderne CLI will choose build tools in the following order of precedence:

1. Maven
2. Gradle
3. Bazel

The presence of a build file for one of these tools prevents a subsequent build tool from being considered for that folder.

### Troubleshooting: What Bazel command did the Moderne CLI execute to produce the LST?

The Bazel command that the Moderne CLI is executing is logged at this path relative to the root of the repository being parsed.

`.moderne/build/<DATA_TIME_HASH>/build.log`

Notice that the rule that has been configured with [`mod config build bazel rule edit <RULE>`](../cli-reference.md#mod-config-build-bazel) is being used here.

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption><p>The second Command entry in the log shows the Bazel build command that is being executed by the Moderne CLI.</p></figcaption></figure>

### Troubleshooting: Why were Java files not parsed as Java LSTs?

At the end of build, a manifest is created that itemizes each file that is contained in the LST and how it was parsed. A sure sign that the Bazel rule configuration is not correctly identfying Java source sets is a series of Java file entries in the manifest that are listed as "Quarks", as seen in the image below.

<figure><img src="../../../.gitbook/assets/image (3).png" alt=""><figcaption><p>A manifest showing a LST produced with a misconfigured Bazel rule.</p></figcaption></figure>

A quark is an LST type that simply indicates the presence of a file, but does not keep its contents. Java-specific recipes will not operate on Quarks to make changes.

The Moderne CLI augments the build with an Aspect that emits information on matching rules into a file in `bazel-out/<ARCH>/bin/<RULE>.compilation_info.json`.

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption><p>A compilaton_info.json written for the <code>java-maven-lib</code> Bazel rule.</p></figcaption></figure>

The JSON structure is easily human readable, and gives insight into the Moderne CLI's understanding of the Java source files that the rule is responsible for and the classpath that should be used to parse those source files.

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption><p>Expect any file in the <code>srcs</code> list to show up in the manifest.csv as a <code>J.CompilationUnit</code>, i.e. a correctly parsed Java source file.</p></figcaption></figure>

[^1]: Indication that parsing is configured correctly.

[^2]: Indication that parsing is configured correctly.
