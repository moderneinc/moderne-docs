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
      Configure your organization hierarchy and development center integration.
      This allows the agent to synchronize with your organization structure and
      connect to the development center for enhanced collaboration features.

      For more information on these settings, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-organization-hierarchy">organization hierarchy documentation</a>.
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