const orgHierarchyAndDevCenterConfigDefinition = {
  label: 'Organization Hierarchy and Dev Center Configuration',
  fields: [
    { 
      label: 'Organization Repos CSV path', 
      key: 'orgReposCsv', 
      envKey: 'MODERNE_AGENT_ORGANIZATION_REPOSCSV',
      description: 'The path of your <strong>repos.csv</strong> file that provides organization information. This could also be an unauthenticated HTTP/S URI in the form of <strong>https://your-serve/repos.csv</strong>.',
      required: false,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Update interval (seconds)', 
      key: 'updateIntervalSeconds', 
      envKey: 'MODERNE_AGENT_ORGANIZATION_UPDATEINTERVALSECONDS',
      description: 'The number of seconds that the agent should wait before it checks for an update to your <strong>repos.csv</strong> file.',
      required: false,
      type: 'text',
      defaultValue: '600'
    },
    { 
      label: 'Dev Center JSON path', 
      key: 'devCenterJsonPath', 
      envKey: 'MODERNE_AGENT_ORGANIZATION_DEVCENTER',
      description: 'The path of your <strong>devcenter.json</strong> file that provides the DevCenter configurations. <strong>If you want this functionality, you must also provide a repos CSV above</strong>. (<a href="https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/dev-center">Dev Center configuration guide</a>)',
      required: false,
      type: 'text',
      defaultValue: ''
    },
  ]
};

export default orgHierarchyAndDevCenterConfigDefinition;