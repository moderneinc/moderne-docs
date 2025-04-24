/**
 * Central type definitions for the Moderne Agent Configuration Wizard
 */

import { ReactNode } from "react";

// Field definition for configuration inputs
export interface Field {
  label: string;
  key: string;
  envKey: string;
  description?: string;
  required: boolean;
  type: "text" | "boolean" | "array";
  defaultValue?: string;
}

// Definition for a configuration section
export interface ConfigDefinition {
  label: string;
  description?: string;
  fields: Field[];
}

// Provider configuration for SCM providers
export interface ProviderDefinition {
  label: string;
  fields: Field[];
}

// Providers available in the SCM configuration
export interface SCMProviderDefinitions {
  github: ProviderDefinition;
  gitlab: ProviderDefinition;
  bitbucket: ProviderDefinition;
  azure: ProviderDefinition;
}

// Wizard steps configuration
export interface WizardStep {
  label: string;
  section?: {
    configKey?: string;
    optional?: boolean;
    label: string;
    description?: string;
    fields?: Field[];
    providers?: SCMProviderDefinitions;
  };
  component: string;
}

// Structure of all configuration sections
export interface ConfigSections {
  generalConfig: {
    configKey: string;
    optional: boolean;
    label: string;
    description?: string;
    fields: Field[];
  };
  scmConfig: {
    configKey: string;
    optional: boolean;
    label: string;
    description?: string;
    providers: SCMProviderDefinitions;
  };
  artifactoryLSTConfig: {
    configKey: string;
    optional: boolean;
    label: string;
    description?: string;
    fields: Field[];
  };
  mavenRepositoryConfig: {
    configKey: string;
    optional: boolean;
    label: string;
    description?: string;
    fields: Field[];
  };
  orgServiceConfig: {
    configKey: string;
    optional: boolean;
    label: string;
    description?: string;
    fields: Field[];
  };
  strictRecipeSourcesConfig: {
    configKey: string;
    optional: boolean;
    label: string;
    description?: string;
    fields: Field[];
  };
}

// State saved to localStorage
export interface WizardState {
  currentStep: number;
  formValues: any;
}

// Props for Array Field component
export interface ArrayFieldProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  name: string;
  hasError?: boolean;
  errorMessage?: string;
}

// Props for Config Field component
export interface ConfigFieldProps {
  field: Field;
  value: string;
  onChange: (value: string) => void;
  onEnvToggle?: () => void;
  useAsEnv?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  name: string;
}

// Props for Config Step component
export interface ConfigStepProps {
  configDefinition: any;
  stepKey: string;
}

// Props for Section components
export interface SectionProps {
  configDefinition: any;
  stepKey: string;
}

// Props for SCM Provider Instance component
export interface SCMProviderInstanceProps {
  scmProviderType: string;
  scmProviderConfig: ProviderDefinition;
  index: number;
  basePath: string;
}

// Props for Artifactory LST Instance component
export interface ArtifactoryLSTInstanceProps {
  index: number;
  configDefinition: ConfigDefinition;
  basePath: string;
}

// Props for Maven Repository Instance component
export interface MavenRepositoryInstanceProps {
  index: number;
  configDefinition: ConfigDefinition;
  basePath: string;
}

// Props for Optional Step component
export interface OptionalStepComponentProps {
  configDefinition: any;
  stepKey: string;
  children: ReactNode;
}
