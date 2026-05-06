---
sidebar_label: UI customizations
description: How to configure the Moderne agent to provide custom UI elements and help links.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with UI customizations

The Moderne Platform provides default UI elements and help links throughout the interface. However, organizations may want to customize these elements to provide organization-specific help resources or branding.

This guide will show you how to configure the Moderne agent to customize UI elements with your own help links and labels.

## Why customize UI elements?

Organizations may want to customize UI elements for several reasons:

* **Internal help resources**: Your organization may have internal documentation or support systems
* **Custom support channels**: You may want to direct users to organization-specific help desks or chat systems
* **Accessibility**: The default support methods may not be accessible within your organization

## Agent configuration

The following table contains the variables/arguments needed to configure custom UI elements for your Moderne agent. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                      | Required | Default | Description                                                                                                                                                          |
|------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_UI_MOREHELP_0_LABEL` | `false`  | `null`  | Custom label for first link under the 'Need more help?' menu. If populated, the URL property must also be populated. Maximum of 3 help items supported.       |
| `MODERNE_AGENT_UI_MOREHELP_0_URL`   | `false`  | `null`  | The URL for the first custom help resource. Must be a fully qualified URL that is accessible to users of the platform.                                           |
| `MODERNE_AGENT_UI_MOREHELP_1_LABEL` | `false`  | `null`  | Custom label for second link under the 'Need more help?' menu. If populated, the URL property must also be populated.                                            |
| `MODERNE_AGENT_UI_MOREHELP_1_URL`   | `false`  | `null`  | The URL for the second custom help resource. Must be a fully qualified URL that is accessible to users of the platform.                                          |
| `MODERNE_AGENT_UI_MOREHELP_2_LABEL` | `false`  | `null`  | Custom label for third link under the 'Need more help?' menu. If populated, the URL property must also be populated.                                             |
| `MODERNE_AGENT_UI_MOREHELP_2_URL`   | `false`  | `null`  | The URL for the third custom help resource. Must be a fully qualified URL that is accessible to users of the platform.                                           |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_UI_MOREHELP_0_LABEL="Getting started" \
-e MODERNE_AGENT_UI_MOREHELP_0_URL="https://docs.moderne.io/user-documentation/moderne-platform/getting-started" \
-e MODERNE_AGENT_UI_MOREHELP_1_LABEL="How to guides" \
-e MODERNE_AGENT_UI_MOREHELP_1_URL="https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides" \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                         | Required | Default | Description                                                                                                                                                          |
|---------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.ui.moreHelp[0].label` | `false`  | `null`  | Custom label for first link under the 'Need more help?' menu. If populated, the URL property must also be populated. Maximum of 3 help items supported.       |
| `--moderne.agent.ui.moreHelp[0].url`   | `false`  | `null`  | The URL for the first custom help resource. Must be a fully qualified URL that is accessible to users of the platform.                                           |
| `--moderne.agent.ui.moreHelp[1].label` | `false`  | `null`  | Custom label for second link under the 'Need more help?' menu. If populated, the URL property must also be populated.                                            |
| `--moderne.agent.ui.moreHelp[1].url`   | `false`  | `null`  | The URL for the second custom help resource. Must be a fully qualified URL that is accessible to users of the platform.                                          |
| `--moderne.agent.ui.moreHelp[2].label` | `false`  | `null`  | Custom label for third link under the 'Need more help?' menu. If populated, the URL property must also be populated.                                             |
| `--moderne.agent.ui.moreHelp[2].url`   | `false`  | `null`  | The URL for the third custom help resource. Must be a fully qualified URL that is accessible to users of the platform.                                           |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.ui.moreHelp[0].label="Getting started" \
--moderne.agent.ui.moreHelp[0].url="https://docs.moderne.io/user-documentation/moderne-platform/getting-started" \
--moderne.agent.ui.moreHelp[1].label="How to guides" \
--moderne.agent.ui.moreHelp[1].url="https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides" \
# ... Additional arguments
```

</TabItem>
</Tabs>