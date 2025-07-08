---
sidebar_label: Air-gapped environments
description: How to install and configure the Moderne CLI in an air-gapped environment.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to install and configure the Moderne CLI in an air-gapped environment

If your company has restrictions on what you can access via the internet, you'll need to download and configure the [Moderne CLI](../getting-started/cli-intro.md) in a special way. This doc will walk you through everything you need to know for this. By the end, you will have the CLI downloaded and configured in your air-gapped environment.

## Assumptions

* You can't access [app.moderne.io](https://app.moderne.io/marketplace) from your environment
* You have an internal mirror of Maven Central (or some other internal artifact repository)
* You have the ability to download and add JARs from Maven Central to your internal artifact repository

## Installation and configuration

### Step 0: Ensure recipes exist in your internal artifact repository

[There are numerous OpenRewrite recipe modules available in Maven Central](https://mvnrepository.com/artifact/org.openrewrite). Please ensure that those are copied over to your internal artifact repository (or your internal mirror of Maven Central). 

[You can find the full list of all OpenRewrite recipe JARs available here](https://docs.openrewrite.org/reference/latest-versions-of-every-openrewrite-module#cli-installation).

### Step 1: Download the Moderne CLI JAR

[Download the latest version of the Moderne CLI from Maven Central](https://central.sonatype.com/artifact/io.moderne/moderne-cli/versions). Once downloaded, please add it to your internal mirror so that it's accessible for all users in your environment.

### Step 2: (Optional - but recommended) Create an alias for the Moderne CLI JAR

While not required, you are **strongly encouraged** to set up an alias for running the CLI JAR. Below are some ways you might configure this depending on your OS and terminal:

<Tabs>
<TabItem value="git-bash-windows" label="Git Bash (Windows)">

Add the following function to your `.bashrc` file:

```bash
mod() {
    java -jar "/path/to/mod.jar" "$@"
}
```
</TabItem>

<TabItem value="bash-or-zsh-mac-or-linux" label="Bash or Zsh (Mac or Linux)">

Add the following to your `.bashrc` or `.zshrc` file:

```bash
alias mod="java -jar /path/to/mod.jar"
```
</TabItem>

<TabItem value="powershell" label="Powershell">

Use the [Set-Alias command](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-7.4) within a [profile script](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.4\&viewFallbackFrom=powershell-7).
</TabItem>
</Tabs>

If everything was configured correctly, you should be able to type `mod` into your terminal and see a list of commands:

<details>

<summary>mod command results</summary>

```bash
➜ mod

Moderne CLI 3.42.8

Usage:

mod [-h] [--version] [COMMAND]

Description:

Automated code remediation.

Options:

  -h, --help      Display this help message.
      --version   Display version info.
Commands:

  afterburner          (INCUBATING) Indexes built LSTs to accelerate recipe
                         execution.
  audit                (INCUBATING) Perform an audit of recent activity.
  build                Generates LST artifacts for one or more repositories.
  clean                Clean build and run artifacts produced by the CLI.
  config               Global configuration options that are required by some
                         CLI commands.
  devcenter            DevCenter operations.
  exec                 Execute an arbitrary shell command recursively on
                         selected repository roots.
  git                  Multi-repository git operations.
  log                  Manages a log aggregate.
  list                 Lists the repositories that can be built and published.
  monitor              (INCUBATING) Launches an HTTP server used to monitor the
                         CLI.
  publish              Publishes the LST artifacts for one or more projects.
  run                  Runs an OpenRewrite recipe locally on pre-built LSTS.
  run-history          Get information about the most recent recipe runs. This
                         will be transitioning to mod audit runs list
                         eventually. A deprecation notice will be added here
                         when we suggest adopting the alternative.
  study                Produces studies from OpenRewrite recipe data tables
                         locally.
  generate-completion  Generate bash/zsh completion script for mod.

MOD SUCCEEDED in 1s
```

</details>

### Step 3: Configure the CLI to use your license

In order to run recipes, you'll need to ensure the CLI is configured with a license. You should have received a license from us. With that license, please run the following command:

```bash
mod config license edit <license-you-were-provided>
```

_For more information on the Moderne CLI license, please see our [license documentation](../getting-started/moderne-cli-license.md)._

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

The latest version of every JAR and the CLI command to install those latest versions can be found at the bottom of the [latest versions of every OpenRewrite module doc](https://docs.openrewrite.org/reference/latest-versions-of-every-openrewrite-module#cli-installation). This is automatically updated whenever we do a new release.

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

<details>

<summary>Columns you can provide in your `repos.csv` file:</summary>

| Column name | Required | Description                                                                                                                                                                                                                                            | Examples                                                                      |
|-------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| cloneUrl    | `true`   | The URL of the repository that should be ingested.                                                                                                                                                                                                     | `git@github.com:google/guava.git` or `https://github.com/openrewrite/rewrite` |
| branch      | `false`  | The branch of the above repository that should be ingested.                                                                                                                                                                                            | `main`                                                                        |
| changeset   | `false`  | If provided, this will check out the repository at this specific commit SHA.                                                                                                                                                                           | `aa5f25ac0031`                                                                |
| java        | `false`  | Configures the JDK to use.                                                                                                                                                                                                                             | `17` or `17-tem` or `17.0.6-tem`                                              |
| jvmopts     | `false`  | JVM options added to tools building LSTs. Must be configured before you can run the build command if non-standard VM options are required.                                                                                                             | `-Xmx4G`                                                                      |
| mavenargs   | `false`  | Build arguments are added to the end of the Maven command line when building LSTs.                                                                                                                                                                     | `-P fast`                                                                     |
| gradleargs  | `false`  | Build arguments that are added to the end of the Gradle command line when building LSTs.                                                                                                                                                               | `-Dmyprop=myvalue`                                                            |
| org*        | `false`  | If you want to configure an organizational hierarchy, you can provide one or more organization columns. Each column will specify an organization the repository should be part of. The column name should be `org` plus a number such as: `org1,org2,org3`. There is no limit for how many orgs you can define.  | `openrewrite`                                                                 |

</details>

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
mod git clone csv . repos.csv --filter=tree:0 --parallel
```

:::info
The `--filter=tree:0` argument limits the amount of data that Git downloads from a repository. Specifically, it indicates that you want to only download the repos commit history and metadata, but not the actual files in the repo. For more information on this, please see the [GitHub blog post on speeding up partial clones](https://github.blog/open-source/git/get-up-to-speed-with-partial-clone-and-shallow-clone).

The `--parallel` flag increases the speed of cloning the repositories by performing multiple clones at once. For more information on parallelism, check out our [parallelism guide](./parallelism.md)
:::

### Step 9: Build your repositories

With all of the repositories cloned to your machine, you can then build LSTs for them by running the following command:

```bash
mod build .
```

With the LSTs built, you're ready to run recipes against them! Consider checking out the [using the CLI section in the getting started guide](../getting-started/cli-intro.md#running) to see some ways you can use the CLI.
