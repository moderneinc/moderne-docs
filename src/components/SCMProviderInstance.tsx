import { FC } from "react";
import {
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";
import ConfigField from "./ConfigField";
import { ProviderDefinition } from "./configSchema";
import styles from "./styles/SCMProviderInstance.module.css";

interface SCMProviderInstanceProps {
  scmProviderType: string;
  scmProviderConfig: ProviderDefinition;
  index: number;
  basePath: string; // This would be something like `${stepKey}.configs.${providerType}.${index}`
}

type ErrorRecord = Record<
  string,
  FieldError | Merge<FieldError, FieldErrorsImpl<any>>
>;

/**
 * Renders a single instance of an SCM provider configuration
 * Using idiomatic React Hook Form pattern with proper field management
 */
const SCMProviderInstance: FC<SCMProviderInstanceProps> = ({
  scmProviderType,
  scmProviderConfig,
  index,
  basePath,
}) => {
  // Get methods directly from React Hook Form context
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  // Cast the errors to a more specific type for proper access
  const fieldErrors = errors[basePath] as ErrorRecord | undefined;

  return (
    <div className={styles.instance}>
      <h4>
        {scmProviderConfig.label} #{index + 1}
      </h4>

      {scmProviderConfig.fields.map((field) => {
        // Watch the field's env flag - now we can access it directly from the form
        const envFlagPath = `${basePath}.${field.key}_useAsEnv`;
        const useAsEnv = watch(envFlagPath) || false;

        return (
          <Controller
            key={`${scmProviderType}-${index}-${field.key}`}
            name={`${basePath}.${field.key}`}
            control={control}
            defaultValue=""
            rules={
              field.required && !useAsEnv
                ? {
                    required: `${field.label} is required`,
                  }
                : {}
            }
            render={({ field: formField }) => (
              <ConfigField
                field={field}
                value={formField.value || ""}
                onChange={formField.onChange}
                onEnvToggle={() => {
                  // Toggle the environment flag directly in the form
                  setValue(envFlagPath, !useAsEnv);
                }}
                useAsEnv={useAsEnv}
                hasError={!!fieldErrors?.[field.key]}
                errorMessage={fieldErrors?.[field.key]?.message as string}
                name={`${scmProviderType}-${index}-${field.key}`}
              />
            )}
          />
        );
      })}
    </div>
  );
};

export default SCMProviderInstance;
