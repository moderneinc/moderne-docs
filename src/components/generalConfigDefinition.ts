/**
 * General Configuration Definitions
 * Contains configuration for general agent settings
 */
import { ConfigDefinition } from "./types";

const generalConfigDefinition: ConfigDefinition = {
  label: "General Configuration",
  description: "Configure basic agent settings",
  fields: [
    {
      label: "URL",
      key: "url",
      envKey: "MODERNE_PLATFORM_URL",
      description: "The URL of the Moderne Platform.",
      required: true,
      type: "text",
      defaultValue: "https://app.moderne.io",
    },
    {
      label: "API Key",
      key: "apiKey",
      envKey: "MODERNE_API_KEY",
      description: "The API key for authenticating with the Moderne Platform.",
      required: true,
      type: "text",
      defaultValue: "",
    },
    {
      label: "Agent Name",
      key: "agentName",
      envKey: "MODERNE_AGENT_NAME",
      description:
        "The name of this agent. Must be unique across all agents connected to the Moderne Platform.",
      required: true,
      type: "text",
      defaultValue: "",
    },
    {
      label: "Skip SSL Verification",
      key: "skipSSL",
      envKey: "MODERNE_SKIPSSL",
      description:
        "Whether or not to skip SSL validation for calls from the agent to the Moderne Platform instance.",
      required: false,
      type: "boolean",
      defaultValue: "false",
    },
  ],
};

export default generalConfigDefinition;
