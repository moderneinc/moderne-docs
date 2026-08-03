import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import latestVersions from '@site/src/plugins/latest-versions';

interface CompanionJar {
  groupId: string;
  artifactId: string;
  versionKey?: string;
}

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
  companionJars?: CompanionJar[];
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
  companionJars,
}: RunRecipeProps) {
  // Replace {{VERSION_...}} placeholders with actual version numbers
  const resolveVersions = (text: string): string => {
    return text.replace(/\{\{(\w+)\}\}/g, (match) => {
      return (latestVersions as Record<string, string>)[match] || match;
    });
  };

  // An unknown key resolves to itself, which would otherwise paste a literal {{VERSION_...}} into a
  // shell command. Treat that as "no version" so the caller can drop the command instead.
  const resolveVersion = (key?: string): string => {
    if (!key) return '';
    const resolved = resolveVersions(`{{${key}}}`);
    return resolved.startsWith('{{') ? '' : resolved;
  };

  const hasDependency = !!(groupId && artifactId);
  const cliRecipeName = useFullyQualifiedCliName
    ? recipeName
    : recipeName.substring(recipeName.lastIndexOf('.') + 1);
  const version = resolveVersion(versionKey);

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

  // Python recipes. Python recipes delegate across packages at runtime — a pip composite calls into a
  // jar recipe, which in turn calls into the core language module — and the CLI resolves those
  // delegates eagerly, failing the whole run when one is missing rather than skipping a step. So every
  // package the recipe reaches is listed, not just the one it is published in.
  if (pipPackage) {
    const pipPackageSpec = version ? `${pipPackage}==${version}` : pipPackage;
    const installCommands = [`mod config recipes pip install ${pipPackageSpec}`];
    if (hasDependency && version) {
      installCommands.push(`mod config recipes jar install ${groupId}:${artifactId}:${version}`);
    }
    for (const jar of companionJars ?? []) {
      const jarVersion = resolveVersion(jar.versionKey);
      if (jarVersion) {
        installCommands.push(`mod config recipes jar install ${jar.groupId}:${jar.artifactId}:${jarVersion}`);
      }
    }
    const multiplePackages = installCommands.length > 1;
    return (
      <>
        <p>
          In order to run Python recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
        </p>
        <p>
          {multiplePackages
            ? 'This recipe calls into other OpenRewrite packages as it runs, and the CLI needs every one of them in its marketplace. Once the CLI is installed, install all of the following:'
            : 'Once the CLI is installed, you can install this Python recipe package by running the following command:'}
        </p>
        <CodeBlock
          language="shell"
          title={multiplePackages ? 'Install the recipe packages' : 'Install the recipe package'}
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
