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

  // Python recipes
  if (pipPackage) {
    return (
      <>
        <p>
          In order to run Python recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
        </p>
        <p>Once the CLI is installed, you can install this Python recipe package by running the following command:</p>
        <CodeBlock language="shell" title="Install the recipe package">
          {`mod config recipes pip install ${pipPackage}`}
        </CodeBlock>
        <p>Then, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${recipeName}`}
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
