import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import MavenRepositoryInstance from "./MavenRepositoryInstance";
import styles from "./styles/MavenRepositorySection.module.css";
import { SectionProps } from "./types";

/**
 * Renders the Maven Repository configuration step
 * Using idiomatic React Hook Form pattern
 */
const MavenRepositorySection: React.FC<SectionProps> = ({
  configDefinition,
  stepKey,
}) => {
  const { control, watch, setValue } = useFormContext();

  // Create a field array for Maven Repository instances
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${stepKey}.instances`,
  });

  // Get the count of instances
  const instanceCount = fields.length || 0;

  // Handle adding a new instance
  const handleAddInstance = () => {
    append({});
  };

  // Handle removing an instance
  const handleRemoveInstance = (index: number) => {
    remove(index);
  };

  return (
    <div className="maven-repository-config-step">
      {configDefinition.description && (
        <p className="step-description">{configDefinition.description}</p>
      )}

      <div className={styles.instancesContainer}>
        <div className={styles.instancesHeader}>
          <h4>Maven Repository Instances</h4>
          <button
            type="button"
            onClick={handleAddInstance}
            className="button button--sm button--primary"
          >
            Add Repository
          </button>
        </div>

        {instanceCount === 0 ? (
          <p>
            No Maven repository instances configured. Click "Add Repository" to
            add one.
          </p>
        ) : (
          fields.map((field, index) => {
            const instancePath = `${stepKey}.instances.${index}`;
            return (
              <div key={field.id} className={styles.instanceWrapper}>
                <MavenRepositoryInstance
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

export default MavenRepositorySection;
