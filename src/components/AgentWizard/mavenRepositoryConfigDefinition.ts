/**
 * Maven Repository Configuration Definitions
 * Contains configuration for Maven Repository settings
 */

const mavenRepositoryConfigDefinition = {
  label: 'Maven Repository Configuration',
  fields: [
    { 
      label: 'Repository URL', 
      key: 'repositoryUrl', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_URL',
      description: 'The URL of the Maven repository.',
      required: true,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Local Repository', 
      key: 'localRepository', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_LOCALREPOSITORY',
      description: `The path on disk where LST artifacts and Maven index files will be downloaded to. 
      This is on the disk where the agent is being run and not on the Maven instance. <br/><br/>
      LST artifacts are deleted from this location after they are transmitted to Moderne. 
      Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/>
      If multiple Maven repositories are configured on the agent, they must have different local repositories configured.`,
      required: true,
      type: 'text',
      defaultValue: '~/.moderne-maven'
    },
    { 
      label: 'Username', 
      key: 'username', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_USERNAME',
      description: 'The username used to resolve artifacts.',
      required: false,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Password', 
      key: 'password', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_PASSWORD',
      description: 'The password used to resolve artifacts.',
      required: false,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Releases', 
      key: 'releases', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_RELEASES',
      description: 'Specifies whether or not this repository should be searched for releases.',
      required: false,
      type: 'boolean',
      defaultValue: 'true'
    },
    { 
      label: 'Snapshots', 
      key: 'snapshots', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_SNAPSHOTS',
      description: 'Specifies whether or not this repository should be searched for snapshots.',
      required: false,
      type: 'boolean',
      defaultValue: 'true'
    },
    { 
      label: 'LST Source', 
      key: 'lstSource', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_ASTSOURCE',
      description: 'Specifies whether or not this repository should be searched for LST artifacts. <strong>Set this to false if you configured Artifactory LST storage</strong>.',
      required: false,
      type: 'boolean',
      defaultValue: 'true'
    },
    { 
      label: 'Recipe Source', 
      key: 'recipeSource', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_RECIPESOURCE',
      description: `Specifies whether or not this repository should be searched for recipe jars. <br/><br/>
      If you want to configure a Moderne DevCenter, you will need to ensure that you have exactly 
      one Maven repository configured with <strong>RECIPESOURCE</strong> set to <strong>true</strong>. 
      (It is fine to have this same Maven repository configured in multiple agents.)`,
      required: false,
      type: 'boolean',
      defaultValue: 'true'
    },
    { 
      label: 'Skip SSL', 
      key: 'skipSsl', 
      envKey: 'MODERNE_AGENT_MAVEN_${i}_SKIPSSL',
      description: 'Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. <strong>This must be set to true if you use a self-signed SSL/TLS certificate</strong>.',
      required: false,
      type: 'boolean',
      defaultValue: 'false'
    },
  ]
};

export default mavenRepositoryConfigDefinition;