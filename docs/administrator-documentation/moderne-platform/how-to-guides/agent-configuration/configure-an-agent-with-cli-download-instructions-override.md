---
sidebar_label: CLI download instructions override
description: How to configure the Moderne agent to provide custom CLI download instructions.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with CLI download instructions

The Moderne Platform provides a default CLI tools menu to help users download and install the Moderne CLI. However, some organizations may want to customize these instructions to point to internal documentation, mirror sites, or provide organization-specific installation steps.

This guide will show you how to configure the Moderne agent to override the default CLI download instructions with your own custom documentation.

## Why customize CLI download instructions?

Organizations may want to customize CLI download instructions for several reasons:

* **Internal mirrors**: Your organization may host the CLI binaries on internal servers for security or compliance reasons
* **Custom installation steps**: You may have organization-specific setup requirements or configurations
* **Platform-specific guidance**: You may want to provide tailored instructions for your supported platforms
* **Access control**: You may need to direct users to request access or follow approval processes

## Agent configuration

The following table contains the variables/arguments needed to configure custom CLI download instructions for your Moderne agent. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                   | Required | Default | Description                                                                                                                                                                                                              |
|-------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_CLI_DOWNLOADINSTRUCTIONS_LABEL` | `false`  | `null`  | CLI download instructions label to show in the platform UI. Overrides the default display of the CLI tools menu presented in the Moderne platform's user interface. If populated, the URL property must also be populated. |
| `MODERNE_AGENT_CLI_DOWNLOADINSTRUCTIONS_URL`   | `false`  | `null`  | The URL of the instructions documentation. Must be a fully qualified URL that is accessible to users of the platform.                                                                                                    |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_CLI_DOWNLOADINSTRUCTIONS_LABEL="Download CLI Tools" \
-e MODERNE_AGENT_CLI_DOWNLOADINSTRUCTIONS_URL="https://docs.example.com/moderne-cli-setup" \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                      | Required | Default | Description                                                                                                                                                                                                              |
|----------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.cli.downloadInstructions.label`  | `false`  | `null`  | CLI download instructions label to show in the platform UI. Overrides the default display of the CLI tools menu presented in the Moderne platform's user interface. If populated, the URL property must also be populated. |
| `--moderne.agent.cli.downloadInstructions.url`   | `false`  | `null`  | The URL of the instructions documentation. Must be a fully qualified URL that is accessible to users of the platform.                                                                                                    |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.cli.downloadInstructions.label="Download CLI Tools" \
--moderne.agent.cli.downloadInstructions.url="https://docs.example.com/moderne-cli-setup" \
# ... Additional arguments
```

</TabItem>
</Tabs>

## What users will see

When these variables are configured:

1. Users navigating to the CLI tools section in the Moderne Platform will see your custom label instead of the default menu
2. Clicking on the custom label will direct them to your specified URL

## Important notes

* Both `LABEL` and `URL` must be configured together - configuring only one will not work
* The URL must be accessible to all users who will be using the Moderne Platform
* The custom instructions completely replace the default CLI download menu