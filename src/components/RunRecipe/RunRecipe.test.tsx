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

    // The wheel's UpgradeToPython3XX composites delegate their project-file steps back to the jar, so a
    // reader who follows only the pip command gets a recipe that silently skips those steps.
    expect(text()).toContain('mod config recipes pip install openrewrite-migrate-python==');
    expect(text()).toContain('mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-python:');
    expect(text()).toContain('mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython314');
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
