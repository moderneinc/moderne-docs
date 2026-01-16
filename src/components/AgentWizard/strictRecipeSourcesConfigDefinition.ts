/**
 * Strict Recipe Sources Configuration Definitions
 * Contains configuration for controlling recipe sources
 */

const strictRecipeSourcesConfigDefinition = {
  label: 'Strict Recipe Sources Configuration',
  fields: [
    { 
      label: 'Use Only Configured Recipe Sources', 
      key: 'useOnlyConfigured', 
      envKey: 'MODERNE_AGENT_RECIPE_USEONLYCONFIGURED',
      description: 'Only use the recipe sources configured in the agent.',
      required: true,
      type: 'boolean',
      defaultValue: ''
    },
    { 
      label: 'POM Cache Type', 
      key: 'pomCacheType', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_TYPE',
      description: 'Used to specify what type of cache the POM should use. Acceptable values: <strong>IN_MEMORY</strong> or <strong>REDIS</strong>.',
      required: false,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Entry TTL Minutes', 
      key: 'entryTtlMinutes', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_ENTRYTTLMINUTES',
      description: 'How long entries should live in the POM cache.',
      required: false,
      type: 'text',
      defaultValue: '60'
    },
    { 
      label: 'Redis Host', 
      key: 'redisHost', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_REDIS_HOST',
      description: 'The URL of the Redis instance. <strong>This must be set if POM Cache Type is set to REDIS.</strong>',
      required: false,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Redis Port', 
      key: 'redisPort', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PORT',
      description: 'The port number of the Redis instance. <strong>This must be set if POM Cache Type is set to REDIS.</strong>',
      required: false,
      type: 'text',
      defaultValue: '6379'
    },
    { 
      label: 'Redis Username', 
      key: 'redisUsername', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_REDIS_USERNAME',
      description: 'The username needed to authenticate to the Redis instance.',
      required: false,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Redis Password', 
      key: 'redisPassword', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PASSWORD',
      description: 'The password needed to authenticate with the Redis instance.',
      required: false,
      type: 'text',
      defaultValue: ''
    },
    { 
      label: 'Redis SSL', 
      key: 'redisSsl', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_REDIS_SSL',
      description: 'If set to true, then SSL will be enabled for the connection to the Redis instance.',
      required: false,
      type: 'boolean',
      defaultValue: 'false'
    },
    { 
      label: 'Redis DB Index', 
      key: 'redisDBIndex', 
      envKey: 'MODERNE_AGENT_RECIPE_POMCACHE_REDIS_DATABASE',
      description: 'The Redis DB index.',
      required: false,
      type: 'text',
      defaultValue: '0'
    },
  ]
};

export default strictRecipeSourcesConfigDefinition;