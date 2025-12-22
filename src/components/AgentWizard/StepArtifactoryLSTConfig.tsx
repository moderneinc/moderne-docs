import React from 'react';
import artifactoryLSTConfigDefinition from './artifactoryLSTConfigDefinition';
import useArtifactoryLSTValidation from './useArtifactoryLSTValidation';
import ArtifactoryLSTInstance from './ArtifactoryLSTInstance';
import OptionalStepComponent from './OptionalStepComponent';
import { FormData, ConfigDefinition } from './types';

interface StepArtifactoryLSTConfigProps {
  data?: FormData;
  updateData: (data: FormData) => void;
}

// Type assertion to ensure the imported config matches our ConfigDefinition type
const typedArtifactoryLSTConfigDefinition = artifactoryLSTConfigDefinition as ConfigDefinition;

export default function StepArtifactoryLSTConfig({ 
  data = {}, 
  updateData 
}: StepArtifactoryLSTConfigProps) {
  const infoText = (
    <>
      If you want to use Artifactory to store your LST artifacts, enable this step. 
      This will allow you to use AQL queries to fetch the LSTs – which will result 
      in a noticeable speed improvement.

      For more information, please see <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access">our documentation</a>
    </>
  );

  return (
    <OptionalStepComponent
      configKey="artifactoryLSTConfig"
      configDefinition={typedArtifactoryLSTConfigDefinition}
      data={data}
      updateData={updateData}
      validationHook={useArtifactoryLSTValidation}
      hasInstances={true}
      infoText={infoText}
      instanceComponent={ArtifactoryLSTInstance}
    />
  );
}