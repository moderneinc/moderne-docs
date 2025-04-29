// General field definition used in many different components
export interface Field {
  label: string;
  key: string;
  envKey: string;
  description?: string;
  required: boolean;
  type: "text" | "boolean" | "array";
  defaultValue?: string;
}

export interface ConfigDefinition {
  label: string;
  fields: Field[];
}

export interface FieldData {
  value: string | string[];
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
  hasFieldError: (instanceIndex: number, fieldKey: string) => boolean;
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
export interface ArtifactoryLSTConfig {
  enabled: boolean;
  instances: Instance[];
  count?: number;
  validation?: ValidationResult;
}

export interface MavenRepositoryConfig {
  enabled: boolean;
  instances: Instance[];
  validation?: ValidationResult;
}

export interface OrgServiceConfig {
  enabled: boolean;
  fields: {
    [key: string]: FieldData;
  };
  validation?: ValidationResult;
}

export interface StrictRecipeSourcesConfig {
  enabled: boolean;
  fields: {
    [key: string]: FieldData;
  };
  validation?: ValidationResult;
}

// Main form data interface
export interface FormData {
  generalConfig?: GeneralConfig;
  providers?: string[];
  providerConfigs?: {
    [providerId: string]: ProviderConfig;
  };
  artifactoryLSTConfig?: ArtifactoryLSTConfig;
  mavenRepositoryConfig?: MavenRepositoryConfig;
  orgServiceConfig?: OrgServiceConfig;
  strictRecipeSourcesConfig?: StrictRecipeSourcesConfig;
  validation?: ValidationResult;
  triggerValidation?: {
    [key: string]: boolean;
  };
}

// Command types
export type CommandType = 'docker' | 'java';