---
sidebar_label: GraphQL API reference
description: Complete reference for the Moderne GraphQL API, including all queries, mutations, subscriptions, and types.
---

# GraphQL API reference

:::info
This page is auto-generated from the Moderne GraphQL schema. Do not edit manually.
:::

## Queries

### `auditLogs`

**Service:** auditreader

`auditLogs`(first: Int = 100, after: String, where: <a href="#auditlogwhereinput">AuditLogWhereInput</a>, orderBy: [<a href="#auditlogorderbyinput">AuditLogOrderByInput</a>!]): <a href="#auditlogconnection">AuditLogConnection</a>!

Query audit log events with pagination and filtering.

---

### `auditLogsDownloads`

**Service:** auditreader

`auditLogsDownloads`(first: Int = 50, after: String, where: <a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>, orderBy: [<a href="#auditlogsdownloadorderbyinput">AuditLogsDownloadOrderByInput</a>!]): <a href="#auditlogsdownloadconnection">AuditLogsDownloadConnection</a>!

Query audit log downloads with pagination and filtering.
Use where: \{ id: \{ _eq: "..." } } to poll a specific download.

---

### `bulkPullRequestAction`

**Service:** changelogreader

`bulkPullRequestAction`(id: ID!): <a href="#bulkpullrequestaction">BulkPullRequestAction</a>

Get a bulk pull request action by ID to poll for progress.

---

### `capabilities`

**Service:** gateway

`capabilities`: <a href="#platformcapabilities">PlatformCapabilities</a>!

Returns which optional platform features are enabled in this deployment.
Each field defaults to false and is overridden to true by the corresponding
optional service when it is present in the supergraph composition.

---

### `codeSearch`

**Service:** code-search

`codeSearch`(repositoryId: String!, query: String!, first: Int = 100, after: String): <a href="#codesearchresultconnection">CodeSearchResultConnection</a>!

Search source code across artifact repositories.
Searches the given repository and all its descendants in the hierarchy.
Results are grouped by artifact (groupId:artifactId) with file-level matches.

---

### `connectors`

**Service:** gateway

`connectors`(first: Int = 100, after: String, where: <a href="#connectorwhereinput">ConnectorWhereInput</a>, orderBy: [<a href="#connectororderbyinput">ConnectorOrderByInput</a>!]): <a href="#connectorconnection">ConnectorConnection</a>!

---

### `conversation`

**Service:** moddy

`conversation`(conversationId: ID!): <a href="#conversation">Conversation</a>

Look up a single conversation by id. Returns null when no conversation
matches or the caller does not have access. Restores the v1 query the
moderne-ui client already references.

---

### `currentUser`

**Service:** authz

`currentUser`: <a href="#user">User</a>!

Returns the currently authenticated user.

---

### `devCenterRecipes`

**Service:** recipemarketplace

`devCenterRecipes`: [<a href="#recipedescriptor">RecipeDescriptor</a>!]!

Get available DevCenter recipes for configuration.

---

### `license`

**Service:** authz

`license`: <a href="#license">License</a>!

Request a new license lease key

---

### `organization`

**Service:** organization

`organization`(id: ID!): <a href="#organization">Organization</a>!

---

### `organizations`

**Service:** organization

`organizations`(first: Int = 100, after: String, where: <a href="#organizationwhereinput">OrganizationWhereInput</a>, orderBy: [<a href="#organizationorderbyinput">OrganizationOrderByInput</a>!]): <a href="#organizationconnection">OrganizationConnection</a>!

---

### `scmConnections`

**Service:** authz

`scmConnections`: [<a href="#scmconnection">ScmConnection</a>!]!

Returns connections for all SCM providers.

---

### `users`

**Service:** authz

`users`(first: Int = 100, after: String, where: <a href="#userwhereinput">UserWhereInput</a>, orderBy: [<a href="#userorderbyinput">UserOrderByInput</a>!]): <a href="#userconnection">UserConnection</a>!

Returns users with option to filter by role.

---

### `verifyToken`

**Service:** changesetcommitter

`verifyToken`(origin: String!, scmType: <a href="#scmtype">ScmType</a>!): String

---

## Mutations

### `approvePullRequests`

**Service:** changelogreader

`approvePullRequests`(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!

Approve pull requests in bulk. Returns the queued action for polling.

---

### `cancelBulkPullRequestAction`

**Service:** changelogreader

`cancelBulkPullRequestAction`(id: ID!): <a href="#bulkpullrequestactioncanceled">BulkPullRequestActionCanceled</a>!

Cancel a pending bulk pull request action.

---

### `cancelCommit`

**Service:** changesetcommitter

`cancelCommit`(id: ID!): <a href="#organizationcommitcanceled">OrganizationCommitCanceled</a>!

Cancel a running commit operation.

---

### `cancelDevCenterRun`

**Service:** recipeworker

`cancelDevCenterRun`(id: ID!): ID!

Cancel a DevCenter run. Cancellation is best-effort and asynchronous.

---

### `cancelMessage`

**Service:** moddy

`cancelMessage`(conversationId: ID!, messageId: ID): Boolean!

Interrupt the currently-running turn for a conversation. The virtual
thread driving the turn is interrupted — a blocking LLM stream unwinds
immediately, and long-running downstream work (recipe runs) receives
a best-effort cancel via `cancelRecipeRun` on recipe-worker. Cheap
tool calls finish naturally. A terminal CANCELLED `ErrorMessage` is
appended to the log regardless.

LLM-memory consistency on the next turn is preserved by the JSONL
collapse: `buildChatMessages` pairs every tool-origin row into an
`AiMessage(toolRequests)` + `ToolExecutionResultMessage` batch, and
only rows that actually persisted are rebuilt — partially-executed
tool batches are reconstructed from whichever tool-origin rows made
it to the log.

Returns `true` when a running turn was actually interrupted,
`false` when the conversation was already idle (no-op, not an
error). `messageId` is accepted for client compatibility but
only the conversation's active turn is cancellable — there is never
more than one turn in flight.

---

### `cancelRecipeRun`

**Service:** recipeworker

`cancelRecipeRun`(id: ID!): ID!

Cancel a recipe run. Cancellation is best-effort and asynchronous.

---

### `clearOrganizationPrompt`

**Service:** moddy

`clearOrganizationPrompt`(organizationId: ID!): Boolean!

Clear the organization-level prompt override, falling back to universal.

---

### `clearUserPrompt`

**Service:** moddy

`clearUserPrompt`: Boolean!

Clear the current user's prompt override, falling back to organization or universal.

---

### `closePullRequests`

**Service:** changelogreader

`closePullRequests`(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!

Close pull requests in bulk. Returns the queued action for polling.

---

### `commit`

**Service:** changesetcommitter

`commit`(input: <a href="#commitinput">CommitInput</a>!): <a href="#organizationcommitqueued">OrganizationCommitQueued</a>!

Create commits from a changeset (recipe run, batch change, etc.).

---

### `createAccessToken`

**Service:** authz

`createAccessToken`(description: String, expiresAt: <a href="#datetime">DateTime</a>): <a href="#createaccesstokenresult">CreateAccessTokenResult</a>!

Creates a new Moderne Personal Access Token for the current user.
Returns the token value only once - it cannot be retrieved again.

---

### `createConversation`

**Service:** moddy

`createConversation`(input: <a href="#createconversationinput">CreateConversationInput</a>!, waitForCompletion: Boolean = false): <a href="#sendmessageresult">SendMessageResult</a>!

Create a new conversation and send the first message. Uses the
effective prompt for the organization context. `waitForCompletion`
has the same semantics as on `sendMessage`.

---

### `createUserOrganization`

**Service:** organization

`createUserOrganization`(input: <a href="#createuserorganizationinput">CreateUserOrganizationInput</a>!): <a href="#organization">Organization</a>!

Create a new user-defined organization visible only to the current user.

---

### `deleteUser`

**Service:** authz

`deleteUser`(email: String!): Boolean!

Deletes a user and all associated access tokens.
Returns true if the user was found and deleted.

---

### `deleteUserOrganization`

**Service:** organization

`deleteUserOrganization`(id: ID!): Boolean!

Delete a user-defined organization.

---

### `downloadAuditLogs`

**Service:** auditreader

`downloadAuditLogs`(first: Int, since: <a href="#datetime">DateTime</a>, until: <a href="#datetime">DateTime</a>, format: <a href="#auditlogexportformat">AuditLogExportFormat</a>!): <a href="#auditlogsdownload">AuditLogsDownload</a>!

Start an asynchronous export of audit logs. Returns a task whose state
can be polled via auditLogsDownloads.

---

### `downloadDataTable`

**Service:** changesetreader

`downloadDataTable`(changesetId: ID!, dataTable: String!, group: String, format: <a href="#datatableformat">DataTableFormat</a>!): <a href="#datatable">DataTable</a>!

Start or retrieve a data table download.
If the same data table + group + format combination was already requested,
returns the existing download state.

---

### `exchangeAuthorizationCode`

**Service:** authz

`exchangeAuthorizationCode`(input: <a href="#exchangeauthorizationcodeinput">ExchangeAuthorizationCodeInput</a>!): <a href="#exchangeauthorizationresult">ExchangeAuthorizationResult</a>!

Exchange an OAuth authorization code for an access token.

This unified mutation handles all OAuth 2.0 VCS providers.
The backend uses the authorizationId to look up:
- The origin and VCS type
- PKCE code_verifier (GitLab)

On success, the token is stored and future requests will be authenticated.

---

### `initiateAuthorization`

**Service:** authz

`initiateAuthorization`(input: <a href="#initiateauthorizationinput">InitiateAuthorizationInput</a>!): <a href="#oauthauthorization">OAuthAuthorization</a>!

Initiate OAuth authorization for a VCS origin.
Returns an authorization URL to redirect the user to.

The backend constructs the full OAuth URL including:
- PKCE code_challenge for GitLab
- Correct scopes for each VCS type
- State parameter for CSRF protection

The authorization ID should be passed to exchangeAuthorizationCode
after the user completes OAuth.

---

### `installRecipesForCurrentUser`

**Service:** recipemarketplace

`installRecipesForCurrentUser`(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!

Install a recipe bundle to the current user's personal marketplace.

---

### `installRecipesForOrganization`

**Service:** recipemarketplace

`installRecipesForOrganization`(organizationId: ID!, bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!

Install a recipe bundle to a specific organization's marketplace.
Requires the `admin` role.

---

### `installRecipesUniversal`

**Service:** recipemarketplace

`installRecipesUniversal`(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!

Install a recipe bundle to the universal marketplace (visible to all).
Requires the `admin` role.

---

### `mergePullRequests`

**Service:** changelogreader

`mergePullRequests`(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!, mergeMethod: <a href="#mergemethod">MergeMethod</a>!, deleteSourceBranch: Boolean! = false): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!

Merge pull requests in bulk. Returns the queued action for polling.

---

### `reindexChangelog`

**Service:** changelogwriter

`reindexChangelog`(since: <a href="#datetime">DateTime</a>!, origin: String): <a href="#reindexresult">ReindexResult</a>!

Reset poll cursors so the next poll cycle re-fetches and re-enriches
changelog entries from the given timestamp forward. Use this to backfill
data after deploying enrichment improvements.

---

### `revokeAccessToken`

**Service:** authz

`revokeAccessToken`(id: ID!): Boolean!

Revokes an access token by ID.
Returns true if the token was revoked, false if not found.

---

### `revokeAllAccessTokens`

**Service:** authz

`revokeAllAccessTokens`(email: String!): Boolean!

Revokes all access tokens for a given user.
Returns true if all token were revoked, otherwise false.

---

### `revokeScmToken`

**Service:** authz

`revokeScmToken`(input: <a href="#revokescmtokeninput">RevokeScmTokenInput</a>!): <a href="#revoketokenresult">RevokeTokenResult</a>!

Revoke an SCM OAuth token for the current user and a specific origin.
This removes the stored token, disconnecting the user from the VCS.

---

### `runDevCenter`

**Service:** recipeworker

`runDevCenter`(input: <a href="#rundevcenterinput">RunDevCenterInput</a>!): <a href="#devcenterrunrunning">DevCenterRunRunning</a>!

Start a DevCenter run for an organization.
Returns immediately with running status.

---

### `runRecipe`

**Service:** recipeworker

`runRecipe`(input: <a href="#runrecipeinput">RunRecipeInput</a>!): <a href="#organizationreciperunqueued">OrganizationRecipeRunQueued</a>!

Run a recipe against repositories.
Returns the recipe run in its initial queued state.

---

### `runVisualization`

**Service:** changesetvisualizer

`runVisualization`(organizationId: ID!, visualizationId: ID!, options: [<a href="#visualizationoptioninput">VisualizationOptionInput</a>!]): <a href="#visualization">Visualization</a>!

Request a visualization to be generated based on the provided descriptor.
Returns the existing visualization if already run with the same options,
otherwise queues a new visualization run.

---

### `sendMessage`

**Service:** moddy

`sendMessage`(conversationId: ID!, message: String!, waitForCompletion: Boolean = false): <a href="#sendmessageresult">SendMessageResult</a>!

Send a message to an existing conversation. Returns a handle for
polling — `initialCursor` is the cursor to pass to the next
`messages(after:)` query, and `turnState` carries the server-
recommended poll cadence.

When `waitForCompletion: true`, the mutation blocks until the turn
completes (or the server cap of 4 minutes is reached, whichever comes
first). On cap, the mutation returns the current turn state rather
than erroring so the caller can continue polling.

---

### `setOrganizationPrompt`

**Service:** moddy

`setOrganizationPrompt`(organizationId: ID!, content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!

Set the system prompt for a specific organization (overrides universal).

---

### `setProfiling`

**Service:** gateway

`setProfiling`(enabled: Boolean!, event: <a href="#profilingevent">ProfilingEvent</a> = CPU): Boolean!

Turn continuous profiling on or off for this tenant. When enabled,
Pyroscope profiles for every service start landing in the Pyroscope UI
within seconds. The primary event the agent samples on is selected by
`event` (defaults to CPU); calling the mutation again with a different
event while profiling is already on rotates the agent to the new event.
Fails when the profiling capability is not enabled for the tenant.
Admin role required.

---

### `setUniversalPrompt`

**Service:** moddy

`setUniversalPrompt`(content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!

Set the universal (default) system prompt.

---

### `setUserPrompt`

**Service:** moddy

`setUserPrompt`(content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!

Set the system prompt for the current user (overrides organization and universal).

---

### `uninstallRecipesFromCurrentUser`

**Service:** recipemarketplace

`uninstallRecipesFromCurrentUser`(packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!

Uninstall a recipe bundle from the current user's personal marketplace.
Returns the number of recipes that were removed.

---

### `uninstallRecipesFromOrganization`

**Service:** recipemarketplace

`uninstallRecipesFromOrganization`(organizationId: ID!, packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!

Uninstall a recipe bundle from a specific organization's marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

---

### `uninstallRecipesUniversal`

**Service:** recipemarketplace

`uninstallRecipesUniversal`(packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!

Uninstall a recipe bundle from the universal marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

---

### `updateUserOrganization`

**Service:** organization

`updateUserOrganization`(input: <a href="#updateuserorganizationinput">UpdateUserOrganizationInput</a>!): <a href="#organization">Organization</a>!

Update an existing user-defined organization.

---

## Types

### Object types

#### `AccessToken`

**Service:** authz

Moderne Personal Access Tokens

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The unique identifier for the access token.
This is not the same as the token itself. |
| `description` | String | Optional description of the token.

Useful for distinguishing between multiple tokens. |
| `created` | <a href="#datetime">DateTime</a>! | The date and time the token was created. |
| `expiresAt` | <a href="#datetime">DateTime</a> | The date and time the token will expire. |

---

#### `AccessTokenConnection`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#accesstokenedge">AccessTokenEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `AccessTokenEdge`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#accesstoken">AccessToken</a>! |  |
| `cursor` | String! |  |

---

#### `ArtifactoryConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `lstQuery` | [String!] |  |
| `lastIngestedAt` | <a href="#datetime">DateTime</a> |  |

---

#### `AuditLog`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! | The user who performed the action. |
| `target` | String! | The resource type that was acted upon (e.g., "access.tokens", "organizations"). |
| `action` | String! | The specific action that was performed (e.g., "create.token", "delete.organization"). |
| `actionType` | <a href="#auditactiontype">AuditActionType</a>! | The CRUD classification of the action. |
| `outcome` | <a href="#auditoutcome">AuditOutcome</a>! | Whether the action succeeded or failed. |
| `description` | String | Human-readable description of what happened. |
| `timestamp` | <a href="#datetime">DateTime</a>! | When the action occurred. |

---

#### `AuditLogConnection`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#auditlogedge">AuditLogEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `AuditLogEdge`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#auditlog">AuditLog</a>! |  |
| `cursor` | String! |  |

---

#### `AuditLogsDownloadConnection`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#auditlogsdownloadedge">AuditLogsDownloadEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `AuditLogsDownloadEdge`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#auditlogsdownload">AuditLogsDownload</a>! |  |
| `cursor` | String! |  |

---

#### `AuditLogsDownloadError`

**Service:** auditreader | **Implements:** <a href="#auditlogsdownload">AuditLogsDownload</a>

An audit log download failed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `message` | String! |  |

---

#### `AuditLogsDownloadFinished`

**Service:** auditreader | **Implements:** <a href="#auditlogsdownload">AuditLogsDownload</a>

An audit log download has completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | <a href="#auditlogexportformat">AuditLogExportFormat</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `downloadUrl` | String! | URL path to download the file (relative to the service base URL). |

---

#### `AuditLogsDownloadProcessing`

**Service:** auditreader | **Implements:** <a href="#auditlogsdownload">AuditLogsDownload</a>

An audit log download is being processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | <a href="#auditlogexportformat">AuditLogExportFormat</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `AzureDevOpsConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `oauth` | <a href="#azuredevopsoauth">AzureDevOpsOauth</a> |  |

---

#### `AzureDevOpsConnection`

**Service:** authz | **Implements:** <a href="#scmconnection">ScmConnection</a>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [<a href="#scmtokeninfo">ScmTokenInfo</a>!]! |  |

---

#### `AzureDevOpsOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `tenantId` | String! |  |

---

#### `BatchChange`

**Service:** changesetreader | **Implements:** <a href="#organizationchangeset">OrganizationChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `name` | String |  |
| `description` | String |  |
| `sourceTool` | <a href="#toolinfo">ToolInfo</a> |  |
| `diffTool` | <a href="#toolinfo">ToolInfo</a> |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this batch change.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this batch change. |

---

#### `BatchChangeFileChange`

**Service:** changesetreader | **Implements:** <a href="#filechange">FileChange</a>

| Field | Type | Description |
|-------|------|-------------|
| `path` | <a href="#path">Path</a>! |  |
| `beforeSourcePath` | <a href="#path">Path</a> |  |
| `afterSourcePath` | <a href="#path">Path</a> |  |
| `diff` | (markupLevel: <a href="#markuplevel">MarkupLevel</a> = ERROR, showWhitespaceOnlyChanges: Boolean = true): <a href="#patch">Patch</a> |  |

---

#### `BitbucketCloudConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `oauth` | <a href="#bitbucketcloudoauth">BitbucketCloudOauth</a> |  |

---

#### `BitbucketCloudConnection`

**Service:** authz | **Implements:** <a href="#scmconnection">ScmConnection</a>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [<a href="#scmtokeninfo">ScmTokenInfo</a>!]! |  |

---

#### `BitbucketCloudOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

---

#### `BitbucketConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `oauth` | <a href="#bitbucketoauth">BitbucketOauth</a> |  |

---

#### `BitbucketConnection`

**Service:** authz | **Implements:** <a href="#scmconnection">ScmConnection</a>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [<a href="#scmtokeninfo">ScmTokenInfo</a>!]! |  |

---

#### `BitbucketOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

---

#### `BranchCommitOptions`

**Service:** changesetcommitter | **Implements:** <a href="#commitoptions">CommitOptions</a>

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |

---

#### `BulkPullRequestActionCanceled`

**Service:** changelogreader | **Implements:** <a href="#bulkpullrequestaction">BulkPullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | <a href="#pullrequestactiontype">PullRequestActionType</a>! |  |
| `user` | <a href="#user">User</a>! |  |
| `canceledBy` | <a href="#user">User</a>! |  |
| `results` | (first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>! |  |

---

#### `BulkPullRequestActionConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#bulkpullrequestactionedge">BulkPullRequestActionEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `BulkPullRequestActionEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#bulkpullrequestaction">BulkPullRequestAction</a>! |  |
| `cursor` | String! |  |

---

#### `BulkPullRequestActionError`

**Service:** changelogreader | **Implements:** <a href="#bulkpullrequestaction">BulkPullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | <a href="#pullrequestactiontype">PullRequestActionType</a>! |  |
| `user` | <a href="#user">User</a>! |  |
| `errorMessage` | String! |  |
| `results` | (first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>! |  |

---

#### `BulkPullRequestActionFinished`

**Service:** changelogreader | **Implements:** <a href="#bulkpullrequestaction">BulkPullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | <a href="#pullrequestactiontype">PullRequestActionType</a>! |  |
| `user` | <a href="#user">User</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `results` | (first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>! |  |

---

#### `BulkPullRequestActionQueued`

**Service:** changelogreader | **Implements:** <a href="#bulkpullrequestaction">BulkPullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | <a href="#pullrequestactiontype">PullRequestActionType</a>! |  |
| `user` | <a href="#user">User</a>! |  |
| `queuedAt` | <a href="#datetime">DateTime</a>! |  |
| `results` | (first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>! |  |

---

#### `BulkPullRequestActionRunning`

**Service:** changelogreader | **Implements:** <a href="#bulkpullrequestaction">BulkPullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | <a href="#pullrequestactiontype">PullRequestActionType</a>! |  |
| `user` | <a href="#user">User</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `results` | (first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>! |  |

---

#### `ChangeParticipant`

**Service:** changelogreader

A participant identity from the VCS provider. Not necessarily a Moderne user.

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Display name. |
| `email` | String | Email address. |
| `username` | String | Username/login on the VCS provider. |
| `avatarUrl` | String | Avatar URL from the VCS provider. |
| `roles` | [<a href="#contributorrole">ContributorRole</a>!]! | The roles this participant has across changelog entries. |

---

#### `ChangelogCommit`

**Service:** changelogreader | **Implements:** <a href="#changelogentry">ChangelogEntry</a>

A direct commit to a branch.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! |  |
| `author` | <a href="#changeparticipant">ChangeParticipant</a>! |  |
| `repository` | <a href="#repository">Repository</a>! |  |
| `url` | String! |  |
| `branch` | String! |  |
| `sha` | String! | The commit SHA. |
| `updatedAt` | <a href="#datetime">DateTime</a>! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `buildState` | <a href="#buildstate">BuildState</a> |  |
| `diffstat` | <a href="#diffstat">DiffStat</a>! |  |

---

#### `ChangelogEntryConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#changelogentryedge">ChangelogEntryEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `ChangelogEntryEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#changelogentry">ChangelogEntry</a>! |  |
| `cursor` | String! |  |

---

#### `ChangelogParticipantConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#changelogparticipantedge">ChangelogParticipantEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `ChangelogParticipantEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#changeparticipant">ChangeParticipant</a>! |  |
| `cursor` | String! |  |

---

#### `ChangelogPullRequest`

**Service:** changelogreader | **Implements:** <a href="#changelogentry">ChangelogEntry</a>

A pull request (open, draft, merged, or closed).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! |  |
| `author` | <a href="#changeparticipant">ChangeParticipant</a>! |  |
| `repository` | <a href="#repository">Repository</a>! |  |
| `url` | String! |  |
| `branch` | String! |  |
| `number` | Int! | The PR number. |
| `sourceBranch` | String! | The source branch of the pull request. |
| `state` | <a href="#pullrequeststate">PullRequestState</a>! | Current state of the pull request. |
| `draft` | Boolean! | Whether this is a draft pull request. |
| `updatedAt` | <a href="#datetime">DateTime</a>! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `buildState` | <a href="#buildstate">BuildState</a> |  |
| `reviewDecision` | <a href="#reviewdecision">ReviewDecision</a> | Review decision for the pull request. |
| `approvedBy` | [<a href="#changeparticipant">ChangeParticipant</a>!] | Reviewers who approved this pull request. |
| `requestedReviewers` | [<a href="#changeparticipant">ChangeParticipant</a>!] | Reviewers assigned/requested on this pull request. |
| `additions` | Int | Lines added. |
| `deletions` | Int | Lines removed. |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `diffstat` | <a href="#diffstat">DiffStat</a>! |  |
| `actions` | (first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>! | Actions (approve, merge, close) that have been applied to this pull request.
Default sort order is descending by startedAt. |

---

#### `CliDownloadInstructionLink`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `label` | String! |  |
| `uri` | String! |  |

---

#### `CodeSearchResult`

**Service:** code-search

| Field | Type | Description |
|-------|------|-------------|
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `fileChanges` | (first: Int = 100, after: String): <a href="#filechangeconnection">FileChangeConnection</a>! |  |

---

#### `CodeSearchResultConnection`

**Service:** code-search

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#codesearchresultedge">CodeSearchResultEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |
| `searchDurationMs` | <a href="#long">Long</a>! |  |

---

#### `CodeSearchResultEdge`

**Service:** code-search

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#codesearchresult">CodeSearchResult</a>! |  |
| `cursor` | String! |  |

---

#### `Column`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `type` | String! |  |

---

#### `Connector`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `nickname` | String |  |
| `version` | String! |  |
| `tools` | [<a href="#connectortool">ConnectorTool</a>!]! |  |
| `uiConfiguration` | <a href="#uiconfiguration">UiConfiguration</a> |  |
| `personalAccessTokenConfiguration` | <a href="#personalaccesstokenconfiguration">PersonalAccessTokenConfiguration</a> |  |

---

#### `ConnectorConnection`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#connectoredge">ConnectorEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `ConnectorEdge`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#connector">Connector</a>! |  |
| `cursor` | String! |  |

---

#### `Conversation`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `organization` | <a href="#organization">Organization</a>! |  |
| `user` | <a href="#user">User</a>! |  |
| `messages` | (first: Int = 100, after: String): <a href="#messageconnection">MessageConnection</a>! |  |
| `turnState` | <a href="#conversationturnstate">ConversationTurnState</a>! | Current turn state for this conversation. Carries the server-
recommended poll cadence — clients should respect this rather than
hardcoding an interval. |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `ConversationConnection`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#conversationedge">ConversationEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |

---

#### `ConversationEdge`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#conversation">Conversation</a>! |  |
| `cursor` | String! |  |

---

#### `ConversationTurnState`

**Service:** moddy

Represents the current phase of the conversation's active turn (if any).
Drives client poll cadence.

| Field | Type | Description |
|-------|------|-------------|
| `phase` | <a href="#conversationphase">ConversationPhase</a>! |  |
| `recommendedPollIntervalMs` | Int! | Server-recommended poll interval in milliseconds. |
| `activeTurnStartedAt` | <a href="#datetime">DateTime</a> | When the currently-active turn started, if any. |

---

#### `CreateAccessTokenResult`

**Service:** authz

Result of creating a new access token.
The token value is only available in this response.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The unique identifier for the token. Use this ID for revocation. |
| `token` | String! | The actual token value. Store this securely - it cannot be retrieved again. |
| `description` | String | The description provided when creating the token. |
| `created` | <a href="#datetime">DateTime</a>! | When the token was created. |
| `expiresAt` | <a href="#datetime">DateTime</a> | When the token will expire, or null if it never expires. |

---

#### `DataTableAvailable`

**Service:** changesetreader | **Implements:** <a href="#datatable">DataTable</a>

A data table is available for download but no download has been initiated yet.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | <a href="#datatabledescriptor">DataTableDescriptor</a>! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `changesetId` | ID! |  |

---

#### `DataTableConnection`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#datatableedge">DataTableEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `DataTableDescriptor`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `columns` | [<a href="#column">Column</a>!]! |  |

---

#### `DataTableEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#datatable">DataTable</a>! |  |
| `cursor` | String! |  |

---

#### `DataTableError`

**Service:** changesetreader | **Implements:** <a href="#datatable">DataTable</a>

A data table download failed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | <a href="#datatabledescriptor">DataTableDescriptor</a>! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `changesetId` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `message` | String! |  |

---

#### `DataTableFinished`

**Service:** changesetreader | **Implements:** <a href="#datatable">DataTable</a>

A data table download has completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | <a href="#datatabledescriptor">DataTableDescriptor</a>! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `format` | <a href="#datatableformat">DataTableFormat</a>! |  |
| `changesetId` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `duration` | <a href="#duration">Duration</a> |  |
| `downloadUrl` | String! | URL path to download the file (relative to the service base URL). |

---

#### `DataTableProcessing`

**Service:** changesetreader | **Implements:** <a href="#datatable">DataTable</a>

A data table download is being processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | <a href="#datatabledescriptor">DataTableDescriptor</a>! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `format` | <a href="#datatableformat">DataTableFormat</a>! |  |
| `changesetId` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `DataTableSqlMessage`

**Service:** moddy | **Implements:** <a href="#message">Message</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `sqlQuery` | String! |  |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `DataTablesMessage`

**Service:** moddy | **Implements:** <a href="#message">Message</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `dataTables` | [<a href="#datatabledescriptor">DataTableDescriptor</a>!]! |  |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `DevCenter`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> | The currently configured DevCenter recipe for this organization. |
| `runs` | (first: Int = 10, after: String, where: <a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>, orderBy: [<a href="#devcenterrunorderbyinput">DevCenterRunOrderByInput</a>!]): <a href="#devcenterrunconnection">DevCenterRunConnection</a>! | DevCenter runs for this organization, ordered by start time descending. |

---

#### `DevCenterCard`

**Service:** changesetreader

A DevCenter card represents a category of work (e.g., "Spring Boot 3", "Java 21", "Security").
Cards contain measures that track progress toward completion.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | <a href="#markdown">Markdown</a>! | Display name of the card. |
| `description` | <a href="#markdown">Markdown</a> | Description of what this card tracks. |
| `fixRecipe` | <a href="#recipedescriptor">RecipeDescriptor</a> | Recipe that can fix/complete the work tracked by this card. |
| `aggregation` | <a href="#devcenteraggregation">DevCenterAggregation</a>! | How results are aggregated for this card. |
| `measures` | [<a href="#devcentermeasure">DevCenterMeasure</a>!]! | Measures within this card, ordered by ordinal. |
| `repositoriesNotApplicable` | Int! | Repositories where this card is not applicable. |

---

#### `DevCenterCardDescriptor`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | <a href="#markdown">Markdown</a>! |  |
| `description` | <a href="#markdown">Markdown</a> |  |
| `fixRecipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `aggregation` | <a href="#devcenteraggregation">DevCenterAggregation</a>! |  |
| `measures` | [<a href="#devcentermeasuredescriptor">DevCenterMeasureDescriptor</a>!]! |  |

---

#### `DevCenterMeasure`

**Service:** changesetreader

A measure within a DevCenter card representing a specific state or finding,
with a count from the run results.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | <a href="#markdown">Markdown</a>! | Display name of the measure. |
| `description` | <a href="#markdown">Markdown</a> | Description of what this measure represents. |
| `ordinal` | Int! | Sort order relative to other measures in the card. |
| `count` | Int! | Count of repositories or occurrences for this measure.
For PER_REPOSITORY: number of repositories in this state.
For PER_OCCURRENCE: total count of occurrences. |

---

#### `DevCenterMeasureDescriptor`

**Service:** recipemarketplace

A measure descriptor within a DevCenter card, representing metadata about
a specific state or finding. See DevCenterMeasure in changeset:reader
for the runtime version with counts.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | <a href="#markdown">Markdown</a>! |  |
| `description` | <a href="#markdown">Markdown</a> |  |
| `ordinal` | Int! |  |

---

#### `DevCenterOrganization`

**Service:** changesetreader

Organization-level context from a DevCenter run.

| Field | Type | Description |
|-------|------|-------------|
| `repositories` | <a href="#devcenterrepositories">DevCenterRepositories</a>! | Repository counts at the time of the run. |
| `contributingDevelopers` | Int! | Number of unique contributing developers (last 90 days). |
| `linesOfCode` | <a href="#long">Long</a>! | Total lines of code across all repositories on platform. |

---

#### `DevCenterRepositories`

**Service:** changesetreader

Repository counts from a DevCenter run.

| Field | Type | Description |
|-------|------|-------------|
| `total` | Int! | Total repositories defined in the organization at the time of the run. |
| `repositoriesWithoutLst` | Int! | Repositories with no LST ingested at the time of the run. |

---

#### `DevCenterRunCanceled`

**Service:** changesetreader | **Implements:** <a href="#devcenterrun">DevCenterRun</a>

DevCenter run was canceled before completion.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `DevCenterRunConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#devcenterrunedge">DevCenterRunEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `DevCenterRunEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#devcenterrun">DevCenterRun</a>! |  |
| `cursor` | String! |  |

---

#### `DevCenterRunError`

**Service:** changesetreader | **Implements:** <a href="#devcenterrun">DevCenterRun</a>

DevCenter run failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `message` | String! | Human-readable error message. |

---

#### `DevCenterRunFinished`

**Service:** changesetreader | **Implements:** <a href="#devcenterrun">DevCenterRun</a>

DevCenter run completed successfully with summarized results.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `organization` | <a href="#devcenterorganization">DevCenterOrganization</a>! |  |
| `upgradesAndMigrations` | [<a href="#devcentercard">DevCenterCard</a>!]! | Upgrade and migration opportunities found (from UpgradesAndMigrations data table). |
| `security` | <a href="#devcentercard">DevCenterCard</a> | Security vulnerabilities found (from SecurityIssues data table). |

---

#### `DevCenterRunRunning`

**Service:** changesetreader | **Implements:** <a href="#devcenterrun">DevCenterRun</a>

DevCenter recipe is currently running across repositories.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |

---

#### `DiffStat`

**Service:** changelogreader

Aggregate line-level diff statistics.

| Field | Type | Description |
|-------|------|-------------|
| `additions` | Int! | Total lines added. |
| `deletions` | Int! | Total lines removed. |

---

#### `DirectCommitSucceeded`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a>

Direct commit to repository completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `resultLink` | String |  |

---

#### `ErrorMessage`

**Service:** moddy | **Implements:** <a href="#message">Message</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `content` | <a href="#markdown">Markdown</a>! |  |
| `code` | String | Stable error code that clients may switch on for UI copy. The full
taxonomy (split into API-call errors vs in-conversation errors) is
maintained in `doc/moddy-polling-ui-handoff.md`. As of now:

  Configuration / LLM provider:
    LLM_UNAVAILABLE, LLM_OVERLOADED, LLM_RATE_LIMITED, LLM_AUTH_FAILED,
    LLM_CONTEXT_TOO_LONG, LLM_TIMED_OUT, LLM_QUOTA_EXCEEDED,
    LLM_UNREACHABLE, LLM_EMPTY_RESPONSE, LLM_FAILED

  Tool execution:
    TOOL_UNKNOWN, TOOL_FAILED

  Turn lifecycle:
    TURN_LIMIT_EXCEEDED, CANCELLED

  Fallback:
    INTERNAL

API-call errors (returned in GraphQL `errors[]`, not as messages):
INVALID_CURSOR, FORBIDDEN, CONVERSATION_BUSY, MESSAGE_TOO_LONG,
CONVERSATION_NOT_FOUND, TOO_MANY_REQUESTS. |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `ExchangeAuthorizationResult`

**Service:** authz

Result of exchanging an authorization code.

| Field | Type | Description |
|-------|------|-------------|
| `success` | Boolean! | True if the exchange was successful and token was stored. |
| `error` | String | Error message if exchange failed. |

---

#### `FileChangeConnection`

**Service:** corechangeset

Connection for file changes with aggregate statistics.

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#filechangeedge">FileChangeEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |
| `searched` | Int! | Total files searched. |
| `changed` | Int! | Files with committable changes. |
| `errors` | Int! | Files with errors. |

---

#### `FileChangeEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#filechange">FileChange</a>! |  |
| `cursor` | String! |  |

---

#### `ForkAndPullRequestCommitSucceeded`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a>

Fork and pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | <a href="#pullrequeststatus">PullRequestStatus</a>! | Pull request status. |

---

#### `ForkCommitOptions`

**Service:** changesetcommitter | **Implements:** <a href="#commitoptions">CommitOptions</a>

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account. |
| `prefixOrganization` | Boolean! |  |

---

#### `ForkCommitSucceeded`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a>

Fork commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `resultLink` | String |  |

---

#### `ForkPullRequestOptions`

**Service:** changesetcommitter | **Implements:** <a href="#commitoptions">CommitOptions</a>

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account. |
| `prefixOrganization` | Boolean! |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | <a href="#base64">Base64</a> |  |
| `draft` | Boolean! |  |
| `maintainerCanModify` | Boolean! | GitHub only flag to allow maintainers to edit a pull request. |
| `autoMergeMethod` | <a href="#mergemethod">MergeMethod</a> | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
| `canRecreateClosedPullRequest` | Boolean! | Recreate a pull request if it was already closed. |

---

#### `GenericHttpToolConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |

---

#### `GitLabConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `oauth` | <a href="#gitlaboauth">GitLabOauth</a> |  |

---

#### `GitLabConnection`

**Service:** authz | **Implements:** <a href="#scmconnection">ScmConnection</a>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [<a href="#scmtokeninfo">ScmTokenInfo</a>!]! |  |

---

#### `GitLabOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

---

#### `GithubConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `allowableOrganizations` | [String!]! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `oauth` | <a href="#githuboauth">GithubOauth</a> |  |

---

#### `GithubConnection`

**Service:** authz | **Implements:** <a href="#scmconnection">ScmConnection</a>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [<a href="#scmtokeninfo">ScmTokenInfo</a>!]! |  |

---

#### `GithubOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `includePrivateRepos` | Boolean! |  |

---

#### `GoRecipeBundle`

**Service:** changesetreader | **Implements:** <a href="#recipebundle">RecipeBundle</a>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

---

#### `HttpToolConnectivity`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `connected` | Boolean! |  |
| `latency` | <a href="#duration">Duration</a> |  |

---

#### `License`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `key` | String |  |

---

#### `LlmConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `llmProvider` | <a href="#llmprovider">LlmProvider</a>! |  |

---

#### `LstArtifact`

**Service:** organization

The LST artifact for a repository - the precomputed Lossless Semantic Tree
that recipe runs consume. Every repository has a conceptual artifact;
`published` reflects the upstream `mod publish` timestamp, while
`available` indicates whether the saas can route a recipe run to it yet.

| Field | Type | Description |
|-------|------|-------------|
| `published` | <a href="#datetime">DateTime</a> | When `mod publish` produced an artifact into the customer's LST artifact
repository, or null if no artifact has been published. For a tenant
configured for encrypted LSTs, a non-null `published` does NOT mean the
encrypted artifact has been received by the tenant - that signal lives
on `available`. |
| `available` | Boolean! | Whether the artifact is reachable for a recipe run.
For an organization source with encryption enabled, true once the
connector has uploaded the encrypted artifact and the gateway has
surfaced an `encrypted://` alternate publish URI. For a source without
encryption (pass-through), true when the gateway-projected row has a
non-empty `publishUri`, which we assume is reachable from `mod publish`. |

---

#### `Markup`

**Service:** corechangeset | **Implements:** <a href="#marker">Marker</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `level` | <a href="#markuplevel">MarkupLevel</a>! |  |
| `message` | String |  |
| `detail` | String |  |

---

#### `MavenConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `localRepository` | String |  |
| `lastIngestedAt` | <a href="#datetime">DateTime</a> |  |

---

#### `MavenRecipeBundle`

**Service:** changesetreader | **Implements:** <a href="#recipebundle">RecipeBundle</a>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

---

#### `MergeOptions`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `deleteSourceBranch` | Boolean! |  |
| `mergeMethod` | <a href="#mergemethod">MergeMethod</a>! |  |

---

#### `MessageConnection`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#messageedge">MessageEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |

---

#### `MessageEdge`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#message">Message</a>! |  |
| `cursor` | String! |  |

---

#### `Moddy`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `systemPrompt` | <a href="#prompt">Prompt</a>! | The effective system prompt for this context.
Cascades: user > organization > universal > built-in default. |
| `adminOnly` | Boolean! | When true, only administrators can create conversations or send messages.
Install-level policy flag; the UI uses this together with the viewer's admin
status to gate the Moddy menu entry. |
| `conversations` | (first: Int = 50, after: String, where: <a href="#conversationwhereinput">ConversationWhereInput</a>, orderBy: [<a href="#conversationorderbyinput">ConversationOrderByInput</a>!]): <a href="#conversationconnection">ConversationConnection</a>! |  |
| `providerName` | String | Human-readable provider name (e.g. "Anthropic", "OpenAI"). Null when
no LLM provider is configured (in which case `capabilities.moddy` is
also false — clients should gate the chat composer on the capability,
not on this field). |
| `model` | String | Configured model identifier (e.g. "claude-3-5-sonnet-20241022"). Null
when no provider is configured or the provider is configured without a
model override. |

---

#### `MoreHelpLink`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `label` | String! |  |
| `uri` | String! |  |

---

#### `NpmConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |

---

#### `NpmRecipeBundle`

**Service:** changesetreader | **Implements:** <a href="#recipebundle">RecipeBundle</a>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

---

#### `NugetConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |

---

#### `NugetRecipeBundle`

**Service:** changesetreader | **Implements:** <a href="#recipebundle">RecipeBundle</a>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

---

#### `OAuthAuthorization`

**Service:** authz

Represents a pending OAuth authorization.
The UI should redirect to authorizationUrl, then call exchangeAuthorizationCode
with the id and extracted callback parameters.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | Unique ID for this authorization attempt.
Used to look up stored PKCE state at exchange time. |
| `authorizationUrl` | String! | The fully-constructed OAuth authorization URL.
UI should redirect the user to this URL.

IMPORTANT: The UI must store the authorization ID before redirecting,
as it will be needed to call exchangeAuthorizationCode after the callback.
The redirect URI does not contain the authorization ID. |
| `callbackParameters` | [String!]! | Query parameters the UI should extract from the OAuth callback URL
and pass to exchangeAuthorizationCode (e.g., ["code"]). |
| `expiresAt` | <a href="#datetime">DateTime</a>! | When this authorization expires. UI should treat expired authorizations as stale. |

---

#### `Option`

**Service:** changesetreader

RecipeDescriptor resolved from changeset-specific recipes.csv.
When a recipe run is created, the recipes.csv is copied to the changeset directory,
so we can resolve the recipe that was used at the time of the run (not the current global state).

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | <a href="#object">Object</a> |  |
| `type` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `example` | String |  |
| `valid` | [String] |  |
| `required` | Boolean! |  |

---

#### `Organization`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `changelog` | (first: Int = 50, after: String, where: <a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a>, orderBy: [<a href="#changelogentryorderbyinput">ChangelogEntryOrderByInput</a>!]): <a href="#changelogentryconnection">ChangelogEntryConnection</a>! | PR and commit activity feed for repositories in this organization. |
| `participants` | (first: Int = 50, after: String, where: <a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a>, orderBy: [<a href="#changelogparticipantorderbyinput">ChangelogParticipantOrderByInput</a>!]): <a href="#changelogparticipantconnection">ChangelogParticipantConnection</a>! | All unique participants across the changelog for this organization,
aggregated from authors, assignees, closers, and reviewers. |
| `commitOptions` | [<a href="#commitoption">CommitOption</a>!]! | Available commit options for this organization. |
| `changesets` | (first: Int = 50, after: String, where: <a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a>, orderBy: [<a href="#organizationchangesetorderbyinput">OrganizationChangesetOrderByInput</a>!]): <a href="#organizationchangesetconnection">OrganizationChangesetConnection</a>! |  |
| `devCenter` | <a href="#devcenter">DevCenter</a> | DevCenter provides organization-wide campaign progress tracking. |
| `moddy` | <a href="#moddy">Moddy</a>! |  |
| `name` | String! |  |
| `parents` | [<a href="#organization">Organization</a>!]! | The ancestor organizations of this organization, ordered from immediate parent towards root.
Does not include the epsilon root. Empty for the root organization and direct children of root. |
| `user` | <a href="#user">User</a> | The user who owns this organization. Null for global organizations,
non-null for user-defined organizations. |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorywhereinput">RepositoryWhereInput</a>, orderBy: [<a href="#repositoryorderbyinput">RepositoryOrderByInput</a>!]): <a href="#repositoryconnection">RepositoryConnection</a>! |  |
| `children` | (first: Int = 100, after: String, where: <a href="#organizationwhereinput">OrganizationWhereInput</a>, orderBy: [<a href="#organizationorderbyinput">OrganizationOrderByInput</a>!]): <a href="#organizationconnection">OrganizationConnection</a>! | Direct children of this organization in the tree, paginated.
Useful for lazy-loading the org tree level by level — e.g. an org
selector that fetches the root, then the children of each folder
only when the user expands it.

`where.depth` is ignored on this field — every direct child of a
given parent has the same depth, so the filter would be either
all-or-nothing. Use `where.name` and the boolean composers
(`_and`, `_or`, `_not`) for meaningful filtering.

`orderBy` defaults to NAME ascending when unspecified. |
| `marketplace` | <a href="#recipemarketplace">RecipeMarketplace</a> |  |

---

#### `OrganizationChangeset`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: <a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>, orderBy: [<a href="#bulkpullrequestactionorderbyinput">BulkPullRequestActionOrderByInput</a>!]): <a href="#bulkpullrequestactionconnection">BulkPullRequestActionConnection</a>! | Bulk pull request actions (approve, merge, close) initiated against pull
requests that belong to this changeset.

Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing
last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: <a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>, orderBy: [<a href="#organizationcommitorderbyinput">OrganizationCommitOrderByInput</a>!]): <a href="#organizationcommitconnection">OrganizationCommitConnection</a> | Commit operations initiated from this changeset. |
| `user` | <a href="#user">User</a>! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this changeset.
Each visualization starts as Available and transitions to Processing/Finished/Error
when runVisualization mutation is called. |

---

#### `OrganizationChangesetConnection`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#organizationchangesetedge">OrganizationChangesetEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `OrganizationChangesetEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#organizationchangeset">OrganizationChangeset</a>! |  |
| `cursor` | String! |  |
| `organization` | <a href="#organization">Organization</a> | The organization this changeset was run against.
May differ from the queried organization when the changeset belongs to a suborganization.
Null if the organization has been deleted or is temporarily unavailable. |

---

#### `OrganizationCommitCanceled`

**Service:** changesetcommitter | **Implements:** <a href="#organizationcommit">OrganizationCommit</a>

Commit was canceled before completion.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! |  |
| `message` | String! |  |
| `extendedMessage` | <a href="#base64">Base64</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `canceledBy` | <a href="#user">User</a>! | Who or what initiated the cancellation. |
| `repositories` | (first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>! | Paginated results per repository (partial). |

---

#### `OrganizationCommitConnection`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#organizationcommitedge">OrganizationCommitEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `OrganizationCommitEdge`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#organizationcommit">OrganizationCommit</a>! |  |
| `cursor` | String! |  |

---

#### `OrganizationCommitError`

**Service:** changesetcommitter | **Implements:** <a href="#organizationcommit">OrganizationCommit</a>

Commit failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! |  |
| `message` | String! |  |
| `extendedMessage` | <a href="#base64">Base64</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `errorMessage` | String! | Human-readable error message. |
| `repositories` | (first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>! | Paginated results per repository (partial). |

---

#### `OrganizationCommitFinished`

**Service:** changesetcommitter | **Implements:** <a href="#organizationcommit">OrganizationCommit</a>

Commit completed successfully (all or partial success).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! |  |
| `message` | String! |  |
| `extendedMessage` | <a href="#base64">Base64</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `repositories` | (first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>! | Paginated results per repository. |

---

#### `OrganizationCommitQueued`

**Service:** changesetcommitter | **Implements:** <a href="#organizationcommit">OrganizationCommit</a>

Commit is queued and waiting to be processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! |  |
| `message` | String! |  |
| `extendedMessage` | <a href="#base64">Base64</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `repositories` | (first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>! | Paginated results per repository. |

---

#### `OrganizationCommitRunning`

**Service:** changesetcommitter | **Implements:** <a href="#organizationcommit">OrganizationCommit</a>

Commit is actively being processed across repositories.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! |  |
| `message` | String! |  |
| `extendedMessage` | <a href="#base64">Base64</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `repositories` | (first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>! | Paginated results per repository. |

---

#### `OrganizationConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |

---

#### `OrganizationConnection`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#organizationedge">OrganizationEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `OrganizationEdge`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#organization">Organization</a>! |  |
| `cursor` | String! |  |

---

#### `OrganizationRecipeRun`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: <a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>, orderBy: [<a href="#bulkpullrequestactionorderbyinput">BulkPullRequestActionOrderByInput</a>!]): <a href="#bulkpullrequestactionconnection">BulkPullRequestActionConnection</a>! | Bulk pull request actions for recipe-run changesets. |
| `commits` | (first: Int = 50, after: String, where: <a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>, orderBy: [<a href="#organizationcommitorderbyinput">OrganizationCommitOrderByInput</a>!]): <a href="#organizationcommitconnection">OrganizationCommitConnection</a> | Commit operations initiated from this recipe run. |
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#recipeoptionvalue">RecipeOptionValue</a>!]! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | <a href="#reciperunpriority">RecipeRunPriority</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunCanceled`

**Service:** changesetreader | **Implements:** <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#recipeoptionvalue">RecipeOptionValue</a>!]! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | <a href="#reciperunpriority">RecipeRunPriority</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `canceledAt` | <a href="#datetime">DateTime</a>! | Alias for finishedAt - when the run was canceled |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#organizationreciperunedge">OrganizationRecipeRunEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `OrganizationRecipeRunEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#organizationreciperun">OrganizationRecipeRun</a>! |  |
| `cursor` | String! |  |

---

#### `OrganizationRecipeRunError`

**Service:** changesetreader | **Implements:** <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#recipeoptionvalue">RecipeOptionValue</a>!]! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | <a href="#reciperunpriority">RecipeRunPriority</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `errorMessage` | String |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunFinished`

**Service:** changesetreader | **Implements:** <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#recipeoptionvalue">RecipeOptionValue</a>!]! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | <a href="#reciperunpriority">RecipeRunPriority</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `duration` | <a href="#duration">Duration</a> |  |
| `totals` | <a href="#reciperuntotals">RecipeRunTotals</a>! |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunQueued`

**Service:** changesetreader | **Implements:** <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#recipeoptionvalue">RecipeOptionValue</a>!]! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | <a href="#reciperunpriority">RecipeRunPriority</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `queuedAt` | <a href="#datetime">DateTime</a>! |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunRunning`

**Service:** changesetreader | **Implements:** <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#recipeoptionvalue">RecipeOptionValue</a>!]! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | <a href="#reciperunpriority">RecipeRunPriority</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `totals` | <a href="#reciperuntotals">RecipeRunTotals</a> |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunSyncing`

**Service:** changesetreader | **Implements:** <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | <a href="#recipedescriptor">RecipeDescriptor</a> |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#recipeoptionvalue">RecipeOptionValue</a>!]! |  |
| `createdAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | <a href="#reciperunpriority">RecipeRunPriority</a>! |  |
| `parent` | <a href="#organizationchangeset">OrganizationChangeset</a> |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `repositories` | (first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>! |  |
| `dataTables` | (first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>! | Visualizations produced by this recipe run. |

---

#### `PageInfo`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `hasNextPage` | Boolean! |  |
| `hasPreviousPage` | Boolean! |  |
| `startCursor` | String |  |
| `endCursor` | String |  |

---

#### `Patch`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `diff` | String! | Sanitized diff (does not include markers) |
| `fencedMarkerDiff` | String! | A diff with search and markup markers included in fenced
\{\{UUID}} wrappers that correspond to ids in the markers list. |
| `markers` | [<a href="#marker">Marker</a>!]! |  |

---

#### `PersonalAccessTokenConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `maxExpiryDays` | Int |  |

---

#### `PipRecipeBundle`

**Service:** changesetreader | **Implements:** <a href="#recipebundle">RecipeBundle</a>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

---

#### `PlatformCapabilities`

**Service:** artifactsmaven

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `artifacts` | Boolean! |  |
| `changelog` | Boolean! |  |
| `codeSearch` | Boolean! |  |
| `connector` | Boolean! |  |
| `moddy` | Boolean! |  |
| `profiling` | <a href="#profiling">Profiling</a>! |  |

---

#### `Profiling`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `deployed` | Boolean! | Whether the per-tenant Pyroscope ASG, S3 bucket, and IAM are provisioned. |
| `session` | <a href="#profilingsession">ProfilingSession</a> | The currently active profiling session, or null when profiling is off. Flipped by setProfiling. |

---

#### `ProfilingSession`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `user` | <a href="#user">User</a>! | The user who turned profiling on. |
| `startedAt` | <a href="#datetime">DateTime</a>! | When profiling was turned on. |
| `event` | <a href="#profilingevent">ProfilingEvent</a>! | The primary profiling event the in-process agent is sampling. |

---

#### `Prompt`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `content` | <a href="#markdown">Markdown</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |
| `lastUpdatedBy` | <a href="#user">User</a>! |  |

---

#### `PullRequestActionCanceled`

**Service:** changelogreader | **Implements:** <a href="#pullrequestaction">PullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | <a href="#pullrequestref">PullRequestRef</a>! |  |
| `canceledBy` | <a href="#user">User</a>! |  |

---

#### `PullRequestActionConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#pullrequestactionedge">PullRequestActionEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `PullRequestActionEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#pullrequestaction">PullRequestAction</a>! |  |
| `cursor` | String! |  |

---

#### `PullRequestActionFailed`

**Service:** changelogreader | **Implements:** <a href="#pullrequestaction">PullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | <a href="#pullrequestref">PullRequestRef</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `errorMessage` | String! |  |

---

#### `PullRequestActionQueued`

**Service:** changelogreader | **Implements:** <a href="#pullrequestaction">PullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | <a href="#pullrequestref">PullRequestRef</a>! |  |

---

#### `PullRequestActionRunning`

**Service:** changelogreader | **Implements:** <a href="#pullrequestaction">PullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | <a href="#pullrequestref">PullRequestRef</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `PullRequestActionSucceeded`

**Service:** changelogreader | **Implements:** <a href="#pullrequestaction">PullRequestAction</a>

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | <a href="#pullrequestref">PullRequestRef</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `PullRequestCommitSucceeded`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a>

Pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | <a href="#pullrequeststatus">PullRequestStatus</a>! | Pull request status. |

---

#### `PullRequestOptions`

**Service:** changesetcommitter | **Implements:** <a href="#commitoptions">CommitOptions</a>

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | <a href="#base64">Base64</a> |  |
| `draft` | Boolean! |  |
| `autoMergeMethod` | <a href="#mergemethod">MergeMethod</a> | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
| `canRecreateClosedPullRequest` | Boolean! | Recreate a pull request if it was already closed. |

---

#### `PullRequestRef`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `repositoryPath` | String! |  |
| `branch` | String! |  |
| `number` | Int! |  |

---

#### `PullRequestStatus`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `mergeable` | <a href="#mergeable">Mergeable</a>! | Can this pull request be merged or not |
| `state` | <a href="#pullrequeststate">PullRequestState</a>! |  |
| `review` | <a href="#reviewstatus">ReviewStatus</a>! |  |
| `buildState` | <a href="#buildstate">BuildState</a> |  |
| `otherBlockingReasons` | [String!]! | Additional status flags that block this pull request. Can depend on the SCM service provider. |

---

#### `PypiConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |

---

#### `RecipeBundleConnection`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#recipebundleedge">RecipeBundleEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `RecipeBundleEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#recipebundle">RecipeBundle</a>! |  |
| `cursor` | String! |  |

---

#### `RecipeCategory`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `displayName` | <a href="#markdown">Markdown</a>! |  |
| `description` | <a href="#markdown">Markdown</a>! |  |
| `recipeCount` | Int! | Total number of unique recipes in this category, including all subcategories recursively. |
| `parents` | [<a href="#recipecategory">RecipeCategory</a>!]! |  |
| `recipes` | (first: Int = 100, after: String, where: <a href="#recipewhereinput">RecipeWhereInput</a>, orderBy: [<a href="#recipeorderbyinput">RecipeOrderByInput</a>!]): <a href="#recipedescriptorconnection">RecipeDescriptorConnection</a>! |  |
| `categories` | (first: Int = 100, after: String, where: <a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>, orderBy: [<a href="#recipecategoryorderbyinput">RecipeCategoryOrderByInput</a>!]): <a href="#recipecategoryconnection">RecipeCategoryConnection</a>! |  |

---

#### `RecipeCategoryConnection`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#recipecategoryedge">RecipeCategoryEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `RecipeCategoryEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#recipecategory">RecipeCategory</a>! |  |
| `cursor` | String! |  |

---

#### `RecipeDescriptor`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `instanceName` | String |  |
| `displayName` | <a href="#markdown">Markdown</a>! |  |
| `description` | <a href="#markdown">Markdown</a>! |  |
| `recipeCount` | Int |  |
| `bundle` | <a href="#recipebundle">RecipeBundle</a>! |  |
| `options` | [<a href="#option">Option</a>!]! |  |
| `dataTables` | [<a href="#datatabledescriptor">DataTableDescriptor</a>!]! |  |
| `devCenterCards` | [<a href="#devcentercarddescriptor">DevCenterCardDescriptor</a>!] | DevCenter card descriptors for this recipe, or null if not a DevCenter recipe. |
| `detail` | <a href="#recipedetail">RecipeDetail</a>! | Expensive recipe detail fields that require resolving the full recipe bundle.
Returns a state machine: query once to trigger resolution, poll until Finished. |

---

#### `RecipeDescriptorConnection`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#recipedescriptoredge">RecipeDescriptorEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `RecipeDescriptorEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#recipedescriptor">RecipeDescriptor</a>! |  |
| `cursor` | String! |  |
| `relevance` | Float! | Relevance score for this recipe in the context of a search query.
For semantic search, this represents the search relevance (0.0 to 1.0).
For filter-based queries, this is always 1.0. |

---

#### `RecipeDetailError`

**Service:** recipemarketplace | **Implements:** <a href="#recipedetail">RecipeDetail</a>

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `message` | String! |  |

---

#### `RecipeDetailFinished`

**Service:** recipemarketplace | **Implements:** <a href="#recipedetail">RecipeDetail</a>

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `recipeList` | (first: Int = 100, after: String): <a href="#recipedescriptorconnection">RecipeDescriptorConnection</a>! | The list of recipes that make up this composite recipe.
Returns an empty connection for non-composite (leaf) recipes. |
| `tags` | [String!]! | Tags associated with this recipe for categorization and filtering. |
| `preconditions` | [<a href="#recipedescriptor">RecipeDescriptor</a>!]! |  |
| `graph` | <a href="#recipegraph">RecipeGraph</a>! | Flat vertices-and-edges representation of this composite recipe tree with
Singleton deduplication pre-applied. Used by the Builder UI to visualize
a composite recipe in a single round trip regardless of tree depth.
Atomic (leaf) recipes return a single-vertex graph. |

---

#### `RecipeDetailLoading`

**Service:** recipemarketplace | **Implements:** <a href="#recipedetail">RecipeDetail</a>

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `RecipeGraph`

**Service:** recipemarketplace

Flat vertices-and-edges representation of a composite recipe with
`org.openrewrite.Singleton` deduplication pre-applied. Produced by the
marketplace backend and served to visualization clients in one round trip.

| Field | Type | Description |
|-------|------|-------------|
| `rootVertexId` | Int! | ID of the root (entry-point) vertex in the graph. |
| `vertices` | [<a href="#recipegraphvertex">RecipeGraphVertex</a>!]! |  |
| `edges` | [<a href="#recipegraphedge">RecipeGraphEdge</a>!]! |  |

---

#### `RecipeGraphEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `from` | Int! |  |
| `to` | Int! |  |
| `type` | <a href="#recipegraphedgetype">RecipeGraphEdgeType</a>! |  |

---

#### `RecipeGraphVertex`

**Service:** recipemarketplace

A vertex in a RecipeGraph: a full recipe occurrence with its configured
options. Recipes that declare `org.openrewrite.Singleton` as a precondition
are deduplicated — additional occurrences are expressed as REFERENCE edges
pointing back to the first occurrence rather than as separate vertices.

| Field | Type | Description |
|-------|------|-------------|
| `id` | Int! |  |
| `descriptor` | <a href="#recipedescriptor">RecipeDescriptor</a>! | The recipe this vertex represents. Carries recipe name (as `id`),
displayName, instanceName, options, bundle, dataTables, etc. — reuse
the existing RecipeDescriptor type rather than duplicating fields here. |
| `isSingleton` | Boolean! | True if this recipe declares `org.openrewrite.Singleton` as a precondition,
meaning additional occurrences in the graph appear as REFERENCE edges
pointing back to this vertex. |

---

#### `RecipeInstallationConnection`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#recipeinstallationedge">RecipeInstallationEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `RecipeInstallationEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#recipeinstallation">RecipeInstallation</a>! |  |
| `cursor` | String! |  |
| `requestedBy` | <a href="#user">User</a>! | The user who initiated this installation |
| `user` | <a href="#user">User</a> | The user whose marketplace this installation was made to. If the installation is a
universal or organization installation, this field will be null. |
| `organization` | <a href="#organization">Organization</a> | The organization to which this installation was made. If the installation is a universal
or user installation, this field will be null. |

---

#### `RecipeInstallationError`

**Service:** recipemarketplace | **Implements:** <a href="#recipeinstallation">RecipeInstallation</a>

Installation failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | <a href="#recipebundle">RecipeBundle</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `message` | String! | Human-readable error message. |

---

#### `RecipeInstallationFinished`

**Service:** recipemarketplace | **Implements:** <a href="#recipeinstallation">RecipeInstallation</a>

Installation completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | <a href="#recipebundle">RecipeBundle</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `recipes` | [<a href="#recipedescriptor">RecipeDescriptor</a>!]! | The recipes that were installed. |

---

#### `RecipeInstallationProcessing`

**Service:** recipemarketplace | **Implements:** <a href="#recipeinstallation">RecipeInstallation</a>

Installation is actively loading and resolving the recipe bundle.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | <a href="#recipebundle">RecipeBundle</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `progress` | Float | Progress from 0.0 to 1.0, if available. |

---

#### `RecipeInstallationQueued`

**Service:** recipemarketplace | **Implements:** <a href="#recipeinstallation">RecipeInstallation</a>

Installation is queued and waiting to be processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | <a href="#recipebundle">RecipeBundle</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `RecipeMarketplace`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `categories` | (first: Int = 100, after: String, where: <a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>, orderBy: [<a href="#recipecategoryorderbyinput">RecipeCategoryOrderByInput</a>!]): <a href="#recipecategoryconnection">RecipeCategoryConnection</a>! |  |
| `recipes` | (first: Int = 100, after: String, where: <a href="#recipewhereinput">RecipeWhereInput</a>, orderBy: [<a href="#recipeorderbyinput">RecipeOrderByInput</a>!]): <a href="#recipedescriptorconnection">RecipeDescriptorConnection</a>! |  |
| `installations` | (first: Int = 50, after: String, where: <a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a>, orderBy: [<a href="#recipeinstallationorderbyinput">RecipeInstallationOrderByInput</a>!]): <a href="#recipeinstallationconnection">RecipeInstallationConnection</a>! |  |

---

#### `RecipeOptionValue`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | <a href="#object">Object</a>! |  |

---

#### `RecipeOptionsMessage`

**Service:** moddy | **Implements:** <a href="#message">Message</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `options` | [<a href="#option">Option</a>!]! |  |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `RecipeRunFileChange`

**Service:** changesetreader | **Implements:** <a href="#filechange">FileChange</a>

| Field | Type | Description |
|-------|------|-------------|
| `path` | <a href="#path">Path</a>! |  |
| `beforeSourcePath` | <a href="#path">Path</a> |  |
| `afterSourcePath` | <a href="#path">Path</a> |  |
| `diff` | (markupLevel: <a href="#markuplevel">MarkupLevel</a> = ERROR, showWhitespaceOnlyChanges: Boolean = true): <a href="#patch">Patch</a> |  |
| `recipesThatMadeChanges` | [[<a href="#recipedescriptor">RecipeDescriptor</a>!]!]! | Recipe chains that contributed changes to this file. Each inner list is one
mutation event's call stack, ordered root composite first to leaf recipe last
(the leaf is the narrowest recipe that actually performed the change). |

---

#### `RecipeRunMessage`

**Service:** moddy | **Implements:** <a href="#message">Message</a>

Long-running recipe execution started by the LLM. Carries a typed
progress envelope while IN_PROGRESS — clients should read `progress`
rather than poking at a free-form payload. When the run reaches a
terminal state, `recipeRun` resolves via federation.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `recipeRun` | <a href="#organizationreciperun">OrganizationRecipeRun</a> |  |
| `progress` | <a href="#reciperunprogress">RecipeRunProgress</a> | Typed progress snapshot while the run is IN_PROGRESS. |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `RecipeRunProgress`

**Service:** moddy

Typed progress envelope for an in-flight recipe run.

| Field | Type | Description |
|-------|------|-------------|
| `recipeRunId` | ID |  |
| `reposQueued` | Int |  |
| `reposRunning` | Int |  |
| `reposFinished` | Int |  |
| `reposTotal` | Int |  |

---

#### `RecipeRunTotals`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `timeSavings` | <a href="#duration">Duration</a> |  |
| `filesSearched` | Int! |  |
| `filesChanged` | Int! |  |
| `filesWithResults` | Int! |  |
| `totalMarkers` | Int! |  |
| `repositoriesWithResults` | Int! |  |
| `repositoriesSuccessful` | Int! |  |
| `repositoriesWithNoChanges` | Int! |  |
| `repositoriesWithErrors` | Int! |  |
| `repositoriesInProgress` | Int! |  |

---

#### `RecipeSearchMessage`

**Service:** moddy | **Implements:** <a href="#message">Message</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `searchResults` | [<a href="#recipedescriptor">RecipeDescriptor</a>!]! |  |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `RecipeUninstallation`

**Service:** recipemarketplace

Result of an uninstall operation.

| Field | Type | Description |
|-------|------|-------------|
| `removedCount` | Int! | The number of recipes that were removed. |

---

#### `ReindexResult`

**Service:** changelogwriter

| Field | Type | Description |
|-------|------|-------------|
| `resetCount` | Int! | Number of repository cursors that were reset. |
| `since` | <a href="#datetime">DateTime</a>! | The timestamp cursors were rewound to. |

---

#### `Repository`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `path` | String! |  |
| `branch` | String! |  |
| `changeset` | String |  |
| `lstArtifact` | <a href="#lstartifact">LstArtifact</a>! |  |

---

#### `RepositoryAuthorization`

**Service:** corechangeset

Authorization status for accessing repository content.
Resolved by the changeset reader using a batch check against the authorization service.

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin (e.g., github.com). |
| `isAuthorized` | Boolean! | Whether the user has a valid OAuth token for this origin. |

---

#### `RepositoryBatchChange`

**Service:** changesetreader | **Implements:** <a href="#repositorychangeset">RepositoryChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |

---

#### `RepositoryChangesetConnection`

**Service:** corechangeset

Paginated connection for repository changesets.

`completed` indicates how many repositories have finished processing:
- For BatchChange: completed always equals count (all repositories are pre-processed).
- For OrganizationRecipeRun: completed counts repository runs in a terminal state
  (regardless of success/failure), excluding canceled runs. A canceled run shows
  the completion status reached prior to cancellation.

Sync totals (`syncPending`, `synced`, `syncFailed`, `syncCanceled`, `syncSkipped`)
track repository sync progress during the SYNCING phase. Their sum equals `count`.

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#repositorychangesetedge">RepositoryChangesetEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `completed` | Int! |  |
| `count` | Int! |  |
| `syncPending` | Int! | Repositories not yet synced. |
| `synced` | Int! | Repositories successfully synced. |
| `syncFailed` | Int! | Repositories that failed to sync. |
| `syncCanceled` | Int! | Repositories whose sync was canceled before completion. |
| `syncSkipped` | Int! | Repositories the CLI skipped during sync (typically: no LST available). |

---

#### `RepositoryChangesetEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#repositorychangeset">RepositoryChangeset</a>! |  |
| `cursor` | String! |  |

---

#### `RepositoryCommitCanceled`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommit">RepositoryCommit</a>

Repository commit was canceled.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitConnection`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#repositorycommitedge">RepositoryCommitEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |
| `completedCount` | Int! | Count of repository commits that have reached a terminal state
(succeeded, failed, canceled, or no changes). Pair with `count`
to show progress: "Completed X / Y". |

---

#### `RepositoryCommitEdge`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#repositorycommit">RepositoryCommit</a>! |  |
| `cursor` | String! |  |

---

#### `RepositoryCommitFailed`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommit">RepositoryCommit</a>

Repository commit failed with an error.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `errorMessage` | String! | Human-readable error message. |
| `retryCount` | Int | Number of retry attempts made. |
| `options` | <a href="#commitoptions">CommitOptions</a>! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitNoChanges`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommit">RepositoryCommit</a>

Repository commit completed but yielded no changes.
Generally occurs when applying a patch does not produce any changes to commit.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitQueued`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommit">RepositoryCommit</a>

Repository commit is queued and waiting to be processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `rateLimitReset` | <a href="#datetime">DateTime</a> | Time when rate limit expires (if rate limited). |
| `options` | <a href="#commitoptions">CommitOptions</a>! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitRunning`

**Service:** changesetcommitter | **Implements:** <a href="#repositorycommit">RepositoryCommit</a>

Repository commit is actively being processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `options` | <a href="#commitoptions">CommitOptions</a>! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryConnection`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#repositoryedge">RepositoryEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `RepositoryEdge`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#repository">Repository</a>! |  |
| `cursor` | String! |  |

---

#### `RepositoryRecipeRunCanceled`

**Service:** changesetreader | **Implements:** <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `syncStatus` | <a href="#repositorysyncstatus">RepositorySyncStatus</a> |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |

---

#### `RepositoryRecipeRunConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#repositoryreciperunedge">RepositoryRecipeRunEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `RepositoryRecipeRunEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#repositoryreciperun">RepositoryRecipeRun</a>! |  |
| `cursor` | String! |  |

---

#### `RepositoryRecipeRunError`

**Service:** changesetreader | **Implements:** <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `syncStatus` | <a href="#repositorysyncstatus">RepositorySyncStatus</a> |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a> |  |
| `errorReason` | <a href="#repositoryerrorreason">RepositoryErrorReason</a> |  |
| `message` | String |  |

---

#### `RepositoryRecipeRunFinished`

**Service:** changesetreader | **Implements:** <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `syncStatus` | <a href="#repositorysyncstatus">RepositorySyncStatus</a> |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |
| `finishedAt` | <a href="#datetime">DateTime</a> |  |
| `timeSavings` | <a href="#duration">Duration</a> |  |

---

#### `RepositoryRecipeRunNoLst`

**Service:** changesetreader | **Implements:** <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `syncStatus` | <a href="#repositorysyncstatus">RepositorySyncStatus</a> |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |

---

#### `RepositoryRecipeRunQueued`

**Service:** changesetreader | **Implements:** <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `syncStatus` | <a href="#repositorysyncstatus">RepositorySyncStatus</a> |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |
| `queuedAt` | <a href="#datetime">DateTime</a> |  |

---

#### `RepositoryRecipeRunRunning`

**Service:** changesetreader | **Implements:** <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `syncStatus` | <a href="#repositorysyncstatus">RepositorySyncStatus</a> |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a> |  |

---

#### `ReviewStatus`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `approvedBy` | [String!] |  |
| `reviewDecision` | <a href="#reviewdecision">ReviewDecision</a>! |  |

---

#### `RevokeTokenResult`

**Service:** authz

Result of revoking an SCM OAuth token.

| Field | Type | Description |
|-------|------|-------------|
| `success` | Boolean! | True if the token was revoked (or didn't exist). |
| `error` | String | Error message if revocation failed. |

---

#### `S3Configuration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | <a href="#httptoolconnectivity">HttpToolConnectivity</a>! |  |
| `region` | String |  |
| `endpointUrl` | String |  |

---

#### `ScmTokenInfo`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `created` | <a href="#datetime">DateTime</a>! |  |
| `expiresAt` | <a href="#datetime">DateTime</a> |  |

---

#### `SearchResult`

**Service:** corechangeset | **Implements:** <a href="#marker">Marker</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `type` | String! |  |
| `description` | String |  |

---

#### `SendMessageResult`

**Service:** moddy

Handle returned by `createConversation` / `sendMessage`. Clients should
poll `conversation.messages(after: initialCursor)` using
`turnState.recommendedPollIntervalMs` as the cadence hint.

| Field | Type | Description |
|-------|------|-------------|
| `conversation` | <a href="#conversation">Conversation</a>! |  |
| `initialCursor` | String! |  |
| `turnState` | <a href="#conversationturnstate">ConversationTurnState</a>! |  |

---

#### `TextMessage`

**Service:** moddy | **Implements:** <a href="#message">Message</a>

A text message from either the human user or the chatbot.
Check the `user` field to distinguish sender.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `content` | <a href="#markdown">Markdown</a>! |  |
| `truncated` | Boolean! | True when the LLM response was cut off by the token limit. |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `ToolInfo`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `version` | String |  |
| `arguments` | String |  |

---

#### `UiConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `moreHelp` | [<a href="#morehelplink">MoreHelpLink</a>!] |  |
| `loginText` | String |  |
| `loginLinks` | [<a href="#morehelplink">MoreHelpLink</a>!] |  |
| `cliDownloadInstructions` | <a href="#clidownloadinstructionlink">CliDownloadInstructionLink</a> |  |

---

#### `User`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `username` | String |  |
| `role` | <a href="#userrole">UserRole</a> |  |
| `lastActive` | <a href="#datetime">DateTime</a> |  |
| `tokens` | (first: Int = 100, after: String, where: <a href="#accesstokenwhereinput">AccessTokenWhereInput</a>, orderBy: [<a href="#accesstokenorderbyinput">AccessTokenOrderByInput</a>!]): <a href="#accesstokenconnection">AccessTokenConnection</a>! |  |
| `email` | String! |  |
| `moddy` | <a href="#moddy">Moddy</a>! |  |

---

#### `UserConnection`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#usersedge">UsersEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `UsersEdge`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#user">User</a>! |  |
| `cursor` | String! |  |

---

#### `VisualizationAvailable`

**Service:** changesetreader | **Implements:** <a href="#visualization">Visualization</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | <a href="#visualizationdescriptor">VisualizationDescriptor</a>! |  |
| `changesetId` | ID! | The changeset (recipe run or batch change) this visualization is available for. |

---

#### `VisualizationConnection`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#visualizationedge">VisualizationEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `VisualizationDescriptor`

**Service:** changesetvisualizer

| Field | Type | Description |
|-------|------|-------------|
| `options` | [<a href="#visualizationoption">VisualizationOption</a>!]! |  |
| `name` | String! |  |
| `displayName` | <a href="#markdown">Markdown</a>! |  |
| `description` | <a href="#markdown">Markdown</a>! |  |
| `image` | <a href="#base64">Base64</a>! |  |

---

#### `VisualizationEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#visualization">Visualization</a>! |  |
| `cursor` | String! |  |

---

#### `VisualizationError`

**Service:** changesetreader | **Implements:** <a href="#visualization">Visualization</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | <a href="#visualizationdescriptor">VisualizationDescriptor</a>! |  |
| `changesetId` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `message` | String! |  |
| `repositories` | (first: Int = 100, after: String): <a href="#visualizationrepositoryconnection">VisualizationRepositoryConnection</a>! |  |

---

#### `VisualizationFinished`

**Service:** changesetreader | **Implements:** <a href="#visualization">Visualization</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | <a href="#visualizationdescriptor">VisualizationDescriptor</a>! |  |
| `changesetId` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `duration` | <a href="#duration">Duration</a> |  |
| `output` | <a href="#visualizationoutput">VisualizationOutput</a>! |  |
| `repositories` | (first: Int = 100, after: String): <a href="#visualizationrepositoryconnection">VisualizationRepositoryConnection</a>! |  |

---

#### `VisualizationImageOutput`

**Service:** changesetreader | **Implements:** <a href="#visualizationoutput">VisualizationOutput</a>

| Field | Type | Description |
|-------|------|-------------|
| `format` | <a href="#imageformat">ImageFormat</a>! |  |
| `data` | <a href="#base64">Base64</a>! |  |

---

#### `VisualizationOption`

**Service:** changesetvisualizer

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | <a href="#object">Object</a> |  |
| `type` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `example` | String |  |
| `valid` | [String] |  |
| `required` | Boolean! |  |

---

#### `VisualizationPlotlyOutput`

**Service:** changesetreader | **Implements:** <a href="#visualizationoutput">VisualizationOutput</a>

| Field | Type | Description |
|-------|------|-------------|
| `data` | <a href="#base64">Base64</a>! | Plotly JSON data (MIME type: application/vnd.plotly.v1+json) |

---

#### `VisualizationProcessing`

**Service:** changesetreader | **Implements:** <a href="#visualization">Visualization</a>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | <a href="#visualizationdescriptor">VisualizationDescriptor</a>! |  |
| `changesetId` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `repositories` | (first: Int = 100, after: String): <a href="#visualizationrepositoryconnection">VisualizationRepositoryConnection</a>! |  |

---

#### `VisualizationRepository`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `state` | <a href="#visualizationrepositoryrunstate">VisualizationRepositoryRunState</a>! |  |
| `stateMessage` | String |  |
| `repository` | <a href="#repository">Repository</a>! |  |

---

#### `VisualizationRepositoryConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [<a href="#visualizationrepositoryedge">VisualizationRepositoryEdge</a>!]! |  |
| `pageInfo` | <a href="#pageinfo">PageInfo</a>! |  |
| `count` | Int! |  |

---

#### `VisualizationRepositoryEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | <a href="#visualizationrepository">VisualizationRepository</a>! |  |
| `cursor` | String! |  |

---

#### `YamlRecipeBundle`

**Service:** changesetreader | **Implements:** <a href="#recipebundle">RecipeBundle</a>

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | <a href="#base64">Base64</a>! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |
| `primary` | <a href="#recipedescriptor">RecipeDescriptor</a> | The primary recipe in this bundle. When specified, only this recipe
is shown in marketplace categories, hiding other recipes from this bundle. |

---

### Interfaces

#### `AuditLogsDownload`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |

---

#### `BulkPullRequestAction`

**Service:** changelogreader

A bulk pull request action (approve, merge, close) that operates on potentially
multiple repositories. Use `__typename` to determine the current state.

Each `BulkPullRequestAction` contains individual `PullRequestAction` entries
representing the state of each repository targeted by the bulk operation.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | <a href="#pullrequestactiontype">PullRequestActionType</a>! |  |
| `user` | <a href="#user">User</a>! |  |
| `results` | (first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>! |  |

---

#### `ChangelogEntry`

**Service:** changelogreader

A single entry in the changelog — either a commit or a pull request.
Use `__typename` to distinguish between `ChangelogCommit` and `ChangelogPullRequest`.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! | Commit message (for commits) or PR title (for pull requests). |
| `author` | <a href="#changeparticipant">ChangeParticipant</a>! | The author of the commit or PR. |
| `repository` | <a href="#repository">Repository</a>! | The repository this entry belongs to. |
| `url` | String! | URL to the commit or PR in the VCS provider. |
| `branch` | String! | The target branch (for PRs) or the branch committed to (for commits). |
| `updatedAt` | <a href="#datetime">DateTime</a>! | When this entry was last updated in the VCS provider. |
| `createdAt` | <a href="#datetime">DateTime</a>! | When this entry was created in the VCS provider. |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> | If this activity was originated by Moderne, the changeset it belongs to. |
| `buildState` | <a href="#buildstate">BuildState</a> | CI status (e.g. from GitHub Actions, GitLab pipelines).
Null if no CI is configured or status has not been fetched yet. |
| `diffstat` | <a href="#diffstat">DiffStat</a>! | Lines added and removed. |

---

#### `CommitOptions`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |

---

#### `DataTable`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | <a href="#datatabledescriptor">DataTableDescriptor</a>! |  |
| `instanceName` | String! | A human-readable name for this data table instance, describing what it contains.
For example, "Method calls matching \`java.util.List add(..)\`".
Defaults to the data table's display name when not explicitly set. |
| `group` | String | The group identifying this data table bucket. For community tables this is
the group name (e.g., "architecture"). Null for ungrouped/private tables. |

---

#### `DevCenterRun`

**Service:** changesetreader

A DevCenter run represents the execution of a DevCenter recipe.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! | When this DevCenter run started. |
| `changeset` | <a href="#organizationchangeset">OrganizationChangeset</a> | The underlying recipe run changeset. |

---

#### `FileChange`

**Service:** corechangeset

A change to a single file within a repository changeset.

| Field | Type | Description |
|-------|------|-------------|
| `path` | <a href="#path">Path</a>! | Path to the file relative to repository root. |
| `beforeSourcePath` | <a href="#path">Path</a> | The source path before the change (from the diff's `--- a/...` line).
Null for newly created files. |
| `afterSourcePath` | <a href="#path">Path</a> | The source path after the change (from the diff's `+++ b/...` line).
Null for deleted files. |
| `diff` | (markupLevel: <a href="#markuplevel">MarkupLevel</a> = ERROR, showWhitespaceOnlyChanges: Boolean = true): <a href="#patch">Patch</a> | Get the diff for this file. |

---

#### `Marker`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |

---

#### `Message`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! |  |
| `state` | <a href="#messagestate">MessageState</a>! |  |
| `lastUpdatedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `OrganizationCommit`

**Service:** changesetcommitter

An organization-level commit operation represents applying changes across multiple
repositories. Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | <a href="#user">User</a>! | The user who initiated the commit. |
| `options` | <a href="#commitoptions">CommitOptions</a>! | The commit options (branch, PR settings, etc.). |
| `message` | String! | The commit message. |
| `extendedMessage` | <a href="#base64">Base64</a> | Extended commit message (Base64 encoded). |
| `repositories` | (first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>! | Paginated results per repository. |

---

#### `PullRequestAction`

**Service:** changelogreader

The state of an individual repository within a `BulkPullRequestAction`.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | <a href="#pullrequestref">PullRequestRef</a>! |  |

---

#### `RecipeBundle`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int | Number of top-level recipes contributed by this bundle's package.
Null when the bundle has not yet been resolved into the marketplace
(e.g. an installation still in progress). |

---

#### `RecipeDetail`

**Service:** recipemarketplace

State machine for recipe detail resolution. Querying the `detail` field on a
RecipeDescriptor triggers background resolution of the full recipe bundle.
Poll until `__typename` is `RecipeDetailFinished`.

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `RecipeInstallation`

**Service:** recipemarketplace

Common fields for all recipe installation states.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | <a href="#recipebundle">RecipeBundle</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |

---

#### `RepositoryChangeset`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! | Authorization status for accessing this repository's content.
Check this before accessing file results. |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! | File-level changes within this repository. |

---

#### `RepositoryCommit`

**Service:** changesetcommitter

A commit result for a single repository within an organization-level commit operation.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |

---

#### `RepositoryCommitSucceeded`

**Service:** changesetcommitter

Repository commit completed successfully.
Use `__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `startedAt` | <a href="#datetime">DateTime</a>! |  |
| `finishedAt` | <a href="#datetime">DateTime</a>! |  |
| `resultLink` | String | Link to the commit or pull request result. |

---

#### `RepositoryRecipeRun`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repository">Repository</a>! |  |
| `authorization` | <a href="#repositoryauthorization">RepositoryAuthorization</a>! |  |
| `syncStatus` | <a href="#repositorysyncstatus">RepositorySyncStatus</a> |  |
| `results` | (first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>! |  |

---

#### `ScmConnection`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [<a href="#scmtokeninfo">ScmTokenInfo</a>!]! |  |

---

#### `Visualization`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | <a href="#visualizationdescriptor">VisualizationDescriptor</a>! |  |

---

#### `VisualizationOutput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `data` | <a href="#base64">Base64</a>! |  |

---

### Enums

#### `AccessTokenOrderByField`

**Service:** authz

* `CREATED`
* `EXPIRES_AT`

---

#### `AuditActionType`

**Service:** auditreader

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`

---

#### `AuditLogExportFormat`

**Service:** auditreader

* `CEF`
* `CSV`

---

#### `AuditLogOrderByField`

**Service:** auditreader

* `TIMESTAMP`
* `USER_ID`
* `TARGET`
* `ACTION`

---

#### `AuditLogsDownloadOrderByField`

**Service:** auditreader

* `STARTED_AT`

---

#### `AuditOutcome`

**Service:** auditreader

* `SUCCESS`
* `FAILURE`

---

#### `BuildState`

**Service:** changelogreader

* `PENDING`
* `IN_PROGRESS`
* `FAILED`
* `SKIPPED`
* `SUCCESSFUL`
* `NOT_REQUIRED`

---

#### `BulkPullRequestActionOrderByField`

**Service:** changelogreader

* `CREATED_AT`
* `STARTED_AT`
* `FINISHED_AT`

---

#### `BulkPullRequestActionState`

**Service:** changelogreader

The lifecycle state of a `BulkPullRequestAction`. Matches the `__typename`
of the concrete state types (Queued, Running, Finished, Canceled, Error).

* `QUEUED`
* `RUNNING`
* `FINISHED`
* `CANCELED`
* `ERROR`

---

#### `ChangelogEntryOrderByField`

**Service:** changelogreader

* `UPDATED_AT`
* `CREATED_AT`
* `TITLE`
* `REPOSITORY_PATH`

---

#### `ChangelogEntryType`

**Service:** changelogreader

Discriminator for filtering by entry type.

* `COMMIT`
* `PULL_REQUEST`

---

#### `ChangelogParticipantOrderByField`

**Service:** changelogreader

* `USERNAME`
* `EMAIL`
* `NAME`

---

#### `CommitOption`

**Service:** changesetcommitter

* `DIRECT`
* `BRANCH`
* `FORK`
* `PULL_REQUEST`
* `FORK_AND_PULL_REQUEST`
* `NONE`

---

#### `ConnectorOrderByField`

**Service:** gateway

* `NICKNAME`
* `VERSION`

---

#### `ConnectorToolType`

**Service:** gateway

* `GITHUB`
* `GITLAB`
* `BITBUCKET`
* `BITBUCKET_CLOUD`
* `AZURE_DEVOPS`
* `ARTIFACTORY`
* `MAVEN`
* `PYPI`
* `NPM`
* `NUGET`
* `HTTP_TOOL`
* `ORGANIZATION`
* `LLM`
* `S3`

---

#### `ContributorRole`

**Service:** changelogreader

The participant's role for filtering.

* `AUTHOR`
* `ASSIGNEE`
* `CLOSED_BY`
* `REVIEWER`

---

#### `ConversationOrderByField`

**Service:** moddy

* `STARTED_AT`
* `LAST_UPDATED_AT`

---

#### `ConversationPhase`

**Service:** moddy

* `IDLE`
* `AWAITING_LLM`
* `STREAMING_TEXT`
* `TOOL_RUNNING`
* `ERRORED`

---

#### `DataTableFormat`

**Service:** corechangeset

* `CSV`
* `XLSX`

---

#### `DataTableOrderByField`

**Service:** corechangeset

* `DATA_TABLE`
* `STARTED_AT`

---

#### `DevCenterAggregation`

**Service:** changesetreader

How DevCenter card results are aggregated across repositories.

* `PER_REPOSITORY`
* `PER_OCCURRENCE`

---

#### `DevCenterRunOrderByField`

**Service:** changesetreader

* `STARTED_AT`
* `STATE`

---

#### `DevCenterRunState`

**Service:** changesetreader

Execution state of a DevCenter run.

* `RUNNING`
* `FINISHED`
* `CANCELED`
* `ERROR`

---

#### `FileChangeOrderByField`

**Service:** corechangeset

* `PATH`

---

#### `ImageFormat`

**Service:** changesetreader

* `SVG`
* `GIF`
* `JPEG`
* `PNG`

---

#### `LlmProvider`

**Service:** gateway

* `ANTHROPIC`
* `GEMINI`
* `MISTRAL`
* `OPEN_AI`

---

#### `MarkupLevel`

**Service:** corechangeset

* `DEBUG`
* `INFO`
* `WARNING`
* `ERROR`
* `NONE`

---

#### `MergeMethod`

**Service:** changelogreader

* `MERGE`
* `SQUASH`
* `REBASE`

---

#### `Mergeable`

**Service:** changesetcommitter

* `MERGEABLE`
* `BLOCKED`
* `UNKNOWN`

---

#### `MessageState`

**Service:** moddy

* `IN_PROGRESS`
* `COMPLETED`

---

#### `OrganizationChangesetOrderByField`

**Service:** corechangeset

* `CREATED_AT`
* `TYPE`
* `USER`

---

#### `OrganizationChangesetType`

**Service:** corechangeset

* `RECIPE_RUN`
* `BATCH_CHANGE`

---

#### `OrganizationCommitOrderByField`

**Service:** changesetcommitter

* `STARTED_AT`

---

#### `OrganizationOrderByField`

**Service:** organization

* `NAME`

---

#### `OrganizationRecipeRunOrderByField`

**Service:** changesetreader

* `STARTED_AT`
* `ENDED_AT`
* `STATE`
* `USER`

---

#### `OrganizationRecipeRunState`

**Service:** changesetreader

* `QUEUED`
* `SYNCING`
* `RUNNING`
* `FINISHED`
* `CANCELED`
* `ERROR`

---

#### `ProfilingEvent`

**Service:** gateway

The primary event the Pyroscope agent samples on. async-profiler can only
collect one of these at a time as the primary event; alloc and lock
sampling run on separate channels and are always on.

* `CPU`
* `WALL`

---

#### `PullRequestActionOrderByField`

**Service:** changelogreader

* `REPOSITORY_PATH`
* `STATE`
* `STARTED_AT`

---

#### `PullRequestActionState`

**Service:** changelogreader

* `QUEUED`
* `IN_PROGRESS`
* `SUCCESSFUL`
* `FAILED`
* `CANCELED`

---

#### `PullRequestActionType`

**Service:** changelogreader

* `APPROVE`
* `MERGE`
* `CLOSE`

---

#### `PullRequestState`

**Service:** changelogreader

* `OPEN`
* `DRAFT`
* `CLOSED`
* `MERGED`

---

#### `RecipeBundleOrderByField`

**Service:** recipemarketplace

* `PACKAGE_NAME`
* `VERSION`
* `REQUESTED_VERSION`
* `ECOSYSTEM`

---

#### `RecipeCategoryOrderByField`

**Service:** recipemarketplace

* `DISPLAY_NAME`
* `RECIPE_COUNT`

---

#### `RecipeEcosystem`

**Service:** recipemarketplace

* `Maven`
* `NPM`
* `YAML`
* `Pip`
* `Nuget`
* `Go`

---

#### `RecipeGraphEdgeType`

**Service:** recipemarketplace

* `RECIPE`
* `PRECONDITION`
* `REFERENCE`

---

#### `RecipeInstallationOrderByField`

**Service:** recipemarketplace

* `STARTED_AT`
* `STATUS`

---

#### `RecipeInstallationStatus`

**Service:** recipemarketplace

* `QUEUED`
* `PROCESSING`
* `FINISHED`
* `ERROR`

---

#### `RecipeOrderByField`

**Service:** recipemarketplace

* `ID`
* `DISPLAY_NAME`
* `RECIPE_COUNT`
* `RELEVANCE`

---

#### `RecipeRunPriority`

**Service:** changesetreader

Priority level for recipe runs.
HIGH priority runs target small organizations (≤100 repositories).
LOW priority runs target large organizations (>100 repositories).

* `HIGH`
* `LOW`

---

#### `RepositoryChangesetOrderByField`

**Service:** corechangeset

* `PATH`
* `ORIGIN`
* `FILES_CHANGED`
* `SYNC_STATUS`

---

#### `RepositoryChangesetState`

**Service:** changesetcommitter

Result state of a repository within a changeset.

* `QUEUED`
* `RUNNING`
* `SUCCESS`
* `ERROR`
* `NO_LST`
* `CANCELED`

---

#### `RepositoryCommitOrderByField`

**Service:** changesetcommitter

* `STARTED_AT`

---

#### `RepositoryErrorReason`

**Service:** changesetreader

* `FAILED_LOAD_AST`
* `FAILED_LOAD_RECIPE`
* `TIMEOUT`
* `RECIPE_ERROR`

---

#### `RepositoryOrderByField`

**Service:** organization

* `ORIGIN`
* `PATH`
* `BRANCH`
* `CHANGESET`
* `LST_ARTIFACT_PUBLISHED`

---

#### `RepositoryRecipeRunOrderByField`

**Service:** changesetreader

* `PATH`
* `ORIGIN`
* `STATE`

---

#### `RepositorySyncStatus`

**Service:** corechangeset

Sync status of a repository within a recipe run.
Tracks whether the repository has been synced (cloned + LST downloaded)
before the recipe execution phase begins.

`SKIPPED` indicates the CLI elected not to sync the repository — typically
because there is no LST available to fetch — and is distinct from `FAILED`,
which indicates an actual error during the sync attempt. `CANCELED` is set
when sync was interrupted (e.g., the run was canceled before the repository's
sync completed).

* `PENDING`
* `SYNCED`
* `FAILED`
* `CANCELED`
* `SKIPPED`

---

#### `ReviewDecision`

**Service:** changelogreader

* `APPROVED`
* `CHANGES_REQUESTED`
* `REVIEW_REQUIRED`
* `REVIEW_NOT_REQUIRED`
* `UNKNOWN`

---

#### `ScmType`

**Service:** authz

* `GITHUB`
* `BITBUCKET`
* `BITBUCKET_CLOUD`
* `GITLAB`
* `AZURE_DEVOPS`

---

#### `SortOrder`

**Service:** coregraphql

* `ASC`
* `DESC`

---

#### `UserOrderByField`

**Service:** authz

* `EMAIL`
* `USERNAME`
* `ROLE`
* `LAST_ACTIVE`

---

#### `UserRole`

**Service:** authz

* `ADMIN`
* `USER`

---

#### `VisualizationOrderByField`

**Service:** corechangeset

* `VISUALIZATION`
* `STARTED_AT`

---

#### `VisualizationRepositoryRunState`

**Service:** changesetreader

* `QUEUED`
* `PROCESSING`
* `FINISHED`
* `FINISHED_EMPTY`
* `NO_LST`
* `ERROR`

---

### Input types

#### `AccessTokenOrderByInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#accesstokenorderbyfield">AccessTokenOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `AccessTokenWhereInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `description` | <a href="#stringfilter">StringFilter</a> |  |
| `created` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `expiresAt` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `_and` | [<a href="#accesstokenwhereinput">AccessTokenWhereInput</a>!] |  |
| `_or` | [<a href="#accesstokenwhereinput">AccessTokenWhereInput</a>!] |  |
| `_not` | <a href="#accesstokenwhereinput">AccessTokenWhereInput</a> |  |

---

#### `AuditActionTypeFilter`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#auditactiontype">AuditActionType</a> |  |
| `_neq` | <a href="#auditactiontype">AuditActionType</a> |  |
| `_in` | [<a href="#auditactiontype">AuditActionType</a>!] |  |
| `_nin` | [<a href="#auditactiontype">AuditActionType</a>!] |  |

---

#### `AuditLogExportFormatFilter`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#auditlogexportformat">AuditLogExportFormat</a> |  |
| `_neq` | <a href="#auditlogexportformat">AuditLogExportFormat</a> |  |
| `_in` | [<a href="#auditlogexportformat">AuditLogExportFormat</a>!] |  |
| `_nin` | [<a href="#auditlogexportformat">AuditLogExportFormat</a>!] |  |

---

#### `AuditLogOrderByInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#auditlogorderbyfield">AuditLogOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `AuditLogWhereInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `user` | <a href="#userwhereinput">UserWhereInput</a> |  |
| `target` | <a href="#stringfilter">StringFilter</a> |  |
| `action` | <a href="#stringfilter">StringFilter</a> |  |
| `actionType` | <a href="#auditactiontypefilter">AuditActionTypeFilter</a> |  |
| `outcome` | <a href="#auditoutcomefilter">AuditOutcomeFilter</a> |  |
| `description` | <a href="#stringfilter">StringFilter</a> |  |
| `timestamp` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `_and` | [<a href="#auditlogwhereinput">AuditLogWhereInput</a>!] |  |
| `_or` | [<a href="#auditlogwhereinput">AuditLogWhereInput</a>!] |  |
| `_not` | <a href="#auditlogwhereinput">AuditLogWhereInput</a> |  |

---

#### `AuditLogsDownloadOrderByInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#auditlogsdownloadorderbyfield">AuditLogsDownloadOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `AuditLogsDownloadWhereInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `format` | <a href="#auditlogexportformatfilter">AuditLogExportFormatFilter</a> |  |
| `_and` | [<a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>!] |  |
| `_or` | [<a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>!] |  |
| `_not` | <a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a> |  |

---

#### `AuditOutcomeFilter`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#auditoutcome">AuditOutcome</a> |  |
| `_neq` | <a href="#auditoutcome">AuditOutcome</a> |  |

---

#### `BooleanFilter`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | Boolean |  |
| `_neq` | Boolean |  |

---

#### `BuildStateFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#buildstate">BuildState</a> |  |
| `_neq` | <a href="#buildstate">BuildState</a> |  |
| `_in` | [<a href="#buildstate">BuildState</a>!] |  |
| `_nin` | [<a href="#buildstate">BuildState</a>!] |  |

---

#### `BulkPullRequestActionOrderByInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#bulkpullrequestactionorderbyfield">BulkPullRequestActionOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `BulkPullRequestActionStateFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a> |  |
| `_neq` | <a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a> |  |
| `_in` | [<a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a>!] |  |
| `_nin` | [<a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a>!] |  |

---

#### `BulkPullRequestActionWhereInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `actionType` | <a href="#pullrequestactiontypefilter">PullRequestActionTypeFilter</a> |  |
| `state` | <a href="#bulkpullrequestactionstatefilter">BulkPullRequestActionStateFilter</a> |  |
| `startedAt` | <a href="#datetimefilter">DateTimeFilter</a> | Filter by `startedAt`. Matches RUNNING/FINISHED/ERROR/CANCELED states that
have a startedAt value; QUEUED entries (no startedAt) are excluded when a
bound is supplied. |
| `user` | <a href="#userwhereinput">UserWhereInput</a> |  |
| `_and` | [<a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>!] |  |
| `_or` | [<a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>!] |  |
| `_not` | <a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a> |  |

---

#### `ChangelogAuthorWhereInput`

**Service:** changelogreader

Filter by changelog author.

| Field | Type | Description |
|-------|------|-------------|
| `name` | <a href="#stringfilter">StringFilter</a> |  |
| `email` | <a href="#stringfilter">StringFilter</a> |  |
| `username` | <a href="#stringfilter">StringFilter</a> |  |
| `role` | <a href="#contributorrole">ContributorRole</a> | The role of the contributor to filter on. |
| `_and` | [<a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a>!] |  |
| `_or` | [<a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a>!] |  |
| `_not` | <a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a> |  |

---

#### `ChangelogEntryOrderByInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#changelogentryorderbyfield">ChangelogEntryOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `ChangelogEntryTypeFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#changelogentrytype">ChangelogEntryType</a> |  |
| `_neq` | <a href="#changelogentrytype">ChangelogEntryType</a> |  |
| `_in` | [<a href="#changelogentrytype">ChangelogEntryType</a>!] |  |
| `_nin` | [<a href="#changelogentrytype">ChangelogEntryType</a>!] |  |

---

#### `ChangelogEntryWhereInput`

**Service:** changelogreader

Filter input for changelog entries.

| Field | Type | Description |
|-------|------|-------------|
| `entryType` | <a href="#changelogentrytypefilter">ChangelogEntryTypeFilter</a> | Filter by entry type (COMMIT or PULL_REQUEST). |
| `title` | <a href="#stringfilter">StringFilter</a> | Full-text search on title. |
| `author` | <a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a> | Filter by author. |
| `repositoryPath` | <a href="#stringfilter">StringFilter</a> | Filter by repository path. |
| `repositoryOrigin` | <a href="#stringfilter">StringFilter</a> | Filter by repository origin. |
| `updatedAt` | <a href="#datetimefilter">DateTimeFilter</a> | Filter by last updated time. |
| `createdAt` | <a href="#datetimefilter">DateTimeFilter</a> | Filter by creation time. |
| `pullRequestState` | <a href="#pullrequeststatefilter">PullRequestStateFilter</a> | Filter by pull request state (only applies to PRs). |
| `buildState` | <a href="#buildstatefilter">BuildStateFilter</a> | Filter by CI state. |
| `reviewDecision` | <a href="#reviewdecisionfilter">ReviewDecisionFilter</a> | Filter by review decision. |
| `changesetId` | <a href="#stringfilter">StringFilter</a> | Filter by changeset ID. |
| `_and` | [<a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a>!] |  |
| `_or` | [<a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a>!] |  |
| `_not` | <a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a> |  |

---

#### `ChangelogParticipantOrderByInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#changelogparticipantorderbyfield">ChangelogParticipantOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `ChangelogParticipantWhereInput`

**Service:** changelogreader

Filter input for participants.

| Field | Type | Description |
|-------|------|-------------|
| `name` | <a href="#stringfilter">StringFilter</a> |  |
| `email` | <a href="#stringfilter">StringFilter</a> |  |
| `username` | <a href="#stringfilter">StringFilter</a> |  |
| `role` | <a href="#contributorrole">ContributorRole</a> | Filter participants by role. |
| `updatedAt` | <a href="#datetimefilter">DateTimeFilter</a> | Scopes participant aggregation to entries updated within this window.
Defaults to last 30 days if not specified. |
| `_and` | [<a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a>!] |  |
| `_or` | [<a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a>!] |  |
| `_not` | <a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a> |  |

---

#### `CommitInput`

**Service:** changesetcommitter

Input for creating a commit from a changeset.

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | ID | Organization ID for determining available commit options. |
| `changesetId` | ID! | Changeset ID (e.g., recipe run ID, batch changeset ID).
Resolved via federation to an OrganizationChangeset. |
| `repositories` | [<a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>!] | Filter which repositories and files to include.
Evaluated in order - first matching rule wins for each repository.
Put repo-specific rules first, global fallback rules last.
If empty or not provided, all repositories and files in the changeset are included. |
| `branchName` | String | If unset, commit to the branch that the LST was generated from. |
| `message` | String! | Commit message. |
| `extendedMessage` | <a href="#base64">Base64</a> | Extended commit message (Base64 encoded). |
| `gpgKey` | <a href="#gpginput">GpgInput</a> | GPG key for signing commits. |
| `email` | String | Email to author commit with. Verified against your emails (public and private)
that are verified in your SCM provider. If left blank, your first email will be used. |
| `scmAccessTokens` | [<a href="#scmaccesstoken">ScmAccessToken</a>!] | Optional SCM access tokens keyed by origin. When provided, these are used
instead of stored OAuth tokens for the matching origin. |
| `strategy` | <a href="#commitstrategyinput">CommitStrategyInput</a>! | How to deliver the commit. Choose one strategy. |

---

#### `CommitStrategyInput`

**Service:** changesetcommitter

Commit delivery strategy. Choose one option.

| Field | Type | Description |
|-------|------|-------------|
| `direct` | <a href="#directcommitinput">DirectCommitInput</a> | Push directly to the origin remote. |
| `fork` | <a href="#forkcommitinput">ForkCommitInput</a> | Push to a fork of the origin repository. |
| `pullRequest` | <a href="#pullrequestcommitinput">PullRequestCommitInput</a> | Create a pull request from a branch on the origin remote. |
| `forkAndPullRequest` | <a href="#forkandpullrequestcommitinput">ForkAndPullRequestCommitInput</a> | Create a pull request from a branch on a fork. |

---

#### `ConnectorOrderByInput`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#connectororderbyfield">ConnectorOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `ConnectorToolTypeFilter`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#connectortooltype">ConnectorToolType</a> |  |
| `_in` | [<a href="#connectortooltype">ConnectorToolType</a>!] |  |

---

#### `ConnectorWhereInput`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `nickname` | <a href="#stringfilter">StringFilter</a> |  |
| `version` | <a href="#stringfilter">StringFilter</a> |  |
| `toolType` | <a href="#connectortooltypefilter">ConnectorToolTypeFilter</a> |  |
| `_and` | [<a href="#connectorwhereinput">ConnectorWhereInput</a>!] |  |
| `_or` | [<a href="#connectorwhereinput">ConnectorWhereInput</a>!] |  |
| `_not` | <a href="#connectorwhereinput">ConnectorWhereInput</a> |  |

---

#### `ConversationOrderByInput`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#conversationorderbyfield">ConversationOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `ConversationWhereInput`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `user` | <a href="#stringfilter">StringFilter</a> |  |
| `startedAt` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `lastUpdatedAt` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `_and` | [<a href="#conversationwhereinput">ConversationWhereInput</a>!] |  |
| `_or` | [<a href="#conversationwhereinput">ConversationWhereInput</a>!] |  |
| `_not` | <a href="#conversationwhereinput">ConversationWhereInput</a> |  |

---

#### `CreateConversationInput`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `message` | String! |  |
| `organizationId` | ID! |  |

---

#### `CreateUserOrganizationInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! | The name of the organization. |
| `repositories` | [<a href="#repositoryinput">RepositoryInput</a>!] | Repositories to include in the organization. |

---

#### `DataTableFormatFilter`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#datatableformat">DataTableFormat</a> |  |
| `_neq` | <a href="#datatableformat">DataTableFormat</a> |  |
| `_in` | [<a href="#datatableformat">DataTableFormat</a>!] |  |
| `_nin` | [<a href="#datatableformat">DataTableFormat</a>!] |  |

---

#### `DataTableOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#datatableorderbyfield">DataTableOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `DataTableWhereInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `dataTable` | <a href="#stringfilter">StringFilter</a> |  |
| `group` | <a href="#stringfilter">StringFilter</a> |  |
| `format` | <a href="#datatableformatfilter">DataTableFormatFilter</a> |  |
| `_and` | [<a href="#datatablewhereinput">DataTableWhereInput</a>!] |  |
| `_or` | [<a href="#datatablewhereinput">DataTableWhereInput</a>!] |  |
| `_not` | <a href="#datatablewhereinput">DataTableWhereInput</a> |  |

---

#### `DateTimeFilter`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#datetime">DateTime</a> |  |
| `_neq` | <a href="#datetime">DateTime</a> |  |
| `_gt` | <a href="#datetime">DateTime</a> |  |
| `_gte` | <a href="#datetime">DateTime</a> |  |
| `_lt` | <a href="#datetime">DateTime</a> |  |
| `_lte` | <a href="#datetime">DateTime</a> |  |

---

#### `DevCenterRunOrderByInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#devcenterrunorderbyfield">DevCenterRunOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `DevCenterRunStateFilter`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#devcenterrunstate">DevCenterRunState</a> |  |
| `_neq` | <a href="#devcenterrunstate">DevCenterRunState</a> |  |
| `_in` | [<a href="#devcenterrunstate">DevCenterRunState</a>!] |  |
| `_nin` | [<a href="#devcenterrunstate">DevCenterRunState</a>!] |  |

---

#### `DevCenterRunWhereInput`

**Service:** changesetreader

Filter input for DevCenter run queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> | Filter by run ID. Use `where: \{ id: \{ _eq: "run-id" } }` to get a specific run. |
| `state` | <a href="#devcenterrunstatefilter">DevCenterRunStateFilter</a> | Filter by run state. |
| `startedAt` | <a href="#datetimefilter">DateTimeFilter</a> | Filter by start time. |
| `_and` | [<a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>!] | Logical AND - all conditions must match. |
| `_or` | [<a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>!] | Logical OR - at least one condition must match. |
| `_not` | <a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a> | Logical NOT - negates the condition. |

---

#### `DirectCommitInput`

**Service:** changesetcommitter

Direct commit to origin. No additional options required.

| Field | Type | Description |
|-------|------|-------------|
| `_empty` | Boolean | Placeholder field. Direct commits require no additional configuration. |

---

#### `ExchangeAuthorizationCodeInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `authorizationId` | ID! | The authorization ID returned from initiateAuthorization or from NeedsAuthorization. |
| `code` | String! | Authorization code from the OAuth callback. |
| `redirectUri` | String! | The redirect URI used in the authorization request.
Note: This field is deprecated - the server uses the stored redirect URI
from the authorization to ensure an exact match. |

---

#### `FileChangeOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#filechangeorderbyfield">FileChangeOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `FileChangeWhereInput`

**Service:** changesetcommitter

Filter for file changes.

| Field | Type | Description |
|-------|------|-------------|
| `path` | <a href="#pathfilter">PathFilter</a> | Filter by file path using glob patterns. |
| `_and` | [<a href="#filechangewhereinput">FileChangeWhereInput</a>!] | Logical AND - all conditions must match. |
| `_or` | [<a href="#filechangewhereinput">FileChangeWhereInput</a>!] | Logical OR - at least one condition must match. |
| `_not` | <a href="#filechangewhereinput">FileChangeWhereInput</a> | Logical NOT - negates the condition. |

---

#### `ForkAndPullRequestCommitInput`

**Service:** changesetcommitter

Create a pull request from a branch on a fork.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | String | Organization to create the fork in. If unset, creates in user's personal account. |
| `prefixOrganizationName` | Boolean | Prefix the fork name with the origin organization to avoid name collisions. |
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | <a href="#base64">Base64</a> | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `maintainerCanModify` | Boolean | GitHub only: allow maintainers to edit the pull request. |
| `autoMergeMethod` | <a href="#mergemethod">MergeMethod</a> | Auto-merge method after checks pass. Null means no auto-merge.
Best effort - silently ignored if not supported by the repository. |
| `recreateClosedPullRequest` | Boolean | Recreate pull request if it was previously closed. |

---

#### `ForkCommitInput`

**Service:** changesetcommitter

Commit to a fork of the origin repository.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | String | Organization to create the fork in. If unset, creates in user's personal account. |
| `prefixOrganizationName` | Boolean | Prefix the fork name with the origin organization to avoid name collisions.
Example: openrewrite/rewrite -> myuser/openrewrite__rewrite |

---

#### `GoRecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String |  |

---

#### `GpgInput`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `privateKey` | String! |  |
| `publicKey` | String! |  |
| `passphrase` | String |  |

---

#### `IDFilter`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | ID |  |
| `_neq` | ID |  |
| `_in` | [ID!] |  |
| `_nin` | [ID!] |  |

---

#### `InitiateAuthorizationInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin to authorize (e.g., github.com, gitlab.com). |
| `redirectUri` | String! | The redirect URI where the VCS will send the callback.
Must match an allowed redirect URI in the OAuth app configuration. |

---

#### `IntFilter`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | Int |  |
| `_neq` | Int |  |
| `_gt` | Int |  |
| `_gte` | Int |  |
| `_lt` | Int |  |
| `_lte` | Int |  |

---

#### `LstArtifactWhereInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `published` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `available` | <a href="#booleanfilter">BooleanFilter</a> |  |
| `_and` | [<a href="#lstartifactwhereinput">LstArtifactWhereInput</a>!] |  |
| `_or` | [<a href="#lstartifactwhereinput">LstArtifactWhereInput</a>!] |  |
| `_not` | <a href="#lstartifactwhereinput">LstArtifactWhereInput</a> |  |

---

#### `MavenRecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `version` | String! |  |

---

#### `NpmRecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String! |  |

---

#### `NugetRecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String! |  |

---

#### `OrganizationChangesetOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#organizationchangesetorderbyfield">OrganizationChangesetOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `OrganizationChangesetTypeFilter`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#organizationchangesettype">OrganizationChangesetType</a> |  |
| `_neq` | <a href="#organizationchangesettype">OrganizationChangesetType</a> |  |
| `_in` | [<a href="#organizationchangesettype">OrganizationChangesetType</a>!] |  |
| `_nin` | [<a href="#organizationchangesettype">OrganizationChangesetType</a>!] |  |

---

#### `OrganizationChangesetWhereInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `type` | <a href="#organizationchangesettypefilter">OrganizationChangesetTypeFilter</a> |  |
| `createdAt` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `user` | <a href="#stringfilter">StringFilter</a> |  |
| `_and` | [<a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a>!] |  |
| `_or` | [<a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a>!] |  |
| `_not` | <a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a> |  |

---

#### `OrganizationCommitOrderByInput`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#organizationcommitorderbyfield">OrganizationCommitOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `OrganizationCommitWhereInput`

**Service:** changesetcommitter

Filter input for organization-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> | Filter by commit ID. |
| `startedAt` | <a href="#datetimefilter">DateTimeFilter</a> | Filter by when the commit started. |
| `_and` | [<a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>!] | Logical AND - all conditions must match. |
| `_or` | [<a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>!] | Logical OR - at least one condition must match. |
| `_not` | <a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a> | Logical NOT - negates the condition. |

---

#### `OrganizationOrderByInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#organizationorderbyfield">OrganizationOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `OrganizationRecipeRunOrderByInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#organizationreciperunorderbyfield">OrganizationRecipeRunOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `OrganizationRecipeRunStateFilter`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#organizationreciperunstate">OrganizationRecipeRunState</a> |  |
| `_neq` | <a href="#organizationreciperunstate">OrganizationRecipeRunState</a> |  |
| `_in` | [<a href="#organizationreciperunstate">OrganizationRecipeRunState</a>!] |  |
| `_nin` | [<a href="#organizationreciperunstate">OrganizationRecipeRunState</a>!] |  |

---

#### `OrganizationRecipeRunWhereInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `state` | <a href="#organizationreciperunstatefilter">OrganizationRecipeRunStateFilter</a> |  |
| `startedAt` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `user` | <a href="#stringfilter">StringFilter</a> |  |
| `_and` | [<a href="#organizationreciperunwhereinput">OrganizationRecipeRunWhereInput</a>!] |  |
| `_or` | [<a href="#organizationreciperunwhereinput">OrganizationRecipeRunWhereInput</a>!] |  |
| `_not` | <a href="#organizationreciperunwhereinput">OrganizationRecipeRunWhereInput</a> |  |

---

#### `OrganizationWhereInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `name` | <a href="#stringfilter">StringFilter</a> |  |
| `depth` | <a href="#intfilter">IntFilter</a> | Filter by depth in the organization hierarchy.
The root organization ("_root") is depth 0, its direct children are depth 1, etc. |
| `_and` | [<a href="#organizationwhereinput">OrganizationWhereInput</a>!] |  |
| `_or` | [<a href="#organizationwhereinput">OrganizationWhereInput</a>!] |  |
| `_not` | <a href="#organizationwhereinput">OrganizationWhereInput</a> |  |

---

#### `PathFilter`

**Service:** coregraphql

Filter for file paths using glob patterns.

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#path">Path</a> | Exact path match. |
| `_in` | [<a href="#path">Path</a>!] | Match any of the exact paths. |
| `_nin` | [<a href="#path">Path</a>!] | Exclude any of the exact paths. |
| `_glob` | String | Glob pattern match. Examples: **\/*.java, src/main/** |

---

#### `PipRecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String |  |

---

#### `PullRequestActionOrderByInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#pullrequestactionorderbyfield">PullRequestActionOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `PullRequestActionStateFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#pullrequestactionstate">PullRequestActionState</a> |  |
| `_neq` | <a href="#pullrequestactionstate">PullRequestActionState</a> |  |
| `_in` | [<a href="#pullrequestactionstate">PullRequestActionState</a>!] |  |
| `_nin` | [<a href="#pullrequestactionstate">PullRequestActionState</a>!] |  |

---

#### `PullRequestActionTypeFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#pullrequestactiontype">PullRequestActionType</a> |  |
| `_neq` | <a href="#pullrequestactiontype">PullRequestActionType</a> |  |
| `_in` | [<a href="#pullrequestactiontype">PullRequestActionType</a>!] |  |
| `_nin` | [<a href="#pullrequestactiontype">PullRequestActionType</a>!] |  |

---

#### `PullRequestActionWhereInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `state` | <a href="#pullrequestactionstatefilter">PullRequestActionStateFilter</a> |  |
| `_and` | [<a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>!] |  |
| `_or` | [<a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>!] |  |
| `_not` | <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a> |  |

---

#### `PullRequestCommitInput`

**Service:** changesetcommitter

Create a pull request from a branch on the origin remote.

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | <a href="#base64">Base64</a> | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `autoMergeMethod` | <a href="#mergemethod">MergeMethod</a> | Auto-merge method after checks pass. Null means no auto-merge.
Best effort - silently ignored if not supported by the repository. |
| `recreateClosedPullRequest` | Boolean | Recreate pull request if it was previously closed. |

---

#### `PullRequestInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `repository` | <a href="#repositoryinput">RepositoryInput</a>! |  |
| `number` | Int! | Pull request number. |

---

#### `PullRequestSelectionInput`

**Service:** changelogreader

Selects pull requests for a bulk action.

The `where` filter defines a base set of matching PRs. The optional `pullRequests`
modifier can include or exclude specific PRs from that base set.

Examples:
- Filter-only: `\{ where: \{ ... } }` — all matching PRs
- Explicit: `\{ pullRequests: \{ include: [...] } }` — exactly those PRs
- Filter + exclusions: `\{ where: \{ ... }, pullRequests: \{ exclude: [...] } }` — matching minus excluded
- Filter + additions: `\{ where: \{ ... }, pullRequests: \{ include: [...] } }` — matching plus included

| Field | Type | Description |
|-------|------|-------------|
| `where` | <a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a> | Filter for the base set of PRs. Omit to start with an empty set. |
| `pullRequests` | <a href="#pullrequestselectionmodifier">PullRequestSelectionModifier</a> | Modify the base set by including or excluding specific PRs. |

---

#### `PullRequestSelectionModifier`

**Service:** changelogreader

Modifies a PR selection by either including or excluding specific PRs.
Exactly one field must be set.

| Field | Type | Description |
|-------|------|-------------|
| `include` | [<a href="#pullrequestinput">PullRequestInput</a>!] | Add these PRs to the base set. |
| `exclude` | [<a href="#pullrequestinput">PullRequestInput</a>!] | Remove these PRs from the base set. |

---

#### `PullRequestStateFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#pullrequeststate">PullRequestState</a> |  |
| `_neq` | <a href="#pullrequeststate">PullRequestState</a> |  |
| `_in` | [<a href="#pullrequeststate">PullRequestState</a>!] |  |
| `_nin` | [<a href="#pullrequeststate">PullRequestState</a>!] |  |

---

#### `RecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `maven` | <a href="#mavenrecipebundleinput">MavenRecipeBundleInput</a> |  |
| `npm` | <a href="#npmrecipebundleinput">NpmRecipeBundleInput</a> |  |
| `nuget` | <a href="#nugetrecipebundleinput">NugetRecipeBundleInput</a> |  |
| `yaml` | <a href="#yamlrecipebundleinput">YamlRecipeBundleInput</a> |  |
| `pip` | <a href="#piprecipebundleinput">PipRecipeBundleInput</a> |  |
| `go` | <a href="#gorecipebundleinput">GoRecipeBundleInput</a> |  |

---

#### `RecipeBundleOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#recipebundleorderbyfield">RecipeBundleOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RecipeBundleWhereInput`

**Service:** recipemarketplace

Filter input for RecipeBundle queries.

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | <a href="#stringfilter">StringFilter</a> | Filter by package name (e.g., "org.openrewrite:rewrite-java"). |
| `version` | <a href="#stringfilter">StringFilter</a> | Filter by resolved version. |
| `requestedVersion` | <a href="#stringfilter">StringFilter</a> | Filter by requested version (the version requested before resolution). |
| `ecosystem` | <a href="#recipeecosystemfilter">RecipeEcosystemFilter</a> | Filter by ecosystem. |
| `_and` | [<a href="#recipebundlewhereinput">RecipeBundleWhereInput</a>!] |  |
| `_or` | [<a href="#recipebundlewhereinput">RecipeBundleWhereInput</a>!] |  |
| `_not` | <a href="#recipebundlewhereinput">RecipeBundleWhereInput</a> |  |

---

#### `RecipeCategoryOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#recipecategoryorderbyfield">RecipeCategoryOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RecipeCategoryWhereInput`

**Service:** recipemarketplace

Filter input for RecipeCategory queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> | Filter by category ID. |
| `parentId` | <a href="#idfilter">IDFilter</a> | Filter by parent category ID. Use null to find root categories. |
| `displayName` | <a href="#stringfilter">StringFilter</a> | Filter by display name. |
| `_and` | [<a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>!] |  |
| `_or` | [<a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>!] |  |
| `_not` | <a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a> |  |

---

#### `RecipeEcosystemFilter`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#recipeecosystem">RecipeEcosystem</a> |  |
| `_neq` | <a href="#recipeecosystem">RecipeEcosystem</a> |  |
| `_in` | [<a href="#recipeecosystem">RecipeEcosystem</a>!] |  |
| `_nin` | [<a href="#recipeecosystem">RecipeEcosystem</a>!] |  |

---

#### `RecipeInput`

**Service:** recipeworker

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | Fully-qualified recipe ID.
Example: `org.openrewrite.java.search.FindMethods` |
| `options` | [<a href="#recipeoptioninput">RecipeOptionInput</a>!] |  |

---

#### `RecipeInstallationOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#recipeinstallationorderbyfield">RecipeInstallationOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RecipeInstallationStatusFilter`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#recipeinstallationstatus">RecipeInstallationStatus</a> |  |
| `_neq` | <a href="#recipeinstallationstatus">RecipeInstallationStatus</a> |  |
| `_in` | [<a href="#recipeinstallationstatus">RecipeInstallationStatus</a>!] |  |
| `_nin` | [<a href="#recipeinstallationstatus">RecipeInstallationStatus</a>!] |  |

---

#### `RecipeInstallationWhereInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `status` | <a href="#recipeinstallationstatusfilter">RecipeInstallationStatusFilter</a> |  |
| `startedAt` | <a href="#datetimefilter">DateTimeFilter</a> |  |
| `user` | <a href="#userwhereinput">UserWhereInput</a> |  |
| `organization` | <a href="#idfilter">IDFilter</a> |  |
| `bundle` | <a href="#recipebundlewhereinput">RecipeBundleWhereInput</a> | Filter by bundle properties (packageName, ecosystem, version, etc.). |
| `_and` | [<a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a>!] |  |
| `_or` | [<a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a>!] |  |
| `_not` | <a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a> |  |

---

#### `RecipeOptionInput`

**Service:** recipeworker

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! | Option name. Example: `methodPattern` |
| `value` | <a href="#object">Object</a>! | Option value. Example: `java.util.List add(..)` |

---

#### `RecipeOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#recipeorderbyfield">RecipeOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RecipeWhereInput`

**Service:** recipemarketplace

Filter input for Recipe queries.
Use `query` for semantic search, or use field filters for exact matching.

| Field | Type | Description |
|-------|------|-------------|
| `query` | String | Semantic search query - searches recipe names, descriptions, and content. |
| `id` | <a href="#stringfilter">StringFilter</a> | Filter by recipe ID (fully qualified recipe name). |
| `displayName` | <a href="#stringfilter">StringFilter</a> | Filter by display name. |
| `_and` | [<a href="#recipewhereinput">RecipeWhereInput</a>!] |  |
| `_or` | [<a href="#recipewhereinput">RecipeWhereInput</a>!] |  |
| `_not` | <a href="#recipewhereinput">RecipeWhereInput</a> |  |

---

#### `RepositoryChangesetOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#repositorychangesetorderbyfield">RepositoryChangesetOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RepositoryChangesetStateFilter`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#repositorychangesetstate">RepositoryChangesetState</a> |  |
| `_neq` | <a href="#repositorychangesetstate">RepositoryChangesetState</a> |  |
| `_in` | [<a href="#repositorychangesetstate">RepositoryChangesetState</a>!] |  |
| `_nin` | [<a href="#repositorychangesetstate">RepositoryChangesetState</a>!] |  |

---

#### `RepositoryChangesetWhereInput`

**Service:** changesetcommitter

Filter for repository changesets.

| Field | Type | Description |
|-------|------|-------------|
| `path` | <a href="#stringfilter">StringFilter</a> | Filter by repository path. |
| `origin` | <a href="#stringfilter">StringFilter</a> | Filter by repository origin. |
| `branch` | <a href="#stringfilter">StringFilter</a> | Filter by repository branch. |
| `files` | <a href="#filechangewhereinput">FileChangeWhereInput</a> | Filter files within matching repositories.
Useful for filtering to specific file patterns (e.g., all build.gradle.kts files). |
| `onlyWithResults` | Boolean | Only return repositories with results (filesWithResults > 0). |
| `state` | <a href="#repositorychangesetstatefilter">RepositoryChangesetStateFilter</a> | Filter by repository result state. |
| `_and` | [<a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>!] | Logical AND - all conditions must match. |
| `_or` | [<a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>!] | Logical OR - at least one condition must match. |
| `_not` | <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a> | Logical NOT - negates the condition. |

---

#### `RepositoryCommitOrderByInput`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#repositorycommitorderbyfield">RepositoryCommitOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RepositoryCommitWhereInput`

**Service:** changesetcommitter

Filter input for repository-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `_and` | [<a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>!] |  |
| `_or` | [<a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>!] |  |
| `_not` | <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a> |  |

---

#### `RepositoryInput`

**Service:** corecommitter

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `path` | String! |  |
| `branch` | String! |  |

---

#### `RepositoryOrderByInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#repositoryorderbyfield">RepositoryOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RepositoryRecipeRunOrderByInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#repositoryreciperunorderbyfield">RepositoryRecipeRunOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `RepositoryRecipeRunWhereInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `path` | <a href="#stringfilter">StringFilter</a> |  |
| `origin` | <a href="#stringfilter">StringFilter</a> |  |
| `_and` | [<a href="#repositoryreciperunwhereinput">RepositoryRecipeRunWhereInput</a>!] |  |
| `_or` | [<a href="#repositoryreciperunwhereinput">RepositoryRecipeRunWhereInput</a>!] |  |
| `_not` | <a href="#repositoryreciperunwhereinput">RepositoryRecipeRunWhereInput</a> |  |

---

#### `RepositoryWhereInput`

**Service:** organization

Filter input for Repository queries using typed field filters.

| Field | Type | Description |
|-------|------|-------------|
| `origin` | <a href="#stringfilter">StringFilter</a> |  |
| `path` | <a href="#stringfilter">StringFilter</a> |  |
| `branch` | <a href="#stringfilter">StringFilter</a> |  |
| `changeset` | <a href="#stringfilter">StringFilter</a> |  |
| `lstArtifact` | <a href="#lstartifactwhereinput">LstArtifactWhereInput</a> |  |
| `_and` | [<a href="#repositorywhereinput">RepositoryWhereInput</a>!] | Logical AND - all conditions must match |
| `_or` | [<a href="#repositorywhereinput">RepositoryWhereInput</a>!] | Logical OR - at least one condition must match |
| `_not` | <a href="#repositorywhereinput">RepositoryWhereInput</a> | Logical NOT - negates the condition |

---

#### `ReviewDecisionFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | <a href="#reviewdecision">ReviewDecision</a> |  |
| `_neq` | <a href="#reviewdecision">ReviewDecision</a> |  |
| `_in` | [<a href="#reviewdecision">ReviewDecision</a>!] |  |
| `_nin` | [<a href="#reviewdecision">ReviewDecision</a>!] |  |

---

#### `RevokeScmTokenInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin to revoke the token for (e.g., github.com, gitlab.com). |

---

#### `RunDevCenterInput`

**Service:** recipeworker

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | ID! | The organization to run DevCenter for. |
| `recipeId` | ID! | The DevCenter recipe to run. |

---

#### `RunRecipeInput`

**Service:** recipeworker

| Field | Type | Description |
|-------|------|-------------|
| `recipe` | <a href="#recipeinput">RecipeInput</a>! | The recipe to run with any configured options. |
| `organizationId` | ID! | Run against all repositories in this organization. |
| `parentId` | ID | Optional parent changeset ID this recipe run is derived from. |
| `excludeFiles` | [String!] | Exclude files matching these patterns. |

---

#### `ScmAccessToken`

**Service:** changesetcommitter

An access token for a specific SCM origin. When provided on a commit mutation,
these tokens are preferred over stored OAuth tokens.

| Field | Type | Description |
|-------|------|-------------|
| `value` | String! |  |
| `origin` | String! |  |

---

#### `StringFilter`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | String |  |
| `_neq` | String |  |
| `_in` | [String!] |  |
| `_nin` | [String!] |  |
| `_contains` | String |  |
| `_startsWith` | String |  |
| `_endsWith` | String |  |
| `_icontains` | String | Case-insensitive contains |
| `_isNull` | Boolean | True to match null values, false to match non-null values |

---

#### `UpdateUserOrganizationInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The ID of the organization to update. |
| `name` | String | The new name for the organization. |
| `repositories` | [<a href="#repositoryinput">RepositoryInput</a>!] | Repositories to include in the organization. If provided, replaces the current list. |

---

#### `UserOrderByInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#userorderbyfield">UserOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `UserWhereInput`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `email` | <a href="#stringfilter">StringFilter</a> |  |
| `_and` | [<a href="#userwhereinput">UserWhereInput</a>!] |  |
| `_or` | [<a href="#userwhereinput">UserWhereInput</a>!] |  |
| `_not` | <a href="#userwhereinput">UserWhereInput</a> |  |

---

#### `VisualizationOptionInput`

**Service:** changesetvisualizer

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | <a href="#object">Object</a>! |  |

---

#### `VisualizationOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | <a href="#visualizationorderbyfield">VisualizationOrderByField</a>! |  |
| `direction` | <a href="#sortorder">SortOrder</a>! |  |

---

#### `VisualizationWhereInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | <a href="#idfilter">IDFilter</a> |  |
| `visualization` | <a href="#stringfilter">StringFilter</a> |  |
| `_and` | [<a href="#visualizationwhereinput">VisualizationWhereInput</a>!] |  |
| `_or` | [<a href="#visualizationwhereinput">VisualizationWhereInput</a>!] |  |
| `_not` | <a href="#visualizationwhereinput">VisualizationWhereInput</a> |  |

---

#### `YamlRecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | <a href="#base64">Base64</a>! |  |
| `primary` | ID | The ID of the primary recipe in this bundle. When specified, only this recipe
will be shown in the marketplace categories, hiding other recipes from this bundle.
This is used for the Moderne Builder feature where users build complex composite
recipes and we don't want to expose intermediate recipes in the marketplace. |

---

### Unions

#### `ConnectorTool`

**Service:** gateway

= <a href="#githubconfiguration">GithubConfiguration</a> | <a href="#gitlabconfiguration">GitLabConfiguration</a> | <a href="#bitbucketconfiguration">BitbucketConfiguration</a> | <a href="#bitbucketcloudconfiguration">BitbucketCloudConfiguration</a> | <a href="#azuredevopsconfiguration">AzureDevOpsConfiguration</a> | <a href="#artifactoryconfiguration">ArtifactoryConfiguration</a> | <a href="#mavenconfiguration">MavenConfiguration</a> | <a href="#pypiconfiguration">PypiConfiguration</a> | <a href="#npmconfiguration">NpmConfiguration</a> | <a href="#nugetconfiguration">NugetConfiguration</a> | <a href="#generichttptoolconfiguration">GenericHttpToolConfiguration</a> | <a href="#organizationconfiguration">OrganizationConfiguration</a> | <a href="#llmconfiguration">LlmConfiguration</a> | <a href="#s3configuration">S3Configuration</a>

---

### Scalars

#### `Base64`

**Service:** coregraphql

`Base64` represents a base64 encoded string.
In the browser, `btoa` encodes ASCII strings to Base64.

---

#### `Date`

**Service:** coregraphql

---

#### `DateTime`

**Service:** coregraphql

---

#### `Duration`

**Service:** coregraphql

---

#### `JSON`

**Service:** coregraphql

---

#### `Long`

**Service:** coregraphql

---

#### `Markdown`

**Service:** coregraphql

Contents may contain Markdown, HTML, or other text and should be passed through a Markdown parser by consumers

---

#### `Object`

**Service:** coregraphql

---

#### `Path`

**Service:** coregraphql

A file path relative to repository root (e.g., "src/main/java/Foo.java").

---

