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

`auditLogs`(first: Int = 100, after: String, where: [AuditLogWhereInput](#auditlogwhereinput), orderBy: [[AuditLogOrderByInput](#auditlogorderbyinput)!]): [AuditLogConnection](#auditlogconnection)!

Query audit log events with pagination and filtering.

---

### `auditLogsDownloads`

**Service:** auditreader

`auditLogsDownloads`(first: Int = 50, after: String, where: [AuditLogsDownloadWhereInput](#auditlogsdownloadwhereinput), orderBy: [[AuditLogsDownloadOrderByInput](#auditlogsdownloadorderbyinput)!]): [AuditLogsDownloadConnection](#auditlogsdownloadconnection)!

Query audit log downloads with pagination and filtering.
Use where: \{ id: \{ _eq: "..." } } to poll a specific download.

---

### `bulkPullRequestAction`

**Service:** changelogreader

`bulkPullRequestAction`(id: ID!): [BulkPullRequestAction](#bulkpullrequestaction)

Get a bulk pull request action by ID to poll for progress.

---

### `capabilities`

**Service:** gateway

`capabilities`: [PlatformCapabilities](#platformcapabilities)!

Returns which optional platform features are enabled in this deployment.
Each field defaults to false and is overridden to true by the corresponding
optional service when it is present in the supergraph composition.

---

### `codeSearch`

**Service:** code-search

`codeSearch`(repositoryId: String!, query: String!, first: Int = 100, after: String): [CodeSearchResultConnection](#codesearchresultconnection)!

Search source code across artifact repositories.
Searches the given repository and all its descendants in the hierarchy.
Results are grouped by artifact (groupId:artifactId) with file-level matches.

---

### `connectors`

**Service:** gateway

`connectors`(first: Int = 100, after: String, where: [ConnectorWhereInput](#connectorwhereinput), orderBy: [[ConnectorOrderByInput](#connectororderbyinput)!]): [ConnectorConnection](#connectorconnection)!

---

### `conversation`

**Service:** moddy

`conversation`(conversationId: ID!): [Conversation](#conversation)

Look up a single conversation by id. Returns null when no conversation
matches or the caller does not have access. Restores the v1 query the
moderne-ui client already references.

---

### `currentUser`

**Service:** authz

`currentUser`: [User](#user)!

Returns the currently authenticated user.

---

### `devCenterRecipes`

**Service:** recipemarketplace

`devCenterRecipes`: [[RecipeDescriptor](#recipedescriptor)!]!

Get available DevCenter recipes for configuration.

---

### `license`

**Service:** authz

`license`: [License](#license)!

Request a new license lease key

---

### `organization`

**Service:** organization

`organization`(id: ID!): [Organization](#organization)!

---

### `organizations`

**Service:** organization

`organizations`(first: Int = 100, after: String, where: [OrganizationWhereInput](#organizationwhereinput), orderBy: [[OrganizationOrderByInput](#organizationorderbyinput)!]): [OrganizationConnection](#organizationconnection)!

---

### `scmConnections`

**Service:** authz

`scmConnections`: [[ScmConnection](#scmconnection)!]!

Returns connections for all SCM providers.

---

### `users`

**Service:** authz

`users`(first: Int = 100, after: String, where: [UserWhereInput](#userwhereinput), orderBy: [[UserOrderByInput](#userorderbyinput)!]): [UserConnection](#userconnection)!

Returns users with option to filter by role.

---

### `verifyToken`

**Service:** changesetcommitter

`verifyToken`(origin: String!, scmType: [ScmType](#scmtype)!): String

---

## Mutations

### `approvePullRequests`

**Service:** changelogreader

`approvePullRequests`(organizationId: ID!, selection: [PullRequestSelectionInput](#pullrequestselectioninput)!): [BulkPullRequestActionQueued](#bulkpullrequestactionqueued)!

Approve pull requests in bulk. Returns the queued action for polling.

---

### `cancelBulkPullRequestAction`

**Service:** changelogreader

`cancelBulkPullRequestAction`(id: ID!): [BulkPullRequestActionCanceled](#bulkpullrequestactioncanceled)!

Cancel a pending bulk pull request action.

---

### `cancelCommit`

**Service:** changesetcommitter

`cancelCommit`(id: ID!): [OrganizationCommitCanceled](#organizationcommitcanceled)!

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

`closePullRequests`(organizationId: ID!, selection: [PullRequestSelectionInput](#pullrequestselectioninput)!): [BulkPullRequestActionQueued](#bulkpullrequestactionqueued)!

Close pull requests in bulk. Returns the queued action for polling.

---

### `commit`

**Service:** changesetcommitter

`commit`(input: [CommitInput](#commitinput)!): [OrganizationCommitQueued](#organizationcommitqueued)!

Create commits from a changeset (recipe run, batch change, etc.).

---

### `createAccessToken`

**Service:** authz

`createAccessToken`(description: String, expiresAt: [DateTime](#datetime)): [CreateAccessTokenResult](#createaccesstokenresult)!

Creates a new Moderne Personal Access Token for the current user.
Returns the token value only once - it cannot be retrieved again.

---

### `createConversation`

**Service:** moddy

`createConversation`(input: [CreateConversationInput](#createconversationinput)!, waitForCompletion: Boolean = false): [SendMessageResult](#sendmessageresult)!

Create a new conversation and send the first message. Uses the
effective prompt for the organization context. `waitForCompletion`
has the same semantics as on `sendMessage`.

---

### `createUserOrganization`

**Service:** organization

`createUserOrganization`(input: [CreateUserOrganizationInput](#createuserorganizationinput)!): [Organization](#organization)!

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

`downloadAuditLogs`(first: Int, since: [DateTime](#datetime), until: [DateTime](#datetime), format: [AuditLogExportFormat](#auditlogexportformat)!): [AuditLogsDownload](#auditlogsdownload)!

Start an asynchronous export of audit logs. Returns a task whose state
can be polled via auditLogsDownloads.

---

### `downloadDataTable`

**Service:** changesetreader

`downloadDataTable`(changesetId: ID!, dataTable: String!, group: String, format: [DataTableFormat](#datatableformat)!): [DataTable](#datatable)!

Start or retrieve a data table download.
If the same data table + group + format combination was already requested,
returns the existing download state.

---

### `exchangeAuthorizationCode`

**Service:** authz

`exchangeAuthorizationCode`(input: [ExchangeAuthorizationCodeInput](#exchangeauthorizationcodeinput)!): [ExchangeAuthorizationResult](#exchangeauthorizationresult)!

Exchange an OAuth authorization code for an access token.

This unified mutation handles all OAuth 2.0 VCS providers.
The backend uses the authorizationId to look up:
- The origin and VCS type
- PKCE code_verifier (GitLab)

On success, the token is stored and future requests will be authenticated.

---

### `initiateAuthorization`

**Service:** authz

`initiateAuthorization`(input: [InitiateAuthorizationInput](#initiateauthorizationinput)!): [OAuthAuthorization](#oauthauthorization)!

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

`installRecipesForCurrentUser`(bundle: [RecipeBundleInput](#recipebundleinput)!): [RecipeInstallation](#recipeinstallation)!

Install a recipe bundle to the current user's personal marketplace.

---

### `installRecipesForOrganization`

**Service:** recipemarketplace

`installRecipesForOrganization`(organizationId: ID!, bundle: [RecipeBundleInput](#recipebundleinput)!): [RecipeInstallation](#recipeinstallation)!

Install a recipe bundle to a specific organization's marketplace.
Requires the `admin` role.

---

### `installRecipesUniversal`

**Service:** recipemarketplace

`installRecipesUniversal`(bundle: [RecipeBundleInput](#recipebundleinput)!): [RecipeInstallation](#recipeinstallation)!

Install a recipe bundle to the universal marketplace (visible to all).
Requires the `admin` role.

---

### `mergePullRequests`

**Service:** changelogreader

`mergePullRequests`(organizationId: ID!, selection: [PullRequestSelectionInput](#pullrequestselectioninput)!, mergeMethod: [MergeMethod](#mergemethod)!, deleteSourceBranch: Boolean! = false): [BulkPullRequestActionQueued](#bulkpullrequestactionqueued)!

Merge pull requests in bulk. Returns the queued action for polling.

---

### `reindexChangelog`

**Service:** changelogwriter

`reindexChangelog`(since: [DateTime](#datetime)!, origin: String): [ReindexResult](#reindexresult)!

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

`revokeScmToken`(input: [RevokeScmTokenInput](#revokescmtokeninput)!): [RevokeTokenResult](#revoketokenresult)!

Revoke an SCM OAuth token for the current user and a specific origin.
This removes the stored token, disconnecting the user from the VCS.

---

### `runDevCenter`

**Service:** recipeworker

`runDevCenter`(input: [RunDevCenterInput](#rundevcenterinput)!): [DevCenterRunRunning](#devcenterrunrunning)!

Start a DevCenter run for an organization.
Returns immediately with running status.

---

### `runRecipe`

**Service:** recipeworker

`runRecipe`(input: [RunRecipeInput](#runrecipeinput)!): [OrganizationRecipeRunQueued](#organizationreciperunqueued)!

Run a recipe against repositories.
Returns the recipe run in its initial queued state.

---

### `runVisualization`

**Service:** changesetvisualizer

`runVisualization`(organizationId: ID!, visualizationId: ID!, options: [[VisualizationOptionInput](#visualizationoptioninput)!]): [Visualization](#visualization)!

Request a visualization to be generated based on the provided descriptor.
Returns the existing visualization if already run with the same options,
otherwise queues a new visualization run.

---

### `sendMessage`

**Service:** moddy

`sendMessage`(conversationId: ID!, message: String!, waitForCompletion: Boolean = false): [SendMessageResult](#sendmessageresult)!

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

`setOrganizationPrompt`(organizationId: ID!, content: [Markdown](#markdown)!): [Prompt](#prompt)!

Set the system prompt for a specific organization (overrides universal).

---

### `setProfiling`

**Service:** gateway

`setProfiling`(enabled: Boolean!, event: [ProfilingEvent](#profilingevent) = CPU): Boolean!

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

`setUniversalPrompt`(content: [Markdown](#markdown)!): [Prompt](#prompt)!

Set the universal (default) system prompt.

---

### `setUserPrompt`

**Service:** moddy

`setUserPrompt`(content: [Markdown](#markdown)!): [Prompt](#prompt)!

Set the system prompt for the current user (overrides organization and universal).

---

### `uninstallRecipesFromCurrentUser`

**Service:** recipemarketplace

`uninstallRecipesFromCurrentUser`(packageName: String!): [RecipeUninstallation](#recipeuninstallation)!

Uninstall a recipe bundle from the current user's personal marketplace.
Returns the number of recipes that were removed.

---

### `uninstallRecipesFromOrganization`

**Service:** recipemarketplace

`uninstallRecipesFromOrganization`(organizationId: ID!, packageName: String!): [RecipeUninstallation](#recipeuninstallation)!

Uninstall a recipe bundle from a specific organization's marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

---

### `uninstallRecipesUniversal`

**Service:** recipemarketplace

`uninstallRecipesUniversal`(packageName: String!): [RecipeUninstallation](#recipeuninstallation)!

Uninstall a recipe bundle from the universal marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

---

### `updateUserOrganization`

**Service:** organization

`updateUserOrganization`(input: [UpdateUserOrganizationInput](#updateuserorganizationinput)!): [Organization](#organization)!

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
| `created` | [DateTime](#datetime)! | The date and time the token was created. |
| `expiresAt` | [DateTime](#datetime) | The date and time the token will expire. |

---

#### `AccessTokenConnection`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AccessTokenEdge](#accesstokenedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `AccessTokenEdge`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AccessToken](#accesstoken)! |  |
| `cursor` | String! |  |

---

#### `ArtifactoryConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `lstQuery` | [String!] |  |
| `lastIngestedAt` | [DateTime](#datetime) |  |

---

#### `AuditLog`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! | The user who performed the action. |
| `target` | String! | The resource type that was acted upon (e.g., "access.tokens", "organizations"). |
| `action` | String! | The specific action that was performed (e.g., "create.token", "delete.organization"). |
| `actionType` | [AuditActionType](#auditactiontype)! | The CRUD classification of the action. |
| `outcome` | [AuditOutcome](#auditoutcome)! | Whether the action succeeded or failed. |
| `description` | String | Human-readable description of what happened. |
| `timestamp` | [DateTime](#datetime)! | When the action occurred. |

---

#### `AuditLogConnection`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AuditLogEdge](#auditlogedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `AuditLogEdge`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AuditLog](#auditlog)! |  |
| `cursor` | String! |  |

---

#### `AuditLogsDownloadConnection`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AuditLogsDownloadEdge](#auditlogsdownloadedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `AuditLogsDownloadEdge`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AuditLogsDownload](#auditlogsdownload)! |  |
| `cursor` | String! |  |

---

#### `AuditLogsDownloadError`

**Service:** auditreader | **Implements:** [AuditLogsDownload](#auditlogsdownload)

An audit log download failed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! |  |

---

#### `AuditLogsDownloadFinished`

**Service:** auditreader | **Implements:** [AuditLogsDownload](#auditlogsdownload)

An audit log download has completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | [AuditLogExportFormat](#auditlogexportformat)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `downloadUrl` | String! | URL path to download the file (relative to the service base URL). |

---

#### `AuditLogsDownloadProcessing`

**Service:** auditreader | **Implements:** [AuditLogsDownload](#auditlogsdownload)

An audit log download is being processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | [AuditLogExportFormat](#auditlogexportformat)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

---

#### `AzureDevOpsConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [AzureDevOpsOauth](#azuredevopsoauth) |  |

---

#### `AzureDevOpsConnection`

**Service:** authz | **Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

---

#### `AzureDevOpsOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `tenantId` | String! |  |

---

#### `BatchChange`

**Service:** changesetreader | **Implements:** [OrganizationChangeset](#organizationchangeset)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `name` | String |  |
| `description` | String |  |
| `sourceTool` | [ToolInfo](#toolinfo) |  |
| `diffTool` | [ToolInfo](#toolinfo) |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this batch change.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this batch change. |

---

#### `BatchChangeFileChange`

**Service:** changesetreader | **Implements:** [FileChange](#filechange)

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#path)! |  |
| `beforeSourcePath` | [Path](#path) |  |
| `afterSourcePath` | [Path](#path) |  |
| `diff` | (markupLevel: [MarkupLevel](#markuplevel) = ERROR, showWhitespaceOnlyChanges: Boolean = true): [Patch](#patch) |  |

---

#### `BitbucketCloudConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [BitbucketCloudOauth](#bitbucketcloudoauth) |  |

---

#### `BitbucketCloudConnection`

**Service:** authz | **Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

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
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [BitbucketOauth](#bitbucketoauth) |  |

---

#### `BitbucketConnection`

**Service:** authz | **Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

---

#### `BitbucketOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

---

#### `BranchCommitOptions`

**Service:** changesetcommitter | **Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |

---

#### `BulkPullRequestActionCanceled`

**Service:** changelogreader | **Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `canceledBy` | [User](#user)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

---

#### `BulkPullRequestActionConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[BulkPullRequestActionEdge](#bulkpullrequestactionedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `BulkPullRequestActionEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [BulkPullRequestAction](#bulkpullrequestaction)! |  |
| `cursor` | String! |  |

---

#### `BulkPullRequestActionError`

**Service:** changelogreader | **Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `errorMessage` | String! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

---

#### `BulkPullRequestActionFinished`

**Service:** changelogreader | **Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

---

#### `BulkPullRequestActionQueued`

**Service:** changelogreader | **Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `queuedAt` | [DateTime](#datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

---

#### `BulkPullRequestActionRunning`

**Service:** changelogreader | **Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

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
| `roles` | [[ContributorRole](#contributorrole)!]! | The roles this participant has across changelog entries. |

---

#### `ChangelogCommit`

**Service:** changelogreader | **Implements:** [ChangelogEntry](#changelogentry)

A direct commit to a branch.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! |  |
| `author` | [ChangeParticipant](#changeparticipant)! |  |
| `repository` | [Repository](#repository)! |  |
| `url` | String! |  |
| `branch` | String! |  |
| `sha` | String! | The commit SHA. |
| `updatedAt` | [DateTime](#datetime)! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |
| `buildState` | [BuildState](#buildstate) |  |
| `diffstat` | [DiffStat](#diffstat)! |  |

---

#### `ChangelogEntryConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ChangelogEntryEdge](#changelogentryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `ChangelogEntryEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [ChangelogEntry](#changelogentry)! |  |
| `cursor` | String! |  |

---

#### `ChangelogParticipantConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ChangelogParticipantEdge](#changelogparticipantedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `ChangelogParticipantEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [ChangeParticipant](#changeparticipant)! |  |
| `cursor` | String! |  |

---

#### `ChangelogPullRequest`

**Service:** changelogreader | **Implements:** [ChangelogEntry](#changelogentry)

A pull request (open, draft, merged, or closed).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! |  |
| `author` | [ChangeParticipant](#changeparticipant)! |  |
| `repository` | [Repository](#repository)! |  |
| `url` | String! |  |
| `branch` | String! |  |
| `number` | Int! | The PR number. |
| `sourceBranch` | String! | The source branch of the pull request. |
| `state` | [PullRequestState](#pullrequeststate)! | Current state of the pull request. |
| `draft` | Boolean! | Whether this is a draft pull request. |
| `updatedAt` | [DateTime](#datetime)! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `buildState` | [BuildState](#buildstate) |  |
| `reviewDecision` | [ReviewDecision](#reviewdecision) | Review decision for the pull request. |
| `approvedBy` | [[ChangeParticipant](#changeparticipant)!] | Reviewers who approved this pull request. |
| `requestedReviewers` | [[ChangeParticipant](#changeparticipant)!] | Reviewers assigned/requested on this pull request. |
| `additions` | Int | Lines added. |
| `deletions` | Int | Lines removed. |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |
| `diffstat` | [DiffStat](#diffstat)! |  |
| `actions` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! | Actions (approve, merge, close) that have been applied to this pull request.
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
| `fileChanges` | (first: Int = 100, after: String): [FileChangeConnection](#filechangeconnection)! |  |

---

#### `CodeSearchResultConnection`

**Service:** code-search

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[CodeSearchResultEdge](#codesearchresultedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |
| `searchDurationMs` | [Long](#long)! |  |

---

#### `CodeSearchResultEdge`

**Service:** code-search

| Field | Type | Description |
|-------|------|-------------|
| `node` | [CodeSearchResult](#codesearchresult)! |  |
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
| `tools` | [[ConnectorTool](#connectortool)!]! |  |
| `uiConfiguration` | [UiConfiguration](#uiconfiguration) |  |
| `personalAccessTokenConfiguration` | [PersonalAccessTokenConfiguration](#personalaccesstokenconfiguration) |  |

---

#### `ConnectorConnection`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ConnectorEdge](#connectoredge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `ConnectorEdge`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Connector](#connector)! |  |
| `cursor` | String! |  |

---

#### `Conversation`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `organization` | [Organization](#organization)! |  |
| `user` | [User](#user)! |  |
| `messages` | (first: Int = 100, after: String): [MessageConnection](#messageconnection)! |  |
| `turnState` | [ConversationTurnState](#conversationturnstate)! | Current turn state for this conversation. Carries the server-
recommended poll cadence — clients should respect this rather than
hardcoding an interval. |
| `startedAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

---

#### `ConversationConnection`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ConversationEdge](#conversationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |

---

#### `ConversationEdge`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Conversation](#conversation)! |  |
| `cursor` | String! |  |

---

#### `ConversationTurnState`

**Service:** moddy

Represents the current phase of the conversation's active turn (if any).
Drives client poll cadence.

| Field | Type | Description |
|-------|------|-------------|
| `phase` | [ConversationPhase](#conversationphase)! |  |
| `recommendedPollIntervalMs` | Int! | Server-recommended poll interval in milliseconds. |
| `activeTurnStartedAt` | [DateTime](#datetime) | When the currently-active turn started, if any. |

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
| `created` | [DateTime](#datetime)! | When the token was created. |
| `expiresAt` | [DateTime](#datetime) | When the token will expire, or null if it never expires. |

---

#### `DataTableAvailable`

**Service:** changesetreader | **Implements:** [DataTable](#datatable)

A data table is available for download but no download has been initiated yet.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `changesetId` | ID! |  |

---

#### `DataTableConnection`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[DataTableEdge](#datatableedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `DataTableDescriptor`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `columns` | [[Column](#column)!]! |  |

---

#### `DataTableEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | [DataTable](#datatable)! |  |
| `cursor` | String! |  |

---

#### `DataTableError`

**Service:** changesetreader | **Implements:** [DataTable](#datatable)

A data table download failed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! |  |

---

#### `DataTableFinished`

**Service:** changesetreader | **Implements:** [DataTable](#datatable)

A data table download has completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `format` | [DataTableFormat](#datatableformat)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `duration` | [Duration](#duration) |  |
| `downloadUrl` | String! | URL path to download the file (relative to the service base URL). |

---

#### `DataTableProcessing`

**Service:** changesetreader | **Implements:** [DataTable](#datatable)

A data table download is being processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `format` | [DataTableFormat](#datatableformat)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |

---

#### `DataTableSqlMessage`

**Service:** moddy | **Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `sqlQuery` | String! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

---

#### `DataTablesMessage`

**Service:** moddy | **Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `dataTables` | [[DataTableDescriptor](#datatabledescriptor)!]! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

---

#### `DevCenter`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `recipe` | [RecipeDescriptor](#recipedescriptor) | The currently configured DevCenter recipe for this organization. |
| `runs` | (first: Int = 10, after: String, where: [DevCenterRunWhereInput](#devcenterrunwhereinput), orderBy: [[DevCenterRunOrderByInput](#devcenterrunorderbyinput)!]): [DevCenterRunConnection](#devcenterrunconnection)! | DevCenter runs for this organization, ordered by start time descending. |

---

#### `DevCenterCard`

**Service:** changesetreader

A DevCenter card represents a category of work (e.g., "Spring Boot 3", "Java 21", "Security").
Cards contain measures that track progress toward completion.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#markdown)! | Display name of the card. |
| `description` | [Markdown](#markdown) | Description of what this card tracks. |
| `fixRecipe` | [RecipeDescriptor](#recipedescriptor) | Recipe that can fix/complete the work tracked by this card. |
| `aggregation` | [DevCenterAggregation](#devcenteraggregation)! | How results are aggregated for this card. |
| `measures` | [[DevCenterMeasure](#devcentermeasure)!]! | Measures within this card, ordered by ordinal. |
| `repositoriesNotApplicable` | Int! | Repositories where this card is not applicable. |

---

#### `DevCenterCardDescriptor`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown) |  |
| `fixRecipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `aggregation` | [DevCenterAggregation](#devcenteraggregation)! |  |
| `measures` | [[DevCenterMeasureDescriptor](#devcentermeasuredescriptor)!]! |  |

---

#### `DevCenterMeasure`

**Service:** changesetreader

A measure within a DevCenter card representing a specific state or finding,
with a count from the run results.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#markdown)! | Display name of the measure. |
| `description` | [Markdown](#markdown) | Description of what this measure represents. |
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
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown) |  |
| `ordinal` | Int! |  |

---

#### `DevCenterOrganization`

**Service:** changesetreader

Organization-level context from a DevCenter run.

| Field | Type | Description |
|-------|------|-------------|
| `repositories` | [DevCenterRepositories](#devcenterrepositories)! | Repository counts at the time of the run. |
| `contributingDevelopers` | Int! | Number of unique contributing developers (last 90 days). |
| `linesOfCode` | [Long](#long)! | Total lines of code across all repositories on platform. |

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

**Service:** changesetreader | **Implements:** [DevCenterRun](#devcenterrun)

DevCenter run was canceled before completion.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |
| `finishedAt` | [DateTime](#datetime)! |  |

---

#### `DevCenterRunConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[DevCenterRunEdge](#devcenterrunedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `DevCenterRunEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [DevCenterRun](#devcenterrun)! |  |
| `cursor` | String! |  |

---

#### `DevCenterRunError`

**Service:** changesetreader | **Implements:** [DevCenterRun](#devcenterrun)

DevCenter run failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! | Human-readable error message. |

---

#### `DevCenterRunFinished`

**Service:** changesetreader | **Implements:** [DevCenterRun](#devcenterrun)

DevCenter run completed successfully with summarized results.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `organization` | [DevCenterOrganization](#devcenterorganization)! |  |
| `upgradesAndMigrations` | [[DevCenterCard](#devcentercard)!]! | Upgrade and migration opportunities found (from UpgradesAndMigrations data table). |
| `security` | [DevCenterCard](#devcentercard) | Security vulnerabilities found (from SecurityIssues data table). |

---

#### `DevCenterRunRunning`

**Service:** changesetreader | **Implements:** [DevCenterRun](#devcenterrun)

DevCenter recipe is currently running across repositories.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |

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

**Service:** changesetcommitter | **Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Direct commit to repository completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |

---

#### `ErrorMessage`

**Service:** moddy | **Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `content` | [Markdown](#markdown)! |  |
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
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

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
| `edges` | [[FileChangeEdge](#filechangeedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |
| `searched` | Int! | Total files searched. |
| `changed` | Int! | Files with committable changes. |
| `errors` | Int! | Files with errors. |

---

#### `FileChangeEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | [FileChange](#filechange)! |  |
| `cursor` | String! |  |

---

#### `ForkAndPullRequestCommitSucceeded`

**Service:** changesetcommitter | **Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Fork and pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | [PullRequestStatus](#pullrequeststatus)! | Pull request status. |

---

#### `ForkCommitOptions`

**Service:** changesetcommitter | **Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account. |
| `prefixOrganization` | Boolean! |  |

---

#### `ForkCommitSucceeded`

**Service:** changesetcommitter | **Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Fork commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |

---

#### `ForkPullRequestOptions`

**Service:** changesetcommitter | **Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account. |
| `prefixOrganization` | Boolean! |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | [Base64](#base64) |  |
| `draft` | Boolean! |  |
| `maintainerCanModify` | Boolean! | GitHub only flag to allow maintainers to edit a pull request. |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
| `canRecreateClosedPullRequest` | Boolean! | Recreate a pull request if it was already closed. |

---

#### `GenericHttpToolConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

---

#### `GitLabConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [GitLabOauth](#gitlaboauth) |  |

---

#### `GitLabConnection`

**Service:** authz | **Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

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
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [GithubOauth](#githuboauth) |  |

---

#### `GithubConnection`

**Service:** authz | **Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

---

#### `GithubOauth`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `includePrivateRepos` | Boolean! |  |

---

#### `GoRecipeBundle`

**Service:** changesetreader | **Implements:** [RecipeBundle](#recipebundle)

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
| `latency` | [Duration](#duration) |  |

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
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `llmProvider` | [LlmProvider](#llmprovider)! |  |

---

#### `LstArtifact`

**Service:** organization

The LST artifact for a repository - the precomputed Lossless Semantic Tree
that recipe runs consume. Every repository has a conceptual artifact;
`published` reflects the upstream `mod publish` timestamp, while
`available` indicates whether the saas can route a recipe run to it yet.

| Field | Type | Description |
|-------|------|-------------|
| `published` | [DateTime](#datetime) | When `mod publish` produced an artifact into the customer's LST artifact
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

**Service:** corechangeset | **Implements:** [Marker](#marker)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `level` | [MarkupLevel](#markuplevel)! |  |
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
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `localRepository` | String |  |
| `lastIngestedAt` | [DateTime](#datetime) |  |

---

#### `MavenRecipeBundle`

**Service:** changesetreader | **Implements:** [RecipeBundle](#recipebundle)

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
| `mergeMethod` | [MergeMethod](#mergemethod)! |  |

---

#### `MessageConnection`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[MessageEdge](#messageedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |

---

#### `MessageEdge`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Message](#message)! |  |
| `cursor` | String! |  |

---

#### `Moddy`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `systemPrompt` | [Prompt](#prompt)! | The effective system prompt for this context.
Cascades: user > organization > universal > built-in default. |
| `adminOnly` | Boolean! | When true, only administrators can create conversations or send messages.
Install-level policy flag; the UI uses this together with the viewer's admin
status to gate the Moddy menu entry. |
| `conversations` | (first: Int = 50, after: String, where: [ConversationWhereInput](#conversationwhereinput), orderBy: [[ConversationOrderByInput](#conversationorderbyinput)!]): [ConversationConnection](#conversationconnection)! |  |
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
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

---

#### `NpmRecipeBundle`

**Service:** changesetreader | **Implements:** [RecipeBundle](#recipebundle)

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
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

---

#### `NugetRecipeBundle`

**Service:** changesetreader | **Implements:** [RecipeBundle](#recipebundle)

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
| `expiresAt` | [DateTime](#datetime)! | When this authorization expires. UI should treat expired authorizations as stale. |

---

#### `Option`

**Service:** changesetreader

RecipeDescriptor resolved from changeset-specific recipes.csv.
When a recipe run is created, the recipes.csv is copied to the changeset directory,
so we can resolve the recipe that was used at the time of the run (not the current global state).

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#object) |  |
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
| `changelog` | (first: Int = 50, after: String, where: [ChangelogEntryWhereInput](#changelogentrywhereinput), orderBy: [[ChangelogEntryOrderByInput](#changelogentryorderbyinput)!]): [ChangelogEntryConnection](#changelogentryconnection)! | PR and commit activity feed for repositories in this organization. |
| `participants` | (first: Int = 50, after: String, where: [ChangelogParticipantWhereInput](#changelogparticipantwhereinput), orderBy: [[ChangelogParticipantOrderByInput](#changelogparticipantorderbyinput)!]): [ChangelogParticipantConnection](#changelogparticipantconnection)! | All unique participants across the changelog for this organization,
aggregated from authors, assignees, closers, and reviewers. |
| `commitOptions` | [[CommitOption](#commitoption)!]! | Available commit options for this organization. |
| `changesets` | (first: Int = 50, after: String, where: [OrganizationChangesetWhereInput](#organizationchangesetwhereinput), orderBy: [[OrganizationChangesetOrderByInput](#organizationchangesetorderbyinput)!]): [OrganizationChangesetConnection](#organizationchangesetconnection)! |  |
| `devCenter` | [DevCenter](#devcenter) | DevCenter provides organization-wide campaign progress tracking. |
| `moddy` | [Moddy](#moddy)! |  |
| `name` | String! |  |
| `parents` | [[Organization](#organization)!]! | The ancestor organizations of this organization, ordered from immediate parent towards root.
Does not include the epsilon root. Empty for the root organization and direct children of root. |
| `user` | [User](#user) | The user who owns this organization. Null for global organizations,
non-null for user-defined organizations. |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryWhereInput](#repositorywhereinput), orderBy: [[RepositoryOrderByInput](#repositoryorderbyinput)!]): [RepositoryConnection](#repositoryconnection)! |  |
| `children` | (first: Int = 100, after: String, where: [OrganizationWhereInput](#organizationwhereinput), orderBy: [[OrganizationOrderByInput](#organizationorderbyinput)!]): [OrganizationConnection](#organizationconnection)! | Direct children of this organization in the tree, paginated.
Useful for lazy-loading the org tree level by level — e.g. an org
selector that fetches the root, then the children of each folder
only when the user expands it.

`where.depth` is ignored on this field — every direct child of a
given parent has the same depth, so the filter would be either
all-or-nothing. Use `where.name` and the boolean composers
(`_and`, `_or`, `_not`) for meaningful filtering.

`orderBy` defaults to NAME ascending when unspecified. |
| `marketplace` | [RecipeMarketplace](#recipemarketplace) |  |

---

#### `OrganizationChangeset`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull
requests that belong to this changeset.

Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing
last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |
| `user` | [User](#user)! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this changeset.
Each visualization starts as Available and transitions to Processing/Finished/Error
when runVisualization mutation is called. |

---

#### `OrganizationChangesetConnection`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationChangesetEdge](#organizationchangesetedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `OrganizationChangesetEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationChangeset](#organizationchangeset)! |  |
| `cursor` | String! |  |
| `organization` | [Organization](#organization) | The organization this changeset was run against.
May differ from the queried organization when the changeset belongs to a suborganization.
Null if the organization has been deleted or is temporarily unavailable. |

---

#### `OrganizationCommitCanceled`

**Service:** changesetcommitter | **Implements:** [OrganizationCommit](#organizationcommit)

Commit was canceled before completion.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `options` | [CommitOptions](#commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#base64) |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `canceledBy` | [User](#user)! | Who or what initiated the cancellation. |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#repositorycommitconnection)! | Paginated results per repository (partial). |

---

#### `OrganizationCommitConnection`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationCommitEdge](#organizationcommitedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `OrganizationCommitEdge`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationCommit](#organizationcommit)! |  |
| `cursor` | String! |  |

---

#### `OrganizationCommitError`

**Service:** changesetcommitter | **Implements:** [OrganizationCommit](#organizationcommit)

Commit failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `options` | [CommitOptions](#commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#base64) |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `errorMessage` | String! | Human-readable error message. |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#repositorycommitconnection)! | Paginated results per repository (partial). |

---

#### `OrganizationCommitFinished`

**Service:** changesetcommitter | **Implements:** [OrganizationCommit](#organizationcommit)

Commit completed successfully (all or partial success).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `options` | [CommitOptions](#commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#base64) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#repositorycommitconnection)! | Paginated results per repository. |

---

#### `OrganizationCommitQueued`

**Service:** changesetcommitter | **Implements:** [OrganizationCommit](#organizationcommit)

Commit is queued and waiting to be processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `options` | [CommitOptions](#commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#base64) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#repositorycommitconnection)! | Paginated results per repository. |

---

#### `OrganizationCommitRunning`

**Service:** changesetcommitter | **Implements:** [OrganizationCommit](#organizationcommit)

Commit is actively being processed across repositories.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `options` | [CommitOptions](#commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#base64) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#repositorycommitconnection)! | Paginated results per repository. |

---

#### `OrganizationConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

---

#### `OrganizationConnection`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationEdge](#organizationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `OrganizationEdge`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Organization](#organization)! |  |
| `cursor` | String! |  |

---

#### `OrganizationRecipeRun`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions for recipe-run changesets. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this recipe run. |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunCanceled`

**Service:** changesetreader | **Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `canceledAt` | [DateTime](#datetime)! | Alias for finishedAt - when the run was canceled |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationRecipeRunEdge](#organizationreciperunedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `OrganizationRecipeRunEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationRecipeRun](#organizationreciperun)! |  |
| `cursor` | String! |  |

---

#### `OrganizationRecipeRunError`

**Service:** changesetreader | **Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `errorMessage` | String |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunFinished`

**Service:** changesetreader | **Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `duration` | [Duration](#duration) |  |
| `totals` | [RecipeRunTotals](#reciperuntotals)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunQueued`

**Service:** changesetreader | **Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `queuedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunRunning`

**Service:** changesetreader | **Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `totals` | [RecipeRunTotals](#reciperuntotals) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

---

#### `OrganizationRecipeRunSyncing`

**Service:** changesetreader | **Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor,
run monitor, processor). Treat as a content version: poll a tiny query
selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the
heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run.
Each data table starts as Available and transitions to Processing/Finished/Error
when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

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
| `markers` | [[Marker](#marker)!]! |  |

---

#### `PersonalAccessTokenConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `maxExpiryDays` | Int |  |

---

#### `PipRecipeBundle`

**Service:** changesetreader | **Implements:** [RecipeBundle](#recipebundle)

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
| `profiling` | [Profiling](#profiling)! |  |

---

#### `Profiling`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `deployed` | Boolean! | Whether the per-tenant Pyroscope ASG, S3 bucket, and IAM are provisioned. |
| `session` | [ProfilingSession](#profilingsession) | The currently active profiling session, or null when profiling is off. Flipped by setProfiling. |

---

#### `ProfilingSession`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `user` | [User](#user)! | The user who turned profiling on. |
| `startedAt` | [DateTime](#datetime)! | When profiling was turned on. |
| `event` | [ProfilingEvent](#profilingevent)! | The primary profiling event the in-process agent is sampling. |

---

#### `Prompt`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `content` | [Markdown](#markdown)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |
| `lastUpdatedBy` | [User](#user)! |  |

---

#### `PullRequestActionCanceled`

**Service:** changelogreader | **Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `canceledBy` | [User](#user)! |  |

---

#### `PullRequestActionConnection`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[PullRequestActionEdge](#pullrequestactionedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `PullRequestActionEdge`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [PullRequestAction](#pullrequestaction)! |  |
| `cursor` | String! |  |

---

#### `PullRequestActionFailed`

**Service:** changelogreader | **Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `errorMessage` | String! |  |

---

#### `PullRequestActionQueued`

**Service:** changelogreader | **Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |

---

#### `PullRequestActionRunning`

**Service:** changelogreader | **Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

---

#### `PullRequestActionSucceeded`

**Service:** changelogreader | **Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |

---

#### `PullRequestCommitSucceeded`

**Service:** changesetcommitter | **Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | [PullRequestStatus](#pullrequeststatus)! | Pull request status. |

---

#### `PullRequestOptions`

**Service:** changesetcommitter | **Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | [Base64](#base64) |  |
| `draft` | Boolean! |  |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
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
| `mergeable` | [Mergeable](#mergeable)! | Can this pull request be merged or not |
| `state` | [PullRequestState](#pullrequeststate)! |  |
| `review` | [ReviewStatus](#reviewstatus)! |  |
| `buildState` | [BuildState](#buildstate) |  |
| `otherBlockingReasons` | [String!]! | Additional status flags that block this pull request. Can depend on the SCM service provider. |

---

#### `PypiConfiguration`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

---

#### `RecipeBundleConnection`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeBundleEdge](#recipebundleedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `RecipeBundleEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeBundle](#recipebundle)! |  |
| `cursor` | String! |  |

---

#### `RecipeCategory`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown)! |  |
| `recipeCount` | Int! | Total number of unique recipes in this category, including all subcategories recursively. |
| `parents` | [[RecipeCategory](#recipecategory)!]! |  |
| `recipes` | (first: Int = 100, after: String, where: [RecipeWhereInput](#recipewhereinput), orderBy: [[RecipeOrderByInput](#recipeorderbyinput)!]): [RecipeDescriptorConnection](#recipedescriptorconnection)! |  |
| `categories` | (first: Int = 100, after: String, where: [RecipeCategoryWhereInput](#recipecategorywhereinput), orderBy: [[RecipeCategoryOrderByInput](#recipecategoryorderbyinput)!]): [RecipeCategoryConnection](#recipecategoryconnection)! |  |

---

#### `RecipeCategoryConnection`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeCategoryEdge](#recipecategoryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `RecipeCategoryEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeCategory](#recipecategory)! |  |
| `cursor` | String! |  |

---

#### `RecipeDescriptor`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `instanceName` | String |  |
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown)! |  |
| `recipeCount` | Int |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `options` | [[Option](#option)!]! |  |
| `dataTables` | [[DataTableDescriptor](#datatabledescriptor)!]! |  |
| `devCenterCards` | [[DevCenterCardDescriptor](#devcentercarddescriptor)!] | DevCenter card descriptors for this recipe, or null if not a DevCenter recipe. |
| `detail` | [RecipeDetail](#recipedetail)! | Expensive recipe detail fields that require resolving the full recipe bundle.
Returns a state machine: query once to trigger resolution, poll until Finished. |

---

#### `RecipeDescriptorConnection`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeDescriptorEdge](#recipedescriptoredge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `RecipeDescriptorEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeDescriptor](#recipedescriptor)! |  |
| `cursor` | String! |  |
| `relevance` | Float! | Relevance score for this recipe in the context of a search query.
For semantic search, this represents the search relevance (0.0 to 1.0).
For filter-based queries, this is always 1.0. |

---

#### `RecipeDetailError`

**Service:** recipemarketplace | **Implements:** [RecipeDetail](#recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! |  |

---

#### `RecipeDetailFinished`

**Service:** recipemarketplace | **Implements:** [RecipeDetail](#recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `recipeList` | (first: Int = 100, after: String): [RecipeDescriptorConnection](#recipedescriptorconnection)! | The list of recipes that make up this composite recipe.
Returns an empty connection for non-composite (leaf) recipes. |
| `tags` | [String!]! | Tags associated with this recipe for categorization and filtering. |
| `preconditions` | [[RecipeDescriptor](#recipedescriptor)!]! |  |
| `graph` | [RecipeGraph](#recipegraph)! | Flat vertices-and-edges representation of this composite recipe tree with
Singleton deduplication pre-applied. Used by the Builder UI to visualize
a composite recipe in a single round trip regardless of tree depth.
Atomic (leaf) recipes return a single-vertex graph. |

---

#### `RecipeDetailLoading`

**Service:** recipemarketplace | **Implements:** [RecipeDetail](#recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#datetime)! |  |

---

#### `RecipeGraph`

**Service:** recipemarketplace

Flat vertices-and-edges representation of a composite recipe with
`org.openrewrite.Singleton` deduplication pre-applied. Produced by the
marketplace backend and served to visualization clients in one round trip.

| Field | Type | Description |
|-------|------|-------------|
| `rootVertexId` | Int! | ID of the root (entry-point) vertex in the graph. |
| `vertices` | [[RecipeGraphVertex](#recipegraphvertex)!]! |  |
| `edges` | [[RecipeGraphEdge](#recipegraphedge)!]! |  |

---

#### `RecipeGraphEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `from` | Int! |  |
| `to` | Int! |  |
| `type` | [RecipeGraphEdgeType](#recipegraphedgetype)! |  |

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
| `descriptor` | [RecipeDescriptor](#recipedescriptor)! | The recipe this vertex represents. Carries recipe name (as `id`),
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
| `edges` | [[RecipeInstallationEdge](#recipeinstallationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `RecipeInstallationEdge`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeInstallation](#recipeinstallation)! |  |
| `cursor` | String! |  |
| `requestedBy` | [User](#user)! | The user who initiated this installation |
| `user` | [User](#user) | The user whose marketplace this installation was made to. If the installation is a
universal or organization installation, this field will be null. |
| `organization` | [Organization](#organization) | The organization to which this installation was made. If the installation is a universal
or user installation, this field will be null. |

---

#### `RecipeInstallationError`

**Service:** recipemarketplace | **Implements:** [RecipeInstallation](#recipeinstallation)

Installation failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! | Human-readable error message. |

---

#### `RecipeInstallationFinished`

**Service:** recipemarketplace | **Implements:** [RecipeInstallation](#recipeinstallation)

Installation completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `recipes` | [[RecipeDescriptor](#recipedescriptor)!]! | The recipes that were installed. |

---

#### `RecipeInstallationProcessing`

**Service:** recipemarketplace | **Implements:** [RecipeInstallation](#recipeinstallation)

Installation is actively loading and resolving the recipe bundle.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `progress` | Float | Progress from 0.0 to 1.0, if available. |

---

#### `RecipeInstallationQueued`

**Service:** recipemarketplace | **Implements:** [RecipeInstallation](#recipeinstallation)

Installation is queued and waiting to be processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

---

#### `RecipeMarketplace`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `categories` | (first: Int = 100, after: String, where: [RecipeCategoryWhereInput](#recipecategorywhereinput), orderBy: [[RecipeCategoryOrderByInput](#recipecategoryorderbyinput)!]): [RecipeCategoryConnection](#recipecategoryconnection)! |  |
| `recipes` | (first: Int = 100, after: String, where: [RecipeWhereInput](#recipewhereinput), orderBy: [[RecipeOrderByInput](#recipeorderbyinput)!]): [RecipeDescriptorConnection](#recipedescriptorconnection)! |  |
| `installations` | (first: Int = 50, after: String, where: [RecipeInstallationWhereInput](#recipeinstallationwhereinput), orderBy: [[RecipeInstallationOrderByInput](#recipeinstallationorderbyinput)!]): [RecipeInstallationConnection](#recipeinstallationconnection)! |  |

---

#### `RecipeOptionValue`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#object)! |  |

---

#### `RecipeOptionsMessage`

**Service:** moddy | **Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `options` | [[Option](#option)!]! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

---

#### `RecipeRunFileChange`

**Service:** changesetreader | **Implements:** [FileChange](#filechange)

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#path)! |  |
| `beforeSourcePath` | [Path](#path) |  |
| `afterSourcePath` | [Path](#path) |  |
| `diff` | (markupLevel: [MarkupLevel](#markuplevel) = ERROR, showWhitespaceOnlyChanges: Boolean = true): [Patch](#patch) |  |
| `recipesThatMadeChanges` | [[[RecipeDescriptor](#recipedescriptor)!]!]! | Recipe chains that contributed changes to this file. Each inner list is one
mutation event's call stack, ordered root composite first to leaf recipe last
(the leaf is the narrowest recipe that actually performed the change). |

---

#### `RecipeRunMessage`

**Service:** moddy | **Implements:** [Message](#message)

Long-running recipe execution started by the LLM. Carries a typed
progress envelope while IN_PROGRESS — clients should read `progress`
rather than poking at a free-form payload. When the run reaches a
terminal state, `recipeRun` resolves via federation.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `recipeRun` | [OrganizationRecipeRun](#organizationreciperun) |  |
| `progress` | [RecipeRunProgress](#reciperunprogress) | Typed progress snapshot while the run is IN_PROGRESS. |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

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
| `timeSavings` | [Duration](#duration) |  |
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

**Service:** moddy | **Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `searchResults` | [[RecipeDescriptor](#recipedescriptor)!]! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

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
| `since` | [DateTime](#datetime)! | The timestamp cursors were rewound to. |

---

#### `Repository`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `path` | String! |  |
| `branch` | String! |  |
| `changeset` | String |  |
| `lstArtifact` | [LstArtifact](#lstartifact)! |  |

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

**Service:** changesetreader | **Implements:** [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

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
| `edges` | [[RepositoryChangesetEdge](#repositorychangesetedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
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
| `node` | [RepositoryChangeset](#repositorychangeset)! |  |
| `cursor` | String! |  |

---

#### `RepositoryCommitCanceled`

**Service:** changesetcommitter | **Implements:** [RepositoryCommit](#repositorycommit)

Repository commit was canceled.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitConnection`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryCommitEdge](#repositorycommitedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |
| `completedCount` | Int! | Count of repository commits that have reached a terminal state
(succeeded, failed, canceled, or no changes). Pair with `count`
to show progress: "Completed X / Y". |

---

#### `RepositoryCommitEdge`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryCommit](#repositorycommit)! |  |
| `cursor` | String! |  |

---

#### `RepositoryCommitFailed`

**Service:** changesetcommitter | **Implements:** [RepositoryCommit](#repositorycommit)

Repository commit failed with an error.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `errorMessage` | String! | Human-readable error message. |
| `retryCount` | Int | Number of retry attempts made. |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitNoChanges`

**Service:** changesetcommitter | **Implements:** [RepositoryCommit](#repositorycommit)

Repository commit completed but yielded no changes.
Generally occurs when applying a patch does not produce any changes to commit.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitQueued`

**Service:** changesetcommitter | **Implements:** [RepositoryCommit](#repositorycommit)

Repository commit is queued and waiting to be processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `rateLimitReset` | [DateTime](#datetime) | Time when rate limit expires (if rate limited). |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryCommitRunning`

**Service:** changesetcommitter | **Implements:** [RepositoryCommit](#repositorycommit)

Repository commit is actively being processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

---

#### `RepositoryConnection`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryEdge](#repositoryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `RepositoryEdge`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Repository](#repository)! |  |
| `cursor` | String! |  |

---

#### `RepositoryRecipeRunCanceled`

**Service:** changesetreader | **Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

---

#### `RepositoryRecipeRunConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryRecipeRunEdge](#repositoryreciperunedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `RepositoryRecipeRunEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryRecipeRun](#repositoryreciperun)! |  |
| `cursor` | String! |  |

---

#### `RepositoryRecipeRunError`

**Service:** changesetreader | **Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime) |  |
| `errorReason` | [RepositoryErrorReason](#repositoryerrorreason) |  |
| `message` | String |  |

---

#### `RepositoryRecipeRunFinished`

**Service:** changesetreader | **Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime) |  |
| `timeSavings` | [Duration](#duration) |  |

---

#### `RepositoryRecipeRunNoLst`

**Service:** changesetreader | **Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

---

#### `RepositoryRecipeRunQueued`

**Service:** changesetreader | **Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |
| `queuedAt` | [DateTime](#datetime) |  |

---

#### `RepositoryRecipeRunRunning`

**Service:** changesetreader | **Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |
| `startedAt` | [DateTime](#datetime) |  |

---

#### `ReviewStatus`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `approvedBy` | [String!] |  |
| `reviewDecision` | [ReviewDecision](#reviewdecision)! |  |

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
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `region` | String |  |
| `endpointUrl` | String |  |

---

#### `ScmTokenInfo`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `created` | [DateTime](#datetime)! |  |
| `expiresAt` | [DateTime](#datetime) |  |

---

#### `SearchResult`

**Service:** corechangeset | **Implements:** [Marker](#marker)

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
| `conversation` | [Conversation](#conversation)! |  |
| `initialCursor` | String! |  |
| `turnState` | [ConversationTurnState](#conversationturnstate)! |  |

---

#### `TextMessage`

**Service:** moddy | **Implements:** [Message](#message)

A text message from either the human user or the chatbot.
Check the `user` field to distinguish sender.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `content` | [Markdown](#markdown)! |  |
| `truncated` | Boolean! | True when the LLM response was cut off by the token limit. |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

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
| `moreHelp` | [[MoreHelpLink](#morehelplink)!] |  |
| `loginText` | String |  |
| `loginLinks` | [[MoreHelpLink](#morehelplink)!] |  |
| `cliDownloadInstructions` | [CliDownloadInstructionLink](#clidownloadinstructionlink) |  |

---

#### `User`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `username` | String |  |
| `role` | [UserRole](#userrole) |  |
| `lastActive` | [DateTime](#datetime) |  |
| `tokens` | (first: Int = 100, after: String, where: [AccessTokenWhereInput](#accesstokenwhereinput), orderBy: [[AccessTokenOrderByInput](#accesstokenorderbyinput)!]): [AccessTokenConnection](#accesstokenconnection)! |  |
| `email` | String! |  |
| `moddy` | [Moddy](#moddy)! |  |

---

#### `UserConnection`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[UsersEdge](#usersedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `UsersEdge`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `node` | [User](#user)! |  |
| `cursor` | String! |  |

---

#### `VisualizationAvailable`

**Service:** changesetreader | **Implements:** [Visualization](#visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |
| `changesetId` | ID! | The changeset (recipe run or batch change) this visualization is available for. |

---

#### `VisualizationConnection`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[VisualizationEdge](#visualizationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `VisualizationDescriptor`

**Service:** changesetvisualizer

| Field | Type | Description |
|-------|------|-------------|
| `options` | [[VisualizationOption](#visualizationoption)!]! |  |
| `name` | String! |  |
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown)! |  |
| `image` | [Base64](#base64)! |  |

---

#### `VisualizationEdge`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Visualization](#visualization)! |  |
| `cursor` | String! |  |

---

#### `VisualizationError`

**Service:** changesetreader | **Implements:** [Visualization](#visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#visualizationrepositoryconnection)! |  |

---

#### `VisualizationFinished`

**Service:** changesetreader | **Implements:** [Visualization](#visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `duration` | [Duration](#duration) |  |
| `output` | [VisualizationOutput](#visualizationoutput)! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#visualizationrepositoryconnection)! |  |

---

#### `VisualizationImageOutput`

**Service:** changesetreader | **Implements:** [VisualizationOutput](#visualizationoutput)

| Field | Type | Description |
|-------|------|-------------|
| `format` | [ImageFormat](#imageformat)! |  |
| `data` | [Base64](#base64)! |  |

---

#### `VisualizationOption`

**Service:** changesetvisualizer

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#object) |  |
| `type` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `example` | String |  |
| `valid` | [String] |  |
| `required` | Boolean! |  |

---

#### `VisualizationPlotlyOutput`

**Service:** changesetreader | **Implements:** [VisualizationOutput](#visualizationoutput)

| Field | Type | Description |
|-------|------|-------------|
| `data` | [Base64](#base64)! | Plotly JSON data (MIME type: application/vnd.plotly.v1+json) |

---

#### `VisualizationProcessing`

**Service:** changesetreader | **Implements:** [Visualization](#visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#visualizationrepositoryconnection)! |  |

---

#### `VisualizationRepository`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `state` | [VisualizationRepositoryRunState](#visualizationrepositoryrunstate)! |  |
| `stateMessage` | String |  |
| `repository` | [Repository](#repository)! |  |

---

#### `VisualizationRepositoryConnection`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[VisualizationRepositoryEdge](#visualizationrepositoryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

---

#### `VisualizationRepositoryEdge`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `node` | [VisualizationRepository](#visualizationrepository)! |  |
| `cursor` | String! |  |

---

#### `YamlRecipeBundle`

**Service:** changesetreader | **Implements:** [RecipeBundle](#recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | [Base64](#base64)! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |
| `primary` | [RecipeDescriptor](#recipedescriptor) | The primary recipe in this bundle. When specified, only this recipe
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
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

---

#### `ChangelogEntry`

**Service:** changelogreader

A single entry in the changelog — either a commit or a pull request.
Use `__typename` to distinguish between `ChangelogCommit` and `ChangelogPullRequest`.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! | Commit message (for commits) or PR title (for pull requests). |
| `author` | [ChangeParticipant](#changeparticipant)! | The author of the commit or PR. |
| `repository` | [Repository](#repository)! | The repository this entry belongs to. |
| `url` | String! | URL to the commit or PR in the VCS provider. |
| `branch` | String! | The target branch (for PRs) or the branch committed to (for commits). |
| `updatedAt` | [DateTime](#datetime)! | When this entry was last updated in the VCS provider. |
| `createdAt` | [DateTime](#datetime)! | When this entry was created in the VCS provider. |
| `changeset` | [OrganizationChangeset](#organizationchangeset) | If this activity was originated by Moderne, the changeset it belongs to. |
| `buildState` | [BuildState](#buildstate) | CI status (e.g. from GitHub Actions, GitLab pipelines).
Null if no CI is configured or status has not been fetched yet. |
| `diffstat` | [DiffStat](#diffstat)! | Lines added and removed. |

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
| `dataTable` | [DataTableDescriptor](#datatabledescriptor)! |  |
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
| `startedAt` | [DateTime](#datetime)! | When this DevCenter run started. |
| `changeset` | [OrganizationChangeset](#organizationchangeset) | The underlying recipe run changeset. |

---

#### `FileChange`

**Service:** corechangeset

A change to a single file within a repository changeset.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#path)! | Path to the file relative to repository root. |
| `beforeSourcePath` | [Path](#path) | The source path before the change (from the diff's `--- a/...` line).
Null for newly created files. |
| `afterSourcePath` | [Path](#path) | The source path after the change (from the diff's `+++ b/...` line).
Null for deleted files. |
| `diff` | (markupLevel: [MarkupLevel](#markuplevel) = ERROR, showWhitespaceOnlyChanges: Boolean = true): [Patch](#patch) | Get the diff for this file. |

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
| `user` | [User](#user)! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

---

#### `OrganizationCommit`

**Service:** changesetcommitter

An organization-level commit operation represents applying changes across multiple
repositories. Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! | The user who initiated the commit. |
| `options` | [CommitOptions](#commitoptions)! | The commit options (branch, PR settings, etc.). |
| `message` | String! | The commit message. |
| `extendedMessage` | [Base64](#base64) | Extended commit message (Base64 encoded). |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#repositorycommitconnection)! | Paginated results per repository. |

---

#### `PullRequestAction`

**Service:** changelogreader

The state of an individual repository within a `BulkPullRequestAction`.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |

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
| `startedAt` | [DateTime](#datetime)! |  |

---

#### `RecipeInstallation`

**Service:** recipemarketplace

Common fields for all recipe installation states.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

---

#### `RepositoryChangeset`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! | Authorization status for accessing this repository's content.
Check this before accessing file results. |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! | File-level changes within this repository. |

---

#### `RepositoryCommit`

**Service:** changesetcommitter

A commit result for a single repository within an organization-level commit operation.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |

---

#### `RepositoryCommitSucceeded`

**Service:** changesetcommitter

Repository commit completed successfully.
Use `__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String | Link to the commit or pull request result. |

---

#### `RepositoryRecipeRun`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

---

#### `ScmConnection`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

---

#### `Visualization`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |

---

#### `VisualizationOutput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `data` | [Base64](#base64)! |  |

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
| `field` | [AccessTokenOrderByField](#accesstokenorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `AccessTokenWhereInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `description` | [StringFilter](#stringfilter) |  |
| `created` | [DateTimeFilter](#datetimefilter) |  |
| `expiresAt` | [DateTimeFilter](#datetimefilter) |  |
| `_and` | [[AccessTokenWhereInput](#accesstokenwhereinput)!] |  |
| `_or` | [[AccessTokenWhereInput](#accesstokenwhereinput)!] |  |
| `_not` | [AccessTokenWhereInput](#accesstokenwhereinput) |  |

---

#### `AuditActionTypeFilter`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditActionType](#auditactiontype) |  |
| `_neq` | [AuditActionType](#auditactiontype) |  |
| `_in` | [[AuditActionType](#auditactiontype)!] |  |
| `_nin` | [[AuditActionType](#auditactiontype)!] |  |

---

#### `AuditLogExportFormatFilter`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditLogExportFormat](#auditlogexportformat) |  |
| `_neq` | [AuditLogExportFormat](#auditlogexportformat) |  |
| `_in` | [[AuditLogExportFormat](#auditlogexportformat)!] |  |
| `_nin` | [[AuditLogExportFormat](#auditlogexportformat)!] |  |

---

#### `AuditLogOrderByInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AuditLogOrderByField](#auditlogorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `AuditLogWhereInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `user` | [UserWhereInput](#userwhereinput) |  |
| `target` | [StringFilter](#stringfilter) |  |
| `action` | [StringFilter](#stringfilter) |  |
| `actionType` | [AuditActionTypeFilter](#auditactiontypefilter) |  |
| `outcome` | [AuditOutcomeFilter](#auditoutcomefilter) |  |
| `description` | [StringFilter](#stringfilter) |  |
| `timestamp` | [DateTimeFilter](#datetimefilter) |  |
| `_and` | [[AuditLogWhereInput](#auditlogwhereinput)!] |  |
| `_or` | [[AuditLogWhereInput](#auditlogwhereinput)!] |  |
| `_not` | [AuditLogWhereInput](#auditlogwhereinput) |  |

---

#### `AuditLogsDownloadOrderByInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AuditLogsDownloadOrderByField](#auditlogsdownloadorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `AuditLogsDownloadWhereInput`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `format` | [AuditLogExportFormatFilter](#auditlogexportformatfilter) |  |
| `_and` | [[AuditLogsDownloadWhereInput](#auditlogsdownloadwhereinput)!] |  |
| `_or` | [[AuditLogsDownloadWhereInput](#auditlogsdownloadwhereinput)!] |  |
| `_not` | [AuditLogsDownloadWhereInput](#auditlogsdownloadwhereinput) |  |

---

#### `AuditOutcomeFilter`

**Service:** auditreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditOutcome](#auditoutcome) |  |
| `_neq` | [AuditOutcome](#auditoutcome) |  |

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
| `_eq` | [BuildState](#buildstate) |  |
| `_neq` | [BuildState](#buildstate) |  |
| `_in` | [[BuildState](#buildstate)!] |  |
| `_nin` | [[BuildState](#buildstate)!] |  |

---

#### `BulkPullRequestActionOrderByInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [BulkPullRequestActionOrderByField](#bulkpullrequestactionorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `BulkPullRequestActionStateFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [BulkPullRequestActionState](#bulkpullrequestactionstate) |  |
| `_neq` | [BulkPullRequestActionState](#bulkpullrequestactionstate) |  |
| `_in` | [[BulkPullRequestActionState](#bulkpullrequestactionstate)!] |  |
| `_nin` | [[BulkPullRequestActionState](#bulkpullrequestactionstate)!] |  |

---

#### `BulkPullRequestActionWhereInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `actionType` | [PullRequestActionTypeFilter](#pullrequestactiontypefilter) |  |
| `state` | [BulkPullRequestActionStateFilter](#bulkpullrequestactionstatefilter) |  |
| `startedAt` | [DateTimeFilter](#datetimefilter) | Filter by `startedAt`. Matches RUNNING/FINISHED/ERROR/CANCELED states that
have a startedAt value; QUEUED entries (no startedAt) are excluded when a
bound is supplied. |
| `user` | [UserWhereInput](#userwhereinput) |  |
| `_and` | [[BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput)!] |  |
| `_or` | [[BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput)!] |  |
| `_not` | [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput) |  |

---

#### `ChangelogAuthorWhereInput`

**Service:** changelogreader

Filter by changelog author.

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#stringfilter) |  |
| `email` | [StringFilter](#stringfilter) |  |
| `username` | [StringFilter](#stringfilter) |  |
| `role` | [ContributorRole](#contributorrole) | The role of the contributor to filter on. |
| `_and` | [[ChangelogAuthorWhereInput](#changelogauthorwhereinput)!] |  |
| `_or` | [[ChangelogAuthorWhereInput](#changelogauthorwhereinput)!] |  |
| `_not` | [ChangelogAuthorWhereInput](#changelogauthorwhereinput) |  |

---

#### `ChangelogEntryOrderByInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ChangelogEntryOrderByField](#changelogentryorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `ChangelogEntryTypeFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ChangelogEntryType](#changelogentrytype) |  |
| `_neq` | [ChangelogEntryType](#changelogentrytype) |  |
| `_in` | [[ChangelogEntryType](#changelogentrytype)!] |  |
| `_nin` | [[ChangelogEntryType](#changelogentrytype)!] |  |

---

#### `ChangelogEntryWhereInput`

**Service:** changelogreader

Filter input for changelog entries.

| Field | Type | Description |
|-------|------|-------------|
| `entryType` | [ChangelogEntryTypeFilter](#changelogentrytypefilter) | Filter by entry type (COMMIT or PULL_REQUEST). |
| `title` | [StringFilter](#stringfilter) | Full-text search on title. |
| `author` | [ChangelogAuthorWhereInput](#changelogauthorwhereinput) | Filter by author. |
| `repositoryPath` | [StringFilter](#stringfilter) | Filter by repository path. |
| `repositoryOrigin` | [StringFilter](#stringfilter) | Filter by repository origin. |
| `updatedAt` | [DateTimeFilter](#datetimefilter) | Filter by last updated time. |
| `createdAt` | [DateTimeFilter](#datetimefilter) | Filter by creation time. |
| `pullRequestState` | [PullRequestStateFilter](#pullrequeststatefilter) | Filter by pull request state (only applies to PRs). |
| `buildState` | [BuildStateFilter](#buildstatefilter) | Filter by CI state. |
| `reviewDecision` | [ReviewDecisionFilter](#reviewdecisionfilter) | Filter by review decision. |
| `changesetId` | [StringFilter](#stringfilter) | Filter by changeset ID. |
| `_and` | [[ChangelogEntryWhereInput](#changelogentrywhereinput)!] |  |
| `_or` | [[ChangelogEntryWhereInput](#changelogentrywhereinput)!] |  |
| `_not` | [ChangelogEntryWhereInput](#changelogentrywhereinput) |  |

---

#### `ChangelogParticipantOrderByInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ChangelogParticipantOrderByField](#changelogparticipantorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `ChangelogParticipantWhereInput`

**Service:** changelogreader

Filter input for participants.

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#stringfilter) |  |
| `email` | [StringFilter](#stringfilter) |  |
| `username` | [StringFilter](#stringfilter) |  |
| `role` | [ContributorRole](#contributorrole) | Filter participants by role. |
| `updatedAt` | [DateTimeFilter](#datetimefilter) | Scopes participant aggregation to entries updated within this window.
Defaults to last 30 days if not specified. |
| `_and` | [[ChangelogParticipantWhereInput](#changelogparticipantwhereinput)!] |  |
| `_or` | [[ChangelogParticipantWhereInput](#changelogparticipantwhereinput)!] |  |
| `_not` | [ChangelogParticipantWhereInput](#changelogparticipantwhereinput) |  |

---

#### `CommitInput`

**Service:** changesetcommitter

Input for creating a commit from a changeset.

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | ID | Organization ID for determining available commit options. |
| `changesetId` | ID! | Changeset ID (e.g., recipe run ID, batch changeset ID).
Resolved via federation to an OrganizationChangeset. |
| `repositories` | [[RepositoryChangesetWhereInput](#repositorychangesetwhereinput)!] | Filter which repositories and files to include.
Evaluated in order - first matching rule wins for each repository.
Put repo-specific rules first, global fallback rules last.
If empty or not provided, all repositories and files in the changeset are included. |
| `branchName` | String | If unset, commit to the branch that the LST was generated from. |
| `message` | String! | Commit message. |
| `extendedMessage` | [Base64](#base64) | Extended commit message (Base64 encoded). |
| `gpgKey` | [GpgInput](#gpginput) | GPG key for signing commits. |
| `email` | String | Email to author commit with. Verified against your emails (public and private)
that are verified in your SCM provider. If left blank, your first email will be used. |
| `scmAccessTokens` | [[ScmAccessToken](#scmaccesstoken)!] | Optional SCM access tokens keyed by origin. When provided, these are used
instead of stored OAuth tokens for the matching origin. |
| `strategy` | [CommitStrategyInput](#commitstrategyinput)! | How to deliver the commit. Choose one strategy. |

---

#### `CommitStrategyInput`

**Service:** changesetcommitter

Commit delivery strategy. Choose one option.

| Field | Type | Description |
|-------|------|-------------|
| `direct` | [DirectCommitInput](#directcommitinput) | Push directly to the origin remote. |
| `fork` | [ForkCommitInput](#forkcommitinput) | Push to a fork of the origin repository. |
| `pullRequest` | [PullRequestCommitInput](#pullrequestcommitinput) | Create a pull request from a branch on the origin remote. |
| `forkAndPullRequest` | [ForkAndPullRequestCommitInput](#forkandpullrequestcommitinput) | Create a pull request from a branch on a fork. |

---

#### `ConnectorOrderByInput`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ConnectorOrderByField](#connectororderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `ConnectorToolTypeFilter`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ConnectorToolType](#connectortooltype) |  |
| `_in` | [[ConnectorToolType](#connectortooltype)!] |  |

---

#### `ConnectorWhereInput`

**Service:** gateway

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `nickname` | [StringFilter](#stringfilter) |  |
| `version` | [StringFilter](#stringfilter) |  |
| `toolType` | [ConnectorToolTypeFilter](#connectortooltypefilter) |  |
| `_and` | [[ConnectorWhereInput](#connectorwhereinput)!] |  |
| `_or` | [[ConnectorWhereInput](#connectorwhereinput)!] |  |
| `_not` | [ConnectorWhereInput](#connectorwhereinput) |  |

---

#### `ConversationOrderByInput`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ConversationOrderByField](#conversationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `ConversationWhereInput`

**Service:** moddy

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `user` | [StringFilter](#stringfilter) |  |
| `startedAt` | [DateTimeFilter](#datetimefilter) |  |
| `lastUpdatedAt` | [DateTimeFilter](#datetimefilter) |  |
| `_and` | [[ConversationWhereInput](#conversationwhereinput)!] |  |
| `_or` | [[ConversationWhereInput](#conversationwhereinput)!] |  |
| `_not` | [ConversationWhereInput](#conversationwhereinput) |  |

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
| `repositories` | [[RepositoryInput](#repositoryinput)!] | Repositories to include in the organization. |

---

#### `DataTableFormatFilter`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DataTableFormat](#datatableformat) |  |
| `_neq` | [DataTableFormat](#datatableformat) |  |
| `_in` | [[DataTableFormat](#datatableformat)!] |  |
| `_nin` | [[DataTableFormat](#datatableformat)!] |  |

---

#### `DataTableOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | [DataTableOrderByField](#datatableorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `DataTableWhereInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `dataTable` | [StringFilter](#stringfilter) |  |
| `group` | [StringFilter](#stringfilter) |  |
| `format` | [DataTableFormatFilter](#datatableformatfilter) |  |
| `_and` | [[DataTableWhereInput](#datatablewhereinput)!] |  |
| `_or` | [[DataTableWhereInput](#datatablewhereinput)!] |  |
| `_not` | [DataTableWhereInput](#datatablewhereinput) |  |

---

#### `DateTimeFilter`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DateTime](#datetime) |  |
| `_neq` | [DateTime](#datetime) |  |
| `_gt` | [DateTime](#datetime) |  |
| `_gte` | [DateTime](#datetime) |  |
| `_lt` | [DateTime](#datetime) |  |
| `_lte` | [DateTime](#datetime) |  |

---

#### `DevCenterRunOrderByInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [DevCenterRunOrderByField](#devcenterrunorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `DevCenterRunStateFilter`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DevCenterRunState](#devcenterrunstate) |  |
| `_neq` | [DevCenterRunState](#devcenterrunstate) |  |
| `_in` | [[DevCenterRunState](#devcenterrunstate)!] |  |
| `_nin` | [[DevCenterRunState](#devcenterrunstate)!] |  |

---

#### `DevCenterRunWhereInput`

**Service:** changesetreader

Filter input for DevCenter run queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) | Filter by run ID. Use `where: \{ id: \{ _eq: "run-id" } }` to get a specific run. |
| `state` | [DevCenterRunStateFilter](#devcenterrunstatefilter) | Filter by run state. |
| `startedAt` | [DateTimeFilter](#datetimefilter) | Filter by start time. |
| `_and` | [[DevCenterRunWhereInput](#devcenterrunwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[DevCenterRunWhereInput](#devcenterrunwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [DevCenterRunWhereInput](#devcenterrunwhereinput) | Logical NOT - negates the condition. |

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
| `field` | [FileChangeOrderByField](#filechangeorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `FileChangeWhereInput`

**Service:** changesetcommitter

Filter for file changes.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [PathFilter](#pathfilter) | Filter by file path using glob patterns. |
| `_and` | [[FileChangeWhereInput](#filechangewhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[FileChangeWhereInput](#filechangewhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [FileChangeWhereInput](#filechangewhereinput) | Logical NOT - negates the condition. |

---

#### `ForkAndPullRequestCommitInput`

**Service:** changesetcommitter

Create a pull request from a branch on a fork.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | String | Organization to create the fork in. If unset, creates in user's personal account. |
| `prefixOrganizationName` | Boolean | Prefix the fork name with the origin organization to avoid name collisions. |
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | [Base64](#base64) | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `maintainerCanModify` | Boolean | GitHub only: allow maintainers to edit the pull request. |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | Auto-merge method after checks pass. Null means no auto-merge.
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
| `published` | [DateTimeFilter](#datetimefilter) |  |
| `available` | [BooleanFilter](#booleanfilter) |  |
| `_and` | [[LstArtifactWhereInput](#lstartifactwhereinput)!] |  |
| `_or` | [[LstArtifactWhereInput](#lstartifactwhereinput)!] |  |
| `_not` | [LstArtifactWhereInput](#lstartifactwhereinput) |  |

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
| `field` | [OrganizationChangesetOrderByField](#organizationchangesetorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `OrganizationChangesetTypeFilter`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [OrganizationChangesetType](#organizationchangesettype) |  |
| `_neq` | [OrganizationChangesetType](#organizationchangesettype) |  |
| `_in` | [[OrganizationChangesetType](#organizationchangesettype)!] |  |
| `_nin` | [[OrganizationChangesetType](#organizationchangesettype)!] |  |

---

#### `OrganizationChangesetWhereInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `type` | [OrganizationChangesetTypeFilter](#organizationchangesettypefilter) |  |
| `createdAt` | [DateTimeFilter](#datetimefilter) |  |
| `user` | [StringFilter](#stringfilter) |  |
| `_and` | [[OrganizationChangesetWhereInput](#organizationchangesetwhereinput)!] |  |
| `_or` | [[OrganizationChangesetWhereInput](#organizationchangesetwhereinput)!] |  |
| `_not` | [OrganizationChangesetWhereInput](#organizationchangesetwhereinput) |  |

---

#### `OrganizationCommitOrderByInput`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationCommitOrderByField](#organizationcommitorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `OrganizationCommitWhereInput`

**Service:** changesetcommitter

Filter input for organization-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) | Filter by commit ID. |
| `startedAt` | [DateTimeFilter](#datetimefilter) | Filter by when the commit started. |
| `_and` | [[OrganizationCommitWhereInput](#organizationcommitwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[OrganizationCommitWhereInput](#organizationcommitwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [OrganizationCommitWhereInput](#organizationcommitwhereinput) | Logical NOT - negates the condition. |

---

#### `OrganizationOrderByInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationOrderByField](#organizationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `OrganizationRecipeRunOrderByInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationRecipeRunOrderByField](#organizationreciperunorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `OrganizationRecipeRunStateFilter`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [OrganizationRecipeRunState](#organizationreciperunstate) |  |
| `_neq` | [OrganizationRecipeRunState](#organizationreciperunstate) |  |
| `_in` | [[OrganizationRecipeRunState](#organizationreciperunstate)!] |  |
| `_nin` | [[OrganizationRecipeRunState](#organizationreciperunstate)!] |  |

---

#### `OrganizationRecipeRunWhereInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `state` | [OrganizationRecipeRunStateFilter](#organizationreciperunstatefilter) |  |
| `startedAt` | [DateTimeFilter](#datetimefilter) |  |
| `user` | [StringFilter](#stringfilter) |  |
| `_and` | [[OrganizationRecipeRunWhereInput](#organizationreciperunwhereinput)!] |  |
| `_or` | [[OrganizationRecipeRunWhereInput](#organizationreciperunwhereinput)!] |  |
| `_not` | [OrganizationRecipeRunWhereInput](#organizationreciperunwhereinput) |  |

---

#### `OrganizationWhereInput`

**Service:** organization

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#stringfilter) |  |
| `depth` | [IntFilter](#intfilter) | Filter by depth in the organization hierarchy.
The root organization ("_root") is depth 0, its direct children are depth 1, etc. |
| `_and` | [[OrganizationWhereInput](#organizationwhereinput)!] |  |
| `_or` | [[OrganizationWhereInput](#organizationwhereinput)!] |  |
| `_not` | [OrganizationWhereInput](#organizationwhereinput) |  |

---

#### `PathFilter`

**Service:** coregraphql

Filter for file paths using glob patterns.

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [Path](#path) | Exact path match. |
| `_in` | [[Path](#path)!] | Match any of the exact paths. |
| `_nin` | [[Path](#path)!] | Exclude any of the exact paths. |
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
| `field` | [PullRequestActionOrderByField](#pullrequestactionorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `PullRequestActionStateFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestActionState](#pullrequestactionstate) |  |
| `_neq` | [PullRequestActionState](#pullrequestactionstate) |  |
| `_in` | [[PullRequestActionState](#pullrequestactionstate)!] |  |
| `_nin` | [[PullRequestActionState](#pullrequestactionstate)!] |  |

---

#### `PullRequestActionTypeFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestActionType](#pullrequestactiontype) |  |
| `_neq` | [PullRequestActionType](#pullrequestactiontype) |  |
| `_in` | [[PullRequestActionType](#pullrequestactiontype)!] |  |
| `_nin` | [[PullRequestActionType](#pullrequestactiontype)!] |  |

---

#### `PullRequestActionWhereInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `state` | [PullRequestActionStateFilter](#pullrequestactionstatefilter) |  |
| `_and` | [[PullRequestActionWhereInput](#pullrequestactionwhereinput)!] |  |
| `_or` | [[PullRequestActionWhereInput](#pullrequestactionwhereinput)!] |  |
| `_not` | [PullRequestActionWhereInput](#pullrequestactionwhereinput) |  |

---

#### `PullRequestCommitInput`

**Service:** changesetcommitter

Create a pull request from a branch on the origin remote.

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | [Base64](#base64) | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | Auto-merge method after checks pass. Null means no auto-merge.
Best effort - silently ignored if not supported by the repository. |
| `recreateClosedPullRequest` | Boolean | Recreate pull request if it was previously closed. |

---

#### `PullRequestInput`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [RepositoryInput](#repositoryinput)! |  |
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
| `where` | [ChangelogEntryWhereInput](#changelogentrywhereinput) | Filter for the base set of PRs. Omit to start with an empty set. |
| `pullRequests` | [PullRequestSelectionModifier](#pullrequestselectionmodifier) | Modify the base set by including or excluding specific PRs. |

---

#### `PullRequestSelectionModifier`

**Service:** changelogreader

Modifies a PR selection by either including or excluding specific PRs.
Exactly one field must be set.

| Field | Type | Description |
|-------|------|-------------|
| `include` | [[PullRequestInput](#pullrequestinput)!] | Add these PRs to the base set. |
| `exclude` | [[PullRequestInput](#pullrequestinput)!] | Remove these PRs from the base set. |

---

#### `PullRequestStateFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestState](#pullrequeststate) |  |
| `_neq` | [PullRequestState](#pullrequeststate) |  |
| `_in` | [[PullRequestState](#pullrequeststate)!] |  |
| `_nin` | [[PullRequestState](#pullrequeststate)!] |  |

---

#### `RecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `maven` | [MavenRecipeBundleInput](#mavenrecipebundleinput) |  |
| `npm` | [NpmRecipeBundleInput](#npmrecipebundleinput) |  |
| `nuget` | [NugetRecipeBundleInput](#nugetrecipebundleinput) |  |
| `yaml` | [YamlRecipeBundleInput](#yamlrecipebundleinput) |  |
| `pip` | [PipRecipeBundleInput](#piprecipebundleinput) |  |
| `go` | [GoRecipeBundleInput](#gorecipebundleinput) |  |

---

#### `RecipeBundleOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeBundleOrderByField](#recipebundleorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RecipeBundleWhereInput`

**Service:** recipemarketplace

Filter input for RecipeBundle queries.

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | [StringFilter](#stringfilter) | Filter by package name (e.g., "org.openrewrite:rewrite-java"). |
| `version` | [StringFilter](#stringfilter) | Filter by resolved version. |
| `requestedVersion` | [StringFilter](#stringfilter) | Filter by requested version (the version requested before resolution). |
| `ecosystem` | [RecipeEcosystemFilter](#recipeecosystemfilter) | Filter by ecosystem. |
| `_and` | [[RecipeBundleWhereInput](#recipebundlewhereinput)!] |  |
| `_or` | [[RecipeBundleWhereInput](#recipebundlewhereinput)!] |  |
| `_not` | [RecipeBundleWhereInput](#recipebundlewhereinput) |  |

---

#### `RecipeCategoryOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeCategoryOrderByField](#recipecategoryorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RecipeCategoryWhereInput`

**Service:** recipemarketplace

Filter input for RecipeCategory queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) | Filter by category ID. |
| `parentId` | [IDFilter](#idfilter) | Filter by parent category ID. Use null to find root categories. |
| `displayName` | [StringFilter](#stringfilter) | Filter by display name. |
| `_and` | [[RecipeCategoryWhereInput](#recipecategorywhereinput)!] |  |
| `_or` | [[RecipeCategoryWhereInput](#recipecategorywhereinput)!] |  |
| `_not` | [RecipeCategoryWhereInput](#recipecategorywhereinput) |  |

---

#### `RecipeEcosystemFilter`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RecipeEcosystem](#recipeecosystem) |  |
| `_neq` | [RecipeEcosystem](#recipeecosystem) |  |
| `_in` | [[RecipeEcosystem](#recipeecosystem)!] |  |
| `_nin` | [[RecipeEcosystem](#recipeecosystem)!] |  |

---

#### `RecipeInput`

**Service:** recipeworker

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | Fully-qualified recipe ID.
Example: `org.openrewrite.java.search.FindMethods` |
| `options` | [[RecipeOptionInput](#recipeoptioninput)!] |  |

---

#### `RecipeInstallationOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeInstallationOrderByField](#recipeinstallationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RecipeInstallationStatusFilter`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RecipeInstallationStatus](#recipeinstallationstatus) |  |
| `_neq` | [RecipeInstallationStatus](#recipeinstallationstatus) |  |
| `_in` | [[RecipeInstallationStatus](#recipeinstallationstatus)!] |  |
| `_nin` | [[RecipeInstallationStatus](#recipeinstallationstatus)!] |  |

---

#### `RecipeInstallationWhereInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `status` | [RecipeInstallationStatusFilter](#recipeinstallationstatusfilter) |  |
| `startedAt` | [DateTimeFilter](#datetimefilter) |  |
| `user` | [UserWhereInput](#userwhereinput) |  |
| `organization` | [IDFilter](#idfilter) |  |
| `bundle` | [RecipeBundleWhereInput](#recipebundlewhereinput) | Filter by bundle properties (packageName, ecosystem, version, etc.). |
| `_and` | [[RecipeInstallationWhereInput](#recipeinstallationwhereinput)!] |  |
| `_or` | [[RecipeInstallationWhereInput](#recipeinstallationwhereinput)!] |  |
| `_not` | [RecipeInstallationWhereInput](#recipeinstallationwhereinput) |  |

---

#### `RecipeOptionInput`

**Service:** recipeworker

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! | Option name. Example: `methodPattern` |
| `value` | [Object](#object)! | Option value. Example: `java.util.List add(..)` |

---

#### `RecipeOrderByInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeOrderByField](#recipeorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RecipeWhereInput`

**Service:** recipemarketplace

Filter input for Recipe queries.
Use `query` for semantic search, or use field filters for exact matching.

| Field | Type | Description |
|-------|------|-------------|
| `query` | String | Semantic search query - searches recipe names, descriptions, and content. |
| `id` | [StringFilter](#stringfilter) | Filter by recipe ID (fully qualified recipe name). |
| `displayName` | [StringFilter](#stringfilter) | Filter by display name. |
| `_and` | [[RecipeWhereInput](#recipewhereinput)!] |  |
| `_or` | [[RecipeWhereInput](#recipewhereinput)!] |  |
| `_not` | [RecipeWhereInput](#recipewhereinput) |  |

---

#### `RepositoryChangesetOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryChangesetOrderByField](#repositorychangesetorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RepositoryChangesetStateFilter`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RepositoryChangesetState](#repositorychangesetstate) |  |
| `_neq` | [RepositoryChangesetState](#repositorychangesetstate) |  |
| `_in` | [[RepositoryChangesetState](#repositorychangesetstate)!] |  |
| `_nin` | [[RepositoryChangesetState](#repositorychangesetstate)!] |  |

---

#### `RepositoryChangesetWhereInput`

**Service:** changesetcommitter

Filter for repository changesets.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [StringFilter](#stringfilter) | Filter by repository path. |
| `origin` | [StringFilter](#stringfilter) | Filter by repository origin. |
| `branch` | [StringFilter](#stringfilter) | Filter by repository branch. |
| `files` | [FileChangeWhereInput](#filechangewhereinput) | Filter files within matching repositories.
Useful for filtering to specific file patterns (e.g., all build.gradle.kts files). |
| `onlyWithResults` | Boolean | Only return repositories with results (filesWithResults > 0). |
| `state` | [RepositoryChangesetStateFilter](#repositorychangesetstatefilter) | Filter by repository result state. |
| `_and` | [[RepositoryChangesetWhereInput](#repositorychangesetwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[RepositoryChangesetWhereInput](#repositorychangesetwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [RepositoryChangesetWhereInput](#repositorychangesetwhereinput) | Logical NOT - negates the condition. |

---

#### `RepositoryCommitOrderByInput`

**Service:** changesetcommitter

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryCommitOrderByField](#repositorycommitorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RepositoryCommitWhereInput`

**Service:** changesetcommitter

Filter input for repository-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `_and` | [[RepositoryCommitWhereInput](#repositorycommitwhereinput)!] |  |
| `_or` | [[RepositoryCommitWhereInput](#repositorycommitwhereinput)!] |  |
| `_not` | [RepositoryCommitWhereInput](#repositorycommitwhereinput) |  |

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
| `field` | [RepositoryOrderByField](#repositoryorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RepositoryRecipeRunOrderByInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryRecipeRunOrderByField](#repositoryreciperunorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `RepositoryRecipeRunWhereInput`

**Service:** changesetreader

| Field | Type | Description |
|-------|------|-------------|
| `path` | [StringFilter](#stringfilter) |  |
| `origin` | [StringFilter](#stringfilter) |  |
| `_and` | [[RepositoryRecipeRunWhereInput](#repositoryreciperunwhereinput)!] |  |
| `_or` | [[RepositoryRecipeRunWhereInput](#repositoryreciperunwhereinput)!] |  |
| `_not` | [RepositoryRecipeRunWhereInput](#repositoryreciperunwhereinput) |  |

---

#### `RepositoryWhereInput`

**Service:** organization

Filter input for Repository queries using typed field filters.

| Field | Type | Description |
|-------|------|-------------|
| `origin` | [StringFilter](#stringfilter) |  |
| `path` | [StringFilter](#stringfilter) |  |
| `branch` | [StringFilter](#stringfilter) |  |
| `changeset` | [StringFilter](#stringfilter) |  |
| `lstArtifact` | [LstArtifactWhereInput](#lstartifactwhereinput) |  |
| `_and` | [[RepositoryWhereInput](#repositorywhereinput)!] | Logical AND - all conditions must match |
| `_or` | [[RepositoryWhereInput](#repositorywhereinput)!] | Logical OR - at least one condition must match |
| `_not` | [RepositoryWhereInput](#repositorywhereinput) | Logical NOT - negates the condition |

---

#### `ReviewDecisionFilter`

**Service:** changelogreader

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ReviewDecision](#reviewdecision) |  |
| `_neq` | [ReviewDecision](#reviewdecision) |  |
| `_in` | [[ReviewDecision](#reviewdecision)!] |  |
| `_nin` | [[ReviewDecision](#reviewdecision)!] |  |

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
| `recipe` | [RecipeInput](#recipeinput)! | The recipe to run with any configured options. |
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
| `repositories` | [[RepositoryInput](#repositoryinput)!] | Repositories to include in the organization. If provided, replaces the current list. |

---

#### `UserOrderByInput`

**Service:** authz

| Field | Type | Description |
|-------|------|-------------|
| `field` | [UserOrderByField](#userorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `UserWhereInput`

**Service:** coregraphql

| Field | Type | Description |
|-------|------|-------------|
| `email` | [StringFilter](#stringfilter) |  |
| `_and` | [[UserWhereInput](#userwhereinput)!] |  |
| `_or` | [[UserWhereInput](#userwhereinput)!] |  |
| `_not` | [UserWhereInput](#userwhereinput) |  |

---

#### `VisualizationOptionInput`

**Service:** changesetvisualizer

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#object)! |  |

---

#### `VisualizationOrderByInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `field` | [VisualizationOrderByField](#visualizationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

---

#### `VisualizationWhereInput`

**Service:** corechangeset

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `visualization` | [StringFilter](#stringfilter) |  |
| `_and` | [[VisualizationWhereInput](#visualizationwhereinput)!] |  |
| `_or` | [[VisualizationWhereInput](#visualizationwhereinput)!] |  |
| `_not` | [VisualizationWhereInput](#visualizationwhereinput) |  |

---

#### `YamlRecipeBundleInput`

**Service:** recipemarketplace

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | [Base64](#base64)! |  |
| `primary` | ID | The ID of the primary recipe in this bundle. When specified, only this recipe
will be shown in the marketplace categories, hiding other recipes from this bundle.
This is used for the Moderne Builder feature where users build complex composite
recipes and we don't want to expose intermediate recipes in the marketplace. |

---

### Unions

#### `ConnectorTool`

**Service:** gateway

= [GithubConfiguration](#githubconfiguration) | [GitLabConfiguration](#gitlabconfiguration) | [BitbucketConfiguration](#bitbucketconfiguration) | [BitbucketCloudConfiguration](#bitbucketcloudconfiguration) | [AzureDevOpsConfiguration](#azuredevopsconfiguration) | [ArtifactoryConfiguration](#artifactoryconfiguration) | [MavenConfiguration](#mavenconfiguration) | [PypiConfiguration](#pypiconfiguration) | [NpmConfiguration](#npmconfiguration) | [NugetConfiguration](#nugetconfiguration) | [GenericHttpToolConfiguration](#generichttptoolconfiguration) | [OrganizationConfiguration](#organizationconfiguration) | [LlmConfiguration](#llmconfiguration) | [S3Configuration](#s3configuration)

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

