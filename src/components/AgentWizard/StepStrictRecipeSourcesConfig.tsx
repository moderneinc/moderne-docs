import React from 'react';
import strictRecipeSourcesConfigDefinition from './strictRecipeSourcesConfigDefinition';
import useStrictRecipeSourcesValidation from './useStrictRecipeSourcesValidation';
import OptionalStepComponent from './OptionalStepComponent';
import { FormData, ConfigDefinition } from './types';

interface StepStrictRecipeSourcesConfigProps {
  data?: FormData;
  updateData: (data: FormData) => void;
}

// Type assertion to ensure the imported config matches our ConfigDefinition type
const typedStrictRecipeSourcesConfigDefinition = strictRecipeSourcesConfigDefinition as ConfigDefinition;

export default function StepStrictRecipeSourcesConfig({ 
  data = {}, 
  updateData 
}: StepStrictRecipeSourcesConfigProps) {
  const infoText = (
    <>
      Some organizations want recipe artifacts to only come from locations configured in the Moderne agent. 
      If you want to configure that, please enable this step.

      For more information on these variables and how to configure them, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-strict-recipe-sources">strict recipe sources documentation</a>.
    </>
  );

  return (
    <OptionalStepComponent
      configKey="strictRecipeSourcesConfig"
      configDefinition={typedStrictRecipeSourcesConfigDefinition}
      data={data}
      updateData={updateData}
      validationHook={useStrictRecipeSourcesValidation}
      hasInstances={false}
      infoText={infoText}
    />
  );
}