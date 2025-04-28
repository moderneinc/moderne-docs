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

interface FieldConfig {
  value?: string | string[] | boolean;
  asEnv?: boolean;
  envKey?: string;
}

interface ConfigDefinition {
  label: string;
  fields: Field[];
}

export interface InstanceComponentProps {
  index: number;
  instance: Instance;
  configDefinition: ConfigDefinition;
  onFieldChange: (index: number, fieldKey: string, value: string | string[] | boolean) => void;
  onEnvToggle: (index: number, fieldKey: string) => void;
  hasFieldError: (index: number, fieldKey: string) => boolean;
}

// Validation types
interface FieldData {
  value: string | string[];
  asEnv: boolean;
  envKey: string;
}

export interface Instance {
  [key: string]: FieldData;
}

interface ValidationResult {
  valid: boolean;
  missingFields: string[];
}

interface ArtifactoryLSTConfig {
  enabled: boolean;
  instances: Instance[];
  count: number;
  validation: ValidationResult;
}

export interface FormData {
  artifactoryLSTConfig?: ArtifactoryLSTConfig;
  validation?: ValidationResult;
  triggerValidation?: {
    [key: string]: boolean;
  };
}

export interface ValidationHookResult {
  validationAttempted: boolean;
  setValidationAttempted: React.Dispatch<React.SetStateAction<boolean>>;
  validateAndUpdate: (currentInstances?: Instance[], isEnabled?: boolean) => boolean;
  hasFieldError: (instanceIndex: number, fieldKey: string) => boolean;
}