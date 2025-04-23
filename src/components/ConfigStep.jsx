import { Controller, useFormContext } from 'react-hook-form';
import ConfigField from './ConfigField';
import OptionalStepComponent from './OptionalStepComponent';
/**
 * Generic configuration step component that can be used for any configuration section
 * Now using React Hook Form for form state management
 */
export default function ConfigStep({ configDefinition, stepKey }) {
  // Get methods from react-hook-form context
  const { control, watch, formState: { errors } } = useFormContext();
  
  // Check if this is an optional step
  const isOptional = configDefinition.optional === true;
  
  // For optional steps, watch the enabled state
  const isEnabled = isOptional ? watch(`${stepKey}.enabled`) : true;
  
  // Render optional step with toggle
  if (isOptional) {
    return (
      <div className="config-step">
        <Controller
          name={`${stepKey}.enabled`}
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <OptionalStepComponent
              title={configDefinition.label}
              description={configDefinition.description}
              isEnabled={field.value}
              onToggle={(value) => field.onChange(value)}
            >
              {field.value && (
                <div className="fields-container">
                  {configDefinition.fields.map(field => (
                    <Controller
                      key={field.key}
                      name={`${stepKey}.fields.${field.key}`}
                      control={control}
                      defaultValue={{
                        value: field.defaultValue || '',
                        useAsEnv: false
                      }}
                      rules={field.required ? { 
                        required: `${field.label} is required` 
                      } : {}}
                      render={({ field: formField }) => (
                        <ConfigField
                          field={field}
                          value={formField.value?.value || ''}
                          onChange={(value) => {
                            formField.onChange({
                              ...formField.value,
                              value
                            });
                          }}
                          onEnvToggle={() => {
                            formField.onChange({
                              ...formField.value,
                              useAsEnv: !formField.value?.useAsEnv
                            });
                          }}
                          useAsEnv={formField.value?.useAsEnv || false}
                          hasError={!!errors[stepKey]?.fields?.[field.key]}
                          errorMessage={errors[stepKey]?.fields?.[field.key]?.message}
                          name={`${stepKey}-${field.key}`}
                        />
                      )}
                    />
                  ))}
                </div>
              )}
            </OptionalStepComponent>
          )}
        />
      </div>
    );
  }
  
  // Render required step
  return (
    <div className="config-step">
      {configDefinition.description && (
        <p className="step-description">{configDefinition.description}</p>
      )}
      
      {configDefinition.fields.map(field => (
        <Controller
          key={field.key}
          name={`${stepKey}.fields.${field.key}`}
          control={control}
          defaultValue={{
            value: field.defaultValue || '',
            useAsEnv: false
          }}
          rules={field.required ? { 
            required: `${field.label} is required` 
          } : {}}
          render={({ field: formField }) => (
            <ConfigField
              field={field}
              value={formField.value?.value || ''}
              onChange={(value) => {
                formField.onChange({
                  ...formField.value,
                  value
                });
              }}
              onEnvToggle={() => {
                formField.onChange({
                  ...formField.value,
                  useAsEnv: !formField.value?.useAsEnv
                });
              }}
              useAsEnv={formField.value?.useAsEnv || false}
              hasError={!!errors[stepKey]?.fields?.[field.key]}
              errorMessage={errors[stepKey]?.fields?.[field.key]?.message}
              name={`${stepKey}-${field.key}`}
            />
          )}
        />
      ))}
    </div>
  );
}