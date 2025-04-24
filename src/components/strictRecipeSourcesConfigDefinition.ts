/**
 * Strict Recipe Sources Configuration Definitions
 * Contains configuration for recipe sources validation
 */
import { ConfigDefinition } from "./types";

const strictRecipeSourcesConfigDefinition: ConfigDefinition = {
  label: "Strict Recipe Sources Configuration",
  description: "Configure the recipe sources validation",
  fields: [
    {
      label: "Enabled",
      key: "enabled",
      envKey: "MODERNE_AGENT_RECIPE_STRICTSOURCES_ENABLED",
      description: "Whether or not strict recipe source validation is enabled.",
      required: true,
      type: "boolean",
      defaultValue: "true",
    },
    {
      label: "Pom Cache Storage Type",
      key: "pomCacheStorageType",
      envKey: "MODERNE_AGENT_RECIPE_POMCACHE_STORAGETYPE",
      description:
        'The storage type for the pom cache. Valid options are "in-memory" or "redis".',
      required: true,
      type: "text",
      defaultValue: "in-memory",
    },
    {
      label: "Redis Host",
      key: "redisHost",
      envKey: "MODERNE_AGENT_RECIPE_POMCACHE_REDIS_HOST",
      description: "The Redis hostname.",
      required: false,
      type: "text",
      defaultValue: "",
    },
    {
      label: "Redis Port",
      key: "redisPort",
      envKey: "MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PORT",
      description: "The Redis port.",
      required: false,
      type: "text",
      defaultValue: "6379",
    },
    {
      label: "Redis User",
      key: "redisUser",
      envKey: "MODERNE_AGENT_RECIPE_POMCACHE_REDIS_USER",
      description: "The Redis user.",
      required: false,
      type: "text",
      defaultValue: "",
    },
    {
      label: "Redis Password",
      key: "redisPassword",
      envKey: "MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PASSWD",
      description: "The Redis password.",
      required: false,
      type: "text",
      defaultValue: "",
    },
    {
      label: "Redis DB Index",
      key: "redisDBIndex",
      envKey: "MODERNE_AGENT_RECIPE_POMCACHE_REDIS_DATABASE",
      description: "The Redis DB index.",
      required: false,
      type: "text",
      defaultValue: "",
    },
  ],
};

export default strictRecipeSourcesConfigDefinition;
