/**
 * Centralized configuration schema for the Moderne Agent wizard
 * Brings together all configuration sections in a single place for better maintainability
 */

import artifactoryLSTConfigDefinition from "./artifactoryLSTConfigDefinition";
import generalConfigDefinition from "./generalConfigDefinition";
import mavenRepositoryConfigDefinition from "./mavenRepositoryConfigDefinition";
import orgServiceConfigDefinition from "./orgServiceConfigDefinition";
import { scmProviderDefinitions } from "./scmProviderDefinitions";
import strictRecipeSourcesConfigDefinition from "./strictRecipeSourcesConfigDefinition";
import {
  ConfigDefinition,
  ConfigSections,
  Field,
  ProviderDefinition,
  WizardStep,
} from "./types";

// Re-export necessary types
export type { ConfigDefinition, Field, ProviderDefinition, WizardStep };
export type ConfigField = Field;
export type ConfigSectionDefinition = ConfigDefinition;

// Centralized configuration schema
export const configSections: ConfigSections = {
  generalConfig: {
    ...generalConfigDefinition,
    configKey: "generalConfig",
    optional: false,
  },
  scmConfig: {
    label: "SCM Configuration",
    configKey: "scmConfig",
    description: "Configure access to your source control management system(s)",
    optional: false,
    providers: scmProviderDefinitions,
  },
  artifactoryLSTConfig: {
    ...artifactoryLSTConfigDefinition,
    configKey: "artifactoryLSTConfig",
    optional: true,
  },
  mavenRepositoryConfig: {
    ...mavenRepositoryConfigDefinition,
    configKey: "mavenRepositoryConfig",
    optional: true,
  },
  orgServiceConfig: {
    ...orgServiceConfigDefinition,
    configKey: "orgServiceConfig",
    optional: true,
  },
  strictRecipeSourcesConfig: {
    ...strictRecipeSourcesConfigDefinition,
    configKey: "strictRecipeSourcesConfig",
    optional: true,
  },
};

// This defines the order and structure of the wizard steps
export const wizardSteps: WizardStep[] = [
  {
    label: "Core Variables",
    section: configSections.generalConfig,
    component: "ConfigStep",
  },
  {
    label: "SCM Configuration",
    section: configSections.scmConfig,
    component: "SCMStep",
  },
  {
    label: "Artifactory LST Storage",
    section: configSections.artifactoryLSTConfig,
    component: "ArtifactoryLSTStep",
  },
  {
    label: "Maven Repository",
    section: configSections.mavenRepositoryConfig,
    component: "MavenRepositoryStep",
  },
  {
    label: "Organization Service",
    section: configSections.orgServiceConfig,
    component: "ConfigStep",
  },
  {
    label: "Strict Recipe Sources",
    section: configSections.strictRecipeSourcesConfig,
    component: "ConfigStep",
  },
  {
    label: "Command Preview",
    component: "CommandPreview",
  },
];
