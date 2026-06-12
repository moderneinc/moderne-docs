---
sidebar_label: GraphQL API reference
description: Complete reference for the Moderne GraphQL API, including all queries, mutations, subscriptions, and types.
---

# GraphQL API reference

*This page is auto-generated from the Moderne GraphQL schema. Do not edit manually.*

[Download schema (SDL)](/graphql/schema.graphql)

## Queries

#### `auditLogs`

```graphql
auditLogs(first: Int = 100, after: String, where: AuditLogWhereInput, orderBy: [AuditLogOrderByInput!]): AuditLogConnection!
```

**Returns:** [AuditLogConnection](#auditlogconnection)!

Query audit log events with pagination and filtering.

#### `auditLogsDownloads`

```graphql
auditLogsDownloads(first: Int = 50, after: String, where: AuditLogsDownloadWhereInput, orderBy: [AuditLogsDownloadOrderByInput!]): AuditLogsDownloadConnection!
```

**Returns:** [AuditLogsDownloadConnection](#auditlogsdownloadconnection)!

Query audit log downloads with pagination and filtering.
Use where: \{ id: \{ _eq: "..." \} \} to poll a specific download.

#### `bulkPullRequestAction`

```graphql
bulkPullRequestAction(id: ID!): BulkPullRequestAction
```

**Returns:** [BulkPullRequestAction](#bulkpullrequestaction)

Get a bulk pull request action by ID to poll for progress.

#### `capabilities`

```graphql
capabilities: PlatformCapabilities!
```

**Returns:** [PlatformCapabilities](#platformcapabilities)!

Returns which optional platform features are enabled in this deployment.
Each field defaults to false and is overridden to true by the corresponding
optional service when it is present in the supergraph composition.

#### `codeSearch`

```graphql
codeSearch(repositoryId: String!, query: String!, first: Int = 100, after: String): CodeSearchResultConnection!
```

**Returns:** [CodeSearchResultConnection](#codesearchresultconnection)!

Search source code across artifact repositories.
Searches the given repository and all its descendants in the hierarchy.
Results are grouped by artifact (groupId:artifactId) with file-level matches.

#### `connectors`

```graphql
connectors(first: Int = 100, after: String, where: ConnectorWhereInput, orderBy: [ConnectorOrderByInput!]): ConnectorConnection!
```

**Returns:** [ConnectorConnection](#connectorconnection)!

#### `conversation`

```graphql
conversation(conversationId: ID!): Conversation
```

**Returns:** [Conversation](#conversation)

Look up a single conversation by id. Returns null when no conversation
matches or the caller does not have access. Restores the v1 query the
moderne-ui client already references.

#### `currentUser`

```graphql
currentUser: User!
```

**Returns:** [User](#user)!

Returns the currently authenticated user.

#### `devCenterRecipes`

```graphql
devCenterRecipes: [RecipeDescriptor!]!
```

**Returns:** [[RecipeDescriptor](#recipedescriptor)!]!

Get available DevCenter recipes for configuration.

#### `license`

```graphql
license: License!
```

**Returns:** [License](#license)!

Request a new license lease key

#### `organization`

```graphql
organization(id: ID!): Organization!
```

**Returns:** [Organization](#organization)!

#### `organizations`

```graphql
organizations(first: Int = 100, after: String, where: OrganizationWhereInput, orderBy: [OrganizationOrderByInput!]): OrganizationConnection!
```

**Returns:** [OrganizationConnection](#organizationconnection)!

#### `scmConnections`

```graphql
scmConnections: [ScmConnection!]!
```

**Returns:** [[ScmConnection](#scmconnection)!]!

Returns connections for all SCM providers.

#### `users`

```graphql
users(first: Int = 100, after: String, where: UserWhereInput, orderBy: [UserOrderByInput!]): UserConnection!
```

**Returns:** [UserConnection](#userconnection)!

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

**Returns:** [BulkPullRequestActionQueued](#bulkpullrequestactionqueued)!

Approve pull requests in bulk. Returns the queued action for polling.

#### `cancelBulkPullRequestAction`

```graphql
cancelBulkPullRequestAction(id: ID!): BulkPullRequestActionCanceled!
```

**Returns:** [BulkPullRequestActionCanceled](#bulkpullrequestactioncanceled)!

Cancel a pending bulk pull request action.

#### `cancelCommit`

```graphql
cancelCommit(id: ID!): OrganizationCommitCanceled!
```

**Returns:** [OrganizationCommitCanceled](#organizationcommitcanceled)!

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

Clear the organization-level prompt override, falling back to universal. Admin-only — an organization prompt steers Moddy for every member of that org.

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

**Returns:** [BulkPullRequestActionQueued](#bulkpullrequestactionqueued)!

Close pull requests in bulk. Returns the queued action for polling.

#### `commit`

```graphql
commit(input: CommitInput!): OrganizationCommitQueued!
```

**Returns:** [OrganizationCommitQueued](#organizationcommitqueued)!

Create commits from a changeset (recipe run, batch change, etc.).

#### `createAccessToken`

```graphql
createAccessToken(description: String, expiresAt: DateTime): CreateAccessTokenResult!
```

**Returns:** [CreateAccessTokenResult](#createaccesstokenresult)!

Creates a new Moderne Personal Access Token for the current user.
Returns the token value only once - it cannot be retrieved again.

#### `createConversation`

```graphql
createConversation(input: CreateConversationInput!, waitForCompletion: Boolean = false): SendMessageResult!
```

**Returns:** [SendMessageResult](#sendmessageresult)!

Create a new conversation and send the first message. Uses the
effective prompt for the organization context. `waitForCompletion`
has the same semantics as on `sendMessage`.

#### `createUserOrganization`

```graphql
createUserOrganization(input: CreateUserOrganizationInput!): Organization!
```

**Returns:** [Organization](#organization)!

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

**Returns:** [AuditLogsDownload](#auditlogsdownload)!

Start an asynchronous export of audit logs. Returns a task whose state
can be polled via auditLogsDownloads.

#### `downloadDataTable`

```graphql
downloadDataTable(changesetId: ID!, dataTable: String!, group: String, format: DataTableFormat!): DataTable!
```

**Returns:** [DataTable](#datatable)!

Start or retrieve a data table download.
If the same data table + group + format combination was already requested,
returns the existing download state.

#### `exchangeAuthorizationCode`

```graphql
exchangeAuthorizationCode(input: ExchangeAuthorizationCodeInput!): ExchangeAuthorizationResult!
```

**Returns:** [ExchangeAuthorizationResult](#exchangeauthorizationresult)!

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

**Returns:** [OAuthAuthorization](#oauthauthorization)!

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

**Returns:** [RecipeInstallation](#recipeinstallation)!

Install a recipe bundle to the current user's personal marketplace.

#### `installRecipesForOrganization`

```graphql
installRecipesForOrganization(organizationId: ID!, bundle: RecipeBundleInput!): RecipeInstallation!
```

**Returns:** [RecipeInstallation](#recipeinstallation)!

Install a recipe bundle to a specific organization's marketplace.
Requires the `admin` role.

#### `installRecipesUniversal`

```graphql
installRecipesUniversal(bundle: RecipeBundleInput!): RecipeInstallation!
```

**Returns:** [RecipeInstallation](#recipeinstallation)!

Install a recipe bundle to the universal marketplace (visible to all).
Requires the `admin` role.

#### `mergePullRequests`

```graphql
mergePullRequests(organizationId: ID!, selection: PullRequestSelectionInput!, mergeMethod: MergeMethod!, deleteSourceBranch: Boolean! = false): BulkPullRequestActionQueued!
```

**Returns:** [BulkPullRequestActionQueued](#bulkpullrequestactionqueued)!

Merge pull requests in bulk. Returns the queued action for polling.

#### `reindexChangelog`

```graphql
reindexChangelog(since: DateTime!, origin: String): ReindexResult!
```

**Returns:** [ReindexResult](#reindexresult)!

Reset poll cursors so the next poll cycle re-fetches and re-enriches
changelog entries from the given timestamp forward. Use this to backfill
data after deploying enrichment improvements.

Admin-only: that re-fetch and re-enrichment is expensive and its
enrichment calls hit SCM REST APIs (pull-request and build-state
lookups), so this must not be reachable by unauthenticated or non-admin
callers.

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

**Returns:** [RevokeTokenResult](#revoketokenresult)!

Revoke an SCM OAuth token for the current user and a specific origin.
This removes the stored token, disconnecting the user from the VCS.

#### `runDevCenter`

```graphql
runDevCenter(input: RunDevCenterInput!): DevCenterRunRunning!
```

**Returns:** [DevCenterRunRunning](#devcenterrunrunning)!

Start a DevCenter run for an organization.
Returns immediately with running status.

#### `runRecipe`

```graphql
runRecipe(input: RunRecipeInput!): OrganizationRecipeRunQueued!
```

**Returns:** [OrganizationRecipeRunQueued](#organizationreciperunqueued)!

Run a recipe against repositories.
Returns the recipe run in its initial queued state.

#### `runVisualization`

```graphql
runVisualization(organizationId: ID!, visualizationId: ID!, options: [VisualizationOptionInput!]): Visualization!
```

**Returns:** [Visualization](#visualization)!

Request a visualization to be generated based on the provided descriptor.
Returns the existing visualization if already run with the same options,
otherwise queues a new visualization run.

#### `sendMessage`

```graphql
sendMessage(conversationId: ID!, message: String!, waitForCompletion: Boolean = false): SendMessageResult!
```

**Returns:** [SendMessageResult](#sendmessageresult)!

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

**Returns:** [Prompt](#prompt)!

Set the system prompt for a specific organization (overrides universal). Admin-only — an organization prompt steers Moddy for every member of that org.

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

**Returns:** [Prompt](#prompt)!

Set the universal (default) system prompt. Admin-only — the universal prompt steers Moddy tenant-wide.

#### `setUserPrompt`

```graphql
setUserPrompt(content: Markdown!): Prompt!
```

**Returns:** [Prompt](#prompt)!

Set the system prompt for the current user (overrides organization and universal).

#### `uninstallRecipesFromCurrentUser`

```graphql
uninstallRecipesFromCurrentUser(packageName: String!): RecipeUninstallation!
```

**Returns:** [RecipeUninstallation](#recipeuninstallation)!

Uninstall a recipe bundle from the current user's personal marketplace.
Returns the number of recipes that were removed.

#### `uninstallRecipesFromOrganization`

```graphql
uninstallRecipesFromOrganization(organizationId: ID!, packageName: String!): RecipeUninstallation!
```

**Returns:** [RecipeUninstallation](#recipeuninstallation)!

Uninstall a recipe bundle from a specific organization's marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

#### `uninstallRecipesUniversal`

```graphql
uninstallRecipesUniversal(packageName: String!): RecipeUninstallation!
```

**Returns:** [RecipeUninstallation](#recipeuninstallation)!

Uninstall a recipe bundle from the universal marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.

#### `updateUserOrganization`

```graphql
updateUserOrganization(input: UpdateUserOrganizationInput!): Organization!
```

**Returns:** [Organization](#organization)!

Update an existing user-defined organization.

## Types

### Object types

##### `AccessToken`

Moderne Personal Access Tokens

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The unique identifier for the access token. This is not the same as the token itself. |
| `description` | String | Optional description of the token. Useful for distinguishing between multiple tokens. |
| `created` | [DateTime](#datetime)! | The date and time the token was created. |
| `expiresAt` | [DateTime](#datetime) | The date and time the token will expire. |

##### `AccessTokenConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AccessTokenEdge](#accesstokenedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `AccessTokenEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AccessToken](#accesstoken)! |  |
| `cursor` | String! |  |

##### `ArtifactoryConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `lstQuery` | [String!] |  |
| `lastIngestedAt` | [DateTime](#datetime) |  |

##### `AuditLog`

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

##### `AuditLogConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AuditLogEdge](#auditlogedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `AuditLogEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AuditLog](#auditlog)! |  |
| `cursor` | String! |  |

##### `AuditLogsDownloadConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[AuditLogsDownloadEdge](#auditlogsdownloadedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `AuditLogsDownloadEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [AuditLogsDownload](#auditlogsdownload)! |  |
| `cursor` | String! |  |

##### `AuditLogsDownloadError`

**Implements:** [AuditLogsDownload](#auditlogsdownload)

An audit log download failed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! |  |

##### `AuditLogsDownloadFinished`

**Implements:** [AuditLogsDownload](#auditlogsdownload)

An audit log download has completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | [AuditLogExportFormat](#auditlogexportformat)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `downloadUrl` | String! | URL path to download the file (relative to the service base URL). |

##### `AuditLogsDownloadProcessing`

**Implements:** [AuditLogsDownload](#auditlogsdownload)

An audit log download is being processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `format` | [AuditLogExportFormat](#auditlogexportformat)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

##### `AzureDevOpsConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [AzureDevOpsOauth](#azuredevopsoauth) |  |

##### `AzureDevOpsConnection`

**Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

##### `AzureDevOpsOauth`

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `tenantId` | String! |  |

##### `BatchChange`

**Implements:** [OrganizationChangeset](#organizationchangeset)

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
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this batch change. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this batch change. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |

##### `BatchChangeFileChange`

**Implements:** [FileChange](#filechange)

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#path)! |  |
| `beforeSourcePath` | [Path](#path) |  |
| `afterSourcePath` | [Path](#path) |  |
| `diff` | (markupLevel: [MarkupLevel](#markuplevel) = WARNING, showWhitespaceOnlyChanges: Boolean = true): [Patch](#patch) |  |

##### `BitbucketCloudConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [BitbucketCloudOauth](#bitbucketcloudoauth) |  |

##### `BitbucketCloudConnection`

**Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

##### `BitbucketCloudOauth`

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

##### `BitbucketConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [BitbucketOauth](#bitbucketoauth) |  |

##### `BitbucketConnection`

**Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

##### `BitbucketOauth`

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

##### `BranchCommitOptions`

**Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |

##### `BulkPullRequestActionCanceled`

**Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `canceledBy` | [User](#user)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

##### `BulkPullRequestActionConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[BulkPullRequestActionEdge](#bulkpullrequestactionedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `BulkPullRequestActionEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [BulkPullRequestAction](#bulkpullrequestaction)! |  |
| `cursor` | String! |  |

##### `BulkPullRequestActionError`

**Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `errorMessage` | String! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

##### `BulkPullRequestActionFinished`

**Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

##### `BulkPullRequestActionQueued`

**Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `queuedAt` | [DateTime](#datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

##### `BulkPullRequestActionRunning`

**Implements:** [BulkPullRequestAction](#bulkpullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `actionType` | [PullRequestActionType](#pullrequestactiontype)! |  |
| `user` | [User](#user)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `results` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! |  |

##### `ChangelogCommit`

**Implements:** [ChangelogEntry](#changelogentry)

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

##### `ChangelogEntryConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ChangelogEntryEdge](#changelogentryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `ChangelogEntryEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [ChangelogEntry](#changelogentry)! |  |
| `cursor` | String! |  |

##### `ChangelogParticipantConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ChangelogParticipantEdge](#changelogparticipantedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `ChangelogParticipantEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [ChangeParticipant](#changeparticipant)! |  |
| `cursor` | String! |  |

##### `ChangelogPullRequest`

**Implements:** [ChangelogEntry](#changelogentry)

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
| `actions` | (first: Int = 50, after: String, where: [PullRequestActionWhereInput](#pullrequestactionwhereinput), orderBy: [[PullRequestActionOrderByInput](#pullrequestactionorderbyinput)!]): [PullRequestActionConnection](#pullrequestactionconnection)! | Actions (approve, merge, close) that have been applied to this pull request. Default sort order is descending by startedAt. |

##### `ChangeParticipant`

A participant identity from the VCS provider. Not necessarily a Moderne user.

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Display name. |
| `email` | String | Email address. |
| `username` | String | Username/login on the VCS provider. |
| `avatarUrl` | String | Avatar URL from the VCS provider. |
| `roles` | [[ContributorRole](#contributorrole)!]! | The roles this participant has across changelog entries. |

##### `CliDownloadInstructionLink`

| Field | Type | Description |
|-------|------|-------------|
| `label` | String! |  |
| `uri` | String! |  |

##### `CodeSearchResult`

| Field | Type | Description |
|-------|------|-------------|
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `fileChanges` | (first: Int = 100, after: String): [FileChangeConnection](#filechangeconnection)! |  |

##### `CodeSearchResultConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[CodeSearchResultEdge](#codesearchresultedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |
| `searchDurationMs` | [Long](#long)! |  |

##### `CodeSearchResultEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [CodeSearchResult](#codesearchresult)! |  |
| `cursor` | String! |  |

##### `Column`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `type` | String! |  |

##### `Connector`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `nickname` | String |  |
| `version` | String! |  |
| `tools` | [[ConnectorTool](#connectortool)!]! |  |
| `uiConfiguration` | [UiConfiguration](#uiconfiguration) |  |
| `personalAccessTokenConfiguration` | [PersonalAccessTokenConfiguration](#personalaccesstokenconfiguration) |  |

##### `ConnectorConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ConnectorEdge](#connectoredge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `ConnectorEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Connector](#connector)! |  |
| `cursor` | String! |  |

##### `Conversation`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `organization` | [Organization](#organization)! |  |
| `user` | [User](#user)! |  |
| `messages` | (first: Int = 100, after: String): [MessageConnection](#messageconnection)! |  |
| `turnState` | [ConversationTurnState](#conversationturnstate)! | Current turn state for this conversation. Carries the server- recommended poll cadence — clients should respect this rather than hardcoding an interval. |
| `startedAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

##### `ConversationConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[ConversationEdge](#conversationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |

##### `ConversationEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Conversation](#conversation)! |  |
| `cursor` | String! |  |

##### `ConversationTurnState`

Represents the current phase of the conversation's active turn (if any).
Drives client poll cadence.

| Field | Type | Description |
|-------|------|-------------|
| `phase` | [ConversationPhase](#conversationphase)! |  |
| `recommendedPollIntervalMs` | Int! | Server-recommended poll interval in milliseconds. |
| `activeTurnStartedAt` | [DateTime](#datetime) | When the currently-active turn started, if any. |

##### `CreateAccessTokenResult`

Result of creating a new access token.
The token value is only available in this response.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The unique identifier for the token. Use this ID for revocation. |
| `token` | String! | The actual token value. Store this securely - it cannot be retrieved again. |
| `description` | String | The description provided when creating the token. |
| `created` | [DateTime](#datetime)! | When the token was created. |
| `expiresAt` | [DateTime](#datetime) | When the token will expire, or null if it never expires. |

##### `DataTableAvailable`

**Implements:** [DataTable](#datatable)

A data table is available for download but no download has been initiated yet.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#datatabledescriptor)! |  |
| `instanceName` | String! |  |
| `group` | String |  |
| `changesetId` | ID! |  |

##### `DataTableConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[DataTableEdge](#datatableedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `DataTableDescriptor`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | String! |  |
| `description` | String! |  |
| `columns` | [[Column](#column)!]! |  |

##### `DataTableEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [DataTable](#datatable)! |  |
| `cursor` | String! |  |

##### `DataTableError`

**Implements:** [DataTable](#datatable)

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

##### `DataTableFinished`

**Implements:** [DataTable](#datatable)

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

##### `DataTableProcessing`

**Implements:** [DataTable](#datatable)

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

##### `DataTablesMessage`

**Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `dataTables` | [[DataTableDescriptor](#datatabledescriptor)!]! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

##### `DataTableSqlMessage`

**Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `sqlQuery` | String! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

##### `DevCenter`

| Field | Type | Description |
|-------|------|-------------|
| `recipe` | [RecipeDescriptor](#recipedescriptor) | The currently configured DevCenter recipe for this organization. |
| `runs` | (first: Int = 10, after: String, where: [DevCenterRunWhereInput](#devcenterrunwhereinput), orderBy: [[DevCenterRunOrderByInput](#devcenterrunorderbyinput)!]): [DevCenterRunConnection](#devcenterrunconnection)! | DevCenter runs for this organization, ordered by start time descending. |

##### `DevCenterCard`

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

##### `DevCenterCardDescriptor`

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown) |  |
| `fixRecipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `aggregation` | [DevCenterAggregation](#devcenteraggregation)! |  |
| `measures` | [[DevCenterMeasureDescriptor](#devcentermeasuredescriptor)!]! |  |

##### `DevCenterMeasure`

A measure within a DevCenter card representing a specific state or finding,
with a count from the run results.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#markdown)! | Display name of the measure. |
| `description` | [Markdown](#markdown) | Description of what this measure represents. |
| `ordinal` | Int! | Sort order relative to other measures in the card. |
| `count` | Int! | Count of repositories or occurrences for this measure. For PER_REPOSITORY: number of repositories in this state. For PER_OCCURRENCE: total count of occurrences. |

##### `DevCenterMeasureDescriptor`

A measure descriptor within a DevCenter card, representing metadata about
a specific state or finding. See DevCenterMeasure in changeset:reader
for the runtime version with counts.

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown) |  |
| `ordinal` | Int! |  |

##### `DevCenterOrganization`

Organization-level context from a DevCenter run.

| Field | Type | Description |
|-------|------|-------------|
| `repositories` | [DevCenterRepositories](#devcenterrepositories)! | Repository counts at the time of the run. |
| `contributingDevelopers` | Int! | Number of unique contributing developers (last 90 days). |
| `linesOfCode` | [Long](#long)! | Total lines of code across all repositories on platform. |

##### `DevCenterRepositories`

Repository counts from a DevCenter run.

| Field | Type | Description |
|-------|------|-------------|
| `total` | Int! | Total repositories defined in the organization at the time of the run. |
| `repositoriesWithoutLst` | Int! | Repositories with no LST ingested at the time of the run. |

##### `DevCenterRunCanceled`

**Implements:** [DevCenterRun](#devcenterrun)

DevCenter run was canceled before completion.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |
| `finishedAt` | [DateTime](#datetime)! |  |

##### `DevCenterRunConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[DevCenterRunEdge](#devcenterrunedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `DevCenterRunEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [DevCenterRun](#devcenterrun)! |  |
| `cursor` | String! |  |

##### `DevCenterRunError`

**Implements:** [DevCenterRun](#devcenterrun)

DevCenter run failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! | Human-readable error message. |

##### `DevCenterRunFinished`

**Implements:** [DevCenterRun](#devcenterrun)

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

##### `DevCenterRunRunning`

**Implements:** [DevCenterRun](#devcenterrun)

DevCenter recipe is currently running across repositories.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `changeset` | [OrganizationChangeset](#organizationchangeset) |  |

##### `DiffStat`

Aggregate line-level diff statistics.

| Field | Type | Description |
|-------|------|-------------|
| `additions` | Int! | Total lines added. |
| `deletions` | Int! | Total lines removed. |

##### `DirectCommitSucceeded`

**Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Direct commit to repository completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |

##### `ErrorMessage`

**Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `content` | [Markdown](#markdown)! |  |
| `code` | String | Stable error code that clients may switch on for UI copy. The full taxonomy (split into API-call errors vs in-conversation errors) is maintained in `doc/moddy-polling-ui-handoff.md`. As of now:   Configuration / LLM provider:     LLM_UNAVAILABLE, LLM_OVERLOADED, LLM_RATE_LIMITED, LLM_AUTH_FAILED,     LLM_CONTEXT_TOO_LONG, LLM_TIMED_OUT, LLM_QUOTA_EXCEEDED,     LLM_UNREACHABLE, LLM_EMPTY_RESPONSE, LLM_FAILED   Tool execution:     TOOL_UNKNOWN, TOOL_FAILED   Turn lifecycle:     TURN_LIMIT_EXCEEDED, CANCELLED   Fallback:     INTERNAL API-call errors (returned in GraphQL `errors[]`, not as messages): INVALID_CURSOR, FORBIDDEN, CONVERSATION_BUSY, MESSAGE_TOO_LONG, CONVERSATION_NOT_FOUND, TOO_MANY_REQUESTS. |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

##### `ExchangeAuthorizationResult`

Result of exchanging an authorization code.

| Field | Type | Description |
|-------|------|-------------|
| `success` | Boolean! | True if the exchange was successful and token was stored. |
| `error` | String | Error message if exchange failed. |

##### `FileChangeConnection`

Connection for file changes with aggregate statistics.

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[FileChangeEdge](#filechangeedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |
| `searched` | Int! | Total files searched. |
| `changed` | Int! | Files with committable changes. |
| `errors` | Int! | Files with errors. |

##### `FileChangeEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [FileChange](#filechange)! |  |
| `cursor` | String! |  |

##### `ForkAndPullRequestCommitSucceeded`

**Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Fork and pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | [PullRequestStatus](#pullrequeststatus)! | Pull request status. |

##### `ForkCommitOptions`

**Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account. |
| `prefixOrganization` | Boolean! |  |

##### `ForkCommitSucceeded`

**Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Fork commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |

##### `ForkPullRequestOptions`

**Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `organization` | String | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account. |
| `prefixOrganization` | Boolean! |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | [Base64](#base64) |  |
| `draft` | Boolean! |  |
| `maintainerCanModify` | Boolean! | GitHub only flag to allow maintainers to edit a pull request. |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
| `canRecreateClosedPullRequest` | Boolean! | Recreate a pull request if it was already closed. |

##### `GenericHttpToolConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

##### `GithubConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `allowableOrganizations` | [String!]! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [GithubOauth](#githuboauth) |  |

##### `GithubConnection`

**Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

##### `GithubOauth`

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |
| `includePrivateRepos` | Boolean! |  |

##### `GitLabConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `oauth` | [GitLabOauth](#gitlaboauth) |  |

##### `GitLabConnection`

**Implements:** [ScmConnection](#scmconnection)

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

##### `GitLabOauth`

| Field | Type | Description |
|-------|------|-------------|
| `clientId` | String! |  |

##### `GoRecipeBundle`

**Implements:** [RecipeBundle](#recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

##### `HttpToolConnectivity`

| Field | Type | Description |
|-------|------|-------------|
| `connected` | Boolean! |  |
| `latency` | [Duration](#duration) |  |

##### `License`

| Field | Type | Description |
|-------|------|-------------|
| `key` | String |  |

##### `LlmConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `llmProvider` | [LlmProvider](#llmprovider)! |  |

##### `LstArtifact`

The LST artifact for a repository - the precomputed Lossless Semantic Tree
that recipe runs consume. Every repository has a conceptual artifact;
`published` reflects the upstream `mod publish` timestamp, while
`available` indicates whether the saas can route a recipe run to it yet.

| Field | Type | Description |
|-------|------|-------------|
| `published` | [DateTime](#datetime) | When `mod publish` produced an artifact into the customer's LST artifact repository, or null if no artifact has been published. For a tenant configured for encrypted LSTs, a non-null `published` does NOT mean the encrypted artifact has been received by the tenant - that signal lives on `available`. |
| `available` | Boolean! | Whether the artifact is reachable for a recipe run. For an organization source with encryption enabled, true once the connector has uploaded the encrypted artifact and the gateway has surfaced an `encrypted://` alternate publish URI. For a source without encryption (pass-through), true when the gateway-projected row has a non-empty `publishUri`, which we assume is reachable from `mod publish`. |

##### `Markup`

**Implements:** [Marker](#marker)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `level` | [MarkupLevel](#markuplevel)! |  |
| `message` | String |  |
| `detail` | String |  |

##### `MavenConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `localRepository` | String |  |
| `lastIngestedAt` | [DateTime](#datetime) |  |

##### `MavenRecipeBundle`

**Implements:** [RecipeBundle](#recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

##### `MergeOptions`

| Field | Type | Description |
|-------|------|-------------|
| `deleteSourceBranch` | Boolean! |  |
| `mergeMethod` | [MergeMethod](#mergemethod)! |  |

##### `MessageConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[MessageEdge](#messageedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |

##### `MessageEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Message](#message)! |  |
| `cursor` | String! |  |

##### `Moddy`

| Field | Type | Description |
|-------|------|-------------|
| `systemPrompt` | [Prompt](#prompt)! | The effective system prompt for this context. Cascades: user > organization > universal > built-in default. |
| `adminOnly` | Boolean! | When true, only administrators can create conversations or send messages. Install-level policy flag; the UI uses this together with the viewer's admin status to gate the Moddy menu entry. |
| `conversations` | (first: Int = 50, after: String, where: [ConversationWhereInput](#conversationwhereinput), orderBy: [[ConversationOrderByInput](#conversationorderbyinput)!]): [ConversationConnection](#conversationconnection)! |  |
| `providerName` | String | Human-readable provider name (e.g. "Anthropic", "OpenAI"). Null when no LLM provider is configured (in which case `capabilities.moddy` is also false — clients should gate the chat composer on the capability, not on this field). |
| `model` | String | Configured model identifier (e.g. "claude-3-5-sonnet-20241022"). Null when no provider is configured or the provider is configured without a model override. |

##### `MoreHelpLink`

| Field | Type | Description |
|-------|------|-------------|
| `label` | String! |  |
| `uri` | String! |  |

##### `NpmConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

##### `NpmRecipeBundle`

**Implements:** [RecipeBundle](#recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

##### `NugetConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

##### `NugetRecipeBundle`

**Implements:** [RecipeBundle](#recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

##### `OAuthAuthorization`

Represents a pending OAuth authorization.
The UI should redirect to authorizationUrl, then call exchangeAuthorizationCode
with the id and extracted callback parameters.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | Unique ID for this authorization attempt. Used to look up stored PKCE state at exchange time. |
| `authorizationUrl` | String! | The fully-constructed OAuth authorization URL. UI should redirect the user to this URL. IMPORTANT: The UI must store the authorization ID before redirecting, as it will be needed to call exchangeAuthorizationCode after the callback. The redirect URI does not contain the authorization ID. |
| `callbackParameters` | [String!]! | Query parameters the UI should extract from the OAuth callback URL and pass to exchangeAuthorizationCode (e.g., ["code"]). |
| `expiresAt` | [DateTime](#datetime)! | When this authorization expires. UI should treat expired authorizations as stale. |

##### `Option`

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

##### `Organization`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `changelog` | (first: Int = 50, after: String, where: [ChangelogEntryWhereInput](#changelogentrywhereinput), orderBy: [[ChangelogEntryOrderByInput](#changelogentryorderbyinput)!]): [ChangelogEntryConnection](#changelogentryconnection)! | PR and commit activity feed for repositories in this organization. |
| `participants` | (first: Int = 50, after: String, where: [ChangelogParticipantWhereInput](#changelogparticipantwhereinput), orderBy: [[ChangelogParticipantOrderByInput](#changelogparticipantorderbyinput)!]): [ChangelogParticipantConnection](#changelogparticipantconnection)! | All unique participants across the changelog for this organization, aggregated from authors, assignees, closers, and reviewers. |
| `commitOptions` | [[CommitOption](#commitoption)!]! | Available commit options for this organization. |
| `changesets` | (first: Int = 50, after: String, where: [OrganizationChangesetWhereInput](#organizationchangesetwhereinput), orderBy: [[OrganizationChangesetOrderByInput](#organizationchangesetorderbyinput)!]): [OrganizationChangesetConnection](#organizationchangesetconnection)! |  |
| `devCenter` | [DevCenter](#devcenter) | DevCenter provides organization-wide campaign progress tracking. |
| `moddy` | [Moddy](#moddy)! |  |
| `name` | String! |  |
| `parents` | [[Organization](#organization)!]! | The ancestor organizations of this organization, ordered from immediate parent towards root. Does not include the epsilon root. Empty for the root organization and direct children of root. |
| `user` | [User](#user) | The user who owns this organization. Null for global organizations, non-null for user-defined organizations. |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryWhereInput](#repositorywhereinput), orderBy: [[RepositoryOrderByInput](#repositoryorderbyinput)!]): [RepositoryConnection](#repositoryconnection)! |  |
| `children` | (first: Int = 100, after: String, where: [OrganizationWhereInput](#organizationwhereinput), orderBy: [[OrganizationOrderByInput](#organizationorderbyinput)!]): [OrganizationConnection](#organizationconnection)! | Direct children of this organization in the tree, paginated. Useful for lazy-loading the org tree level by level — e.g. an org selector that fetches the root, then the children of each folder only when the user expands it. `where.depth` is ignored on this field — every direct child of a given parent has the same depth, so the filter would be either all-or-nothing. Use `where.name` and the boolean composers (`_and`, `_or`, `_not`) for meaningful filtering. `orderBy` defaults to NAME ascending when unspecified. |
| `marketplace` | [RecipeMarketplace](#recipemarketplace) |  |

##### `OrganizationChangesetConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationChangesetEdge](#organizationchangesetedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `OrganizationChangesetEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationChangeset](#organizationchangeset)! |  |
| `cursor` | String! |  |
| `organization` | [Organization](#organization) | The organization this changeset was run against. May differ from the queried organization when the changeset belongs to a suborganization. Null if the organization has been deleted or is temporarily unavailable. |

##### `OrganizationCommitCanceled`

**Implements:** [OrganizationCommit](#organizationcommit)

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

##### `OrganizationCommitConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationCommitEdge](#organizationcommitedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `OrganizationCommitEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationCommit](#organizationcommit)! |  |
| `cursor` | String! |  |

##### `OrganizationCommitError`

**Implements:** [OrganizationCommit](#organizationcommit)

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

##### `OrganizationCommitFinished`

**Implements:** [OrganizationCommit](#organizationcommit)

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

##### `OrganizationCommitQueued`

**Implements:** [OrganizationCommit](#organizationcommit)

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

##### `OrganizationCommitRunning`

**Implements:** [OrganizationCommit](#organizationcommit)

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

##### `OrganizationConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

##### `OrganizationConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationEdge](#organizationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `OrganizationEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Organization](#organization)! |  |
| `cursor` | String! |  |

##### `OrganizationInstallScope`

The installation lives in a specific organization's marketplace.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | [Organization](#organization)! |  |

##### `OrganizationRecipeRunCanceled`

**Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `canceledAt` | [DateTime](#datetime)! | Alias for finishedAt - when the run was canceled |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |

##### `OrganizationRecipeRunConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[OrganizationRecipeRunEdge](#organizationreciperunedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `OrganizationRecipeRunEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [OrganizationRecipeRun](#organizationreciperun)! |  |
| `cursor` | String! |  |

##### `OrganizationRecipeRunError`

**Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `errorMessage` | String |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |

##### `OrganizationRecipeRunFinished`

**Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `duration` | [Duration](#duration) |  |
| `totals` | [RecipeRunTotals](#reciperuntotals)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |

##### `OrganizationRecipeRunQueued`

**Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `queuedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |

##### `OrganizationRecipeRunRunning`

**Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `totals` | [RecipeRunTotals](#reciperuntotals) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |

##### `OrganizationRecipeRunSyncing`

**Implements:** [OrganizationChangeset](#organizationchangeset), [OrganizationRecipeRun](#organizationreciperun)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |

##### `PageInfo`

| Field | Type | Description |
|-------|------|-------------|
| `hasNextPage` | Boolean! |  |
| `hasPreviousPage` | Boolean! |  |
| `startCursor` | String |  |
| `endCursor` | String |  |

##### `Patch`

| Field | Type | Description |
|-------|------|-------------|
| `diff` | String! | Sanitized diff (does not include markers) |
| `fencedMarkerDiff` | String! | A diff with search and markup markers included in fenced \{\{UUID\}\} wrappers that correspond to ids in the markers list. |
| `markers` | [[Marker](#marker)!]! |  |

##### `PersonalAccessTokenConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `maxExpiryDays` | Int |  |

##### `PipRecipeBundle`

**Implements:** [RecipeBundle](#recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |

##### `PlatformCapabilities`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `artifacts` | Boolean! |  |
| `connector` | Boolean! |  |
| `changelog` | Boolean! |  |
| `codeSearch` | Boolean! |  |
| `moddy` | Boolean! |  |
| `profiling` | [Profiling](#profiling)! |  |

##### `Profiling`

| Field | Type | Description |
|-------|------|-------------|
| `deployed` | Boolean! | Whether the per-tenant Pyroscope ASG, S3 bucket, and IAM are provisioned. |
| `session` | [ProfilingSession](#profilingsession) | The currently active profiling session, or null when profiling is off. Flipped by setProfiling. |

##### `ProfilingSession`

| Field | Type | Description |
|-------|------|-------------|
| `user` | [User](#user)! | The user who turned profiling on. |
| `startedAt` | [DateTime](#datetime)! | When profiling was turned on. |
| `event` | [ProfilingEvent](#profilingevent)! | The primary profiling event the in-process agent is sampling. |

##### `Prompt`

| Field | Type | Description |
|-------|------|-------------|
| `content` | [Markdown](#markdown)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |
| `lastUpdatedBy` | [User](#user)! |  |

##### `PullRequestActionCanceled`

**Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `canceledBy` | [User](#user)! |  |

##### `PullRequestActionConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[PullRequestActionEdge](#pullrequestactionedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `PullRequestActionEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [PullRequestAction](#pullrequestaction)! |  |
| `cursor` | String! |  |

##### `PullRequestActionFailed`

**Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `errorMessage` | String! |  |

##### `PullRequestActionQueued`

**Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |

##### `PullRequestActionRunning`

**Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

##### `PullRequestActionSucceeded`

**Implements:** [PullRequestAction](#pullrequestaction)

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |

##### `PullRequestCommitSucceeded`

**Implements:** [RepositoryCommitSucceeded](#repositorycommitsucceeded), [RepositoryCommit](#repositorycommit)

Pull request commit completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String |  |
| `pullRequestStatus` | [PullRequestStatus](#pullrequeststatus)! | Pull request status. |

##### `PullRequestOptions`

**Implements:** [CommitOptions](#commitoptions)

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |
| `pullRequestTitle` | String | If unset, the commit message will be used as the pull request title. |
| `pullRequestBody` | [Base64](#base64) |  |
| `draft` | Boolean! |  |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy. |
| `canRecreateClosedPullRequest` | Boolean! | Recreate a pull request if it was already closed. |

##### `PullRequestRef`

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `repositoryPath` | String! |  |
| `branch` | String! |  |
| `number` | Int! |  |

##### `PullRequestStatus`

| Field | Type | Description |
|-------|------|-------------|
| `mergeable` | [Mergeable](#mergeable)! | Can this pull request be merged or not |
| `state` | [PullRequestState](#pullrequeststate)! |  |
| `review` | [ReviewStatus](#reviewstatus)! |  |
| `buildState` | [BuildState](#buildstate) |  |
| `otherBlockingReasons` | [String!]! | Additional status flags that block this pull request. Can depend on the SCM service provider. |

##### `PypiConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |

##### `RecipeBundleConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeBundleEdge](#recipebundleedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `RecipeBundleEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeBundle](#recipebundle)! |  |
| `cursor` | String! |  |

##### `RecipeCategory`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown)! |  |
| `recipeCount` | Int! | Total number of unique recipes in this category, including all subcategories recursively. |
| `parents` | [[RecipeCategory](#recipecategory)!]! |  |
| `recipes` | (first: Int = 100, after: String, where: [RecipeWhereInput](#recipewhereinput), orderBy: [[RecipeOrderByInput](#recipeorderbyinput)!]): [RecipeDescriptorConnection](#recipedescriptorconnection)! |  |
| `categories` | (first: Int = 100, after: String, where: [RecipeCategoryWhereInput](#recipecategorywhereinput), orderBy: [[RecipeCategoryOrderByInput](#recipecategoryorderbyinput)!]): [RecipeCategoryConnection](#recipecategoryconnection)! |  |

##### `RecipeCategoryConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeCategoryEdge](#recipecategoryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `RecipeCategoryEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeCategory](#recipecategory)! |  |
| `cursor` | String! |  |

##### `RecipeDescriptor`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `instanceName` | String | A user-defined name for this recipe instance, which may differ from displayName when the same recipe is used multiple times in a composite recipe with different options. |
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown)! |  |
| `recipeCount` | Int |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `options` | [[Option](#option)!]! |  |
| `dataTables` | [[DataTableDescriptor](#datatabledescriptor)!]! |  |
| `detail` | [RecipeDetail](#recipedetail)! | Expensive recipe detail fields that require resolving the full recipe bundle. Returns a state machine: query once to trigger resolution, poll until Finished. |
| `devCenterCards` | [[DevCenterCardDescriptor](#devcentercarddescriptor)!] | DevCenter card descriptors for this recipe, or null if not a DevCenter recipe. |

##### `RecipeDescriptorConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeDescriptorEdge](#recipedescriptoredge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `RecipeDescriptorEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeDescriptor](#recipedescriptor)! |  |
| `cursor` | String! |  |
| `relevance` | Float! | Relevance score for this recipe in the context of a search query. For semantic search, this represents the search relevance (0.0 to 1.0). For filter-based queries, this is always 1.0. |

##### `RecipeDetailError`

**Implements:** [RecipeDetail](#recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! |  |

##### `RecipeDetailFinished`

**Implements:** [RecipeDetail](#recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `recipeList` | (first: Int = 100, after: String): [RecipeDescriptorConnection](#recipedescriptorconnection)! | The list of recipes that make up this composite recipe. Returns an empty connection for non-composite (leaf) recipes. |
| `tags` | [String!]! | Tags associated with this recipe for categorization and filtering. |
| `preconditions` | [[RecipeDescriptor](#recipedescriptor)!]! |  |
| `graph` | [RecipeGraph](#recipegraph)! | Flat vertices-and-edges representation of this composite recipe tree with Singleton deduplication pre-applied. Used by the Builder UI to visualize a composite recipe in a single round trip regardless of tree depth. Atomic (leaf) recipes return a single-vertex graph. |

##### `RecipeDetailLoading`

**Implements:** [RecipeDetail](#recipedetail)

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#datetime)! |  |

##### `RecipeGraph`

Flat vertices-and-edges representation of a composite recipe with
`org.openrewrite.Singleton` deduplication pre-applied. Produced by the
marketplace backend and served to visualization clients in one round trip.

| Field | Type | Description |
|-------|------|-------------|
| `rootVertexId` | Int! | ID of the root (entry-point) vertex in the graph. |
| `vertices` | [[RecipeGraphVertex](#recipegraphvertex)!]! |  |
| `edges` | [[RecipeGraphEdge](#recipegraphedge)!]! |  |

##### `RecipeGraphEdge`

| Field | Type | Description |
|-------|------|-------------|
| `from` | Int! |  |
| `to` | Int! |  |
| `type` | [RecipeGraphEdgeType](#recipegraphedgetype)! |  |

##### `RecipeGraphVertex`

A vertex in a RecipeGraph: a full recipe occurrence with its configured
options. Recipes that declare `org.openrewrite.Singleton` as a precondition
are deduplicated — additional occurrences are expressed as REFERENCE edges
pointing back to the first occurrence rather than as separate vertices.

| Field | Type | Description |
|-------|------|-------------|
| `id` | Int! |  |
| `descriptor` | [RecipeDescriptor](#recipedescriptor)! | The recipe this vertex represents. Carries recipe name (as `id`), displayName, instanceName, options, bundle, dataTables, etc. — reuse the existing RecipeDescriptor type rather than duplicating fields here. |
| `isSingleton` | Boolean! | True if this recipe declares `org.openrewrite.Singleton` as a precondition, meaning additional occurrences in the graph appear as REFERENCE edges pointing back to this vertex. |

##### `RecipeInstallationConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RecipeInstallationEdge](#recipeinstallationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `RecipeInstallationEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RecipeInstallation](#recipeinstallation)! |  |
| `cursor` | String! |  |
| `requestedBy` | [User](#user) | The user who initiated this installation. Null when the install pre-dates the introduction of this column or its state record has been pruned by retention. |
| `scope` | [RecipeInstallationScope](#recipeinstallationscope)! | Where this installation lives: universal, an organization, or a specific user. |
| `user` | [User](#user) | **Deprecated:** Use `scope` instead. It discriminates universal/org/user explicitly. The user whose marketplace this installation was made to. If the installation is a universal or organization installation, this field will be null. |
| `organization` | [Organization](#organization) | **Deprecated:** Use `scope` instead. It discriminates universal/org/user explicitly. The organization to which this installation was made. If the installation is a universal or user installation, this field will be null. |

##### `RecipeInstallationError`

**Implements:** [RecipeInstallation](#recipeinstallation)

Installation failed with an error.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! | Human-readable error message. |

##### `RecipeInstallationFinished`

**Implements:** [RecipeInstallation](#recipeinstallation)

Installation completed successfully.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `recipes` | [[RecipeDescriptor](#recipedescriptor)!]! | The recipes that were installed. |

##### `RecipeInstallationProcessing`

**Implements:** [RecipeInstallation](#recipeinstallation)

Installation is actively loading and resolving the recipe bundle.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `progress` | Float | Progress from 0.0 to 1.0, if available. |

##### `RecipeInstallationQueued`

**Implements:** [RecipeInstallation](#recipeinstallation)

Installation is queued and waiting to be processed.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

##### `RecipeMarketplace`

| Field | Type | Description |
|-------|------|-------------|
| `categories` | (first: Int = 100, after: String, where: [RecipeCategoryWhereInput](#recipecategorywhereinput), orderBy: [[RecipeCategoryOrderByInput](#recipecategoryorderbyinput)!]): [RecipeCategoryConnection](#recipecategoryconnection)! |  |
| `recipes` | (first: Int = 100, after: String, where: [RecipeWhereInput](#recipewhereinput), orderBy: [[RecipeOrderByInput](#recipeorderbyinput)!]): [RecipeDescriptorConnection](#recipedescriptorconnection)! |  |
| `installations` | (first: Int = 50, after: String, where: [RecipeInstallationWhereInput](#recipeinstallationwhereinput), orderBy: [[RecipeInstallationOrderByInput](#recipeinstallationorderbyinput)!]): [RecipeInstallationConnection](#recipeinstallationconnection)! |  |

##### `RecipeOptionsMessage`

**Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `options` | [[Option](#option)!]! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

##### `RecipeOptionValue`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#object)! |  |

##### `RecipeRunFileChange`

**Implements:** [FileChange](#filechange)

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#path)! |  |
| `beforeSourcePath` | [Path](#path) |  |
| `afterSourcePath` | [Path](#path) |  |
| `diff` | (markupLevel: [MarkupLevel](#markuplevel) = WARNING, showWhitespaceOnlyChanges: Boolean = true): [Patch](#patch) |  |
| `recipesThatMadeChanges` | [[[RecipeDescriptor](#recipedescriptor)!]!]! | Recipe chains that contributed changes to this file. Each inner list is one mutation event's call stack, ordered root composite first to leaf recipe last (the leaf is the narrowest recipe that actually performed the change). |

##### `RecipeRunMessage`

**Implements:** [Message](#message)

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

##### `RecipeRunProgress`

Typed progress envelope for an in-flight recipe run.

| Field | Type | Description |
|-------|------|-------------|
| `recipeRunId` | ID |  |
| `reposQueued` | Int |  |
| `reposRunning` | Int |  |
| `reposFinished` | Int |  |
| `reposTotal` | Int |  |

##### `RecipeRunTotals`

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

##### `RecipeSearchMessage`

**Implements:** [Message](#message)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `searchResults` | [[RecipeDescriptor](#recipedescriptor)!]! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

##### `RecipeUninstallation`

Result of an uninstall operation.

| Field | Type | Description |
|-------|------|-------------|
| `removedCount` | Int! | The number of recipes that were removed. |

##### `ReindexResult`

| Field | Type | Description |
|-------|------|-------------|
| `resetCount` | Int! | Number of repository cursors that were reset. |
| `since` | [DateTime](#datetime)! | The timestamp cursors were rewound to. |

##### `Repository`

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `path` | String! |  |
| `branch` | String! |  |
| `changeset` | String |  |
| `lstArtifact` | [LstArtifact](#lstartifact)! |  |

##### `RepositoryAuthorization`

Authorization status for accessing repository content.
Resolved by the changeset reader using a batch check against the authorization service.

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin (e.g., github.com). |
| `access` | [RepoAccess](#repoaccess)! | The current viewer's read access to this specific repository. Drives whether the UI renders content (ALLOWED), a "you don't have access" message (DENIED), or an authorize prompt (UNAUTHENTICATED). |

##### `RepositoryBatchChange`

**Implements:** [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

##### `RepositoryChangesetConnection`

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

##### `RepositoryChangesetEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryChangeset](#repositorychangeset)! |  |
| `cursor` | String! |  |

##### `RepositoryCommitCanceled`

**Implements:** [RepositoryCommit](#repositorycommit)

Repository commit was canceled.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

##### `RepositoryCommitConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryCommitEdge](#repositorycommitedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |
| `completedCount` | Int! | Count of repository commits that have reached a terminal state (succeeded, failed, canceled, or no changes). Pair with `count` to show progress: "Completed X / Y". |

##### `RepositoryCommitEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryCommit](#repositorycommit)! |  |
| `cursor` | String! |  |

##### `RepositoryCommitFailed`

**Implements:** [RepositoryCommit](#repositorycommit)

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

##### `RepositoryCommitNoChanges`

**Implements:** [RepositoryCommit](#repositorycommit)

Repository commit completed but yielded no changes.
Generally occurs when applying a patch does not produce any changes to commit.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

##### `RepositoryCommitQueued`

**Implements:** [RepositoryCommit](#repositorycommit)

Repository commit is queued and waiting to be processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `rateLimitReset` | [DateTime](#datetime) | Time when rate limit expires (if rate limited). |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

##### `RepositoryCommitRunning`

**Implements:** [RepositoryCommit](#repositorycommit)

Repository commit is actively being processed.
Use `options.__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `options` | [CommitOptions](#commitoptions)! | The commit options. Use `__typename` to determine commit type. |

##### `RepositoryConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryEdge](#repositoryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `RepositoryEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Repository](#repository)! |  |
| `cursor` | String! |  |

##### `RepositoryRecipeRunCanceled`

**Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

##### `RepositoryRecipeRunConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[RepositoryRecipeRunEdge](#repositoryreciperunedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `RepositoryRecipeRunEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [RepositoryRecipeRun](#repositoryreciperun)! |  |
| `cursor` | String! |  |

##### `RepositoryRecipeRunError`

**Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

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

##### `RepositoryRecipeRunFinished`

**Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |
| `startedAt` | [DateTime](#datetime) |  |
| `finishedAt` | [DateTime](#datetime) |  |
| `timeSavings` | [Duration](#duration) |  |

##### `RepositoryRecipeRunNoLst`

**Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

##### `RepositoryRecipeRunQueued`

**Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |
| `queuedAt` | [DateTime](#datetime) |  |

##### `RepositoryRecipeRunRunning`

**Implements:** [RepositoryRecipeRun](#repositoryreciperun), [RepositoryChangeset](#repositorychangeset)

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |
| `startedAt` | [DateTime](#datetime) |  |

##### `ReviewStatus`

| Field | Type | Description |
|-------|------|-------------|
| `approvedBy` | [String!] |  |
| `reviewDecision` | [ReviewDecision](#reviewdecision)! |  |

##### `RevokeTokenResult`

Result of revoking an SCM OAuth token.

| Field | Type | Description |
|-------|------|-------------|
| `success` | Boolean! | True if the token was revoked (or didn't exist). |
| `error` | String | Error message if revocation failed. |

##### `S3Configuration`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `skipSsl` | Boolean! |  |
| `skipValidateConnectivity` | Boolean! |  |
| `connectivity` | [HttpToolConnectivity](#httptoolconnectivity)! |  |
| `region` | String |  |
| `endpointUrl` | String |  |

##### `ScmTokenInfo`

| Field | Type | Description |
|-------|------|-------------|
| `created` | [DateTime](#datetime)! |  |
| `expiresAt` | [DateTime](#datetime) |  |

##### `SearchResult`

**Implements:** [Marker](#marker)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `type` | String! |  |
| `description` | String |  |

##### `SendMessageResult`

Handle returned by `createConversation` / `sendMessage`. Clients should
poll `conversation.messages(after: initialCursor)` using
`turnState.recommendedPollIntervalMs` as the cadence hint.

| Field | Type | Description |
|-------|------|-------------|
| `conversation` | [Conversation](#conversation)! |  |
| `initialCursor` | String! |  |
| `turnState` | [ConversationTurnState](#conversationturnstate)! |  |

##### `TextMessage`

**Implements:** [Message](#message)

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

##### `ToolInfo`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `version` | String |  |
| `arguments` | String |  |

##### `UiConfiguration`

| Field | Type | Description |
|-------|------|-------------|
| `moreHelp` | [[MoreHelpLink](#morehelplink)!] |  |
| `loginText` | String |  |
| `loginLinks` | [[MoreHelpLink](#morehelplink)!] |  |
| `cliDownloadInstructions` | [CliDownloadInstructionLink](#clidownloadinstructionlink) |  |

##### `UniversalInstallScope`

The installation lives in the universal marketplace, visible to every tenant.

| Field | Type | Description |
|-------|------|-------------|
| `universal` | Boolean! | Always true. Present so the type has a selectable field. |

##### `User`

| Field | Type | Description |
|-------|------|-------------|
| `email` | String! |  |
| `username` | String |  |
| `role` | [UserRole](#userrole) |  |
| `lastActive` | [DateTime](#datetime) |  |
| `tokens` | (first: Int = 100, after: String, where: [AccessTokenWhereInput](#accesstokenwhereinput), orderBy: [[AccessTokenOrderByInput](#accesstokenorderbyinput)!]): [AccessTokenConnection](#accesstokenconnection)! |  |
| `moddy` | [Moddy](#moddy)! |  |

##### `UserConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[UsersEdge](#usersedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `UserInstallScope`

The installation lives in a specific user's personal marketplace.

| Field | Type | Description |
|-------|------|-------------|
| `user` | [User](#user)! |  |

##### `UsersEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [User](#user)! |  |
| `cursor` | String! |  |

##### `VisualizationAvailable`

**Implements:** [Visualization](#visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |
| `changesetId` | ID! | The changeset (recipe run or batch change) this visualization is available for. |

##### `VisualizationConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[VisualizationEdge](#visualizationedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `VisualizationDescriptor`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `displayName` | [Markdown](#markdown)! |  |
| `description` | [Markdown](#markdown)! |  |
| `image` | [Base64](#base64)! |  |
| `options` | [[VisualizationOption](#visualizationoption)!]! |  |

##### `VisualizationEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [Visualization](#visualization)! |  |
| `cursor` | String! |  |

##### `VisualizationError`

**Implements:** [Visualization](#visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `message` | String! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#visualizationrepositoryconnection)! |  |

##### `VisualizationFinished`

**Implements:** [Visualization](#visualization)

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

##### `VisualizationImageOutput`

**Implements:** [VisualizationOutput](#visualizationoutput)

| Field | Type | Description |
|-------|------|-------------|
| `format` | [ImageFormat](#imageformat)! |  |
| `data` | [Base64](#base64)! |  |

##### `VisualizationOption`

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

##### `VisualizationPlotlyOutput`

**Implements:** [VisualizationOutput](#visualizationoutput)

| Field | Type | Description |
|-------|------|-------------|
| `data` | [Base64](#base64)! | Plotly JSON data (MIME type: application/vnd.plotly.v1+json) |

##### `VisualizationProcessing`

**Implements:** [Visualization](#visualization)

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |
| `changesetId` | ID! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `repositories` | (first: Int = 100, after: String): [VisualizationRepositoryConnection](#visualizationrepositoryconnection)! |  |

##### `VisualizationRepository`

| Field | Type | Description |
|-------|------|-------------|
| `state` | [VisualizationRepositoryRunState](#visualizationrepositoryrunstate)! |  |
| `stateMessage` | String |  |
| `repository` | [Repository](#repository)! |  |

##### `VisualizationRepositoryConnection`

| Field | Type | Description |
|-------|------|-------------|
| `edges` | [[VisualizationRepositoryEdge](#visualizationrepositoryedge)!]! |  |
| `pageInfo` | [PageInfo](#pageinfo)! |  |
| `count` | Int! |  |

##### `VisualizationRepositoryEdge`

| Field | Type | Description |
|-------|------|-------------|
| `node` | [VisualizationRepository](#visualizationrepository)! |  |
| `cursor` | String! |  |

##### `YamlRecipeBundle`

**Implements:** [RecipeBundle](#recipebundle)

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | [Base64](#base64)! |  |
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int |  |
| `primary` | [RecipeDescriptor](#recipedescriptor) | The primary recipe in this bundle. When specified, only this recipe is shown in marketplace categories, hiding other recipes from this bundle. |

### Interfaces

##### `AuditLogsDownload`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |

##### `BulkPullRequestAction`

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

##### `ChangelogEntry`

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
| `buildState` | [BuildState](#buildstate) | CI status (e.g. from GitHub Actions, GitLab pipelines). Null if no CI is configured or status has not been fetched yet. |
| `diffstat` | [DiffStat](#diffstat)! | Lines added and removed. |

##### `CommitOptions`

| Field | Type | Description |
|-------|------|-------------|
| `branchName` | String |  |

##### `DataTable`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `dataTable` | [DataTableDescriptor](#datatabledescriptor)! |  |
| `instanceName` | String! | A human-readable name for this data table instance, describing what it contains. For example, "Method calls matching \`java.util.List add(..)\`". Defaults to the data table's display name when not explicitly set. |
| `group` | String | The group identifying this data table bucket. For community tables this is the group name (e.g., "architecture"). Null for ungrouped/private tables. |

##### `DevCenterRun`

A DevCenter run represents the execution of a DevCenter recipe.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `startedAt` | [DateTime](#datetime)! | When this DevCenter run started. |
| `changeset` | [OrganizationChangeset](#organizationchangeset) | The underlying recipe run changeset. |

##### `FileChange`

A change to a single file within a repository changeset.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [Path](#path)! | Path to the file relative to repository root. |
| `beforeSourcePath` | [Path](#path) | The source path before the change (from the diff's `--- a/...` line). Null for newly created files. |
| `afterSourcePath` | [Path](#path) | The source path after the change (from the diff's `+++ b/...` line). Null for deleted files. |
| `diff` | (markupLevel: [MarkupLevel](#markuplevel) = WARNING, showWhitespaceOnlyChanges: Boolean = true): [Patch](#patch) | Get the diff for this file. |

##### `Marker`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |

##### `Message`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `user` | [User](#user)! |  |
| `state` | [MessageState](#messagestate)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! |  |

##### `OrganizationChangeset`

An organization-wide changeset represents code changes or search results
across multiple repositories. Implemented by OrganizationRecipeRun* and BatchChange.

Note: This is a shared interface definition. Subgraphs that need to resolve this
interface must define the implementation types (OrganizationRecipeRun*, BatchChange).

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset. Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this changeset. |
| `user` | [User](#user)! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this changeset. Each visualization starts as Available and transitions to Processing/Finished/Error when runVisualization mutation is called. |

##### `OrganizationCommit`

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

##### `OrganizationRecipeRun`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bulkPullRequestActions` | (first: Int = 50, after: String, where: [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput), orderBy: [[BulkPullRequestActionOrderByInput](#bulkpullrequestactionorderbyinput)!]): [BulkPullRequestActionConnection](#bulkpullrequestactionconnection)! | Bulk pull request actions for recipe-run changesets. |
| `commits` | (first: Int = 50, after: String, where: [OrganizationCommitWhereInput](#organizationcommitwhereinput), orderBy: [[OrganizationCommitOrderByInput](#organizationcommitorderbyinput)!]): [OrganizationCommitConnection](#organizationcommitconnection) | Commit operations initiated from this recipe run. |
| `recipe` | [RecipeDescriptor](#recipedescriptor) |  |
| `user` | [User](#user)! |  |
| `options` | [[RecipeOptionValue](#recipeoptionvalue)!]! |  |
| `createdAt` | [DateTime](#datetime)! |  |
| `lastUpdatedAt` | [DateTime](#datetime)! | Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes. |
| `priority` | [RecipeRunPriority](#reciperunpriority)! |  |
| `parent` | [OrganizationChangeset](#organizationchangeset) |  |
| `repositories` | (first: Int = 100, after: String, where: [RepositoryChangesetWhereInput](#repositorychangesetwhereinput), orderBy: [[RepositoryChangesetOrderByInput](#repositorychangesetorderbyinput)!]): [RepositoryChangesetConnection](#repositorychangesetconnection)! |  |
| `dataTables` | (first: Int = 50, after: String, where: [DataTableWhereInput](#datatablewhereinput), orderBy: [[DataTableOrderByInput](#datatableorderbyinput)!]): [DataTableConnection](#datatableconnection)! | Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called. |
| `visualizations` | (first: Int = 50, after: String, where: [VisualizationWhereInput](#visualizationwhereinput), orderBy: [[VisualizationOrderByInput](#visualizationorderbyinput)!]): [VisualizationConnection](#visualizationconnection)! | Visualizations produced by this recipe run. |

##### `PullRequestAction`

The state of an individual repository within a `BulkPullRequestAction`.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `pullRequest` | [PullRequestRef](#pullrequestref)! |  |

##### `RecipeBundle`

| Field | Type | Description |
|-------|------|-------------|
| `requestedVersion` | String |  |
| `version` | String |  |
| `recipeCount` | Int | Number of top-level recipes contributed by this bundle's package. Null when the bundle has not yet been resolved into the marketplace (e.g. an installation still in progress). |

##### `RecipeDetail`

State machine for recipe detail resolution. Querying the `detail` field on a
RecipeDescriptor triggers background resolution of the full recipe bundle.
Poll until `__typename` is `RecipeDetailFinished`.

| Field | Type | Description |
|-------|------|-------------|
| `startedAt` | [DateTime](#datetime)! |  |

##### `RecipeInstallation`

Common fields for all recipe installation states.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `bundle` | [RecipeBundle](#recipebundle)! |  |
| `startedAt` | [DateTime](#datetime)! |  |

##### `RepositoryChangeset`

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! | Authorization status for accessing this repository's content. Check this before accessing file results. |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! | File-level changes within this repository. |

##### `RepositoryCommit`

A commit result for a single repository within an organization-level commit operation.
Use `__typename` to determine the current state.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |

##### `RepositoryCommitSucceeded`

Repository commit completed successfully.
Use `__typename` to determine the specific commit type.

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `startedAt` | [DateTime](#datetime)! |  |
| `finishedAt` | [DateTime](#datetime)! |  |
| `resultLink` | String | Link to the commit or pull request result. |

##### `RepositoryRecipeRun`

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [Repository](#repository)! |  |
| `authorization` | [RepositoryAuthorization](#repositoryauthorization)! |  |
| `syncStatus` | [RepositorySyncStatus](#repositorysyncstatus) |  |
| `results` | (first: Int = 100, after: String, where: [FileChangeWhereInput](#filechangewhereinput), orderBy: [[FileChangeOrderByInput](#filechangeorderbyinput)!]): [FileChangeConnection](#filechangeconnection)! |  |

##### `ScmConnection`

| Field | Type | Description |
|-------|------|-------------|
| `resourceId` | String! |  |
| `isAuthorized` | Boolean! |  |
| `tokens` | [[ScmTokenInfo](#scmtokeninfo)!]! |  |

##### `Visualization`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! |  |
| `descriptor` | [VisualizationDescriptor](#visualizationdescriptor)! |  |

##### `VisualizationOutput`

| Field | Type | Description |
|-------|------|-------------|
| `data` | [Base64](#base64)! |  |

### Enums

##### `AccessTokenOrderByField`

* `CREATED`
* `EXPIRES_AT`

##### `AuditActionType`

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`

##### `AuditLogExportFormat`

* `CEF`
* `CSV`

##### `AuditLogOrderByField`

* `TIMESTAMP`
* `USER_ID`
* `TARGET`
* `ACTION`

##### `AuditLogsDownloadOrderByField`

* `STARTED_AT`

##### `AuditOutcome`

* `SUCCESS`
* `FAILURE`

##### `BuildState`

* `PENDING`
* `IN_PROGRESS`
* `FAILED`
* `SKIPPED`
* `SUCCESSFUL`
* `NOT_REQUIRED`

##### `BulkPullRequestActionOrderByField`

* `CREATED_AT`
* `STARTED_AT`
* `FINISHED_AT`

##### `BulkPullRequestActionState`

The lifecycle state of a `BulkPullRequestAction`. Matches the `__typename`
of the concrete state types (Queued, Running, Finished, Canceled, Error).

* `QUEUED`
* `RUNNING`
* `FINISHED`
* `CANCELED`
* `ERROR`

##### `ChangelogEntryOrderByField`

* `UPDATED_AT`
* `CREATED_AT`
* `TITLE`
* `REPOSITORY_PATH`

##### `ChangelogEntryType`

Discriminator for filtering by entry type.

* `COMMIT`
* `PULL_REQUEST`

##### `ChangelogParticipantOrderByField`

* `USERNAME`
* `EMAIL`
* `NAME`

##### `CommitOption`

* `DIRECT`
* `BRANCH`
* `FORK`
* `PULL_REQUEST`
* `FORK_AND_PULL_REQUEST`
* `NONE`

##### `ConnectorOrderByField`

* `NICKNAME`
* `VERSION`

##### `ConnectorToolType`

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

##### `ContributorRole`

The participant's role for filtering.

* `AUTHOR`
* `ASSIGNEE`
* `CLOSED_BY`
* `REVIEWER`

##### `ConversationOrderByField`

* `STARTED_AT`
* `LAST_UPDATED_AT`

##### `ConversationPhase`

* `IDLE`
* `AWAITING_LLM`
* `STREAMING_TEXT`
* `TOOL_RUNNING`
* `ERRORED`

##### `DataTableFormat`

* `CSV`
* `XLSX`

##### `DataTableOrderByField`

* `DATA_TABLE`
* `STARTED_AT`

##### `DevCenterAggregation`

How DevCenter card results are aggregated across repositories.

* `PER_REPOSITORY`
* `PER_OCCURRENCE`

##### `DevCenterRunOrderByField`

* `STARTED_AT`
* `STATE`

##### `DevCenterRunState`

Execution state of a DevCenter run.

* `RUNNING`
* `FINISHED`
* `CANCELED`
* `ERROR`

##### `FileChangeOrderByField`

* `PATH`

##### `ImageFormat`

* `SVG`
* `GIF`
* `JPEG`
* `PNG`

##### `LlmProvider`

* `ANTHROPIC`
* `GEMINI`
* `MISTRAL`
* `OPEN_AI`

##### `MarkupLevel`

* `DEBUG`
* `INFO`
* `WARNING`
* `ERROR`
* `NONE`

##### `Mergeable`

* `MERGEABLE`
* `BLOCKED`
* `UNKNOWN`

##### `MergeMethod`

* `MERGE`
* `SQUASH`
* `REBASE`

##### `MessageState`

* `IN_PROGRESS`
* `COMPLETED`

##### `OrganizationChangesetOrderByField`

* `CREATED_AT`
* `TYPE`
* `USER`

##### `OrganizationChangesetType`

* `RECIPE_RUN`
* `BATCH_CHANGE`

##### `OrganizationCommitOrderByField`

* `STARTED_AT`

##### `OrganizationOrderByField`

* `NAME`

##### `OrganizationRecipeRunOrderByField`

* `STARTED_AT`
* `ENDED_AT`
* `STATE`
* `USER`

##### `OrganizationRecipeRunState`

* `QUEUED`
* `SYNCING`
* `RUNNING`
* `FINISHED`
* `CANCELED`
* `ERROR`

##### `ProfilingEvent`

The primary event the Pyroscope agent samples on. async-profiler can only
collect one of these at a time as the primary event; alloc and lock
sampling run on separate channels and are always on.

* `CPU`
* `WALL`

##### `PullRequestActionOrderByField`

* `REPOSITORY_PATH`
* `STATE`
* `STARTED_AT`

##### `PullRequestActionState`

* `QUEUED`
* `IN_PROGRESS`
* `SUCCESSFUL`
* `FAILED`
* `CANCELED`

##### `PullRequestActionType`

* `APPROVE`
* `MERGE`
* `CLOSE`

##### `PullRequestState`

* `OPEN`
* `DRAFT`
* `CLOSED`
* `MERGED`

##### `RecipeBundleOrderByField`

* `PACKAGE_NAME`
* `VERSION`
* `REQUESTED_VERSION`
* `ECOSYSTEM`

##### `RecipeCategoryOrderByField`

* `DISPLAY_NAME`
* `RECIPE_COUNT`

##### `RecipeEcosystem`

* `Maven`
* `NPM`
* `YAML`
* `Pip`
* `Nuget`
* `Go`

##### `RecipeGraphEdgeType`

* `RECIPE`
* `PRECONDITION`
* `REFERENCE`

##### `RecipeInstallationOrderByField`

* `STARTED_AT`
* `STATUS`
* `ECOSYSTEM`
* `PACKAGE_NAME`
* `VERSION`
* `FINISHED_AT`

##### `RecipeInstallationStatus`

* `QUEUED`
* `PROCESSING`
* `FINISHED`
* `ERROR`

##### `RecipeOrderByField`

* `ID`
* `DISPLAY_NAME`
* `RECIPE_COUNT`
* `RELEVANCE`

##### `RecipeRunPriority`

Priority level for recipe runs.
HIGH priority runs target small organizations (≤100 repositories).
LOW priority runs target large organizations (>100 repositories).

* `HIGH`
* `LOW`

##### `RepoAccess`

The current viewer's read access to a specific repository (per-repo SCM check, not just a
token for the origin).

* `ALLOWED`
* `DENIED`
* `UNAUTHENTICATED`

##### `RepositoryChangesetOrderByField`

* `PATH`
* `ORIGIN`
* `FILES_CHANGED`
* `SYNC_STATUS`
* `STATE`

##### `RepositoryChangesetState`

Result state of a repository within a changeset.

* `QUEUED`
* `RUNNING`
* `SUCCESS`
* `ERROR`
* `NO_LST`
* `CANCELED`

##### `RepositoryCommitOrderByField`

* `STARTED_AT`

##### `RepositoryErrorReason`

* `FAILED_LOAD_AST`
* `FAILED_LOAD_RECIPE`
* `TIMEOUT`
* `RECIPE_ERROR`

##### `RepositoryOrderByField`

* `ORIGIN`
* `PATH`
* `BRANCH`
* `CHANGESET`
* `LST_ARTIFACT_PUBLISHED`

##### `RepositoryRecipeRunOrderByField`

* `PATH`
* `ORIGIN`
* `STATE`

##### `RepositorySyncStatus`

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

##### `ReviewDecision`

* `APPROVED`
* `CHANGES_REQUESTED`
* `REVIEW_REQUIRED`
* `REVIEW_NOT_REQUIRED`
* `UNKNOWN`

##### `ScmType`

* `GITHUB`
* `BITBUCKET`
* `BITBUCKET_CLOUD`
* `GITLAB`
* `AZURE_DEVOPS`

##### `SortOrder`

* `ASC`
* `DESC`

##### `UserOrderByField`

* `EMAIL`
* `USERNAME`
* `ROLE`
* `LAST_ACTIVE`

##### `UserRole`

* `ADMIN`
* `USER`

##### `VisualizationOrderByField`

* `VISUALIZATION`
* `STARTED_AT`

##### `VisualizationRepositoryRunState`

* `QUEUED`
* `PROCESSING`
* `FINISHED`
* `FINISHED_EMPTY`
* `NO_LST`
* `ERROR`

### Input types

##### `AccessTokenOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AccessTokenOrderByField](#accesstokenorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `AccessTokenWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `description` | [StringFilter](#stringfilter) |  |
| `created` | [DateTimeFilter](#datetimefilter) |  |
| `expiresAt` | [DateTimeFilter](#datetimefilter) |  |
| `_and` | [[AccessTokenWhereInput](#accesstokenwhereinput)!] |  |
| `_or` | [[AccessTokenWhereInput](#accesstokenwhereinput)!] |  |
| `_not` | [AccessTokenWhereInput](#accesstokenwhereinput) |  |

##### `AuditActionTypeFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditActionType](#auditactiontype) |  |
| `_neq` | [AuditActionType](#auditactiontype) |  |
| `_in` | [[AuditActionType](#auditactiontype)!] |  |
| `_nin` | [[AuditActionType](#auditactiontype)!] |  |

##### `AuditLogExportFormatFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditLogExportFormat](#auditlogexportformat) |  |
| `_neq` | [AuditLogExportFormat](#auditlogexportformat) |  |
| `_in` | [[AuditLogExportFormat](#auditlogexportformat)!] |  |
| `_nin` | [[AuditLogExportFormat](#auditlogexportformat)!] |  |

##### `AuditLogOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AuditLogOrderByField](#auditlogorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `AuditLogsDownloadOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [AuditLogsDownloadOrderByField](#auditlogsdownloadorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `AuditLogsDownloadWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `format` | [AuditLogExportFormatFilter](#auditlogexportformatfilter) |  |
| `_and` | [[AuditLogsDownloadWhereInput](#auditlogsdownloadwhereinput)!] |  |
| `_or` | [[AuditLogsDownloadWhereInput](#auditlogsdownloadwhereinput)!] |  |
| `_not` | [AuditLogsDownloadWhereInput](#auditlogsdownloadwhereinput) |  |

##### `AuditLogWhereInput`

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

##### `AuditOutcomeFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [AuditOutcome](#auditoutcome) |  |
| `_neq` | [AuditOutcome](#auditoutcome) |  |

##### `BooleanFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | Boolean |  |
| `_neq` | Boolean |  |

##### `BuildStateFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [BuildState](#buildstate) |  |
| `_neq` | [BuildState](#buildstate) |  |
| `_in` | [[BuildState](#buildstate)!] |  |
| `_nin` | [[BuildState](#buildstate)!] |  |

##### `BulkPullRequestActionOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [BulkPullRequestActionOrderByField](#bulkpullrequestactionorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `BulkPullRequestActionStateFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [BulkPullRequestActionState](#bulkpullrequestactionstate) |  |
| `_neq` | [BulkPullRequestActionState](#bulkpullrequestactionstate) |  |
| `_in` | [[BulkPullRequestActionState](#bulkpullrequestactionstate)!] |  |
| `_nin` | [[BulkPullRequestActionState](#bulkpullrequestactionstate)!] |  |

##### `BulkPullRequestActionWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `actionType` | [PullRequestActionTypeFilter](#pullrequestactiontypefilter) |  |
| `state` | [BulkPullRequestActionStateFilter](#bulkpullrequestactionstatefilter) |  |
| `startedAt` | [DateTimeFilter](#datetimefilter) | Filter by `startedAt`. Matches RUNNING/FINISHED/ERROR/CANCELED states that have a startedAt value; QUEUED entries (no startedAt) are excluded when a bound is supplied. |
| `user` | [UserWhereInput](#userwhereinput) |  |
| `_and` | [[BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput)!] |  |
| `_or` | [[BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput)!] |  |
| `_not` | [BulkPullRequestActionWhereInput](#bulkpullrequestactionwhereinput) |  |

##### `ChangelogAuthorWhereInput`

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

##### `ChangelogEntryOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ChangelogEntryOrderByField](#changelogentryorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `ChangelogEntryTypeFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ChangelogEntryType](#changelogentrytype) |  |
| `_neq` | [ChangelogEntryType](#changelogentrytype) |  |
| `_in` | [[ChangelogEntryType](#changelogentrytype)!] |  |
| `_nin` | [[ChangelogEntryType](#changelogentrytype)!] |  |

##### `ChangelogEntryWhereInput`

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

##### `ChangelogParticipantOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ChangelogParticipantOrderByField](#changelogparticipantorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `ChangelogParticipantWhereInput`

Filter input for participants.

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#stringfilter) |  |
| `email` | [StringFilter](#stringfilter) |  |
| `username` | [StringFilter](#stringfilter) |  |
| `role` | [ContributorRole](#contributorrole) | Filter participants by role. |
| `updatedAt` | [DateTimeFilter](#datetimefilter) | Scopes participant aggregation to entries updated within this window. Defaults to last 30 days if not specified. |
| `_and` | [[ChangelogParticipantWhereInput](#changelogparticipantwhereinput)!] |  |
| `_or` | [[ChangelogParticipantWhereInput](#changelogparticipantwhereinput)!] |  |
| `_not` | [ChangelogParticipantWhereInput](#changelogparticipantwhereinput) |  |

##### `CommitInput`

Input for creating a commit from a changeset.

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | ID | Organization ID for determining available commit options. |
| `changesetId` | ID! | Changeset ID (e.g., recipe run ID, batch changeset ID). Resolved via federation to an OrganizationChangeset. |
| `repositories` | [[RepositoryChangesetWhereInput](#repositorychangesetwhereinput)!] | Filter which repositories and files to include. Evaluated in order - first matching rule wins for each repository. Put repo-specific rules first, global fallback rules last. If empty or not provided, all repositories and files in the changeset are included. |
| `branchName` | String | If unset, commit to the branch that the LST was generated from. |
| `message` | String! | Commit message. |
| `extendedMessage` | [Base64](#base64) | Extended commit message (Base64 encoded). |
| `gpgKey` | [GpgInput](#gpginput) | GPG key for signing commits. |
| `email` | String | Git-author email to attribute the commit to (display only). This value is never used to select SCM credentials — tokens are resolved from your authenticated identity (or a token you supply explicitly via scmAccessTokens), never from this field. If left blank, your first email will be used. |
| `scmAccessTokens` | [[ScmAccessToken](#scmaccesstoken)!] | Optional SCM access tokens you already hold, keyed by origin. When provided, these are used instead of looking up your stored OAuth token for the matching origin. These are your own tokens; they do not select another user's credentials. |
| `strategy` | [CommitStrategyInput](#commitstrategyinput)! | How to deliver the commit. Choose one strategy. |

##### `CommitStrategyInput`

Commit delivery strategy. Choose one option.

| Field | Type | Description |
|-------|------|-------------|
| `direct` | [DirectCommitInput](#directcommitinput) | Push directly to the origin remote. |
| `fork` | [ForkCommitInput](#forkcommitinput) | Push to a fork of the origin repository. |
| `pullRequest` | [PullRequestCommitInput](#pullrequestcommitinput) | Create a pull request from a branch on the origin remote. |
| `forkAndPullRequest` | [ForkAndPullRequestCommitInput](#forkandpullrequestcommitinput) | Create a pull request from a branch on a fork. |

##### `ConnectorOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ConnectorOrderByField](#connectororderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `ConnectorToolTypeFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ConnectorToolType](#connectortooltype) |  |
| `_in` | [[ConnectorToolType](#connectortooltype)!] |  |

##### `ConnectorWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `nickname` | [StringFilter](#stringfilter) |  |
| `version` | [StringFilter](#stringfilter) |  |
| `toolType` | [ConnectorToolTypeFilter](#connectortooltypefilter) |  |
| `_and` | [[ConnectorWhereInput](#connectorwhereinput)!] |  |
| `_or` | [[ConnectorWhereInput](#connectorwhereinput)!] |  |
| `_not` | [ConnectorWhereInput](#connectorwhereinput) |  |

##### `ConversationOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [ConversationOrderByField](#conversationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `ConversationWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `user` | [StringFilter](#stringfilter) |  |
| `startedAt` | [DateTimeFilter](#datetimefilter) |  |
| `lastUpdatedAt` | [DateTimeFilter](#datetimefilter) |  |
| `_and` | [[ConversationWhereInput](#conversationwhereinput)!] |  |
| `_or` | [[ConversationWhereInput](#conversationwhereinput)!] |  |
| `_not` | [ConversationWhereInput](#conversationwhereinput) |  |

##### `CreateConversationInput`

| Field | Type | Description |
|-------|------|-------------|
| `message` | String! |  |
| `organizationId` | ID! |  |

##### `CreateUserOrganizationInput`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! | The name of the organization. |
| `repositories` | [[RepositoryInput](#repositoryinput)!] | Repositories to include in the organization. |

##### `DataTableFormatFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DataTableFormat](#datatableformat) |  |
| `_neq` | [DataTableFormat](#datatableformat) |  |
| `_in` | [[DataTableFormat](#datatableformat)!] |  |
| `_nin` | [[DataTableFormat](#datatableformat)!] |  |

##### `DataTableOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [DataTableOrderByField](#datatableorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `DataTableWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `dataTable` | [StringFilter](#stringfilter) |  |
| `group` | [StringFilter](#stringfilter) |  |
| `format` | [DataTableFormatFilter](#datatableformatfilter) |  |
| `_and` | [[DataTableWhereInput](#datatablewhereinput)!] |  |
| `_or` | [[DataTableWhereInput](#datatablewhereinput)!] |  |
| `_not` | [DataTableWhereInput](#datatablewhereinput) |  |

##### `DateTimeFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DateTime](#datetime) |  |
| `_neq` | [DateTime](#datetime) |  |
| `_gt` | [DateTime](#datetime) |  |
| `_gte` | [DateTime](#datetime) |  |
| `_lt` | [DateTime](#datetime) |  |
| `_lte` | [DateTime](#datetime) |  |

##### `DevCenterRunOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [DevCenterRunOrderByField](#devcenterrunorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `DevCenterRunStateFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [DevCenterRunState](#devcenterrunstate) |  |
| `_neq` | [DevCenterRunState](#devcenterrunstate) |  |
| `_in` | [[DevCenterRunState](#devcenterrunstate)!] |  |
| `_nin` | [[DevCenterRunState](#devcenterrunstate)!] |  |

##### `DevCenterRunWhereInput`

Filter input for DevCenter run queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) | Filter by run ID. Use `where: \{ id: \{ _eq: "run-id" \} \}` to get a specific run. |
| `state` | [DevCenterRunStateFilter](#devcenterrunstatefilter) | Filter by run state. |
| `startedAt` | [DateTimeFilter](#datetimefilter) | Filter by start time. |
| `_and` | [[DevCenterRunWhereInput](#devcenterrunwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[DevCenterRunWhereInput](#devcenterrunwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [DevCenterRunWhereInput](#devcenterrunwhereinput) | Logical NOT - negates the condition. |

##### `DirectCommitInput`

Direct commit to origin. No additional options required.

| Field | Type | Description |
|-------|------|-------------|
| `_empty` | Boolean | Placeholder field. Direct commits require no additional configuration. |

##### `ExchangeAuthorizationCodeInput`

| Field | Type | Description |
|-------|------|-------------|
| `authorizationId` | ID! | The authorization ID returned from initiateAuthorization or from NeedsAuthorization. |
| `code` | String! | Authorization code from the OAuth callback. |
| `redirectUri` | String! | The redirect URI used in the authorization request. Note: This field is deprecated - the server uses the stored redirect URI from the authorization to ensure an exact match. |

##### `FileChangeOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [FileChangeOrderByField](#filechangeorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `FileChangeWhereInput`

Filter for file changes.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [PathFilter](#pathfilter) | Filter by file path using glob patterns. |
| `_and` | [[FileChangeWhereInput](#filechangewhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[FileChangeWhereInput](#filechangewhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [FileChangeWhereInput](#filechangewhereinput) | Logical NOT - negates the condition. |

##### `ForkAndPullRequestCommitInput`

Create a pull request from a branch on a fork.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | String | Organization to create the fork in. If unset, creates in user's personal account. |
| `prefixOrganizationName` | Boolean | Prefix the fork name with the origin organization to avoid name collisions. |
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | [Base64](#base64) | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `maintainerCanModify` | Boolean | GitHub only: allow maintainers to edit the pull request. |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | Auto-merge method after checks pass. Null means no auto-merge. Best effort - silently ignored if not supported by the repository. |
| `recreateClosedPullRequest` | Boolean | Recreate pull request if it was previously closed. |

##### `ForkCommitInput`

Commit to a fork of the origin repository.

| Field | Type | Description |
|-------|------|-------------|
| `organization` | String | Organization to create the fork in. If unset, creates in user's personal account. |
| `prefixOrganizationName` | Boolean | Prefix the fork name with the origin organization to avoid name collisions. Example: openrewrite/rewrite -> myuser/openrewrite__rewrite |

##### `GoRecipeBundleInput`

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String |  |

##### `GpgInput`

| Field | Type | Description |
|-------|------|-------------|
| `privateKey` | String! |  |
| `publicKey` | String! |  |
| `passphrase` | String |  |

##### `IDFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | ID |  |
| `_neq` | ID |  |
| `_in` | [ID!] |  |
| `_nin` | [ID!] |  |

##### `InitiateAuthorizationInput`

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin to authorize (e.g., github.com, gitlab.com). |
| `redirectUri` | String! | The redirect URI where the VCS will send the callback. Must match an allowed redirect URI in the OAuth app configuration. |

##### `IntFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | Int |  |
| `_neq` | Int |  |
| `_gt` | Int |  |
| `_gte` | Int |  |
| `_lt` | Int |  |
| `_lte` | Int |  |

##### `LstArtifactWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `published` | [DateTimeFilter](#datetimefilter) |  |
| `available` | [BooleanFilter](#booleanfilter) |  |
| `_and` | [[LstArtifactWhereInput](#lstartifactwhereinput)!] |  |
| `_or` | [[LstArtifactWhereInput](#lstartifactwhereinput)!] |  |
| `_not` | [LstArtifactWhereInput](#lstartifactwhereinput) |  |

##### `MavenRecipeBundleInput`

| Field | Type | Description |
|-------|------|-------------|
| `groupId` | String! |  |
| `artifactId` | String! |  |
| `version` | String! |  |

##### `NpmRecipeBundleInput`

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String! |  |

##### `NugetRecipeBundleInput`

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String! |  |

##### `OrganizationChangesetOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationChangesetOrderByField](#organizationchangesetorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `OrganizationChangesetTypeFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [OrganizationChangesetType](#organizationchangesettype) |  |
| `_neq` | [OrganizationChangesetType](#organizationchangesettype) |  |
| `_in` | [[OrganizationChangesetType](#organizationchangesettype)!] |  |
| `_nin` | [[OrganizationChangesetType](#organizationchangesettype)!] |  |

##### `OrganizationChangesetWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `type` | [OrganizationChangesetTypeFilter](#organizationchangesettypefilter) |  |
| `createdAt` | [DateTimeFilter](#datetimefilter) |  |
| `user` | [StringFilter](#stringfilter) |  |
| `_and` | [[OrganizationChangesetWhereInput](#organizationchangesetwhereinput)!] |  |
| `_or` | [[OrganizationChangesetWhereInput](#organizationchangesetwhereinput)!] |  |
| `_not` | [OrganizationChangesetWhereInput](#organizationchangesetwhereinput) |  |

##### `OrganizationCommitOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationCommitOrderByField](#organizationcommitorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `OrganizationCommitWhereInput`

Filter input for organization-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) | Filter by commit ID. |
| `startedAt` | [DateTimeFilter](#datetimefilter) | Filter by when the commit started. |
| `_and` | [[OrganizationCommitWhereInput](#organizationcommitwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[OrganizationCommitWhereInput](#organizationcommitwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [OrganizationCommitWhereInput](#organizationcommitwhereinput) | Logical NOT - negates the condition. |

##### `OrganizationOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationOrderByField](#organizationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `OrganizationRecipeRunOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [OrganizationRecipeRunOrderByField](#organizationreciperunorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `OrganizationRecipeRunStateFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [OrganizationRecipeRunState](#organizationreciperunstate) |  |
| `_neq` | [OrganizationRecipeRunState](#organizationreciperunstate) |  |
| `_in` | [[OrganizationRecipeRunState](#organizationreciperunstate)!] |  |
| `_nin` | [[OrganizationRecipeRunState](#organizationreciperunstate)!] |  |

##### `OrganizationRecipeRunWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `state` | [OrganizationRecipeRunStateFilter](#organizationreciperunstatefilter) |  |
| `startedAt` | [DateTimeFilter](#datetimefilter) |  |
| `user` | [StringFilter](#stringfilter) |  |
| `_and` | [[OrganizationRecipeRunWhereInput](#organizationreciperunwhereinput)!] |  |
| `_or` | [[OrganizationRecipeRunWhereInput](#organizationreciperunwhereinput)!] |  |
| `_not` | [OrganizationRecipeRunWhereInput](#organizationreciperunwhereinput) |  |

##### `OrganizationWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `name` | [StringFilter](#stringfilter) |  |
| `depth` | [IntFilter](#intfilter) | Filter by depth in the organization hierarchy. The root organization ("_root") is depth 0, its direct children are depth 1, etc. |
| `_and` | [[OrganizationWhereInput](#organizationwhereinput)!] |  |
| `_or` | [[OrganizationWhereInput](#organizationwhereinput)!] |  |
| `_not` | [OrganizationWhereInput](#organizationwhereinput) |  |

##### `PathFilter`

Filter for file paths using glob patterns.

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [Path](#path) | Exact path match. |
| `_in` | [[Path](#path)!] | Match any of the exact paths. |
| `_nin` | [[Path](#path)!] | Exclude any of the exact paths. |
| `_glob` | String | Glob pattern match. Examples: **\/*.java, src/main/** |

##### `PipRecipeBundleInput`

| Field | Type | Description |
|-------|------|-------------|
| `packageName` | String! |  |
| `version` | String |  |

##### `PullRequestActionOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [PullRequestActionOrderByField](#pullrequestactionorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `PullRequestActionStateFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestActionState](#pullrequestactionstate) |  |
| `_neq` | [PullRequestActionState](#pullrequestactionstate) |  |
| `_in` | [[PullRequestActionState](#pullrequestactionstate)!] |  |
| `_nin` | [[PullRequestActionState](#pullrequestactionstate)!] |  |

##### `PullRequestActionTypeFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestActionType](#pullrequestactiontype) |  |
| `_neq` | [PullRequestActionType](#pullrequestactiontype) |  |
| `_in` | [[PullRequestActionType](#pullrequestactiontype)!] |  |
| `_nin` | [[PullRequestActionType](#pullrequestactiontype)!] |  |

##### `PullRequestActionWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `state` | [PullRequestActionStateFilter](#pullrequestactionstatefilter) |  |
| `_and` | [[PullRequestActionWhereInput](#pullrequestactionwhereinput)!] |  |
| `_or` | [[PullRequestActionWhereInput](#pullrequestactionwhereinput)!] |  |
| `_not` | [PullRequestActionWhereInput](#pullrequestactionwhereinput) |  |

##### `PullRequestCommitInput`

Create a pull request from a branch on the origin remote.

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Pull request title. If unset, uses the commit message. |
| `body` | [Base64](#base64) | Pull request body (Base64 encoded). |
| `draft` | Boolean | Create as a draft pull request. |
| `autoMergeMethod` | [MergeMethod](#mergemethod) | Auto-merge method after checks pass. Null means no auto-merge. Best effort - silently ignored if not supported by the repository. |
| `recreateClosedPullRequest` | Boolean | Recreate pull request if it was previously closed. |

##### `PullRequestInput`

| Field | Type | Description |
|-------|------|-------------|
| `repository` | [RepositoryInput](#repositoryinput)! |  |
| `number` | Int! | Pull request number. |

##### `PullRequestSelectionInput`

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
| `where` | [ChangelogEntryWhereInput](#changelogentrywhereinput) | Filter for the base set of PRs. Omit to start with an empty set. |
| `pullRequests` | [PullRequestSelectionModifier](#pullrequestselectionmodifier) | Modify the base set by including or excluding specific PRs. |

##### `PullRequestSelectionModifier`

Modifies a PR selection by either including or excluding specific PRs.
Exactly one field must be set.

| Field | Type | Description |
|-------|------|-------------|
| `include` | [[PullRequestInput](#pullrequestinput)!] | Add these PRs to the base set. |
| `exclude` | [[PullRequestInput](#pullrequestinput)!] | Remove these PRs from the base set. |

##### `PullRequestStateFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [PullRequestState](#pullrequeststate) |  |
| `_neq` | [PullRequestState](#pullrequeststate) |  |
| `_in` | [[PullRequestState](#pullrequeststate)!] |  |
| `_nin` | [[PullRequestState](#pullrequeststate)!] |  |

##### `RecipeBundleInput`

| Field | Type | Description |
|-------|------|-------------|
| `maven` | [MavenRecipeBundleInput](#mavenrecipebundleinput) |  |
| `npm` | [NpmRecipeBundleInput](#npmrecipebundleinput) |  |
| `nuget` | [NugetRecipeBundleInput](#nugetrecipebundleinput) |  |
| `yaml` | [YamlRecipeBundleInput](#yamlrecipebundleinput) |  |
| `pip` | [PipRecipeBundleInput](#piprecipebundleinput) |  |
| `go` | [GoRecipeBundleInput](#gorecipebundleinput) |  |

##### `RecipeBundleOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeBundleOrderByField](#recipebundleorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RecipeBundleWhereInput`

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

##### `RecipeCategoryOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeCategoryOrderByField](#recipecategoryorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RecipeCategoryWhereInput`

Filter input for RecipeCategory queries.

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) | Filter by category ID. |
| `parentId` | [IDFilter](#idfilter) | Filter by parent category ID. Use null to find root categories. |
| `displayName` | [StringFilter](#stringfilter) | Filter by display name. |
| `_and` | [[RecipeCategoryWhereInput](#recipecategorywhereinput)!] |  |
| `_or` | [[RecipeCategoryWhereInput](#recipecategorywhereinput)!] |  |
| `_not` | [RecipeCategoryWhereInput](#recipecategorywhereinput) |  |

##### `RecipeEcosystemFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RecipeEcosystem](#recipeecosystem) |  |
| `_neq` | [RecipeEcosystem](#recipeecosystem) |  |
| `_in` | [[RecipeEcosystem](#recipeecosystem)!] |  |
| `_nin` | [[RecipeEcosystem](#recipeecosystem)!] |  |

##### `RecipeInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | Fully-qualified recipe ID. Example: `org.openrewrite.java.search.FindMethods` |
| `options` | [[RecipeOptionInput](#recipeoptioninput)!] |  |

##### `RecipeInstallationOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeInstallationOrderByField](#recipeinstallationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RecipeInstallationStatusFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RecipeInstallationStatus](#recipeinstallationstatus) |  |
| `_neq` | [RecipeInstallationStatus](#recipeinstallationstatus) |  |
| `_in` | [[RecipeInstallationStatus](#recipeinstallationstatus)!] |  |
| `_nin` | [[RecipeInstallationStatus](#recipeinstallationstatus)!] |  |

##### `RecipeInstallationWhereInput`

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

##### `RecipeOptionInput`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! | Option name. Example: `methodPattern` |
| `value` | [Object](#object)! | Option value. Example: `java.util.List add(..)` |

##### `RecipeOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RecipeOrderByField](#recipeorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RecipeWhereInput`

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

##### `RepositoryChangesetOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryChangesetOrderByField](#repositorychangesetorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RepositoryChangesetStateFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [RepositoryChangesetState](#repositorychangesetstate) |  |
| `_neq` | [RepositoryChangesetState](#repositorychangesetstate) |  |
| `_in` | [[RepositoryChangesetState](#repositorychangesetstate)!] |  |
| `_nin` | [[RepositoryChangesetState](#repositorychangesetstate)!] |  |

##### `RepositoryChangesetWhereInput`

Filter for repository changesets.

| Field | Type | Description |
|-------|------|-------------|
| `path` | [StringFilter](#stringfilter) | Filter by repository path. |
| `origin` | [StringFilter](#stringfilter) | Filter by repository origin. |
| `branch` | [StringFilter](#stringfilter) | Filter by repository branch. |
| `files` | [FileChangeWhereInput](#filechangewhereinput) | Filter files within matching repositories. Useful for filtering to specific file patterns (e.g., all build.gradle.kts files). |
| `onlyWithResults` | Boolean | Only return repositories with results (filesWithResults > 0). |
| `state` | [RepositoryChangesetStateFilter](#repositorychangesetstatefilter) | Filter by repository result state. |
| `_and` | [[RepositoryChangesetWhereInput](#repositorychangesetwhereinput)!] | Logical AND - all conditions must match. |
| `_or` | [[RepositoryChangesetWhereInput](#repositorychangesetwhereinput)!] | Logical OR - at least one condition must match. |
| `_not` | [RepositoryChangesetWhereInput](#repositorychangesetwhereinput) | Logical NOT - negates the condition. |

##### `RepositoryCommitOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryCommitOrderByField](#repositorycommitorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RepositoryCommitWhereInput`

Filter input for repository-level commit queries.

| Field | Type | Description |
|-------|------|-------------|
| `_and` | [[RepositoryCommitWhereInput](#repositorycommitwhereinput)!] |  |
| `_or` | [[RepositoryCommitWhereInput](#repositorycommitwhereinput)!] |  |
| `_not` | [RepositoryCommitWhereInput](#repositorycommitwhereinput) |  |

##### `RepositoryInput`

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! |  |
| `path` | String! |  |
| `branch` | String! |  |

##### `RepositoryOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryOrderByField](#repositoryorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RepositoryRecipeRunOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [RepositoryRecipeRunOrderByField](#repositoryreciperunorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `RepositoryRecipeRunWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `path` | [StringFilter](#stringfilter) |  |
| `origin` | [StringFilter](#stringfilter) |  |
| `_and` | [[RepositoryRecipeRunWhereInput](#repositoryreciperunwhereinput)!] |  |
| `_or` | [[RepositoryRecipeRunWhereInput](#repositoryreciperunwhereinput)!] |  |
| `_not` | [RepositoryRecipeRunWhereInput](#repositoryreciperunwhereinput) |  |

##### `RepositoryWhereInput`

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

##### `ReviewDecisionFilter`

| Field | Type | Description |
|-------|------|-------------|
| `_eq` | [ReviewDecision](#reviewdecision) |  |
| `_neq` | [ReviewDecision](#reviewdecision) |  |
| `_in` | [[ReviewDecision](#reviewdecision)!] |  |
| `_nin` | [[ReviewDecision](#reviewdecision)!] |  |

##### `RevokeScmTokenInput`

| Field | Type | Description |
|-------|------|-------------|
| `origin` | String! | The VCS origin to revoke the token for (e.g., github.com, gitlab.com). |

##### `RunDevCenterInput`

| Field | Type | Description |
|-------|------|-------------|
| `organizationId` | ID! | The organization to run DevCenter for. |
| `recipeId` | ID! | The DevCenter recipe to run. |

##### `RunRecipeInput`

| Field | Type | Description |
|-------|------|-------------|
| `recipe` | [RecipeInput](#recipeinput)! | The recipe to run with any configured options. |
| `organizationId` | ID! | Run against all repositories in this organization. |
| `parentId` | ID | Optional parent changeset ID this recipe run is derived from. |
| `excludeFiles` | [String!] | Exclude files matching these patterns. |

##### `ScmAccessToken`

An access token for a specific SCM origin. When provided on a commit mutation,
these tokens are preferred over stored OAuth tokens.

| Field | Type | Description |
|-------|------|-------------|
| `value` | String! |  |
| `origin` | String! |  |

##### `StringFilter`

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

##### `UpdateUserOrganizationInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | ID! | The ID of the organization to update. |
| `name` | String | The new name for the organization. |
| `repositories` | [[RepositoryInput](#repositoryinput)!] | Repositories to include in the organization. If provided, replaces the current list. |

##### `UserOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [UserOrderByField](#userorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `UserWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `email` | [StringFilter](#stringfilter) |  |
| `_and` | [[UserWhereInput](#userwhereinput)!] |  |
| `_or` | [[UserWhereInput](#userwhereinput)!] |  |
| `_not` | [UserWhereInput](#userwhereinput) |  |

##### `VisualizationOptionInput`

| Field | Type | Description |
|-------|------|-------------|
| `name` | String! |  |
| `value` | [Object](#object)! |  |

##### `VisualizationOrderByInput`

| Field | Type | Description |
|-------|------|-------------|
| `field` | [VisualizationOrderByField](#visualizationorderbyfield)! |  |
| `direction` | [SortOrder](#sortorder)! |  |

##### `VisualizationWhereInput`

| Field | Type | Description |
|-------|------|-------------|
| `id` | [IDFilter](#idfilter) |  |
| `visualization` | [StringFilter](#stringfilter) |  |
| `_and` | [[VisualizationWhereInput](#visualizationwhereinput)!] |  |
| `_or` | [[VisualizationWhereInput](#visualizationwhereinput)!] |  |
| `_not` | [VisualizationWhereInput](#visualizationwhereinput) |  |

##### `YamlRecipeBundleInput`

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | [Base64](#base64)! |  |
| `primary` | ID | The ID of the primary recipe in this bundle. When specified, only this recipe will be shown in the marketplace categories, hiding other recipes from this bundle. This is used for the Moderne Builder feature where users build complex composite recipes and we don't want to expose intermediate recipes in the marketplace. |

### Unions

##### `ConnectorTool`

= [GithubConfiguration](#githubconfiguration) | [GitLabConfiguration](#gitlabconfiguration) | [BitbucketConfiguration](#bitbucketconfiguration) | [BitbucketCloudConfiguration](#bitbucketcloudconfiguration) | [AzureDevOpsConfiguration](#azuredevopsconfiguration) | [ArtifactoryConfiguration](#artifactoryconfiguration) | [MavenConfiguration](#mavenconfiguration) | [PypiConfiguration](#pypiconfiguration) | [NpmConfiguration](#npmconfiguration) | [NugetConfiguration](#nugetconfiguration) | [GenericHttpToolConfiguration](#generichttptoolconfiguration) | [OrganizationConfiguration](#organizationconfiguration) | [LlmConfiguration](#llmconfiguration) | [S3Configuration](#s3configuration)

##### `RecipeInstallationScope`

Discriminates where a `RecipeInstallation` lives.

= [UniversalInstallScope](#universalinstallscope) | [OrganizationInstallScope](#organizationinstallscope) | [UserInstallScope](#userinstallscope)

### Scalars

##### `Base64`

`Base64` represents a base64 encoded string.
In the browser, `btoa` encodes ASCII strings to Base64.

##### `Date`

##### `DateTime`

##### `Duration`

##### `JSON`

##### `Long`

##### `Markdown`

Contents may contain Markdown, HTML, or other text and should be passed through a Markdown parser by consumers

##### `Object`

##### `Path`

A file path relative to repository root (e.g., "src/main/java/Foo.java").

