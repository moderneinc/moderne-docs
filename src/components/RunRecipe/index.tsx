import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import latestVersions from '@site/src/plugins/latest-versions';

interface CompanionJar {
  groupId: string;
  artifactId: string;
  versionKey?: string;
}

/**
 * `RELEASE` and `LATEST` are the version literals `mod config recipes jar install` accepts in place of
 * a fixed version. Installing with one of them records a dynamic requested version, which is what
 * `mod config recipes upgrade` looks for when it re-resolves artifacts, so readers who copy these
 * commands don't pin their marketplace to whatever version this page was built with.
 */
type VersionMode = 'RELEASE' | 'LATEST' | 'pinned';

const jarSpec = (groupId: string, artifactId: string, version: string, mode: VersionMode): string =>
  `${groupId}:${artifactId}:${mode === 'pinned' ? version : mode}`;

/**
 * Install commands, one tab per version mode. Modes that would produce the same commands collapse
 * into a single tab — package managers other than Maven have no `RELEASE`/`LATEST` spelling, so their
 * dynamic form is simply the package name — and a lone tab renders as a plain code block.
 */
function InstallCommands({
  title,
  commandsFor,
  hasPinnedVersion,
}: {
  title?: string;
  commandsFor: (mode: VersionMode) => string[];
  hasPinnedVersion: boolean;
}) {
  const codeFor = (mode: VersionMode) => commandsFor(mode).join('\n');
  const release = codeFor('RELEASE');
  const latest = codeFor('LATEST');
  const pinned = hasPinnedVersion ? codeFor('pinned') : release;

  const tabs =
    release === latest
      ? [{ value: 'dynamic', label: 'Latest version', code: release }]
      : [
          { value: 'release', label: 'RELEASE', code: release },
          { value: 'latest', label: 'LATEST', code: latest },
        ];
  if (pinned !== release) {
    tabs.push({ value: 'pinned', label: 'Pinned version', code: pinned });
  }

  if (tabs.length === 1) {
    return <CodeBlock language="shell" title={title}>{tabs[0].code}</CodeBlock>;
  }

  return (
    <>
      <p>
        {release === latest ? (
          <>Installing without a pinned version lets </>
        ) : (
          <>
            <code>RELEASE</code> resolves to the newest release and <code>LATEST</code> to the newest
            build of any kind, including snapshots. Either one lets{' '}
          </>
        )}
        <a href="https://docs.moderne.io/user-documentation/moderne-cli/cli-reference#mod-config-recipes-upgrade">
          <code>mod config recipes upgrade</code>
        </a>{' '}
        pull in later versions without editing this command; a pinned version stays where you put it.
      </p>
      <Tabs groupId="recipeVersion">
        {tabs.map((tab) => (
          <TabItem key={tab.value} value={tab.value} label={tab.label}>
            <CodeBlock language="shell" title={title}>{tab.code}</CodeBlock>
          </TabItem>
        ))}
      </Tabs>
    </>
  );
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
    const resolvedCompanionJars = (companionJars ?? [])
      .map((jar) => ({ ...jar, version: resolveVersion(jar.versionKey) }))
      .filter((jar) => jar.version);
    const installCommandsFor = (mode: VersionMode): string[] => {
      const pipPackageSpec = version && mode === 'pinned' ? `${pipPackage}==${version}` : pipPackage;
      const commands = [`mod config recipes pip install ${pipPackageSpec}`];
      if (hasDependency && version) {
        commands.push(`mod config recipes jar install ${jarSpec(groupId, artifactId, version, mode)}`);
      }
      for (const jar of resolvedCompanionJars) {
        commands.push(`mod config recipes jar install ${jarSpec(jar.groupId, jar.artifactId, jar.version, mode)}`);
      }
      return commands;
    };
    const multiplePackages = installCommandsFor('RELEASE').length > 1;
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
        <InstallCommands
          title={multiplePackages ? 'Install the recipe packages' : 'Install the recipe package'}
          commandsFor={installCommandsFor}
          hasPinnedVersion={!!version || resolvedCompanionJars.length > 0}
        />
        <p>Then, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${recipeName}${cliOptions}`}
        </CodeBlock>
      </>
    );
  }

  // C# recipes. A NuGet recipe package can delegate into a jar recipe, and NuGet has no way to express a
  // Maven dependency, so — as with Python — every package the recipe reaches is listed. The NuGet install
  // itself is never pinned: only the jars carry a version here, so the pinned tab pins those alone.
  if (nugetPackage) {
    const resolvedCompanionJars = (companionJars ?? [])
      .map((jar) => ({ ...jar, version: resolveVersion(jar.versionKey) }))
      .filter((jar) => jar.version);
    const installCommandsFor = (mode: VersionMode): string[] => [
      `mod config recipes nuget install ${nugetPackage}`,
      ...resolvedCompanionJars.map(
        (jar) => `mod config recipes jar install ${jarSpec(jar.groupId, jar.artifactId, jar.version, mode)}`
      ),
    ];
    const multiplePackages = resolvedCompanionJars.length > 0;
    return (
      <>
        <p>
          In order to run C# recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
        </p>
        <p>
          {multiplePackages
            ? 'This recipe calls into other OpenRewrite packages as it runs, and the CLI needs every one of them in its marketplace. Once the CLI is installed, install all of the following:'
            : 'Once the CLI is installed, you can install this C# recipe package by running the following command:'}
        </p>
        <InstallCommands
          title={multiplePackages ? 'Install the recipe packages' : 'Install the recipe package'}
          commandsFor={installCommandsFor}
          hasPinnedVersion={multiplePackages}
        />
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
    const goModuleSpecFor = (mode: VersionMode) =>
      version && mode === 'pinned' ? `${goPackage}@v${version}` : goPackage;
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
        <InstallCommands
          title="Install the recipe module"
          commandsFor={(mode) => [`mod config recipes go install ${goModuleSpecFor(mode)}`]}
          hasPinnedVersion={!!version}
        />
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
          <InstallCommands
            commandsFor={(mode) => [`mod config recipes jar install ${jarSpec(groupId, artifactId, version, mode)}`]}
            hasPinnedVersion={!!version}
          />
        </>
      )}
    </>
  );
}
