---
sidebar_label: GraphQL API reference
description: Complete reference for the Moderne GraphQL API, including all queries, mutations, subscriptions, and types.
hide_title: true
---

<style>{`
.gql-card{border:1px solid var(--ifm-color-emphasis-300);border-radius:6px;padding:12px 14px;margin-bottom:12px;background:var(--ifm-background-surface-color)}
.gql-hdr{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px}
.gql-name{font-family:var(--ifm-code-font-family);font-size:15px;font-weight:700;color:var(--ifm-color-content)}
.gql-svc{font-size:11px;padding:2px 7px;border-radius:20px;background:var(--ifm-color-emphasis-200);color:var(--ifm-color-content-secondary);border:1px solid var(--ifm-color-emphasis-300)}
.gql-ret{font-family:var(--ifm-code-font-family);font-size:13px;color:var(--ifm-color-content-secondary);margin:0 0 4px}
.gql-args{font-family:var(--ifm-code-font-family);font-size:12px;color:var(--ifm-color-content-secondary);opacity:.7;margin:0 0 6px}
.gql-impl{font-size:11px;padding:2px 7px;border-radius:20px;background:var(--ifm-color-emphasis-200);color:var(--ifm-color-primary);border:1px solid var(--ifm-color-emphasis-300)}
`}</style>

<h1>GraphQL API reference</h1>

<p><em>This page is auto-generated from the Moderne GraphQL schema. Do not edit manually.</em></p>

## Queries

<div id="auditLogs" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">auditLogs</span>
<span className="gql-svc">auditreader</span>
</div>
<div className="gql-ret">: <a href="#auditlogconnection">AuditLogConnection</a>!</div>
<div className="gql-args">(first: Int = 100, after: String, where: <a href="#auditlogwhereinput">AuditLogWhereInput</a>, orderBy: [<a href="#auditlogorderbyinput">AuditLogOrderByInput</a>!])</div>
<p>Query audit log events with pagination and filtering.</p>
</div>

<div id="auditLogsDownloads" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">auditLogsDownloads</span>
<span className="gql-svc">auditreader</span>
</div>
<div className="gql-ret">: <a href="#auditlogsdownloadconnection">AuditLogsDownloadConnection</a>!</div>
<div className="gql-args">(first: Int = 50, after: String, where: <a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>, orderBy: [<a href="#auditlogsdownloadorderbyinput">AuditLogsDownloadOrderByInput</a>!])</div>
<p>Query audit log downloads with pagination and filtering. Use where: &#123; id: &#123; _eq: "..." &#125; &#125; to poll a specific download.</p>
</div>

<div id="bulkPullRequestAction" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">bulkPullRequestAction</span>
<span className="gql-svc">changelogreader</span>
</div>
<div className="gql-ret">: <a href="#bulkpullrequestaction">BulkPullRequestAction</a></div>
<div className="gql-args">(id: ID!)</div>
<p>Get a bulk pull request action by ID to poll for progress.</p>
</div>

<div id="capabilities" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">capabilities</span>
<span className="gql-svc">gateway</span>
</div>
<div className="gql-ret">: <a href="#platformcapabilities">PlatformCapabilities</a>!</div>
<p>Returns which optional platform features are enabled in this deployment. Each field defaults to false and is overridden to true by the corresponding optional service when it is present in the supergraph composition.</p>
</div>

<div id="codeSearch" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">codeSearch</span>
<span className="gql-svc">code-search</span>
</div>
<div className="gql-ret">: <a href="#codesearchresultconnection">CodeSearchResultConnection</a>!</div>
<div className="gql-args">(repositoryId: String!, query: String!, first: Int = 100, after: String)</div>
<p>Search source code across artifact repositories. Searches the given repository and all its descendants in the hierarchy. Results are grouped by artifact (groupId:artifactId) with file-level matches.</p>
</div>

<div id="connectors" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">connectors</span>
<span className="gql-svc">gateway</span>
</div>
<div className="gql-ret">: <a href="#connectorconnection">ConnectorConnection</a>!</div>
<div className="gql-args">(first: Int = 100, after: String, where: <a href="#connectorwhereinput">ConnectorWhereInput</a>, orderBy: [<a href="#connectororderbyinput">ConnectorOrderByInput</a>!])</div>
</div>

<div id="conversation" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">conversation</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: <a href="#conversation">Conversation</a></div>
<div className="gql-args">(conversationId: ID!)</div>
<p>Look up a single conversation by id. Returns null when no conversation matches or the caller does not have access. Restores the v1 query the moderne-ui client already references.</p>
</div>

<div id="currentUser" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">currentUser</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: <a href="#user">User</a>!</div>
<p>Returns the currently authenticated user.</p>
</div>

<div id="devCenterRecipes" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">devCenterRecipes</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<div className="gql-ret">: [<a href="#recipedescriptor">RecipeDescriptor</a>!]!</div>
<p>Get available DevCenter recipes for configuration.</p>
</div>

<div id="license" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">license</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: <a href="#license">License</a>!</div>
<p>Request a new license lease key</p>
</div>

<div id="organization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">organization</span>
<span className="gql-svc">organization</span>
</div>
<div className="gql-ret">: <a href="#organization">Organization</a>!</div>
<div className="gql-args">(id: ID!)</div>
</div>

<div id="organizations" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">organizations</span>
<span className="gql-svc">organization</span>
</div>
<div className="gql-ret">: <a href="#organizationconnection">OrganizationConnection</a>!</div>
<div className="gql-args">(first: Int = 100, after: String, where: <a href="#organizationwhereinput">OrganizationWhereInput</a>, orderBy: [<a href="#organizationorderbyinput">OrganizationOrderByInput</a>!])</div>
</div>

<div id="scmConnections" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">scmConnections</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: [<a href="#scmconnection">ScmConnection</a>!]!</div>
<p>Returns connections for all SCM providers.</p>
</div>

<div id="users" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">users</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: <a href="#userconnection">UserConnection</a>!</div>
<div className="gql-args">(first: Int = 100, after: String, where: <a href="#userwhereinput">UserWhereInput</a>, orderBy: [<a href="#userorderbyinput">UserOrderByInput</a>!])</div>
<p>Returns users with option to filter by role.</p>
</div>

<div id="verifyToken" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">verifyToken</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<div className="gql-ret">: String</div>
<div className="gql-args">(origin: String!, scmType: <a href="#scmtype">ScmType</a>!)</div>
</div>

## Mutations

<div id="approvePullRequests" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">approvePullRequests</span>
<span className="gql-svc">changelogreader</span>
</div>
<div className="gql-ret">: <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</div>
<div className="gql-args">(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!)</div>
<p>Approve pull requests in bulk. Returns the queued action for polling.</p>
</div>

<div id="cancelBulkPullRequestAction" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">cancelBulkPullRequestAction</span>
<span className="gql-svc">changelogreader</span>
</div>
<div className="gql-ret">: <a href="#bulkpullrequestactioncanceled">BulkPullRequestActionCanceled</a>!</div>
<div className="gql-args">(id: ID!)</div>
<p>Cancel a pending bulk pull request action.</p>
</div>

<div id="cancelCommit" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">cancelCommit</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<div className="gql-ret">: <a href="#organizationcommitcanceled">OrganizationCommitCanceled</a>!</div>
<div className="gql-args">(id: ID!)</div>
<p>Cancel a running commit operation.</p>
</div>

<div id="cancelDevCenterRun" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">cancelDevCenterRun</span>
<span className="gql-svc">recipeworker</span>
</div>
<div className="gql-ret">: ID!</div>
<div className="gql-args">(id: ID!)</div>
<p>Cancel a DevCenter run. Cancellation is best-effort and asynchronous.</p>
</div>

<div id="cancelMessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">cancelMessage</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: Boolean!</div>
<div className="gql-args">(conversationId: ID!, messageId: ID)</div>
<p>Interrupt the currently-running turn for a conversation. The virtual thread driving the turn is interrupted — a blocking LLM stream unwinds immediately, and long-running downstream work (recipe runs) receives a best-effort cancel via `cancelRecipeRun` on recipe-worker. Cheap tool calls finish naturally. A terminal CANCELLED `ErrorMessage` is appended to the log regardless.</p>
<p>LLM-memory consistency on the next turn is preserved by the JSONL collapse: `buildChatMessages` pairs every tool-origin row into an `AiMessage(toolRequests)` + `ToolExecutionResultMessage` batch, and only rows that actually persisted are rebuilt — partially-executed tool batches are reconstructed from whichever tool-origin rows made it to the log.</p>
<p>Returns <code>true</code> when a running turn was actually interrupted, <code>false</code> when the conversation was already idle (no-op, not an error). <code>messageId</code> is accepted for client compatibility but only the conversation's active turn is cancellable — there is never more than one turn in flight.</p>
</div>

<div id="cancelRecipeRun" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">cancelRecipeRun</span>
<span className="gql-svc">recipeworker</span>
</div>
<div className="gql-ret">: ID!</div>
<div className="gql-args">(id: ID!)</div>
<p>Cancel a recipe run. Cancellation is best-effort and asynchronous.</p>
</div>

<div id="clearOrganizationPrompt" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">clearOrganizationPrompt</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: Boolean!</div>
<div className="gql-args">(organizationId: ID!)</div>
<p>Clear the organization-level prompt override, falling back to universal.</p>
</div>

<div id="clearUserPrompt" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">clearUserPrompt</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: Boolean!</div>
<p>Clear the current user's prompt override, falling back to organization or universal.</p>
</div>

<div id="closePullRequests" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">closePullRequests</span>
<span className="gql-svc">changelogreader</span>
</div>
<div className="gql-ret">: <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</div>
<div className="gql-args">(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!)</div>
<p>Close pull requests in bulk. Returns the queued action for polling.</p>
</div>

<div id="commit" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">commit</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<div className="gql-ret">: <a href="#organizationcommitqueued">OrganizationCommitQueued</a>!</div>
<div className="gql-args">(input: <a href="#commitinput">CommitInput</a>!)</div>
<p>Create commits from a changeset (recipe run, batch change, etc.).</p>
</div>

<div id="createAccessToken" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">createAccessToken</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: <a href="#createaccesstokenresult">CreateAccessTokenResult</a>!</div>
<div className="gql-args">(description: String, expiresAt: <a href="#datetime">DateTime</a>)</div>
<p>Creates a new Moderne Personal Access Token for the current user. Returns the token value only once - it cannot be retrieved again.</p>
</div>

<div id="createConversation" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">createConversation</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: <a href="#sendmessageresult">SendMessageResult</a>!</div>
<div className="gql-args">(input: <a href="#createconversationinput">CreateConversationInput</a>!, waitForCompletion: Boolean = false)</div>
<p>Create a new conversation and send the first message. Uses the effective prompt for the organization context. `waitForCompletion` has the same semantics as on `sendMessage`.</p>
</div>

<div id="createUserOrganization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">createUserOrganization</span>
<span className="gql-svc">organization</span>
</div>
<div className="gql-ret">: <a href="#organization">Organization</a>!</div>
<div className="gql-args">(input: <a href="#createuserorganizationinput">CreateUserOrganizationInput</a>!)</div>
<p>Create a new user-defined organization visible only to the current user.</p>
</div>

<div id="deleteUser" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">deleteUser</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: Boolean!</div>
<div className="gql-args">(email: String!)</div>
<p>Deletes a user and all associated access tokens. Returns true if the user was found and deleted.</p>
</div>

<div id="deleteUserOrganization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">deleteUserOrganization</span>
<span className="gql-svc">organization</span>
</div>
<div className="gql-ret">: Boolean!</div>
<div className="gql-args">(id: ID!)</div>
<p>Delete a user-defined organization.</p>
</div>

<div id="downloadAuditLogs" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">downloadAuditLogs</span>
<span className="gql-svc">auditreader</span>
</div>
<div className="gql-ret">: <a href="#auditlogsdownload">AuditLogsDownload</a>!</div>
<div className="gql-args">(first: Int, since: <a href="#datetime">DateTime</a>, until: <a href="#datetime">DateTime</a>, format: <a href="#auditlogexportformat">AuditLogExportFormat</a>!)</div>
<p>Start an asynchronous export of audit logs. Returns a task whose state can be polled via auditLogsDownloads.</p>
</div>

<div id="downloadDataTable" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">downloadDataTable</span>
<span className="gql-svc">changesetreader</span>
</div>
<div className="gql-ret">: <a href="#datatable">DataTable</a>!</div>
<div className="gql-args">(changesetId: ID!, dataTable: String!, group: String, format: <a href="#datatableformat">DataTableFormat</a>!)</div>
<p>Start or retrieve a data table download. If the same data table + group + format combination was already requested, returns the existing download state.</p>
</div>

<div id="exchangeAuthorizationCode" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">exchangeAuthorizationCode</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: <a href="#exchangeauthorizationresult">ExchangeAuthorizationResult</a>!</div>
<div className="gql-args">(input: <a href="#exchangeauthorizationcodeinput">ExchangeAuthorizationCodeInput</a>!)</div>
<p>Exchange an OAuth authorization code for an access token.</p>
<p>This unified mutation handles all OAuth 2.0 VCS providers. The backend uses the authorizationId to look up: - The origin and VCS type - PKCE code_verifier (GitLab)</p>
<p>On success, the token is stored and future requests will be authenticated.</p>
</div>

<div id="initiateAuthorization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">initiateAuthorization</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: <a href="#oauthauthorization">OAuthAuthorization</a>!</div>
<div className="gql-args">(input: <a href="#initiateauthorizationinput">InitiateAuthorizationInput</a>!)</div>
<p>Initiate OAuth authorization for a VCS origin. Returns an authorization URL to redirect the user to.</p>
<p>The backend constructs the full OAuth URL including: - PKCE code_challenge for GitLab - Correct scopes for each VCS type - State parameter for CSRF protection</p>
<p>The authorization ID should be passed to exchangeAuthorizationCode after the user completes OAuth.</p>
</div>

<div id="installRecipesForCurrentUser" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">installRecipesForCurrentUser</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<div className="gql-ret">: <a href="#recipeinstallation">RecipeInstallation</a>!</div>
<div className="gql-args">(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!)</div>
<p>Install a recipe bundle to the current user's personal marketplace.</p>
</div>

<div id="installRecipesForOrganization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">installRecipesForOrganization</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<div className="gql-ret">: <a href="#recipeinstallation">RecipeInstallation</a>!</div>
<div className="gql-args">(organizationId: ID!, bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!)</div>
<p>Install a recipe bundle to a specific organization's marketplace. Requires the `admin` role.</p>
</div>

<div id="installRecipesUniversal" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">installRecipesUniversal</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<div className="gql-ret">: <a href="#recipeinstallation">RecipeInstallation</a>!</div>
<div className="gql-args">(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!)</div>
<p>Install a recipe bundle to the universal marketplace (visible to all). Requires the `admin` role.</p>
</div>

<div id="mergePullRequests" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">mergePullRequests</span>
<span className="gql-svc">changelogreader</span>
</div>
<div className="gql-ret">: <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</div>
<div className="gql-args">(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!, mergeMethod: <a href="#mergemethod">MergeMethod</a>!, deleteSourceBranch: Boolean! = false)</div>
<p>Merge pull requests in bulk. Returns the queued action for polling.</p>
</div>

<div id="reindexChangelog" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">reindexChangelog</span>
<span className="gql-svc">changelogwriter</span>
</div>
<div className="gql-ret">: <a href="#reindexresult">ReindexResult</a>!</div>
<div className="gql-args">(since: <a href="#datetime">DateTime</a>!, origin: String)</div>
<p>Reset poll cursors so the next poll cycle re-fetches and re-enriches changelog entries from the given timestamp forward. Use this to backfill data after deploying enrichment improvements.</p>
</div>

<div id="revokeAccessToken" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">revokeAccessToken</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: Boolean!</div>
<div className="gql-args">(id: ID!)</div>
<p>Revokes an access token by ID. Returns true if the token was revoked, false if not found.</p>
</div>

<div id="revokeAllAccessTokens" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">revokeAllAccessTokens</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: Boolean!</div>
<div className="gql-args">(email: String!)</div>
<p>Revokes all access tokens for a given user. Returns true if all token were revoked, otherwise false.</p>
</div>

<div id="revokeScmToken" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">revokeScmToken</span>
<span className="gql-svc">authz</span>
</div>
<div className="gql-ret">: <a href="#revoketokenresult">RevokeTokenResult</a>!</div>
<div className="gql-args">(input: <a href="#revokescmtokeninput">RevokeScmTokenInput</a>!)</div>
<p>Revoke an SCM OAuth token for the current user and a specific origin. This removes the stored token, disconnecting the user from the VCS.</p>
</div>

<div id="runDevCenter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">runDevCenter</span>
<span className="gql-svc">recipeworker</span>
</div>
<div className="gql-ret">: <a href="#devcenterrunrunning">DevCenterRunRunning</a>!</div>
<div className="gql-args">(input: <a href="#rundevcenterinput">RunDevCenterInput</a>!)</div>
<p>Start a DevCenter run for an organization. Returns immediately with running status.</p>
</div>

<div id="runRecipe" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">runRecipe</span>
<span className="gql-svc">recipeworker</span>
</div>
<div className="gql-ret">: <a href="#organizationreciperunqueued">OrganizationRecipeRunQueued</a>!</div>
<div className="gql-args">(input: <a href="#runrecipeinput">RunRecipeInput</a>!)</div>
<p>Run a recipe against repositories. Returns the recipe run in its initial queued state.</p>
</div>

<div id="runVisualization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">runVisualization</span>
<span className="gql-svc">changesetvisualizer</span>
</div>
<div className="gql-ret">: <a href="#visualization">Visualization</a>!</div>
<div className="gql-args">(organizationId: ID!, visualizationId: ID!, options: [<a href="#visualizationoptioninput">VisualizationOptionInput</a>!])</div>
<p>Request a visualization to be generated based on the provided descriptor. Returns the existing visualization if already run with the same options, otherwise queues a new visualization run.</p>
</div>

<div id="sendMessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">sendMessage</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: <a href="#sendmessageresult">SendMessageResult</a>!</div>
<div className="gql-args">(conversationId: ID!, message: String!, waitForCompletion: Boolean = false)</div>
<p>Send a message to an existing conversation. Returns a handle for polling — `initialCursor` is the cursor to pass to the next `messages(after:)` query, and `turnState` carries the server- recommended poll cadence.</p>
<p>When `waitForCompletion: true`, the mutation blocks until the turn completes (or the server cap of 4 minutes is reached, whichever comes first). On cap, the mutation returns the current turn state rather than erroring so the caller can continue polling.</p>
</div>

<div id="setOrganizationPrompt" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">setOrganizationPrompt</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: <a href="#prompt">Prompt</a>!</div>
<div className="gql-args">(organizationId: ID!, content: <a href="#markdown">Markdown</a>!)</div>
<p>Set the system prompt for a specific organization (overrides universal).</p>
</div>

<div id="setProfiling" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">setProfiling</span>
<span className="gql-svc">gateway</span>
</div>
<div className="gql-ret">: Boolean!</div>
<div className="gql-args">(enabled: Boolean!, event: <a href="#profilingevent">ProfilingEvent</a> = CPU)</div>
<p>Turn continuous profiling on or off for this tenant. When enabled, Pyroscope profiles for every service start landing in the Pyroscope UI within seconds. The primary event the agent samples on is selected by `event` (defaults to CPU); calling the mutation again with a different event while profiling is already on rotates the agent to the new event. Fails when the profiling capability is not enabled for the tenant. Admin role required.</p>
</div>

<div id="setUniversalPrompt" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">setUniversalPrompt</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: <a href="#prompt">Prompt</a>!</div>
<div className="gql-args">(content: <a href="#markdown">Markdown</a>!)</div>
<p>Set the universal (default) system prompt.</p>
</div>

<div id="setUserPrompt" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">setUserPrompt</span>
<span className="gql-svc">moddy</span>
</div>
<div className="gql-ret">: <a href="#prompt">Prompt</a>!</div>
<div className="gql-args">(content: <a href="#markdown">Markdown</a>!)</div>
<p>Set the system prompt for the current user (overrides organization and universal).</p>
</div>

<div id="uninstallRecipesFromCurrentUser" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">uninstallRecipesFromCurrentUser</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<div className="gql-ret">: <a href="#recipeuninstallation">RecipeUninstallation</a>!</div>
<div className="gql-args">(packageName: String!)</div>
<p>Uninstall a recipe bundle from the current user's personal marketplace. Returns the number of recipes that were removed.</p>
</div>

<div id="uninstallRecipesFromOrganization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">uninstallRecipesFromOrganization</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<div className="gql-ret">: <a href="#recipeuninstallation">RecipeUninstallation</a>!</div>
<div className="gql-args">(organizationId: ID!, packageName: String!)</div>
<p>Uninstall a recipe bundle from a specific organization's marketplace. Returns the number of recipes that were removed. Requires the `admin` role.</p>
</div>

<div id="uninstallRecipesUniversal" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">uninstallRecipesUniversal</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<div className="gql-ret">: <a href="#recipeuninstallation">RecipeUninstallation</a>!</div>
<div className="gql-args">(packageName: String!)</div>
<p>Uninstall a recipe bundle from the universal marketplace. Returns the number of recipes that were removed. Requires the `admin` role.</p>
</div>

<div id="updateUserOrganization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">updateUserOrganization</span>
<span className="gql-svc">organization</span>
</div>
<div className="gql-ret">: <a href="#organization">Organization</a>!</div>
<div className="gql-args">(input: <a href="#updateuserorganizationinput">UpdateUserOrganizationInput</a>!)</div>
<p>Update an existing user-defined organization.</p>
</div>

## Types

### Object types

<div id="accesstoken" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AccessToken</span>
<span className="gql-svc">authz</span>
</div>
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
</div>

<div id="accesstokenconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AccessTokenConnection</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#accesstokenedge">AccessTokenEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="accesstokenedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AccessTokenEdge</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#accesstoken">AccessToken</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="artifactoryconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ArtifactoryConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="auditlog" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLog</span>
<span className="gql-svc">auditreader</span>
</div>
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
</div>

<div id="auditlogconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogConnection</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#auditlogedge">AuditLogEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogEdge</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#auditlog">AuditLog</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogsdownloadconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadConnection</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#auditlogsdownloadedge">AuditLogsDownloadEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogsdownloadedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadEdge</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#auditlogsdownload">AuditLogsDownload</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogsdownloaderror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadError</span>
<span className="gql-svc">auditreader</span>
<span className="gql-impl">implements <a href="#auditlogsdownload">AuditLogsDownload</a></span>
</div>
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
</div>

<div id="auditlogsdownloadfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadFinished</span>
<span className="gql-svc">auditreader</span>
<span className="gql-impl">implements <a href="#auditlogsdownload">AuditLogsDownload</a></span>
</div>
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
</div>

<div id="auditlogsdownloadprocessing" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadProcessing</span>
<span className="gql-svc">auditreader</span>
<span className="gql-impl">implements <a href="#auditlogsdownload">AuditLogsDownload</a></span>
</div>
<p>An audit log download is being processed.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>format</code></td><td><a href="#auditlogexportformat">AuditLogExportFormat</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="azuredevopsconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AzureDevOpsConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="azuredevopsconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AzureDevOpsConnection</span>
<span className="gql-svc">authz</span>
<span className="gql-impl">implements <a href="#scmconnection">ScmConnection</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="azuredevopsoauth" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AzureDevOpsOauth</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>tenantId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="batchchange" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BatchChange</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
</div>
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
</div>

<div id="batchchangefilechange" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BatchChangeFileChange</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#filechange">FileChange</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>path</code></td><td><a href="#path">Path</a>!</td><td></td></tr>
    <tr><td><code>beforeSourcePath</code></td><td><a href="#path">Path</a></td><td></td></tr>
    <tr><td><code>afterSourcePath</code></td><td><a href="#path">Path</a></td><td></td></tr>
    <tr><td><code>diff</code></td><td>(markupLevel: <a href="#markuplevel">MarkupLevel</a> = ERROR, showWhitespaceOnlyChanges: Boolean = true): <a href="#patch">Patch</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bitbucketcloudconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BitbucketCloudConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="bitbucketcloudconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BitbucketCloudConnection</span>
<span className="gql-svc">authz</span>
<span className="gql-impl">implements <a href="#scmconnection">ScmConnection</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bitbucketcloudoauth" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BitbucketCloudOauth</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bitbucketconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BitbucketConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="bitbucketconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BitbucketConnection</span>
<span className="gql-svc">authz</span>
<span className="gql-impl">implements <a href="#scmconnection">ScmConnection</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bitbucketoauth" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BitbucketOauth</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="branchcommitoptions" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BranchCommitOptions</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#commitoptions">CommitOptions</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactioncanceled" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionCanceled</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
</div>
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
</div>

<div id="bulkpullrequestactionconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionConnection</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#bulkpullrequestactionedge">BulkPullRequestActionEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactionedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionEdge</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#bulkpullrequestaction">BulkPullRequestAction</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactionerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionError</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
</div>
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
</div>

<div id="bulkpullrequestactionfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionFinished</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
</div>
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
</div>

<div id="bulkpullrequestactionqueued" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionQueued</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
</div>
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
</div>

<div id="bulkpullrequestactionrunning" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionRunning</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
</div>
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
</div>

<div id="changeparticipant" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangeParticipant</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="changelogcommit" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogCommit</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#changelogentry">ChangelogEntry</a></span>
</div>
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
</div>

<div id="changelogentryconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntryConnection</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#changelogentryedge">ChangelogEntryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogentryedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntryEdge</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#changelogentry">ChangelogEntry</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogparticipantconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogParticipantConnection</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#changelogparticipantedge">ChangelogParticipantEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogparticipantedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogParticipantEdge</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#changeparticipant">ChangeParticipant</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogpullrequest" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogPullRequest</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#changelogentry">ChangelogEntry</a></span>
</div>
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
</div>

<div id="clidownloadinstructionlink" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CliDownloadInstructionLink</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>label</code></td><td>String!</td><td></td></tr>
    <tr><td><code>uri</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="codesearchresult" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CodeSearchResult</span>
<span className="gql-svc">code-search</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>groupId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>artifactId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>fileChanges</code></td><td>(first: Int = 100, after: String): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="codesearchresultconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CodeSearchResultConnection</span>
<span className="gql-svc">code-search</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#codesearchresultedge">CodeSearchResultEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>searchDurationMs</code></td><td><a href="#long">Long</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="codesearchresultedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CodeSearchResultEdge</span>
<span className="gql-svc">code-search</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#codesearchresult">CodeSearchResult</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="column" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Column</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String!</td><td></td></tr>
    <tr><td><code>type</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="connector" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Connector</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="connectorconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorConnection</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#connectoredge">ConnectorEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="connectoredge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorEdge</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#connector">Connector</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversation" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Conversation</span>
<span className="gql-svc">moddy</span>
</div>
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
</div>

<div id="conversationconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConversationConnection</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#conversationedge">ConversationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversationedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConversationEdge</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#conversation">Conversation</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversationturnstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConversationTurnState</span>
<span className="gql-svc">moddy</span>
</div>
<p>Represents the current phase of the conversation's active turn (if any). Drives client poll cadence.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>phase</code></td><td><a href="#conversationphase">ConversationPhase</a>!</td><td></td></tr>
    <tr><td><code>recommendedPollIntervalMs</code></td><td>Int!</td><td>Server-recommended poll interval in milliseconds.</td></tr>
    <tr><td><code>activeTurnStartedAt</code></td><td><a href="#datetime">DateTime</a></td><td>When the currently-active turn started, if any.</td></tr>
  </tbody>
</table>
</div>

<div id="createaccesstokenresult" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CreateAccessTokenResult</span>
<span className="gql-svc">authz</span>
</div>
<p>Result of creating a new access token. The token value is only available in this response.</p>
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
</div>

<div id="datatableavailable" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableAvailable</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#datatable">DataTable</a></span>
</div>
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
</div>

<div id="datatableconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableConnection</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#datatableedge">DataTableEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatabledescriptor" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableDescriptor</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>displayName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String!</td><td></td></tr>
    <tr><td><code>columns</code></td><td>[<a href="#column">Column</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatableedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableEdge</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#datatable">DataTable</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatableerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableError</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#datatable">DataTable</a></span>
</div>
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
</div>

<div id="datatablefinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableFinished</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#datatable">DataTable</a></span>
</div>
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
</div>

<div id="datatableprocessing" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableProcessing</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#datatable">DataTable</a></span>
</div>
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
</div>

<div id="datatablesqlmessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableSqlMessage</span>
<span className="gql-svc">moddy</span>
<span className="gql-impl">implements <a href="#message">Message</a></span>
</div>
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
</div>

<div id="datatablesmessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTablesMessage</span>
<span className="gql-svc">moddy</span>
<span className="gql-impl">implements <a href="#message">Message</a></span>
</div>
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
</div>

<div id="devcenter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenter</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td>The currently configured DevCenter recipe for this organization.</td></tr>
    <tr><td><code>runs</code></td><td>(first: Int = 10, after: String, where: <a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>, orderBy: [<a href="#devcenterrunorderbyinput">DevCenterRunOrderByInput</a>!]): <a href="#devcenterrunconnection">DevCenterRunConnection</a>!</td><td>DevCenter runs for this organization, ordered by start time descending.</td></tr>
  </tbody>
</table>
</div>

<div id="devcentercard" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterCard</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>A DevCenter card represents a category of work (e.g., "Spring Boot 3", "Java 21", "Security"). Cards contain measures that track progress toward completion.</p>
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
</div>

<div id="devcentercarddescriptor" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterCardDescriptor</span>
<span className="gql-svc">recipemarketplace</span>
</div>
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
</div>

<div id="devcentermeasure" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterMeasure</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>A measure within a DevCenter card representing a specific state or finding, with a count from the run results.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td>Display name of the measure.</td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a></td><td>Description of what this measure represents.</td></tr>
    <tr><td><code>ordinal</code></td><td>Int!</td><td>Sort order relative to other measures in the card.</td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td>Count of repositories or occurrences for this measure. For PER_REPOSITORY: number of repositories in this state. For PER_OCCURRENCE: total count of occurrences.</td></tr>
  </tbody>
</table>
</div>

<div id="devcentermeasuredescriptor" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterMeasureDescriptor</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<p>A measure descriptor within a DevCenter card, representing metadata about a specific state or finding. See DevCenterMeasure in changeset:reader for the runtime version with counts.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>displayName</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>description</code></td><td><a href="#markdown">Markdown</a></td><td></td></tr>
    <tr><td><code>ordinal</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="devcenterorganization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterOrganization</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>Organization-level context from a DevCenter run.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repositories</code></td><td><a href="#devcenterrepositories">DevCenterRepositories</a>!</td><td>Repository counts at the time of the run.</td></tr>
    <tr><td><code>contributingDevelopers</code></td><td>Int!</td><td>Number of unique contributing developers (last 90 days).</td></tr>
    <tr><td><code>linesOfCode</code></td><td><a href="#long">Long</a>!</td><td>Total lines of code across all repositories on platform.</td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrepositories" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRepositories</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>Repository counts from a DevCenter run.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>total</code></td><td>Int!</td><td>Total repositories defined in the organization at the time of the run.</td></tr>
    <tr><td><code>repositoriesWithoutLst</code></td><td>Int!</td><td>Repositories with no LST ingested at the time of the run.</td></tr>
  </tbody>
</table>
</div>

<div id="devcenterruncanceled" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunCanceled</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#devcenterrun">DevCenterRun</a></span>
</div>
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
</div>

<div id="devcenterrunconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunConnection</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#devcenterrunedge">DevCenterRunEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrunedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunEdge</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#devcenterrun">DevCenterRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrunerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunError</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#devcenterrun">DevCenterRun</a></span>
</div>
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
</div>

<div id="devcenterrunfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunFinished</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#devcenterrun">DevCenterRun</a></span>
</div>
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
</div>

<div id="devcenterrunrunning" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunRunning</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#devcenterrun">DevCenterRun</a></span>
</div>
<p>DevCenter recipe is currently running across repositories.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="diffstat" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DiffStat</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>Aggregate line-level diff statistics.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>additions</code></td><td>Int!</td><td>Total lines added.</td></tr>
    <tr><td><code>deletions</code></td><td>Int!</td><td>Total lines removed.</td></tr>
  </tbody>
</table>
</div>

<div id="directcommitsucceeded" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DirectCommitSucceeded</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
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
</div>

<div id="errormessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ErrorMessage</span>
<span className="gql-svc">moddy</span>
<span className="gql-impl">implements <a href="#message">Message</a></span>
</div>
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
</div>

<div id="exchangeauthorizationresult" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ExchangeAuthorizationResult</span>
<span className="gql-svc">authz</span>
</div>
<p>Result of exchanging an authorization code.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>success</code></td><td>Boolean!</td><td>True if the exchange was successful and token was stored.</td></tr>
    <tr><td><code>error</code></td><td>String</td><td>Error message if exchange failed.</td></tr>
  </tbody>
</table>
</div>

<div id="filechangeconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">FileChangeConnection</span>
<span className="gql-svc">corechangeset</span>
</div>
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
</div>

<div id="filechangeedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">FileChangeEdge</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#filechange">FileChange</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="forkandpullrequestcommitsucceeded" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ForkAndPullRequestCommitSucceeded</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
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
</div>

<div id="forkcommitoptions" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ForkCommitOptions</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#commitoptions">CommitOptions</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
    <tr><td><code>organization</code></td><td>String</td><td>If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account.</td></tr>
    <tr><td><code>prefixOrganization</code></td><td>Boolean!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="forkcommitsucceeded" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ForkCommitSucceeded</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
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
</div>

<div id="forkpullrequestoptions" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ForkPullRequestOptions</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#commitoptions">CommitOptions</a></span>
</div>
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
</div>

<div id="generichttptoolconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GenericHttpToolConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="gitlabconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GitLabConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="gitlabconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GitLabConnection</span>
<span className="gql-svc">authz</span>
<span className="gql-impl">implements <a href="#scmconnection">ScmConnection</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="gitlaboauth" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GitLabOauth</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="githubconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GithubConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="githubconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GithubConnection</span>
<span className="gql-svc">authz</span>
<span className="gql-impl">implements <a href="#scmconnection">ScmConnection</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="githuboauth" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GithubOauth</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>includePrivateRepos</code></td><td>Boolean!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="gorecipebundle" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GoRecipeBundle</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#recipebundle">RecipeBundle</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="httptoolconnectivity" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">HttpToolConnectivity</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>connected</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>latency</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="license" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">License</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>key</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="llmconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">LlmConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="lstartifact" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">LstArtifact</span>
<span className="gql-svc">organization</span>
</div>
<p>The LST artifact for a repository - the precomputed Lossless Semantic Tree that recipe runs consume. Every repository has a conceptual artifact; `published` reflects the upstream `mod publish` timestamp, while `available` indicates whether the saas can route a recipe run to it yet.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>published</code></td><td><a href="#datetime">DateTime</a></td><td>When `mod publish` produced an artifact into the customer's LST artifact repository, or null if no artifact has been published. For a tenant configured for encrypted LSTs, a non-null `published` does NOT mean the encrypted artifact has been received by the tenant - that signal lives on `available`.</td></tr>
    <tr><td><code>available</code></td><td>Boolean!</td><td>Whether the artifact is reachable for a recipe run. For an organization source with encryption enabled, true once the connector has uploaded the encrypted artifact and the gateway has surfaced an `encrypted://` alternate publish URI. For a source without encryption (pass-through), true when the gateway-projected row has a non-empty `publishUri`, which we assume is reachable from `mod publish`.</td></tr>
  </tbody>
</table>
</div>

<div id="markup" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Markup</span>
<span className="gql-svc">corechangeset</span>
<span className="gql-impl">implements <a href="#marker">Marker</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>level</code></td><td><a href="#markuplevel">MarkupLevel</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String</td><td></td></tr>
    <tr><td><code>detail</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="mavenconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MavenConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="mavenrecipebundle" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MavenRecipeBundle</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#recipebundle">RecipeBundle</a></span>
</div>
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
</div>

<div id="mergeoptions" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MergeOptions</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>deleteSourceBranch</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>mergeMethod</code></td><td><a href="#mergemethod">MergeMethod</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="messageconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MessageConnection</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#messageedge">MessageEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="messageedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MessageEdge</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#message">Message</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="moddy" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Moddy</span>
<span className="gql-svc">moddy</span>
</div>
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
</div>

<div id="morehelplink" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MoreHelpLink</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>label</code></td><td>String!</td><td></td></tr>
    <tr><td><code>uri</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="npmconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">NpmConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="npmrecipebundle" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">NpmRecipeBundle</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#recipebundle">RecipeBundle</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="nugetconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">NugetConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="nugetrecipebundle" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">NugetRecipeBundle</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#recipebundle">RecipeBundle</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="oauthauthorization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OAuthAuthorization</span>
<span className="gql-svc">authz</span>
</div>
<p>Represents a pending OAuth authorization. The UI should redirect to authorizationUrl, then call exchangeAuthorizationCode with the id and extracted callback parameters.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>Unique ID for this authorization attempt. Used to look up stored PKCE state at exchange time.</td></tr>
    <tr><td><code>authorizationUrl</code></td><td>String!</td><td>The fully-constructed OAuth authorization URL. UI should redirect the user to this URL.  IMPORTANT: The UI must store the authorization ID before redirecting, as it will be needed to call exchangeAuthorizationCode after the callback. The redirect URI does not contain the authorization ID.</td></tr>
    <tr><td><code>callbackParameters</code></td><td>[String!]!</td><td>Query parameters the UI should extract from the OAuth callback URL and pass to exchangeAuthorizationCode (e.g., ["code"]).</td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When this authorization expires. UI should treat expired authorizations as stale.</td></tr>
  </tbody>
</table>
</div>

<div id="option" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Option</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>RecipeDescriptor resolved from changeset-specific recipes.csv. When a recipe run is created, the recipes.csv is copied to the changeset directory, so we can resolve the recipe that was used at the time of the run (not the current global state).</p>
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
</div>

<div id="organization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Organization</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="organizationchangeset" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangeset</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="organizationchangesetconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangesetConnection</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationchangesetedge">OrganizationChangesetEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationchangesetedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangesetEdge</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
    <tr><td><code>organization</code></td><td><a href="#organization">Organization</a></td><td>The organization this changeset was run against. May differ from the queried organization when the changeset belongs to a suborganization. Null if the organization has been deleted or is temporarily unavailable.</td></tr>
  </tbody>
</table>
</div>

<div id="organizationcommitcanceled" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitCanceled</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#organizationcommit">OrganizationCommit</a></span>
</div>
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
</div>

<div id="organizationcommitconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitConnection</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationcommitedge">OrganizationCommitEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationcommitedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitEdge</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationcommit">OrganizationCommit</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationcommiterror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitError</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#organizationcommit">OrganizationCommit</a></span>
</div>
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
</div>

<div id="organizationcommitfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitFinished</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#organizationcommit">OrganizationCommit</a></span>
</div>
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
</div>

<div id="organizationcommitqueued" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitQueued</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#organizationcommit">OrganizationCommit</a></span>
</div>
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
</div>

<div id="organizationcommitrunning" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitRunning</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#organizationcommit">OrganizationCommit</a></span>
</div>
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
</div>

<div id="organizationconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationConnection</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationedge">OrganizationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationEdge</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organization">Organization</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperun" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRun</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="organizationreciperuncanceled" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunCanceled</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span className="gql-impl">implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
</div>
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
</div>

<div id="organizationreciperunconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunConnection</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#organizationreciperunedge">OrganizationRecipeRunEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunEdge</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationreciperun">OrganizationRecipeRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunError</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span className="gql-impl">implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
</div>
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
</div>

<div id="organizationreciperunfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunFinished</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span className="gql-impl">implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
</div>
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
</div>

<div id="organizationreciperunqueued" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunQueued</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span className="gql-impl">implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
</div>
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
</div>

<div id="organizationreciperunrunning" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunRunning</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span className="gql-impl">implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
</div>
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
</div>

<div id="organizationreciperunsyncing" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunSyncing</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span className="gql-impl">implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
</div>
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
</div>

<div id="pageinfo" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PageInfo</span>
<span className="gql-svc">coregraphql</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>hasNextPage</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>hasPreviousPage</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>startCursor</code></td><td>String</td><td></td></tr>
    <tr><td><code>endCursor</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="patch" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Patch</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>diff</code></td><td>String!</td><td>Sanitized diff (does not include markers)</td></tr>
    <tr><td><code>fencedMarkerDiff</code></td><td>String!</td><td>A diff with search and markup markers included in fenced &#123;&#123;UUID&#125;&#125; wrappers that correspond to ids in the markers list.</td></tr>
    <tr><td><code>markers</code></td><td>[<a href="#marker">Marker</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="personalaccesstokenconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PersonalAccessTokenConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>maxExpiryDays</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="piprecipebundle" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PipRecipeBundle</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#recipebundle">RecipeBundle</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="platformcapabilities" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PlatformCapabilities</span>
<span className="gql-svc">artifactsmaven</span>
</div>
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
</div>

<div id="profiling" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Profiling</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>deployed</code></td><td>Boolean!</td><td>Whether the per-tenant Pyroscope ASG, S3 bucket, and IAM are provisioned.</td></tr>
    <tr><td><code>session</code></td><td><a href="#profilingsession">ProfilingSession</a></td><td>The currently active profiling session, or null when profiling is off. Flipped by setProfiling.</td></tr>
  </tbody>
</table>
</div>

<div id="profilingsession" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ProfilingSession</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td>The user who turned profiling on.</td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When profiling was turned on.</td></tr>
    <tr><td><code>event</code></td><td><a href="#profilingevent">ProfilingEvent</a>!</td><td>The primary profiling event the in-process agent is sampling.</td></tr>
  </tbody>
</table>
</div>

<div id="prompt" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Prompt</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>content</code></td><td><a href="#markdown">Markdown</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedBy</code></td><td><a href="#user">User</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactioncanceled" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionCanceled</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>canceledBy</code></td><td><a href="#user">User</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionConnection</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#pullrequestactionedge">PullRequestActionEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionEdge</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#pullrequestaction">PullRequestAction</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionfailed" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionFailed</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>errorMessage</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionqueued" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionQueued</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionrunning" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionRunning</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionsucceeded" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionSucceeded</span>
<span className="gql-svc">changelogreader</span>
<span className="gql-impl">implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestcommitsucceeded" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestCommitSucceeded</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
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
</div>

<div id="pullrequestoptions" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestOptions</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#commitoptions">CommitOptions</a></span>
</div>
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
</div>

<div id="pullrequestref" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestRef</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td></td></tr>
    <tr><td><code>repositoryPath</code></td><td>String!</td><td></td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td></td></tr>
    <tr><td><code>number</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequeststatus" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestStatus</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="pypiconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PypiConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>skipSsl</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>skipValidateConnectivity</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>connectivity</code></td><td><a href="#httptoolconnectivity">HttpToolConnectivity</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipebundleconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeBundleConnection</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipebundleedge">RecipeBundleEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipebundleedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeBundleEdge</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipecategory" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeCategory</span>
<span className="gql-svc">recipemarketplace</span>
</div>
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
</div>

<div id="recipecategoryconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeCategoryConnection</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipecategoryedge">RecipeCategoryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipecategoryedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeCategoryEdge</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipecategory">RecipeCategory</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipedescriptor" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeDescriptor</span>
<span className="gql-svc">changesetreader</span>
</div>
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
</div>

<div id="recipedescriptorconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeDescriptorConnection</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipedescriptoredge">RecipeDescriptorEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipedescriptoredge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeDescriptorEdge</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
    <tr><td><code>relevance</code></td><td>Float!</td><td>Relevance score for this recipe in the context of a search query. For semantic search, this represents the search relevance (0.0 to 1.0). For filter-based queries, this is always 1.0.</td></tr>
  </tbody>
</table>
</div>

<div id="recipedetailerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeDetailError</span>
<span className="gql-svc">recipemarketplace</span>
<span className="gql-impl">implements <a href="#recipedetail">RecipeDetail</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipedetailfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeDetailFinished</span>
<span className="gql-svc">recipemarketplace</span>
<span className="gql-impl">implements <a href="#recipedetail">RecipeDetail</a></span>
</div>
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
</div>

<div id="recipedetailloading" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeDetailLoading</span>
<span className="gql-svc">recipemarketplace</span>
<span className="gql-impl">implements <a href="#recipedetail">RecipeDetail</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipegraph" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeGraph</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<p>Flat vertices-and-edges representation of a composite recipe with `org.openrewrite.Singleton` deduplication pre-applied. Produced by the marketplace backend and served to visualization clients in one round trip.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>rootVertexId</code></td><td>Int!</td><td>ID of the root (entry-point) vertex in the graph.</td></tr>
    <tr><td><code>vertices</code></td><td>[<a href="#recipegraphvertex">RecipeGraphVertex</a>!]!</td><td></td></tr>
    <tr><td><code>edges</code></td><td>[<a href="#recipegraphedge">RecipeGraphEdge</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipegraphedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeGraphEdge</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>from</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>to</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>type</code></td><td><a href="#recipegraphedgetype">RecipeGraphEdgeType</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipegraphvertex" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeGraphVertex</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<p>A vertex in a RecipeGraph: a full recipe occurrence with its configured options. Recipes that declare `org.openrewrite.Singleton` as a precondition are deduplicated — additional occurrences are expressed as REFERENCE edges pointing back to the first occurrence rather than as separate vertices.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a>!</td><td>The recipe this vertex represents. Carries recipe name (as `id`), displayName, instanceName, options, bundle, dataTables, etc. — reuse the existing RecipeDescriptor type rather than duplicating fields here.</td></tr>
    <tr><td><code>isSingleton</code></td><td>Boolean!</td><td>True if this recipe declares `org.openrewrite.Singleton` as a precondition, meaning additional occurrences in the graph appear as REFERENCE edges pointing back to this vertex.</td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallationconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationConnection</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#recipeinstallationedge">RecipeInstallationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallationedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationEdge</span>
<span className="gql-svc">recipemarketplace</span>
</div>
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
</div>

<div id="recipeinstallationerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationError</span>
<span className="gql-svc">recipemarketplace</span>
<span className="gql-impl">implements <a href="#recipeinstallation">RecipeInstallation</a></span>
</div>
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
</div>

<div id="recipeinstallationfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationFinished</span>
<span className="gql-svc">recipemarketplace</span>
<span className="gql-impl">implements <a href="#recipeinstallation">RecipeInstallation</a></span>
</div>
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
</div>

<div id="recipeinstallationprocessing" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationProcessing</span>
<span className="gql-svc">recipemarketplace</span>
<span className="gql-impl">implements <a href="#recipeinstallation">RecipeInstallation</a></span>
</div>
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
</div>

<div id="recipeinstallationqueued" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationQueued</span>
<span className="gql-svc">recipemarketplace</span>
<span className="gql-impl">implements <a href="#recipeinstallation">RecipeInstallation</a></span>
</div>
<p>Installation is queued and waiting to be processed.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipemarketplace" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeMarketplace</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>categories</code></td><td>(first: Int = 100, after: String, where: <a href="#recipecategorywhereinput">RecipeCategoryWhereInput</a>, orderBy: [<a href="#recipecategoryorderbyinput">RecipeCategoryOrderByInput</a>!]): <a href="#recipecategoryconnection">RecipeCategoryConnection</a>!</td><td></td></tr>
    <tr><td><code>recipes</code></td><td>(first: Int = 100, after: String, where: <a href="#recipewhereinput">RecipeWhereInput</a>, orderBy: [<a href="#recipeorderbyinput">RecipeOrderByInput</a>!]): <a href="#recipedescriptorconnection">RecipeDescriptorConnection</a>!</td><td></td></tr>
    <tr><td><code>installations</code></td><td>(first: Int = 50, after: String, where: <a href="#recipeinstallationwhereinput">RecipeInstallationWhereInput</a>, orderBy: [<a href="#recipeinstallationorderbyinput">RecipeInstallationOrderByInput</a>!]): <a href="#recipeinstallationconnection">RecipeInstallationConnection</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeoptionvalue" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeOptionValue</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeoptionsmessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeOptionsMessage</span>
<span className="gql-svc">moddy</span>
<span className="gql-impl">implements <a href="#message">Message</a></span>
</div>
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
</div>

<div id="reciperunfilechange" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeRunFileChange</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#filechange">FileChange</a></span>
</div>
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
</div>

<div id="reciperunmessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeRunMessage</span>
<span className="gql-svc">moddy</span>
<span className="gql-impl">implements <a href="#message">Message</a></span>
</div>
<p>Long-running recipe execution started by the LLM. Carries a typed progress envelope while IN_PROGRESS — clients should read `progress` rather than poking at a free-form payload. When the run reaches a terminal state, `recipeRun` resolves via federation.</p>
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
</div>

<div id="reciperunprogress" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeRunProgress</span>
<span className="gql-svc">moddy</span>
</div>
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
</div>

<div id="reciperuntotals" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeRunTotals</span>
<span className="gql-svc">changesetreader</span>
</div>
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
</div>

<div id="recipesearchmessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeSearchMessage</span>
<span className="gql-svc">moddy</span>
<span className="gql-impl">implements <a href="#message">Message</a></span>
</div>
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
</div>

<div id="recipeuninstallation" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeUninstallation</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<p>Result of an uninstall operation.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>removedCount</code></td><td>Int!</td><td>The number of recipes that were removed.</td></tr>
  </tbody>
</table>
</div>

<div id="reindexresult" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ReindexResult</span>
<span className="gql-svc">changelogwriter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resetCount</code></td><td>Int!</td><td>Number of repository cursors that were reset.</td></tr>
    <tr><td><code>since</code></td><td><a href="#datetime">DateTime</a>!</td><td>The timestamp cursors were rewound to.</td></tr>
  </tbody>
</table>
</div>

<div id="repository" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Repository</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="repositoryauthorization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryAuthorization</span>
<span className="gql-svc">corechangeset</span>
</div>
<p>Authorization status for accessing repository content. Resolved by the changeset reader using a batch check against the authorization service.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin (e.g., github.com).</td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td>Whether the user has a valid OAuth token for this origin.</td></tr>
  </tbody>
</table>
</div>

<div id="repositorybatchchange" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryBatchChange</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorychangesetconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangesetConnection</span>
<span className="gql-svc">corechangeset</span>
</div>
<p>Paginated connection for repository changesets.</p>
<p>`completed` indicates how many repositories have finished processing: - For BatchChange: completed always equals count (all repositories are pre-processed). - For OrganizationRecipeRun: completed counts repository runs in a terminal state   (regardless of success/failure), excluding canceled runs. A canceled run shows   the completion status reached prior to cancellation.</p>
<p>Sync totals (`syncPending`, `synced`, `syncFailed`, `syncCanceled`, `syncSkipped`) track repository sync progress during the SYNCING phase. Their sum equals `count`.</p>
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
</div>

<div id="repositorychangesetedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangesetEdge</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositorychangeset">RepositoryChangeset</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitcanceled" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitCanceled</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
<p>Repository commit was canceled. Use `options.__typename` to determine the specific commit type.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitConnection</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#repositorycommitedge">RepositoryCommitEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
    <tr><td><code>completedCount</code></td><td>Int!</td><td>Count of repository commits that have reached a terminal state (succeeded, failed, canceled, or no changes). Pair with `count` to show progress: "Completed X / Y".</td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitEdge</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositorycommit">RepositoryCommit</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitfailed" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitFailed</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
<p>Repository commit failed with an error. Use `options.__typename` to determine the specific commit type.</p>
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
</div>

<div id="repositorycommitnochanges" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitNoChanges</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
<p>Repository commit completed but yielded no changes. Generally occurs when applying a patch does not produce any changes to commit. Use `options.__typename` to determine the specific commit type.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitqueued" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitQueued</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
<p>Repository commit is queued and waiting to be processed. Use `options.__typename` to determine the specific commit type.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
    <tr><td><code>rateLimitReset</code></td><td><a href="#datetime">DateTime</a></td><td>Time when rate limit expires (if rate limited).</td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitrunning" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitRunning</span>
<span className="gql-svc">changesetcommitter</span>
<span className="gql-impl">implements <a href="#repositorycommit">RepositoryCommit</a></span>
</div>
<p>Repository commit is actively being processed. Use `options.__typename` to determine the specific commit type.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>options</code></td><td><a href="#commitoptions">CommitOptions</a>!</td><td>The commit options. Use `__typename` to determine commit type.</td></tr>
  </tbody>
</table>
</div>

<div id="repositoryconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryConnection</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#repositoryedge">RepositoryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryEdge</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperuncanceled" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunCanceled</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span className="gql-impl">implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunConnection</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#repositoryreciperunedge">RepositoryRecipeRunEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunEdge</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositoryreciperun">RepositoryRecipeRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunError</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span className="gql-impl">implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
</div>
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
</div>

<div id="repositoryreciperunfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunFinished</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span className="gql-impl">implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
</div>
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
</div>

<div id="repositoryreciperunnolst" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunNoLst</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span className="gql-impl">implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunqueued" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunQueued</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span className="gql-impl">implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
</div>
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
</div>

<div id="repositoryreciperunrunning" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunRunning</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span className="gql-impl">implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
</div>
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
</div>

<div id="reviewstatus" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ReviewStatus</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>approvedBy</code></td><td>[String!]</td><td></td></tr>
    <tr><td><code>reviewDecision</code></td><td><a href="#reviewdecision">ReviewDecision</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="revoketokenresult" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RevokeTokenResult</span>
<span className="gql-svc">authz</span>
</div>
<p>Result of revoking an SCM OAuth token.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>success</code></td><td>Boolean!</td><td>True if the token was revoked (or didn't exist).</td></tr>
    <tr><td><code>error</code></td><td>String</td><td>Error message if revocation failed.</td></tr>
  </tbody>
</table>
</div>

<div id="s3configuration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">S3Configuration</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="scmtokeninfo" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ScmTokenInfo</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>created</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="searchresult" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">SearchResult</span>
<span className="gql-svc">corechangeset</span>
<span className="gql-impl">implements <a href="#marker">Marker</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>type</code></td><td>String!</td><td></td></tr>
    <tr><td><code>description</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="sendmessageresult" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">SendMessageResult</span>
<span className="gql-svc">moddy</span>
</div>
<p>Handle returned by `createConversation` / `sendMessage`. Clients should poll `conversation.messages(after: initialCursor)` using `turnState.recommendedPollIntervalMs` as the cadence hint.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>conversation</code></td><td><a href="#conversation">Conversation</a>!</td><td></td></tr>
    <tr><td><code>initialCursor</code></td><td>String!</td><td></td></tr>
    <tr><td><code>turnState</code></td><td><a href="#conversationturnstate">ConversationTurnState</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="textmessage" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">TextMessage</span>
<span className="gql-svc">moddy</span>
<span className="gql-impl">implements <a href="#message">Message</a></span>
</div>
<p>A text message from either the human user or the chatbot. Check the `user` field to distinguish sender.</p>
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
</div>

<div id="toolinfo" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ToolInfo</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>arguments</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="uiconfiguration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UiConfiguration</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>moreHelp</code></td><td>[<a href="#morehelplink">MoreHelpLink</a>!]</td><td></td></tr>
    <tr><td><code>loginText</code></td><td>String</td><td></td></tr>
    <tr><td><code>loginLinks</code></td><td>[<a href="#morehelplink">MoreHelpLink</a>!]</td><td></td></tr>
    <tr><td><code>cliDownloadInstructions</code></td><td><a href="#clidownloadinstructionlink">CliDownloadInstructionLink</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="user" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">User</span>
<span className="gql-svc">authz</span>
</div>
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
</div>

<div id="userconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UserConnection</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#usersedge">UsersEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="usersedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UsersEdge</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationavailable" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationAvailable</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#visualization">Visualization</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
    <tr><td><code>changesetId</code></td><td>ID!</td><td>The changeset (recipe run or batch change) this visualization is available for.</td></tr>
  </tbody>
</table>
</div>

<div id="visualizationconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationConnection</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#visualizationedge">VisualizationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationdescriptor" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationDescriptor</span>
<span className="gql-svc">changesetvisualizer</span>
</div>
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
</div>

<div id="visualizationedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationEdge</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#visualization">Visualization</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationerror" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationError</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#visualization">Visualization</a></span>
</div>
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
</div>

<div id="visualizationfinished" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationFinished</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#visualization">Visualization</a></span>
</div>
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
</div>

<div id="visualizationimageoutput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationImageOutput</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#visualizationoutput">VisualizationOutput</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>format</code></td><td><a href="#imageformat">ImageFormat</a>!</td><td></td></tr>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationoption" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationOption</span>
<span className="gql-svc">changesetvisualizer</span>
</div>
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
</div>

<div id="visualizationplotlyoutput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationPlotlyOutput</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#visualizationoutput">VisualizationOutput</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td>Plotly JSON data (MIME type: application/vnd.plotly.v1+json)</td></tr>
  </tbody>
</table>
</div>

<div id="visualizationprocessing" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationProcessing</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#visualization">Visualization</a></span>
</div>
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
</div>

<div id="visualizationrepository" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationRepository</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>state</code></td><td><a href="#visualizationrepositoryrunstate">VisualizationRepositoryRunState</a>!</td><td></td></tr>
    <tr><td><code>stateMessage</code></td><td>String</td><td></td></tr>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationrepositoryconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationRepositoryConnection</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#visualizationrepositoryedge">VisualizationRepositoryEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
    <tr><td><code>count</code></td><td>Int!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationrepositoryedge" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationRepositoryEdge</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#visualizationrepository">VisualizationRepository</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="yamlrecipebundle" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">YamlRecipeBundle</span>
<span className="gql-svc">changesetreader</span>
<span className="gql-impl">implements <a href="#recipebundle">RecipeBundle</a></span>
</div>
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
</div>

### Interfaces

<div id="auditlogsdownload" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownload</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestaction" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestAction</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>A bulk pull request action (approve, merge, close) that operates on potentially multiple repositories. Use `__typename` to determine the current state.</p>
<p>Each `BulkPullRequestAction` contains individual `PullRequestAction` entries representing the state of each repository targeted by the bulk operation.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>actionType</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a>!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 50, after: String, where: <a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>, orderBy: [<a href="#pullrequestactionorderbyinput">PullRequestActionOrderByInput</a>!]): <a href="#pullrequestactionconnection">PullRequestActionConnection</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogentry" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntry</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>A single entry in the changelog — either a commit or a pull request. Use `__typename` to distinguish between `ChangelogCommit` and `ChangelogPullRequest`.</p>
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
</div>

<div id="commitoptions" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CommitOptions</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatable" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTable</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>dataTable</code></td><td><a href="#datatabledescriptor">DataTableDescriptor</a>!</td><td></td></tr>
    <tr><td><code>instanceName</code></td><td>String!</td><td>A human-readable name for this data table instance, describing what it contains. For example, "Method calls matching \`java.util.List add(..)\`". Defaults to the data table's display name when not explicitly set.</td></tr>
    <tr><td><code>group</code></td><td>String</td><td>The group identifying this data table bucket. For community tables this is the group name (e.g., "architecture"). Null for ungrouped/private tables.</td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrun" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRun</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>A DevCenter run represents the execution of a DevCenter recipe. Use `__typename` to determine the current state.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td>When this DevCenter run started.</td></tr>
    <tr><td><code>changeset</code></td><td><a href="#organizationchangeset">OrganizationChangeset</a></td><td>The underlying recipe run changeset.</td></tr>
  </tbody>
</table>
</div>

<div id="filechange" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">FileChange</span>
<span className="gql-svc">corechangeset</span>
</div>
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
</div>

<div id="marker" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Marker</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="message" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Message</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>user</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>state</code></td><td><a href="#messagestate">MessageState</a>!</td><td></td></tr>
    <tr><td><code>lastUpdatedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationcommit" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommit</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>An organization-level commit operation represents applying changes across multiple repositories. Use `__typename` to determine the current state.</p>
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
</div>

<div id="pullrequestaction" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestAction</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>The state of an individual repository within a `BulkPullRequestAction`. Use `__typename` to determine the current state.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipebundle" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeBundle</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>requestedVersion</code></td><td>String</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
    <tr><td><code>recipeCount</code></td><td>Int</td><td>Number of top-level recipes contributed by this bundle's package. Null when the bundle has not yet been resolved into the marketplace (e.g. an installation still in progress).</td></tr>
  </tbody>
</table>
</div>

<div id="recipedetail" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeDetail</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<p>State machine for recipe detail resolution. Querying the `detail` field on a RecipeDescriptor triggers background resolution of the full recipe bundle. Poll until `__typename` is `RecipeDetailFinished`.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallation" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallation</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<p>Common fields for all recipe installation states. Use `__typename` to determine the current state.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>bundle</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorychangeset" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangeset</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td>Authorization status for accessing this repository's content. Check this before accessing file results.</td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td>File-level changes within this repository.</td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommit" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommit</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>A commit result for a single repository within an organization-level commit operation. Use `__typename` to determine the current state.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitsucceeded" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitSucceeded</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>Repository commit completed successfully. Use `__typename` to determine the specific commit type.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>finishedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>resultLink</code></td><td>String</td><td>Link to the commit or pull request result.</td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperun" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRun</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>authorization</code></td><td><a href="#repositoryauthorization">RepositoryAuthorization</a>!</td><td></td></tr>
    <tr><td><code>syncStatus</code></td><td><a href="#repositorysyncstatus">RepositorySyncStatus</a></td><td></td></tr>
    <tr><td><code>results</code></td><td>(first: Int = 100, after: String, where: <a href="#filechangewhereinput">FileChangeWhereInput</a>, orderBy: [<a href="#filechangeorderbyinput">FileChangeOrderByInput</a>!]): <a href="#filechangeconnection">FileChangeConnection</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="scmconnection" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ScmConnection</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resourceId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>isAuthorized</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>tokens</code></td><td>[<a href="#scmtokeninfo">ScmTokenInfo</a>!]!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualization" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Visualization</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationoutput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationOutput</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

### Enums

<div id="accesstokenorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AccessTokenOrderByField</span>
<span className="gql-svc">authz</span>
</div>
<ul>
  <li><code>CREATED</code></li>
  <li><code>EXPIRES_AT</code></li>
</ul>
</div>

<div id="auditactiontype" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditActionType</span>
<span className="gql-svc">auditreader</span>
</div>
<ul>
  <li><code>CREATE</code></li>
  <li><code>READ</code></li>
  <li><code>UPDATE</code></li>
  <li><code>DELETE</code></li>
</ul>
</div>

<div id="auditlogexportformat" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogExportFormat</span>
<span className="gql-svc">auditreader</span>
</div>
<ul>
  <li><code>CEF</code></li>
  <li><code>CSV</code></li>
</ul>
</div>

<div id="auditlogorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogOrderByField</span>
<span className="gql-svc">auditreader</span>
</div>
<ul>
  <li><code>TIMESTAMP</code></li>
  <li><code>USER_ID</code></li>
  <li><code>TARGET</code></li>
  <li><code>ACTION</code></li>
</ul>
</div>

<div id="auditlogsdownloadorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadOrderByField</span>
<span className="gql-svc">auditreader</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="auditoutcome" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditOutcome</span>
<span className="gql-svc">auditreader</span>
</div>
<ul>
  <li><code>SUCCESS</code></li>
  <li><code>FAILURE</code></li>
</ul>
</div>

<div id="buildstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BuildState</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>PENDING</code></li>
  <li><code>IN_PROGRESS</code></li>
  <li><code>FAILED</code></li>
  <li><code>SKIPPED</code></li>
  <li><code>SUCCESSFUL</code></li>
  <li><code>NOT_REQUIRED</code></li>
</ul>
</div>

<div id="bulkpullrequestactionorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionOrderByField</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>CREATED_AT</code></li>
  <li><code>STARTED_AT</code></li>
  <li><code>FINISHED_AT</code></li>
</ul>
</div>

<div id="bulkpullrequestactionstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionState</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>The lifecycle state of a `BulkPullRequestAction`. Matches the `__typename` of the concrete state types (Queued, Running, Finished, Canceled, Error).</p>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>RUNNING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>ERROR</code></li>
</ul>
</div>

<div id="changelogentryorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntryOrderByField</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>UPDATED_AT</code></li>
  <li><code>CREATED_AT</code></li>
  <li><code>TITLE</code></li>
  <li><code>REPOSITORY_PATH</code></li>
</ul>
</div>

<div id="changelogentrytype" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntryType</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>Discriminator for filtering by entry type.</p>
<ul>
  <li><code>COMMIT</code></li>
  <li><code>PULL_REQUEST</code></li>
</ul>
</div>

<div id="changelogparticipantorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogParticipantOrderByField</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>USERNAME</code></li>
  <li><code>EMAIL</code></li>
  <li><code>NAME</code></li>
</ul>
</div>

<div id="commitoption" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CommitOption</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<ul>
  <li><code>DIRECT</code></li>
  <li><code>BRANCH</code></li>
  <li><code>FORK</code></li>
  <li><code>PULL_REQUEST</code></li>
  <li><code>FORK_AND_PULL_REQUEST</code></li>
  <li><code>NONE</code></li>
</ul>
</div>

<div id="connectororderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorOrderByField</span>
<span className="gql-svc">gateway</span>
</div>
<ul>
  <li><code>NICKNAME</code></li>
  <li><code>VERSION</code></li>
</ul>
</div>

<div id="connectortooltype" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorToolType</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="contributorrole" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ContributorRole</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>The participant's role for filtering.</p>
<ul>
  <li><code>AUTHOR</code></li>
  <li><code>ASSIGNEE</code></li>
  <li><code>CLOSED_BY</code></li>
  <li><code>REVIEWER</code></li>
</ul>
</div>

<div id="conversationorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConversationOrderByField</span>
<span className="gql-svc">moddy</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>LAST_UPDATED_AT</code></li>
</ul>
</div>

<div id="conversationphase" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConversationPhase</span>
<span className="gql-svc">moddy</span>
</div>
<ul>
  <li><code>IDLE</code></li>
  <li><code>AWAITING_LLM</code></li>
  <li><code>STREAMING_TEXT</code></li>
  <li><code>TOOL_RUNNING</code></li>
  <li><code>ERRORED</code></li>
</ul>
</div>

<div id="datatableformat" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableFormat</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>CSV</code></li>
  <li><code>XLSX</code></li>
</ul>
</div>

<div id="datatableorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableOrderByField</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>DATA_TABLE</code></li>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="devcenteraggregation" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterAggregation</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>How DevCenter card results are aggregated across repositories.</p>
<ul>
  <li><code>PER_REPOSITORY</code></li>
  <li><code>PER_OCCURRENCE</code></li>
</ul>
</div>

<div id="devcenterrunorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunOrderByField</span>
<span className="gql-svc">changesetreader</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>STATE</code></li>
</ul>
</div>

<div id="devcenterrunstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunState</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>Execution state of a DevCenter run.</p>
<ul>
  <li><code>RUNNING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>ERROR</code></li>
</ul>
</div>

<div id="filechangeorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">FileChangeOrderByField</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>PATH</code></li>
</ul>
</div>

<div id="imageformat" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ImageFormat</span>
<span className="gql-svc">changesetreader</span>
</div>
<ul>
  <li><code>SVG</code></li>
  <li><code>GIF</code></li>
  <li><code>JPEG</code></li>
  <li><code>PNG</code></li>
</ul>
</div>

<div id="llmprovider" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">LlmProvider</span>
<span className="gql-svc">gateway</span>
</div>
<ul>
  <li><code>ANTHROPIC</code></li>
  <li><code>GEMINI</code></li>
  <li><code>MISTRAL</code></li>
  <li><code>OPEN_AI</code></li>
</ul>
</div>

<div id="markuplevel" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MarkupLevel</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>DEBUG</code></li>
  <li><code>INFO</code></li>
  <li><code>WARNING</code></li>
  <li><code>ERROR</code></li>
  <li><code>NONE</code></li>
</ul>
</div>

<div id="mergemethod" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MergeMethod</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>MERGE</code></li>
  <li><code>SQUASH</code></li>
  <li><code>REBASE</code></li>
</ul>
</div>

<div id="mergeable" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Mergeable</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<ul>
  <li><code>MERGEABLE</code></li>
  <li><code>BLOCKED</code></li>
  <li><code>UNKNOWN</code></li>
</ul>
</div>

<div id="messagestate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MessageState</span>
<span className="gql-svc">moddy</span>
</div>
<ul>
  <li><code>IN_PROGRESS</code></li>
  <li><code>COMPLETED</code></li>
</ul>
</div>

<div id="organizationchangesetorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangesetOrderByField</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>CREATED_AT</code></li>
  <li><code>TYPE</code></li>
  <li><code>USER</code></li>
</ul>
</div>

<div id="organizationchangesettype" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangesetType</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>RECIPE_RUN</code></li>
  <li><code>BATCH_CHANGE</code></li>
</ul>
</div>

<div id="organizationcommitorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitOrderByField</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="organizationorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationOrderByField</span>
<span className="gql-svc">organization</span>
</div>
<ul>
  <li><code>NAME</code></li>
</ul>
</div>

<div id="organizationreciperunorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunOrderByField</span>
<span className="gql-svc">changesetreader</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>ENDED_AT</code></li>
  <li><code>STATE</code></li>
  <li><code>USER</code></li>
</ul>
</div>

<div id="organizationreciperunstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunState</span>
<span className="gql-svc">changesetreader</span>
</div>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>SYNCING</code></li>
  <li><code>RUNNING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>ERROR</code></li>
</ul>
</div>

<div id="profilingevent" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ProfilingEvent</span>
<span className="gql-svc">gateway</span>
</div>
<p>The primary event the Pyroscope agent samples on. async-profiler can only collect one of these at a time as the primary event; alloc and lock sampling run on separate channels and are always on.</p>
<ul>
  <li><code>CPU</code></li>
  <li><code>WALL</code></li>
</ul>
</div>

<div id="pullrequestactionorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionOrderByField</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>REPOSITORY_PATH</code></li>
  <li><code>STATE</code></li>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="pullrequestactionstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionState</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>IN_PROGRESS</code></li>
  <li><code>SUCCESSFUL</code></li>
  <li><code>FAILED</code></li>
  <li><code>CANCELED</code></li>
</ul>
</div>

<div id="pullrequestactiontype" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionType</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>APPROVE</code></li>
  <li><code>MERGE</code></li>
  <li><code>CLOSE</code></li>
</ul>
</div>

<div id="pullrequeststate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestState</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>OPEN</code></li>
  <li><code>DRAFT</code></li>
  <li><code>CLOSED</code></li>
  <li><code>MERGED</code></li>
</ul>
</div>

<div id="recipebundleorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeBundleOrderByField</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<ul>
  <li><code>PACKAGE_NAME</code></li>
  <li><code>VERSION</code></li>
  <li><code>REQUESTED_VERSION</code></li>
  <li><code>ECOSYSTEM</code></li>
</ul>
</div>

<div id="recipecategoryorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeCategoryOrderByField</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<ul>
  <li><code>DISPLAY_NAME</code></li>
  <li><code>RECIPE_COUNT</code></li>
</ul>
</div>

<div id="recipeecosystem" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeEcosystem</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<ul>
  <li><code>Maven</code></li>
  <li><code>NPM</code></li>
  <li><code>YAML</code></li>
  <li><code>Pip</code></li>
  <li><code>Nuget</code></li>
  <li><code>Go</code></li>
</ul>
</div>

<div id="recipegraphedgetype" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeGraphEdgeType</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<ul>
  <li><code>RECIPE</code></li>
  <li><code>PRECONDITION</code></li>
  <li><code>REFERENCE</code></li>
</ul>
</div>

<div id="recipeinstallationorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationOrderByField</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>STATUS</code></li>
</ul>
</div>

<div id="recipeinstallationstatus" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationStatus</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>PROCESSING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>ERROR</code></li>
</ul>
</div>

<div id="recipeorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeOrderByField</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<ul>
  <li><code>ID</code></li>
  <li><code>DISPLAY_NAME</code></li>
  <li><code>RECIPE_COUNT</code></li>
  <li><code>RELEVANCE</code></li>
</ul>
</div>

<div id="reciperunpriority" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeRunPriority</span>
<span className="gql-svc">changesetreader</span>
</div>
<p>Priority level for recipe runs. HIGH priority runs target small organizations (≤100 repositories). LOW priority runs target large organizations (>100 repositories).</p>
<ul>
  <li><code>HIGH</code></li>
  <li><code>LOW</code></li>
</ul>
</div>

<div id="repositorychangesetorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangesetOrderByField</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>PATH</code></li>
  <li><code>ORIGIN</code></li>
  <li><code>FILES_CHANGED</code></li>
  <li><code>SYNC_STATUS</code></li>
</ul>
</div>

<div id="repositorychangesetstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangesetState</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>Result state of a repository within a changeset.</p>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>RUNNING</code></li>
  <li><code>SUCCESS</code></li>
  <li><code>ERROR</code></li>
  <li><code>NO_LST</code></li>
  <li><code>CANCELED</code></li>
</ul>
</div>

<div id="repositorycommitorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitOrderByField</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="repositoryerrorreason" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryErrorReason</span>
<span className="gql-svc">changesetreader</span>
</div>
<ul>
  <li><code>FAILED_LOAD_AST</code></li>
  <li><code>FAILED_LOAD_RECIPE</code></li>
  <li><code>TIMEOUT</code></li>
  <li><code>RECIPE_ERROR</code></li>
</ul>
</div>

<div id="repositoryorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryOrderByField</span>
<span className="gql-svc">organization</span>
</div>
<ul>
  <li><code>ORIGIN</code></li>
  <li><code>PATH</code></li>
  <li><code>BRANCH</code></li>
  <li><code>CHANGESET</code></li>
  <li><code>LST_ARTIFACT_PUBLISHED</code></li>
</ul>
</div>

<div id="repositoryreciperunorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunOrderByField</span>
<span className="gql-svc">changesetreader</span>
</div>
<ul>
  <li><code>PATH</code></li>
  <li><code>ORIGIN</code></li>
  <li><code>STATE</code></li>
</ul>
</div>

<div id="repositorysyncstatus" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositorySyncStatus</span>
<span className="gql-svc">corechangeset</span>
</div>
<p>Sync status of a repository within a recipe run. Tracks whether the repository has been synced (cloned + LST downloaded) before the recipe execution phase begins.</p>
<p>`SKIPPED` indicates the CLI elected not to sync the repository — typically because there is no LST available to fetch — and is distinct from `FAILED`, which indicates an actual error during the sync attempt. `CANCELED` is set when sync was interrupted (e.g., the run was canceled before the repository's sync completed).</p>
<ul>
  <li><code>PENDING</code></li>
  <li><code>SYNCED</code></li>
  <li><code>FAILED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>SKIPPED</code></li>
</ul>
</div>

<div id="reviewdecision" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ReviewDecision</span>
<span className="gql-svc">changelogreader</span>
</div>
<ul>
  <li><code>APPROVED</code></li>
  <li><code>CHANGES_REQUESTED</code></li>
  <li><code>REVIEW_REQUIRED</code></li>
  <li><code>REVIEW_NOT_REQUIRED</code></li>
  <li><code>UNKNOWN</code></li>
</ul>
</div>

<div id="scmtype" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ScmType</span>
<span className="gql-svc">authz</span>
</div>
<ul>
  <li><code>GITHUB</code></li>
  <li><code>BITBUCKET</code></li>
  <li><code>BITBUCKET_CLOUD</code></li>
  <li><code>GITLAB</code></li>
  <li><code>AZURE_DEVOPS</code></li>
</ul>
</div>

<div id="sortorder" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">SortOrder</span>
<span className="gql-svc">coregraphql</span>
</div>
<ul>
  <li><code>ASC</code></li>
  <li><code>DESC</code></li>
</ul>
</div>

<div id="userorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UserOrderByField</span>
<span className="gql-svc">authz</span>
</div>
<ul>
  <li><code>EMAIL</code></li>
  <li><code>USERNAME</code></li>
  <li><code>ROLE</code></li>
  <li><code>LAST_ACTIVE</code></li>
</ul>
</div>

<div id="userrole" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UserRole</span>
<span className="gql-svc">authz</span>
</div>
<ul>
  <li><code>ADMIN</code></li>
  <li><code>USER</code></li>
</ul>
</div>

<div id="visualizationorderbyfield" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationOrderByField</span>
<span className="gql-svc">corechangeset</span>
</div>
<ul>
  <li><code>VISUALIZATION</code></li>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="visualizationrepositoryrunstate" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationRepositoryRunState</span>
<span className="gql-svc">changesetreader</span>
</div>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>PROCESSING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>FINISHED_EMPTY</code></li>
  <li><code>NO_LST</code></li>
  <li><code>ERROR</code></li>
</ul>
</div>

### Input types

<div id="accesstokenorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AccessTokenOrderByInput</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#accesstokenorderbyfield">AccessTokenOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="accesstokenwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AccessTokenWhereInput</span>
<span className="gql-svc">authz</span>
</div>
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
</div>

<div id="auditactiontypefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditActionTypeFilter</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#auditactiontype">AuditActionType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#auditactiontype">AuditActionType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#auditactiontype">AuditActionType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#auditactiontype">AuditActionType</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogexportformatfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogExportFormatFilter</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#auditlogexportformat">AuditLogExportFormat</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#auditlogexportformat">AuditLogExportFormat</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#auditlogexportformat">AuditLogExportFormat</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#auditlogexportformat">AuditLogExportFormat</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogOrderByInput</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#auditlogorderbyfield">AuditLogOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogWhereInput</span>
<span className="gql-svc">auditreader</span>
</div>
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
</div>

<div id="auditlogsdownloadorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadOrderByInput</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#auditlogsdownloadorderbyfield">AuditLogsDownloadOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogsdownloadwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditLogsDownloadWhereInput</span>
<span className="gql-svc">auditreader</span>
</div>
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
</div>

<div id="auditoutcomefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">AuditOutcomeFilter</span>
<span className="gql-svc">auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#auditoutcome">AuditOutcome</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#auditoutcome">AuditOutcome</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="booleanfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BooleanFilter</span>
<span className="gql-svc">coregraphql</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td>Boolean</td><td></td></tr>
    <tr><td><code>_neq</code></td><td>Boolean</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="buildstatefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BuildStateFilter</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#buildstate">BuildState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#buildstate">BuildState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#buildstate">BuildState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#buildstate">BuildState</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactionorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionOrderByInput</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#bulkpullrequestactionorderbyfield">BulkPullRequestActionOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactionstatefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionStateFilter</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#bulkpullrequestactionstate">BulkPullRequestActionState</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactionwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">BulkPullRequestActionWhereInput</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="changelogauthorwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogAuthorWhereInput</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="changelogentryorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntryOrderByInput</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#changelogentryorderbyfield">ChangelogEntryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogentrytypefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntryTypeFilter</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#changelogentrytype">ChangelogEntryType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#changelogentrytype">ChangelogEntryType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#changelogentrytype">ChangelogEntryType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#changelogentrytype">ChangelogEntryType</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogentrywhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogEntryWhereInput</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="changelogparticipantorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogParticipantOrderByInput</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#changelogparticipantorderbyfield">ChangelogParticipantOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogparticipantwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ChangelogParticipantWhereInput</span>
<span className="gql-svc">changelogreader</span>
</div>
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
</div>

<div id="commitinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CommitInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="commitstrategyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CommitStrategyInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="connectororderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorOrderByInput</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#connectororderbyfield">ConnectorOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="connectortooltypefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorToolTypeFilter</span>
<span className="gql-svc">gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#connectortooltype">ConnectorToolType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#connectortooltype">ConnectorToolType</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="connectorwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorWhereInput</span>
<span className="gql-svc">gateway</span>
</div>
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
</div>

<div id="conversationorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConversationOrderByInput</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#conversationorderbyfield">ConversationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversationwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConversationWhereInput</span>
<span className="gql-svc">moddy</span>
</div>
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
</div>

<div id="createconversationinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CreateConversationInput</span>
<span className="gql-svc">moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>organizationId</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="createuserorganizationinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">CreateUserOrganizationInput</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td>The name of the organization.</td></tr>
    <tr><td><code>repositories</code></td><td>[<a href="#repositoryinput">RepositoryInput</a>!]</td><td>Repositories to include in the organization.</td></tr>
  </tbody>
</table>
</div>

<div id="datatableformatfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableFormatFilter</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#datatableformat">DataTableFormat</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#datatableformat">DataTableFormat</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#datatableformat">DataTableFormat</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#datatableformat">DataTableFormat</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatableorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableOrderByInput</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#datatableorderbyfield">DataTableOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatablewhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DataTableWhereInput</span>
<span className="gql-svc">corechangeset</span>
</div>
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
</div>

<div id="datetimefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DateTimeFilter</span>
<span className="gql-svc">coregraphql</span>
</div>
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
</div>

<div id="devcenterrunorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunOrderByInput</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#devcenterrunorderbyfield">DevCenterRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrunstatefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunStateFilter</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#devcenterrunstate">DevCenterRunState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#devcenterrunstate">DevCenterRunState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#devcenterrunstate">DevCenterRunState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#devcenterrunstate">DevCenterRunState</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrunwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DevCenterRunWhereInput</span>
<span className="gql-svc">changesetreader</span>
</div>
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
</div>

<div id="directcommitinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DirectCommitInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>Direct commit to origin. No additional options required.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_empty</code></td><td>Boolean</td><td>Placeholder field. Direct commits require no additional configuration.</td></tr>
  </tbody>
</table>
</div>

<div id="exchangeauthorizationcodeinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ExchangeAuthorizationCodeInput</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>authorizationId</code></td><td>ID!</td><td>The authorization ID returned from initiateAuthorization or from NeedsAuthorization.</td></tr>
    <tr><td><code>code</code></td><td>String!</td><td>Authorization code from the OAuth callback.</td></tr>
    <tr><td><code>redirectUri</code></td><td>String!</td><td>The redirect URI used in the authorization request. Note: This field is deprecated - the server uses the stored redirect URI from the authorization to ensure an exact match.</td></tr>
  </tbody>
</table>
</div>

<div id="filechangeorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">FileChangeOrderByInput</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#filechangeorderbyfield">FileChangeOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="filechangewhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">FileChangeWhereInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="forkandpullrequestcommitinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ForkAndPullRequestCommitInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="forkcommitinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ForkCommitInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>Commit to a fork of the origin repository.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>organization</code></td><td>String</td><td>Organization to create the fork in. If unset, creates in user's personal account.</td></tr>
    <tr><td><code>prefixOrganizationName</code></td><td>Boolean</td><td>Prefix the fork name with the origin organization to avoid name collisions. Example: openrewrite/rewrite -> myuser/openrewrite__rewrite</td></tr>
  </tbody>
</table>
</div>

<div id="gorecipebundleinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GoRecipeBundleInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="gpginput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">GpgInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>privateKey</code></td><td>String!</td><td></td></tr>
    <tr><td><code>publicKey</code></td><td>String!</td><td></td></tr>
    <tr><td><code>passphrase</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="idfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">IDFilter</span>
<span className="gql-svc">coregraphql</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td>ID</td><td></td></tr>
    <tr><td><code>_neq</code></td><td>ID</td><td></td></tr>
    <tr><td><code>_in</code></td><td>[ID!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[ID!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="initiateauthorizationinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">InitiateAuthorizationInput</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin to authorize (e.g., github.com, gitlab.com).</td></tr>
    <tr><td><code>redirectUri</code></td><td>String!</td><td>The redirect URI where the VCS will send the callback. Must match an allowed redirect URI in the OAuth app configuration.</td></tr>
  </tbody>
</table>
</div>

<div id="intfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">IntFilter</span>
<span className="gql-svc">coregraphql</span>
</div>
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
</div>

<div id="lstartifactwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">LstArtifactWhereInput</span>
<span className="gql-svc">organization</span>
</div>
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
</div>

<div id="mavenrecipebundleinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">MavenRecipeBundleInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>groupId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>artifactId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="npmrecipebundleinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">NpmRecipeBundleInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="nugetrecipebundleinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">NugetRecipeBundleInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationchangesetorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangesetOrderByInput</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationchangesetorderbyfield">OrganizationChangesetOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationchangesettypefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangesetTypeFilter</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#organizationchangesettype">OrganizationChangesetType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#organizationchangesettype">OrganizationChangesetType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#organizationchangesettype">OrganizationChangesetType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#organizationchangesettype">OrganizationChangesetType</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationchangesetwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationChangesetWhereInput</span>
<span className="gql-svc">corechangeset</span>
</div>
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
</div>

<div id="organizationcommitorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitOrderByInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationcommitorderbyfield">OrganizationCommitOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationcommitwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationCommitWhereInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="organizationorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationOrderByInput</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationorderbyfield">OrganizationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunOrderByInput</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationreciperunorderbyfield">OrganizationRecipeRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunstatefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunStateFilter</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#organizationreciperunstate">OrganizationRecipeRunState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#organizationreciperunstate">OrganizationRecipeRunState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#organizationreciperunstate">OrganizationRecipeRunState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#organizationreciperunstate">OrganizationRecipeRunState</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationRecipeRunWhereInput</span>
<span className="gql-svc">changesetreader</span>
</div>
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
</div>

<div id="organizationwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">OrganizationWhereInput</span>
<span className="gql-svc">organization</span>
</div>
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
</div>

<div id="pathfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PathFilter</span>
<span className="gql-svc">coregraphql</span>
</div>
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
</div>

<div id="piprecipebundleinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PipRecipeBundleInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionOrderByInput</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#pullrequestactionorderbyfield">PullRequestActionOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionstatefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionStateFilter</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#pullrequestactionstate">PullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#pullrequestactionstate">PullRequestActionState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#pullrequestactionstate">PullRequestActionState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#pullrequestactionstate">PullRequestActionState</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactiontypefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionTypeFilter</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#pullrequestactiontype">PullRequestActionType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#pullrequestactiontype">PullRequestActionType</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#pullrequestactiontype">PullRequestActionType</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestActionWhereInput</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>state</code></td><td><a href="#pullrequestactionstatefilter">PullRequestActionStateFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#pullrequestactionwhereinput">PullRequestActionWhereInput</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestcommitinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestCommitInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="pullrequestinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestInput</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repositoryinput">RepositoryInput</a>!</td><td></td></tr>
    <tr><td><code>number</code></td><td>Int!</td><td>Pull request number.</td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestselectioninput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestSelectionInput</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>Selects pull requests for a bulk action.</p>
<p>The `where` filter defines a base set of matching PRs. The optional `pullRequests` modifier can include or exclude specific PRs from that base set.</p>
<p>Examples: - Filter-only: `&#123; where: &#123; ... &#125; &#125;` — all matching PRs - Explicit: `&#123; pullRequests: &#123; include: [...] &#125; &#125;` — exactly those PRs - Filter + exclusions: `&#123; where: &#123; ... &#125;, pullRequests: &#123; exclude: [...] &#125; &#125;` — matching minus excluded - Filter + additions: `&#123; where: &#123; ... &#125;, pullRequests: &#123; include: [...] &#125; &#125;` — matching plus included</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>where</code></td><td><a href="#changelogentrywhereinput">ChangelogEntryWhereInput</a></td><td>Filter for the base set of PRs. Omit to start with an empty set.</td></tr>
    <tr><td><code>pullRequests</code></td><td><a href="#pullrequestselectionmodifier">PullRequestSelectionModifier</a></td><td>Modify the base set by including or excluding specific PRs.</td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestselectionmodifier" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestSelectionModifier</span>
<span className="gql-svc">changelogreader</span>
</div>
<p>Modifies a PR selection by either including or excluding specific PRs. Exactly one field must be set.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>include</code></td><td>[<a href="#pullrequestinput">PullRequestInput</a>!]</td><td>Add these PRs to the base set.</td></tr>
    <tr><td><code>exclude</code></td><td>[<a href="#pullrequestinput">PullRequestInput</a>!]</td><td>Remove these PRs from the base set.</td></tr>
  </tbody>
</table>
</div>

<div id="pullrequeststatefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">PullRequestStateFilter</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#pullrequeststate">PullRequestState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#pullrequeststate">PullRequestState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#pullrequeststate">PullRequestState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#pullrequeststate">PullRequestState</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipebundleinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeBundleInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
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
</div>

<div id="recipebundleorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeBundleOrderByInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipebundleorderbyfield">RecipeBundleOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipebundlewhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeBundleWhereInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
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
</div>

<div id="recipecategoryorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeCategoryOrderByInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipecategoryorderbyfield">RecipeCategoryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipecategorywhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeCategoryWhereInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
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
</div>

<div id="recipeecosystemfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeEcosystemFilter</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#recipeecosystem">RecipeEcosystem</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#recipeecosystem">RecipeEcosystem</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#recipeecosystem">RecipeEcosystem</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#recipeecosystem">RecipeEcosystem</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInput</span>
<span className="gql-svc">recipeworker</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>Fully-qualified recipe ID. Example: `org.openrewrite.java.search.FindMethods`</td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptioninput">RecipeOptionInput</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallationorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationOrderByInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipeinstallationorderbyfield">RecipeInstallationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallationstatusfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationStatusFilter</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#recipeinstallationstatus">RecipeInstallationStatus</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#recipeinstallationstatus">RecipeInstallationStatus</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#recipeinstallationstatus">RecipeInstallationStatus</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#recipeinstallationstatus">RecipeInstallationStatus</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallationwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeInstallationWhereInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
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
</div>

<div id="recipeoptioninput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeOptionInput</span>
<span className="gql-svc">recipeworker</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td>Option name. Example: `methodPattern`</td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td>Option value. Example: `java.util.List add(..)`</td></tr>
  </tbody>
</table>
</div>

<div id="recipeorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeOrderByInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipeorderbyfield">RecipeOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipewhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RecipeWhereInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<p>Filter input for Recipe queries. Use `query` for semantic search, or use field filters for exact matching.</p>
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
</div>

<div id="repositorychangesetorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangesetOrderByInput</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositorychangesetorderbyfield">RepositoryChangesetOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorychangesetstatefilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangesetStateFilter</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#repositorychangesetstate">RepositoryChangesetState</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#repositorychangesetstate">RepositoryChangesetState</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#repositorychangesetstate">RepositoryChangesetState</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#repositorychangesetstate">RepositoryChangesetState</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorychangesetwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryChangesetWhereInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
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
</div>

<div id="repositorycommitorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitOrderByInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositorycommitorderbyfield">RepositoryCommitOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryCommitWhereInput</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>Filter input for repository-level commit queries.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_and</code></td><td>[<a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#repositorycommitwhereinput">RepositoryCommitWhereInput</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryInput</span>
<span className="gql-svc">corecommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td></td></tr>
    <tr><td><code>path</code></td><td>String!</td><td></td></tr>
    <tr><td><code>branch</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryOrderByInput</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositoryorderbyfield">RepositoryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunOrderByInput</span>
<span className="gql-svc">changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositoryreciperunorderbyfield">RepositoryRecipeRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryRecipeRunWhereInput</span>
<span className="gql-svc">changesetreader</span>
</div>
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
</div>

<div id="repositorywhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RepositoryWhereInput</span>
<span className="gql-svc">organization</span>
</div>
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
</div>

<div id="reviewdecisionfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ReviewDecisionFilter</span>
<span className="gql-svc">changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#reviewdecision">ReviewDecision</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#reviewdecision">ReviewDecision</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#reviewdecision">ReviewDecision</a>!]</td><td></td></tr>
    <tr><td><code>_nin</code></td><td>[<a href="#reviewdecision">ReviewDecision</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="revokescmtokeninput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RevokeScmTokenInput</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin to revoke the token for (e.g., github.com, gitlab.com).</td></tr>
  </tbody>
</table>
</div>

<div id="rundevcenterinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RunDevCenterInput</span>
<span className="gql-svc">recipeworker</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>organizationId</code></td><td>ID!</td><td>The organization to run DevCenter for.</td></tr>
    <tr><td><code>recipeId</code></td><td>ID!</td><td>The DevCenter recipe to run.</td></tr>
  </tbody>
</table>
</div>

<div id="runrecipeinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">RunRecipeInput</span>
<span className="gql-svc">recipeworker</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>recipe</code></td><td><a href="#recipeinput">RecipeInput</a>!</td><td>The recipe to run with any configured options.</td></tr>
    <tr><td><code>organizationId</code></td><td>ID!</td><td>Run against all repositories in this organization.</td></tr>
    <tr><td><code>parentId</code></td><td>ID</td><td>Optional parent changeset ID this recipe run is derived from.</td></tr>
    <tr><td><code>excludeFiles</code></td><td>[String!]</td><td>Exclude files matching these patterns.</td></tr>
  </tbody>
</table>
</div>

<div id="scmaccesstoken" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ScmAccessToken</span>
<span className="gql-svc">changesetcommitter</span>
</div>
<p>An access token for a specific SCM origin. When provided on a commit mutation, these tokens are preferred over stored OAuth tokens.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>value</code></td><td>String!</td><td></td></tr>
    <tr><td><code>origin</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="stringfilter" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">StringFilter</span>
<span className="gql-svc">coregraphql</span>
</div>
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
</div>

<div id="updateuserorganizationinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UpdateUserOrganizationInput</span>
<span className="gql-svc">organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>The ID of the organization to update.</td></tr>
    <tr><td><code>name</code></td><td>String</td><td>The new name for the organization.</td></tr>
    <tr><td><code>repositories</code></td><td>[<a href="#repositoryinput">RepositoryInput</a>!]</td><td>Repositories to include in the organization. If provided, replaces the current list.</td></tr>
  </tbody>
</table>
</div>

<div id="userorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UserOrderByInput</span>
<span className="gql-svc">authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#userorderbyfield">UserOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="userwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">UserWhereInput</span>
<span className="gql-svc">coregraphql</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>email</code></td><td><a href="#stringfilter">StringFilter</a></td><td></td></tr>
    <tr><td><code>_and</code></td><td>[<a href="#userwhereinput">UserWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_or</code></td><td>[<a href="#userwhereinput">UserWhereInput</a>!]</td><td></td></tr>
    <tr><td><code>_not</code></td><td><a href="#userwhereinput">UserWhereInput</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationoptioninput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationOptionInput</span>
<span className="gql-svc">changesetvisualizer</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationorderbyinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationOrderByInput</span>
<span className="gql-svc">corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#visualizationorderbyfield">VisualizationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationwhereinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">VisualizationWhereInput</span>
<span className="gql-svc">corechangeset</span>
</div>
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
</div>

<div id="yamlrecipebundleinput" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">YamlRecipeBundleInput</span>
<span className="gql-svc">recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>yaml</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
    <tr><td><code>primary</code></td><td>ID</td><td>The ID of the primary recipe in this bundle. When specified, only this recipe will be shown in the marketplace categories, hiding other recipes from this bundle. This is used for the Moderne Builder feature where users build complex composite recipes and we don't want to expose intermediate recipes in the marketplace.</td></tr>
  </tbody>
</table>
</div>

### Unions

<div id="connectortool" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">ConnectorTool</span>
<span className="gql-svc">gateway</span>
</div>
<p>= <a href="#githubconfiguration">GithubConfiguration</a> | <a href="#gitlabconfiguration">GitLabConfiguration</a> | <a href="#bitbucketconfiguration">BitbucketConfiguration</a> | <a href="#bitbucketcloudconfiguration">BitbucketCloudConfiguration</a> | <a href="#azuredevopsconfiguration">AzureDevOpsConfiguration</a> | <a href="#artifactoryconfiguration">ArtifactoryConfiguration</a> | <a href="#mavenconfiguration">MavenConfiguration</a> | <a href="#pypiconfiguration">PypiConfiguration</a> | <a href="#npmconfiguration">NpmConfiguration</a> | <a href="#nugetconfiguration">NugetConfiguration</a> | <a href="#generichttptoolconfiguration">GenericHttpToolConfiguration</a> | <a href="#organizationconfiguration">OrganizationConfiguration</a> | <a href="#llmconfiguration">LlmConfiguration</a> | <a href="#s3configuration">S3Configuration</a></p>
</div>

### Scalars

<div id="base64" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Base64</span>
<span className="gql-svc">coregraphql</span>
</div>
<p>`Base64` represents a base64 encoded string. In the browser, `btoa` encodes ASCII strings to Base64.</p>
</div>

<div id="date" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Date</span>
<span className="gql-svc">coregraphql</span>
</div>
</div>

<div id="datetime" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">DateTime</span>
<span className="gql-svc">coregraphql</span>
</div>
</div>

<div id="duration" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Duration</span>
<span className="gql-svc">coregraphql</span>
</div>
</div>

<div id="json" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">JSON</span>
<span className="gql-svc">coregraphql</span>
</div>
</div>

<div id="long" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Long</span>
<span className="gql-svc">coregraphql</span>
</div>
</div>

<div id="markdown" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Markdown</span>
<span className="gql-svc">coregraphql</span>
</div>
<p>Contents may contain Markdown, HTML, or other text and should be passed through a Markdown parser by consumers</p>
</div>

<div id="object" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Object</span>
<span className="gql-svc">coregraphql</span>
</div>
</div>

<div id="path" className="gql-card">
<div className="gql-hdr">
<span className="gql-name">Path</span>
<span className="gql-svc">coregraphql</span>
</div>
<p>A file path relative to repository root (e.g., "src/main/java/Foo.java").</p>
</div>

