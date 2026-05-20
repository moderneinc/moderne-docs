---
sidebar_label: GraphQL API reference
description: Complete reference for the Moderne GraphQL API, including all queries, mutations, subscriptions, and types.
---

# GraphQL API reference

*This page is auto-generated from the Moderne GraphQL schema. Do not edit manually.*

## Queries

#### `auditLogs`

```graphql
auditLogs(first: Int = 100, after: String, where: AuditLogWhereInput, orderBy: [AuditLogOrderByInput!]): AuditLogConnection!
```

**Returns:** [AuditLogConnection](#type-auditlogconnection)!

Query audit log events with pagination and filtering.

#### `auditLogsDownloads`

```graphql
auditLogsDownloads(first: Int = 50, after: String, where: AuditLogsDownloadWhereInput, orderBy: [AuditLogsDownloadOrderByInput!]): AuditLogsDownloadConnection!
```

**Returns:** [AuditLogsDownloadConnection](#type-auditlogsdownloadconnection)!

Query audit log downloads with pagination and filtering.
Use where: \{ id: \{ _eq: "..." \} \} to poll a specific download.

#### `bulkPullRequestAction`

```graphql
bulkPullRequestAction(id: ID!): BulkPullRequestAction
```

**Returns:** [BulkPullRequestAction](#type-bulkpullrequestaction)

Get a bulk pull request action by ID to poll for progress.

#### `capabilities`

```graphql
capabilities: PlatformCapabilities!
```

**Returns:** [PlatformCapabilities](#type-platformcapabilities)!

Returns which optional platform features are enabled in this deployment.
Each field defaults to false and is overridden to true by the corresponding
optional service when it is present in the supergraph composition.

#### `codeSearch`

```graphql
codeSearch(repositoryId: String!, query: String!, first: Int = 100, after: String): CodeSearchResultConnection!
```

**Returns:** [CodeSearchResultConnection](#type-codesearchresultconnection)!

Search source code across artifact repositories.
Searches the given repository and all its descendants in the hierarchy.
Results are grouped by artifact (groupId:artifactId) with file-level matches.

#### `connectors`

```graphql
connectors(first: Int = 100, after: String, where: ConnectorWhereInput, orderBy: [ConnectorOrderByInput!]): ConnectorConnection!
```

**Returns:** [ConnectorConnection](#type-connectorconnection)!

#### `conversation`

```graphql
conversation(conversationId: ID!): Conversation
```

**Returns:** [Conversation](#type-conversation)

Look up a single conversation by id. Returns null when no conversation
matches or the caller does not have access. Restores the v1 query the
moderne-ui client already references.

#### `currentUser`

```graphql
currentUser: User!
```

**Returns:** [User](#type-user)!

Returns the currently authenticated user.

#### `devCenterRecipes`

```graphql
devCenterRecipes: [RecipeDescriptor!]!
```

**Returns:** [[RecipeDescriptor](#type-recipedescriptor)!]!

Get available DevCenter recipes for configuration.

#### `license`

```graphql
license: License!
```

**Returns:** [License](#type-license)!

Request a new license lease key

#### `organization`

```graphql
organization(id: ID!): Organization!
```

**Returns:** [Organization](#type-organization)!

#### `organizations`

```graphql
organizations(first: Int = 100, after: String, where: OrganizationWhereInput, orderBy: [OrganizationOrderByInput!]): OrganizationConnection!
```

**Returns:** [OrganizationConnection](#type-organizationconnection)!

#### `scmConnections`

```graphql
scmConnections: [ScmConnection!]!
```

**Returns:** [[ScmConnection](#type-scmconnection)!]!

Returns connections for all SCM providers.

#### `users`

```graphql
users(first: Int = 100, after: String, where: UserWhereInput, orderBy: [UserOrderByInput!]): UserConnection!
```

**Returns:** [UserConnection](#type-userconnection)!

Returns users with option to filter by role.

#### `verifyToken`

```graphql
verifyToken(origin: String!, scmType: ScmType!): String
```

**Returns:** String

## Mutations

#### `approvePullRequests`

```graphql
approvePullRequests(organizationId: ID!, selection: PullRequestSelectionInput!): BulkPullRequestActionQueued!
```

**Returns:** [BulkPullRequestActionQueued](#type-bulkpullrequestactionqueued)!

Approve pull requests in bulk. Returns the queued action for polling.

#### `cancelBulkPullRequestAction`

```graphql
cancelBulkPullRequestAction(id: ID!): BulkPullRequestActionCanceled!
```

**Returns:** [BulkPullRequestActionCanceled](#type-bulkpullrequestactioncanceled)!

Cancel a pending bulk pull request action.

#### `cancelCommit`

```graphql
cancelCommit(id: ID!): OrganizationCommitCanceled!
```

**Returns:** [OrganizationCommitCanceled](#type-organizationcommitcanceled)!

Cancel a running commit operation.

#### `cancelDevCenterRun`

```graphql
cancelDevCenterRun(id: ID!): ID!
```

**Returns:** ID!

Cancel a DevCenter run. Cancellation is best-effort and asynchronous.

#### `cancelMessage`

```graphql
cancelMessage(conversationId: ID!, messageId: ID): Boolean!
```

**Returns:** Boolean!

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

#### `cancelRecipeRun`

```graphql
cancelRecipeRun(id: ID!): ID!
```

**Returns:** ID!

Cancel a recipe run. Cancellation is best-effort and asynchronous.

#### `clearOrganizationPrompt`

```graphql
clearOrganizationPrompt(organizationId: ID!): Boolean!
```

**Returns:** Boolean!

Clear the organization-level prompt override, falling back to universal.

#### `clearUserPrompt`

```graphql
clearUserPrompt: Boolean!
```

**Returns:** Boolean!

Clear the current user's prompt override, falling back to organization or universal.

#### `closePullRequests`

```graphql
closePullRequests(organizationId: ID!, selection: PullRequestSelectionInput!): BulkPullRequestActionQueued!
```

**Returns:** [BulkPullRequestActionQueued](#type-bulkpullrequestactionqueued)!

Close pull requests in bulk. Returns the queued action for polling.

#### `commit`

```graphql
commit(input: CommitInput!): OrganizationCommitQueued!
```

**Returns:** [OrganizationCommitQueued](#type-organizationcommitqueued)!

Create commits from a changeset (recipe run, batch change, etc.).

#### `createAccessToken`

```graphql
createAccessToken(description: String, expiresAt: DateTime): CreateAccessTokenResult!
```

**Returns:** [CreateAccessTokenResult](#type-createaccesstokenresult)!

Creates a new Moderne Personal Access Token for the current user.
Returns the token value only once - it cannot be retrieved again.

#### `createConversation`

```graphql
createConversation(input: CreateConversationInput!, waitForCompletion: Boolean = false): SendMessageResult!
```

**Returns:** [SendMessageResult](#type-sendmessageresult)!

Create a new conversation and send the first message. Uses the
effective prompt for the organization context. `waitForCompletion`
has the same semantics as on `sendMessage`.

#### `createUserOrganization`

```graphql
createUserOrganization(input: CreateUserOrganizationInput!): Organization!
```

**Returns:** [Organization](#type-organization)!

Create a new user-defined organization visible only to the current user.

#### `deleteUser`

```graphql
deleteUser(email: String!): Boolean!
```

**Returns:** Boolean!

Deletes a user and all associated access tokens.
Returns true if the user was found and deleted.

#### `deleteUserOrganization`

```graphql
deleteUserOrganization(id: ID!): Boolean!
```

**Returns:** Boolean!

Delete a user-defined organization.

#### `downloadAuditLogs`

```graphql
downloadAuditLogs(first: Int, since: DateTime, until: DateTime, format: AuditLogExportFormat!): AuditLogsDownload!
```

**Returns:** [AuditLogsDownload](#type-auditlogsdownload)!

Start an asynchronous export of audit logs. Returns a task whose state
can be polled via auditLogsDownloads.

#### `downloadDataTable`

```graphql
downloadDataTable(changesetId: ID!, dataTable: String!, group: String, format: DataTableFormat!): DataTable!
```

**Returns:** [DataTable](#type-datatable)!

Start or retrieve a data table download.
If the same data table + group + format combination was already requested,
returns the existing download state.

#### `exchangeAuthorizationCode`

```graphql
exchangeAuthorizationCode(input: ExchangeAuthorizationCodeInput!): ExchangeAuthorizationResult!
```

**Returns:** [ExchangeAuthorizationResult](#type-exchangeauthorizationresult)!

Exchange an OAuth authorization code for an access token.

This unified mutation handles all OAuth 2.0 VCS providers.
The backend uses the authorizationId to look up:
- The origin and VCS type
- PKCE code_verifier (GitLab)

On success, the token is stored and future requests will be authenticated.

#### `initiateAuthorization`

```graphql
initiateAuthorization(input: InitiateAuthorizationInput!): OAuthAuthorization!
```

**Returns:** [OAuthAuthorization](#type-oauthauthorization)!

Initiate OAuth authorization for a VCS origin.
Returns an authorization URL to redirect the user to.

The backend constructs the full OAuth URL including:
- PKCE code_challenge for GitLab
- Correct scopes for each VCS type
- State parameter for CSRF protection

The authorization ID should be passed to exchangeAuthorizationCode
after the user completes OAuth.

#### `installRecipesForCurrentUser`

```graphql
installRecipesForCurrentUser(bundle: RecipeBundleInput!): RecipeInstallation!
```

**Returns:** [RecipeInstallation](#type-recipeinstallation)!

Install a recipe bundle to the current user's personal marketplace.

#### `installRecipesForOrganization`

```graphql
installRecipesForOrganization(organizationId: ID!, bundle: RecipeBundleInput!): RecipeInstallation!
```

**Returns:** [RecipeInstallation](#type-recipeinstallation)!

Install a recipe bundle to a specific organization's marketplace.
Requires the `admin` role.

#### `installRecipesUniversal`

```graphql
installRecipesUniversal(bundle: RecipeBundleInput!): RecipeInstallation!
```

**Returns:** [RecipeInstallation](#type-recipeinstallation)!

Install a recipe bundle to the universal marketplace (visible to all).
Requires the `admin` role.

#### `mergePullRequests`

```graphql
mergePullRequests(organizationId: ID!, selection: PullRequestSelectionInput!, mergeMethod: MergeMethod!, deleteSourceBranch: Boolean! = false): BulkPullRequestActionQueued!
```

**Returns:** [BulkPullRequestActionQueued](#type-bulkpullrequestactionqueued)!

Merge pull requests in bulk. Returns the queued action for polling.

#### `reindexChangelog`

```graphql
reindexChangelog(since: DateTime!, origin: String): ReindexResult!
```

**Returns:** [ReindexResult](#type-reindexresult)!

Reset poll cursors so the next poll cycle re-fetches and re-enriches
changelog entries from the given timestamp forward. Use this to backfill
data after deploying enrichment improvements.

#### `revokeAccessToken`

```graphql
revokeAccessToken(id: ID!): Boolean!
```

**Returns:** Boolean!

Revokes an access token by ID.
Returns true if the token was revoked, false if not found.

#### `revokeAllAccessTokens`

```graphql
revokeAllAccessTokens(email: String!): Boolean!
```

**Returns:** Boolean!

Revokes all access tokens for a given user.
Returns true if all token were revoked, otherwise false.

#### `revokeScmToken`

```graphql
revokeScmToken(input: RevokeScmTokenInput!): RevokeTokenResult!
```

**Returns:** [RevokeTokenResult](#type-revoketokenresult)!

Revoke an SCM OAuth token for the current user and a specific origin.
This removes the stored token, disconnecting the user from the VCS.

#### `runDevCenter`

```graphql
runDevCenter(input: RunDevCenterInput!): DevCenterRunRunning!
```

**Returns:** [DevCenterRunRunning](#type-devcenterrunrunning)!

Start a DevCenter run for an organization.
Returns immediately with running status.

#### `runRecipe`

```graphql
runRecipe(input: RunRecipeInput!): OrganizationRecipeRunQueued!
```

**Returns:** [OrganizationRecipeRunQueued](#type-organizationreciperunqueued)!

Run a recipe against repositories.
Returns the recipe run in its initial queued state.

#### `runVisualization`

```graphql
runVisualization(organizationId: ID!, visualizationId: ID!, options: [VisualizationOptionInput!]): Visualization!
```

**Returns:** [Visualization](#type-visualization)!

Request a visualization to be generated based on the provided descriptor.
Returns the existing visualization if already run with the same options,
otherwise queues a new visualization run.

#### `sendMessage`

```graphql
sendMessage(conversationId: ID!, message: String!, waitForCompletion: Boolean = false): SendMessageResult!
```

**Returns:** [SendMessageResult](#type-sendmessageresult)!

Send a message to an existing conversation. Returns a handle for
polling — `initialCursor` is the cursor to pass to the next
`messages(after:)` query, and `turnState` carries the server-
recommended poll cadence.

When `waitForCompletion: true`, the mutation blocks until the turn
completes (or the server cap of 4 minutes is reached, whichever comes
first). On cap, the mutation returns the current turn state rather
than erroring so the caller can continue polling.

#### `setOrganizationPrompt`

```graphql
setOrganizationPrompt(organizationId: ID!, content: Markdown!): Prompt!
```

**Returns:** [Prompt](#type-prompt)!

Set the system prompt for a specific organization (overrides universal).

#### `setProfiling`

```graphql
setProfiling(enabled: Boolean!, event: ProfilingEvent = CPU): Boolean!
```

**Returns:** Boolean!

Turn continuous profiling on or off for this tenant. When enabled,
Pyroscope profiles for every service start landing in the Pyroscope UI
within seconds. The primary event the agent samples on is selected by
`event` (defaults to CPU); calling the mutation again with a different
event while profiling is already on rotates the agent to the new event.
Fails when the profiling capability is not enabled for the tenant.
Admin role required.

#### `setUniversalPrompt`

```graphql
setUniversalPrompt(content: Markdown!): Prompt!
```

**Returns:** [Prompt](#type-prompt)!

Set the universal (default) system prompt.

#### `setUserPrompt`

```graphql
setUserPrompt(content: Markdown!): Prompt!
```

**Returns:** [Prompt](#type-prompt)!

Set the system prompt for the current user (overrides organization and universal).

#### `uninstallRecipesFromCurrentUser`

```graphql
uninstallRecipesFromCurrentUser(packageName: String!): RecipeUninstallation!
```

**Returns:** [RecipeUninstallation](#type-recipeuninstallation)!

Uninstall a recipe bundle from the current user's personal marketplace.
Returns the number of recipes that were removed.

#### `uninstallRecipesFromOrganization`

```graphql
uninstallRecipesFromOrganization(organizationId: ID!, packageName: String!): RecipeUninstallation!
```

**Returns:** [RecipeUninstallation](#type-recipeuninstallation)!

Uninstall a recipe bundle from a specific organization's marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

#### `uninstallRecipesUniversal`

```graphql
uninstallRecipesUniversal(packageName: String!): RecipeUninstallation!
```

**Returns:** [RecipeUninstallation](#type-recipeuninstallation)!

Uninstall a recipe bundle from the universal marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

#### `updateUserOrganization`

```graphql
updateUserOrganization(input: UpdateUserOrganizationInput!): Organization!
```

**Returns:** [Organization](#type-organization)!

Update an existing user-defined organization.

## Types

### Object types

<h5 id="type-accesstoken"><code>AccessToken</code></h5>

Moderne Personal Access Tokens

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The unique identifier for the access token. This is not the same as the token itself. |
| `description` | String | Optional description of the token. Useful for distinguishing between multiple tokens. |
| `created` | [DateTime](#type-datetime)! | The date and time the token was created. |
| `expiresAt` | [DateTime](#type-datetime) | The date and time the token will expire. |

<h5 id="type-accesstokenconnection"><code>AccessTokenConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AccessTokenEdge](#type-accesstokenedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-accesstokenedge"><code>AccessTokenEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AccessToken](#type-accesstoken)! |  |
| `cursor` | String! |  |

<h5 id="type-artifactoryconfiguration"><code>ArtifactoryConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `lstQuery` | [String!] |  |
| `lastIngestedAt` | [DateTime](#type-datetime) |  |

<h5 id="type-auditlog"><code>AuditLog</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! | The user who performed the action. |
| `target` | String! | The resource type that was acted upon (e.g., "access.tokens", "organizations"). |
| `action` | String! | The specific action that was performed (e.g., "create.token", "delete.organization"). |
| `actionType` | [AuditActionType](#type-auditactiontype)! | The CRUD classification of the action. |
| `outcome` | [AuditOutcome](#type-auditoutcome)! | Whether the action succeeded or failed. |
| `description` | String | Human-readable description of what happened. |
| `timestamp` | [DateTime](#type-datetime)! | When the action occurred. |

<h5 id="type-auditlogconnection"><code>AuditLogConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AuditLogEdge](#type-auditlogedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-auditlogedge"><code>AuditLogEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AuditLog](#type-auditlog)! |  |
| `cursor` | String! |  |

<h5 id="type-auditlogsdownloadconnection"><code>AuditLogsDownloadConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AuditLogsDownloadEdge](#type-auditlogsdownloadedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-auditlogsdownloadedge"><code>AuditLogsDownloadEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AuditLogsDownload](#type-auditlogsdownload)! |  |
| `cursor` | String! |  |

<h5 id="type-auditlogsdownloaderror"><code>AuditLogsDownloadError</code></h5>

**Implements:** [AuditLogsDownload](#type-auditlogsdownload)

An audit log download failed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `message` | String! |  |

<h5 id="type-auditlogsdownloadfinished"><code>AuditLogsDownloadFinished</code></h5>

**Implements:** [AuditLogsDownload](#type-auditlogsdownload)

An audit log download has completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | [AuditLogExportFormat](#type-auditlogexportformat)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `downloadUrl` | String! | URL path to download the file (relative to the service base URL). |

<h5 id="type-auditlogsdownloadprocessing"><code>AuditLogsDownloadProcessing</code></h5>

**Implements:** [AuditLogsDownload](#type-auditlogsdownload)

An audit log download is being processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | [AuditLogExportFormat](#type-auditlogexportformat)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-azuredevopsconfiguration"><code>AzureDevOpsConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `oauth` | [AzureDevOpsOauth](#type-azuredevopsoauth) |  |

<h5 id="type-azuredevopsconnection"><code>AzureDevOpsConnection</code></h5>

**Implements:** [ScmConnection](#type-scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#type-scmtokeninfo)!]! |  |

<h5 id="type-azuredevopsoauth"><code>AzureDevOpsOauth</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `tenantId` | String! |  |

<h5 id="type-batchchange"><code>BatchChange</code></h5>

**Implements:** [OrganizationChangeset](#type-organizationchangeset)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `name` | String |  |
| `description` | String |  |
| `sourceTool` | [ToolInfo](#type-toolinfo) |  |
| `diffTool` | [ToolInfo](#type-toolinfo) |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this batch change. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this batch change. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |

<h5 id="type-batchchangefilechange"><code>BatchChangeFileChange</code></h5>

**Implements:** [FileChange](#type-filechange)

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#type-path)! |  |
| `beforeSourcePath` | [Path](#type-path) |  |
| `afterSourcePath` | [Path](#type-path) |  |
| `diff` | (markupLevel: [MarkupLevel](#type-markuplevel) = ERROR, showWhitespaceOnlyChanges: Boolean = true): [Patch](#type-patch) |  |

<h5 id="type-bitbucketcloudconfiguration"><code>BitbucketCloudConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `oauth` | [BitbucketCloudOauth](#type-bitbucketcloudoauth) |  |

<h5 id="type-bitbucketcloudconnection"><code>BitbucketCloudConnection</code></h5>

**Implements:** [ScmConnection](#type-scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#type-scmtokeninfo)!]! |  |

<h5 id="type-bitbucketcloudoauth"><code>BitbucketCloudOauth</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

<h5 id="type-bitbucketconfiguration"><code>BitbucketConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `oauth` | [BitbucketOauth](#type-bitbucketoauth) |  |

<h5 id="type-bitbucketconnection"><code>BitbucketConnection</code></h5>

**Implements:** [ScmConnection](#type-scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#type-scmtokeninfo)!]! |  |

<h5 id="type-bitbucketoauth"><code>BitbucketOauth</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

<h5 id="type-branchcommitoptions"><code>BranchCommitOptions</code></h5>

**Implements:** [CommitOptions](#type-commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |

<h5 id="type-bulkpullrequestactioncanceled"><code>BulkPullRequestActionCanceled</code></h5>

**Implements:** [BulkPullRequestAction](#type-bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#type-pullrequestactiontype)! |  |
| `user` | [User](#type-user)! |  |
| `canceledBy` | [User](#type-user)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#type-pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#type-pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#type-pullrequestactionconnection)! |  |

<h5 id="type-bulkpullrequestactionconnection"><code>BulkPullRequestActionConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[BulkPullRequestActionEdge](#type-bulkpullrequestactionedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-bulkpullrequestactionedge"><code>BulkPullRequestActionEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [BulkPullRequestAction](#type-bulkpullrequestaction)! |  |
| `cursor` | String! |  |

<h5 id="type-bulkpullrequestactionerror"><code>BulkPullRequestActionError</code></h5>

**Implements:** [BulkPullRequestAction](#type-bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#type-pullrequestactiontype)! |  |
| `user` | [User](#type-user)! |  |
| `errorMessage` | String! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#type-pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#type-pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#type-pullrequestactionconnection)! |  |

<h5 id="type-bulkpullrequestactionfinished"><code>BulkPullRequestActionFinished</code></h5>

**Implements:** [BulkPullRequestAction](#type-bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#type-pullrequestactiontype)! |  |
| `user` | [User](#type-user)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#type-pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#type-pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#type-pullrequestactionconnection)! |  |

<h5 id="type-bulkpullrequestactionqueued"><code>BulkPullRequestActionQueued</code></h5>

**Implements:** [BulkPullRequestAction](#type-bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#type-pullrequestactiontype)! |  |
| `user` | [User](#type-user)! |  |
| `queuedAt` | [DateTime](#type-datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#type-pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#type-pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#type-pullrequestactionconnection)! |  |

<h5 id="type-bulkpullrequestactionrunning"><code>BulkPullRequestActionRunning</code></h5>

**Implements:** [BulkPullRequestAction](#type-bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#type-pullrequestactiontype)! |  |
| `user` | [User](#type-user)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#type-pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#type-pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#type-pullrequestactionconnection)! |  |

<h5 id="type-changelogcommit"><code>ChangelogCommit</code></h5>

**Implements:** [ChangelogEntry](#type-changelogentry)

A direct commit to a branch.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! |  |
| `author` | [ChangeParticipant](#type-changeparticipant)! |  |
| `repository` | [Repository](#type-repository)! |  |
| `url` | String! |  |
| `branch` | String! |  |
| `sha` | String! | The commit SHA. |
| `updatedAt` | [DateTime](#type-datetime)! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `buildState` | [BuildState](#type-buildstate) |  |
| `diffstat` | [DiffStat](#type-diffstat)! |  |

<h5 id="type-changelogentryconnection"><code>ChangelogEntryConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ChangelogEntryEdge](#type-changelogentryedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-changelogentryedge"><code>ChangelogEntryEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [ChangelogEntry](#type-changelogentry)! |  |
| `cursor` | String! |  |

<h5 id="type-changelogparticipantconnection"><code>ChangelogParticipantConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ChangelogParticipantEdge](#type-changelogparticipantedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-changelogparticipantedge"><code>ChangelogParticipantEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [ChangeParticipant](#type-changeparticipant)! |  |
| `cursor` | String! |  |

<h5 id="type-changelogpullrequest"><code>ChangelogPullRequest</code></h5>

**Implements:** [ChangelogEntry](#type-changelogentry)

A pull request (open, draft, merged, or closed).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! |  |
| `author` | [ChangeParticipant](#type-changeparticipant)! |  |
| `repository` | [Repository](#type-repository)! |  |
| `url` | String! |  |
| `branch` | String! |  |
| `number` | Int! | The PR number. |
| `sourceBranch` | String! | The source branch of the pull request. |
| `state` | [PullRequestState](#type-pullrequeststate)! | Current state of the pull request. |
| `draft` | Boolean! | Whether this is a draft pull request. |
| `updatedAt` | [DateTime](#type-datetime)! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `buildState` | [BuildState](#type-buildstate) |  |
| `reviewDecision` | [ReviewDecision](#type-reviewdecision) | Review decision for the pull request. |
| `approvedBy` | [[ChangeParticipant](#type-changeparticipant)!] | Reviewers who approved this pull request. |
| `requestedReviewers` | [[ChangeParticipant](#type-changeparticipant)!] | Reviewers assigned/requested on this pull request. |
| `additions` | Int | Lines added. |
| `deletions` | Int | Lines removed. |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `diffstat` | [DiffStat](#type-diffstat)! |  |
| `actions` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#type-pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#type-pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#type-pullrequestactionconnection)! | Actions (approve, merge, close) that have been applied to this pull request. Default sort order is descending by startedAt. |

<h5 id="type-changeparticipant"><code>ChangeParticipant</code></h5>

A participant identity from the VCS provider. Not necessarily a Moderne user.

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Display name. |
| `email` | String | Email address. |
| `username` | String | Username/login on the VCS provider. |
| `avatarUrl` | String | Avatar URL from the VCS provider. |
| `roles` | [[ContributorRole](#type-contributorrole)!]! | The roles this participant has across changelog entries. |

<h5 id="type-clidownloadinstructionlink"><code>CliDownloadInstructionLink</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `label` | String! |  |
| `uri` | String! |  |

<h5 id="type-codesearchresult"><code>CodeSearchResult</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `fileChanges` | (first: Int = 100, after: String): [FileChangeConnection](#type-filechangeconnection)! |  |

<h5 id="type-codesearchresultconnection"><code>CodeSearchResultConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[CodeSearchResultEdge](#type-codesearchresultedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |
| `searchDurationMs` | [Long](#type-long)! |  |

<h5 id="type-codesearchresultedge"><code>CodeSearchResultEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [CodeSearchResult](#type-codesearchresult)! |  |
| `cursor` | String! |  |

<h5 id="type-column"><code>Column</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `type` | String! |  |

<h5 id="type-connector"><code>Connector</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `nickname` | String |  |
| `version` | String! |  |
| `tools` | [[ConnectorTool](#type-connectortool)!]! |  |
| `uiConfiguration` | [UiConfiguration](#type-uiconfiguration) |  |
| `personalAccessTokenConfiguration` | [PersonalAccessTokenConfiguration](#type-personalaccesstokenconfiguration) |  |

<h5 id="type-connectorconnection"><code>ConnectorConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ConnectorEdge](#type-connectoredge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-connectoredge"><code>ConnectorEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Connector](#type-connector)! |  |
| `cursor` | String! |  |

<h5 id="type-conversation"><code>Conversation</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `organization` | [Organization](#type-organization)! |  |
| `user` | [User](#type-user)! |  |
| `messages` | (first: Int = 100, after: String): [MessageConnection](#type-messageconnection)! |  |
| `turnState` | [ConversationTurnState](#type-conversationturnstate)! | Current turn state for this conversation. Carries the server- recommended poll cadence — clients should respect this rather than hardcoding an interval. |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-conversationconnection"><code>ConversationConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ConversationEdge](#type-conversationedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |

<h5 id="type-conversationedge"><code>ConversationEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Conversation](#type-conversation)! |  |
| `cursor` | String! |  |

<h5 id="type-conversationturnstate"><code>ConversationTurnState</code></h5>

Represents the current phase of the conversation's active turn (if any).
Drives client poll cadence.

| Field | Type | Description |
|-------|------|-------------|
| `phase` | [ConversationPhase](#type-conversationphase)! |  |
| `recommendedPollIntervalMs` | Int! | Server-recommended poll interval in milliseconds. |
| `activeTurnStartedAt` | [DateTime](#type-datetime) | When the currently-active turn started, if any. |

<h5 id="type-createaccesstokenresult"><code>CreateAccessTokenResult</code></h5>

Result of creating a new access token.
The token value is only available in this response.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The unique identifier for the token. Use this ID for revocation. |
| `token` | String! | The actual token value. Store this securely - it cannot be retrieved again. |
| `description` | String | The description provided when creating the token. |
| `created` | [DateTime](#type-datetime)! | When the token was created. |
| `expiresAt` | [DateTime](#type-datetime) | When the token will expire, or null if it never expires. |

<h5 id="type-datatableavailable"><code>DataTableAvailable</code></h5>

**Implements:** [DataTable](#type-datatable)

A data table is available for download but no download has been initiated yet.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#type-datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `changesetId` | ID! |  |

<h5 id="type-datatableconnection"><code>DataTableConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[DataTableEdge](#type-datatableedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-datatabledescriptor"><code>DataTableDescriptor</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `columns` | [[Column](#type-column)!]! |  |

<h5 id="type-datatableedge"><code>DataTableEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [DataTable](#type-datatable)! |  |
| `cursor` | String! |  |

<h5 id="type-datatableerror"><code>DataTableError</code></h5>

**Implements:** [DataTable](#type-datatable)

A data table download failed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#type-datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `message` | String! |  |

<h5 id="type-datatablefinished"><code>DataTableFinished</code></h5>

**Implements:** [DataTable](#type-datatable)

A data table download has completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#type-datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `format` | [DataTableFormat](#type-datatableformat)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `duration` | [Duration](#type-duration) |  |
| `downloadUrl` | String! | URL path to download the file (relative to the service base URL). |

<h5 id="type-datatableprocessing"><code>DataTableProcessing</code></h5>

**Implements:** [DataTable](#type-datatable)

A data table download is being processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#type-datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `format` | [DataTableFormat](#type-datatableformat)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-datatablesmessage"><code>DataTablesMessage</code></h5>

**Implements:** [Message](#type-message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `dataTables` | [[DataTableDescriptor](#type-datatabledescriptor)!]! |  |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-datatablesqlmessage"><code>DataTableSqlMessage</code></h5>

**Implements:** [Message](#type-message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `sqlQuery` | String! |  |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-devcenter"><code>DevCenter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) | The currently configured DevCenter recipe for this organization. |
| `runs` | (first: Int = 10, after: String, where: [DevCenterRunWhereInput](#type-devcenterrunwhereinput), orderBy: [[DevCenterRunOrderByInput](#type-devcenterrunorderbyinput)!]): [DevCenterRunConnection](#type-devcenterrunconnection)! | DevCenter runs for this organization, ordered by start time descending. |

<h5 id="type-devcentercard"><code>DevCenterCard</code></h5>

A DevCenter card represents a category of work (e.g., "Spring Boot 3", "Java 21", "Security").
Cards contain measures that track progress toward completion.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#type-markdown)! | Display name of the card. |
| `description` | [Markdown](#type-markdown) | Description of what this card tracks. |
| `fixRecipe` | [RecipeDescriptor](#type-recipedescriptor) | Recipe that can fix/complete the work tracked by this card. |
| `aggregation` | [DevCenterAggregation](#type-devcenteraggregation)! | How results are aggregated for this card. |
| `measures` | [[DevCenterMeasure](#type-devcentermeasure)!]! | Measures within this card, ordered by ordinal. |
| `repositoriesNotApplicable` | Int! | Repositories where this card is not applicable. |

<h5 id="type-devcentercarddescriptor"><code>DevCenterCardDescriptor</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#type-markdown)! |  |
| `description` | [Markdown](#type-markdown) |  |
| `fixRecipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `aggregation` | [DevCenterAggregation](#type-devcenteraggregation)! |  |
| `measures` | [[DevCenterMeasureDescriptor](#type-devcentermeasuredescriptor)!]! |  |

<h5 id="type-devcentermeasure"><code>DevCenterMeasure</code></h5>

A measure within a DevCenter card representing a specific state or finding,
with a count from the run results.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#type-markdown)! | Display name of the measure. |
| `description` | [Markdown](#type-markdown) | Description of what this measure represents. |
| `ordinal` | Int! | Sort order relative to other measures in the card. |
| `count` | Int! | Count of repositories or occurrences for this measure. For PER_REPOSITORY: number of repositories in this state. For PER_OCCURRENCE: total count of occurrences. |

<h5 id="type-devcentermeasuredescriptor"><code>DevCenterMeasureDescriptor</code></h5>

A measure descriptor within a DevCenter card, representing metadata about
a specific state or finding. See DevCenterMeasure in changeset:reader
for the runtime version with counts.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#type-markdown)! |  |
| `description` | [Markdown](#type-markdown) |  |
| `ordinal` | Int! |  |

<h5 id="type-devcenterorganization"><code>DevCenterOrganization</code></h5>

Organization-level context from a DevCenter run.

| Field | Type | Description |
|-------|------|-------------|
| `repositories` | [DevCenterRepositories](#type-devcenterrepositories)! | Repository counts at the time of the run. |
| `contributingDevelopers` | Int! | Number of unique contributing developers (last 90 days). |
| `linesOfCode` | [Long](#type-long)! | Total lines of code across all repositories on platform. |

<h5 id="type-devcenterrepositories"><code>DevCenterRepositories</code></h5>

Repository counts from a DevCenter run.

| Field | Type | Description |
|-------|------|-------------|
| `total` | Int! | Total repositories defined in the organization at the time of the run. |
| `repositoriesWithoutLst` | Int! | Repositories with no LST ingested at the time of the run. |

<h5 id="type-devcenterruncanceled"><code>DevCenterRunCanceled</code></h5>

**Implements:** [DevCenterRun](#type-devcenterrun)

DevCenter run was canceled before completion.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-devcenterrunconnection"><code>DevCenterRunConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[DevCenterRunEdge](#type-devcenterrunedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-devcenterrunedge"><code>DevCenterRunEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [DevCenterRun](#type-devcenterrun)! |  |
| `cursor` | String! |  |

<h5 id="type-devcenterrunerror"><code>DevCenterRunError</code></h5>

**Implements:** [DevCenterRun](#type-devcenterrun)

DevCenter run failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `message` | String! | Human-readable error message. |

<h5 id="type-devcenterrunfinished"><code>DevCenterRunFinished</code></h5>

**Implements:** [DevCenterRun](#type-devcenterrun)

DevCenter run completed successfully with summarized results.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `organization` | [DevCenterOrganization](#type-devcenterorganization)! |  |
| `upgradesAndMigrations` | [[DevCenterCard](#type-devcentercard)!]! | Upgrade and migration opportunities found (from UpgradesAndMigrations data table). |
| `security` | [DevCenterCard](#type-devcentercard) | Security vulnerabilities found (from SecurityIssues data table). |

<h5 id="type-devcenterrunrunning"><code>DevCenterRunRunning</code></h5>

**Implements:** [DevCenterRun](#type-devcenterrun)

DevCenter recipe is currently running across repositories.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) |  |

<h5 id="type-diffstat"><code>DiffStat</code></h5>

Aggregate line-level diff statistics.

| Field | Type | Description |
|-------|------|-------------|
| `additions` | Int! | Total lines added. |
| `deletions` | Int! | Total lines removed. |

<h5 id="type-directcommitsucceeded"><code>DirectCommitSucceeded</code></h5>

**Implements:** [RepositoryCommitSucceeded](#type-repositorycommitsucceeded), [RepositoryCommit](#type-repositorycommit)

Direct commit to repository completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `resultLink` | String |  |

<h5 id="type-errormessage"><code>ErrorMessage</code></h5>

**Implements:** [Message](#type-message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `content` | [Markdown](#type-markdown)! |  |
| `code` | String | Stable error code that clients may switch on for UI copy. The full taxonomy (split into API-call errors vs in-conversation errors) is maintained in `doc/moddy-polling-ui-handoff.md`. As of now:   Configuration / LLM provider:     LLM_UNAVAILABLE, LLM_OVERLOADED, LLM_RATE_LIMITED, LLM_AUTH_FAILED,     LLM_CONTEXT_TOO_LONG, LLM_TIMED_OUT, LLM_QUOTA_EXCEEDED,     LLM_UNREACHABLE, LLM_EMPTY_RESPONSE, LLM_FAILED   Tool execution:     TOOL_UNKNOWN, TOOL_FAILED   Turn lifecycle:     TURN_LIMIT_EXCEEDED, CANCELLED   Fallback:     INTERNAL API-call errors (returned in GraphQL `errors[]`, not as messages): INVALID_CURSOR, FORBIDDEN, CONVERSATION_BUSY, MESSAGE_TOO_LONG, CONVERSATION_NOT_FOUND, TOO_MANY_REQUESTS. |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-exchangeauthorizationresult"><code>ExchangeAuthorizationResult</code></h5>

Result of exchanging an authorization code.

| Field | Type | Description |
|-------|------|-------------|
| `success` | Boolean! | True if the exchange was successful and token was stored. |
| `error` | String | Error message if exchange failed. |

<h5 id="type-filechangeconnection"><code>FileChangeConnection</code></h5>

Connection for file changes with aggregate statistics.

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[FileChangeEdge](#type-filechangeedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |
| `searched` | Int! | Total files searched. |
| `changed` | Int! | Files with committable changes. |
| `errors` | Int! | Files with errors. |

<h5 id="type-filechangeedge"><code>FileChangeEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [FileChange](#type-filechange)! |  |
| `cursor` | String! |  |

<h5 id="type-forkandpullrequestcommitsucceeded"><code>ForkAndPullRequestCommitSucceeded</code></h5>

**Implements:** [RepositoryCommitSucceeded](#type-repositorycommitsucceeded), [RepositoryCommit](#type-repositorycommit)

Fork and pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | [PullRequestStatus](#type-pullrequeststatus)! | Pull request status. |

<h5 id="type-forkcommitoptions"><code>ForkCommitOptions</code></h5>

**Implements:** [CommitOptions](#type-commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account. |
| `prefixOrganization` | Boolean! |  |

<h5 id="type-forkcommitsucceeded"><code>ForkCommitSucceeded</code></h5>

**Implements:** [RepositoryCommitSucceeded](#type-repositorycommitsucceeded), [RepositoryCommit](#type-repositorycommit)

Fork commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `resultLink` | String |  |

<h5 id="type-forkpullrequestoptions"><code>ForkPullRequestOptions</code></h5>

**Implements:** [CommitOptions](#type-commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account. |
| `prefixOrganization` | Boolean! |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | [Base64](#type-base64) |  |
| `draft` | Boolean! |  |
| `maintainerCanModify` | Boolean! | GitHub only flag to allow maintainers to edit a pull request. |
| `autoMergeMethod` | [MergeMethod](#type-mergemethod) | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
| `canRecreateClosedPullRequest` | Boolean! | Recreate a pull request if it was already closed. |

<h5 id="type-generichttptoolconfiguration"><code>GenericHttpToolConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |

<h5 id="type-githubconfiguration"><code>GithubConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `allowableOrganizations` | [String!]! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `oauth` | [GithubOauth](#type-githuboauth) |  |

<h5 id="type-githubconnection"><code>GithubConnection</code></h5>

**Implements:** [ScmConnection](#type-scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#type-scmtokeninfo)!]! |  |

<h5 id="type-githuboauth"><code>GithubOauth</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `includePrivateRepos` | Boolean! |  |

<h5 id="type-gitlabconfiguration"><code>GitLabConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `oauth` | [GitLabOauth](#type-gitlaboauth) |  |

<h5 id="type-gitlabconnection"><code>GitLabConnection</code></h5>

**Implements:** [ScmConnection](#type-scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#type-scmtokeninfo)!]! |  |

<h5 id="type-gitlaboauth"><code>GitLabOauth</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

<h5 id="type-gorecipebundle"><code>GoRecipeBundle</code></h5>

**Implements:** [RecipeBundle](#type-recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

<h5 id="type-httptoolconnectivity"><code>HttpToolConnectivity</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `connected` | Boolean! |  |
| `latency` | [Duration](#type-duration) |  |

<h5 id="type-license"><code>License</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `key` | String |  |

<h5 id="type-llmconfiguration"><code>LlmConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `llmProvider` | [LlmProvider](#type-llmprovider)! |  |

<h5 id="type-lstartifact"><code>LstArtifact</code></h5>

The LST artifact for a repository - the precomputed Lossless Semantic Tree
that recipe runs consume. Every repository has a conceptual artifact;
`published` reflects the upstream `mod publish` timestamp, while
`available` indicates whether the saas can route a recipe run to it yet.

| Field | Type | Description |
|-------|------|-------------|
| `published` | [DateTime](#type-datetime) | When `mod publish` produced an artifact into the customer's LST artifact repository, or null if no artifact has been published. For a tenant configured for encrypted LSTs, a non-null `published` does NOT mean the encrypted artifact has been received by the tenant - that signal lives on `available`. |
| `available` | Boolean! | Whether the artifact is reachable for a recipe run. For an organization source with encryption enabled, true once the connector has uploaded the encrypted artifact and the gateway has surfaced an `encrypted://` alternate publish URI. For a source without encryption (pass-through), true when the gateway-projected row has a non-empty `publishUri`, which we assume is reachable from `mod publish`. |

<h5 id="type-markup"><code>Markup</code></h5>

**Implements:** [Marker](#type-marker)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `level` | [MarkupLevel](#type-markuplevel)! |  |
| `message` | String |  |
| `detail` | String |  |

<h5 id="type-mavenconfiguration"><code>MavenConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `localRepository` | String |  |
| `lastIngestedAt` | [DateTime](#type-datetime) |  |

<h5 id="type-mavenrecipebundle"><code>MavenRecipeBundle</code></h5>

**Implements:** [RecipeBundle](#type-recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

<h5 id="type-mergeoptions"><code>MergeOptions</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `deleteSourceBranch` | Boolean! |  |
| `mergeMethod` | [MergeMethod](#type-mergemethod)! |  |

<h5 id="type-messageconnection"><code>MessageConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[MessageEdge](#type-messageedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |

<h5 id="type-messageedge"><code>MessageEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Message](#type-message)! |  |
| `cursor` | String! |  |

<h5 id="type-moddy"><code>Moddy</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `systemPrompt` | [Prompt](#type-prompt)! | The effective system prompt for this context. Cascades: user > organization > universal > built-in default. |
| `adminOnly` | Boolean! | When true, only administrators can create conversations or send messages. Install-level policy flag; the UI uses this together with the viewer's admin status to gate the Moddy menu entry. |
| `conversations` | (first: Int = 50, after: String, where: [ConversationWhereInput](#type-conversationwhereinput), orderBy: [[ConversationOrderByInput](#type-conversationorderbyinput)!]): [ConversationConnection](#type-conversationconnection)! |  |
| `providerName` | String | Human-readable provider name (e.g. "Anthropic", "OpenAI"). Null when no LLM provider is configured (in which case `capabilities.moddy` is also false — clients should gate the chat composer on the capability, not on this field). |
| `model` | String | Configured model identifier (e.g. "claude-3-5-sonnet-20241022"). Null when no provider is configured or the provider is configured without a model override. |

<h5 id="type-morehelplink"><code>MoreHelpLink</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `label` | String! |  |
| `uri` | String! |  |

<h5 id="type-npmconfiguration"><code>NpmConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |

<h5 id="type-npmrecipebundle"><code>NpmRecipeBundle</code></h5>

**Implements:** [RecipeBundle](#type-recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

<h5 id="type-nugetconfiguration"><code>NugetConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |

<h5 id="type-nugetrecipebundle"><code>NugetRecipeBundle</code></h5>

**Implements:** [RecipeBundle](#type-recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

<h5 id="type-oauthauthorization"><code>OAuthAuthorization</code></h5>

Represents a pending OAuth authorization.
The UI should redirect to authorizationUrl, then call exchangeAuthorizationCode
with the id and extracted callback parameters.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | Unique ID for this authorization attempt. Used to look up stored PKCE state at exchange time. |
| `authorizationUrl` | String! | The fully-constructed OAuth authorization URL. UI should redirect the user to this URL. IMPORTANT: The UI must store the authorization ID before redirecting, as it will be needed to call exchangeAuthorizationCode after the callback. The redirect URI does not contain the authorization ID. |
| `callbackParameters` | [String!]! | Query parameters the UI should extract from the OAuth callback URL and pass to exchangeAuthorizationCode (e.g., ["code"]). |
| `expiresAt` | [DateTime](#type-datetime)! | When this authorization expires. UI should treat expired authorizations as stale. |

<h5 id="type-option"><code>Option</code></h5>

RecipeDescriptor resolved from changeset-specific recipes.csv.
When a recipe run is created, the recipes.csv is copied to the changeset directory,
so we can resolve the recipe that was used at the time of the run (not the current global state).

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#type-object) |  |
| `type` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `example` | String |  |
| `valid` | [String] |  |
| `required` | Boolean! |  |

<h5 id="type-organization"><code>Organization</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `changelog` | (first: Int = 50, after: String, where: [ChangelogEntryWhereInput](#type-changelogentrywhereinput), orderBy: [[ChangelogEntryOrderByInput](#type-changelogentryorderbyinput)!]): [ChangelogEntryConnection](#type-changelogentryconnection)! | PR and commit activity feed for repositories in this organization. |
| `participants` | (first: Int = 50, after: String, where: [ChangelogParticipantWhereInput](#type-changelogparticipantwhereinput), orderBy: [[ChangelogParticipantOrderByInput](#type-changelogparticipantorderbyinput)!]): [ChangelogParticipantConnection](#type-changelogparticipantconnection)! | All unique participants across the changelog for this organization, aggregated from authors, assignees, closers, and reviewers. |
| `commitOptions` | [[CommitOption](#type-commitoption)!]! | Available commit options for this organization. |
| `changesets` | (first: Int = 50, after: String, where: [OrganizationChangesetWhereInput](#type-organizationchangesetwhereinput), orderBy: [[OrganizationChangesetOrderByInput](#type-organizationchangesetorderbyinput)!]): [OrganizationChangesetConnection](#type-organizationchangesetconnection)! |  |
| `devCenter` | [DevCenter](#type-devcenter) | DevCenter provides organization-wide campaign progress tracking. |
| `moddy` | [Moddy](#type-moddy)! |  |
| `name` | String! |  |
| `parents` | [[Organization](#type-organization)!]! | The ancestor organizations of this organization, ordered from immediate parent towards root. Does not include the epsilon root. Empty for the root organization and direct children of root. |
| `user` | [User](#type-user) | The user who owns this organization. Null for global organizations, non-null for user-defined organizations. |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryWhereInput](#type-repositorywhereinput), orderBy: [[RepositoryOrderByInput](#type-repositoryorderbyinput)!]): [RepositoryConnection](#type-repositoryconnection)! |  |
| `children` | (first: Int = 100, after: String, where: [OrganizationWhereInput](#type-organizationwhereinput), orderBy: [[OrganizationOrderByInput](#type-organizationorderbyinput)!]): [OrganizationConnection](#type-organizationconnection)! | Direct children of this organization in the tree, paginated. Useful for lazy-loading the org tree level by level — e.g. an org selector that fetches the root, then the children of each folder only when the user expands it. `where.depth` is ignored on this field — every direct child of a given parent has the same depth, so the filter would be either all-or-nothing. Use `where.name` and the boolean composers (`_and`, `_or`, `_not`) for meaningful filtering. `orderBy` defaults to NAME ascending when unspecified. |
| `marketplace` | [RecipeMarketplace](#type-recipemarketplace) |  |

<h5 id="type-organizationchangesetconnection"><code>OrganizationChangesetConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationChangesetEdge](#type-organizationchangesetedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-organizationchangesetedge"><code>OrganizationChangesetEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationChangeset](#type-organizationchangeset)! |  |
| `cursor` | String! |  |
| `organization` | [Organization](#type-organization) | The organization this changeset was run against. May differ from the queried organization when the changeset belongs to a suborganization. Null if the organization has been deleted or is temporarily unavailable. |

<h5 id="type-organizationcommitcanceled"><code>OrganizationCommitCanceled</code></h5>

**Implements:** [OrganizationCommit](#type-organizationcommit)

Commit was canceled before completion.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `options` | [CommitOptions](#type-commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#type-base64) |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `canceledBy` | [User](#type-user)! | Who or what initiated the cancellation. |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#type-repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#type-repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#type-repositorycommitconnection)! | Paginated results per repository (partial). |

<h5 id="type-organizationcommitconnection"><code>OrganizationCommitConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationCommitEdge](#type-organizationcommitedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-organizationcommitedge"><code>OrganizationCommitEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationCommit](#type-organizationcommit)! |  |
| `cursor` | String! |  |

<h5 id="type-organizationcommiterror"><code>OrganizationCommitError</code></h5>

**Implements:** [OrganizationCommit](#type-organizationcommit)

Commit failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `options` | [CommitOptions](#type-commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#type-base64) |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `errorMessage` | String! | Human-readable error message. |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#type-repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#type-repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#type-repositorycommitconnection)! | Paginated results per repository (partial). |

<h5 id="type-organizationcommitfinished"><code>OrganizationCommitFinished</code></h5>

**Implements:** [OrganizationCommit](#type-organizationcommit)

Commit completed successfully (all or partial success).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `options` | [CommitOptions](#type-commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#type-base64) |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#type-repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#type-repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#type-repositorycommitconnection)! | Paginated results per repository. |

<h5 id="type-organizationcommitqueued"><code>OrganizationCommitQueued</code></h5>

**Implements:** [OrganizationCommit](#type-organizationcommit)

Commit is queued and waiting to be processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `options` | [CommitOptions](#type-commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#type-base64) |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#type-repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#type-repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#type-repositorycommitconnection)! | Paginated results per repository. |

<h5 id="type-organizationcommitrunning"><code>OrganizationCommitRunning</code></h5>

**Implements:** [OrganizationCommit](#type-organizationcommit)

Commit is actively being processed across repositories.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `options` | [CommitOptions](#type-commitoptions)! |  |
| `message` | String! |  |
| `extendedMessage` | [Base64](#type-base64) |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#type-repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#type-repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#type-repositorycommitconnection)! | Paginated results per repository. |

<h5 id="type-organizationconfiguration"><code>OrganizationConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |

<h5 id="type-organizationconnection"><code>OrganizationConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationEdge](#type-organizationedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-organizationedge"><code>OrganizationEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Organization](#type-organization)! |  |
| `cursor` | String! |  |

<h5 id="type-organizationreciperuncanceled"><code>OrganizationRecipeRunCanceled</code></h5>

**Implements:** [OrganizationChangeset](#type-organizationchangeset), [OrganizationRecipeRun](#type-organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `user` | [User](#type-user)! |  |
| `options` | [[RecipeOptionValue](#type-recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#type-reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `canceledAt` | [DateTime](#type-datetime)! | Alias for finishedAt - when the run was canceled |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |

<h5 id="type-organizationreciperunconnection"><code>OrganizationRecipeRunConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationRecipeRunEdge](#type-organizationreciperunedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-organizationreciperunedge"><code>OrganizationRecipeRunEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationRecipeRun](#type-organizationreciperun)! |  |
| `cursor` | String! |  |

<h5 id="type-organizationreciperunerror"><code>OrganizationRecipeRunError</code></h5>

**Implements:** [OrganizationChangeset](#type-organizationchangeset), [OrganizationRecipeRun](#type-organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `user` | [User](#type-user)! |  |
| `options` | [[RecipeOptionValue](#type-recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#type-reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `errorMessage` | String |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |

<h5 id="type-organizationreciperunfinished"><code>OrganizationRecipeRunFinished</code></h5>

**Implements:** [OrganizationChangeset](#type-organizationchangeset), [OrganizationRecipeRun](#type-organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `user` | [User](#type-user)! |  |
| `options` | [[RecipeOptionValue](#type-recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#type-reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `duration` | [Duration](#type-duration) |  |
| `totals` | [RecipeRunTotals](#type-reciperuntotals)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |

<h5 id="type-organizationreciperunqueued"><code>OrganizationRecipeRunQueued</code></h5>

**Implements:** [OrganizationChangeset](#type-organizationchangeset), [OrganizationRecipeRun](#type-organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `user` | [User](#type-user)! |  |
| `options` | [[RecipeOptionValue](#type-recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#type-reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `queuedAt` | [DateTime](#type-datetime)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |

<h5 id="type-organizationreciperunrunning"><code>OrganizationRecipeRunRunning</code></h5>

**Implements:** [OrganizationChangeset](#type-organizationchangeset), [OrganizationRecipeRun](#type-organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `user` | [User](#type-user)! |  |
| `options` | [[RecipeOptionValue](#type-recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#type-reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `totals` | [RecipeRunTotals](#type-reciperuntotals) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |

<h5 id="type-organizationreciperunsyncing"><code>OrganizationRecipeRunSyncing</code></h5>

**Implements:** [OrganizationChangeset](#type-organizationchangeset), [OrganizationRecipeRun](#type-organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `user` | [User](#type-user)! |  |
| `options` | [[RecipeOptionValue](#type-recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#type-reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |

<h5 id="type-pageinfo"><code>PageInfo</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `hasNextPage` | Boolean! |  |
| `hasPreviousPage` | Boolean! |  |
| `startCursor` | String |  |
| `endCursor` | String |  |

<h5 id="type-patch"><code>Patch</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `diff` | String! | Sanitized diff (does not include markers) |
| `fencedMarkerDiff` | String! | A diff with search and markup markers included in fenced \{\{UUID\}\} wrappers that correspond to ids in the markers list. |
| `markers` | [[Marker](#type-marker)!]! |  |

<h5 id="type-personalaccesstokenconfiguration"><code>PersonalAccessTokenConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `maxExpiryDays` | Int |  |

<h5 id="type-piprecipebundle"><code>PipRecipeBundle</code></h5>

**Implements:** [RecipeBundle](#type-recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

<h5 id="type-platformcapabilities"><code>PlatformCapabilities</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `artifacts` | Boolean! |  |
| `connector` | Boolean! |  |
| `changelog` | Boolean! |  |
| `codeSearch` | Boolean! |  |
| `moddy` | Boolean! |  |
| `profiling` | [Profiling](#type-profiling)! |  |

<h5 id="type-profiling"><code>Profiling</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `deployed` | Boolean! | Whether the per-tenant Pyroscope ASG, S3 bucket, and IAM are provisioned. |
| `session` | [ProfilingSession](#type-profilingsession) | The currently active profiling session, or null when profiling is off. Flipped by setProfiling. |

<h5 id="type-profilingsession"><code>ProfilingSession</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `user` | [User](#type-user)! | The user who turned profiling on. |
| `startedAt` | [DateTime](#type-datetime)! | When profiling was turned on. |
| `event` | [ProfilingEvent](#type-profilingevent)! | The primary profiling event the in-process agent is sampling. |

<h5 id="type-prompt"><code>Prompt</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `content` | [Markdown](#type-markdown)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedBy` | [User](#type-user)! |  |

<h5 id="type-pullrequestactioncanceled"><code>PullRequestActionCanceled</code></h5>

**Implements:** [PullRequestAction](#type-pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#type-pullrequestref)! |  |
| `canceledBy` | [User](#type-user)! |  |

<h5 id="type-pullrequestactionconnection"><code>PullRequestActionConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[PullRequestActionEdge](#type-pullrequestactionedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-pullrequestactionedge"><code>PullRequestActionEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [PullRequestAction](#type-pullrequestaction)! |  |
| `cursor` | String! |  |

<h5 id="type-pullrequestactionfailed"><code>PullRequestActionFailed</code></h5>

**Implements:** [PullRequestAction](#type-pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#type-pullrequestref)! |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `errorMessage` | String! |  |

<h5 id="type-pullrequestactionqueued"><code>PullRequestActionQueued</code></h5>

**Implements:** [PullRequestAction](#type-pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#type-pullrequestref)! |  |

<h5 id="type-pullrequestactionrunning"><code>PullRequestActionRunning</code></h5>

**Implements:** [PullRequestAction](#type-pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#type-pullrequestref)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-pullrequestactionsucceeded"><code>PullRequestActionSucceeded</code></h5>

**Implements:** [PullRequestAction](#type-pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#type-pullrequestref)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-pullrequestcommitsucceeded"><code>PullRequestCommitSucceeded</code></h5>

**Implements:** [RepositoryCommitSucceeded](#type-repositorycommitsucceeded), [RepositoryCommit](#type-repositorycommit)

Pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | [PullRequestStatus](#type-pullrequeststatus)! | Pull request status. |

<h5 id="type-pullrequestoptions"><code>PullRequestOptions</code></h5>

**Implements:** [CommitOptions](#type-commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | [Base64](#type-base64) |  |
| `draft` | Boolean! |  |
| `autoMergeMethod` | [MergeMethod](#type-mergemethod) | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
| `canRecreateClosedPullRequest` | Boolean! | Recreate a pull request if it was already closed. |

<h5 id="type-pullrequestref"><code>PullRequestRef</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `repositoryPath` | String! |  |
| `branch` | String! |  |
| `number` | Int! |  |

<h5 id="type-pullrequeststatus"><code>PullRequestStatus</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `mergeable` | [Mergeable](#type-mergeable)! | Can this pull request be merged or not |
| `state` | [PullRequestState](#type-pullrequeststate)! |  |
| `review` | [ReviewStatus](#type-reviewstatus)! |  |
| `buildState` | [BuildState](#type-buildstate) |  |
| `otherBlockingReasons` | [String!]! | Additional status flags that block this pull request. Can depend on the SCM service provider. |

<h5 id="type-pypiconfiguration"><code>PypiConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |

<h5 id="type-recipebundleconnection"><code>RecipeBundleConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeBundleEdge](#type-recipebundleedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-recipebundleedge"><code>RecipeBundleEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeBundle](#type-recipebundle)! |  |
| `cursor` | String! |  |

<h5 id="type-recipecategory"><code>RecipeCategory</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `displayName` | [Markdown](#type-markdown)! |  |
| `description` | [Markdown](#type-markdown)! |  |
| `recipeCount` | Int! | Total number of unique recipes in this category, including all subcategories recursively. |
| `parents` | [[RecipeCategory](#type-recipecategory)!]! |  |
| `recipes` | (first: Int = 100, after: String, where: [RecipeWhereInput](#type-recipewhereinput), orderBy: [[RecipeOrderByInput](#type-recipeorderbyinput)!]): [RecipeDescriptorConnection](#type-recipedescriptorconnection)! |  |
| `categories` | (first: Int = 100, after: String, where: [RecipeCategoryWhereInput](#type-recipecategorywhereinput), orderBy: [[RecipeCategoryOrderByInput](#type-recipecategoryorderbyinput)!]): [RecipeCategoryConnection](#type-recipecategoryconnection)! |  |

<h5 id="type-recipecategoryconnection"><code>RecipeCategoryConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeCategoryEdge](#type-recipecategoryedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-recipecategoryedge"><code>RecipeCategoryEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeCategory](#type-recipecategory)! |  |
| `cursor` | String! |  |

<h5 id="type-recipedescriptor"><code>RecipeDescriptor</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `instanceName` | String | A user-defined name for this recipe instance, which may differ from displayName when the same recipe is used multiple times in a composite recipe with different options. |
| `displayName` | [Markdown](#type-markdown)! |  |
| `description` | [Markdown](#type-markdown)! |  |
| `recipeCount` | Int |  |
| `bundle` | [RecipeBundle](#type-recipebundle)! |  |
| `options` | [[Option](#type-option)!]! |  |
| `dataTables` | [[DataTableDescriptor](#type-datatabledescriptor)!]! |  |
| `detail` | [RecipeDetail](#type-recipedetail)! | Expensive recipe detail fields that require resolving the full recipe bundle. Returns a state machine: query once to trigger resolution, poll until Finished. |
| `devCenterCards` | [[DevCenterCardDescriptor](#type-devcentercarddescriptor)!] | DevCenter card descriptors for this recipe, or null if not a DevCenter recipe. |

<h5 id="type-recipedescriptorconnection"><code>RecipeDescriptorConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeDescriptorEdge](#type-recipedescriptoredge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-recipedescriptoredge"><code>RecipeDescriptorEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeDescriptor](#type-recipedescriptor)! |  |
| `cursor` | String! |  |
| `relevance` | Float! | Relevance score for this recipe in the context of a search query. For semantic search, this represents the search relevance (0.0 to 1.0). For filter-based queries, this is always 1.0. |

<h5 id="type-recipedetailerror"><code>RecipeDetailError</code></h5>

**Implements:** [RecipeDetail](#type-recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `message` | String! |  |

<h5 id="type-recipedetailfinished"><code>RecipeDetailFinished</code></h5>

**Implements:** [RecipeDetail](#type-recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `recipeList` | (first: Int = 100, after: String): [RecipeDescriptorConnection](#type-recipedescriptorconnection)! | The list of recipes that make up this composite recipe. Returns an empty connection for non-composite (leaf) recipes. |
| `tags` | [String!]! | Tags associated with this recipe for categorization and filtering. |
| `preconditions` | [[RecipeDescriptor](#type-recipedescriptor)!]! |  |
| `graph` | [RecipeGraph](#type-recipegraph)! | Flat vertices-and-edges representation of this composite recipe tree with Singleton deduplication pre-applied. Used by the Builder UI to visualize a composite recipe in a single round trip regardless of tree depth. Atomic (leaf) recipes return a single-vertex graph. |

<h5 id="type-recipedetailloading"><code>RecipeDetailLoading</code></h5>

**Implements:** [RecipeDetail](#type-recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-recipegraph"><code>RecipeGraph</code></h5>

Flat vertices-and-edges representation of a composite recipe with
`org.openrewrite.Singleton` deduplication pre-applied. Produced by the
marketplace backend and served to visualization clients in one round trip.

| Field | Type | Description |
|-------|------|-------------|
| `rootVertexId` | Int! | ID of the root (entry-point) vertex in the graph. |
| `vertices` | [[RecipeGraphVertex](#type-recipegraphvertex)!]! |  |
| `edges` | [[RecipeGraphEdge](#type-recipegraphedge)!]! |  |

<h5 id="type-recipegraphedge"><code>RecipeGraphEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `from` | Int! |  |
| `to` | Int! |  |
| `type` | [RecipeGraphEdgeType](#type-recipegraphedgetype)! |  |

<h5 id="type-recipegraphvertex"><code>RecipeGraphVertex</code></h5>

A vertex in a RecipeGraph: a full recipe occurrence with its configured
options. Recipes that declare `org.openrewrite.Singleton` as a precondition
are deduplicated — additional occurrences are expressed as REFERENCE edges
pointing back to the first occurrence rather than as separate vertices.

| Field | Type | Description |
|-------|------|-------------|
| `id` | Int! |  |
| `descriptor` | [RecipeDescriptor](#type-recipedescriptor)! | The recipe this vertex represents. Carries recipe name (as `id`), displayName, instanceName, options, bundle, dataTables, etc. — reuse the existing RecipeDescriptor type rather than duplicating fields here. |
| `isSingleton` | Boolean! | True if this recipe declares `org.openrewrite.Singleton` as a precondition, meaning additional occurrences in the graph appear as REFERENCE edges pointing back to this vertex. |

<h5 id="type-recipeinstallationconnection"><code>RecipeInstallationConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeInstallationEdge](#type-recipeinstallationedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-recipeinstallationedge"><code>RecipeInstallationEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeInstallation](#type-recipeinstallation)! |  |
| `cursor` | String! |  |
| `requestedBy` | [User](#type-user)! | The user who initiated this installation |
| `user` | [User](#type-user) | The user whose marketplace this installation was made to. If the installation is a universal or organization installation, this field will be null. |
| `organization` | [Organization](#type-organization) | The organization to which this installation was made. If the installation is a universal or user installation, this field will be null. |

<h5 id="type-recipeinstallationerror"><code>RecipeInstallationError</code></h5>

**Implements:** [RecipeInstallation](#type-recipeinstallation)

Installation failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#type-recipebundle)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `message` | String! | Human-readable error message. |

<h5 id="type-recipeinstallationfinished"><code>RecipeInstallationFinished</code></h5>

**Implements:** [RecipeInstallation](#type-recipeinstallation)

Installation completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#type-recipebundle)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `recipes` | [[RecipeDescriptor](#type-recipedescriptor)!]! | The recipes that were installed. |

<h5 id="type-recipeinstallationprocessing"><code>RecipeInstallationProcessing</code></h5>

**Implements:** [RecipeInstallation](#type-recipeinstallation)

Installation is actively loading and resolving the recipe bundle.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#type-recipebundle)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `progress` | Float | Progress from 0.0 to 1.0, if available. |

<h5 id="type-recipeinstallationqueued"><code>RecipeInstallationQueued</code></h5>

**Implements:** [RecipeInstallation](#type-recipeinstallation)

Installation is queued and waiting to be processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#type-recipebundle)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-recipemarketplace"><code>RecipeMarketplace</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `categories` | (first: Int = 100, after: String, where: [RecipeCategoryWhereInput](#type-recipecategorywhereinput), orderBy: [[RecipeCategoryOrderByInput](#type-recipecategoryorderbyinput)!]): [RecipeCategoryConnection](#type-recipecategoryconnection)! |  |
| `recipes` | (first: Int = 100, after: String, where: [RecipeWhereInput](#type-recipewhereinput), orderBy: [[RecipeOrderByInput](#type-recipeorderbyinput)!]): [RecipeDescriptorConnection](#type-recipedescriptorconnection)! |  |
| `installations` | (first: Int = 50, after: String, where: [RecipeInstallationWhereInput](#type-recipeinstallationwhereinput), orderBy: [[RecipeInstallationOrderByInput](#type-recipeinstallationorderbyinput)!]): [RecipeInstallationConnection](#type-recipeinstallationconnection)! |  |

<h5 id="type-recipeoptionsmessage"><code>RecipeOptionsMessage</code></h5>

**Implements:** [Message](#type-message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `options` | [[Option](#type-option)!]! |  |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-recipeoptionvalue"><code>RecipeOptionValue</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#type-object)! |  |

<h5 id="type-reciperunfilechange"><code>RecipeRunFileChange</code></h5>

**Implements:** [FileChange](#type-filechange)

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#type-path)! |  |
| `beforeSourcePath` | [Path](#type-path) |  |
| `afterSourcePath` | [Path](#type-path) |  |
| `diff` | (markupLevel: [MarkupLevel](#type-markuplevel) = ERROR, showWhitespaceOnlyChanges: Boolean = true): [Patch](#type-patch) |  |
| `recipesThatMadeChanges` | [[[RecipeDescriptor](#type-recipedescriptor)!]!]! | Recipe chains that contributed changes to this file. Each inner list is one mutation event's call stack, ordered root composite first to leaf recipe last (the leaf is the narrowest recipe that actually performed the change). |

<h5 id="type-reciperunmessage"><code>RecipeRunMessage</code></h5>

**Implements:** [Message](#type-message)

Long-running recipe execution started by the LLM. Carries a typed
progress envelope while IN_PROGRESS — clients should read `progress`
rather than poking at a free-form payload. When the run reaches a
terminal state, `recipeRun` resolves via federation.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `recipeRun` | [OrganizationRecipeRun](#type-organizationreciperun) |  |
| `progress` | [RecipeRunProgress](#type-reciperunprogress) | Typed progress snapshot while the run is IN_PROGRESS. |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-reciperunprogress"><code>RecipeRunProgress</code></h5>

Typed progress envelope for an in-flight recipe run.

| Field | Type | Description |
|-------|------|-------------|
| `recipeRunId` | ID |  |
| `reposQueued` | Int |  |
| `reposRunning` | Int |  |
| `reposFinished` | Int |  |
| `reposTotal` | Int |  |

<h5 id="type-reciperuntotals"><code>RecipeRunTotals</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `timeSavings` | [Duration](#type-duration) |  |
| `filesSearched` | Int! |  |
| `filesChanged` | Int! |  |
| `filesWithResults` | Int! |  |
| `totalMarkers` | Int! |  |
| `repositoriesWithResults` | Int! |  |
| `repositoriesSuccessful` | Int! |  |
| `repositoriesWithNoChanges` | Int! |  |
| `repositoriesWithErrors` | Int! |  |
| `repositoriesInProgress` | Int! |  |

<h5 id="type-recipesearchmessage"><code>RecipeSearchMessage</code></h5>

**Implements:** [Message](#type-message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `searchResults` | [[RecipeDescriptor](#type-recipedescriptor)!]! |  |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-recipeuninstallation"><code>RecipeUninstallation</code></h5>

Result of an uninstall operation.

| Field | Type | Description |
|-------|------|-------------|
| `removedCount` | Int! | The number of recipes that were removed. |

<h5 id="type-reindexresult"><code>ReindexResult</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resetCount` | Int! | Number of repository cursors that were reset. |
| `since` | [DateTime](#type-datetime)! | The timestamp cursors were rewound to. |

<h5 id="type-repository"><code>Repository</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `path` | String! |  |
| `branch` | String! |  |
| `changeset` | String |  |
| `lstArtifact` | [LstArtifact](#type-lstartifact)! |  |

<h5 id="type-repositoryauthorization"><code>RepositoryAuthorization</code></h5>

Authorization status for accessing repository content.
Resolved by the changeset reader using a batch check against the authorization service.

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin (e.g., github.com). |
| `isAuthorized` | Boolean! | Whether the user has a valid OAuth token for this origin. |

<h5 id="type-repositorybatchchange"><code>RepositoryBatchChange</code></h5>

**Implements:** [RepositoryChangeset](#type-repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |

<h5 id="type-repositorychangesetconnection"><code>RepositoryChangesetConnection</code></h5>

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
| `edges` | [[RepositoryChangesetEdge](#type-repositorychangesetedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `completed` | Int! |  |
| `count` | Int! |  |
| `syncPending` | Int! | Repositories not yet synced. |
| `synced` | Int! | Repositories successfully synced. |
| `syncFailed` | Int! | Repositories that failed to sync. |
| `syncCanceled` | Int! | Repositories whose sync was canceled before completion. |
| `syncSkipped` | Int! | Repositories the CLI skipped during sync (typically: no LST available). |

<h5 id="type-repositorychangesetedge"><code>RepositoryChangesetEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryChangeset](#type-repositorychangeset)! |  |
| `cursor` | String! |  |

<h5 id="type-repositorycommitcanceled"><code>RepositoryCommitCanceled</code></h5>

**Implements:** [RepositoryCommit](#type-repositorycommit)

Repository commit was canceled.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `options` | [CommitOptions](#type-commitoptions)! | The commit options. Use `__typename` to determine commit type. |

<h5 id="type-repositorycommitconnection"><code>RepositoryCommitConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryCommitEdge](#type-repositorycommitedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |
| `completedCount` | Int! | Count of repository commits that have reached a terminal state (succeeded, failed, canceled, or no changes). Pair with `count` to show progress: "Completed X / Y". |

<h5 id="type-repositorycommitedge"><code>RepositoryCommitEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryCommit](#type-repositorycommit)! |  |
| `cursor` | String! |  |

<h5 id="type-repositorycommitfailed"><code>RepositoryCommitFailed</code></h5>

**Implements:** [RepositoryCommit](#type-repositorycommit)

Repository commit failed with an error.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `errorMessage` | String! | Human-readable error message. |
| `retryCount` | Int | Number of retry attempts made. |
| `options` | [CommitOptions](#type-commitoptions)! | The commit options. Use `__typename` to determine commit type. |

<h5 id="type-repositorycommitnochanges"><code>RepositoryCommitNoChanges</code></h5>

**Implements:** [RepositoryCommit](#type-repositorycommit)

Repository commit completed but yielded no changes.
Generally occurs when applying a patch does not produce any changes to commit.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `options` | [CommitOptions](#type-commitoptions)! | The commit options. Use `__typename` to determine commit type. |

<h5 id="type-repositorycommitqueued"><code>RepositoryCommitQueued</code></h5>

**Implements:** [RepositoryCommit](#type-repositorycommit)

Repository commit is queued and waiting to be processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `rateLimitReset` | [DateTime](#type-datetime) | Time when rate limit expires (if rate limited). |
| `options` | [CommitOptions](#type-commitoptions)! | The commit options. Use `__typename` to determine commit type. |

<h5 id="type-repositorycommitrunning"><code>RepositoryCommitRunning</code></h5>

**Implements:** [RepositoryCommit](#type-repositorycommit)

Repository commit is actively being processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `options` | [CommitOptions](#type-commitoptions)! | The commit options. Use `__typename` to determine commit type. |

<h5 id="type-repositoryconnection"><code>RepositoryConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryEdge](#type-repositoryedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-repositoryedge"><code>RepositoryEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Repository](#type-repository)! |  |
| `cursor` | String! |  |

<h5 id="type-repositoryreciperuncanceled"><code>RepositoryRecipeRunCanceled</code></h5>

**Implements:** [RepositoryRecipeRun](#type-repositoryreciperun), [RepositoryChangeset](#type-repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#type-repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |

<h5 id="type-repositoryreciperunconnection"><code>RepositoryRecipeRunConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryRecipeRunEdge](#type-repositoryreciperunedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-repositoryreciperunedge"><code>RepositoryRecipeRunEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryRecipeRun](#type-repositoryreciperun)! |  |
| `cursor` | String! |  |

<h5 id="type-repositoryreciperunerror"><code>RepositoryRecipeRunError</code></h5>

**Implements:** [RepositoryRecipeRun](#type-repositoryreciperun), [RepositoryChangeset](#type-repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#type-repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime) |  |
| `errorReason` | [RepositoryErrorReason](#type-repositoryerrorreason) |  |
| `message` | String |  |

<h5 id="type-repositoryreciperunfinished"><code>RepositoryRecipeRunFinished</code></h5>

**Implements:** [RepositoryRecipeRun](#type-repositoryreciperun), [RepositoryChangeset](#type-repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#type-repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |
| `startedAt` | [DateTime](#type-datetime) |  |
| `finishedAt` | [DateTime](#type-datetime) |  |
| `timeSavings` | [Duration](#type-duration) |  |

<h5 id="type-repositoryreciperunnolst"><code>RepositoryRecipeRunNoLst</code></h5>

**Implements:** [RepositoryRecipeRun](#type-repositoryreciperun), [RepositoryChangeset](#type-repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#type-repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |

<h5 id="type-repositoryreciperunqueued"><code>RepositoryRecipeRunQueued</code></h5>

**Implements:** [RepositoryRecipeRun](#type-repositoryreciperun), [RepositoryChangeset](#type-repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#type-repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |
| `queuedAt` | [DateTime](#type-datetime) |  |

<h5 id="type-repositoryreciperunrunning"><code>RepositoryRecipeRunRunning</code></h5>

**Implements:** [RepositoryRecipeRun](#type-repositoryreciperun), [RepositoryChangeset](#type-repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#type-repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |
| `startedAt` | [DateTime](#type-datetime) |  |

<h5 id="type-reviewstatus"><code>ReviewStatus</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `approvedBy` | [String!] |  |
| `reviewDecision` | [ReviewDecision](#type-reviewdecision)! |  |

<h5 id="type-revoketokenresult"><code>RevokeTokenResult</code></h5>

Result of revoking an SCM OAuth token.

| Field | Type | Description |
|-------|------|-------------|
| `success` | Boolean! | True if the token was revoked (or didn't exist). |
| `error` | String | Error message if revocation failed. |

<h5 id="type-s3configuration"><code>S3Configuration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#type-httptoolconnectivity)! |  |
| `region` | String |  |
| `endpointUrl` | String |  |

<h5 id="type-scmtokeninfo"><code>ScmTokenInfo</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `created` | [DateTime](#type-datetime)! |  |
| `expiresAt` | [DateTime](#type-datetime) |  |

<h5 id="type-searchresult"><code>SearchResult</code></h5>

**Implements:** [Marker](#type-marker)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `type` | String! |  |
| `description` | String |  |

<h5 id="type-sendmessageresult"><code>SendMessageResult</code></h5>

Handle returned by `createConversation` / `sendMessage`. Clients should
poll `conversation.messages(after: initialCursor)` using
`turnState.recommendedPollIntervalMs` as the cadence hint.

| Field | Type | Description |
|-------|------|-------------|
| `conversation` | [Conversation](#type-conversation)! |  |
| `initialCursor` | String! |  |
| `turnState` | [ConversationTurnState](#type-conversationturnstate)! |  |

<h5 id="type-textmessage"><code>TextMessage</code></h5>

**Implements:** [Message](#type-message)

A text message from either the human user or the chatbot.
Check the `user` field to distinguish sender.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `content` | [Markdown](#type-markdown)! |  |
| `truncated` | Boolean! | True when the LLM response was cut off by the token limit. |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-toolinfo"><code>ToolInfo</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `version` | String |  |
| `arguments` | String |  |

<h5 id="type-uiconfiguration"><code>UiConfiguration</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `moreHelp` | [[MoreHelpLink](#type-morehelplink)!] |  |
| `loginText` | String |  |
| `loginLinks` | [[MoreHelpLink](#type-morehelplink)!] |  |
| `cliDownloadInstructions` | [CliDownloadInstructionLink](#type-clidownloadinstructionlink) |  |

<h5 id="type-user"><code>User</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `email` | String! |  |
| `username` | String |  |
| `role` | [UserRole](#type-userrole) |  |
| `lastActive` | [DateTime](#type-datetime) |  |
| `tokens` | (first: Int = 100, after: String, where: [AccessTokenWhereInput](#type-accesstokenwhereinput), orderBy: [[AccessTokenOrderByInput](#type-accesstokenorderbyinput)!]): [AccessTokenConnection](#type-accesstokenconnection)! |  |
| `moddy` | [Moddy](#type-moddy)! |  |

<h5 id="type-userconnection"><code>UserConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[UsersEdge](#type-usersedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-usersedge"><code>UsersEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [User](#type-user)! |  |
| `cursor` | String! |  |

<h5 id="type-visualizationavailable"><code>VisualizationAvailable</code></h5>

**Implements:** [Visualization](#type-visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#type-visualizationdescriptor)! |  |
| `changesetId` | ID! | The changeset (recipe run or batch change) this visualization is available for. |

<h5 id="type-visualizationconnection"><code>VisualizationConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[VisualizationEdge](#type-visualizationedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-visualizationdescriptor"><code>VisualizationDescriptor</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | [Markdown](#type-markdown)! |  |
| `description` | [Markdown](#type-markdown)! |  |
| `image` | [Base64](#type-base64)! |  |
| `options` | [[VisualizationOption](#type-visualizationoption)!]! |  |

<h5 id="type-visualizationedge"><code>VisualizationEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Visualization](#type-visualization)! |  |
| `cursor` | String! |  |

<h5 id="type-visualizationerror"><code>VisualizationError</code></h5>

**Implements:** [Visualization](#type-visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#type-visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `message` | String! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#type-visualizationrepositoryconnection)! |  |

<h5 id="type-visualizationfinished"><code>VisualizationFinished</code></h5>

**Implements:** [Visualization](#type-visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#type-visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `duration` | [Duration](#type-duration) |  |
| `output` | [VisualizationOutput](#type-visualizationoutput)! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#type-visualizationrepositoryconnection)! |  |

<h5 id="type-visualizationimageoutput"><code>VisualizationImageOutput</code></h5>

**Implements:** [VisualizationOutput](#type-visualizationoutput)

| Field | Type | Description |
|-------|------|-------------|
| `format` | [ImageFormat](#type-imageformat)! |  |
| `data` | [Base64](#type-base64)! |  |

<h5 id="type-visualizationoption"><code>VisualizationOption</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#type-object) |  |
| `type` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `example` | String |  |
| `valid` | [String] |  |
| `required` | Boolean! |  |

<h5 id="type-visualizationplotlyoutput"><code>VisualizationPlotlyOutput</code></h5>

**Implements:** [VisualizationOutput](#type-visualizationoutput)

| Field | Type | Description |
|-------|------|-------------|
| `data` | [Base64](#type-base64)! | Plotly JSON data (MIME type: application/vnd.plotly.v1+json) |

<h5 id="type-visualizationprocessing"><code>VisualizationProcessing</code></h5>

**Implements:** [Visualization](#type-visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#type-visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#type-visualizationrepositoryconnection)! |  |

<h5 id="type-visualizationrepository"><code>VisualizationRepository</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `state` | [VisualizationRepositoryRunState](#type-visualizationrepositoryrunstate)! |  |
| `stateMessage` | String |  |
| `repository` | [Repository](#type-repository)! |  |

<h5 id="type-visualizationrepositoryconnection"><code>VisualizationRepositoryConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[VisualizationRepositoryEdge](#type-visualizationrepositoryedge)!]! |  |
| `pageInfo` | [PageInfo](#type-pageinfo)! |  |
| `count` | Int! |  |

<h5 id="type-visualizationrepositoryedge"><code>VisualizationRepositoryEdge</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `node` | [VisualizationRepository](#type-visualizationrepository)! |  |
| `cursor` | String! |  |

<h5 id="type-yamlrecipebundle"><code>YamlRecipeBundle</code></h5>

**Implements:** [RecipeBundle](#type-recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | [Base64](#type-base64)! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |
| `primary` | [RecipeDescriptor](#type-recipedescriptor) | The primary recipe in this bundle. When specified, only this recipe is shown in marketplace categories, hiding other recipes from this bundle. |

### Interfaces

<h5 id="type-auditlogsdownload"><code>AuditLogsDownload</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |

<h5 id="type-bulkpullrequestaction"><code>BulkPullRequestAction</code></h5>

A bulk pull request action (approve, merge, close) that operates on potentially
multiple repositories. Use `__typename` to determine the current state.

Each `BulkPullRequestAction` contains individual `PullRequestAction` entries
representing the state of each repository targeted by the bulk operation.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#type-pullrequestactiontype)! |  |
| `user` | [User](#type-user)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#type-pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#type-pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#type-pullrequestactionconnection)! |  |

<h5 id="type-changelogentry"><code>ChangelogEntry</code></h5>

A single entry in the changelog — either a commit or a pull request.
Use `__typename` to distinguish between `ChangelogCommit` and `ChangelogPullRequest`.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `title` | String! | Commit message (for commits) or PR title (for pull requests). |
| `author` | [ChangeParticipant](#type-changeparticipant)! | The author of the commit or PR. |
| `repository` | [Repository](#type-repository)! | The repository this entry belongs to. |
| `url` | String! | URL to the commit or PR in the VCS provider. |
| `branch` | String! | The target branch (for PRs) or the branch committed to (for commits). |
| `updatedAt` | [DateTime](#type-datetime)! | When this entry was last updated in the VCS provider. |
| `createdAt` | [DateTime](#type-datetime)! | When this entry was created in the VCS provider. |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) | If this activity was originated by Moderne, the changeset it belongs to. |
| `buildState` | [BuildState](#type-buildstate) | CI status (e.g. from GitHub Actions, GitLab pipelines). Null if no CI is configured or status has not been fetched yet. |
| `diffstat` | [DiffStat](#type-diffstat)! | Lines added and removed. |

<h5 id="type-commitoptions"><code>CommitOptions</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |

<h5 id="type-datatable"><code>DataTable</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#type-datatabledescriptor)! |  |
| `instanceName` | String! | A human-readable name for this data table instance, describing what it contains. For example, "Method calls matching \`java.util.List add(..)\`". Defaults to the data table's display name when not explicitly set. |
| `group` | String | The group identifying this data table bucket. For community tables this is the group name (e.g., "architecture"). Null for ungrouped/private tables. |

<h5 id="type-devcenterrun"><code>DevCenterRun</code></h5>

A DevCenter run represents the execution of a DevCenter recipe.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#type-datetime)! | When this DevCenter run started. |
| `changeset` | [OrganizationChangeset](#type-organizationchangeset) | The underlying recipe run changeset. |

<h5 id="type-filechange"><code>FileChange</code></h5>

A change to a single file within a repository changeset.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#type-path)! | Path to the file relative to repository root. |
| `beforeSourcePath` | [Path](#type-path) | The source path before the change (from the diff's `--- a/...` line). Null for newly created files. |
| `afterSourcePath` | [Path](#type-path) | The source path after the change (from the diff's `+++ b/...` line). Null for deleted files. |
| `diff` | (markupLevel: [MarkupLevel](#type-markuplevel) = ERROR, showWhitespaceOnlyChanges: Boolean = true): [Patch](#type-patch) | Get the diff for this file. |

<h5 id="type-marker"><code>Marker</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |

<h5 id="type-message"><code>Message</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! |  |
| `state` | [MessageState](#type-messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-organizationchangeset"><code>OrganizationChangeset</code></h5>

An organization-wide changeset represents code changes or search results
across multiple repositories. Implemented by OrganizationRecipeRun* and BatchChange.

Note: This is a shared interface definition. Subgraphs that need to resolve this
interface must define the implementation types (OrganizationRecipeRun*, BatchChange).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this changeset. |
| `user` | [User](#type-user)! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this changeset. Each visualization starts as Available and transitions to Processing/Finished/Error when runVisualization mutation is called. |

<h5 id="type-organizationcommit"><code>OrganizationCommit</code></h5>

An organization-level commit operation represents applying changes across multiple
repositories. Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#type-user)! | The user who initiated the commit. |
| `options` | [CommitOptions](#type-commitoptions)! | The commit options (branch, PR settings, etc.). |
| `message` | String! | The commit message. |
| `extendedMessage` | [Base64](#type-base64) | Extended commit message (Base64 encoded). |
| `repositories` | (first: Int = 50, after: String, where: [RepositoryCommitWhereInput](#type-repositorycommitwhereinput), orderBy: [[RepositoryCommitOrderByInput](#type-repositorycommitorderbyinput)!]): [RepositoryCommitConnection](#type-repositorycommitconnection)! | Paginated results per repository. |

<h5 id="type-organizationreciperun"><code>OrganizationRecipeRun</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#type-bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#type-bulkpullrequestactionconnection)! | Bulk pull request actions for recipe-run changesets. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#type-organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#type-organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#type-organizationcommitconnection) | Commit operations initiated from this recipe run. |
| `recipe` | [RecipeDescriptor](#type-recipedescriptor) |  |
| `user` | [User](#type-user)! |  |
| `options` | [[RecipeOptionValue](#type-recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#type-datetime)! |  |
| `lastUpdatedAt` | [DateTime](#type-datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#type-reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#type-organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#type-repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#type-repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#type-datatablewhereinput), orderBy: [[DataTableOrderByInput](#type-datatableorderbyinput)!]): [DataTableConnection](#type-datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#type-visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#type-visualizationorderbyinput)!]): [VisualizationConnection](#type-visualizationconnection)! | Visualizations produced by this recipe run. |

<h5 id="type-pullrequestaction"><code>PullRequestAction</code></h5>

The state of an individual repository within a `BulkPullRequestAction`.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#type-pullrequestref)! |  |

<h5 id="type-recipebundle"><code>RecipeBundle</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int | Number of top-level recipes contributed by this bundle's package. Null when the bundle has not yet been resolved into the marketplace (e.g. an installation still in progress). |

<h5 id="type-recipedetail"><code>RecipeDetail</code></h5>

State machine for recipe detail resolution. Querying the `detail` field on a
RecipeDescriptor triggers background resolution of the full recipe bundle.
Poll until `__typename` is `RecipeDetailFinished`.

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-recipeinstallation"><code>RecipeInstallation</code></h5>

Common fields for all recipe installation states.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#type-recipebundle)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |

<h5 id="type-repositorychangeset"><code>RepositoryChangeset</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! | Authorization status for accessing this repository's content. Check this before accessing file results. |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! | File-level changes within this repository. |

<h5 id="type-repositorycommit"><code>RepositoryCommit</code></h5>

A commit result for a single repository within an organization-level commit operation.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |

<h5 id="type-repositorycommitsucceeded"><code>RepositoryCommitSucceeded</code></h5>

Repository commit completed successfully.
Use `__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `startedAt` | [DateTime](#type-datetime)! |  |
| `finishedAt` | [DateTime](#type-datetime)! |  |
| `resultLink` | String | Link to the commit or pull request result. |

<h5 id="type-repositoryreciperun"><code>RepositoryRecipeRun</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#type-repository)! |  |
| `authorization` | [RepositoryAuthorization](#type-repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#type-repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#type-filechangewhereinput), orderBy: [[FileChangeOrderByInput](#type-filechangeorderbyinput)!]): [FileChangeConnection](#type-filechangeconnection)! |  |

<h5 id="type-scmconnection"><code>ScmConnection</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#type-scmtokeninfo)!]! |  |

<h5 id="type-visualization"><code>Visualization</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#type-visualizationdescriptor)! |  |

<h5 id="type-visualizationoutput"><code>VisualizationOutput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `data` | [Base64](#type-base64)! |  |

### Enums

<h5 id="type-accesstokenorderbyfield"><code>AccessTokenOrderByField</code></h5>

- `CREATED`
- `EXPIRES_AT`

<h5 id="type-auditactiontype"><code>AuditActionType</code></h5>

- `CREATE`
- `READ`
- `UPDATE`
- `DELETE`

<h5 id="type-auditlogexportformat"><code>AuditLogExportFormat</code></h5>

- `CEF`
- `CSV`

<h5 id="type-auditlogorderbyfield"><code>AuditLogOrderByField</code></h5>

- `TIMESTAMP`
- `USER_ID`
- `TARGET`
- `ACTION`

<h5 id="type-auditlogsdownloadorderbyfield"><code>AuditLogsDownloadOrderByField</code></h5>

- `STARTED_AT`

<h5 id="type-auditoutcome"><code>AuditOutcome</code></h5>

- `SUCCESS`
- `FAILURE`

<h5 id="type-buildstate"><code>BuildState</code></h5>

- `PENDING`
- `IN_PROGRESS`
- `FAILED`
- `SKIPPED`
- `SUCCESSFUL`
- `NOT_REQUIRED`

<h5 id="type-bulkpullrequestactionorderbyfield"><code>BulkPullRequestActionOrderByField</code></h5>

- `CREATED_AT`
- `STARTED_AT`
- `FINISHED_AT`

<h5 id="type-bulkpullrequestactionstate"><code>BulkPullRequestActionState</code></h5>

The lifecycle state of a `BulkPullRequestAction`. Matches the `__typename`
of the concrete state types (Queued, Running, Finished, Canceled, Error).

- `QUEUED`
- `RUNNING`
- `FINISHED`
- `CANCELED`
- `ERROR`

<h5 id="type-changelogentryorderbyfield"><code>ChangelogEntryOrderByField</code></h5>

- `UPDATED_AT`
- `CREATED_AT`
- `TITLE`
- `REPOSITORY_PATH`

<h5 id="type-changelogentrytype"><code>ChangelogEntryType</code></h5>

Discriminator for filtering by entry type.

- `COMMIT`
- `PULL_REQUEST`

<h5 id="type-changelogparticipantorderbyfield"><code>ChangelogParticipantOrderByField</code></h5>

- `USERNAME`
- `EMAIL`
- `NAME`

<h5 id="type-commitoption"><code>CommitOption</code></h5>

- `DIRECT`
- `BRANCH`
- `FORK`
- `PULL_REQUEST`
- `FORK_AND_PULL_REQUEST`
- `NONE`

<h5 id="type-connectororderbyfield"><code>ConnectorOrderByField</code></h5>

- `NICKNAME`
- `VERSION`

<h5 id="type-connectortooltype"><code>ConnectorToolType</code></h5>

- `GITHUB`
- `GITLAB`
- `BITBUCKET`
- `BITBUCKET_CLOUD`
- `AZURE_DEVOPS`
- `ARTIFACTORY`
- `MAVEN`
- `PYPI`
- `NPM`
- `NUGET`
- `HTTP_TOOL`
- `ORGANIZATION`
- `LLM`
- `S3`

<h5 id="type-contributorrole"><code>ContributorRole</code></h5>

The participant's role for filtering.

- `AUTHOR`
- `ASSIGNEE`
- `CLOSED_BY`
- `REVIEWER`

<h5 id="type-conversationorderbyfield"><code>ConversationOrderByField</code></h5>

- `STARTED_AT`
- `LAST_UPDATED_AT`

<h5 id="type-conversationphase"><code>ConversationPhase</code></h5>

- `IDLE`
- `AWAITING_LLM`
- `STREAMING_TEXT`
- `TOOL_RUNNING`
- `ERRORED`

<h5 id="type-datatableformat"><code>DataTableFormat</code></h5>

- `CSV`
- `XLSX`

<h5 id="type-datatableorderbyfield"><code>DataTableOrderByField</code></h5>

- `DATA_TABLE`
- `STARTED_AT`

<h5 id="type-devcenteraggregation"><code>DevCenterAggregation</code></h5>

How DevCenter card results are aggregated across repositories.

- `PER_REPOSITORY`
- `PER_OCCURRENCE`

<h5 id="type-devcenterrunorderbyfield"><code>DevCenterRunOrderByField</code></h5>

- `STARTED_AT`
- `STATE`

<h5 id="type-devcenterrunstate"><code>DevCenterRunState</code></h5>

Execution state of a DevCenter run.

- `RUNNING`
- `FINISHED`
- `CANCELED`
- `ERROR`

<h5 id="type-filechangeorderbyfield"><code>FileChangeOrderByField</code></h5>

- `PATH`

<h5 id="type-imageformat"><code>ImageFormat</code></h5>

- `SVG`
- `GIF`
- `JPEG`
- `PNG`

<h5 id="type-llmprovider"><code>LlmProvider</code></h5>

- `ANTHROPIC`
- `GEMINI`
- `MISTRAL`
- `OPEN_AI`

<h5 id="type-markuplevel"><code>MarkupLevel</code></h5>

- `DEBUG`
- `INFO`
- `WARNING`
- `ERROR`
- `NONE`

<h5 id="type-mergeable"><code>Mergeable</code></h5>

- `MERGEABLE`
- `BLOCKED`
- `UNKNOWN`

<h5 id="type-mergemethod"><code>MergeMethod</code></h5>

- `MERGE`
- `SQUASH`
- `REBASE`

<h5 id="type-messagestate"><code>MessageState</code></h5>

- `IN_PROGRESS`
- `COMPLETED`

<h5 id="type-organizationchangesetorderbyfield"><code>OrganizationChangesetOrderByField</code></h5>

- `CREATED_AT`
- `TYPE`
- `USER`

<h5 id="type-organizationchangesettype"><code>OrganizationChangesetType</code></h5>

- `RECIPE_RUN`
- `BATCH_CHANGE`

<h5 id="type-organizationcommitorderbyfield"><code>OrganizationCommitOrderByField</code></h5>

- `STARTED_AT`

<h5 id="type-organizationorderbyfield"><code>OrganizationOrderByField</code></h5>

- `NAME`

<h5 id="type-organizationreciperunorderbyfield"><code>OrganizationRecipeRunOrderByField</code></h5>

- `STARTED_AT`
- `ENDED_AT`
- `STATE`
- `USER`

<h5 id="type-organizationreciperunstate"><code>OrganizationRecipeRunState</code></h5>

- `QUEUED`
- `SYNCING`
- `RUNNING`
- `FINISHED`
- `CANCELED`
- `ERROR`

<h5 id="type-profilingevent"><code>ProfilingEvent</code></h5>

The primary event the Pyroscope agent samples on. async-profiler can only
collect one of these at a time as the primary event; alloc and lock
sampling run on separate channels and are always on.

- `CPU`
- `WALL`

<h5 id="type-pullrequestactionorderbyfield"><code>PullRequestActionOrderByField</code></h5>

- `REPOSITORY_PATH`
- `STATE`
- `STARTED_AT`

<h5 id="type-pullrequestactionstate"><code>PullRequestActionState</code></h5>

- `QUEUED`
- `IN_PROGRESS`
- `SUCCESSFUL`
- `FAILED`
- `CANCELED`

<h5 id="type-pullrequestactiontype"><code>PullRequestActionType</code></h5>

- `APPROVE`
- `MERGE`
- `CLOSE`

<h5 id="type-pullrequeststate"><code>PullRequestState</code></h5>

- `OPEN`
- `DRAFT`
- `CLOSED`
- `MERGED`

<h5 id="type-recipebundleorderbyfield"><code>RecipeBundleOrderByField</code></h5>

- `PACKAGE_NAME`
- `VERSION`
- `REQUESTED_VERSION`
- `ECOSYSTEM`

<h5 id="type-recipecategoryorderbyfield"><code>RecipeCategoryOrderByField</code></h5>

- `DISPLAY_NAME`
- `RECIPE_COUNT`

<h5 id="type-recipeecosystem"><code>RecipeEcosystem</code></h5>

- `Maven`
- `NPM`
- `YAML`
- `Pip`
- `Nuget`
- `Go`

<h5 id="type-recipegraphedgetype"><code>RecipeGraphEdgeType</code></h5>

- `RECIPE`
- `PRECONDITION`
- `REFERENCE`

<h5 id="type-recipeinstallationorderbyfield"><code>RecipeInstallationOrderByField</code></h5>

- `STARTED_AT`
- `STATUS`

<h5 id="type-recipeinstallationstatus"><code>RecipeInstallationStatus</code></h5>

- `QUEUED`
- `PROCESSING`
- `FINISHED`
- `ERROR`

<h5 id="type-recipeorderbyfield"><code>RecipeOrderByField</code></h5>

- `ID`
- `DISPLAY_NAME`
- `RECIPE_COUNT`
- `RELEVANCE`

<h5 id="type-reciperunpriority"><code>RecipeRunPriority</code></h5>

Priority level for recipe runs.
HIGH priority runs target small organizations (≤100 repositories).
LOW priority runs target large organizations (>100 repositories).

- `HIGH`
- `LOW`

<h5 id="type-repositorychangesetorderbyfield"><code>RepositoryChangesetOrderByField</code></h5>

- `PATH`
- `ORIGIN`
- `FILES_CHANGED`
- `SYNC_STATUS`

<h5 id="type-repositorychangesetstate"><code>RepositoryChangesetState</code></h5>

Result state of a repository within a changeset.

- `QUEUED`
- `RUNNING`
- `SUCCESS`
- `ERROR`
- `NO_LST`
- `CANCELED`

<h5 id="type-repositorycommitorderbyfield"><code>RepositoryCommitOrderByField</code></h5>

- `STARTED_AT`

<h5 id="type-repositoryerrorreason"><code>RepositoryErrorReason</code></h5>

- `FAILED_LOAD_AST`
- `FAILED_LOAD_RECIPE`
- `TIMEOUT`
- `RECIPE_ERROR`

<h5 id="type-repositoryorderbyfield"><code>RepositoryOrderByField</code></h5>

- `ORIGIN`
- `PATH`
- `BRANCH`
- `CHANGESET`
- `LST_ARTIFACT_PUBLISHED`

<h5 id="type-repositoryreciperunorderbyfield"><code>RepositoryRecipeRunOrderByField</code></h5>

- `PATH`
- `ORIGIN`
- `STATE`

<h5 id="type-repositorysyncstatus"><code>RepositorySyncStatus</code></h5>

Sync status of a repository within a recipe run.
Tracks whether the repository has been synced (cloned + LST downloaded)
before the recipe execution phase begins.

`SKIPPED` indicates the CLI elected not to sync the repository — typically
because there is no LST available to fetch — and is distinct from `FAILED`,
which indicates an actual error during the sync attempt. `CANCELED` is set
when sync was interrupted (e.g., the run was canceled before the repository's
sync completed).

- `PENDING`
- `SYNCED`
- `FAILED`
- `CANCELED`
- `SKIPPED`

<h5 id="type-reviewdecision"><code>ReviewDecision</code></h5>

- `APPROVED`
- `CHANGES_REQUESTED`
- `REVIEW_REQUIRED`
- `REVIEW_NOT_REQUIRED`
- `UNKNOWN`

<h5 id="type-scmtype"><code>ScmType</code></h5>

- `GITHUB`
- `BITBUCKET`
- `BITBUCKET_CLOUD`
- `GITLAB`
- `AZURE_DEVOPS`

<h5 id="type-sortorder"><code>SortOrder</code></h5>

- `ASC`
- `DESC`

<h5 id="type-userorderbyfield"><code>UserOrderByField</code></h5>

- `EMAIL`
- `USERNAME`
- `ROLE`
- `LAST_ACTIVE`

<h5 id="type-userrole"><code>UserRole</code></h5>

- `ADMIN`
- `USER`

<h5 id="type-visualizationorderbyfield"><code>VisualizationOrderByField</code></h5>

- `VISUALIZATION`
- `STARTED_AT`

<h5 id="type-visualizationrepositoryrunstate"><code>VisualizationRepositoryRunState</code></h5>

- `QUEUED`
- `PROCESSING`
- `FINISHED`
- `FINISHED_EMPTY`
- `NO_LST`
- `ERROR`

### Input types

<h5 id="type-accesstokenorderbyinput"><code>AccessTokenOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AccessTokenOrderByField](#type-accesstokenorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-accesstokenwhereinput"><code>AccessTokenWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `description` | [StringFilter](#type-stringfilter) |  |
| `created` | [DateTimeFilter](#type-datetimefilter) |  |
| `expiresAt` | [DateTimeFilter](#type-datetimefilter) |  |
| `_and` | [[AccessTokenWhereInput](#type-accesstokenwhereinput)!] |  |
| `_or` | [[AccessTokenWhereInput](#type-accesstokenwhereinput)!] |  |
| `_not` | [AccessTokenWhereInput](#type-accesstokenwhereinput) |  |

<h5 id="type-auditactiontypefilter"><code>AuditActionTypeFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditActionType](#type-auditactiontype) |  |
| `_neq` | [AuditActionType](#type-auditactiontype) |  |
| `_in` | [[AuditActionType](#type-auditactiontype)!] |  |
| `_nin` | [[AuditActionType](#type-auditactiontype)!] |  |

<h5 id="type-auditlogexportformatfilter"><code>AuditLogExportFormatFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditLogExportFormat](#type-auditlogexportformat) |  |
| `_neq` | [AuditLogExportFormat](#type-auditlogexportformat) |  |
| `_in` | [[AuditLogExportFormat](#type-auditlogexportformat)!] |  |
| `_nin` | [[AuditLogExportFormat](#type-auditlogexportformat)!] |  |

<h5 id="type-auditlogorderbyinput"><code>AuditLogOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AuditLogOrderByField](#type-auditlogorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-auditlogsdownloadorderbyinput"><code>AuditLogsDownloadOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AuditLogsDownloadOrderByField](#type-auditlogsdownloadorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-auditlogsdownloadwhereinput"><code>AuditLogsDownloadWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `format` | [AuditLogExportFormatFilter](#type-auditlogexportformatfilter) |  |
| `_and` | [[AuditLogsDownloadWhereInput](#type-auditlogsdownloadwhereinput)!] |  |
| `_or` | [[AuditLogsDownloadWhereInput](#type-auditlogsdownloadwhereinput)!] |  |
| `_not` | [AuditLogsDownloadWhereInput](#type-auditlogsdownloadwhereinput) |  |

<h5 id="type-auditlogwhereinput"><code>AuditLogWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `user` | [UserWhereInput](#type-userwhereinput) |  |
| `target` | [StringFilter](#type-stringfilter) |  |
| `action` | [StringFilter](#type-stringfilter) |  |
| `actionType` | [AuditActionTypeFilter](#type-auditactiontypefilter) |  |
| `outcome` | [AuditOutcomeFilter](#type-auditoutcomefilter) |  |
| `description` | [StringFilter](#type-stringfilter) |  |
| `timestamp` | [DateTimeFilter](#type-datetimefilter) |  |
| `_and` | [[AuditLogWhereInput](#type-auditlogwhereinput)!] |  |
| `_or` | [[AuditLogWhereInput](#type-auditlogwhereinput)!] |  |
| `_not` | [AuditLogWhereInput](#type-auditlogwhereinput) |  |

<h5 id="type-auditoutcomefilter"><code>AuditOutcomeFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditOutcome](#type-auditoutcome) |  |
| `_neq` | [AuditOutcome](#type-auditoutcome) |  |

<h5 id="type-booleanfilter"><code>BooleanFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | Boolean |  |
| `_neq` | Boolean |  |

<h5 id="type-buildstatefilter"><code>BuildStateFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [BuildState](#type-buildstate) |  |
| `_neq` | [BuildState](#type-buildstate) |  |
| `_in` | [[BuildState](#type-buildstate)!] |  |
| `_nin` | [[BuildState](#type-buildstate)!] |  |

<h5 id="type-bulkpullrequestactionorderbyinput"><code>BulkPullRequestActionOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [BulkPullRequestActionOrderByField](#type-bulkpullrequestactionorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-bulkpullrequestactionstatefilter"><code>BulkPullRequestActionStateFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [BulkPullRequestActionState](#type-bulkpullrequestactionstate) |  |
| `_neq` | [BulkPullRequestActionState](#type-bulkpullrequestactionstate) |  |
| `_in` | [[BulkPullRequestActionState](#type-bulkpullrequestactionstate)!] |  |
| `_nin` | [[BulkPullRequestActionState](#type-bulkpullrequestactionstate)!] |  |

<h5 id="type-bulkpullrequestactionwhereinput"><code>BulkPullRequestActionWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `actionType` | [PullRequestActionTypeFilter](#type-pullrequestactiontypefilter) |  |
| `state` | [BulkPullRequestActionStateFilter](#type-bulkpullrequestactionstatefilter) |  |
| `startedAt` | [DateTimeFilter](#type-datetimefilter) | Filter by `startedAt`. Matches RUNNING/FINISHED/ERROR/CANCELED states that have a startedAt value; QUEUED entries (no startedAt) are excluded when a bound is supplied. |
| `user` | [UserWhereInput](#type-userwhereinput) |  |
| `_and` | [[BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput)!] |  |
| `_or` | [[BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput)!] |  |
| `_not` | [BulkPullRequestActionWhereInput](#type-bulkpullrequestactionwhereinput) |  |

<h5 id="type-changelogauthorwhereinput"><code>ChangelogAuthorWhereInput</code></h5>

Filter by changelog author.

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#type-stringfilter) |  |
| `email` | [StringFilter](#type-stringfilter) |  |
| `username` | [StringFilter](#type-stringfilter) |  |
| `role` | [ContributorRole](#type-contributorrole) | The role of the contributor to filter on. |
| `_and` | [[ChangelogAuthorWhereInput](#type-changelogauthorwhereinput)!] |  |
| `_or` | [[ChangelogAuthorWhereInput](#type-changelogauthorwhereinput)!] |  |
| `_not` | [ChangelogAuthorWhereInput](#type-changelogauthorwhereinput) |  |

<h5 id="type-changelogentryorderbyinput"><code>ChangelogEntryOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ChangelogEntryOrderByField](#type-changelogentryorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-changelogentrytypefilter"><code>ChangelogEntryTypeFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ChangelogEntryType](#type-changelogentrytype) |  |
| `_neq` | [ChangelogEntryType](#type-changelogentrytype) |  |
| `_in` | [[ChangelogEntryType](#type-changelogentrytype)!] |  |
| `_nin` | [[ChangelogEntryType](#type-changelogentrytype)!] |  |

<h5 id="type-changelogentrywhereinput"><code>ChangelogEntryWhereInput</code></h5>

Filter input for changelog entries.

| Field | Type | Description |
|-------|------|-------------|
| `entryType` | [ChangelogEntryTypeFilter](#type-changelogentrytypefilter) | Filter by entry type (COMMIT or PULL_REQUEST). |
| `title` | [StringFilter](#type-stringfilter) | Full-text search on title. |
| `author` | [ChangelogAuthorWhereInput](#type-changelogauthorwhereinput) | Filter by author. |
| `repositoryPath` | [StringFilter](#type-stringfilter) | Filter by repository path. |
| `repositoryOrigin` | [StringFilter](#type-stringfilter) | Filter by repository origin. |
| `updatedAt` | [DateTimeFilter](#type-datetimefilter) | Filter by last updated time. |
| `createdAt` | [DateTimeFilter](#type-datetimefilter) | Filter by creation time. |
| `pullRequestState` | [PullRequestStateFilter](#type-pullrequeststatefilter) | Filter by pull request state (only applies to PRs). |
| `buildState` | [BuildStateFilter](#type-buildstatefilter) | Filter by CI state. |
| `reviewDecision` | [ReviewDecisionFilter](#type-reviewdecisionfilter) | Filter by review decision. |
| `changesetId` | [StringFilter](#type-stringfilter) | Filter by changeset ID. |
| `_and` | [[ChangelogEntryWhereInput](#type-changelogentrywhereinput)!] |  |
| `_or` | [[ChangelogEntryWhereInput](#type-changelogentrywhereinput)!] |  |
| `_not` | [ChangelogEntryWhereInput](#type-changelogentrywhereinput) |  |

<h5 id="type-changelogparticipantorderbyinput"><code>ChangelogParticipantOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ChangelogParticipantOrderByField](#type-changelogparticipantorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-changelogparticipantwhereinput"><code>ChangelogParticipantWhereInput</code></h5>

Filter input for participants.

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#type-stringfilter) |  |
| `email` | [StringFilter](#type-stringfilter) |  |
| `username` | [StringFilter](#type-stringfilter) |  |
| `role` | [ContributorRole](#type-contributorrole) | Filter participants by role. |
| `updatedAt` | [DateTimeFilter](#type-datetimefilter) | Scopes participant aggregation to entries updated within this window. Defaults to last 30 days if not specified. |
| `_and` | [[ChangelogParticipantWhereInput](#type-changelogparticipantwhereinput)!] |  |
| `_or` | [[ChangelogParticipantWhereInput](#type-changelogparticipantwhereinput)!] |  |
| `_not` | [ChangelogParticipantWhereInput](#type-changelogparticipantwhereinput) |  |

<h5 id="type-commitinput"><code>CommitInput</code></h5>

Input for creating a commit from a changeset.

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | ID | Organization ID for determining available commit options. |
| `changesetId` | ID! | Changeset ID (e.g., recipe run ID, batch changeset ID). Resolved via federation to an OrganizationChangeset. |
| `repositories` | [[RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput)!] | Filter which repositories and files to include. Evaluated in order - first matching rule wins for each repository. Put repo-specific rules first, global fallback rules last. If empty or not provided, all repositories and files in the changeset are included. |
| `branchName` | String | If unset, commit to the branch that the LST was generated from. |
| `message` | String! | Commit message. |
| `extendedMessage` | [Base64](#type-base64) | Extended commit message (Base64 encoded). |
| `gpgKey` | [GpgInput](#type-gpginput) | GPG key for signing commits. |
| `email` | String | Email to author commit with. Verified against your emails (public and private) that are verified in your SCM provider. If left blank, your first email will be used. |
| `scmAccessTokens` | [[ScmAccessToken](#type-scmaccesstoken)!] | Optional SCM access tokens keyed by origin. When provided, these are used instead of stored OAuth tokens for the matching origin. |
| `strategy` | [CommitStrategyInput](#type-commitstrategyinput)! | How to deliver the commit. Choose one strategy. |

<h5 id="type-commitstrategyinput"><code>CommitStrategyInput</code></h5>

Commit delivery strategy. Choose one option.

| Field | Type | Description |
|-------|------|-------------|
| `direct` | [DirectCommitInput](#type-directcommitinput) | Push directly to the origin remote. |
| `fork` | [ForkCommitInput](#type-forkcommitinput) | Push to a fork of the origin repository. |
| `pullRequest` | [PullRequestCommitInput](#type-pullrequestcommitinput) | Create a pull request from a branch on the origin remote. |
| `forkAndPullRequest` | [ForkAndPullRequestCommitInput](#type-forkandpullrequestcommitinput) | Create a pull request from a branch on a fork. |

<h5 id="type-connectororderbyinput"><code>ConnectorOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ConnectorOrderByField](#type-connectororderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-connectortooltypefilter"><code>ConnectorToolTypeFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ConnectorToolType](#type-connectortooltype) |  |
| `_in` | [[ConnectorToolType](#type-connectortooltype)!] |  |

<h5 id="type-connectorwhereinput"><code>ConnectorWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `nickname` | [StringFilter](#type-stringfilter) |  |
| `version` | [StringFilter](#type-stringfilter) |  |
| `toolType` | [ConnectorToolTypeFilter](#type-connectortooltypefilter) |  |
| `_and` | [[ConnectorWhereInput](#type-connectorwhereinput)!] |  |
| `_or` | [[ConnectorWhereInput](#type-connectorwhereinput)!] |  |
| `_not` | [ConnectorWhereInput](#type-connectorwhereinput) |  |

<h5 id="type-conversationorderbyinput"><code>ConversationOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ConversationOrderByField](#type-conversationorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-conversationwhereinput"><code>ConversationWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `user` | [StringFilter](#type-stringfilter) |  |
| `startedAt` | [DateTimeFilter](#type-datetimefilter) |  |
| `lastUpdatedAt` | [DateTimeFilter](#type-datetimefilter) |  |
| `_and` | [[ConversationWhereInput](#type-conversationwhereinput)!] |  |
| `_or` | [[ConversationWhereInput](#type-conversationwhereinput)!] |  |
| `_not` | [ConversationWhereInput](#type-conversationwhereinput) |  |

<h5 id="type-createconversationinput"><code>CreateConversationInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `message` | String! |  |
| `organizationId` | ID! |  |

<h5 id="type-createuserorganizationinput"><code>CreateUserOrganizationInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! | The name of the organization. |
| `repositories` | [[RepositoryInput](#type-repositoryinput)!] | Repositories to include in the organization. |

<h5 id="type-datatableformatfilter"><code>DataTableFormatFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DataTableFormat](#type-datatableformat) |  |
| `_neq` | [DataTableFormat](#type-datatableformat) |  |
| `_in` | [[DataTableFormat](#type-datatableformat)!] |  |
| `_nin` | [[DataTableFormat](#type-datatableformat)!] |  |

<h5 id="type-datatableorderbyinput"><code>DataTableOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [DataTableOrderByField](#type-datatableorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-datatablewhereinput"><code>DataTableWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `dataTable` | [StringFilter](#type-stringfilter) |  |
| `group` | [StringFilter](#type-stringfilter) |  |
| `format` | [DataTableFormatFilter](#type-datatableformatfilter) |  |
| `_and` | [[DataTableWhereInput](#type-datatablewhereinput)!] |  |
| `_or` | [[DataTableWhereInput](#type-datatablewhereinput)!] |  |
| `_not` | [DataTableWhereInput](#type-datatablewhereinput) |  |

<h5 id="type-datetimefilter"><code>DateTimeFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DateTime](#type-datetime) |  |
| `_neq` | [DateTime](#type-datetime) |  |
| `_gt` | [DateTime](#type-datetime) |  |
| `_gte` | [DateTime](#type-datetime) |  |
| `_lt` | [DateTime](#type-datetime) |  |
| `_lte` | [DateTime](#type-datetime) |  |

<h5 id="type-devcenterrunorderbyinput"><code>DevCenterRunOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [DevCenterRunOrderByField](#type-devcenterrunorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-devcenterrunstatefilter"><code>DevCenterRunStateFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DevCenterRunState](#type-devcenterrunstate) |  |
| `_neq` | [DevCenterRunState](#type-devcenterrunstate) |  |
| `_in` | [[DevCenterRunState](#type-devcenterrunstate)!] |  |
| `_nin` | [[DevCenterRunState](#type-devcenterrunstate)!] |  |

<h5 id="type-devcenterrunwhereinput"><code>DevCenterRunWhereInput</code></h5>

Filter input for DevCenter run queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) | Filter by run ID. Use `where: \{ id: \{ _eq: "run-id" \} \}` to get a specific run. |
| `state` | [DevCenterRunStateFilter](#type-devcenterrunstatefilter) | Filter by run state. |
| `startedAt` | [DateTimeFilter](#type-datetimefilter) | Filter by start time. |
| `_and` | [[DevCenterRunWhereInput](#type-devcenterrunwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[DevCenterRunWhereInput](#type-devcenterrunwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [DevCenterRunWhereInput](#type-devcenterrunwhereinput) | Logical NOT - negates the condition. |

<h5 id="type-directcommitinput"><code>DirectCommitInput</code></h5>

Direct commit to origin. No additional options required.

| Field | Type | Description |
|-------|------|-------------|
| `_empty` | Boolean | Placeholder field. Direct commits require no additional configuration. |

<h5 id="type-exchangeauthorizationcodeinput"><code>ExchangeAuthorizationCodeInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `authorizationId` | ID! | The authorization ID returned from initiateAuthorization or from NeedsAuthorization. |
| `code` | String! | Authorization code from the OAuth callback. |
| `redirectUri` | String! | The redirect URI used in the authorization request. Note: This field is deprecated - the server uses the stored redirect URI from the authorization to ensure an exact match. |

<h5 id="type-filechangeorderbyinput"><code>FileChangeOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [FileChangeOrderByField](#type-filechangeorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-filechangewhereinput"><code>FileChangeWhereInput</code></h5>

Filter for file changes.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [PathFilter](#type-pathfilter) | Filter by file path using glob patterns. |
| `_and` | [[FileChangeWhereInput](#type-filechangewhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[FileChangeWhereInput](#type-filechangewhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [FileChangeWhereInput](#type-filechangewhereinput) | Logical NOT - negates the condition. |

<h5 id="type-forkandpullrequestcommitinput"><code>ForkAndPullRequestCommitInput</code></h5>

Create a pull request from a branch on a fork.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | String | Organization to create the fork in. If unset, creates in user's personal account. |
| `prefixOrganizationName` | Boolean | Prefix the fork name with the origin organization to avoid name collisions. |
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | [Base64](#type-base64) | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `maintainerCanModify` | Boolean | GitHub only: allow maintainers to edit the pull request. |
| `autoMergeMethod` | [MergeMethod](#type-mergemethod) | Auto-merge method after checks pass. Null means no auto-merge. Best effort - silently ignored if not supported by the repository. |
| `recreateClosedPullRequest` | Boolean | Recreate pull request if it was previously closed. |

<h5 id="type-forkcommitinput"><code>ForkCommitInput</code></h5>

Commit to a fork of the origin repository.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | String | Organization to create the fork in. If unset, creates in user's personal account. |
| `prefixOrganizationName` | Boolean | Prefix the fork name with the origin organization to avoid name collisions. Example: openrewrite/rewrite -> myuser/openrewrite__rewrite |

<h5 id="type-gorecipebundleinput"><code>GoRecipeBundleInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String |  |

<h5 id="type-gpginput"><code>GpgInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `privateKey` | String! |  |
| `publicKey` | String! |  |
| `passphrase` | String |  |

<h5 id="type-idfilter"><code>IDFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | ID |  |
| `_neq` | ID |  |
| `_in` | [ID!] |  |
| `_nin` | [ID!] |  |

<h5 id="type-initiateauthorizationinput"><code>InitiateAuthorizationInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin to authorize (e.g., github.com, gitlab.com). |
| `redirectUri` | String! | The redirect URI where the VCS will send the callback. Must match an allowed redirect URI in the OAuth app configuration. |

<h5 id="type-intfilter"><code>IntFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | Int |  |
| `_neq` | Int |  |
| `_gt` | Int |  |
| `_gte` | Int |  |
| `_lt` | Int |  |
| `_lte` | Int |  |

<h5 id="type-lstartifactwhereinput"><code>LstArtifactWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `published` | [DateTimeFilter](#type-datetimefilter) |  |
| `available` | [BooleanFilter](#type-booleanfilter) |  |
| `_and` | [[LstArtifactWhereInput](#type-lstartifactwhereinput)!] |  |
| `_or` | [[LstArtifactWhereInput](#type-lstartifactwhereinput)!] |  |
| `_not` | [LstArtifactWhereInput](#type-lstartifactwhereinput) |  |

<h5 id="type-mavenrecipebundleinput"><code>MavenRecipeBundleInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `version` | String! |  |

<h5 id="type-npmrecipebundleinput"><code>NpmRecipeBundleInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String! |  |

<h5 id="type-nugetrecipebundleinput"><code>NugetRecipeBundleInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String! |  |

<h5 id="type-organizationchangesetorderbyinput"><code>OrganizationChangesetOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationChangesetOrderByField](#type-organizationchangesetorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-organizationchangesettypefilter"><code>OrganizationChangesetTypeFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [OrganizationChangesetType](#type-organizationchangesettype) |  |
| `_neq` | [OrganizationChangesetType](#type-organizationchangesettype) |  |
| `_in` | [[OrganizationChangesetType](#type-organizationchangesettype)!] |  |
| `_nin` | [[OrganizationChangesetType](#type-organizationchangesettype)!] |  |

<h5 id="type-organizationchangesetwhereinput"><code>OrganizationChangesetWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `type` | [OrganizationChangesetTypeFilter](#type-organizationchangesettypefilter) |  |
| `createdAt` | [DateTimeFilter](#type-datetimefilter) |  |
| `user` | [StringFilter](#type-stringfilter) |  |
| `_and` | [[OrganizationChangesetWhereInput](#type-organizationchangesetwhereinput)!] |  |
| `_or` | [[OrganizationChangesetWhereInput](#type-organizationchangesetwhereinput)!] |  |
| `_not` | [OrganizationChangesetWhereInput](#type-organizationchangesetwhereinput) |  |

<h5 id="type-organizationcommitorderbyinput"><code>OrganizationCommitOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationCommitOrderByField](#type-organizationcommitorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-organizationcommitwhereinput"><code>OrganizationCommitWhereInput</code></h5>

Filter input for organization-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) | Filter by commit ID. |
| `startedAt` | [DateTimeFilter](#type-datetimefilter) | Filter by when the commit started. |
| `_and` | [[OrganizationCommitWhereInput](#type-organizationcommitwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[OrganizationCommitWhereInput](#type-organizationcommitwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [OrganizationCommitWhereInput](#type-organizationcommitwhereinput) | Logical NOT - negates the condition. |

<h5 id="type-organizationorderbyinput"><code>OrganizationOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationOrderByField](#type-organizationorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-organizationreciperunorderbyinput"><code>OrganizationRecipeRunOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationRecipeRunOrderByField](#type-organizationreciperunorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-organizationreciperunstatefilter"><code>OrganizationRecipeRunStateFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [OrganizationRecipeRunState](#type-organizationreciperunstate) |  |
| `_neq` | [OrganizationRecipeRunState](#type-organizationreciperunstate) |  |
| `_in` | [[OrganizationRecipeRunState](#type-organizationreciperunstate)!] |  |
| `_nin` | [[OrganizationRecipeRunState](#type-organizationreciperunstate)!] |  |

<h5 id="type-organizationreciperunwhereinput"><code>OrganizationRecipeRunWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `state` | [OrganizationRecipeRunStateFilter](#type-organizationreciperunstatefilter) |  |
| `startedAt` | [DateTimeFilter](#type-datetimefilter) |  |
| `user` | [StringFilter](#type-stringfilter) |  |
| `_and` | [[OrganizationRecipeRunWhereInput](#type-organizationreciperunwhereinput)!] |  |
| `_or` | [[OrganizationRecipeRunWhereInput](#type-organizationreciperunwhereinput)!] |  |
| `_not` | [OrganizationRecipeRunWhereInput](#type-organizationreciperunwhereinput) |  |

<h5 id="type-organizationwhereinput"><code>OrganizationWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#type-stringfilter) |  |
| `depth` | [IntFilter](#type-intfilter) | Filter by depth in the organization hierarchy. The root organization ("_root") is depth 0, its direct children are depth 1, etc. |
| `_and` | [[OrganizationWhereInput](#type-organizationwhereinput)!] |  |
| `_or` | [[OrganizationWhereInput](#type-organizationwhereinput)!] |  |
| `_not` | [OrganizationWhereInput](#type-organizationwhereinput) |  |

<h5 id="type-pathfilter"><code>PathFilter</code></h5>

Filter for file paths using glob patterns.

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [Path](#type-path) | Exact path match. |
| `_in` | [[Path](#type-path)!] | Match any of the exact paths. |
| `_nin` | [[Path](#type-path)!] | Exclude any of the exact paths. |
| `_glob` | String | Glob pattern match. Examples: **\/*.java, src/main/** |

<h5 id="type-piprecipebundleinput"><code>PipRecipeBundleInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String |  |

<h5 id="type-pullrequestactionorderbyinput"><code>PullRequestActionOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [PullRequestActionOrderByField](#type-pullrequestactionorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-pullrequestactionstatefilter"><code>PullRequestActionStateFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestActionState](#type-pullrequestactionstate) |  |
| `_neq` | [PullRequestActionState](#type-pullrequestactionstate) |  |
| `_in` | [[PullRequestActionState](#type-pullrequestactionstate)!] |  |
| `_nin` | [[PullRequestActionState](#type-pullrequestactionstate)!] |  |

<h5 id="type-pullrequestactiontypefilter"><code>PullRequestActionTypeFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestActionType](#type-pullrequestactiontype) |  |
| `_neq` | [PullRequestActionType](#type-pullrequestactiontype) |  |
| `_in` | [[PullRequestActionType](#type-pullrequestactiontype)!] |  |
| `_nin` | [[PullRequestActionType](#type-pullrequestactiontype)!] |  |

<h5 id="type-pullrequestactionwhereinput"><code>PullRequestActionWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `state` | [PullRequestActionStateFilter](#type-pullrequestactionstatefilter) |  |
| `_and` | [[PullRequestActionWhereInput](#type-pullrequestactionwhereinput)!] |  |
| `_or` | [[PullRequestActionWhereInput](#type-pullrequestactionwhereinput)!] |  |
| `_not` | [PullRequestActionWhereInput](#type-pullrequestactionwhereinput) |  |

<h5 id="type-pullrequestcommitinput"><code>PullRequestCommitInput</code></h5>

Create a pull request from a branch on the origin remote.

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | [Base64](#type-base64) | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `autoMergeMethod` | [MergeMethod](#type-mergemethod) | Auto-merge method after checks pass. Null means no auto-merge. Best effort - silently ignored if not supported by the repository. |
| `recreateClosedPullRequest` | Boolean | Recreate pull request if it was previously closed. |

<h5 id="type-pullrequestinput"><code>PullRequestInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [RepositoryInput](#type-repositoryinput)! |  |
| `number` | Int! | Pull request number. |

<h5 id="type-pullrequestselectioninput"><code>PullRequestSelectionInput</code></h5>

Selects pull requests for a bulk action.

The `where` filter defines a base set of matching PRs. The optional `pullRequests`
modifier can include or exclude specific PRs from that base set.

Examples:
- Filter-only: `\{ where: \{ ... \} \}` — all matching PRs
- Explicit: `\{ pullRequests: \{ include: [...] \} \}` — exactly those PRs
- Filter + exclusions: `\{ where: \{ ... \}, pullRequests: \{ exclude: [...] \} \}` — matching minus excluded
- Filter + additions: `\{ where: \{ ... \}, pullRequests: \{ include: [...] \} \}` — matching plus included

| Field | Type | Description |
|-------|------|-------------|
| `where` | [ChangelogEntryWhereInput](#type-changelogentrywhereinput) | Filter for the base set of PRs. Omit to start with an empty set. |
| `pullRequests` | [PullRequestSelectionModifier](#type-pullrequestselectionmodifier) | Modify the base set by including or excluding specific PRs. |

<h5 id="type-pullrequestselectionmodifier"><code>PullRequestSelectionModifier</code></h5>

Modifies a PR selection by either including or excluding specific PRs.
Exactly one field must be set.

| Field | Type | Description |
|-------|------|-------------|
| `include` | [[PullRequestInput](#type-pullrequestinput)!] | Add these PRs to the base set. |
| `exclude` | [[PullRequestInput](#type-pullrequestinput)!] | Remove these PRs from the base set. |

<h5 id="type-pullrequeststatefilter"><code>PullRequestStateFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestState](#type-pullrequeststate) |  |
| `_neq` | [PullRequestState](#type-pullrequeststate) |  |
| `_in` | [[PullRequestState](#type-pullrequeststate)!] |  |
| `_nin` | [[PullRequestState](#type-pullrequeststate)!] |  |

<h5 id="type-recipebundleinput"><code>RecipeBundleInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `maven` | [MavenRecipeBundleInput](#type-mavenrecipebundleinput) |  |
| `npm` | [NpmRecipeBundleInput](#type-npmrecipebundleinput) |  |
| `nuget` | [NugetRecipeBundleInput](#type-nugetrecipebundleinput) |  |
| `yaml` | [YamlRecipeBundleInput](#type-yamlrecipebundleinput) |  |
| `pip` | [PipRecipeBundleInput](#type-piprecipebundleinput) |  |
| `go` | [GoRecipeBundleInput](#type-gorecipebundleinput) |  |

<h5 id="type-recipebundleorderbyinput"><code>RecipeBundleOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeBundleOrderByField](#type-recipebundleorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-recipebundlewhereinput"><code>RecipeBundleWhereInput</code></h5>

Filter input for RecipeBundle queries.

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | [StringFilter](#type-stringfilter) | Filter by package name (e.g., "org.openrewrite:rewrite-java"). |
| `version` | [StringFilter](#type-stringfilter) | Filter by resolved version. |
| `requestedVersion` | [StringFilter](#type-stringfilter) | Filter by requested version (the version requested before resolution). |
| `ecosystem` | [RecipeEcosystemFilter](#type-recipeecosystemfilter) | Filter by ecosystem. |
| `_and` | [[RecipeBundleWhereInput](#type-recipebundlewhereinput)!] |  |
| `_or` | [[RecipeBundleWhereInput](#type-recipebundlewhereinput)!] |  |
| `_not` | [RecipeBundleWhereInput](#type-recipebundlewhereinput) |  |

<h5 id="type-recipecategoryorderbyinput"><code>RecipeCategoryOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeCategoryOrderByField](#type-recipecategoryorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-recipecategorywhereinput"><code>RecipeCategoryWhereInput</code></h5>

Filter input for RecipeCategory queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) | Filter by category ID. |
| `parentId` | [IDFilter](#type-idfilter) | Filter by parent category ID. Use null to find root categories. |
| `displayName` | [StringFilter](#type-stringfilter) | Filter by display name. |
| `_and` | [[RecipeCategoryWhereInput](#type-recipecategorywhereinput)!] |  |
| `_or` | [[RecipeCategoryWhereInput](#type-recipecategorywhereinput)!] |  |
| `_not` | [RecipeCategoryWhereInput](#type-recipecategorywhereinput) |  |

<h5 id="type-recipeecosystemfilter"><code>RecipeEcosystemFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RecipeEcosystem](#type-recipeecosystem) |  |
| `_neq` | [RecipeEcosystem](#type-recipeecosystem) |  |
| `_in` | [[RecipeEcosystem](#type-recipeecosystem)!] |  |
| `_nin` | [[RecipeEcosystem](#type-recipeecosystem)!] |  |

<h5 id="type-recipeinput"><code>RecipeInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | Fully-qualified recipe ID. Example: `org.openrewrite.java.search.FindMethods` |
| `options` | [[RecipeOptionInput](#type-recipeoptioninput)!] |  |

<h5 id="type-recipeinstallationorderbyinput"><code>RecipeInstallationOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeInstallationOrderByField](#type-recipeinstallationorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-recipeinstallationstatusfilter"><code>RecipeInstallationStatusFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RecipeInstallationStatus](#type-recipeinstallationstatus) |  |
| `_neq` | [RecipeInstallationStatus](#type-recipeinstallationstatus) |  |
| `_in` | [[RecipeInstallationStatus](#type-recipeinstallationstatus)!] |  |
| `_nin` | [[RecipeInstallationStatus](#type-recipeinstallationstatus)!] |  |

<h5 id="type-recipeinstallationwhereinput"><code>RecipeInstallationWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `status` | [RecipeInstallationStatusFilter](#type-recipeinstallationstatusfilter) |  |
| `startedAt` | [DateTimeFilter](#type-datetimefilter) |  |
| `user` | [UserWhereInput](#type-userwhereinput) |  |
| `organization` | [IDFilter](#type-idfilter) |  |
| `bundle` | [RecipeBundleWhereInput](#type-recipebundlewhereinput) | Filter by bundle properties (packageName, ecosystem, version, etc.). |
| `_and` | [[RecipeInstallationWhereInput](#type-recipeinstallationwhereinput)!] |  |
| `_or` | [[RecipeInstallationWhereInput](#type-recipeinstallationwhereinput)!] |  |
| `_not` | [RecipeInstallationWhereInput](#type-recipeinstallationwhereinput) |  |

<h5 id="type-recipeoptioninput"><code>RecipeOptionInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! | Option name. Example: `methodPattern` |
| `value` | [Object](#type-object)! | Option value. Example: `java.util.List add(..)` |

<h5 id="type-recipeorderbyinput"><code>RecipeOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeOrderByField](#type-recipeorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-recipewhereinput"><code>RecipeWhereInput</code></h5>

Filter input for Recipe queries.
Use `query` for semantic search, or use field filters for exact matching.

| Field | Type | Description |
|-------|------|-------------|
| `query` | String | Semantic search query - searches recipe names, descriptions, and content. |
| `id` | [StringFilter](#type-stringfilter) | Filter by recipe ID (fully qualified recipe name). |
| `displayName` | [StringFilter](#type-stringfilter) | Filter by display name. |
| `_and` | [[RecipeWhereInput](#type-recipewhereinput)!] |  |
| `_or` | [[RecipeWhereInput](#type-recipewhereinput)!] |  |
| `_not` | [RecipeWhereInput](#type-recipewhereinput) |  |

<h5 id="type-repositorychangesetorderbyinput"><code>RepositoryChangesetOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryChangesetOrderByField](#type-repositorychangesetorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-repositorychangesetstatefilter"><code>RepositoryChangesetStateFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RepositoryChangesetState](#type-repositorychangesetstate) |  |
| `_neq` | [RepositoryChangesetState](#type-repositorychangesetstate) |  |
| `_in` | [[RepositoryChangesetState](#type-repositorychangesetstate)!] |  |
| `_nin` | [[RepositoryChangesetState](#type-repositorychangesetstate)!] |  |

<h5 id="type-repositorychangesetwhereinput"><code>RepositoryChangesetWhereInput</code></h5>

Filter for repository changesets.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [StringFilter](#type-stringfilter) | Filter by repository path. |
| `origin` | [StringFilter](#type-stringfilter) | Filter by repository origin. |
| `branch` | [StringFilter](#type-stringfilter) | Filter by repository branch. |
| `files` | [FileChangeWhereInput](#type-filechangewhereinput) | Filter files within matching repositories. Useful for filtering to specific file patterns (e.g., all build.gradle.kts files). |
| `onlyWithResults` | Boolean | Only return repositories with results (filesWithResults > 0). |
| `state` | [RepositoryChangesetStateFilter](#type-repositorychangesetstatefilter) | Filter by repository result state. |
| `_and` | [[RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [RepositoryChangesetWhereInput](#type-repositorychangesetwhereinput) | Logical NOT - negates the condition. |

<h5 id="type-repositorycommitorderbyinput"><code>RepositoryCommitOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryCommitOrderByField](#type-repositorycommitorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-repositorycommitwhereinput"><code>RepositoryCommitWhereInput</code></h5>

Filter input for repository-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `_and` | [[RepositoryCommitWhereInput](#type-repositorycommitwhereinput)!] |  |
| `_or` | [[RepositoryCommitWhereInput](#type-repositorycommitwhereinput)!] |  |
| `_not` | [RepositoryCommitWhereInput](#type-repositorycommitwhereinput) |  |

<h5 id="type-repositoryinput"><code>RepositoryInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `path` | String! |  |
| `branch` | String! |  |

<h5 id="type-repositoryorderbyinput"><code>RepositoryOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryOrderByField](#type-repositoryorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-repositoryreciperunorderbyinput"><code>RepositoryRecipeRunOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryRecipeRunOrderByField](#type-repositoryreciperunorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-repositoryreciperunwhereinput"><code>RepositoryRecipeRunWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `path` | [StringFilter](#type-stringfilter) |  |
| `origin` | [StringFilter](#type-stringfilter) |  |
| `_and` | [[RepositoryRecipeRunWhereInput](#type-repositoryreciperunwhereinput)!] |  |
| `_or` | [[RepositoryRecipeRunWhereInput](#type-repositoryreciperunwhereinput)!] |  |
| `_not` | [RepositoryRecipeRunWhereInput](#type-repositoryreciperunwhereinput) |  |

<h5 id="type-repositorywhereinput"><code>RepositoryWhereInput</code></h5>

Filter input for Repository queries using typed field filters.

| Field | Type | Description |
|-------|------|-------------|
| `origin` | [StringFilter](#type-stringfilter) |  |
| `path` | [StringFilter](#type-stringfilter) |  |
| `branch` | [StringFilter](#type-stringfilter) |  |
| `changeset` | [StringFilter](#type-stringfilter) |  |
| `lstArtifact` | [LstArtifactWhereInput](#type-lstartifactwhereinput) |  |
| `_and` | [[RepositoryWhereInput](#type-repositorywhereinput)!] | Logical AND - all conditions must match |
| `_or` | [[RepositoryWhereInput](#type-repositorywhereinput)!] | Logical OR - at least one condition must match |
| `_not` | [RepositoryWhereInput](#type-repositorywhereinput) | Logical NOT - negates the condition |

<h5 id="type-reviewdecisionfilter"><code>ReviewDecisionFilter</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ReviewDecision](#type-reviewdecision) |  |
| `_neq` | [ReviewDecision](#type-reviewdecision) |  |
| `_in` | [[ReviewDecision](#type-reviewdecision)!] |  |
| `_nin` | [[ReviewDecision](#type-reviewdecision)!] |  |

<h5 id="type-revokescmtokeninput"><code>RevokeScmTokenInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin to revoke the token for (e.g., github.com, gitlab.com). |

<h5 id="type-rundevcenterinput"><code>RunDevCenterInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | ID! | The organization to run DevCenter for. |
| `recipeId` | ID! | The DevCenter recipe to run. |

<h5 id="type-runrecipeinput"><code>RunRecipeInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `recipe` | [RecipeInput](#type-recipeinput)! | The recipe to run with any configured options. |
| `organizationId` | ID! | Run against all repositories in this organization. |
| `parentId` | ID | Optional parent changeset ID this recipe run is derived from. |
| `excludeFiles` | [String!] | Exclude files matching these patterns. |

<h5 id="type-scmaccesstoken"><code>ScmAccessToken</code></h5>

An access token for a specific SCM origin. When provided on a commit mutation,
these tokens are preferred over stored OAuth tokens.

| Field | Type | Description |
|-------|------|-------------|
| `value` | String! |  |
| `origin` | String! |  |

<h5 id="type-stringfilter"><code>StringFilter</code></h5>

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

<h5 id="type-updateuserorganizationinput"><code>UpdateUserOrganizationInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The ID of the organization to update. |
| `name` | String | The new name for the organization. |
| `repositories` | [[RepositoryInput](#type-repositoryinput)!] | Repositories to include in the organization. If provided, replaces the current list. |

<h5 id="type-userorderbyinput"><code>UserOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [UserOrderByField](#type-userorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-userwhereinput"><code>UserWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `email` | [StringFilter](#type-stringfilter) |  |
| `_and` | [[UserWhereInput](#type-userwhereinput)!] |  |
| `_or` | [[UserWhereInput](#type-userwhereinput)!] |  |
| `_not` | [UserWhereInput](#type-userwhereinput) |  |

<h5 id="type-visualizationoptioninput"><code>VisualizationOptionInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#type-object)! |  |

<h5 id="type-visualizationorderbyinput"><code>VisualizationOrderByInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `field` | [VisualizationOrderByField](#type-visualizationorderbyfield)! |  |
| `direction` | [SortOrder](#type-sortorder)! |  |

<h5 id="type-visualizationwhereinput"><code>VisualizationWhereInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#type-idfilter) |  |
| `visualization` | [StringFilter](#type-stringfilter) |  |
| `_and` | [[VisualizationWhereInput](#type-visualizationwhereinput)!] |  |
| `_or` | [[VisualizationWhereInput](#type-visualizationwhereinput)!] |  |
| `_not` | [VisualizationWhereInput](#type-visualizationwhereinput) |  |

<h5 id="type-yamlrecipebundleinput"><code>YamlRecipeBundleInput</code></h5>

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | [Base64](#type-base64)! |  |
| `primary` | ID | The ID of the primary recipe in this bundle. When specified, only this recipe will be shown in the marketplace categories, hiding other recipes from this bundle. This is used for the Moderne Builder feature where users build complex composite recipes and we don't want to expose intermediate recipes in the marketplace. |

### Unions

<h5 id="type-connectortool"><code>ConnectorTool</code></h5>

= [GithubConfiguration](#type-githubconfiguration) | [GitLabConfiguration](#type-gitlabconfiguration) | [BitbucketConfiguration](#type-bitbucketconfiguration) | [BitbucketCloudConfiguration](#type-bitbucketcloudconfiguration) | [AzureDevOpsConfiguration](#type-azuredevopsconfiguration) | [ArtifactoryConfiguration](#type-artifactoryconfiguration) | [MavenConfiguration](#type-mavenconfiguration) | [PypiConfiguration](#type-pypiconfiguration) | [NpmConfiguration](#type-npmconfiguration) | [NugetConfiguration](#type-nugetconfiguration) | [GenericHttpToolConfiguration](#type-generichttptoolconfiguration) | [OrganizationConfiguration](#type-organizationconfiguration) | [LlmConfiguration](#type-llmconfiguration) | [S3Configuration](#type-s3configuration)

### Scalars

<h5 id="type-base64"><code>Base64</code></h5>

`Base64` represents a base64 encoded string.
In the browser, `btoa` encodes ASCII strings to Base64.

<h5 id="type-date"><code>Date</code></h5>

<h5 id="type-datetime"><code>DateTime</code></h5>

<h5 id="type-duration"><code>Duration</code></h5>

<h5 id="type-json"><code>JSON</code></h5>

<h5 id="type-long"><code>Long</code></h5>

<h5 id="type-markdown"><code>Markdown</code></h5>

Contents may contain Markdown, HTML, or other text and should be passed through a Markdown parser by consumers

<h5 id="type-object"><code>Object</code></h5>

<h5 id="type-path"><code>Path</code></h5>

A file path relative to repository root (e.g., "src/main/java/Foo.java").

