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
    expect(text().match(/mod config recipes jar install/g)).toHaveLength(2);
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
    const versions = [...text().matchAll(/rewrite-migrate-python[=:]=?([\d.]+)/g)].map((m) => m[1]);
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
});
