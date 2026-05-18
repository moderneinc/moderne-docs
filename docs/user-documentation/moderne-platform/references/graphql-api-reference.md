---
sidebar_label: GraphQL API reference
description: Complete reference for the Moderne GraphQL API, including all queries, mutations, subscriptions, and types.
---

<h1>GraphQL API reference</h1>

<p><em>This page is auto-generated from the Moderne GraphQL schema. Do not edit manually.</em></p>

<h2>Queries</h2>

<h3 id="auditLogs"><code>auditLogs</code></h3>

<p><strong>Service:</strong> auditreader</p>

<p><code>auditLogs</code>(first: Int = 100, after: String, where: <a href="#auditlogwhereinput">AuditLogWhereInput</a>, orderBy: [<a href="#auditlogorderbyinput">AuditLogOrderByInput</a>!]): <a href="#auditlogconnection">AuditLogConnection</a>!</p>

<p>Query audit log events with pagination and filtering.</p>

<hr/>

<h3 id="auditLogsDownloads"><code>auditLogsDownloads</code></h3>

<p><strong>Service:</strong> auditreader</p>

<p><code>auditLogsDownloads</code>(first: Int = 50, after: String, where: <a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>, orderBy: [<a href="#auditlogsdownloadorderbyinput">AuditLogsDownloadOrderByInput</a>!]): <a href="#auditlogsdownloadconnection">AuditLogsDownloadConnection</a>!</p>

<p>Query audit log downloads with pagination and filtering.
Use where: &#123; id: &#123; _eq: "..." &#125; &#125; to poll a specific download.</p>

<hr/>

<h3 id="bulkPullRequestAction"><code>bulkPullRequestAction</code></h3>

<p><strong>Service:</strong> changelogreader</p>

<p><code>bulkPullRequestAction</code>(id: ID!): <a href="#bulkpullrequestaction">BulkPullRequestAction</a></p>

<p>Get a bulk pull request action by ID to poll for progress.</p>

<hr/>

<h3 id="capabilities"><code>capabilities</code></h3>

<p><strong>Service:</strong> gateway</p>

<p><code>capabilities</code>: <a href="#platformcapabilities">PlatformCapabilities</a>!</p>

<p>Returns which optional platform features are enabled in this deployment.
Each field defaults to false and is overridden to true by the corresponding
optional service when it is present in the supergraph composition.</p>

<hr/>

<h3 id="codeSearch"><code>codeSearch</code></h3>

<p><strong>Service:</strong> code-search</p>

<p><code>codeSearch</code>(repositoryId: String!, query: String!, first: Int = 100, after: String): <a href="#codesearchresultconnection">CodeSearchResultConnection</a>!</p>

<p>Search source code across artifact repositories.
Searches the given repository and all its descendants in the hierarchy.
Results are grouped by artifact (groupId:artifactId) with file-level matches.</p>

<hr/>

<h3 id="connectors"><code>connectors</code></h3>

<p><strong>Service:</strong> gateway</p>

<p><code>connectors</code>(first: Int = 100, after: String, where: <a href="#connectorwhereinput">ConnectorWhereInput</a>, orderBy: [<a href="#connectororderbyinput">ConnectorOrderByInput</a>!]): <a href="#connectorconnection">ConnectorConnection</a>!</p>

<hr/>

<h3 id="conversation"><code>conversation</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>conversation</code>(conversationId: ID!): <a href="#conversation">Conversation</a></p>

<p>Look up a single conversation by id. Returns null when no conversation
matches or the caller does not have access. Restores the v1 query the
moderne-ui client already references.</p>

<hr/>

<h3 id="currentUser"><code>currentUser</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>currentUser</code>: <a href="#user">User</a>!</p>

<p>Returns the currently authenticated user.</p>

<hr/>

<h3 id="devCenterRecipes"><code>devCenterRecipes</code></h3>

<p><strong>Service:</strong> recipemarketplace</p>

<p><code>devCenterRecipes</code>: [<a href="#recipedescriptor">RecipeDescriptor</a>!]!</p>

<p>Get available DevCenter recipes for configuration.</p>

<hr/>

<h3 id="license"><code>license</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>license</code>: <a href="#license">License</a>!</p>

<p>Request a new license lease key</p>

<hr/>

<h3 id="organization"><code>organization</code></h3>

<p><strong>Service:</strong> organization</p>

<p><code>organization</code>(id: ID!): <a href="#organization">Organization</a>!</p>

<hr/>

<h3 id="organizations"><code>organizations</code></h3>

<p><strong>Service:</strong> organization</p>

<p><code>organizations</code>(first: Int = 100, after: String, where: <a href="#organizationwhereinput">OrganizationWhereInput</a>, orderBy: [<a href="#organizationorderbyinput">OrganizationOrderByInput</a>!]): <a href="#organizationconnection">OrganizationConnection</a>!</p>

<hr/>

<h3 id="scmConnections"><code>scmConnections</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>scmConnections</code>: [<a href="#scmconnection">ScmConnection</a>!]!</p>

<p>Returns connections for all SCM providers.</p>

<hr/>

<h3 id="users"><code>users</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>users</code>(first: Int = 100, after: String, where: <a href="#userwhereinput">UserWhereInput</a>, orderBy: [<a href="#userorderbyinput">UserOrderByInput</a>!]): <a href="#userconnection">UserConnection</a>!</p>

<p>Returns users with option to filter by role.</p>

<hr/>

<h3 id="verifyToken"><code>verifyToken</code></h3>

<p><strong>Service:</strong> changesetcommitter</p>

<p><code>verifyToken</code>(origin: String!, scmType: <a href="#scmtype">ScmType</a>!): String</p>

<hr/>

<h2>Mutations</h2>

<h3 id="approvePullRequests"><code>approvePullRequests</code></h3>

<p><strong>Service:</strong> changelogreader</p>

<p><code>approvePullRequests</code>(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</p>

<p>Approve pull requests in bulk. Returns the queued action for polling.</p>

<hr/>

<h3 id="cancelBulkPullRequestAction"><code>cancelBulkPullRequestAction</code></h3>

<p><strong>Service:</strong> changelogreader</p>

<p><code>cancelBulkPullRequestAction</code>(id: ID!): <a href="#bulkpullrequestactioncanceled">BulkPullRequestActionCanceled</a>!</p>

<p>Cancel a pending bulk pull request action.</p>

<hr/>

<h3 id="cancelCommit"><code>cancelCommit</code></h3>

<p><strong>Service:</strong> changesetcommitter</p>

<p><code>cancelCommit</code>(id: ID!): <a href="#organizationcommitcanceled">OrganizationCommitCanceled</a>!</p>

<p>Cancel a running commit operation.</p>

<hr/>

<h3 id="cancelDevCenterRun"><code>cancelDevCenterRun</code></h3>

<p><strong>Service:</strong> recipeworker</p>

<p><code>cancelDevCenterRun</code>(id: ID!): ID!</p>

<p>Cancel a DevCenter run. Cancellation is best-effort and asynchronous.</p>

<hr/>

<h3 id="cancelMessage"><code>cancelMessage</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>cancelMessage</code>(conversationId: ID!, messageId: ID): Boolean!</p>

<p>Interrupt the currently-running turn for a conversation. The virtual
thread driving the turn is interrupted — a blocking LLM stream unwinds
immediately, and long-running downstream work (recipe runs) receives
a best-effort cancel via `cancelRecipeRun` on recipe-worker. Cheap
tool calls finish naturally. A terminal CANCELLED `ErrorMessage` is
appended to the log regardless.</p>
<p>LLM-memory consistency on the next turn is preserved by the JSONL
collapse: `buildChatMessages` pairs every tool-origin row into an
`AiMessage(toolRequests)` + `ToolExecutionResultMessage` batch, and
only rows that actually persisted are rebuilt — partially-executed
tool batches are reconstructed from whichever tool-origin rows made
it to the log.</p>
<p>Returns <code>true</code> when a running turn was actually interrupted,
<code>false</code> when the conversation was already idle (no-op, not an
error). <code>messageId</code> is accepted for client compatibility but
only the conversation's active turn is cancellable — there is never
more than one turn in flight.</p>

<hr/>

<h3 id="cancelRecipeRun"><code>cancelRecipeRun</code></h3>

<p><strong>Service:</strong> recipeworker</p>

<p><code>cancelRecipeRun</code>(id: ID!): ID!</p>

<p>Cancel a recipe run. Cancellation is best-effort and asynchronous.</p>

<hr/>

<h3 id="clearOrganizationPrompt"><code>clearOrganizationPrompt</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>clearOrganizationPrompt</code>(organizationId: ID!): Boolean!</p>

<p>Clear the organization-level prompt override, falling back to universal.</p>

<hr/>

<h3 id="clearUserPrompt"><code>clearUserPrompt</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>clearUserPrompt</code>: Boolean!</p>

<p>Clear the current user's prompt override, falling back to organization or universal.</p>

<hr/>

<h3 id="closePullRequests"><code>closePullRequests</code></h3>

<p><strong>Service:</strong> changelogreader</p>

<p><code>closePullRequests</code>(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</p>

<p>Close pull requests in bulk. Returns the queued action for polling.</p>

<hr/>

<h3 id="commit"><code>commit</code></h3>

<p><strong>Service:</strong> changesetcommitter</p>

<p><code>commit</code>(input: <a href="#commitinput">CommitInput</a>!): <a href="#organizationcommitqueued">OrganizationCommitQueued</a>!</p>

<p>Create commits from a changeset (recipe run, batch change, etc.).</p>

<hr/>

<h3 id="createAccessToken"><code>createAccessToken</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>createAccessToken</code>(description: String, expiresAt: <a href="#datetime">DateTime</a>): <a href="#createaccesstokenresult">CreateAccessTokenResult</a>!</p>

<p>Creates a new Moderne Personal Access Token for the current user.
Returns the token value only once - it cannot be retrieved again.</p>

<hr/>

<h3 id="createConversation"><code>createConversation</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>createConversation</code>(input: <a href="#createconversationinput">CreateConversationInput</a>!, waitForCompletion: Boolean = false): <a href="#sendmessageresult">SendMessageResult</a>!</p>

<p>Create a new conversation and send the first message. Uses the
effective prompt for the organization context. `waitForCompletion`
has the same semantics as on `sendMessage`.</p>

<hr/>

<h3 id="createUserOrganization"><code>createUserOrganization</code></h3>

<p><strong>Service:</strong> organization</p>

<p><code>createUserOrganization</code>(input: <a href="#createuserorganizationinput">CreateUserOrganizationInput</a>!): <a href="#organization">Organization</a>!</p>

<p>Create a new user-defined organization visible only to the current user.</p>

<hr/>

<h3 id="deleteUser"><code>deleteUser</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>deleteUser</code>(email: String!): Boolean!</p>

<p>Deletes a user and all associated access tokens.
Returns true if the user was found and deleted.</p>

<hr/>

<h3 id="deleteUserOrganization"><code>deleteUserOrganization</code></h3>

<p><strong>Service:</strong> organization</p>

<p><code>deleteUserOrganization</code>(id: ID!): Boolean!</p>

<p>Delete a user-defined organization.</p>

<hr/>

<h3 id="downloadAuditLogs"><code>downloadAuditLogs</code></h3>

<p><strong>Service:</strong> auditreader</p>

<p><code>downloadAuditLogs</code>(first: Int, since: <a href="#datetime">DateTime</a>, until: <a href="#datetime">DateTime</a>, format: <a href="#auditlogexportformat">AuditLogExportFormat</a>!): <a href="#auditlogsdownload">AuditLogsDownload</a>!</p>

<p>Start an asynchronous export of audit logs. Returns a task whose state
can be polled via auditLogsDownloads.</p>

<hr/>

<h3 id="downloadDataTable"><code>downloadDataTable</code></h3>

<p><strong>Service:</strong> changesetreader</p>

<p><code>downloadDataTable</code>(changesetId: ID!, dataTable: String!, group: String, format: <a href="#datatableformat">DataTableFormat</a>!): <a href="#datatable">DataTable</a>!</p>

<p>Start or retrieve a data table download.
If the same data table + group + format combination was already requested,
returns the existing download state.</p>

<hr/>

<h3 id="exchangeAuthorizationCode"><code>exchangeAuthorizationCode</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>exchangeAuthorizationCode</code>(input: <a href="#exchangeauthorizationcodeinput">ExchangeAuthorizationCodeInput</a>!): <a href="#exchangeauthorizationresult">ExchangeAuthorizationResult</a>!</p>

<p>Exchange an OAuth authorization code for an access token.</p>
<p>This unified mutation handles all OAuth 2.0 VCS providers.
The backend uses the authorizationId to look up:
- The origin and VCS type
- PKCE code_verifier (GitLab)</p>
<p>On success, the token is stored and future requests will be authenticated.</p>

<hr/>

<h3 id="initiateAuthorization"><code>initiateAuthorization</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>initiateAuthorization</code>(input: <a href="#initiateauthorizationinput">InitiateAuthorizationInput</a>!): <a href="#oauthauthorization">OAuthAuthorization</a>!</p>

<p>Initiate OAuth authorization for a VCS origin.
Returns an authorization URL to redirect the user to.</p>
<p>The backend constructs the full OAuth URL including:
- PKCE code_challenge for GitLab
- Correct scopes for each VCS type
- State parameter for CSRF protection</p>
<p>The authorization ID should be passed to exchangeAuthorizationCode
after the user completes OAuth.</p>

<hr/>

<h3 id="installRecipesForCurrentUser"><code>installRecipesForCurrentUser</code></h3>

<p><strong>Service:</strong> recipemarketplace</p>

<p><code>installRecipesForCurrentUser</code>(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!</p>

<p>Install a recipe bundle to the current user's personal marketplace.</p>

<hr/>

<h3 id="installRecipesForOrganization"><code>installRecipesForOrganization</code></h3>

<p><strong>Service:</strong> recipemarketplace</p>

<p><code>installRecipesForOrganization</code>(organizationId: ID!, bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!</p>

<p>Install a recipe bundle to a specific organization's marketplace.
Requires the `admin` role.</p>

<hr/>

<h3 id="installRecipesUniversal"><code>installRecipesUniversal</code></h3>

<p><strong>Service:</strong> recipemarketplace</p>

<p><code>installRecipesUniversal</code>(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!</p>

<p>Install a recipe bundle to the universal marketplace (visible to all).
Requires the `admin` role.</p>

<hr/>

<h3 id="mergePullRequests"><code>mergePullRequests</code></h3>

<p><strong>Service:</strong> changelogreader</p>

<p><code>mergePullRequests</code>(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!, mergeMethod: <a href="#mergemethod">MergeMethod</a>!, deleteSourceBranch: Boolean! = false): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</p>

<p>Merge pull requests in bulk. Returns the queued action for polling.</p>

<hr/>

<h3 id="reindexChangelog"><code>reindexChangelog</code></h3>

<p><strong>Service:</strong> changelogwriter</p>

<p><code>reindexChangelog</code>(since: <a href="#datetime">DateTime</a>!, origin: String): <a href="#reindexresult">ReindexResult</a>!</p>

<p>Reset poll cursors so the next poll cycle re-fetches and re-enriches
changelog entries from the given timestamp forward. Use this to backfill
data after deploying enrichment improvements.</p>

<hr/>

<h3 id="revokeAccessToken"><code>revokeAccessToken</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>revokeAccessToken</code>(id: ID!): Boolean!</p>

<p>Revokes an access token by ID.
Returns true if the token was revoked, false if not found.</p>

<hr/>

<h3 id="revokeAllAccessTokens"><code>revokeAllAccessTokens</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>revokeAllAccessTokens</code>(email: String!): Boolean!</p>

<p>Revokes all access tokens for a given user.
Returns true if all token were revoked, otherwise false.</p>

<hr/>

<h3 id="revokeScmToken"><code>revokeScmToken</code></h3>

<p><strong>Service:</strong> authz</p>

<p><code>revokeScmToken</code>(input: <a href="#revokescmtokeninput">RevokeScmTokenInput</a>!): <a href="#revoketokenresult">RevokeTokenResult</a>!</p>

<p>Revoke an SCM OAuth token for the current user and a specific origin.
This removes the stored token, disconnecting the user from the VCS.</p>

<hr/>

<h3 id="runDevCenter"><code>runDevCenter</code></h3>

<p><strong>Service:</strong> recipeworker</p>

<p><code>runDevCenter</code>(input: <a href="#rundevcenterinput">RunDevCenterInput</a>!): <a href="#devcenterrunrunning">DevCenterRunRunning</a>!</p>

<p>Start a DevCenter run for an organization.
Returns immediately with running status.</p>

<hr/>

<h3 id="runRecipe"><code>runRecipe</code></h3>

<p><strong>Service:</strong> recipeworker</p>

<p><code>runRecipe</code>(input: <a href="#runrecipeinput">RunRecipeInput</a>!): <a href="#organizationreciperunqueued">OrganizationRecipeRunQueued</a>!</p>

<p>Run a recipe against repositories.
Returns the recipe run in its initial queued state.</p>

<hr/>

<h3 id="runVisualization"><code>runVisualization</code></h3>

<p><strong>Service:</strong> changesetvisualizer</p>

<p><code>runVisualization</code>(organizationId: ID!, visualizationId: ID!, options: [<a href="#visualizationoptioninput">VisualizationOptionInput</a>!]): <a href="#visualization">Visualization</a>!</p>

<p>Request a visualization to be generated based on the provided descriptor.
Returns the existing visualization if already run with the same options,
otherwise queues a new visualization run.</p>

<hr/>

<h3 id="sendMessage"><code>sendMessage</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>sendMessage</code>(conversationId: ID!, message: String!, waitForCompletion: Boolean = false): <a href="#sendmessageresult">SendMessageResult</a>!</p>

<p>Send a message to an existing conversation. Returns a handle for
polling — `initialCursor` is the cursor to pass to the next
`messages(after:)` query, and `turnState` carries the server-
recommended poll cadence.</p>
<p>When `waitForCompletion: true`, the mutation blocks until the turn
completes (or the server cap of 4 minutes is reached, whichever comes
first). On cap, the mutation returns the current turn state rather
than erroring so the caller can continue polling.</p>

<hr/>

<h3 id="setOrganizationPrompt"><code>setOrganizationPrompt</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>setOrganizationPrompt</code>(organizationId: ID!, content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!</p>

<p>Set the system prompt for a specific organization (overrides universal).</p>

<hr/>

<h3 id="setProfiling"><code>setProfiling</code></h3>

<p><strong>Service:</strong> gateway</p>

<p><code>setProfiling</code>(enabled: Boolean!, event: <a href="#profilingevent">ProfilingEvent</a> = CPU): Boolean!</p>

<p>Turn continuous profiling on or off for this tenant. When enabled,
Pyroscope profiles for every service start landing in the Pyroscope UI
within seconds. The primary event the agent samples on is selected by
`event` (defaults to CPU); calling the mutation again with a different
event while profiling is already on rotates the agent to the new event.
Fails when the profiling capability is not enabled for the tenant.
Admin role required.</p>

<hr/>

<h3 id="setUniversalPrompt"><code>setUniversalPrompt</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>setUniversalPrompt</code>(content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!</p>

<p>Set the universal (default) system prompt.</p>

<hr/>

<h3 id="setUserPrompt"><code>setUserPrompt</code></h3>

<p><strong>Service:</strong> moddy</p>

<p><code>setUserPrompt</code>(content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!</p>

<p>Set the system prompt for the current user (overrides organization and universal).</p>

<hr/>

<h3 id="uninstallRecipesFromCurrentUser"><code>uninstallRecipesFromCurrentUser</code></h3>

<p><strong>Service:</strong> recipemarketplace</p>

<p><code>uninstallRecipesFromCurrentUser</code>(packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!</p>

<p>Uninstall a recipe bundle from the current user's personal marketplace.
Returns the number of recipes that were removed.</p>

<hr/>

<h3 id="uninstallRecipesFromOrganization"><code>uninstallRecipesFromOrganization</code></h3>

<p><strong>Service:</strong> recipemarketplace</p>

<p><code>uninstallRecipesFromOrganization</code>(organizationId: ID!, packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!</p>

<p>Uninstall a recipe bundle from a specific organization's marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.</p>

<hr/>

<h3 id="uninstallRecipesUniversal"><code>uninstallRecipesUniversal</code></h3>

<p><strong>Service:</strong> recipemarketplace</p>

<p><code>uninstallRecipesUniversal</code>(packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!</p>

<p>Uninstall a recipe bundle from the universal marketplace.
Returns the number of recipes that were removed.
Requires the `admin` role.</p>

<hr/>

<h3 id="updateUserOrganization"><code>updateUserOrganization</code></h3>

<p><strong>Service:</strong> organization</p>

<p><code>updateUserOrganization</code>(input: <a href="#updateuserorganizationinput">UpdateUserOrganizationInput</a>!): <a href="#organization">Organization</a>!</p>

<p>Update an existing user-defined organization.</p>

<hr/>

<h2>Types</h2>

<h3>Object types</h3>

<h4 id="accesstoken"><code>AccessToken</code></h4>

<p><strong>Service:</strong> authz</p>

<p>Moderne Personal Access Tokens</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>The unique identifier for the access token. This is not the same as the token itself.</td></tr>
    <tr><td><code>description</code></td><td>String</td><td>Optional description of the token.  Useful for distinguishing between multiple tokens.</td></tr>
    <tr><td><code>created</code></td><td><a href="#datetime">DateTime</a>!</td><td>The date and time the token was created.</td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetime">DateTime</a></td><td>The date and time the token will expire.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="accesstokenconnection"><code>AccessTokenConnection</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#accesstokenedge">AccessTokenEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="accesstokenedge"><code>AccessTokenEdge</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#accesstoken">AccessToken</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="artifactoryconfiguration"><code>ArtifactoryConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>lstQuery</code></td><td>[String!]</td><td></td></tr>
    <tr><td><code>lastIngestedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlog"><code>AuditLog</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td>The user who performed the action.</td></tr>
    <tr><td><code>target</code></td><td>String!</td><td>The resource type that was acted upon (e.g., "access.tokens", "organizations").</td></tr>
    <tr><td><code>action</code></td><td>String!</td><td>The specific action that was performed (e.g., "create.token", "delete.organization").</td></tr>
    <tr><td><code>actionType</code></td><td><a href="#auditactiontype">AuditActionType</a>!</td><td>The CRUD classification of the action.</td></tr>
    <tr><td><code>outcome</code></td><td><a href="#auditoutcome">AuditOutcome</a>!</td><td>Whether the action succeeded or failed.</td></tr>
    <tr><td><code>description</code></td><td>String</td><td>Human-readable description of what happened.</td></tr>
    <tr><td><code>timestamp</code></td><td><a href="#datetime">DateTime</a>!</td><td>When the action occurred.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogconnection"><code>AuditLogConnection</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#auditlogedge">AuditLogEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogedge"><code>AuditLogEdge</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#auditlog">AuditLog</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogsdownloadconnection"><code>AuditLogsDownloadConnection</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#auditlogsdownloadedge">AuditLogsDownloadEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogsdownloadedge"><code>AuditLogsDownloadEdge</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#auditlogsdownload">AuditLogsDownload</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogsdownloaderror"><code>AuditLogsDownloadError</code></h4>

<p><strong>Service:</strong> auditreader | <strong>Implements:</strong> <a href="#auditlogsdownload">AuditLogsDownload</a></p>

<p>An audit log download failed.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogsdownloadfinished"><code>AuditLogsDownloadFinished</code></h4>

<p><strong>Service:</strong> auditreader | <strong>Implements:</strong> <a href="#auditlogsdownload">AuditLogsDownload</a></p>

<p>An audit log download has completed successfully.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>format</code></td><td><a href="#auditlogexportformat">AuditLogExportFormat</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>downloadUrl</code></td><td>String!</td><td>URL path to download the file (relative to the service base URL).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogsdownloadprocessing"><code>AuditLogsDownloadProcessing</code></h4>

<p><strong>Service:</strong> auditreader | <strong>Implements:</strong> <a href="#auditlogsdownload">AuditLogsDownload</a></p>

<p>An audit log download is being processed.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>format</code></td><td><a href="#auditlogexportformat">AuditLogExportFormat</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="azuredevopsconfiguration"><code>AzureDevOpsConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>oauth</code></td><td><a href="#azuredevopsoauth">AzureDevOpsOauth</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="azuredevopsconnection"><code>AzureDevOpsConnection</code></h4>

<p><strong>Service:</strong> authz | <strong>Implements:</strong> <a href="#scmconnection">ScmConnection</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="azuredevopsoauth"><code>AzureDevOpsOauth</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>tenantId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="batchchange"><code>BatchChange</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#organizationchangeset">OrganizationChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>name</code></td><td>String</td><td></td></tr>
    <tr><td><code>description</code></td><td>String</td><td></td></tr>
    <tr><td><code>sourceTool</code></td><td><a href="#toolinfo">ToolInfo</a></td><td></td></tr>
    <tr><td><code>diffTool</code></td><td><a href="#toolinfo">ToolInfo</a></td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this batch change. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this batch change.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="batchchangefilechange"><code>BatchChangeFileChange</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#filechange">FileChange</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>path</code></td><td><a href="#path">Path</a>!</td><td></td></tr>
    <tr><td><code>beforeSourcePath</code></td><td><a href="#path">Path</a></td><td></td></tr>
    <tr><td><code>afterSourcePath</code></td><td><a href="#path">Path</a></td><td></td></tr>
    <tr><td><code>diff</code></td><td>(markupLevel: <a href="#markuplevel">MarkupLevel</a> = ERROR, showWhitespaceOnlyChanges: Boolean = true): <a href="#patch">Patch</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bitbucketcloudconfiguration"><code>BitbucketCloudConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>oauth</code></td><td><a href="#bitbucketcloudoauth">BitbucketCloudOauth</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bitbucketcloudconnection"><code>BitbucketCloudConnection</code></h4>

<p><strong>Service:</strong> authz | <strong>Implements:</strong> <a href="#scmconnection">ScmConnection</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bitbucketcloudoauth"><code>BitbucketCloudOauth</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bitbucketconfiguration"><code>BitbucketConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>oauth</code></td><td><a href="#bitbucketoauth">BitbucketOauth</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bitbucketconnection"><code>BitbucketConnection</code></h4>

<p><strong>Service:</strong> authz | <strong>Implements:</strong> <a href="#scmconnection">ScmConnection</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bitbucketoauth"><code>BitbucketOauth</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="branchcommitoptions"><code>BranchCommitOptions</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#commitoptions">CommitOptions</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactioncanceled"><code>BulkPullRequestActionCanceled</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#bulkpullrequestaction">BulkPullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>canceledBy</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionconnection"><code>BulkPullRequestActionConnection</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#bulkpullrequestactionedge">BulkPullRequestActionEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionedge"><code>BulkPullRequestActionEdge</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#bulkpullrequestaction">BulkPullRequestAction</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionerror"><code>BulkPullRequestActionError</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#bulkpullrequestaction">BulkPullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>errorMessage</code></td><td>String!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionfinished"><code>BulkPullRequestActionFinished</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#bulkpullrequestaction">BulkPullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionqueued"><code>BulkPullRequestActionQueued</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#bulkpullrequestaction">BulkPullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>queuedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionrunning"><code>BulkPullRequestActionRunning</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#bulkpullrequestaction">BulkPullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changeparticipant"><code>ChangeParticipant</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>A participant identity from the VCS provider. Not necessarily a Moderne user.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String</td><td>Display name.</td></tr>
    <tr><td><code>email</code></td><td>String</td><td>Email address.</td></tr>
    <tr><td><code>username</code></td><td>String</td><td>Username/login on the VCS provider.</td></tr>
    <tr><td><code>avatarUrl</code></td><td>String</td><td>Avatar URL from the VCS provider.</td></tr>
    <tr><td><code>roles</code></td><td>[<a href="#contributorrole">ContributorRole</a>!]!</td><td>The roles this participant has across changelog entries.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogcommit"><code>ChangelogCommit</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#changelogentry">ChangelogEntry</a></p>

<p>A direct commit to a branch.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>title</code></td><td>String!</td><td></td></tr>
    <tr><td><code>author</code></td><td><a href="#changeparticipant">ChangeParticipant</a>!</td><td></td></tr>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>url</code></td><td>String!</td><td></td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td></td></tr>
    <tr><td><code>sha</code></td><td>String!</td><td>The commit SHA.</td></tr>
    <tr><td><code>updatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>buildState</code></td><td><a href="#buildstate">BuildState</a></td><td></td></tr>
    <tr><td><code>diffstat</code></td><td><a href="#diffstat">DiffStat</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogentryconnection"><code>ChangelogEntryConnection</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#changelogentryedge">ChangelogEntryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogentryedge"><code>ChangelogEntryEdge</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#changelogentry">ChangelogEntry</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogparticipantconnection"><code>ChangelogParticipantConnection</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#changelogparticipantedge">ChangelogParticipantEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogparticipantedge"><code>ChangelogParticipantEdge</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#changeparticipant">ChangeParticipant</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogpullrequest"><code>ChangelogPullRequest</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#changelogentry">ChangelogEntry</a></p>

<p>A pull request (open, draft, merged, or closed).</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>title</code></td><td>String!</td><td></td></tr>
    <tr><td><code>author</code></td><td><a href="#changeparticipant">ChangeParticipant</a>!</td><td></td></tr>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>url</code></td><td>String!</td><td></td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td></td></tr>
    <tr><td><code>number</code></td><td>Int!</td><td>The PR number.</td></tr>
    <tr><td><code>sourceBranch</code></td><td>String!</td><td>The source branch of the pull request.</td></tr>
    <tr><td><code>state</code></td><td><a href="#pullrequeststate">PullRequestState</a>!</td><td>Current state of the pull request.</td></tr>
    <tr><td><code>draft</code></td><td>Boolean!</td><td>Whether this is a draft pull request.</td></tr>
    <tr><td><code>updatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>buildState</code></td><td><a href="#buildstate">BuildState</a></td><td></td></tr>
    <tr><td><code>reviewDecision</code></td><td><a href="#reviewdecision">ReviewDecision</a></td><td>Review decision for the pull request.</td></tr>
    <tr><td><code>approvedBy</code></td><td>[<a href="#changeparticipant">ChangeParticipant</a>!]</td><td>Reviewers who approved this pull request.</td></tr>
    <tr><td><code>requestedReviewers</code></td><td>[<a href="#changeparticipant">ChangeParticipant</a>!]</td><td>Reviewers assigned/requested on this pull request.</td></tr>
    <tr><td><code>additions</code></td><td>Int</td><td>Lines added.</td></tr>
    <tr><td><code>deletions</code></td><td>Int</td><td>Lines removed.</td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>diffstat</code></td><td><a href="#diffstat">DiffStat</a>!</td><td></td></tr>
    <tr><td><code>actions</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td>Actions (approve, merge, close) that have been applied to this pull request. Default sort order is descending by startedAt.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="clidownloadinstructionlink"><code>CliDownloadInstructionLink</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>label</code></td><td>String!</td><td></td></tr>
    <tr><td><code>uri</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="codesearchresult"><code>CodeSearchResult</code></h4>

<p><strong>Service:</strong> code-search</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>groupId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>artifactId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>fileChanges</code></td><td>(first: Int = 100, after: String): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="codesearchresultconnection"><code>CodeSearchResultConnection</code></h4>

<p><strong>Service:</strong> code-search</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#codesearchresultedge">CodeSearchResultEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>searchDurationMs</code></td><td><a href="#long">Long</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="codesearchresultedge"><code>CodeSearchResultEdge</code></h4>

<p><strong>Service:</strong> code-search</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#codesearchresult">CodeSearchResult</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="column"><code>Column</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String!</td><td></td></tr>
    <tr><td><code>type</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="connector"><code>Connector</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>nickname</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
    <tr><td><code>tools</code></td><td>[<a href="#connectortool">ConnectorTool</a>!]!</td><td></td></tr>
    <tr><td><code>uiConfiguration</code></td><td><a href="#uiconfiguration">UiConfiguration</a></td><td></td></tr>
    <tr><td><code>personalAccessTokenConfiguration</code></td><td><a href="#personalaccesstokenconfiguration">PersonalAccessTokenConfiguration</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="connectorconnection"><code>ConnectorConnection</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#connectoredge">ConnectorEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="connectoredge"><code>ConnectorEdge</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#connector">Connector</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="conversation"><code>Conversation</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>organization</code></td><td><a href="#organization">Organization</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>messages</code></td><td>(first: Int = 100, after: String): <a href="#messageconnection">MessageConnection</a>!</td><td></td></tr>
    <tr><td><code>turnState</code></td><td><a href="#conversationturnstate">ConversationTurnState</a>!</td><td>Current turn state for this conversation. Carries the server- recommended poll cadence — clients should respect this rather than hardcoding an interval.</td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="conversationconnection"><code>ConversationConnection</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#conversationedge">ConversationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="conversationedge"><code>ConversationEdge</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#conversation">Conversation</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="conversationturnstate"><code>ConversationTurnState</code></h4>

<p><strong>Service:</strong> moddy</p>

<p>Represents the current phase of the conversation's active turn (if any).
Drives client poll cadence.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>phase</code></td><td><a href="#conversationphase">ConversationPhase</a>!</td><td></td></tr>
    <tr><td><code>recommendedPollIntervalMs</code></td><td>Int!</td><td>Server-recommended poll interval in milliseconds.</td></tr>
    <tr><td><code>activeTurnStartedAt</code></td><td><a href="#datetime">DateTime</a></td><td>When the currently-active turn started, if any.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="createaccesstokenresult"><code>CreateAccessTokenResult</code></h4>

<p><strong>Service:</strong> authz</p>

<p>Result of creating a new access token.
The token value is only available in this response.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>The unique identifier for the token. Use this ID for revocation.</td></tr>
    <tr><td><code>token</code></td><td>String!</td><td>The actual token value. Store this securely - it cannot be retrieved again.</td></tr>
    <tr><td><code>description</code></td><td>String</td><td>The description provided when creating the token.</td></tr>
    <tr><td><code>created</code></td><td><a href="#datetime">DateTime</a>!</td><td>When the token was created.</td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetime">DateTime</a></td><td>When the token will expire, or null if it never expires.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatableavailable"><code>DataTableAvailable</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#datatable">DataTable</a></p>

<p>A data table is available for download but no download has been initiated yet.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>dataTable</code></td><td><a href="#datatabledescriptor">DataTableDescriptor</a>!</td><td></td></tr>
    <tr><td><code>instanceName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>group</code></td><td>String</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatableconnection"><code>DataTableConnection</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#datatableedge">DataTableEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatabledescriptor"><code>DataTableDescriptor</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String!</td><td></td></tr>
    <tr><td><code>columns</code></td><td>[<a href="#column">Column</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatableedge"><code>DataTableEdge</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#datatable">DataTable</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatableerror"><code>DataTableError</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#datatable">DataTable</a></p>

<p>A data table download failed.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>dataTable</code></td><td><a href="#datatabledescriptor">DataTableDescriptor</a>!</td><td></td></tr>
    <tr><td><code>instanceName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>group</code></td><td>String</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatablefinished"><code>DataTableFinished</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#datatable">DataTable</a></p>

<p>A data table download has completed successfully.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>dataTable</code></td><td><a href="#datatabledescriptor">DataTableDescriptor</a>!</td><td></td></tr>
    <tr><td><code>instanceName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>group</code></td><td>String</td><td></td></tr>
    <tr><td><code>format</code></td><td><a href="#datatableformat">DataTableFormat</a>!</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>duration</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
    <tr><td><code>downloadUrl</code></td><td>String!</td><td>URL path to download the file (relative to the service base URL).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatableprocessing"><code>DataTableProcessing</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#datatable">DataTable</a></p>

<p>A data table download is being processed.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>dataTable</code></td><td><a href="#datatabledescriptor">DataTableDescriptor</a>!</td><td></td></tr>
    <tr><td><code>instanceName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>group</code></td><td>String</td><td></td></tr>
    <tr><td><code>format</code></td><td><a href="#datatableformat">DataTableFormat</a>!</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatablesqlmessage"><code>DataTableSqlMessage</code></h4>

<p><strong>Service:</strong> moddy | <strong>Implements:</strong> <a href="#message">Message</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>sqlQuery</code></td><td>String!</td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatablesmessage"><code>DataTablesMessage</code></h4>

<p><strong>Service:</strong> moddy | <strong>Implements:</strong> <a href="#message">Message</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>[<a href="#datatabledescriptor">DataTableDescriptor</a>!]!</td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenter"><code>DevCenter</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td>The currently configured DevCenter recipe for this organization.</td></tr>
    <tr><td><code>runs</code></td><td>(first: Int = 10, after: String, where: <a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>, orderBy: [<a href="#devcenterrunorderbyinput">DevCenterRunOrderByInput</a>!]): <a href="#devcenterrunconnection">DevCenterRunConnection</a>!</td><td>DevCenter runs for this organization, ordered by start time descending.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcentercard"><code>DevCenterCard</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>A DevCenter card represents a category of work (e.g., "Spring Boot 3", "Java 21", "Security").
Cards contain measures that track progress toward completion.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td>Display name of the card.</td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a></td><td>Description of what this card tracks.</td></tr>
    <tr><td><code>fixRecipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td>Recipe that can fix/complete the work tracked by this card.</td></tr>
    <tr><td><code>aggregation</code></td><td><a href="#devcenteraggregation">DevCenterAggregation</a>!</td><td>How results are aggregated for this card.</td></tr>
    <tr><td><code>measures</code></td><td>[<a href="#devcentermeasure">DevCenterMeasure</a>!]!</td><td>Measures within this card, ordered by ordinal.</td></tr>
    <tr><td><code>repositoriesNotApplicable</code></td><td>Int!</td><td>Repositories where this card is not applicable.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcentercarddescriptor"><code>DevCenterCardDescriptor</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a></td><td></td></tr>
    <tr><td><code>fixRecipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>aggregation</code></td><td><a href="#devcenteraggregation">DevCenterAggregation</a>!</td><td></td></tr>
    <tr><td><code>measures</code></td><td>[<a href="#devcentermeasuredescriptor">DevCenterMeasureDescriptor</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcentermeasure"><code>DevCenterMeasure</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>A measure within a DevCenter card representing a specific state or finding,
with a count from the run results.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td>Display name of the measure.</td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a></td><td>Description of what this measure represents.</td></tr>
    <tr><td><code>ordinal</code></td><td>Int!</td><td>Sort order relative to other measures in the card.</td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td>Count of repositories or occurrences for this measure. For PER_REPOSITORY: number of repositories in this state. For PER_OCCURRENCE: total count of occurrences.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcentermeasuredescriptor"><code>DevCenterMeasureDescriptor</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>A measure descriptor within a DevCenter card, representing metadata about
a specific state or finding. See DevCenterMeasure in changeset:reader
for the runtime version with counts.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a></td><td></td></tr>
    <tr><td><code>ordinal</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterorganization"><code>DevCenterOrganization</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>Organization-level context from a DevCenter run.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repositories</code></td><td><a href="#devcenterrepositories">DevCenterRepositories</a>!</td><td>Repository counts at the time of the run.</td></tr>
    <tr><td><code>contributingDevelopers</code></td><td>Int!</td><td>Number of unique contributing developers (last 90 days).</td></tr>
    <tr><td><code>linesOfCode</code></td><td><a href="#long">Long</a>!</td><td>Total lines of code across all repositories on platform.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrepositories"><code>DevCenterRepositories</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>Repository counts from a DevCenter run.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>total</code></td><td>Int!</td><td>Total repositories defined in the organization at the time of the run.</td></tr>
    <tr><td><code>repositoriesWithoutLst</code></td><td>Int!</td><td>Repositories with no LST ingested at the time of the run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterruncanceled"><code>DevCenterRunCanceled</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#devcenterrun">DevCenterRun</a></p>

<p>DevCenter run was canceled before completion.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunconnection"><code>DevCenterRunConnection</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#devcenterrunedge">DevCenterRunEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunedge"><code>DevCenterRunEdge</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#devcenterrun">DevCenterRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunerror"><code>DevCenterRunError</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#devcenterrun">DevCenterRun</a></p>

<p>DevCenter run failed with an error.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td>Human-readable error message.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunfinished"><code>DevCenterRunFinished</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#devcenterrun">DevCenterRun</a></p>

<p>DevCenter run completed successfully with summarized results.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>organization</code></td><td><a href="#devcenterorganization">DevCenterOrganization</a>!</td><td></td></tr>
    <tr><td><code>upgradesAndMigrations</code></td><td>[<a href="#devcentercard">DevCenterCard</a>!]!</td><td>Upgrade and migration opportunities found (from UpgradesAndMigrations data table).</td></tr>
    <tr><td><code>security</code></td><td><a href="#devcentercard">DevCenterCard</a></td><td>Security vulnerabilities found (from SecurityIssues data table).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunrunning"><code>DevCenterRunRunning</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#devcenterrun">DevCenterRun</a></p>

<p>DevCenter recipe is currently running across repositories.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="diffstat"><code>DiffStat</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>Aggregate line-level diff statistics.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>additions</code></td><td>Int!</td><td>Total lines added.</td></tr>
    <tr><td><code>deletions</code></td><td>Int!</td><td>Total lines removed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="directcommitsucceeded"><code>DirectCommitSucceeded</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Direct commit to repository completed successfully.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>resultLink</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="errormessage"><code>ErrorMessage</code></h4>

<p><strong>Service:</strong> moddy | <strong>Implements:</strong> <a href="#message">Message</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>content</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>code</code></td><td>String</td><td>Stable error code that clients may switch on for UI copy. The full taxonomy (split into API-call errors vs in-conversation errors) is maintained in `doc/moddy-polling-ui-handoff.md`. As of now:    Configuration / LLM provider:     LLM_UNAVAILABLE, LLM_OVERLOADED, LLM_RATE_LIMITED, LLM_AUTH_FAILED,     LLM_CONTEXT_TOO_LONG, LLM_TIMED_OUT, LLM_QUOTA_EXCEEDED,     LLM_UNREACHABLE, LLM_EMPTY_RESPONSE, LLM_FAILED    Tool execution:     TOOL_UNKNOWN, TOOL_FAILED    Turn lifecycle:     TURN_LIMIT_EXCEEDED, CANCELLED    Fallback:     INTERNAL  API-call errors (returned in GraphQL `errors[]`, not as messages): INVALID_CURSOR, FORBIDDEN, CONVERSATION_BUSY, MESSAGE_TOO_LONG, CONVERSATION_NOT_FOUND, TOO_MANY_REQUESTS.</td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="exchangeauthorizationresult"><code>ExchangeAuthorizationResult</code></h4>

<p><strong>Service:</strong> authz</p>

<p>Result of exchanging an authorization code.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>success</code></td><td>Boolean!</td><td>True if the exchange was successful and token was stored.</td></tr>
    <tr><td><code>error</code></td><td>String</td><td>Error message if exchange failed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="filechangeconnection"><code>FileChangeConnection</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<p>Connection for file changes with aggregate statistics.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#filechangeedge">FileChangeEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>searched</code></td><td>Int!</td><td>Total files searched.</td></tr>
    <tr><td><code>changed</code></td><td>Int!</td><td>Files with committable changes.</td></tr>
    <tr><td><code>errors</code></td><td>Int!</td><td>Files with errors.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="filechangeedge"><code>FileChangeEdge</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#filechange">FileChange</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="forkandpullrequestcommitsucceeded"><code>ForkAndPullRequestCommitSucceeded</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Fork and pull request commit completed successfully.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>resultLink</code></td><td>String</td><td></td></tr>
    <tr><td><code>pullRequestStatus</code></td><td><a href="#pullrequeststatus">PullRequestStatus</a>!</td><td>Pull request status.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="forkcommitoptions"><code>ForkCommitOptions</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#commitoptions">CommitOptions</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
    <tr><td><code>organization</code></td><td>String</td><td>If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account.</td></tr>
    <tr><td><code>prefixOrganization</code></td><td>Boolean!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="forkcommitsucceeded"><code>ForkCommitSucceeded</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Fork commit completed successfully.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>resultLink</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="forkpullrequestoptions"><code>ForkPullRequestOptions</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#commitoptions">CommitOptions</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
    <tr><td><code>organization</code></td><td>String</td><td>If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account.</td></tr>
    <tr><td><code>prefixOrganization</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>pullRequestTitle</code></td><td>String</td><td>If unset, the commit message will be used as the pull request title.</td></tr>
    <tr><td><code>pullRequestBody</code></td><td><a href="#base64">Base64</a></td><td></td></tr>
    <tr><td><code>draft</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>maintainerCanModify</code></td><td>Boolean!</td><td>GitHub only flag to allow maintainers to edit a pull request.</td></tr>
    <tr><td><code>autoMergeMethod</code></td><td><a href="#mergemethod">MergeMethod</a></td><td>If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy.</td></tr>
    <tr><td><code>canRecreateClosedPullRequest</code></td><td>Boolean!</td><td>Recreate a pull request if it was already closed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="generichttptoolconfiguration"><code>GenericHttpToolConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="gitlabconfiguration"><code>GitLabConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>oauth</code></td><td><a href="#gitlaboauth">GitLabOauth</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="gitlabconnection"><code>GitLabConnection</code></h4>

<p><strong>Service:</strong> authz | <strong>Implements:</strong> <a href="#scmconnection">ScmConnection</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="gitlaboauth"><code>GitLabOauth</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="githubconfiguration"><code>GithubConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>allowableOrganizations</code></td><td>[String!]!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>oauth</code></td><td><a href="#githuboauth">GithubOauth</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="githubconnection"><code>GithubConnection</code></h4>

<p><strong>Service:</strong> authz | <strong>Implements:</strong> <a href="#scmconnection">ScmConnection</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="githuboauth"><code>GithubOauth</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>includePrivateRepos</code></td><td>Boolean!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="gorecipebundle"><code>GoRecipeBundle</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#recipebundle">RecipeBundle</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="httptoolconnectivity"><code>HttpToolConnectivity</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>connected</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>latency</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="license"><code>License</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>key</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="llmconfiguration"><code>LlmConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>llmProvider</code></td><td><a href="#llmprovider">LlmProvider</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="lstartifact"><code>LstArtifact</code></h4>

<p><strong>Service:</strong> organization</p>

<p>The LST artifact for a repository - the precomputed Lossless Semantic Tree
that recipe runs consume. Every repository has a conceptual artifact;
`published` reflects the upstream `mod publish` timestamp, while
`available` indicates whether the saas can route a recipe run to it yet.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>published</code></td><td><a href="#datetime">DateTime</a></td><td>When `mod publish` produced an artifact into the customer's LST artifact repository, or null if no artifact has been published. For a tenant configured for encrypted LSTs, a non-null `published` does NOT mean the encrypted artifact has been received by the tenant - that signal lives on `available`.</td></tr>
    <tr><td><code>available</code></td><td>Boolean!</td><td>Whether the artifact is reachable for a recipe run. For an organization source with encryption enabled, true once the connector has uploaded the encrypted artifact and the gateway has surfaced an `encrypted://` alternate publish URI. For a source without encryption (pass-through), true when the gateway-projected row has a non-empty `publishUri`, which we assume is reachable from `mod publish`.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="markup"><code>Markup</code></h4>

<p><strong>Service:</strong> corechangeset | <strong>Implements:</strong> <a href="#marker">Marker</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>level</code></td><td><a href="#markuplevel">MarkupLevel</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String</td><td></td></tr>
    <tr><td><code>detail</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="mavenconfiguration"><code>MavenConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>localRepository</code></td><td>String</td><td></td></tr>
    <tr><td><code>lastIngestedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="mavenrecipebundle"><code>MavenRecipeBundle</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#recipebundle">RecipeBundle</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>groupId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>artifactId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="mergeoptions"><code>MergeOptions</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>deleteSourceBranch</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>mergeMethod</code></td><td><a href="#mergemethod">MergeMethod</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="messageconnection"><code>MessageConnection</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#messageedge">MessageEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="messageedge"><code>MessageEdge</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#message">Message</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="moddy"><code>Moddy</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>systemPrompt</code></td><td><a href="#prompt">Prompt</a>!</td><td>The effective system prompt for this context. Cascades: user > organization > universal > built-in default.</td></tr>
    <tr><td><code>adminOnly</code></td><td>Boolean!</td><td>When true, only administrators can create conversations or send messages. Install-level policy flag; the UI uses this together with the viewer's admin status to gate the Moddy menu entry.</td></tr>
    <tr><td><code>conversations</code></td><td>(first: Int = 50, after: String, where: <a href="#conversationwhereinput">ConversationWhereInput</a>, orderBy: [<a href="#conversationorderbyinput">ConversationOrderByInput</a>!]): <a href="#conversationconnection">ConversationConnection</a>!</td><td></td></tr>
    <tr><td><code>providerName</code></td><td>String</td><td>Human-readable provider name (e.g. "Anthropic", "OpenAI"). Null when no LLM provider is configured (in which case `capabilities.moddy` is also false — clients should gate the chat composer on the capability, not on this field).</td></tr>
    <tr><td><code>model</code></td><td>String</td><td>Configured model identifier (e.g. "claude-3-5-sonnet-20241022"). Null when no provider is configured or the provider is configured without a model override.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="morehelplink"><code>MoreHelpLink</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>label</code></td><td>String!</td><td></td></tr>
    <tr><td><code>uri</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="npmconfiguration"><code>NpmConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="npmrecipebundle"><code>NpmRecipeBundle</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#recipebundle">RecipeBundle</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="nugetconfiguration"><code>NugetConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="nugetrecipebundle"><code>NugetRecipeBundle</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#recipebundle">RecipeBundle</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="oauthauthorization"><code>OAuthAuthorization</code></h4>

<p><strong>Service:</strong> authz</p>

<p>Represents a pending OAuth authorization.
The UI should redirect to authorizationUrl, then call exchangeAuthorizationCode
with the id and extracted callback parameters.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>Unique ID for this authorization attempt. Used to look up stored PKCE state at exchange time.</td></tr>
    <tr><td><code>authorizationUrl</code></td><td>String!</td><td>The fully-constructed OAuth authorization URL. UI should redirect the user to this URL.  IMPORTANT: The UI must store the authorization ID before redirecting, as it will be needed to call exchangeAuthorizationCode after the callback. The redirect URI does not contain the authorization ID.</td></tr>
    <tr><td><code>callbackParameters</code></td><td>[String!]!</td><td>Query parameters the UI should extract from the OAuth callback URL and pass to exchangeAuthorizationCode (e.g., ["code"]).</td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When this authorization expires. UI should treat expired authorizations as stale.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="option"><code>Option</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>RecipeDescriptor resolved from changeset-specific recipes.csv.
When a recipe run is created, the recipes.csv is copied to the changeset directory,
so we can resolve the recipe that was used at the time of the run (not the current global state).</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a></td><td></td></tr>
    <tr><td><code>type</code></td><td>String!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String!</td><td></td></tr>
    <tr><td><code>example</code></td><td>String</td><td></td></tr>
    <tr><td><code>valid</code></td><td>[String]</td><td></td></tr>
    <tr><td><code>required</code></td><td>Boolean!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organization"><code>Organization</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>changelog</code></td><td>(first: Int = 50, after: String, where: <a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a>, orderBy: [<a href="#changelogentryorderbyinput">ChangelogEntryOrderByInput</a>!]): <a href="#changelogentryconnection">ChangelogEntryConnection</a>!</td><td>PR and commit activity feed for repositories in this organization.</td></tr>
    <tr><td><code>participants</code></td><td>(first: Int = 50, after: String, where: <a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a>, orderBy: [<a href="#changelogparticipantorderbyinput">ChangelogParticipantOrderByInput</a>!]): <a href="#changelogparticipantconnection">ChangelogParticipantConnection</a>!</td><td>All unique participants across the changelog for this organization, aggregated from authors, assignees, closers, and reviewers.</td></tr>
    <tr><td><code>commitOptions</code></td><td>[<a href="#commitoption">CommitOption</a>!]!</td><td>Available commit options for this organization.</td></tr>
    <tr><td><code>changesets</code></td><td>(first: Int = 50, after: String, where: <a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a>, orderBy: [<a href="#organizationchangesetorderbyinput">OrganizationChangesetOrderByInput</a>!]): <a href="#organizationchangesetconnection">OrganizationChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>devCenter</code></td><td><a href="#devcenter">DevCenter</a></td><td>DevCenter provides organization-wide campaign progress tracking.</td></tr>
    <tr><td><code>moddy</code></td><td><a href="#moddy">Moddy</a>!</td><td></td></tr>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>parents</code></td><td>[<a href="#organization">Organization</a>!]!</td><td>The ancestor organizations of this organization, ordered from immediate parent towards root. Does not include the epsilon root. Empty for the root organization and direct children of root.</td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a></td><td>The user who owns this organization. Null for global organizations, non-null for user-defined organizations.</td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorywhereinput">RepositoryWhereInput</a>, orderBy: [<a href="#repositoryorderbyinput">RepositoryOrderByInput</a>!]): <a href="#repositoryconnection">RepositoryConnection</a>!</td><td></td></tr>
    <tr><td><code>children</code></td><td>(first: Int = 100, after: String, where: <a href="#organizationwhereinput">OrganizationWhereInput</a>, orderBy: [<a href="#organizationorderbyinput">OrganizationOrderByInput</a>!]): <a href="#organizationconnection">OrganizationConnection</a>!</td><td>Direct children of this organization in the tree, paginated. Useful for lazy-loading the org tree level by level — e.g. an org selector that fetches the root, then the children of each folder only when the user expands it.  `where.depth` is ignored on this field — every direct child of a given parent has the same depth, so the filter would be either all-or-nothing. Use `where.name` and the boolean composers (`_and`, `_or`, `_not`) for meaningful filtering.  `orderBy` defaults to NAME ascending when unspecified.</td></tr>
    <tr><td><code>marketplace</code></td><td><a href="#recipemarketplace">RecipeMarketplace</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationchangeset"><code>OrganizationChangeset</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bulkPullRequestActions</code></td><td>(first: Int = 50, after: String, where: <a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>, orderBy: [<a href="#bulkpullrequestactionorderbyinput">BulkPullRequestActionOrderByInput</a>!]): <a href="#bulkpullrequestactionconnection">BulkPullRequestActionConnection</a>!</td><td>Bulk pull request actions (approve, merge, close) initiated against pull requests that belong to this changeset.  Default sort: STARTED_AT DESC with QUEUED entries (no startedAt) appearing last so polling clients still see in-flight actions.</td></tr>
    <tr><td><code>commits</code></td><td>(first: Int = 50, after: String, where: <a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>, orderBy: [<a href="#organizationcommitorderbyinput">OrganizationCommitOrderByInput</a>!]): <a href="#organizationcommitconnection">OrganizationCommitConnection</a></td><td>Commit operations initiated from this changeset.</td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this changeset. Each visualization starts as Available and transitions to Processing/Finished/Error when runVisualization mutation is called.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationchangesetconnection"><code>OrganizationChangesetConnection</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationchangesetedge">OrganizationChangesetEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationchangesetedge"><code>OrganizationChangesetEdge</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
    <tr><td><code>organization</code></td><td><a href="#organization">Organization</a></td><td>The organization this changeset was run against. May differ from the queried organization when the changeset belongs to a suborganization. Null if the organization has been deleted or is temporarily unavailable.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitcanceled"><code>OrganizationCommitCanceled</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#organizationcommit">OrganizationCommit</a></p>

<p>Commit was canceled before completion.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>extendedMessage</code></td><td><a href="#base64">Base64</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>canceledBy</code></td><td><a href="#user">User</a>!</td><td>Who or what initiated the cancellation.</td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>!</td><td>Paginated results per repository (partial).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitconnection"><code>OrganizationCommitConnection</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationcommitedge">OrganizationCommitEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitedge"><code>OrganizationCommitEdge</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationcommit">OrganizationCommit</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommiterror"><code>OrganizationCommitError</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#organizationcommit">OrganizationCommit</a></p>

<p>Commit failed with an error.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>extendedMessage</code></td><td><a href="#base64">Base64</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>errorMessage</code></td><td>String!</td><td>Human-readable error message.</td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>!</td><td>Paginated results per repository (partial).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitfinished"><code>OrganizationCommitFinished</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#organizationcommit">OrganizationCommit</a></p>

<p>Commit completed successfully (all or partial success).</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>extendedMessage</code></td><td><a href="#base64">Base64</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>!</td><td>Paginated results per repository.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitqueued"><code>OrganizationCommitQueued</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#organizationcommit">OrganizationCommit</a></p>

<p>Commit is queued and waiting to be processed.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>extendedMessage</code></td><td><a href="#base64">Base64</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>!</td><td>Paginated results per repository.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitrunning"><code>OrganizationCommitRunning</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#organizationcommit">OrganizationCommit</a></p>

<p>Commit is actively being processed across repositories.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>extendedMessage</code></td><td><a href="#base64">Base64</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>!</td><td>Paginated results per repository.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationconfiguration"><code>OrganizationConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationconnection"><code>OrganizationConnection</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationedge">OrganizationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationedge"><code>OrganizationEdge</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organization">Organization</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperun"><code>OrganizationRecipeRun</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bulkPullRequestActions</code></td><td>(first: Int = 50, after: String, where: <a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>, orderBy: [<a href="#bulkpullrequestactionorderbyinput">BulkPullRequestActionOrderByInput</a>!]): <a href="#bulkpullrequestactionconnection">BulkPullRequestActionConnection</a>!</td><td>Bulk pull request actions for recipe-run changesets.</td></tr>
    <tr><td><code>commits</code></td><td>(first: Int = 50, after: String, where: <a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>, orderBy: [<a href="#organizationcommitorderbyinput">OrganizationCommitOrderByInput</a>!]): <a href="#organizationcommitconnection">OrganizationCommitConnection</a></td><td>Commit operations initiated from this recipe run.</td></tr>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptionvalue">RecipeOptionValue</a>!]!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes.</td></tr>
    <tr><td><code>priority</code></td><td><a href="#reciperunpriority">RecipeRunPriority</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this recipe run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperuncanceled"><code>OrganizationRecipeRunCanceled</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptionvalue">RecipeOptionValue</a>!]!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes.</td></tr>
    <tr><td><code>priority</code></td><td><a href="#reciperunpriority">RecipeRunPriority</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>canceledAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Alias for finishedAt - when the run was canceled</td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this recipe run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunconnection"><code>OrganizationRecipeRunConnection</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationreciperunedge">OrganizationRecipeRunEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunedge"><code>OrganizationRecipeRunEdge</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationreciperun">OrganizationRecipeRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunerror"><code>OrganizationRecipeRunError</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptionvalue">RecipeOptionValue</a>!]!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes.</td></tr>
    <tr><td><code>priority</code></td><td><a href="#reciperunpriority">RecipeRunPriority</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>errorMessage</code></td><td>String</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this recipe run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunfinished"><code>OrganizationRecipeRunFinished</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptionvalue">RecipeOptionValue</a>!]!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes.</td></tr>
    <tr><td><code>priority</code></td><td><a href="#reciperunpriority">RecipeRunPriority</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>duration</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
    <tr><td><code>totals</code></td><td><a href="#reciperuntotals">RecipeRunTotals</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this recipe run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunqueued"><code>OrganizationRecipeRunQueued</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptionvalue">RecipeOptionValue</a>!]!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes.</td></tr>
    <tr><td><code>priority</code></td><td><a href="#reciperunpriority">RecipeRunPriority</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>queuedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this recipe run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunrunning"><code>OrganizationRecipeRunRunning</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptionvalue">RecipeOptionValue</a>!]!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes.</td></tr>
    <tr><td><code>priority</code></td><td><a href="#reciperunpriority">RecipeRunPriority</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>totals</code></td><td><a href="#reciperuntotals">RecipeRunTotals</a></td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this recipe run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunsyncing"><code>OrganizationRecipeRunSyncing</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#organizationchangeset">OrganizationChangeset</a>, <a href="#organizationreciperun">OrganizationRecipeRun</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptionvalue">RecipeOptionValue</a>!]!</td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>Monotonic high-water mark advanced by every state writer (sync monitor, run monitor, processor). Treat as a content version: poll a tiny query selecting `__typename` + `lastUpdatedAt` cheaply and only refetch the heavy `repositories`/`totals` selections when this value changes.</td></tr>
    <tr><td><code>priority</code></td><td><a href="#reciperunpriority">RecipeRunPriority</a>!</td><td></td></tr>
    <tr><td><code>parent</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String, where: <a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>, orderBy: [<a href="#repositorychangesetorderbyinput">RepositoryChangesetOrderByInput</a>!]): <a href="#repositorychangesetconnection">RepositoryChangesetConnection</a>!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>(first: Int = 50, after: String, where: <a href="#datatablewhereinput">DataTableWhereInput</a>, orderBy: [<a href="#datatableorderbyinput">DataTableOrderByInput</a>!]): <a href="#datatableconnection">DataTableConnection</a>!</td><td>Data tables produced by this recipe run. Each data table starts as Available and transitions to Processing/Finished/Error when downloadDataTable mutation is called.</td></tr>
    <tr><td><code>visualizations</code></td><td>(first: Int = 50, after: String, where: <a href="#visualizationwhereinput">VisualizationWhereInput</a>, orderBy: [<a href="#visualizationorderbyinput">VisualizationOrderByInput</a>!]): <a href="#visualizationconnection">VisualizationConnection</a>!</td><td>Visualizations produced by this recipe run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pageinfo"><code>PageInfo</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>hasNextPage</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>hasPreviousPage</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>startCursor</code></td><td>String</td><td></td></tr>
    <tr><td><code>endCursor</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="patch"><code>Patch</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>diff</code></td><td>String!</td><td>Sanitized diff (does not include markers)</td></tr>
    <tr><td><code>fencedMarkerDiff</code></td><td>String!</td><td>A diff with search and markup markers included in fenced &#123;&#123;UUID&#125;&#125; wrappers that correspond to ids in the markers list.</td></tr>
    <tr><td><code>markers</code></td><td>[<a href="#marker">Marker</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="personalaccesstokenconfiguration"><code>PersonalAccessTokenConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>maxExpiryDays</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="piprecipebundle"><code>PipRecipeBundle</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#recipebundle">RecipeBundle</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="platformcapabilities"><code>PlatformCapabilities</code></h4>

<p><strong>Service:</strong> artifactsmaven</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>artifacts</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>changelog</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>codeSearch</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connector</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>moddy</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>profiling</code></td><td><a href="#profiling">Profiling</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="profiling"><code>Profiling</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>deployed</code></td><td>Boolean!</td><td>Whether the per-tenant Pyroscope ASG, S3 bucket, and IAM are provisioned.</td></tr>
    <tr><td><code>session</code></td><td><a href="#profilingsession">ProfilingSession</a></td><td>The currently active profiling session, or null when profiling is off. Flipped by setProfiling.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="profilingsession"><code>ProfilingSession</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td>The user who turned profiling on.</td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When profiling was turned on.</td></tr>
    <tr><td><code>event</code></td><td><a href="#profilingevent">ProfilingEvent</a>!</td><td>The primary profiling event the in-process agent is sampling.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="prompt"><code>Prompt</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>content</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedBy</code></td><td><a href="#user">User</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactioncanceled"><code>PullRequestActionCanceled</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#pullrequestaction">PullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>canceledBy</code></td><td><a href="#user">User</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionconnection"><code>PullRequestActionConnection</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#pullrequestactionedge">PullRequestActionEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionedge"><code>PullRequestActionEdge</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#pullrequestaction">PullRequestAction</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionfailed"><code>PullRequestActionFailed</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#pullrequestaction">PullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>errorMessage</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionqueued"><code>PullRequestActionQueued</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#pullrequestaction">PullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionrunning"><code>PullRequestActionRunning</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#pullrequestaction">PullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionsucceeded"><code>PullRequestActionSucceeded</code></h4>

<p><strong>Service:</strong> changelogreader | <strong>Implements:</strong> <a href="#pullrequestaction">PullRequestAction</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestcommitsucceeded"><code>PullRequestCommitSucceeded</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a>, <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Pull request commit completed successfully.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>resultLink</code></td><td>String</td><td></td></tr>
    <tr><td><code>pullRequestStatus</code></td><td><a href="#pullrequeststatus">PullRequestStatus</a>!</td><td>Pull request status.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestoptions"><code>PullRequestOptions</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#commitoptions">CommitOptions</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
    <tr><td><code>pullRequestTitle</code></td><td>String</td><td>If unset, the commit message will be used as the pull request title.</td></tr>
    <tr><td><code>pullRequestBody</code></td><td><a href="#base64">Base64</a></td><td></td></tr>
    <tr><td><code>draft</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>autoMergeMethod</code></td><td><a href="#mergemethod">MergeMethod</a></td><td>If allowed by the repository, set the pull request to automatically merge after all checks pass using the defined strategy.</td></tr>
    <tr><td><code>canRecreateClosedPullRequest</code></td><td>Boolean!</td><td>Recreate a pull request if it was already closed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestref"><code>PullRequestRef</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td></td></tr>
    <tr><td><code>repositoryPath</code></td><td>String!</td><td></td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td></td></tr>
    <tr><td><code>number</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequeststatus"><code>PullRequestStatus</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>mergeable</code></td><td><a href="#mergeable">Mergeable</a>!</td><td>Can this pull request be merged or not</td></tr>
    <tr><td><code>state</code></td><td><a href="#pullrequeststate">PullRequestState</a>!</td><td></td></tr>
    <tr><td><code>review</code></td><td><a href="#reviewstatus">ReviewStatus</a>!</td><td></td></tr>
    <tr><td><code>buildState</code></td><td><a href="#buildstate">BuildState</a></td><td></td></tr>
    <tr><td><code>otherBlockingReasons</code></td><td>[String!]!</td><td>Additional status flags that block this pull request. Can depend on the SCM service provider.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pypiconfiguration"><code>PypiConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipebundleconnection"><code>RecipeBundleConnection</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipebundleedge">RecipeBundleEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipebundleedge"><code>RecipeBundleEdge</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipecategory"><code>RecipeCategory</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int!</td><td>Total number of unique recipes in this category, including all subcategories recursively.</td></tr>
    <tr><td><code>parents</code></td><td>[<a href="#recipecategory">RecipeCategory</a>!]!</td><td></td></tr>
    <tr><td><code>recipes</code></td><td>(first: Int = 100, after: String, where: <a href="#recipewhereinput">RecipeWhereInput</a>, orderBy: [<a href="#recipeorderbyinput">RecipeOrderByInput</a>!]): <a href="#recipedescriptorconnection">RecipeDescriptorConnection</a>!</td><td></td></tr>
    <tr><td><code>categories</code></td><td>(first: Int = 100, after: String, where: <a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>, orderBy: [<a href="#recipecategoryorderbyinput">RecipeCategoryOrderByInput</a>!]): <a href="#recipecategoryconnection">RecipeCategoryConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipecategoryconnection"><code>RecipeCategoryConnection</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipecategoryedge">RecipeCategoryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipecategoryedge"><code>RecipeCategoryEdge</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipecategory">RecipeCategory</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipedescriptor"><code>RecipeDescriptor</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>instanceName</code></td><td>String</td><td></td></tr>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#option">Option</a>!]!</td><td></td></tr>
    <tr><td><code>dataTables</code></td><td>[<a href="#datatabledescriptor">DataTableDescriptor</a>!]!</td><td></td></tr>
    <tr><td><code>devCenterCards</code></td><td>[<a href="#devcentercarddescriptor">DevCenterCardDescriptor</a>!]</td><td>DevCenter card descriptors for this recipe, or null if not a DevCenter recipe.</td></tr>
    <tr><td><code>detail</code></td><td><a href="#recipedetail">RecipeDetail</a>!</td><td>Expensive recipe detail fields that require resolving the full recipe bundle. Returns a state machine: query once to trigger resolution, poll until Finished.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipedescriptorconnection"><code>RecipeDescriptorConnection</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipedescriptoredge">RecipeDescriptorEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipedescriptoredge"><code>RecipeDescriptorEdge</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
    <tr><td><code>relevance</code></td><td>Float!</td><td>Relevance score for this recipe in the context of a search query. For semantic search, this represents the search relevance (0.0 to 1.0). For filter-based queries, this is always 1.0.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipedetailerror"><code>RecipeDetailError</code></h4>

<p><strong>Service:</strong> recipemarketplace | <strong>Implements:</strong> <a href="#recipedetail">RecipeDetail</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipedetailfinished"><code>RecipeDetailFinished</code></h4>

<p><strong>Service:</strong> recipemarketplace | <strong>Implements:</strong> <a href="#recipedetail">RecipeDetail</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>recipeList</code></td><td>(first: Int = 100, after: String): <a href="#recipedescriptorconnection">RecipeDescriptorConnection</a>!</td><td>The list of recipes that make up this composite recipe. Returns an empty connection for non-composite (leaf) recipes.</td></tr>
    <tr><td><code>tags</code></td><td>[String!]!</td><td>Tags associated with this recipe for categorization and filtering.</td></tr>
    <tr><td><code>preconditions</code></td><td>[<a href="#recipedescriptor">RecipeDescriptor</a>!]!</td><td></td></tr>
    <tr><td><code>graph</code></td><td><a href="#recipegraph">RecipeGraph</a>!</td><td>Flat vertices-and-edges representation of this composite recipe tree with Singleton deduplication pre-applied. Used by the Builder UI to visualize a composite recipe in a single round trip regardless of tree depth. Atomic (leaf) recipes return a single-vertex graph.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipedetailloading"><code>RecipeDetailLoading</code></h4>

<p><strong>Service:</strong> recipemarketplace | <strong>Implements:</strong> <a href="#recipedetail">RecipeDetail</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipegraph"><code>RecipeGraph</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>Flat vertices-and-edges representation of a composite recipe with
`org.openrewrite.Singleton` deduplication pre-applied. Produced by the
marketplace backend and served to visualization clients in one round trip.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>rootVertexId</code></td><td>Int!</td><td>ID of the root (entry-point) vertex in the graph.</td></tr>
    <tr><td><code>vertices</code></td><td>[<a href="#recipegraphvertex">RecipeGraphVertex</a>!]!</td><td></td></tr>
    <tr><td><code>edges</code></td><td>[<a href="#recipegraphedge">RecipeGraphEdge</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipegraphedge"><code>RecipeGraphEdge</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>from</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>to</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>type</code></td><td><a href="#recipegraphedgetype">RecipeGraphEdgeType</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipegraphvertex"><code>RecipeGraphVertex</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>A vertex in a RecipeGraph: a full recipe occurrence with its configured
options. Recipes that declare `org.openrewrite.Singleton` as a precondition
are deduplicated — additional occurrences are expressed as REFERENCE edges
pointing back to the first occurrence rather than as separate vertices.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a>!</td><td>The recipe this vertex represents. Carries recipe name (as `id`), displayName, instanceName, options, bundle, dataTables, etc. — reuse the existing RecipeDescriptor type rather than duplicating fields here.</td></tr>
    <tr><td><code>isSingleton</code></td><td>Boolean!</td><td>True if this recipe declares `org.openrewrite.Singleton` as a precondition, meaning additional occurrences in the graph appear as REFERENCE edges pointing back to this vertex.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationconnection"><code>RecipeInstallationConnection</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipeinstallationedge">RecipeInstallationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationedge"><code>RecipeInstallationEdge</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipeinstallation">RecipeInstallation</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedBy</code></td><td><a href="#user">User</a>!</td><td>The user who initiated this installation</td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a></td><td>The user whose marketplace this installation was made to. If the installation is a universal or organization installation, this field will be null.</td></tr>
    <tr><td><code>organization</code></td><td><a href="#organization">Organization</a></td><td>The organization to which this installation was made. If the installation is a universal or user installation, this field will be null.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationerror"><code>RecipeInstallationError</code></h4>

<p><strong>Service:</strong> recipemarketplace | <strong>Implements:</strong> <a href="#recipeinstallation">RecipeInstallation</a></p>

<p>Installation failed with an error.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td>Human-readable error message.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationfinished"><code>RecipeInstallationFinished</code></h4>

<p><strong>Service:</strong> recipemarketplace | <strong>Implements:</strong> <a href="#recipeinstallation">RecipeInstallation</a></p>

<p>Installation completed successfully.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>recipes</code></td><td>[<a href="#recipedescriptor">RecipeDescriptor</a>!]!</td><td>The recipes that were installed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationprocessing"><code>RecipeInstallationProcessing</code></h4>

<p><strong>Service:</strong> recipemarketplace | <strong>Implements:</strong> <a href="#recipeinstallation">RecipeInstallation</a></p>

<p>Installation is actively loading and resolving the recipe bundle.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>progress</code></td><td>Float</td><td>Progress from 0.0 to 1.0, if available.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationqueued"><code>RecipeInstallationQueued</code></h4>

<p><strong>Service:</strong> recipemarketplace | <strong>Implements:</strong> <a href="#recipeinstallation">RecipeInstallation</a></p>

<p>Installation is queued and waiting to be processed.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipemarketplace"><code>RecipeMarketplace</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>categories</code></td><td>(first: Int = 100, after: String, where: <a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>, orderBy: [<a href="#recipecategoryorderbyinput">RecipeCategoryOrderByInput</a>!]): <a href="#recipecategoryconnection">RecipeCategoryConnection</a>!</td><td></td></tr>
    <tr><td><code>recipes</code></td><td>(first: Int = 100, after: String, where: <a href="#recipewhereinput">RecipeWhereInput</a>, orderBy: [<a href="#recipeorderbyinput">RecipeOrderByInput</a>!]): <a href="#recipedescriptorconnection">RecipeDescriptorConnection</a>!</td><td></td></tr>
    <tr><td><code>installations</code></td><td>(first: Int = 50, after: String, where: <a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a>, orderBy: [<a href="#recipeinstallationorderbyinput">RecipeInstallationOrderByInput</a>!]): <a href="#recipeinstallationconnection">RecipeInstallationConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeoptionvalue"><code>RecipeOptionValue</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeoptionsmessage"><code>RecipeOptionsMessage</code></h4>

<p><strong>Service:</strong> moddy | <strong>Implements:</strong> <a href="#message">Message</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td>[<a href="#option">Option</a>!]!</td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="reciperunfilechange"><code>RecipeRunFileChange</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#filechange">FileChange</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>path</code></td><td><a href="#path">Path</a>!</td><td></td></tr>
    <tr><td><code>beforeSourcePath</code></td><td><a href="#path">Path</a></td><td></td></tr>
    <tr><td><code>afterSourcePath</code></td><td><a href="#path">Path</a></td><td></td></tr>
    <tr><td><code>diff</code></td><td>(markupLevel: <a href="#markuplevel">MarkupLevel</a> = ERROR, showWhitespaceOnlyChanges: Boolean = true): <a href="#patch">Patch</a></td><td></td></tr>
    <tr><td><code>recipesThatMadeChanges</code></td><td>[[<a href="#recipedescriptor">RecipeDescriptor</a>!]!]!</td><td>Recipe chains that contributed changes to this file. Each inner list is one mutation event's call stack, ordered root composite first to leaf recipe last (the leaf is the narrowest recipe that actually performed the change).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="reciperunmessage"><code>RecipeRunMessage</code></h4>

<p><strong>Service:</strong> moddy | <strong>Implements:</strong> <a href="#message">Message</a></p>

<p>Long-running recipe execution started by the LLM. Carries a typed
progress envelope while IN_PROGRESS — clients should read `progress`
rather than poking at a free-form payload. When the run reaches a
terminal state, `recipeRun` resolves via federation.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>recipeRun</code></td><td><a href="#organizationreciperun">OrganizationRecipeRun</a></td><td></td></tr>
    <tr><td><code>progress</code></td><td><a href="#reciperunprogress">RecipeRunProgress</a></td><td>Typed progress snapshot while the run is IN_PROGRESS.</td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="reciperunprogress"><code>RecipeRunProgress</code></h4>

<p><strong>Service:</strong> moddy</p>

<p>Typed progress envelope for an in-flight recipe run.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>recipeRunId</code></td><td>ID</td><td></td></tr>
    <tr><td><code>reposQueued</code></td><td>Int</td><td></td></tr>
    <tr><td><code>reposRunning</code></td><td>Int</td><td></td></tr>
    <tr><td><code>reposFinished</code></td><td>Int</td><td></td></tr>
    <tr><td><code>reposTotal</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="reciperuntotals"><code>RecipeRunTotals</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>timeSavings</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
    <tr><td><code>filesSearched</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>filesChanged</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>filesWithResults</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>totalMarkers</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>repositoriesWithResults</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>repositoriesSuccessful</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>repositoriesWithNoChanges</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>repositoriesWithErrors</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>repositoriesInProgress</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipesearchmessage"><code>RecipeSearchMessage</code></h4>

<p><strong>Service:</strong> moddy | <strong>Implements:</strong> <a href="#message">Message</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>searchResults</code></td><td>[<a href="#recipedescriptor">RecipeDescriptor</a>!]!</td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeuninstallation"><code>RecipeUninstallation</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>Result of an uninstall operation.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>removedCount</code></td><td>Int!</td><td>The number of recipes that were removed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="reindexresult"><code>ReindexResult</code></h4>

<p><strong>Service:</strong> changelogwriter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resetCount</code></td><td>Int!</td><td>Number of repository cursors that were reset.</td></tr>
    <tr><td><code>since</code></td><td><a href="#datetime">DateTime</a>!</td><td>The timestamp cursors were rewound to.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repository"><code>Repository</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td></td></tr>
    <tr><td><code>path</code></td><td>String!</td><td></td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td></td></tr>
    <tr><td><code>changeset</code></td><td>String</td><td></td></tr>
    <tr><td><code>lstArtifact</code></td><td><a href="#lstartifact">LstArtifact</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryauthorization"><code>RepositoryAuthorization</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<p>Authorization status for accessing repository content.
Resolved by the changeset reader using a batch check against the authorization service.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin (e.g., github.com).</td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td>Whether the user has a valid OAuth token for this origin.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorybatchchange"><code>RepositoryBatchChange</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#repositorychangeset">RepositoryChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorychangesetconnection"><code>RepositoryChangesetConnection</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<p>Paginated connection for repository changesets.</p>
<p>`completed` indicates how many repositories have finished processing:
- For BatchChange: completed always equals count (all repositories are pre-processed).
- For OrganizationRecipeRun: completed counts repository runs in a terminal state
  (regardless of success/failure), excluding canceled runs. A canceled run shows
  the completion status reached prior to cancellation.</p>
<p>Sync totals (`syncPending`, `synced`, `syncFailed`, `syncCanceled`, `syncSkipped`)
track repository sync progress during the SYNCING phase. Their sum equals `count`.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#repositorychangesetedge">RepositoryChangesetEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>completed</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>syncPending</code></td><td>Int!</td><td>Repositories not yet synced.</td></tr>
    <tr><td><code>synced</code></td><td>Int!</td><td>Repositories successfully synced.</td></tr>
    <tr><td><code>syncFailed</code></td><td>Int!</td><td>Repositories that failed to sync.</td></tr>
    <tr><td><code>syncCanceled</code></td><td>Int!</td><td>Repositories whose sync was canceled before completion.</td></tr>
    <tr><td><code>syncSkipped</code></td><td>Int!</td><td>Repositories the CLI skipped during sync (typically: no LST available).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorychangesetedge"><code>RepositoryChangesetEdge</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositorychangeset">RepositoryChangeset</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitcanceled"><code>RepositoryCommitCanceled</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Repository commit was canceled.
Use `options.__typename` to determine the specific commit type.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitconnection"><code>RepositoryCommitConnection</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#repositorycommitedge">RepositoryCommitEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>completedCount</code></td><td>Int!</td><td>Count of repository commits that have reached a terminal state (succeeded, failed, canceled, or no changes). Pair with `count` to show progress: "Completed X / Y".</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitedge"><code>RepositoryCommitEdge</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositorycommit">RepositoryCommit</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitfailed"><code>RepositoryCommitFailed</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Repository commit failed with an error.
Use `options.__typename` to determine the specific commit type.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>errorMessage</code></td><td>String!</td><td>Human-readable error message.</td></tr>
    <tr><td><code>retryCount</code></td><td>Int</td><td>Number of retry attempts made.</td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitnochanges"><code>RepositoryCommitNoChanges</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Repository commit completed but yielded no changes.
Generally occurs when applying a patch does not produce any changes to commit.
Use `options.__typename` to determine the specific commit type.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitqueued"><code>RepositoryCommitQueued</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Repository commit is queued and waiting to be processed.
Use `options.__typename` to determine the specific commit type.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>rateLimitReset</code></td><td><a href="#datetime">DateTime</a></td><td>Time when rate limit expires (if rate limited).</td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitrunning"><code>RepositoryCommitRunning</code></h4>

<p><strong>Service:</strong> changesetcommitter | <strong>Implements:</strong> <a href="#repositorycommit">RepositoryCommit</a></p>

<p>Repository commit is actively being processed.
Use `options.__typename` to determine the specific commit type.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryconnection"><code>RepositoryConnection</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#repositoryedge">RepositoryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryedge"><code>RepositoryEdge</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperuncanceled"><code>RepositoryRecipeRunCanceled</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunconnection"><code>RepositoryRecipeRunConnection</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#repositoryreciperunedge">RepositoryRecipeRunEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunedge"><code>RepositoryRecipeRunEdge</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositoryreciperun">RepositoryRecipeRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunerror"><code>RepositoryRecipeRunError</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>errorReason</code></td><td><a href="#repositoryerrorreason">RepositoryErrorReason</a></td><td></td></tr>
    <tr><td><code>message</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunfinished"><code>RepositoryRecipeRunFinished</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>timeSavings</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunnolst"><code>RepositoryRecipeRunNoLst</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunqueued"><code>RepositoryRecipeRunQueued</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
    <tr><td><code>queuedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunrunning"><code>RepositoryRecipeRunRunning</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#repositoryreciperun">RepositoryRecipeRun</a>, <a href="#repositorychangeset">RepositoryChangeset</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="reviewstatus"><code>ReviewStatus</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>approvedBy</code></td><td>[String!]</td><td></td></tr>
    <tr><td><code>reviewDecision</code></td><td><a href="#reviewdecision">ReviewDecision</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="revoketokenresult"><code>RevokeTokenResult</code></h4>

<p><strong>Service:</strong> authz</p>

<p>Result of revoking an SCM OAuth token.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>success</code></td><td>Boolean!</td><td>True if the token was revoked (or didn't exist).</td></tr>
    <tr><td><code>error</code></td><td>String</td><td>Error message if revocation failed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="s3configuration"><code>S3Configuration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
    <tr><td><code>region</code></td><td>String</td><td></td></tr>
    <tr><td><code>endpointUrl</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="scmtokeninfo"><code>ScmTokenInfo</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>created</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="searchresult"><code>SearchResult</code></h4>

<p><strong>Service:</strong> corechangeset | <strong>Implements:</strong> <a href="#marker">Marker</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>type</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="sendmessageresult"><code>SendMessageResult</code></h4>

<p><strong>Service:</strong> moddy</p>

<p>Handle returned by `createConversation` / `sendMessage`. Clients should
poll `conversation.messages(after: initialCursor)` using
`turnState.recommendedPollIntervalMs` as the cadence hint.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>conversation</code></td><td><a href="#conversation">Conversation</a>!</td><td></td></tr>
    <tr><td><code>initialCursor</code></td><td>String!</td><td></td></tr>
    <tr><td><code>turnState</code></td><td><a href="#conversationturnstate">ConversationTurnState</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="textmessage"><code>TextMessage</code></h4>

<p><strong>Service:</strong> moddy | <strong>Implements:</strong> <a href="#message">Message</a></p>

<p>A text message from either the human user or the chatbot.
Check the `user` field to distinguish sender.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>content</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>truncated</code></td><td>Boolean!</td><td>True when the LLM response was cut off by the token limit.</td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="toolinfo"><code>ToolInfo</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>arguments</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="uiconfiguration"><code>UiConfiguration</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>moreHelp</code></td><td>[<a href="#morehelplink">MoreHelpLink</a>!]</td><td></td></tr>
    <tr><td><code>loginText</code></td><td>String</td><td></td></tr>
    <tr><td><code>loginLinks</code></td><td>[<a href="#morehelplink">MoreHelpLink</a>!]</td><td></td></tr>
    <tr><td><code>cliDownloadInstructions</code></td><td><a href="#clidownloadinstructionlink">CliDownloadInstructionLink</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="user"><code>User</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>username</code></td><td>String</td><td></td></tr>
    <tr><td><code>role</code></td><td><a href="#userrole">UserRole</a></td><td></td></tr>
    <tr><td><code>lastActive</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>tokens</code></td><td>(first: Int = 100, after: String, where: <a href="#accesstokenwhereinput">AccessTokenWhereInput</a>, orderBy: [<a href="#accesstokenorderbyinput">AccessTokenOrderByInput</a>!]): <a href="#accesstokenconnection">AccessTokenConnection</a>!</td><td></td></tr>
    <tr><td><code>email</code></td><td>String!</td><td></td></tr>
    <tr><td><code>moddy</code></td><td><a href="#moddy">Moddy</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="userconnection"><code>UserConnection</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#usersedge">UsersEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="usersedge"><code>UsersEdge</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationavailable"><code>VisualizationAvailable</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#visualization">Visualization</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td>The changeset (recipe run or batch change) this visualization is available for.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationconnection"><code>VisualizationConnection</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#visualizationedge">VisualizationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationdescriptor"><code>VisualizationDescriptor</code></h4>

<p><strong>Service:</strong> changesetvisualizer</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>options</code></td><td>[<a href="#visualizationoption">VisualizationOption</a>!]!</td><td></td></tr>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>image</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationedge"><code>VisualizationEdge</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#visualization">Visualization</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationerror"><code>VisualizationError</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#visualization">Visualization</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String): <a href="#visualizationrepositoryconnection">VisualizationRepositoryConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationfinished"><code>VisualizationFinished</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#visualization">Visualization</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>duration</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
    <tr><td><code>output</code></td><td><a href="#visualizationoutput">VisualizationOutput</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String): <a href="#visualizationrepositoryconnection">VisualizationRepositoryConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationimageoutput"><code>VisualizationImageOutput</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#visualizationoutput">VisualizationOutput</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>format</code></td><td><a href="#imageformat">ImageFormat</a>!</td><td></td></tr>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationoption"><code>VisualizationOption</code></h4>

<p><strong>Service:</strong> changesetvisualizer</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a></td><td></td></tr>
    <tr><td><code>type</code></td><td>String!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String!</td><td></td></tr>
    <tr><td><code>example</code></td><td>String</td><td></td></tr>
    <tr><td><code>valid</code></td><td>[String]</td><td></td></tr>
    <tr><td><code>required</code></td><td>Boolean!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationplotlyoutput"><code>VisualizationPlotlyOutput</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#visualizationoutput">VisualizationOutput</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td>Plotly JSON data (MIME type: application/vnd.plotly.v1+json)</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationprocessing"><code>VisualizationProcessing</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#visualization">Visualization</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 100, after: String): <a href="#visualizationrepositoryconnection">VisualizationRepositoryConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationrepository"><code>VisualizationRepository</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>state</code></td><td><a href="#visualizationrepositoryrunstate">VisualizationRepositoryRunState</a>!</td><td></td></tr>
    <tr><td><code>stateMessage</code></td><td>String</td><td></td></tr>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationrepositoryconnection"><code>VisualizationRepositoryConnection</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#visualizationrepositoryedge">VisualizationRepositoryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationrepositoryedge"><code>VisualizationRepositoryEdge</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#visualizationrepository">VisualizationRepository</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="yamlrecipebundle"><code>YamlRecipeBundle</code></h4>

<p><strong>Service:</strong> changesetreader | <strong>Implements:</strong> <a href="#recipebundle">RecipeBundle</a></p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>yaml</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
    <tr><td><code>primary</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td>The primary recipe in this bundle. When specified, only this recipe is shown in marketplace categories, hiding other recipes from this bundle.</td></tr>
  </tbody>
</table>

<hr/>

<h3>Interfaces</h3>

<h4 id="auditlogsdownload"><code>AuditLogsDownload</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestaction"><code>BulkPullRequestAction</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>A bulk pull request action (approve, merge, close) that operates on potentially
multiple repositories. Use `__typename` to determine the current state.</p>
<p>Each `BulkPullRequestAction` contains individual `PullRequestAction` entries
representing the state of each repository targeted by the bulk operation.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogentry"><code>ChangelogEntry</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>A single entry in the changelog — either a commit or a pull request.
Use `__typename` to distinguish between `ChangelogCommit` and `ChangelogPullRequest`.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>title</code></td><td>String!</td><td>Commit message (for commits) or PR title (for pull requests).</td></tr>
    <tr><td><code>author</code></td><td><a href="#changeparticipant">ChangeParticipant</a>!</td><td>The author of the commit or PR.</td></tr>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td>The repository this entry belongs to.</td></tr>
    <tr><td><code>url</code></td><td>String!</td><td>URL to the commit or PR in the VCS provider.</td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td>The target branch (for PRs) or the branch committed to (for commits).</td></tr>
    <tr><td><code>updatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When this entry was last updated in the VCS provider.</td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When this entry was created in the VCS provider.</td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td>If this activity was originated by Moderne, the changeset it belongs to.</td></tr>
    <tr><td><code>buildState</code></td><td><a href="#buildstate">BuildState</a></td><td>CI status (e.g. from GitHub Actions, GitLab pipelines). Null if no CI is configured or status has not been fetched yet.</td></tr>
    <tr><td><code>diffstat</code></td><td><a href="#diffstat">DiffStat</a>!</td><td>Lines added and removed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="commitoptions"><code>CommitOptions</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatable"><code>DataTable</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>dataTable</code></td><td><a href="#datatabledescriptor">DataTableDescriptor</a>!</td><td></td></tr>
    <tr><td><code>instanceName</code></td><td>String!</td><td>A human-readable name for this data table instance, describing what it contains. For example, "Method calls matching \`java.util.List add(..)\`". Defaults to the data table's display name when not explicitly set.</td></tr>
    <tr><td><code>group</code></td><td>String</td><td>The group identifying this data table bucket. For community tables this is the group name (e.g., "architecture"). Null for ungrouped/private tables.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrun"><code>DevCenterRun</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>A DevCenter run represents the execution of a DevCenter recipe.
Use `__typename` to determine the current state.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When this DevCenter run started.</td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td>The underlying recipe run changeset.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="filechange"><code>FileChange</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<p>A change to a single file within a repository changeset.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>path</code></td><td><a href="#path">Path</a>!</td><td>Path to the file relative to repository root.</td></tr>
    <tr><td><code>beforeSourcePath</code></td><td><a href="#path">Path</a></td><td>The source path before the change (from the diff's `--- a/...` line). Null for newly created files.</td></tr>
    <tr><td><code>afterSourcePath</code></td><td><a href="#path">Path</a></td><td>The source path after the change (from the diff's `+++ b/...` line). Null for deleted files.</td></tr>
    <tr><td><code>diff</code></td><td>(markupLevel: <a href="#markuplevel">MarkupLevel</a> = ERROR, showWhitespaceOnlyChanges: Boolean = true): <a href="#patch">Patch</a></td><td>Get the diff for this file.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="marker"><code>Marker</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="message"><code>Message</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommit"><code>OrganizationCommit</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>An organization-level commit operation represents applying changes across multiple
repositories. Use `__typename` to determine the current state.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td>The user who initiated the commit.</td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options (branch, PR settings, etc.).</td></tr>
    <tr><td><code>message</code></td><td>String!</td><td>The commit message.</td></tr>
    <tr><td><code>extendedMessage</code></td><td><a href="#base64">Base64</a></td><td>Extended commit message (Base64 encoded).</td></tr>
    <tr><td><code>repositories</code></td><td>(first: Int = 50, after: String, where: <a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>, orderBy: [<a href="#repositorycommitorderbyinput">RepositoryCommitOrderByInput</a>!]): <a href="#repositorycommitconnection">RepositoryCommitConnection</a>!</td><td>Paginated results per repository.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestaction"><code>PullRequestAction</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>The state of an individual repository within a `BulkPullRequestAction`.
Use `__typename` to determine the current state.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipebundle"><code>RecipeBundle</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td>Number of top-level recipes contributed by this bundle's package. Null when the bundle has not yet been resolved into the marketplace (e.g. an installation still in progress).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipedetail"><code>RecipeDetail</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>State machine for recipe detail resolution. Querying the `detail` field on a
RecipeDescriptor triggers background resolution of the full recipe bundle.
Poll until `__typename` is `RecipeDetailFinished`.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallation"><code>RecipeInstallation</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>Common fields for all recipe installation states.
Use `__typename` to determine the current state.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorychangeset"><code>RepositoryChangeset</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td>Authorization status for accessing this repository's content. Check this before accessing file results.</td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td>File-level changes within this repository.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommit"><code>RepositoryCommit</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>A commit result for a single repository within an organization-level commit operation.
Use `__typename` to determine the current state.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitsucceeded"><code>RepositoryCommitSucceeded</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Repository commit completed successfully.
Use `__typename` to determine the specific commit type.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>resultLink</code></td><td>String</td><td>Link to the commit or pull request result.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperun"><code>RepositoryRecipeRun</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="scmconnection"><code>ScmConnection</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualization"><code>Visualization</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationoutput"><code>VisualizationOutput</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h3>Enums</h3>

<h4 id="accesstokenorderbyfield"><code>AccessTokenOrderByField</code></h4>

<p><strong>Service:</strong> authz</p>

<ul>
  <li><code>CREATED</code></li>
  <li><code>EXPIRES_AT</code></li>
</ul>

<hr/>

<h4 id="auditactiontype"><code>AuditActionType</code></h4>

<p><strong>Service:</strong> auditreader</p>

<ul>
  <li><code>CREATE</code></li>
  <li><code>READ</code></li>
  <li><code>UPDATE</code></li>
  <li><code>DELETE</code></li>
</ul>

<hr/>

<h4 id="auditlogexportformat"><code>AuditLogExportFormat</code></h4>

<p><strong>Service:</strong> auditreader</p>

<ul>
  <li><code>CEF</code></li>
  <li><code>CSV</code></li>
</ul>

<hr/>

<h4 id="auditlogorderbyfield"><code>AuditLogOrderByField</code></h4>

<p><strong>Service:</strong> auditreader</p>

<ul>
  <li><code>TIMESTAMP</code></li>
  <li><code>USER_ID</code></li>
  <li><code>TARGET</code></li>
  <li><code>ACTION</code></li>
</ul>

<hr/>

<h4 id="auditlogsdownloadorderbyfield"><code>AuditLogsDownloadOrderByField</code></h4>

<p><strong>Service:</strong> auditreader</p>

<ul>
  <li><code>STARTED_AT</code></li>
</ul>

<hr/>

<h4 id="auditoutcome"><code>AuditOutcome</code></h4>

<p><strong>Service:</strong> auditreader</p>

<ul>
  <li><code>SUCCESS</code></li>
  <li><code>FAILURE</code></li>
</ul>

<hr/>

<h4 id="buildstate"><code>BuildState</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>PENDING</code></li>
  <li><code>IN_PROGRESS</code></li>
  <li><code>FAILED</code></li>
  <li><code>SKIPPED</code></li>
  <li><code>SUCCESSFUL</code></li>
  <li><code>NOT_REQUIRED</code></li>
</ul>

<hr/>

<h4 id="bulkpullrequestactionorderbyfield"><code>BulkPullRequestActionOrderByField</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>CREATED_AT</code></li>
  <li><code>STARTED_AT</code></li>
  <li><code>FINISHED_AT</code></li>
</ul>

<hr/>

<h4 id="bulkpullrequestactionstate"><code>BulkPullRequestActionState</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>The lifecycle state of a `BulkPullRequestAction`. Matches the `__typename`
of the concrete state types (Queued, Running, Finished, Canceled, Error).</p>

<ul>
  <li><code>QUEUED</code></li>
  <li><code>RUNNING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>ERROR</code></li>
</ul>

<hr/>

<h4 id="changelogentryorderbyfield"><code>ChangelogEntryOrderByField</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>UPDATED_AT</code></li>
  <li><code>CREATED_AT</code></li>
  <li><code>TITLE</code></li>
  <li><code>REPOSITORY_PATH</code></li>
</ul>

<hr/>

<h4 id="changelogentrytype"><code>ChangelogEntryType</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>Discriminator for filtering by entry type.</p>

<ul>
  <li><code>COMMIT</code></li>
  <li><code>PULL_REQUEST</code></li>
</ul>

<hr/>

<h4 id="changelogparticipantorderbyfield"><code>ChangelogParticipantOrderByField</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>USERNAME</code></li>
  <li><code>EMAIL</code></li>
  <li><code>NAME</code></li>
</ul>

<hr/>

<h4 id="commitoption"><code>CommitOption</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<ul>
  <li><code>DIRECT</code></li>
  <li><code>BRANCH</code></li>
  <li><code>FORK</code></li>
  <li><code>PULL_REQUEST</code></li>
  <li><code>FORK_AND_PULL_REQUEST</code></li>
  <li><code>NONE</code></li>
</ul>

<hr/>

<h4 id="connectororderbyfield"><code>ConnectorOrderByField</code></h4>

<p><strong>Service:</strong> gateway</p>

<ul>
  <li><code>NICKNAME</code></li>
  <li><code>VERSION</code></li>
</ul>

<hr/>

<h4 id="connectortooltype"><code>ConnectorToolType</code></h4>

<p><strong>Service:</strong> gateway</p>

<ul>
  <li><code>GITHUB</code></li>
  <li><code>GITLAB</code></li>
  <li><code>BITBUCKET</code></li>
  <li><code>BITBUCKET_CLOUD</code></li>
  <li><code>AZURE_DEVOPS</code></li>
  <li><code>ARTIFACTORY</code></li>
  <li><code>MAVEN</code></li>
  <li><code>PYPI</code></li>
  <li><code>NPM</code></li>
  <li><code>NUGET</code></li>
  <li><code>HTTP_TOOL</code></li>
  <li><code>ORGANIZATION</code></li>
  <li><code>LLM</code></li>
  <li><code>S3</code></li>
</ul>

<hr/>

<h4 id="contributorrole"><code>ContributorRole</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>The participant's role for filtering.</p>

<ul>
  <li><code>AUTHOR</code></li>
  <li><code>ASSIGNEE</code></li>
  <li><code>CLOSED_BY</code></li>
  <li><code>REVIEWER</code></li>
</ul>

<hr/>

<h4 id="conversationorderbyfield"><code>ConversationOrderByField</code></h4>

<p><strong>Service:</strong> moddy</p>

<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>LAST_UPDATED_AT</code></li>
</ul>

<hr/>

<h4 id="conversationphase"><code>ConversationPhase</code></h4>

<p><strong>Service:</strong> moddy</p>

<ul>
  <li><code>IDLE</code></li>
  <li><code>AWAITING_LLM</code></li>
  <li><code>STREAMING_TEXT</code></li>
  <li><code>TOOL_RUNNING</code></li>
  <li><code>ERRORED</code></li>
</ul>

<hr/>

<h4 id="datatableformat"><code>DataTableFormat</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>CSV</code></li>
  <li><code>XLSX</code></li>
</ul>

<hr/>

<h4 id="datatableorderbyfield"><code>DataTableOrderByField</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>DATA_TABLE</code></li>
  <li><code>STARTED_AT</code></li>
</ul>

<hr/>

<h4 id="devcenteraggregation"><code>DevCenterAggregation</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>How DevCenter card results are aggregated across repositories.</p>

<ul>
  <li><code>PER_REPOSITORY</code></li>
  <li><code>PER_OCCURRENCE</code></li>
</ul>

<hr/>

<h4 id="devcenterrunorderbyfield"><code>DevCenterRunOrderByField</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>STATE</code></li>
</ul>

<hr/>

<h4 id="devcenterrunstate"><code>DevCenterRunState</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>Execution state of a DevCenter run.</p>

<ul>
  <li><code>RUNNING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>ERROR</code></li>
</ul>

<hr/>

<h4 id="filechangeorderbyfield"><code>FileChangeOrderByField</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>PATH</code></li>
</ul>

<hr/>

<h4 id="imageformat"><code>ImageFormat</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<ul>
  <li><code>SVG</code></li>
  <li><code>GIF</code></li>
  <li><code>JPEG</code></li>
  <li><code>PNG</code></li>
</ul>

<hr/>

<h4 id="llmprovider"><code>LlmProvider</code></h4>

<p><strong>Service:</strong> gateway</p>

<ul>
  <li><code>ANTHROPIC</code></li>
  <li><code>GEMINI</code></li>
  <li><code>MISTRAL</code></li>
  <li><code>OPEN_AI</code></li>
</ul>

<hr/>

<h4 id="markuplevel"><code>MarkupLevel</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>DEBUG</code></li>
  <li><code>INFO</code></li>
  <li><code>WARNING</code></li>
  <li><code>ERROR</code></li>
  <li><code>NONE</code></li>
</ul>

<hr/>

<h4 id="mergemethod"><code>MergeMethod</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>MERGE</code></li>
  <li><code>SQUASH</code></li>
  <li><code>REBASE</code></li>
</ul>

<hr/>

<h4 id="mergeable"><code>Mergeable</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<ul>
  <li><code>MERGEABLE</code></li>
  <li><code>BLOCKED</code></li>
  <li><code>UNKNOWN</code></li>
</ul>

<hr/>

<h4 id="messagestate"><code>MessageState</code></h4>

<p><strong>Service:</strong> moddy</p>

<ul>
  <li><code>IN_PROGRESS</code></li>
  <li><code>COMPLETED</code></li>
</ul>

<hr/>

<h4 id="organizationchangesetorderbyfield"><code>OrganizationChangesetOrderByField</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>CREATED_AT</code></li>
  <li><code>TYPE</code></li>
  <li><code>USER</code></li>
</ul>

<hr/>

<h4 id="organizationchangesettype"><code>OrganizationChangesetType</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>RECIPE_RUN</code></li>
  <li><code>BATCH_CHANGE</code></li>
</ul>

<hr/>

<h4 id="organizationcommitorderbyfield"><code>OrganizationCommitOrderByField</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<ul>
  <li><code>STARTED_AT</code></li>
</ul>

<hr/>

<h4 id="organizationorderbyfield"><code>OrganizationOrderByField</code></h4>

<p><strong>Service:</strong> organization</p>

<ul>
  <li><code>NAME</code></li>
</ul>

<hr/>

<h4 id="organizationreciperunorderbyfield"><code>OrganizationRecipeRunOrderByField</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>ENDED_AT</code></li>
  <li><code>STATE</code></li>
  <li><code>USER</code></li>
</ul>

<hr/>

<h4 id="organizationreciperunstate"><code>OrganizationRecipeRunState</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<ul>
  <li><code>QUEUED</code></li>
  <li><code>SYNCING</code></li>
  <li><code>RUNNING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>ERROR</code></li>
</ul>

<hr/>

<h4 id="profilingevent"><code>ProfilingEvent</code></h4>

<p><strong>Service:</strong> gateway</p>

<p>The primary event the Pyroscope agent samples on. async-profiler can only
collect one of these at a time as the primary event; alloc and lock
sampling run on separate channels and are always on.</p>

<ul>
  <li><code>CPU</code></li>
  <li><code>WALL</code></li>
</ul>

<hr/>

<h4 id="pullrequestactionorderbyfield"><code>PullRequestActionOrderByField</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>REPOSITORY_PATH</code></li>
  <li><code>STATE</code></li>
  <li><code>STARTED_AT</code></li>
</ul>

<hr/>

<h4 id="pullrequestactionstate"><code>PullRequestActionState</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>QUEUED</code></li>
  <li><code>IN_PROGRESS</code></li>
  <li><code>SUCCESSFUL</code></li>
  <li><code>FAILED</code></li>
  <li><code>CANCELED</code></li>
</ul>

<hr/>

<h4 id="pullrequestactiontype"><code>PullRequestActionType</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>APPROVE</code></li>
  <li><code>MERGE</code></li>
  <li><code>CLOSE</code></li>
</ul>

<hr/>

<h4 id="pullrequeststate"><code>PullRequestState</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>OPEN</code></li>
  <li><code>DRAFT</code></li>
  <li><code>CLOSED</code></li>
  <li><code>MERGED</code></li>
</ul>

<hr/>

<h4 id="recipebundleorderbyfield"><code>RecipeBundleOrderByField</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<ul>
  <li><code>PACKAGE_NAME</code></li>
  <li><code>VERSION</code></li>
  <li><code>REQUESTED_VERSION</code></li>
  <li><code>ECOSYSTEM</code></li>
</ul>

<hr/>

<h4 id="recipecategoryorderbyfield"><code>RecipeCategoryOrderByField</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<ul>
  <li><code>DISPLAY_NAME</code></li>
  <li><code>RECIPE_COUNT</code></li>
</ul>

<hr/>

<h4 id="recipeecosystem"><code>RecipeEcosystem</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<ul>
  <li><code>Maven</code></li>
  <li><code>NPM</code></li>
  <li><code>YAML</code></li>
  <li><code>Pip</code></li>
  <li><code>Nuget</code></li>
  <li><code>Go</code></li>
</ul>

<hr/>

<h4 id="recipegraphedgetype"><code>RecipeGraphEdgeType</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<ul>
  <li><code>RECIPE</code></li>
  <li><code>PRECONDITION</code></li>
  <li><code>REFERENCE</code></li>
</ul>

<hr/>

<h4 id="recipeinstallationorderbyfield"><code>RecipeInstallationOrderByField</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>STATUS</code></li>
</ul>

<hr/>

<h4 id="recipeinstallationstatus"><code>RecipeInstallationStatus</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<ul>
  <li><code>QUEUED</code></li>
  <li><code>PROCESSING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>ERROR</code></li>
</ul>

<hr/>

<h4 id="recipeorderbyfield"><code>RecipeOrderByField</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<ul>
  <li><code>ID</code></li>
  <li><code>DISPLAY_NAME</code></li>
  <li><code>RECIPE_COUNT</code></li>
  <li><code>RELEVANCE</code></li>
</ul>

<hr/>

<h4 id="reciperunpriority"><code>RecipeRunPriority</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>Priority level for recipe runs.
HIGH priority runs target small organizations (≤100 repositories).
LOW priority runs target large organizations (>100 repositories).</p>

<ul>
  <li><code>HIGH</code></li>
  <li><code>LOW</code></li>
</ul>

<hr/>

<h4 id="repositorychangesetorderbyfield"><code>RepositoryChangesetOrderByField</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>PATH</code></li>
  <li><code>ORIGIN</code></li>
  <li><code>FILES_CHANGED</code></li>
  <li><code>SYNC_STATUS</code></li>
</ul>

<hr/>

<h4 id="repositorychangesetstate"><code>RepositoryChangesetState</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Result state of a repository within a changeset.</p>

<ul>
  <li><code>QUEUED</code></li>
  <li><code>RUNNING</code></li>
  <li><code>SUCCESS</code></li>
  <li><code>ERROR</code></li>
  <li><code>NO_LST</code></li>
  <li><code>CANCELED</code></li>
</ul>

<hr/>

<h4 id="repositorycommitorderbyfield"><code>RepositoryCommitOrderByField</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<ul>
  <li><code>STARTED_AT</code></li>
</ul>

<hr/>

<h4 id="repositoryerrorreason"><code>RepositoryErrorReason</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<ul>
  <li><code>FAILED_LOAD_AST</code></li>
  <li><code>FAILED_LOAD_RECIPE</code></li>
  <li><code>TIMEOUT</code></li>
  <li><code>RECIPE_ERROR</code></li>
</ul>

<hr/>

<h4 id="repositoryorderbyfield"><code>RepositoryOrderByField</code></h4>

<p><strong>Service:</strong> organization</p>

<ul>
  <li><code>ORIGIN</code></li>
  <li><code>PATH</code></li>
  <li><code>BRANCH</code></li>
  <li><code>CHANGESET</code></li>
  <li><code>LST_ARTIFACT_PUBLISHED</code></li>
</ul>

<hr/>

<h4 id="repositoryreciperunorderbyfield"><code>RepositoryRecipeRunOrderByField</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<ul>
  <li><code>PATH</code></li>
  <li><code>ORIGIN</code></li>
  <li><code>STATE</code></li>
</ul>

<hr/>

<h4 id="repositorysyncstatus"><code>RepositorySyncStatus</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<p>Sync status of a repository within a recipe run.
Tracks whether the repository has been synced (cloned + LST downloaded)
before the recipe execution phase begins.</p>
<p>`SKIPPED` indicates the CLI elected not to sync the repository — typically
because there is no LST available to fetch — and is distinct from `FAILED`,
which indicates an actual error during the sync attempt. `CANCELED` is set
when sync was interrupted (e.g., the run was canceled before the repository's
sync completed).</p>

<ul>
  <li><code>PENDING</code></li>
  <li><code>SYNCED</code></li>
  <li><code>FAILED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>SKIPPED</code></li>
</ul>

<hr/>

<h4 id="reviewdecision"><code>ReviewDecision</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<ul>
  <li><code>APPROVED</code></li>
  <li><code>CHANGES_REQUESTED</code></li>
  <li><code>REVIEW_REQUIRED</code></li>
  <li><code>REVIEW_NOT_REQUIRED</code></li>
  <li><code>UNKNOWN</code></li>
</ul>

<hr/>

<h4 id="scmtype"><code>ScmType</code></h4>

<p><strong>Service:</strong> authz</p>

<ul>
  <li><code>GITHUB</code></li>
  <li><code>BITBUCKET</code></li>
  <li><code>BITBUCKET_CLOUD</code></li>
  <li><code>GITLAB</code></li>
  <li><code>AZURE_DEVOPS</code></li>
</ul>

<hr/>

<h4 id="sortorder"><code>SortOrder</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<ul>
  <li><code>ASC</code></li>
  <li><code>DESC</code></li>
</ul>

<hr/>

<h4 id="userorderbyfield"><code>UserOrderByField</code></h4>

<p><strong>Service:</strong> authz</p>

<ul>
  <li><code>EMAIL</code></li>
  <li><code>USERNAME</code></li>
  <li><code>ROLE</code></li>
  <li><code>LAST_ACTIVE</code></li>
</ul>

<hr/>

<h4 id="userrole"><code>UserRole</code></h4>

<p><strong>Service:</strong> authz</p>

<ul>
  <li><code>ADMIN</code></li>
  <li><code>USER</code></li>
</ul>

<hr/>

<h4 id="visualizationorderbyfield"><code>VisualizationOrderByField</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<ul>
  <li><code>VISUALIZATION</code></li>
  <li><code>STARTED_AT</code></li>
</ul>

<hr/>

<h4 id="visualizationrepositoryrunstate"><code>VisualizationRepositoryRunState</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<ul>
  <li><code>QUEUED</code></li>
  <li><code>PROCESSING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>FINISHED_EMPTY</code></li>
  <li><code>NO_LST</code></li>
  <li><code>ERROR</code></li>
</ul>

<hr/>

<h3>Input types</h3>

<h4 id="accesstokenorderbyinput"><code>AccessTokenOrderByInput</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#accesstokenorderbyfield">AccessTokenOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="accesstokenwhereinput"><code>AccessTokenWhereInput</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>description</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>created</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#accesstokenwhereinput">AccessTokenWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#accesstokenwhereinput">AccessTokenWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#accesstokenwhereinput">AccessTokenWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditactiontypefilter"><code>AuditActionTypeFilter</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#auditactiontype">AuditActionType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#auditactiontype">AuditActionType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#auditactiontype">AuditActionType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#auditactiontype">AuditActionType</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogexportformatfilter"><code>AuditLogExportFormatFilter</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#auditlogexportformat">AuditLogExportFormat</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#auditlogexportformat">AuditLogExportFormat</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#auditlogexportformat">AuditLogExportFormat</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#auditlogexportformat">AuditLogExportFormat</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogorderbyinput"><code>AuditLogOrderByInput</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#auditlogorderbyfield">AuditLogOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogwhereinput"><code>AuditLogWhereInput</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>user</code></td><td><a href="#userwhereinput">UserWhereInput</a></td><td></td></tr>
    <tr><td><code>target</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>action</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#auditactiontypefilter">AuditActionTypeFilter</a></td><td></td></tr>
    <tr><td><code>outcome</code></td><td><a href="#auditoutcomefilter">AuditOutcomeFilter</a></td><td></td></tr>
    <tr><td><code>description</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>timestamp</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#auditlogwhereinput">AuditLogWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#auditlogwhereinput">AuditLogWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#auditlogwhereinput">AuditLogWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogsdownloadorderbyinput"><code>AuditLogsDownloadOrderByInput</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#auditlogsdownloadorderbyfield">AuditLogsDownloadOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditlogsdownloadwhereinput"><code>AuditLogsDownloadWhereInput</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>format</code></td><td><a href="#auditlogexportformatfilter">AuditLogExportFormatFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="auditoutcomefilter"><code>AuditOutcomeFilter</code></h4>

<p><strong>Service:</strong> auditreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#auditoutcome">AuditOutcome</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#auditoutcome">AuditOutcome</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="booleanfilter"><code>BooleanFilter</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td>Boolean</td><td></td></tr>
    <tr><td><code>_neq</code></td><td>Boolean</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="buildstatefilter"><code>BuildStateFilter</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#buildstate">BuildState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#buildstate">BuildState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#buildstate">BuildState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#buildstate">BuildState</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionorderbyinput"><code>BulkPullRequestActionOrderByInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#bulkpullrequestactionorderbyfield">BulkPullRequestActionOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionstatefilter"><code>BulkPullRequestActionStateFilter</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="bulkpullrequestactionwhereinput"><code>BulkPullRequestActionWhereInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontypefilter">PullRequestActionTypeFilter</a></td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#bulkpullrequestactionstatefilter">BulkPullRequestActionStateFilter</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td>Filter by `startedAt`. Matches RUNNING/FINISHED/ERROR/CANCELED states that have a startedAt value; QUEUED entries (no startedAt) are excluded when a bound is supplied.</td></tr>
    <tr><td><code>user</code></td><td><a href="#userwhereinput">UserWhereInput</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#bulkpullrequestactionwhereinput">BulkPullRequestActionWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogauthorwhereinput"><code>ChangelogAuthorWhereInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>Filter by changelog author.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>email</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>username</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>role</code></td><td><a href="#contributorrole">ContributorRole</a></td><td>The role of the contributor to filter on.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogentryorderbyinput"><code>ChangelogEntryOrderByInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#changelogentryorderbyfield">ChangelogEntryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogentrytypefilter"><code>ChangelogEntryTypeFilter</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#changelogentrytype">ChangelogEntryType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#changelogentrytype">ChangelogEntryType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#changelogentrytype">ChangelogEntryType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#changelogentrytype">ChangelogEntryType</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogentrywhereinput"><code>ChangelogEntryWhereInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>Filter input for changelog entries.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>entryType</code></td><td><a href="#changelogentrytypefilter">ChangelogEntryTypeFilter</a></td><td>Filter by entry type (COMMIT or PULL_REQUEST).</td></tr>
    <tr><td><code>title</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Full-text search on title.</td></tr>
    <tr><td><code>author</code></td><td><a href="#changelogauthorwhereinput">ChangelogAuthorWhereInput</a></td><td>Filter by author.</td></tr>
    <tr><td><code>repositoryPath</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by repository path.</td></tr>
    <tr><td><code>repositoryOrigin</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by repository origin.</td></tr>
    <tr><td><code>updatedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td>Filter by last updated time.</td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td>Filter by creation time.</td></tr>
    <tr><td><code>pullRequestState</code></td><td><a href="#pullrequeststatefilter">PullRequestStateFilter</a></td><td>Filter by pull request state (only applies to PRs).</td></tr>
    <tr><td><code>buildState</code></td><td><a href="#buildstatefilter">BuildStateFilter</a></td><td>Filter by CI state.</td></tr>
    <tr><td><code>reviewDecision</code></td><td><a href="#reviewdecisionfilter">ReviewDecisionFilter</a></td><td>Filter by review decision.</td></tr>
    <tr><td><code>changesetId</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by changeset ID.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogparticipantorderbyinput"><code>ChangelogParticipantOrderByInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#changelogparticipantorderbyfield">ChangelogParticipantOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="changelogparticipantwhereinput"><code>ChangelogParticipantWhereInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>Filter input for participants.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>email</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>username</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>role</code></td><td><a href="#contributorrole">ContributorRole</a></td><td>Filter participants by role.</td></tr>
    <tr><td><code>updatedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td>Scopes participant aggregation to entries updated within this window. Defaults to last 30 days if not specified.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#changelogparticipantwhereinput">ChangelogParticipantWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="commitinput"><code>CommitInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Input for creating a commit from a changeset.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>organizationId</code></td><td>ID</td><td>Organization ID for determining available commit options.</td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td>Changeset ID (e.g., recipe run ID, batch changeset ID). Resolved via federation to an OrganizationChangeset.</td></tr>
    <tr><td><code>repositories</code></td><td>[<a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>!]</td><td>Filter which repositories and files to include. Evaluated in order - first matching rule wins for each repository. Put repo-specific rules first, global fallback rules last. If empty or not provided, all repositories and files in the changeset are included.</td></tr>
    <tr><td><code>branchName</code></td><td>String</td><td>If unset, commit to the branch that the LST was generated from.</td></tr>
    <tr><td><code>message</code></td><td>String!</td><td>Commit message.</td></tr>
    <tr><td><code>extendedMessage</code></td><td><a href="#base64">Base64</a></td><td>Extended commit message (Base64 encoded).</td></tr>
    <tr><td><code>gpgKey</code></td><td><a href="#gpginput">GpgInput</a></td><td>GPG key for signing commits.</td></tr>
    <tr><td><code>email</code></td><td>String</td><td>Email to author commit with. Verified against your emails (public and private) that are verified in your SCM provider. If left blank, your first email will be used.</td></tr>
    <tr><td><code>scmAccessTokens</code></td><td>[<a href="#scmaccesstoken">ScmAccessToken</a>!]</td><td>Optional SCM access tokens keyed by origin. When provided, these are used instead of stored OAuth tokens for the matching origin.</td></tr>
    <tr><td><code>strategy</code></td><td><a href="#commitstrategyinput">CommitStrategyInput</a>!</td><td>How to deliver the commit. Choose one strategy.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="commitstrategyinput"><code>CommitStrategyInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Commit delivery strategy. Choose one option.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>direct</code></td><td><a href="#directcommitinput">DirectCommitInput</a></td><td>Push directly to the origin remote.</td></tr>
    <tr><td><code>fork</code></td><td><a href="#forkcommitinput">ForkCommitInput</a></td><td>Push to a fork of the origin repository.</td></tr>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestcommitinput">PullRequestCommitInput</a></td><td>Create a pull request from a branch on the origin remote.</td></tr>
    <tr><td><code>forkAndPullRequest</code></td><td><a href="#forkandpullrequestcommitinput">ForkAndPullRequestCommitInput</a></td><td>Create a pull request from a branch on a fork.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="connectororderbyinput"><code>ConnectorOrderByInput</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#connectororderbyfield">ConnectorOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="connectortooltypefilter"><code>ConnectorToolTypeFilter</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#connectortooltype">ConnectorToolType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#connectortooltype">ConnectorToolType</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="connectorwhereinput"><code>ConnectorWhereInput</code></h4>

<p><strong>Service:</strong> gateway</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>nickname</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>version</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>toolType</code></td><td><a href="#connectortooltypefilter">ConnectorToolTypeFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#connectorwhereinput">ConnectorWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#connectorwhereinput">ConnectorWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#connectorwhereinput">ConnectorWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="conversationorderbyinput"><code>ConversationOrderByInput</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#conversationorderbyfield">ConversationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="conversationwhereinput"><code>ConversationWhereInput</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#conversationwhereinput">ConversationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#conversationwhereinput">ConversationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#conversationwhereinput">ConversationWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="createconversationinput"><code>CreateConversationInput</code></h4>

<p><strong>Service:</strong> moddy</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>organizationId</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="createuserorganizationinput"><code>CreateUserOrganizationInput</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td>The name of the organization.</td></tr>
    <tr><td><code>repositories</code></td><td>[<a href="#repositoryinput">RepositoryInput</a>!]</td><td>Repositories to include in the organization.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatableformatfilter"><code>DataTableFormatFilter</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#datatableformat">DataTableFormat</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#datatableformat">DataTableFormat</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#datatableformat">DataTableFormat</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#datatableformat">DataTableFormat</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatableorderbyinput"><code>DataTableOrderByInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#datatableorderbyfield">DataTableOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datatablewhereinput"><code>DataTableWhereInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>dataTable</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>group</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>format</code></td><td><a href="#datatableformatfilter">DataTableFormatFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#datatablewhereinput">DataTableWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#datatablewhereinput">DataTableWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#datatablewhereinput">DataTableWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="datetimefilter"><code>DateTimeFilter</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>_gt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>_gte</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>_lt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>_lte</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunorderbyinput"><code>DevCenterRunOrderByInput</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#devcenterrunorderbyfield">DevCenterRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunstatefilter"><code>DevCenterRunStateFilter</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#devcenterrunstate">DevCenterRunState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#devcenterrunstate">DevCenterRunState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#devcenterrunstate">DevCenterRunState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#devcenterrunstate">DevCenterRunState</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="devcenterrunwhereinput"><code>DevCenterRunWhereInput</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<p>Filter input for DevCenter run queries.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td>Filter by run ID. Use `where: &#123; id: &#123; _eq: "run-id" &#125; &#125;` to get a specific run.</td></tr>
    <tr><td><code>state</code></td><td><a href="#devcenterrunstatefilter">DevCenterRunStateFilter</a></td><td>Filter by run state.</td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td>Filter by start time.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>!]</td><td>Logical AND - all conditions must match.</td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>!]</td><td>Logical OR - at least one condition must match.</td></tr>
    <tr><td><code>_not</code></td><td><a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a></td><td>Logical NOT - negates the condition.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="directcommitinput"><code>DirectCommitInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Direct commit to origin. No additional options required.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_empty</code></td><td>Boolean</td><td>Placeholder field. Direct commits require no additional configuration.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="exchangeauthorizationcodeinput"><code>ExchangeAuthorizationCodeInput</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>authorizationId</code></td><td>ID!</td><td>The authorization ID returned from initiateAuthorization or from NeedsAuthorization.</td></tr>
    <tr><td><code>code</code></td><td>String!</td><td>Authorization code from the OAuth callback.</td></tr>
    <tr><td><code>redirectUri</code></td><td>String!</td><td>The redirect URI used in the authorization request. Note: This field is deprecated - the server uses the stored redirect URI from the authorization to ensure an exact match.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="filechangeorderbyinput"><code>FileChangeOrderByInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#filechangeorderbyfield">FileChangeOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="filechangewhereinput"><code>FileChangeWhereInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Filter for file changes.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>path</code></td><td><a href="#pathfilter">PathFilter</a></td><td>Filter by file path using glob patterns.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#filechangewhereinput">FileChangeWhereInput</a>!]</td><td>Logical AND - all conditions must match.</td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#filechangewhereinput">FileChangeWhereInput</a>!]</td><td>Logical OR - at least one condition must match.</td></tr>
    <tr><td><code>_not</code></td><td><a href="#filechangewhereinput">FileChangeWhereInput</a></td><td>Logical NOT - negates the condition.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="forkandpullrequestcommitinput"><code>ForkAndPullRequestCommitInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Create a pull request from a branch on a fork.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>organization</code></td><td>String</td><td>Organization to create the fork in. If unset, creates in user's personal account.</td></tr>
    <tr><td><code>prefixOrganizationName</code></td><td>Boolean</td><td>Prefix the fork name with the origin organization to avoid name collisions.</td></tr>
    <tr><td><code>title</code></td><td>String</td><td>Pull request title. If unset, uses the commit message.</td></tr>
    <tr><td><code>body</code></td><td><a href="#base64">Base64</a></td><td>Pull request body (Base64 encoded).</td></tr>
    <tr><td><code>draft</code></td><td>Boolean</td><td>Create as a draft pull request.</td></tr>
    <tr><td><code>maintainerCanModify</code></td><td>Boolean</td><td>GitHub only: allow maintainers to edit the pull request.</td></tr>
    <tr><td><code>autoMergeMethod</code></td><td><a href="#mergemethod">MergeMethod</a></td><td>Auto-merge method after checks pass. Null means no auto-merge. Best effort - silently ignored if not supported by the repository.</td></tr>
    <tr><td><code>recreateClosedPullRequest</code></td><td>Boolean</td><td>Recreate pull request if it was previously closed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="forkcommitinput"><code>ForkCommitInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Commit to a fork of the origin repository.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>organization</code></td><td>String</td><td>Organization to create the fork in. If unset, creates in user's personal account.</td></tr>
    <tr><td><code>prefixOrganizationName</code></td><td>Boolean</td><td>Prefix the fork name with the origin organization to avoid name collisions. Example: openrewrite/rewrite -> myuser/openrewrite__rewrite</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="gorecipebundleinput"><code>GoRecipeBundleInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="gpginput"><code>GpgInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>privateKey</code></td><td>String!</td><td></td></tr>
    <tr><td><code>publicKey</code></td><td>String!</td><td></td></tr>
    <tr><td><code>passphrase</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="idfilter"><code>IDFilter</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td>ID</td><td></td></tr>
    <tr><td><code>_neq</code></td><td>ID</td><td></td></tr>
    <tr><td><code>_in</code></td><td>[ID!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[ID!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="initiateauthorizationinput"><code>InitiateAuthorizationInput</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin to authorize (e.g., github.com, gitlab.com).</td></tr>
    <tr><td><code>redirectUri</code></td><td>String!</td><td>The redirect URI where the VCS will send the callback. Must match an allowed redirect URI in the OAuth app configuration.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="intfilter"><code>IntFilter</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td>Int</td><td></td></tr>
    <tr><td><code>_neq</code></td><td>Int</td><td></td></tr>
    <tr><td><code>_gt</code></td><td>Int</td><td></td></tr>
    <tr><td><code>_gte</code></td><td>Int</td><td></td></tr>
    <tr><td><code>_lt</code></td><td>Int</td><td></td></tr>
    <tr><td><code>_lte</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="lstartifactwhereinput"><code>LstArtifactWhereInput</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>published</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>available</code></td><td><a href="#booleanfilter">BooleanFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#lstartifactwhereinput">LstArtifactWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#lstartifactwhereinput">LstArtifactWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#lstartifactwhereinput">LstArtifactWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="mavenrecipebundleinput"><code>MavenRecipeBundleInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>groupId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>artifactId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="npmrecipebundleinput"><code>NpmRecipeBundleInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="nugetrecipebundleinput"><code>NugetRecipeBundleInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationchangesetorderbyinput"><code>OrganizationChangesetOrderByInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationchangesetorderbyfield">OrganizationChangesetOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationchangesettypefilter"><code>OrganizationChangesetTypeFilter</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#organizationchangesettype">OrganizationChangesetType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#organizationchangesettype">OrganizationChangesetType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#organizationchangesettype">OrganizationChangesetType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#organizationchangesettype">OrganizationChangesetType</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationchangesetwhereinput"><code>OrganizationChangesetWhereInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>type</code></td><td><a href="#organizationchangesettypefilter">OrganizationChangesetTypeFilter</a></td><td></td></tr>
    <tr><td><code>createdAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#organizationchangesetwhereinput">OrganizationChangesetWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitorderbyinput"><code>OrganizationCommitOrderByInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationcommitorderbyfield">OrganizationCommitOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationcommitwhereinput"><code>OrganizationCommitWhereInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Filter input for organization-level commit queries.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td>Filter by commit ID.</td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td>Filter by when the commit started.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>!]</td><td>Logical AND - all conditions must match.</td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a>!]</td><td>Logical OR - at least one condition must match.</td></tr>
    <tr><td><code>_not</code></td><td><a href="#organizationcommitwhereinput">OrganizationCommitWhereInput</a></td><td>Logical NOT - negates the condition.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationorderbyinput"><code>OrganizationOrderByInput</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationorderbyfield">OrganizationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunorderbyinput"><code>OrganizationRecipeRunOrderByInput</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationreciperunorderbyfield">OrganizationRecipeRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunstatefilter"><code>OrganizationRecipeRunStateFilter</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#organizationreciperunstate">OrganizationRecipeRunState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#organizationreciperunstate">OrganizationRecipeRunState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#organizationreciperunstate">OrganizationRecipeRunState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#organizationreciperunstate">OrganizationRecipeRunState</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationreciperunwhereinput"><code>OrganizationRecipeRunWhereInput</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#organizationreciperunstatefilter">OrganizationRecipeRunStateFilter</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#organizationreciperunwhereinput">OrganizationRecipeRunWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#organizationreciperunwhereinput">OrganizationRecipeRunWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#organizationreciperunwhereinput">OrganizationRecipeRunWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="organizationwhereinput"><code>OrganizationWhereInput</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>depth</code></td><td><a href="#intfilter">IntFilter</a></td><td>Filter by depth in the organization hierarchy. The root organization ("_root") is depth 0, its direct children are depth 1, etc.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#organizationwhereinput">OrganizationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#organizationwhereinput">OrganizationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#organizationwhereinput">OrganizationWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pathfilter"><code>PathFilter</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<p>Filter for file paths using glob patterns.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#path">Path</a></td><td>Exact path match.</td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#path">Path</a>!]</td><td>Match any of the exact paths.</td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#path">Path</a>!]</td><td>Exclude any of the exact paths.</td></tr>
    <tr><td><code>_glob</code></td><td>String</td><td>Glob pattern match. Examples: **\/*.java, src/main/**</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="piprecipebundleinput"><code>PipRecipeBundleInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionorderbyinput"><code>PullRequestActionOrderByInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#pullrequestactionorderbyfield">PullRequestActionOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionstatefilter"><code>PullRequestActionStateFilter</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#pullrequestactionstate">PullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#pullrequestactionstate">PullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#pullrequestactionstate">PullRequestActionState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#pullrequestactionstate">PullRequestActionState</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactiontypefilter"><code>PullRequestActionTypeFilter</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#pullrequestactiontype">PullRequestActionType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#pullrequestactiontype">PullRequestActionType</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestactionwhereinput"><code>PullRequestActionWhereInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>state</code></td><td><a href="#pullrequestactionstatefilter">PullRequestActionStateFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestcommitinput"><code>PullRequestCommitInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Create a pull request from a branch on the origin remote.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>title</code></td><td>String</td><td>Pull request title. If unset, uses the commit message.</td></tr>
    <tr><td><code>body</code></td><td><a href="#base64">Base64</a></td><td>Pull request body (Base64 encoded).</td></tr>
    <tr><td><code>draft</code></td><td>Boolean</td><td>Create as a draft pull request.</td></tr>
    <tr><td><code>autoMergeMethod</code></td><td><a href="#mergemethod">MergeMethod</a></td><td>Auto-merge method after checks pass. Null means no auto-merge. Best effort - silently ignored if not supported by the repository.</td></tr>
    <tr><td><code>recreateClosedPullRequest</code></td><td>Boolean</td><td>Recreate pull request if it was previously closed.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestinput"><code>PullRequestInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repositoryinput">RepositoryInput</a>!</td><td></td></tr>
    <tr><td><code>number</code></td><td>Int!</td><td>Pull request number.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestselectioninput"><code>PullRequestSelectionInput</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>Selects pull requests for a bulk action.</p>
<p>The `where` filter defines a base set of matching PRs. The optional `pullRequests`
modifier can include or exclude specific PRs from that base set.</p>
<p>Examples:
- Filter-only: `&#123; where: &#123; ... &#125; &#125;` — all matching PRs
- Explicit: `&#123; pullRequests: &#123; include: [...] &#125; &#125;` — exactly those PRs
- Filter + exclusions: `&#123; where: &#123; ... &#125;, pullRequests: &#123; exclude: [...] &#125; &#125;` — matching minus excluded
- Filter + additions: `&#123; where: &#123; ... &#125;, pullRequests: &#123; include: [...] &#125; &#125;` — matching plus included</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>where</code></td><td><a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a></td><td>Filter for the base set of PRs. Omit to start with an empty set.</td></tr>
    <tr><td><code>pullRequests</code></td><td><a href="#pullrequestselectionmodifier">PullRequestSelectionModifier</a></td><td>Modify the base set by including or excluding specific PRs.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequestselectionmodifier"><code>PullRequestSelectionModifier</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<p>Modifies a PR selection by either including or excluding specific PRs.
Exactly one field must be set.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>include</code></td><td>[<a href="#pullrequestinput">PullRequestInput</a>!]</td><td>Add these PRs to the base set.</td></tr>
    <tr><td><code>exclude</code></td><td>[<a href="#pullrequestinput">PullRequestInput</a>!]</td><td>Remove these PRs from the base set.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="pullrequeststatefilter"><code>PullRequestStateFilter</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#pullrequeststate">PullRequestState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#pullrequeststate">PullRequestState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#pullrequeststate">PullRequestState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#pullrequeststate">PullRequestState</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipebundleinput"><code>RecipeBundleInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>maven</code></td><td><a href="#mavenrecipebundleinput">MavenRecipeBundleInput</a></td><td></td></tr>
    <tr><td><code>npm</code></td><td><a href="#npmrecipebundleinput">NpmRecipeBundleInput</a></td><td></td></tr>
    <tr><td><code>nuget</code></td><td><a href="#nugetrecipebundleinput">NugetRecipeBundleInput</a></td><td></td></tr>
    <tr><td><code>yaml</code></td><td><a href="#yamlrecipebundleinput">YamlRecipeBundleInput</a></td><td></td></tr>
    <tr><td><code>pip</code></td><td><a href="#piprecipebundleinput">PipRecipeBundleInput</a></td><td></td></tr>
    <tr><td><code>go</code></td><td><a href="#gorecipebundleinput">GoRecipeBundleInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipebundleorderbyinput"><code>RecipeBundleOrderByInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipebundleorderbyfield">RecipeBundleOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipebundlewhereinput"><code>RecipeBundleWhereInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>Filter input for RecipeBundle queries.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by package name (e.g., "org.openrewrite:rewrite-java").</td></tr>
    <tr><td><code>version</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by resolved version.</td></tr>
    <tr><td><code>requestedVersion</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by requested version (the version requested before resolution).</td></tr>
    <tr><td><code>ecosystem</code></td><td><a href="#recipeecosystemfilter">RecipeEcosystemFilter</a></td><td>Filter by ecosystem.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#recipebundlewhereinput">RecipeBundleWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#recipebundlewhereinput">RecipeBundleWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#recipebundlewhereinput">RecipeBundleWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipecategoryorderbyinput"><code>RecipeCategoryOrderByInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipecategoryorderbyfield">RecipeCategoryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipecategorywhereinput"><code>RecipeCategoryWhereInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>Filter input for RecipeCategory queries.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td>Filter by category ID.</td></tr>
    <tr><td><code>parentId</code></td><td><a href="#idfilter">IDFilter</a></td><td>Filter by parent category ID. Use null to find root categories.</td></tr>
    <tr><td><code>displayName</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by display name.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeecosystemfilter"><code>RecipeEcosystemFilter</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#recipeecosystem">RecipeEcosystem</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#recipeecosystem">RecipeEcosystem</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#recipeecosystem">RecipeEcosystem</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#recipeecosystem">RecipeEcosystem</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinput"><code>RecipeInput</code></h4>

<p><strong>Service:</strong> recipeworker</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>Fully-qualified recipe ID. Example: `org.openrewrite.java.search.FindMethods`</td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptioninput">RecipeOptionInput</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationorderbyinput"><code>RecipeInstallationOrderByInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipeinstallationorderbyfield">RecipeInstallationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationstatusfilter"><code>RecipeInstallationStatusFilter</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#recipeinstallationstatus">RecipeInstallationStatus</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#recipeinstallationstatus">RecipeInstallationStatus</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#recipeinstallationstatus">RecipeInstallationStatus</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#recipeinstallationstatus">RecipeInstallationStatus</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeinstallationwhereinput"><code>RecipeInstallationWhereInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>status</code></td><td><a href="#recipeinstallationstatusfilter">RecipeInstallationStatusFilter</a></td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetimefilter">DateTimeFilter</a></td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#userwhereinput">UserWhereInput</a></td><td></td></tr>
    <tr><td><code>organization</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundlewhereinput">RecipeBundleWhereInput</a></td><td>Filter by bundle properties (packageName, ecosystem, version, etc.).</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeoptioninput"><code>RecipeOptionInput</code></h4>

<p><strong>Service:</strong> recipeworker</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td>Option name. Example: `methodPattern`</td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td>Option value. Example: `java.util.List add(..)`</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipeorderbyinput"><code>RecipeOrderByInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipeorderbyfield">RecipeOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="recipewhereinput"><code>RecipeWhereInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<p>Filter input for Recipe queries.
Use `query` for semantic search, or use field filters for exact matching.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>query</code></td><td>String</td><td>Semantic search query - searches recipe names, descriptions, and content.</td></tr>
    <tr><td><code>id</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by recipe ID (fully qualified recipe name).</td></tr>
    <tr><td><code>displayName</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by display name.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#recipewhereinput">RecipeWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#recipewhereinput">RecipeWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#recipewhereinput">RecipeWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorychangesetorderbyinput"><code>RepositoryChangesetOrderByInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositorychangesetorderbyfield">RepositoryChangesetOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorychangesetstatefilter"><code>RepositoryChangesetStateFilter</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#repositorychangesetstate">RepositoryChangesetState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#repositorychangesetstate">RepositoryChangesetState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#repositorychangesetstate">RepositoryChangesetState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#repositorychangesetstate">RepositoryChangesetState</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorychangesetwhereinput"><code>RepositoryChangesetWhereInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Filter for repository changesets.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>path</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by repository path.</td></tr>
    <tr><td><code>origin</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by repository origin.</td></tr>
    <tr><td><code>branch</code></td><td><a href="#stringfilter">StringFilter</a></td><td>Filter by repository branch.</td></tr>
    <tr><td><code>files</code></td><td><a href="#filechangewhereinput">FileChangeWhereInput</a></td><td>Filter files within matching repositories. Useful for filtering to specific file patterns (e.g., all build.gradle.kts files).</td></tr>
    <tr><td><code>onlyWithResults</code></td><td>Boolean</td><td>Only return repositories with results (filesWithResults > 0).</td></tr>
    <tr><td><code>state</code></td><td><a href="#repositorychangesetstatefilter">RepositoryChangesetStateFilter</a></td><td>Filter by repository result state.</td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>!]</td><td>Logical AND - all conditions must match.</td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a>!]</td><td>Logical OR - at least one condition must match.</td></tr>
    <tr><td><code>_not</code></td><td><a href="#repositorychangesetwhereinput">RepositoryChangesetWhereInput</a></td><td>Logical NOT - negates the condition.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitorderbyinput"><code>RepositoryCommitOrderByInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositorycommitorderbyfield">RepositoryCommitOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorycommitwhereinput"><code>RepositoryCommitWhereInput</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>Filter input for repository-level commit queries.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_and</code></td><td>[<a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryinput"><code>RepositoryInput</code></h4>

<p><strong>Service:</strong> corecommitter</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td></td></tr>
    <tr><td><code>path</code></td><td>String!</td><td></td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryorderbyinput"><code>RepositoryOrderByInput</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositoryorderbyfield">RepositoryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunorderbyinput"><code>RepositoryRecipeRunOrderByInput</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositoryreciperunorderbyfield">RepositoryRecipeRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositoryreciperunwhereinput"><code>RepositoryRecipeRunWhereInput</code></h4>

<p><strong>Service:</strong> changesetreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>path</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>origin</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#repositoryreciperunwhereinput">RepositoryRecipeRunWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#repositoryreciperunwhereinput">RepositoryRecipeRunWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#repositoryreciperunwhereinput">RepositoryRecipeRunWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="repositorywhereinput"><code>RepositoryWhereInput</code></h4>

<p><strong>Service:</strong> organization</p>

<p>Filter input for Repository queries using typed field filters.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>path</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>branch</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>changeset</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>lstArtifact</code></td><td><a href="#lstartifactwhereinput">LstArtifactWhereInput</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#repositorywhereinput">RepositoryWhereInput</a>!]</td><td>Logical AND - all conditions must match</td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#repositorywhereinput">RepositoryWhereInput</a>!]</td><td>Logical OR - at least one condition must match</td></tr>
    <tr><td><code>_not</code></td><td><a href="#repositorywhereinput">RepositoryWhereInput</a></td><td>Logical NOT - negates the condition</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="reviewdecisionfilter"><code>ReviewDecisionFilter</code></h4>

<p><strong>Service:</strong> changelogreader</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#reviewdecision">ReviewDecision</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#reviewdecision">ReviewDecision</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#reviewdecision">ReviewDecision</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#reviewdecision">ReviewDecision</a>!]</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="revokescmtokeninput"><code>RevokeScmTokenInput</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin to revoke the token for (e.g., github.com, gitlab.com).</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="rundevcenterinput"><code>RunDevCenterInput</code></h4>

<p><strong>Service:</strong> recipeworker</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>organizationId</code></td><td>ID!</td><td>The organization to run DevCenter for.</td></tr>
    <tr><td><code>recipeId</code></td><td>ID!</td><td>The DevCenter recipe to run.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="runrecipeinput"><code>RunRecipeInput</code></h4>

<p><strong>Service:</strong> recipeworker</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>recipe</code></td><td><a href="#recipeinput">RecipeInput</a>!</td><td>The recipe to run with any configured options.</td></tr>
    <tr><td><code>organizationId</code></td><td>ID!</td><td>Run against all repositories in this organization.</td></tr>
    <tr><td><code>parentId</code></td><td>ID</td><td>Optional parent changeset ID this recipe run is derived from.</td></tr>
    <tr><td><code>excludeFiles</code></td><td>[String!]</td><td>Exclude files matching these patterns.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="scmaccesstoken"><code>ScmAccessToken</code></h4>

<p><strong>Service:</strong> changesetcommitter</p>

<p>An access token for a specific SCM origin. When provided on a commit mutation,
these tokens are preferred over stored OAuth tokens.</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>value</code></td><td>String!</td><td></td></tr>
    <tr><td><code>origin</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="stringfilter"><code>StringFilter</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td>String</td><td></td></tr>
    <tr><td><code>_neq</code></td><td>String</td><td></td></tr>
    <tr><td><code>_in</code></td><td>[String!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[String!]</td><td></td></tr>
    <tr><td><code>_contains</code></td><td>String</td><td></td></tr>
    <tr><td><code>_startsWith</code></td><td>String</td><td></td></tr>
    <tr><td><code>_endsWith</code></td><td>String</td><td></td></tr>
    <tr><td><code>_icontains</code></td><td>String</td><td>Case-insensitive contains</td></tr>
    <tr><td><code>_isNull</code></td><td>Boolean</td><td>True to match null values, false to match non-null values</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="updateuserorganizationinput"><code>UpdateUserOrganizationInput</code></h4>

<p><strong>Service:</strong> organization</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>The ID of the organization to update.</td></tr>
    <tr><td><code>name</code></td><td>String</td><td>The new name for the organization.</td></tr>
    <tr><td><code>repositories</code></td><td>[<a href="#repositoryinput">RepositoryInput</a>!]</td><td>Repositories to include in the organization. If provided, replaces the current list.</td></tr>
  </tbody>
</table>

<hr/>

<h4 id="userorderbyinput"><code>UserOrderByInput</code></h4>

<p><strong>Service:</strong> authz</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#userorderbyfield">UserOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="userwhereinput"><code>UserWhereInput</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>email</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#userwhereinput">UserWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#userwhereinput">UserWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#userwhereinput">UserWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationoptioninput"><code>VisualizationOptionInput</code></h4>

<p><strong>Service:</strong> changesetvisualizer</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationorderbyinput"><code>VisualizationOrderByInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#visualizationorderbyfield">VisualizationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="visualizationwhereinput"><code>VisualizationWhereInput</code></h4>

<p><strong>Service:</strong> corechangeset</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td><a href="#idfilter">IDFilter</a></td><td></td></tr>
    <tr><td><code>visualization</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#visualizationwhereinput">VisualizationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#visualizationwhereinput">VisualizationWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#visualizationwhereinput">VisualizationWhereInput</a></td><td></td></tr>
  </tbody>
</table>

<hr/>

<h4 id="yamlrecipebundleinput"><code>YamlRecipeBundleInput</code></h4>

<p><strong>Service:</strong> recipemarketplace</p>

<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>yaml</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
    <tr><td><code>primary</code></td><td>ID</td><td>The ID of the primary recipe in this bundle. When specified, only this recipe will be shown in the marketplace categories, hiding other recipes from this bundle. This is used for the Moderne Builder feature where users build complex composite recipes and we don't want to expose intermediate recipes in the marketplace.</td></tr>
  </tbody>
</table>

<hr/>

<h3>Unions</h3>

<h4 id="connectortool"><code>ConnectorTool</code></h4>

<p><strong>Service:</strong> gateway</p>

<p>= <a href="#githubconfiguration">GithubConfiguration</a> | <a href="#gitlabconfiguration">GitLabConfiguration</a> | <a href="#bitbucketconfiguration">BitbucketConfiguration</a> | <a href="#bitbucketcloudconfiguration">BitbucketCloudConfiguration</a> | <a href="#azuredevopsconfiguration">AzureDevOpsConfiguration</a> | <a href="#artifactoryconfiguration">ArtifactoryConfiguration</a> | <a href="#mavenconfiguration">MavenConfiguration</a> | <a href="#pypiconfiguration">PypiConfiguration</a> | <a href="#npmconfiguration">NpmConfiguration</a> | <a href="#nugetconfiguration">NugetConfiguration</a> | <a href="#generichttptoolconfiguration">GenericHttpToolConfiguration</a> | <a href="#organizationconfiguration">OrganizationConfiguration</a> | <a href="#llmconfiguration">LlmConfiguration</a> | <a href="#s3configuration">S3Configuration</a></p>

<hr/>

<h3>Scalars</h3>

<h4 id="base64"><code>Base64</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<p>`Base64` represents a base64 encoded string.
In the browser, `btoa` encodes ASCII strings to Base64.</p>

<hr/>

<h4 id="date"><code>Date</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<hr/>

<h4 id="datetime"><code>DateTime</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<hr/>

<h4 id="duration"><code>Duration</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<hr/>

<h4 id="json"><code>JSON</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<hr/>

<h4 id="long"><code>Long</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<hr/>

<h4 id="markdown"><code>Markdown</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<p>Contents may contain Markdown, HTML, or other text and should be passed through a Markdown parser by consumers</p>

<hr/>

<h4 id="object"><code>Object</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<hr/>

<h4 id="path"><code>Path</code></h4>

<p><strong>Service:</strong> coregraphql</p>

<p>A file path relative to repository root (e.g., "src/main/java/Foo.java").</p>

<hr/>

