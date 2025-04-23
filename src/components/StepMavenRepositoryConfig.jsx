import React from 'react';
import mavenRepositoryConfigDefinition from './mavenRepositoryConfigDefinition';
import useMavenRepositoryValidation from './useMavenRepositoryValidation';
import MavenRepositoryInstance from './MavenRepositoryInstance';
import OptionalStepComponent from './OptionalStepComponent';

export default function StepMavenRepositoryConfig({ data = {}, updateData }) {
  const infoText = (
    <>
      In order for Moderne to retrieve your Lossless Semantic Tree (LST) or recipe artifacts, 
      the agent needs to be configured to talk to your Maven-formatted artifact repositories. 
      This connection also allows Moderne to lookup dependency versions to determine if a 
      new version is available.

      For more information on this configuration, please see our <a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-configuration#step-5-configure-the-agent-to-connect-to-your-artifact-repositories">connecting to artifact repositories documentation</a>.
    </>
  );

  return (
    <OptionalStepComponent
      configKey="mavenRepositoryConfig"
      configDefinition={mavenRepositoryConfigDefinition}
      data={data}
      updateData={updateData}
      validationHook={useMavenRepositoryValidation}
      hasInstances={true}
      infoText={infoText}
      instanceComponent={MavenRepositoryInstance}
    />
  );
}