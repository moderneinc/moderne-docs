import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import ArtifactoryLSTInstance from "./ArtifactoryLSTInstance";
import { ConfigSectionDefinition } from "./configSchema";
import styles from "./styles/ArtifactoryLSTSection.module.css";

interface ArtifactoryLSTSectionProps {
  configDefinition: ConfigSectionDefinition;
  stepKey: string;
}

/**
 * Renders the Artifactory LST configuration step
 * Using idiomatic React Hook Form pattern
 */
const ArtifactoryLSTSection: React.FC<ArtifactoryLSTSectionProps> = ({
  configDefinition,
  stepKey,
}) => {
  const { control } = useFormContext();

  // Create a field array for Artifactory instances
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${stepKey}.instances`,
  });

  // Get the count of instances
  const instanceCount = fields.length || 0;

  // Handle adding a new instance
  const handleAddInstance = (): void => {
    append({});
  };

  // Handle removing an instance
  const handleRemoveInstance = (index: number): void => {
    remove(index);
  };

  return (
    <div className="artifactory-lst-config-step">
      {configDefinition.description && (
        <p className="step-description">{configDefinition.description}</p>
      )}

      <div className={styles.instancesContainer}>
        <div className={styles.instancesHeader}>
          <h4>Artifactory LST Instances</h4>
          <button
            type="button"
            onClick={handleAddInstance}
            className="button button--sm button--primary"
          >
            Add Instance
          </button>
        </div>

        {instanceCount === 0 ? (
          <p>
            No Artifactory LST instances configured. Click "Add Instance" to add
            one.
          </p>
        ) : (
          fields.map((field, index) => {
            const instancePath = `${stepKey}.instances.${index}`;
            return (
              <div key={field.id} className={styles.instanceWrapper}>
                <ArtifactoryLSTInstance
                  index={index}
                  configDefinition={configDefinition}
                  basePath={instancePath}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveInstance(index)}
                  className="button button--sm button--danger"
                  style={{ marginTop: "0.5rem" }}
                >
                  Remove
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ArtifactoryLSTSection;
