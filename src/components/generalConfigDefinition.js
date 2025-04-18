/**
 * General Configuration Definitions
 * Contains configuration for general agent settings
 */

const generalConfigDefinition = {
  label: 'General Configuration',
  fields: [
    { 
      label: 'API Gateway RSocket URI', 
      key: 'apiGatewayRSocketUri', 
      envKey: 'MODERNE_AGENT_APIGATEWAYRSOCKETURI',
      description: 'The URI used to connect to the Moderne API, provided by Moderne.',
      required: true
    },
    { 
      label: 'Crypto Symmetric Key', 
      key: 'cryptoSymmetricKey', 
      envKey: 'MODERNE_AGENT_CRYPTO_SYMMETRICKEY',
      description: 'A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts.',
      required: true
    },
    { 
      label: 'Agent Nickname', 
      key: 'agentNickname', 
      envKey: 'MODERNE_AGENT_NICKNAME',
      description: 'A name used to identify your agent in the SaaS agent dashboard UI.',
      required: true
    },
    { 
      label: 'Agent Token', 
      key: 'agentToken', 
      envKey: 'MODERNE_AGENT_TOKEN',
      description: 'The Moderne SaaS agent connection token, provided by Moderne.',
      required: true
    },
    { 
      label: 'Download Parallelism', 
      key: 'downloadParallelism', 
      envKey: 'MODERNE_AGENT_DOWNLOADPARALLELISM',
      description: 'How many threads are used to download LSTs. Defaults to 2 threads.',
      defaultValue: '2',
      required: false
    },
    { 
      label: 'Artifact Index Interval Seconds', 
      key: 'artifactIndexInterval', 
      envKey: 'MODERNE_AGENT_ARTIFACTINDEXINTERVALSECONDS',
      description: 'How frequently LSTs will be indexed. Defaults to 120 seconds.',
      defaultValue: '120',
      required: false
    }
  ]
};

export default generalConfigDefinition;