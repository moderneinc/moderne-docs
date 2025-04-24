import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import ConfigField from "./ConfigField";
import {
  ConfigField as ConfigFieldType,
  ConfigSectionDefinition,
} from "./configSchema";
import styles from "./styles/MavenRepositoryInstance.module.css";

interface MavenRepositoryInstanceProps {
  index: number;
  configDefinition: ConfigSectionDefinition;
  basePath: string; // This would be something like `${stepKey}.configs.maven.${index}`
}

/**
 * Renders a single instance of a Maven Repository configuration
 * Using idiomatic React Hook Form pattern
 */
const MavenRepositoryInstance: React.FC<MavenRepositoryInstanceProps> = ({
  index,
  configDefinition,
  basePath,
}) => {
  // Get methods directly from React Hook Form context
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  return (
    <div className={styles.instanceContainer}>
      <h4>
        {configDefinition.label} #{index + 1}
      </h4>

      {configDefinition.fields.map((field: ConfigFieldType) => {
        // Watch the field's env flag directly from the form
        const envFlagPath = `${basePath}.${field.key}_useAsEnv`;
        const useAsEnv = watch(envFlagPath) || false;

        return (
          <Controller
            key={`maven-repository-${index}-${field.key}`}
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
                hasError={!!errors[basePath as any]?.[field.key as any]}
                errorMessage={
                  errors[basePath as any]?.[field.key as any]?.message as string
                }
                name={`maven-repository-${index}-${field.key}`}
              />
            )}
          />
        );
      })}
    </div>
  );
};

export default MavenRepositoryInstance;
