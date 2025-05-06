// General field definition used in many different components
export interface Field {
  label: string;
  key: string;
  envKey: string;
  description?: string;
  required: boolean;
  type: string;
  defaultValue?: string;
}

export interface ConfigDefinition {
  label: string;
  fields: Field[];
}

export interface FieldData {
  value: string | string[] | boolean;
  asEnv: boolean;
  envKey: string;
}

export interface Instance {
  [key: string]: FieldData;
}

export interface ValidationResult {
  valid: boolean;
  missingFields: string[];
}

export interface InstanceComponentProps {
  index: number;
  instance: Instance;
  configDefinition: ConfigDefinition;
  onFieldChange: (index: number, fieldKey: string, value: string | string[] | boolean) => void;
  onEnvToggle: (index: number, fieldKey: string) => void;
  hasFieldError: (index: number, fieldKey: string) => boolean;
}

export interface ValidationHookResult {
  validationAttempted: boolean;
  setValidationAttempted: React.Dispatch<React.SetStateAction<boolean>>;
  validateAndUpdate: (currentInstances?: Instance[], isEnabled?: boolean) => boolean;
  hasFieldError: (instanceIndex: number | string, fieldKey?: string) => boolean;
}

// Provider configurations
export interface ProviderConfig {
  instances: Instance[];
}

export interface GeneralConfig {
  fields?: {
    [key: string]: FieldData;
  };
  commitOptions?: string[];
}

// Configuration sections
export interface BaseConfig {
  enabled: boolean;
  validation?: ValidationResult;
}

export interface InstancesConfig extends BaseConfig {
  instances: Instance[];
  count?: number;
}

export interface FieldsConfig extends BaseConfig {
  fields: {
    [key: string]: FieldData;
  };
}

export interface ArtifactoryLSTConfig extends InstancesConfig {}

export interface MavenRepositoryConfig extends InstancesConfig {}

export interface StrictRecipeSourcesConfig extends FieldsConfig {}

// Main form data interface
export interface FormData {
  generalConfig?: GeneralConfig;
  providers?: string[];
  providerConfigs?: {
    [providerId: string]: ProviderConfig;
  };
  artifactoryLSTConfig?: ArtifactoryLSTConfig;
  mavenRepositoryConfig?: MavenRepositoryConfig;
  strictRecipeSourcesConfig?: StrictRecipeSourcesConfig;
  [key: string]: any; // To allow for dynamic config keys
  validation?: ValidationResult;
  triggerValidation?: {
    [key: string]: boolean;
  };
}

export type CommandType = 'docker' | 'java';
export type OSType = 'unix' | 'windows';