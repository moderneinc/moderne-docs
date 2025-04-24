import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./styles/OptionalStepComponent.module.css";
import { OptionalStepComponentProps } from "./types";

/**
 * A component that wraps optional configuration sections
 * Allows users to enable/disable the section
 */
const OptionalStepComponent: React.FC<OptionalStepComponentProps> = ({
  configDefinition,
  stepKey,
  children,
}) => {
  const { watch, setValue } = useFormContext();

  // Check if this optional section is enabled
  const isEnabled = watch(`${stepKey}.enabled`) || false;

  // Toggle the enabled state
  const handleToggle = (enabled: boolean) => {
    setValue(`${stepKey}.enabled`, enabled);
  };

  return (
    <div className={styles.container}>
      <div className={styles.enableSection}>
        <label className={styles.enableCheckbox}>
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={() => handleToggle(!isEnabled)}
            id={`${stepKey}-enabled`}
          />{" "}
          {configDefinition.label}
        </label>

        {!isEnabled && configDefinition.description && (
          <p className={styles.infoText}>{configDefinition.description}</p>
        )}
      </div>

      {isEnabled && <div className={styles.contentSection}>{children}</div>}
    </div>
  );
};

export default OptionalStepComponent;
