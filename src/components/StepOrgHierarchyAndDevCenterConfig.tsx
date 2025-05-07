import React from 'react';
import orgHierarchyAndDevCenterConfigDefinition from './orgHierarchyAndDevCenterConfigDefinition';
import useOrgHierarchyAndDevCenterValidation from './useOrgHierarchyAndDevCenterValidation';
import OptionalStepComponent from './OptionalStepComponent';
import { FormData, ConfigDefinition } from './types';

interface StepOrgHierarchyAndDevCenterConfigProps {
  data?: FormData;
  updateData: (data: FormData) => void;
}

// Type assertion to ensure the imported config matches our ConfigDefinition type
const typedOrgHierarchyAndDevCenterConfigDefinition = orgHierarchyAndDevCenterConfigDefinition as ConfigDefinition;

export default function StepOrgHierarchyAndDevCenterConfig({
  data = {},
  updateData
}: StepOrgHierarchyAndDevCenterConfigProps) {
  const infoText = (
    <>
      If you want to configure an organizational hierarchy in the Moderne Platform, please enable this step.
      This step also allows you to configure Dev Centers if desired – although you must provide an organizational hierarchy to as well.

      <br /><br />
      For more information on DevCenters, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/dev-center">Dev Center configuration doc</a>. <br />
      For more information on the organizational hierarchy, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-organizations-hierarchy">organization hierarchy documentation</a>.
    </>
  );

  return (
    <OptionalStepComponent
      configKey="orgHierarchyAndDevCenterConfig"
      configDefinition={typedOrgHierarchyAndDevCenterConfigDefinition}
      data={data}
      updateData={updateData}
      validationHook={useOrgHierarchyAndDevCenterValidation}
      hasInstances={false}
      infoText={infoText}
    />
  );
}