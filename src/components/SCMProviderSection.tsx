import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import SCMProviderInstance from "./SCMProviderInstance";
import { scmProviderDefinitions } from "./scmProviderDefinitions";
import styles from "./styles/SCMProviderSection.module.css";
import { ProviderDefinition } from "./types";

interface Provider {
  value: string;
}

interface SCMProviderSectionProps {
  configDefinition: Record<string, unknown>;
  stepKey: string;
}

/**
 * Renders the SCM configuration step with multiple provider options
 * Now using React Hook Form for form state management in an idiomatic way
 */
const SCMProviderSection: FC<SCMProviderSectionProps> = ({
  configDefinition,
  stepKey,
}) => {
  const { control, watch, setValue } = useFormContext();

  // Create a field array for providers
  const {
    fields: providerFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `${stepKey}.providers`,
  });

  // Watch the selected providers
  const providers = watch(`${stepKey}.providers`) || [];
  const providerMap = providers.reduce(
    (map: Record<string, boolean>, provider: Provider) => {
      map[provider.value] = true;
      return map;
    },
    {}
  );

  // Handle provider selection toggle
  const handleProviderToggle = (providerType: string): void => {
    if (providerMap[providerType]) {
      // Remove provider
      const index = providers.findIndex(
        (p: Provider) => p.value === providerType
      );
      if (index !== -1) {
        remove(index);
      }

      // Also remove counts and configurations
      setValue(`${stepKey}.counts.${providerType}`, undefined);
      setValue(`${stepKey}.configs.${providerType}`, undefined);
    } else {
      // Add provider
      append({ value: providerType });

      // Initialize count to 1
      setValue(`${stepKey}.counts.${providerType}`, 1);
    }
  };

  // Handle instance count change for a provider
  const handleCountChange = (providerType: string, count: number): void => {
    setValue(`${stepKey}.counts.${providerType}`, Math.max(1, count));
  };

  // Get count for a provider
  const getProviderCount = (providerType: string): number => {
    return watch(`${stepKey}.counts.${providerType}`) || 1;
  };

  return (
    <div className="scm-config-step">
      <h4>Select SCM Provider(s)</h4>
      <p>
        Choose one or more source control management providers to configure:
      </p>

      {Object.entries(scmProviderDefinitions || {}).map(
        ([providerType, providerConfig]) => (
          <div key={providerType} className={styles.section}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={providerMap[providerType] || false}
                onChange={() => handleProviderToggle(providerType)}
              />{" "}
              {providerConfig.label}
            </label>

            {providerMap[providerType] && (
              <div className={styles.configs}>
                <label className={styles.instanceCount}>
                  Number of {providerConfig.label} Configs:{" "}
                  <input
                    type="number"
                    min={1}
                    value={getProviderCount(providerType)}
                    onChange={(e) =>
                      handleCountChange(
                        providerType,
                        Number.parseInt(e.target.value || "1", 10)
                      )
                    }
                    style={{ width: "60px" }}
                  />
                </label>

                {Array.from({ length: getProviderCount(providerType) }).map(
                  (_, index) => {
                    const instancePath = `${stepKey}.configs.${providerType}.${index}`;

                    return (
                      <SCMProviderInstance
                        key={`${providerType}-instance-${index}`}
                        scmProviderType={providerType}
                        scmProviderConfig={providerConfig as ProviderDefinition}
                        index={index}
                        basePath={instancePath}
                      />
                    );
                  }
                )}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SCMProviderSection;
