import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RunRecipe from './index';

const pythonProps = {
  recipeName: 'org.openrewrite.python.migrate.UpgradeToPython314',
  displayName: 'Upgrade to Python 3.14',
  pipPackage: 'openrewrite-migrate-python',
  versionKey: 'VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON',
};

const text = () => screen.getByRole('main').textContent ?? '';

/** Text of one version tab. The Tabs mock renders every tab, so `text()` alone spans all of them. */
const tabText = (label: string) =>
  screen.getByRole('main').querySelector(`[data-label="${label}"]`)?.textContent ?? '';

const renderRecipe = (props: React.ComponentProps<typeof RunRecipe>) =>
  render(
    <main>
      <RunRecipe {...props} />
    </main>
  );

describe('RunRecipe', () => {
  it('installs only the pip package when a Python recipe has no companion jar', () => {
    renderRecipe(pythonProps);

    expect(text()).toContain('mod config recipes pip install openrewrite-migrate-python==');
    expect(text()).not.toContain('jar install');
  });

  it('installs both packages when a Python recipe module publishes a pip package and a jar', () => {
    renderRecipe({
      ...pythonProps,
      groupId: 'org.openrewrite.recipe',
      artifactId: 'rewrite-migrate-python',
    });

    // The wheel's UpgradeToPython3XX composites delegate their project-file steps to the jar. Verified
    // against the CLI: with only the pip package installed the run fails outright with
    // "delegatesTo org.openrewrite.python.migrate.UpgradePythonVersionTo314 but no recipe found".
    expect(text()).toContain('mod config recipes pip install openrewrite-migrate-python==');
    expect(text()).toContain('mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-python:');
    expect(text()).toContain('mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython314');
  });

  it('installs companion jars the recipe delegates into', () => {
    renderRecipe({
      ...pythonProps,
      groupId: 'org.openrewrite.recipe',
      artifactId: 'rewrite-migrate-python',
      companionJars: [
        { groupId: 'org.openrewrite', artifactId: 'rewrite-python', versionKey: 'VERSION_ORG_OPENREWRITE_REWRITE_PYTHON' },
      ],
    });

    // The jar recipes in turn delegate into the core language module; without it the CLI fails with
    // "delegatesTo org.openrewrite.python.UpgradeDependencyVersion but no recipe found".
    expect(text()).toContain('mod config recipes jar install org.openrewrite:rewrite-python:');
    expect(tabText('Pinned version').match(/mod config recipes jar install/g)).toHaveLength(2);
  });

  it('drops an install command whose version placeholder does not resolve', () => {
    renderRecipe({
      ...pythonProps,
      companionJars: [
        { groupId: 'org.openrewrite', artifactId: 'rewrite-nonexistent', versionKey: 'VERSION_NOT_A_REAL_KEY' },
      ],
    });

    // Better to omit the command than to paste a literal {{VERSION_...}} into the reader's shell.
    expect(text()).not.toContain('{{VERSION_');
    expect(text()).not.toContain('rewrite-nonexistent');
  });

  it('resolves both install commands to the same version placeholder', () => {
    renderRecipe({
      ...pythonProps,
      groupId: 'org.openrewrite.recipe',
      artifactId: 'rewrite-migrate-python',
    });

    expect(text()).not.toContain('{{VERSION_');
    const pinned = tabText('Pinned version');
    const versions = [...pinned.matchAll(/rewrite-migrate-python[=:]=?([\d.]+)/g)].map((m) => m[1]);
    expect(versions).toHaveLength(2);
    expect(versions[0]).toEqual(versions[1]);
  });

  it('carries required recipe options into the run command for a jar-sourced Python recipe', () => {
    renderRecipe({
      recipeName: 'org.openrewrite.python.migrate.FindMethods',
      displayName: 'Find Python function and method usages',
      pipPackage: 'openrewrite-migrate-python',
      groupId: 'org.openrewrite.recipe',
      artifactId: 'rewrite-migrate-python',
      versionKey: 'VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON',
      requiresConfiguration: true,
      cliOptions: ' --recipe-option "methodPattern=dumps(..)"',
    });

    expect(text()).toContain('mod run . --recipe org.openrewrite.python.migrate.FindMethods --recipe-option "methodPattern=dumps(..)"');
  });

  it('offers RELEASE and LATEST alongside the pinned version for a jar recipe', () => {
    renderRecipe({
      recipeName: 'org.openrewrite.java.format.AutoFormat',
      displayName: 'Format Java code',
      groupId: 'org.openrewrite',
      artifactId: 'rewrite-java',
      versionKey: 'VERSION_ORG_OPENREWRITE_REWRITE_JAVA',
    });

    // A pinned version is skipped by `mod config recipes upgrade`, which only re-resolves artifacts
    // installed with a dynamic requested version, so the dynamic forms lead.
    expect(tabText('RELEASE')).toContain('mod config recipes jar install org.openrewrite:rewrite-java:RELEASE');
    expect(tabText('LATEST')).toContain('mod config recipes jar install org.openrewrite:rewrite-java:LATEST');
    expect(tabText('Pinned version')).toMatch(/jar install org\.openrewrite:rewrite-java:[\d.]+/);
    expect(text()).toContain('mod config recipes upgrade');
  });

  it('applies the same version mode to every jar a Python recipe delegates into', () => {
    renderRecipe({
      ...pythonProps,
      groupId: 'org.openrewrite.recipe',
      artifactId: 'rewrite-migrate-python',
      companionJars: [
        { groupId: 'org.openrewrite', artifactId: 'rewrite-python', versionKey: 'VERSION_ORG_OPENREWRITE_REWRITE_PYTHON' },
      ],
    });

    // pip has no RELEASE/LATEST spelling; dropping the `==` pin is its dynamic form.
    expect(tabText('RELEASE')).toContain('mod config recipes pip install openrewrite-migrate-python\n');
    expect(tabText('RELEASE').match(/:RELEASE/g)).toHaveLength(2);
    expect(tabText('LATEST').match(/:LATEST/g)).toHaveLength(2);
  });

  it('installs only the NuGet package when a C# recipe has no companion jar', () => {
    renderRecipe({
      recipeName: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet.FindCsprojMarker',
      displayName: 'Find csproj marker',
      nugetPackage: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet',
    });

    expect(text()).toContain('mod config recipes nuget install OpenRewrite.Recipes.CSharp.Migration.Dotnet');
    expect(text()).not.toContain('jar install');
    // Nothing here has a version, so there is no second tab to choose between.
    expect(tabText('Pinned version')).toEqual('');
  });

  it('installs the jar a C# recipe delegates into alongside its NuGet package', () => {
    renderRecipe({
      recipeName: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType',
      displayName: 'Change type',
      nugetPackage: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet',
      companionJars: [
        { groupId: 'org.openrewrite', artifactId: 'rewrite-java', versionKey: 'VERSION_ORG_OPENREWRITE_REWRITE_JAVA' },
      ],
    });

    // The wrapper delegates to org.openrewrite.java.ChangeType, and NuGet cannot pull a Maven artifact,
    // so the CLI has nothing to resolve the delegate against unless the reader installs the jar too.
    expect(text()).toContain('mod config recipes nuget install OpenRewrite.Recipes.CSharp.Migration.Dotnet');
    expect(tabText('RELEASE')).toContain('mod config recipes jar install org.openrewrite:rewrite-java:RELEASE');
    expect(tabText('LATEST')).toContain('mod config recipes jar install org.openrewrite:rewrite-java:LATEST');
    expect(text()).toContain('mod run . --recipe OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType');
  });

  it('leaves the NuGet package unpinned in the pinned tab of a C# recipe', () => {
    renderRecipe({
      recipeName: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType',
      displayName: 'Change type',
      nugetPackage: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet',
      companionJars: [
        { groupId: 'org.openrewrite', artifactId: 'rewrite-java', versionKey: 'VERSION_ORG_OPENREWRITE_REWRITE_JAVA' },
      ],
    });

    // C# usage props carry no version for the NuGet package itself, so only the jar can be pinned.
    const pinned = tabText('Pinned version');
    expect(pinned).toContain('mod config recipes nuget install OpenRewrite.Recipes.CSharp.Migration.Dotnet\n');
    expect(pinned).toMatch(/jar install org\.openrewrite:rewrite-java:[\d.]+/);
  });

  it('drops an unresolvable companion jar from a C# recipe rather than pasting a placeholder', () => {
    renderRecipe({
      recipeName: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType',
      displayName: 'Change type',
      nugetPackage: 'OpenRewrite.Recipes.CSharp.Migration.Dotnet',
      companionJars: [
        { groupId: 'org.openrewrite', artifactId: 'rewrite-nonexistent', versionKey: 'VERSION_NOT_A_REAL_KEY' },
      ],
    });

    expect(text()).not.toContain('{{VERSION_');
    expect(text()).not.toContain('rewrite-nonexistent');
  });

  it('drops the pinned tab when a Go module has no resolvable version', () => {
    renderRecipe({
      recipeName: 'org.openrewrite.go.search.FindTypes',
      displayName: 'Find Go types',
      goPackage: 'github.com/moderneinc/recipes-go',
      versionKey: 'VERSION_NOT_A_REAL_KEY',
    });

    // Go modules have no RELEASE/LATEST literal either, so the bare module path is the only command
    // left once there is no version to pin — a lone tab renders as a plain code block.
    expect(text()).toContain('mod config recipes go install github.com/moderneinc/recipes-go');
    expect(text()).not.toContain('@v');
    expect(tabText('Pinned version')).toEqual('');
  });
});
