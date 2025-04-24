import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import ConfigField from "./ConfigField";
import OptionalStepComponent from "./OptionalStepComponent";
import { ConfigStepProps } from "./types";

/**
 * A generic configuration step component
 * Renders a list of fields based on the provided configuration definition
 */
const ConfigStep: React.FC<ConfigStepProps> = ({
  configDefinition,
  stepKey,
}) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  // If the step is optional, wrap with OptionalStepComponent
  if (configDefinition.optional) {
    return (
      <OptionalStepComponent
        configDefinition={configDefinition}
        stepKey={stepKey}
      >
        <ConfigStepContent
          configDefinition={configDefinition}
          stepKey={stepKey}
        />
      </OptionalStepComponent>
    );
  }

  return (
    <ConfigStepContent configDefinition={configDefinition} stepKey={stepKey} />
  );
};

/**
 * The actual content of a configuration step
 */
const ConfigStepContent: React.FC<ConfigStepProps> = ({
  configDefinition,
  stepKey,
}) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  return (
    <div className="config-step">
      {configDefinition.description && (
        <p dangerouslySetInnerHTML={{ __html: configDefinition.description }} />
      )}

      {configDefinition.fields.map((field) => {
        // Watch the field's env flag directly from the form
        const envFlagPath = `${stepKey}.fields.${field.key}.useAsEnv`;
        const useAsEnv = watch(envFlagPath) || false;

        return (
          <Controller
            key={`${stepKey}-${field.key}`}
            name={`${stepKey}.fields.${field.key}.value`}
            control={control}
            defaultValue={field.defaultValue || ""}
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
                hasError={
                  !!errors[stepKey] &&
                  !!(errors[stepKey] as any)?.fields?.[field.key]?.value
                }
                errorMessage={
                  (errors[stepKey] &&
                    (errors[stepKey] as any)?.fields?.[field.key]?.value
                      ?.message) as string
                }
                name={`${stepKey}-${field.key}`}
              />
            )}
          />
        );
      })}
    </div>
  );
};

export default ConfigStep;
