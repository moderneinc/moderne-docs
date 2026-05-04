---
sidebar_label: "Configuring the CLI to work with internal tools"
description: How to configure the Moderne CLI to work with internal tools.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to configure the Moderne CLI to work with internal tools

This guide walks you through configuring the Moderne CLI to work in environments with restricted internet access or internal artifact repositories. The instructions apply to any Moderne edition (Standard, Enterprise, or DX) — what matters is that the CLI fetches its distribution, dependencies, and recipe JARs from your internal infrastructure rather than reaching out to the public internet. By the end of this guide, you'll have the CLI installed from your internal mirror, configured against your Maven settings and recipe artifact repository, and ready to run OpenRewrite recipes against your repositories.

## Assumptions

* You have an internal mirror of Maven Central (or some other internal artifact repository)
* You have the ability to download and add artifacts from Maven Central to your internal artifact repository

## Installation and configuration

### Step 0: Ensure required artifacts exist in your internal artifact repository

Before installing the CLI, please ensure your internal artifact repository contains the following artifacts:

* **The Moderne CLI** — distributed as a platform-specific self-extracting installer that bundles the `modw` wrapper, a Java 25 runtime, and the CLI JAR. It's published to Maven Central under platform-specific artifact IDs: [`moderne-cli-linux`](https://central.sonatype.com/artifact/io.moderne/moderne-cli-linux/versions), [`moderne-cli-osx`](https://central.sonatype.com/artifact/io.moderne/moderne-cli-osx/versions), and [`moderne-cli-windows`](https://central.sonatype.com/artifact/io.moderne/moderne-cli-windows/versions).
* **OpenRewrite recipe modules** — there are numerous OpenRewrite recipe modules available on Maven Central under the [`org.openrewrite`](https://central.sonatype.com/namespace/org.openrewrite) and [`org.openrewrite.recipe`](https://central.sonatype.com/namespace/org.openrewrite.recipe) namespaces. [The full list of recipe JARs and a CLI install command is regenerated on every release](../../recipes/lists/latest-versions-of-every-openrewrite-module.md#cli-installation).

:::tip
If your mirror is configured as a remote proxy of Maven Central (e.g., a virtual repository in Artifactory or a proxy repo in Nexus), most of this happens automatically — artifacts are fetched on demand and cached. If your mirror requires explicit sync-on-approval, each version you wish to use must be synced before users can install or upgrade.
:::

### Step 1: Install the CLI from your internal mirror

The CLI ships as a platform-specific installer that bundles the `modw` wrapper, a Java 25 runtime, and the CLI JAR. On Linux/macOS it's a self-extracting shell script (`.sh`); on Windows it's a zip archive (`.zip`) containing an `install.cmd` to run after extracting. Either way, installation drops everything into `~/.moderne/cli/` (or `%USERPROFILE%\.moderne\cli` on Windows) without further network access.

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux or macOS" default>

Download the platform-appropriate distribution from your internal mirror. For example, for Linux x86_64:

```bash
curl -fL -o moderne-cli.sh \
    "https://internal-mirror.example.com/io/moderne/moderne-cli-linux/4.2.1/moderne-cli-linux-4.2.1.sh"
```

Replace `4.2.1` with the version you intend to install, and adjust the artifact name to match your platform (`moderne-cli-linux`, or `moderne-cli-osx`).

Then run the installer:

```bash
bash moderne-cli.sh
```

The installer adds `~/.moderne/cli/bin` to your `PATH` and configures shell completion. Open a new terminal (or `source` your shell's rc file) to pick up the changes.

</TabItem>
<TabItem value="windows" label="Windows">

Download the Windows distribution from your internal mirror:

```powershell
Invoke-WebRequest `
    -Uri "https://internal-mirror.example.com/io/moderne/moderne-cli-windows/4.2.1/moderne-cli-windows-4.2.1.zip" `
    -OutFile moderne-cli.zip
```

Replace `4.2.1` with the version you intend to install. Then extract the archive and run the included `install.cmd` script:

```powershell
Expand-Archive moderne-cli.zip -DestinationPath .
.\install.cmd
```

The installer adds `%USERPROFILE%\.moderne\cli\bin` to your user `PATH`. Open a new terminal to pick up the change.

</TabItem>
</Tabs>

:::warning
The macOS distribution bundles a JRE for **Apple Silicon only**. Intel Mac users will need to install a Java 25+ runtime separately and ensure it's discoverable by the wrapper — see [how the wrapper finds Java](../how-to-guides/cli-wrapper.md#how-the-wrapper-finds-java) for details.
:::

### Step 2: Pin the CLI version

The wrapper reads its global configuration from `~/.moderne/cli/dist/moderne-wrapper.properties`. By default (when no version is configured), the wrapper resolves `RELEASE` against `https://repo1.maven.org/maven2` - which won't work in an environment that cannot reach Maven Central directly.

Before running any `mod` command, please pin the wrapper to the version you installed in Step 1:

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux or macOS" default>

```bash
echo "version=4.2.1" > ~/.moderne/cli/dist/moderne-wrapper.properties
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
"version=4.2.1" | Out-File -Encoding ascii "$env:USERPROFILE\.moderne\cli\dist\moderne-wrapper.properties"
```

</TabItem>
</Tabs>

Replace `4.2.1` with the version you installed.

:::warning
Pinning a version is **required** in environments that cannot reach `repo1.maven.org`. The wrapper's `RELEASE` and `LATEST` resolution always queries Maven Central for `maven-metadata.xml`, regardless of any `distributionUrl` setting. If Maven Central is not reachable and no version is pinned, every `modw` invocation will fail at version resolution.
:::

:::tip
There are two ways to upgrade the CLI later:

* **Re-run the installer** (Step 1) for the new version, then update `version=` in this file.
* **Bump `version=` and let the wrapper download the new distribution.** This requires also setting `distributionUrl` in this file to point at your internal mirror — see the [air-gapped or restricted environments](../how-to-guides/cli-wrapper.md#air-gapped-or-restricted-environments) section of the CLI wrapper guide for the URL template. Once configured, you can also bump versions via `mod wrapper --global --version=<new-version>`.
:::

You should now be able to verify the installation by running `mod --version`.

For more on how the wrapper works (auto-update behavior, distribution URLs, JDK selection, environment variables), see the [CLI wrapper and version management guide](../how-to-guides/cli-wrapper.md).

### Step 3: Configure the CLI to use your license

In order to run recipes, you'll need to ensure the CLI is configured with a license. You should have received a license from us. With that license, please run the following command:

```bash
mod config license edit <license-you-were-provided>
```

_For more information on the Moderne CLI license, please see our [license documentation](./moderne-cli-license.md)._

### (Optional) Step 4: Configure the CLI to point to your internal artifact repository

**If your Maven settings file is not in the default location**, please run the following command to point the CLI to your Maven settings file. If it is in the default location, skip to step 5.

```bash
mod config build maven settings edit /path/to/maven/settings/file
```

In order for the CLI to download dependencies/lookup versions as needed, it will need to be provided with the path to your Maven settings file. This likely exists on developer machines for the sake of redirecting requests from Maven Central to an internal artifact instance.

### (Optional) Step 5: Configure the CLI to point to an internal Artifactory to download recipes

If you have an internal Artifactory instance where you plan on storing recipes, please direct the CLI to it by running the following command:

```bash
mod config recipes artifacts artifactory edit
```

### Step 6: Install recipe JARs

The next thing you need to do is ensure your internal artifact repository has all of the recipe JARS (assuming that your artifact repository is not a pure remote proxy to Maven Central already or that there isn't some automatic procurement step at dependency resolution time).

With that done, you'll need to run the `mod config recipes jar install` command and provide it with the JARs you wish to install.

The latest version of every JAR and the CLI command to install those latest versions can be found at the bottom of the [latest versions of every OpenRewrite module doc](../../recipes/lists/latest-versions-of-every-openrewrite-module.md#cli-installation). This is automatically updated whenever we do a new release.

### Step 7: Create a list of your repositories

In order for the CLI to run recipes against your code, you will need to provide it with a `repos.csv` file. The first row in the CSV file should be a header row that lists out the columns you intend to provide. After that, each row will represent a repository. At a minimum, you should include a URL to clone said repository – but you can also provide other columns as needed.

Here is an example of a simple CSV file for cloning some OpenRewrite repositories:

```csv
cloneUrl
https://github.com/openrewrite/rewrite-spring
https://github.com/openrewrite/rewrite-recipe-markdown-generator
https://github.com/openrewrite/rewrite-docs
https://github.com/openrewrite/rewrite
```

For a complete list of all supported columns and their descriptions, please see the [repos.csv reference documentation](../references/repos-csv.md#supported-columns).

To assist with creating a `repos.csv` file, we've written some bash scripts that will generate a simple CSV file for you:

<Tabs>
<TabItem value="github" label="GitHub">

**Step 1:** Install and configure the [GitHub CLI](https://cli.github.com/) if you haven't already done so.

**Step 2:** Create a `github.sh` file like:

```bash title="github.sh"
#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <org>"
  echo "Example: $0 openrewrite"
  exit 1
fi

organization=$1

gh repo list "$organization" \
    --json url,defaultBranchRef \
    --jq  '["cloneUrl","branch"], (.[] | [.url, .defaultBranchRef.name]) | @csv'
```

**Step 3:** Grant the script access to be run:

```bash
chmod +x github.sh
```

**Step 4:** Run the script and pipe it to a `repos.csv` file:

```bash
./github.sh YOUR_ORG_NAME > repos.csv
```

If everything was done correctly, you should have a `repos.csv` file that looks similar to the following:

```csv
"cloneUrl","branch"
"https://github.com/openrewrite/rewrite","main"
"https://github.com/openrewrite/rewrite-python","main"
"https://github.com/openrewrite/rewrite-openapi","main"
"https://github.com/openrewrite/rewrite-static-analysis","main"
"https://github.com/openrewrite/rewrite-java-dependencies","main"
"https://github.com/openrewrite/rewrite-docs","master"
```

</TabItem>

<TabItem value="gitlab" label="GitLab">

**Step 1:** Create a [GitLab personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token) if you don't already have one.

**Step 2**: Create a `gitlab.sh` file like:

```bash title="gitlab.sh"
#!/bin/bash

while getopts ":g:h:" opt; do
    case ${opt} in
        g )
            GROUP=$OPTARG
            ;;
        h )
            GITLAB_DOMAIN=$OPTARG
            ;;
        \? )
            echo "Usage: gitlab.sh [-g <group>] [-h <gitlab_domain>]"
            exit 1
            ;;
    esac
done


if [[ -z $AUTH_TOKEN ]]; then
    echo "Please set the AUTH_TOKEN environment variable."
    exit 1
fi

# Default GITLAB_DOMAIN to gitlab.com
GITLAB_DOMAIN=${GITLAB_DOMAIN:-https://gitlab.com}

if [[ -z $GROUP ]]; then
    base_request_url="$GITLAB_DOMAIN/api/v4/projects?membership=true&simple=true&archived=false"
else
    base_request_url="$GITLAB_DOMAIN/api/v4/groups/$GROUP/projects?include_subgroups=true&simple=true&archived=false"
fi

page=1
per_page=100

echo '"cloneUrl","branch"'
while :; do
    # Construct the request URL with pagination parameters
    request_url="${base_request_url}&page=${page}&per_page=${per_page}"

    # Fetch the data
    response=$(curl --silent --header "Authorization: Bearer $AUTH_TOKEN" "$request_url")

    # Check if the response is empty, if so, break the loop
    if [[ $(echo "$response" | jq '. | length') -eq 0 ]]; then
        break
    fi

    # Process and output data
    echo "$response" | jq -r '(.[] | [.http_url_to_repo, .default_branch]) | @csv'

    # Increment page counter
    ((page++))
done
```

**Step 3:** Grant the script access to be run:

```bash
chmod +x gitlab.sh
```

**Step 4:** Run the script and pipe it to a `repos.csv` file:

```bash
AUTH_TOKEN=YOUR_AUTH_TOKEN ./gitlab.sh [-g <group>] [-h <gitlab_domain>] > repos.csv
```

:::info
The `-g` option specifies a group to fetch repositories from. The `-h` option specifies the GitLab domain (defaults to [https://gitlab.com](https://gitlab.com) if not provided).
:::

If everything was done correctly, you should have a `repos.csv` file that looks similar to:

```csv
"cloneUrl","branch"
"https://gitlab.com/moderneinc/moderne-docker-build.git","main"
"https://gitlab.com/moderneinc/spring-petclinic.git","main"
"https://gitlab.com/moderneinc/git-test.git","main"
"https://gitlab.com/moderneinc/moderne-gitlab-ingest.git","main"
...
```

</TabItem>

<TabItem value="bitbucket-data-center" label="Bitbucket Data Center">

**Step 1**: Create a Bitbucket HTTP access token to provide to the command.

**Step 2:** Create a `bitbucket-data-center.sh` file like:

```bash title="bitbucket-data-center.sh"
#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <bitbucket_url>"
    echo "Example: $0 https://my-bitbucket.com/stash"
    exit 1
fi

bitbucket_url=$1
auth_header=""

if [ -n "$AUTH_TOKEN" ]; then
    auth_header="Authorization: Bearer $AUTH_TOKEN"
fi

ALL_REPOS=$(curl -s -X GET -H "Content-Type: application/json" -H "$auth_header" "$bitbucket_url/rest/api/1.0/repos"| jq -r '.values[] | [.slug, .project.key, (.links.clone[] | select(.name == "http").href)] | @csv')
if [ $? -ne 0 ]; then
    echo "Error occurred while retrieving repository list."
    exit 1
fi

echo "cloneUrl,branch"
for REPO in $ALL_REPOS; do
    IFS=',' read -r repo project cloneUrl <<< "$REPO"
    repo="${repo//\"/}"
    project="${project//\"/}"
    cloneUrl="${cloneUrl//\"/}"
    branch=$(curl -s -X GET -H "Content-Type: application/json" -H "$auth_header" "$bitbucket_url/rest/api/latest/projects/$project/repos/$repo/default-branch" | jq -r '.displayId')

    echo "$cloneUrl,$branch"
done
```

**Step 3:** Grant the script access to be run:

```bash
chmod +x bitbucket-data-center.sh
```

**Step 4:** Run the script and pipe it to a `repos.csv` file:

```bash
AUTH_TOKEN=YOUR_AUTH_TOKEN ./bitbucket-data-center.sh YOUR_BITBUCKET_URL > repos.csv
```

If everything was done correctly, you should have a `repos.csv` file that looks similar to:

```csv
cloneUrl,branch
https://bitbucket.your.place/stash/scm/greg/demo-multimodule.git,main
https://bitbucket.your.place/stash/scm/~sjungling/demo-multimodule.git,main
https://bitbucket.your.place/stash/scm/~sjungling/demo-multimodule-rename.git,main
https://bitbucket.your.place/stash/scm/~sjungling/demo_private.git,main

```

</TabItem>

<TabItem value="bitbucket-cloud" label="Bitbucket Cloud">

**Step 1**: Create a Bitbucket Cloud username and password that the script can use to grab repositories.

**Step 2:** Create a `bitbucket-cloud.sh` file like:

```bash title="bitbucket-cloud.sh"
#!/bin/bash

usage() {
  echo "Usage: $0 -u <username> -p <password> <workspace>"
  exit 1
}

# Parse command-line arguments
while getopts ":u:p:" opt; do
  case ${opt} in
    u) username=$OPTARG;;
    p) app_password=$OPTARG;;
    *) usage;;
  esac
done
shift $((OPTIND -1))

# Set workspace from positional argument
workspace=$1

# Check if username and app_password are provided via command line or environment variables
if [ -z "$username" ]; then
    username=$BITBUCKET_USERNAME
fi

if [ -z "$app_password" ]; then
    app_password=$BITBUCKET_APP_PASSWORD
fi

if [ -z "$username" -o -z "$app_password" -o -z "$workspace" ]; then
    echo "Error: Please provide username, password, and workspace." >&2
    usage
fi

echo "cloneUrl,branch,org"

next_page="https://api.bitbucket.org/2.0/repositories/$workspace"

while [ "$next_page" ]; do
  response=$(curl -s -u "$username:$app_password" "$next_page")

  # Extract repository data and append to CSV file
  echo "$response" | jq -r '
    .values[] |
    (.links.clone[] | select(.name=="https") | .href) as $cloneUrl |
    .mainbranch.name as $branchName |
    .workspace.name as $organization |
    "\($cloneUrl),\($branchName),\($organization)"' |
  while IFS=, read -r cloneUrl branchName organization; do
    cleanUrl=$(echo "$cloneUrl" | sed -E 's|https://[^@]+@|https://|')
    echo "$cleanUrl,$branchName,$organization"
  done


  next_page=$(echo "$response" | sed -e "s:${username}@::g" | jq -r '.next // empty')
done
```

**Step 3:** Grant the script access to be run:

```bash
chmod +x bitbucket-cloud.sh
```

**Step 4:** Run the script and pipe it to a `repos.csv` file:

```bash
./bitbucket-cloud.sh -u username -p password <workspace> > repos.csv
```

If everything was done correctly, you should have a `repos.csv` file that looks similar to:

```csv
cloneUrl,branch
https://bitbucket.your.place/stash/scm/greg/demo-multimodule.git,main
https://bitbucket.your.place/stash/scm/~sjungling/demo-multimodule.git,main
https://bitbucket.your.place/stash/scm/~sjungling/demo-multimodule-rename.git,main
https://bitbucket.your.place/stash/scm/~sjungling/demo_private.git,main
```

</TabItem>

</Tabs>

### Step 8: Clone your repositories

Create a directory somewhere on your machine where you'd like the CLI to clone the repositories to. Then navigate to that directory, copy the `repos.csv` file to it, and run the following command:

```bash
mod git sync csv . repos.csv --with-sources
```

### Step 9: Build your repositories

With all of the repositories cloned to your machine, you can then build LSTs for them by running the following command:

```bash
mod build .
```

With the LSTs built, you're ready to run recipes against them! Consider checking out the [using the CLI section in the getting started guide](./cli-intro.md#running) to see some ways you can use the CLI.

## Standardizing CLI installation across your team

For team-wide standardization, consider committing a [Moderne CLI wrapper](../how-to-guides/cli-wrapper.md#project-wrapper) to a shared repository. This works similarly to the Gradle wrapper: every developer and CI job uses a consistent, version-pinned CLI, and the wrapper downloads the CLI installer from your internal mirror on first run.

To set this up:

1. On a machine that can run `mod`, generate the wrapper files with `mod wrapper --version <pinned-version>`. This produces `modw`, `modw.cmd`, and `moderne/wrapper/moderne-wrapper.properties` in the current directory.
2. Edit the generated `moderne-wrapper.properties` file to set `distributionUrl` to your internal mirror, [along with any required credentials](../how-to-guides/cli-wrapper.md#authenticated-artifact-repositories). For example:

   ```properties
   version=4.2.1
   distributionUrl=https://internal-mirror.example.com/io/moderne/moderne-cli-${platform}/${version}/moderne-cli-${platform}-${version}.sh
   jdkUrl=skip
   ```

3. Commit `modw`, `modw.cmd`, and `moderne/wrapper/moderne-wrapper.properties` to your shared repository. Anyone who clones it can then run `./modw <command>` — the wrapper will fetch the pinned distribution from your internal mirror on first invocation.

For full details on the wrapper's properties, environment variables, JDK discovery, and authentication options, see the [CLI wrapper and version management guide](../how-to-guides/cli-wrapper.md).
