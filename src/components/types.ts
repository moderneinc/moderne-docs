// Array field types
interface Field {
  defaultValue?: string;
  [key: string]: any;
}

export interface ArrayFieldProps {
  field: Field;
  value?: string | string[];
  onChange: (values: string[]) => void;
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