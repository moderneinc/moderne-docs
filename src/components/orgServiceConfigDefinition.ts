/**
 * Organization Service Configuration Definitions
 * Contains configuration for Organization Service settings
 */
import { ConfigDefinition } from "./types";

const orgServiceConfigDefinition: ConfigDefinition = {
  label: "Organization Service Configuration",
  description: "Configure the Organizations Service",
  fields: [
    {
      label: "URL",
      key: "url",
      envKey: "MODERNE_AGENT_ORGANIZATIONSERVICE_URL",
      description: "The URL of the organization service.",
      required: true,
      type: "text",
      defaultValue: "",
    },
    {
      label: "Enabled",
      key: "enabled",
      envKey: "MODERNE_AGENT_ORGANIZATIONSERVICE_ENABLED",
      description: "Whether or not the organization service is enabled.",
      required: false,
      type: "boolean",
      defaultValue: "true",
    },
    {
      label: "Skip SSL Verification",
      key: "skipSSL",
      envKey: "MODERNE_AGENT_ORGANIZATIONSERVICE_SKIPSSL",
      description:
        "Whether or not to skip SSL validation for the connection to the organization service.",
      required: false,
      type: "boolean",
      defaultValue: "false",
    },
  ],
};

export default orgServiceConfigDefinition;
