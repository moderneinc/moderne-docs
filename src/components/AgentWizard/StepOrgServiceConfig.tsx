import React from 'react';
import orgServiceConfigDefinition from './orgServiceConfigDefinition';
import useOrgServiceValidation from './useOrgServiceValidation';
import OptionalStepComponent from './OptionalStepComponent';
import { FormData, ConfigDefinition } from './types';

interface StepOrgServiceConfigProps {
  data?: FormData;
  updateData: (data: FormData) => void;
}

// Type assertion to ensure the imported config matches our ConfigDefinition type
const typedOrgServiceConfigDefinition = orgServiceConfigDefinition as ConfigDefinition;

export default function StepOrgServiceConfig({ 
  data = {}, 
  updateData 
}: StepOrgServiceConfigProps) {
  const infoText = (
    <>
      If you've configured an Organizations service, you will need to enable this so the agent can know about it.

      For more information on these variables and how to configure them, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration#step-6-optionally-configure-the-organizations-service">Organizations service configuration documentation</a>.
    </>
  );

  return (
    <OptionalStepComponent
      configKey="orgServiceConfig"
      configDefinition={orgServiceConfigDefinition}
      data={data}
      updateData={updateData}
      validationHook={useOrgServiceValidation}
      hasInstances={false}
      infoText={infoText}
    />
  );
}