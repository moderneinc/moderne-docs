import React from 'react';
import orgServiceConfigDefinition from './orgServiceConfigDefinition';
import useOrgServiceValidation from './useOrgServiceValidation';
import OptionalStepComponent from './OptionalStepComponent';

export default function StepOrgServiceConfig({ data = {}, updateData }) {
  const infoText = (
    <>
      If you've <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/organizations-service">configured an Organizations service</a>, 
      you will need to enable this so the agent can know about it.

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