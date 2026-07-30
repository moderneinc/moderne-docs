import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import latestVersions from '@site/src/plugins/latest-versions';

interface RunRecipeProps {
  recipeName: string;
  displayName: string;
  groupId?: string;
  artifactId?: string;
  versionKey?: string;
  requiresConfiguration?: boolean;
  cliOptions?: string;
  useFullyQualifiedCliName?: boolean;
  npmPackage?: string;
  pipPackage?: string;
  nugetPackage?: string;
  goPackage?: string;
}

export default function RunRecipe({
  recipeName,
  displayName,
  groupId,
  artifactId,
  versionKey,
  requiresConfiguration = false,
  cliOptions = '',
  useFullyQualifiedCliName = false,
  npmPackage,
  pipPackage,
  nugetPackage,
  goPackage,
}: RunRecipeProps) {
  // Replace {{VERSION_...}} placeholders with actual version numbers
  const resolveVersions = (text: string): string => {
    return text.replace(/\{\{(\w+)\}\}/g, (match) => {
      return (latestVersions as Record<string, string>)[match] || match;
    });
  };

  const hasDependency = !!(groupId && artifactId);
  const cliRecipeName = useFullyQualifiedCliName
    ? recipeName
    : recipeName.substring(recipeName.lastIndexOf('.') + 1);
  const version = versionKey ? resolveVersions(`{{${versionKey}}}`) : '';

  // JavaScript recipes
  if (npmPackage) {
    return (
      <>
        <p>
          In order to run JavaScript recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
          For JavaScript specific configuration instructions, please see our{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript">configuring JavaScript guide</a>.
        </p>
        <p>Once the CLI is installed, you can install this JavaScript recipe package by running the following command:</p>
        <CodeBlock language="shell" title="Install the recipe package">
          {`mod config recipes npm install ${npmPackage}`}
        </CodeBlock>
        <p>Then, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${recipeName}`}
        </CodeBlock>
      </>
    );
  }

  // Python recipes. A recipe module can publish its recipes across both a pip package and a jar, with
  // recipes in one half delegating to the other at runtime; when both coordinates are given, installing
  // only one half leaves the delegated steps unresolvable, so both commands are shown together.
  if (pipPackage) {
    const pipPackageSpec = version ? `${pipPackage}==${version}` : pipPackage;
    const installCommands = [`mod config recipes pip install ${pipPackageSpec}`];
    if (hasDependency && version) {
      installCommands.push(`mod config recipes jar install ${groupId}:${artifactId}:${version}`);
    }
    const dualPublished = installCommands.length > 1;
    return (
      <>
        <p>
          In order to run Python recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
        </p>
        <p>
          {dualPublished
            ? 'This recipe comes from a module that publishes its recipes to both PyPI and Maven Central, and recipes in one package call into the other. Once the CLI is installed, install both packages:'
            : 'Once the CLI is installed, you can install this Python recipe package by running the following command:'}
        </p>
        <CodeBlock
          language="shell"
          title={dualPublished ? 'Install the recipe packages' : 'Install the recipe package'}
        >
          {installCommands.join('\n')}
        </CodeBlock>
        <p>Then, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${recipeName}${cliOptions}`}
        </CodeBlock>
      </>
    );
  }

  // C# recipes
  if (nugetPackage) {
    return (
      <>
        <p>
          In order to run C# recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
        </p>
        <p>Once the CLI is installed, you can install this C# recipe package by running the following command:</p>
        <CodeBlock language="shell" title="Install the recipe package">
          {`mod config recipes nuget install ${nugetPackage}`}
        </CodeBlock>
        <p>Then, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${recipeName}`}
        </CodeBlock>
      </>
    );
  }

  // Go recipes
  if (goPackage) {
    // Go module tags carry a `v` prefix, while the version key resolves to a bare X.Y.Z
    const goModuleSpec = version ? `${goPackage}@v${version}` : goPackage;
    return (
      <>
        <p>
          In order to run Go recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
          For Go specific configuration instructions, please see our{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/go">configuring Go guide</a>.
        </p>
        <p>Once the CLI is installed, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${cliRecipeName}${cliOptions}`}
        </CodeBlock>
        <p>If the recipe is not available locally, then you can install it using:</p>
        <CodeBlock language="shell" title="Install the recipe module">
          {`mod config recipes go install ${goModuleSpec}`}
        </CodeBlock>
      </>
    );
  }

  const introText = requiresConfiguration
    ? undefined
    : 'This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI.';

  return (
    <>
      {introText && <p>{introText}</p>}
      <p>
        You will need to have configured the{' '}
        <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>{' '}
        on your machine before you can run the following command.
      </p>
      <CodeBlock language="shell" title="shell">
        {`mod run . --recipe ${cliRecipeName}${cliOptions}`}
      </CodeBlock>
      {hasDependency && (
        <>
          <p>If the recipe is not available locally, then you can install it using:</p>
          <CodeBlock language="shell">
            {`mod config recipes jar install ${groupId}:${artifactId}:${version}`}
          </CodeBlock>
        </>
      )}
    </>
  );
}
