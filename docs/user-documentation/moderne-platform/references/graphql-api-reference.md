---
sidebar_label: GraphQL API reference
description: Complete reference for the Moderne GraphQL API, including all queries, mutations, subscriptions, and types.
hide_title: true
---

<h1>GraphQL API reference</h1>

<p><em>This page is auto-generated from the Moderne GraphQL schema. Do not edit manually.</em></p>

## Queries

<div id="auditLogs" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>auditLogs</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(first: Int = 100, after: String, where: <a href="#auditlogwhereinput">AuditLogWhereInput</a>, orderBy: [<a href="#auditlogorderbyinput">AuditLogOrderByInput</a>!]): <a href="#auditlogconnection">AuditLogConnection</a>!</div>
<p>Query audit log events with pagination and filtering.</p>
</div>

<div id="auditLogsDownloads" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>auditLogsDownloads</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(first: Int = 50, after: String, where: <a href="#auditlogsdownloadwhereinput">AuditLogsDownloadWhereInput</a>, orderBy: [<a href="#auditlogsdownloadorderbyinput">AuditLogsDownloadOrderByInput</a>!]): <a href="#auditlogsdownloadconnection">AuditLogsDownloadConnection</a>!</div>
<p>Query audit log downloads with pagination and filtering. Use where: &#123; id: &#123; _eq: "..." &#125; &#125; to poll a specific download.</p>
</div>

<div id="bulkPullRequestAction" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>bulkPullRequestAction</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): <a href="#bulkpullrequestaction">BulkPullRequestAction</a></div>
<p>Get a bulk pull request action by ID to poll for progress.</p>
</div>

<div id="capabilities" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>capabilities</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>: <a href="#platformcapabilities">PlatformCapabilities</a>!</div>
<p>Returns which optional platform features are enabled in this deployment. Each field defaults to false and is overridden to true by the corresponding optional service when it is present in the supergraph composition.</p>
</div>

<div id="codeSearch" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>codeSearch</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>code-search</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(repositoryId: String!, query: String!, first: Int = 100, after: String): <a href="#codesearchresultconnection">CodeSearchResultConnection</a>!</div>
<p>Search source code across artifact repositories. Searches the given repository and all its descendants in the hierarchy. Results are grouped by artifact (groupId:artifactId) with file-level matches.</p>
</div>

<div id="connectors" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>connectors</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(first: Int = 100, after: String, where: <a href="#connectorwhereinput">ConnectorWhereInput</a>, orderBy: [<a href="#connectororderbyinput">ConnectorOrderByInput</a>!]): <a href="#connectorconnection">ConnectorConnection</a>!</div>
</div>

<div id="conversation" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>conversation</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(conversationId: ID!): <a href="#conversation">Conversation</a></div>
<p>Look up a single conversation by id. Returns null when no conversation matches or the caller does not have access. Restores the v1 query the moderne-ui client already references.</p>
</div>

<div id="currentUser" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>currentUser</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>: <a href="#user">User</a>!</div>
<p>Returns the currently authenticated user.</p>
</div>

<div id="devCenterRecipes" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>devCenterRecipes</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>: [<a href="#recipedescriptor">RecipeDescriptor</a>!]!</div>
<p>Get available DevCenter recipes for configuration.</p>
</div>

<div id="license" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>license</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>: <a href="#license">License</a>!</div>
<p>Request a new license lease key</p>
</div>

<div id="organization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>organization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): <a href="#organization">Organization</a>!</div>
</div>

<div id="organizations" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>organizations</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(first: Int = 100, after: String, where: <a href="#organizationwhereinput">OrganizationWhereInput</a>, orderBy: [<a href="#organizationorderbyinput">OrganizationOrderByInput</a>!]): <a href="#organizationconnection">OrganizationConnection</a>!</div>
</div>

<div id="scmConnections" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>scmConnections</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>: [<a href="#scmconnection">ScmConnection</a>!]!</div>
<p>Returns connections for all SCM providers.</p>
</div>

<div id="users" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>users</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(first: Int = 100, after: String, where: <a href="#userwhereinput">UserWhereInput</a>, orderBy: [<a href="#userorderbyinput">UserOrderByInput</a>!]): <a href="#userconnection">UserConnection</a>!</div>
<p>Returns users with option to filter by role.</p>
</div>

<div id="verifyToken" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>verifyToken</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(origin: String!, scmType: <a href="#scmtype">ScmType</a>!): String</div>
</div>

## Mutations

<div id="approvePullRequests" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>approvePullRequests</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</div>
<p>Approve pull requests in bulk. Returns the queued action for polling.</p>
</div>

<div id="cancelBulkPullRequestAction" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>cancelBulkPullRequestAction</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): <a href="#bulkpullrequestactioncanceled">BulkPullRequestActionCanceled</a>!</div>
<p>Cancel a pending bulk pull request action.</p>
</div>

<div id="cancelCommit" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>cancelCommit</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): <a href="#organizationcommitcanceled">OrganizationCommitCanceled</a>!</div>
<p>Cancel a running commit operation.</p>
</div>

<div id="cancelDevCenterRun" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>cancelDevCenterRun</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): ID!</div>
<p>Cancel a DevCenter run. Cancellation is best-effort and asynchronous.</p>
</div>

<div id="cancelMessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>cancelMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(conversationId: ID!, messageId: ID): Boolean!</div>
<p>Interrupt the currently-running turn for a conversation. The virtual thread driving the turn is interrupted — a blocking LLM stream unwinds immediately, and long-running downstream work (recipe runs) receives a best-effort cancel via `cancelRecipeRun` on recipe-worker. Cheap tool calls finish naturally. A terminal CANCELLED `ErrorMessage` is appended to the log regardless.</p>
<p>LLM-memory consistency on the next turn is preserved by the JSONL collapse: `buildChatMessages` pairs every tool-origin row into an `AiMessage(toolRequests)` + `ToolExecutionResultMessage` batch, and only rows that actually persisted are rebuilt — partially-executed tool batches are reconstructed from whichever tool-origin rows made it to the log.</p>
<p>Returns <code>true</code> when a running turn was actually interrupted, <code>false</code> when the conversation was already idle (no-op, not an error). <code>messageId</code> is accepted for client compatibility but only the conversation's active turn is cancellable — there is never more than one turn in flight.</p>
</div>

<div id="cancelRecipeRun" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>cancelRecipeRun</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): ID!</div>
<p>Cancel a recipe run. Cancellation is best-effort and asynchronous.</p>
</div>

<div id="clearOrganizationPrompt" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>clearOrganizationPrompt</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!): Boolean!</div>
<p>Clear the organization-level prompt override, falling back to universal.</p>
</div>

<div id="clearUserPrompt" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>clearUserPrompt</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>: Boolean!</div>
<p>Clear the current user's prompt override, falling back to organization or universal.</p>
</div>

<div id="closePullRequests" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>closePullRequests</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</div>
<p>Close pull requests in bulk. Returns the queued action for polling.</p>
</div>

<div id="commit" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>commit</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#commitinput">CommitInput</a>!): <a href="#organizationcommitqueued">OrganizationCommitQueued</a>!</div>
<p>Create commits from a changeset (recipe run, batch change, etc.).</p>
</div>

<div id="createAccessToken" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>createAccessToken</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(description: String, expiresAt: <a href="#datetime">DateTime</a>): <a href="#createaccesstokenresult">CreateAccessTokenResult</a>!</div>
<p>Creates a new Moderne Personal Access Token for the current user. Returns the token value only once - it cannot be retrieved again.</p>
</div>

<div id="createConversation" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>createConversation</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#createconversationinput">CreateConversationInput</a>!, waitForCompletion: Boolean = false): <a href="#sendmessageresult">SendMessageResult</a>!</div>
<p>Create a new conversation and send the first message. Uses the effective prompt for the organization context. `waitForCompletion` has the same semantics as on `sendMessage`.</p>
</div>

<div id="createUserOrganization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>createUserOrganization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#createuserorganizationinput">CreateUserOrganizationInput</a>!): <a href="#organization">Organization</a>!</div>
<p>Create a new user-defined organization visible only to the current user.</p>
</div>

<div id="deleteUser" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>deleteUser</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(email: String!): Boolean!</div>
<p>Deletes a user and all associated access tokens. Returns true if the user was found and deleted.</p>
</div>

<div id="deleteUserOrganization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>deleteUserOrganization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): Boolean!</div>
<p>Delete a user-defined organization.</p>
</div>

<div id="downloadAuditLogs" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>downloadAuditLogs</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(first: Int, since: <a href="#datetime">DateTime</a>, until: <a href="#datetime">DateTime</a>, format: <a href="#auditlogexportformat">AuditLogExportFormat</a>!): <a href="#auditlogsdownload">AuditLogsDownload</a>!</div>
<p>Start an asynchronous export of audit logs. Returns a task whose state can be polled via auditLogsDownloads.</p>
</div>

<div id="downloadDataTable" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>downloadDataTable</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(changesetId: ID!, dataTable: String!, group: String, format: <a href="#datatableformat">DataTableFormat</a>!): <a href="#datatable">DataTable</a>!</div>
<p>Start or retrieve a data table download. If the same data table + group + format combination was already requested, returns the existing download state.</p>
</div>

<div id="exchangeAuthorizationCode" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>exchangeAuthorizationCode</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#exchangeauthorizationcodeinput">ExchangeAuthorizationCodeInput</a>!): <a href="#exchangeauthorizationresult">ExchangeAuthorizationResult</a>!</div>
<p>Exchange an OAuth authorization code for an access token.</p>
<p>This unified mutation handles all OAuth 2.0 VCS providers. The backend uses the authorizationId to look up: - The origin and VCS type - PKCE code_verifier (GitLab)</p>
<p>On success, the token is stored and future requests will be authenticated.</p>
</div>

<div id="initiateAuthorization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>initiateAuthorization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#initiateauthorizationinput">InitiateAuthorizationInput</a>!): <a href="#oauthauthorization">OAuthAuthorization</a>!</div>
<p>Initiate OAuth authorization for a VCS origin. Returns an authorization URL to redirect the user to.</p>
<p>The backend constructs the full OAuth URL including: - PKCE code_challenge for GitLab - Correct scopes for each VCS type - State parameter for CSRF protection</p>
<p>The authorization ID should be passed to exchangeAuthorizationCode after the user completes OAuth.</p>
</div>

<div id="installRecipesForCurrentUser" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>installRecipesForCurrentUser</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!</div>
<p>Install a recipe bundle to the current user's personal marketplace.</p>
</div>

<div id="installRecipesForOrganization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>installRecipesForOrganization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!, bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!</div>
<p>Install a recipe bundle to a specific organization's marketplace. Requires the `admin` role.</p>
</div>

<div id="installRecipesUniversal" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>installRecipesUniversal</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(bundle: <a href="#recipebundleinput">RecipeBundleInput</a>!): <a href="#recipeinstallation">RecipeInstallation</a>!</div>
<p>Install a recipe bundle to the universal marketplace (visible to all). Requires the `admin` role.</p>
</div>

<div id="mergePullRequests" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>mergePullRequests</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!, selection: <a href="#pullrequestselectioninput">PullRequestSelectionInput</a>!, mergeMethod: <a href="#mergemethod">MergeMethod</a>!, deleteSourceBranch: Boolean! = false): <a href="#bulkpullrequestactionqueued">BulkPullRequestActionQueued</a>!</div>
<p>Merge pull requests in bulk. Returns the queued action for polling.</p>
</div>

<div id="reindexChangelog" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>reindexChangelog</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogwriter</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(since: <a href="#datetime">DateTime</a>!, origin: String): <a href="#reindexresult">ReindexResult</a>!</div>
<p>Reset poll cursors so the next poll cycle re-fetches and re-enriches changelog entries from the given timestamp forward. Use this to backfill data after deploying enrichment improvements.</p>
</div>

<div id="revokeAccessToken" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>revokeAccessToken</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(id: ID!): Boolean!</div>
<p>Revokes an access token by ID. Returns true if the token was revoked, false if not found.</p>
</div>

<div id="revokeAllAccessTokens" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>revokeAllAccessTokens</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(email: String!): Boolean!</div>
<p>Revokes all access tokens for a given user. Returns true if all token were revoked, otherwise false.</p>
</div>

<div id="revokeScmToken" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>revokeScmToken</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#revokescmtokeninput">RevokeScmTokenInput</a>!): <a href="#revoketokenresult">RevokeTokenResult</a>!</div>
<p>Revoke an SCM OAuth token for the current user and a specific origin. This removes the stored token, disconnecting the user from the VCS.</p>
</div>

<div id="runDevCenter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>runDevCenter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#rundevcenterinput">RunDevCenterInput</a>!): <a href="#devcenterrunrunning">DevCenterRunRunning</a>!</div>
<p>Start a DevCenter run for an organization. Returns immediately with running status.</p>
</div>

<div id="runRecipe" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>runRecipe</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#runrecipeinput">RunRecipeInput</a>!): <a href="#organizationreciperunqueued">OrganizationRecipeRunQueued</a>!</div>
<p>Run a recipe against repositories. Returns the recipe run in its initial queued state.</p>
</div>

<div id="runVisualization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>runVisualization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetvisualizer</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!, visualizationId: ID!, options: [<a href="#visualizationoptioninput">VisualizationOptionInput</a>!]): <a href="#visualization">Visualization</a>!</div>
<p>Request a visualization to be generated based on the provided descriptor. Returns the existing visualization if already run with the same options, otherwise queues a new visualization run.</p>
</div>

<div id="sendMessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>sendMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(conversationId: ID!, message: String!, waitForCompletion: Boolean = false): <a href="#sendmessageresult">SendMessageResult</a>!</div>
<p>Send a message to an existing conversation. Returns a handle for polling — `initialCursor` is the cursor to pass to the next `messages(after:)` query, and `turnState` carries the server- recommended poll cadence.</p>
<p>When `waitForCompletion: true`, the mutation blocks until the turn completes (or the server cap of 4 minutes is reached, whichever comes first). On cap, the mutation returns the current turn state rather than erroring so the caller can continue polling.</p>
</div>

<div id="setOrganizationPrompt" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>setOrganizationPrompt</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!, content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!</div>
<p>Set the system prompt for a specific organization (overrides universal).</p>
</div>

<div id="setProfiling" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>setProfiling</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(enabled: Boolean!, event: <a href="#profilingevent">ProfilingEvent</a> = CPU): Boolean!</div>
<p>Turn continuous profiling on or off for this tenant. When enabled, Pyroscope profiles for every service start landing in the Pyroscope UI within seconds. The primary event the agent samples on is selected by `event` (defaults to CPU); calling the mutation again with a different event while profiling is already on rotates the agent to the new event. Fails when the profiling capability is not enabled for the tenant. Admin role required.</p>
</div>

<div id="setUniversalPrompt" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>setUniversalPrompt</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!</div>
<p>Set the universal (default) system prompt.</p>
</div>

<div id="setUserPrompt" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>setUserPrompt</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(content: <a href="#markdown">Markdown</a>!): <a href="#prompt">Prompt</a>!</div>
<p>Set the system prompt for the current user (overrides organization and universal).</p>
</div>

<div id="uninstallRecipesFromCurrentUser" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>uninstallRecipesFromCurrentUser</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!</div>
<p>Uninstall a recipe bundle from the current user's personal marketplace. Returns the number of recipes that were removed.</p>
</div>

<div id="uninstallRecipesFromOrganization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>uninstallRecipesFromOrganization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(organizationId: ID!, packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!</div>
<p>Uninstall a recipe bundle from a specific organization's marketplace. Returns the number of recipes that were removed. Requires the `admin` role.</p>
</div>

<div id="uninstallRecipesUniversal" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>uninstallRecipesUniversal</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(packageName: String!): <a href="#recipeuninstallation">RecipeUninstallation</a>!</div>
<p>Uninstall a recipe bundle from the universal marketplace. Returns the number of recipes that were removed. Requires the `admin` role.</p>
</div>

<div id="updateUserOrganization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>updateUserOrganization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<div style={{fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8', margin: '0 0 6px'}}>(input: <a href="#updateuserorganizationinput">UpdateUserOrganizationInput</a>!): <a href="#organization">Organization</a>!</div>
<p>Update an existing user-defined organization.</p>
</div>

## Types

### Object types

<div id="accesstoken" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AccessToken</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="accesstokenconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AccessTokenConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="accesstokenedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AccessTokenEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#accesstoken">AccessToken</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="artifactoryconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ArtifactoryConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="auditlog" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLog</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
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

<div id="auditlogconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
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

<div id="auditlogedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#auditlog">AuditLog</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogsdownloadconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
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

<div id="auditlogsdownloadedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#auditlogsdownload">AuditLogsDownload</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogsdownloaderror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#auditlogsdownload">AuditLogsDownload</a></span>
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

<div id="auditlogsdownloadfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#auditlogsdownload">AuditLogsDownload</a></span>
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

<div id="auditlogsdownloadprocessing" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadProcessing</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#auditlogsdownload">AuditLogsDownload</a></span>
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

<div id="azuredevopsconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AzureDevOpsConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="azuredevopsconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AzureDevOpsConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#scmconnection">ScmConnection</a></span>
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

<div id="azuredevopsoauth" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AzureDevOpsOauth</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>tenantId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="batchchange" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BatchChange</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
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

<div id="batchchangefilechange" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BatchChangeFileChange</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#filechange">FileChange</a></span>
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

<div id="bitbucketcloudconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BitbucketCloudConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="bitbucketcloudconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BitbucketCloudConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#scmconnection">ScmConnection</a></span>
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

<div id="bitbucketcloudoauth" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BitbucketCloudOauth</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bitbucketconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BitbucketConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="bitbucketconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BitbucketConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#scmconnection">ScmConnection</a></span>
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

<div id="bitbucketoauth" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BitbucketOauth</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="branchcommitoptions" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BranchCommitOptions</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#commitoptions">CommitOptions</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactioncanceled" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionCanceled</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
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

<div id="bulkpullrequestactionconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="bulkpullrequestactionedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#bulkpullrequestaction">BulkPullRequestAction</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactionerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
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

<div id="bulkpullrequestactionfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
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

<div id="bulkpullrequestactionqueued" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionQueued</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
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

<div id="bulkpullrequestactionrunning" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionRunning</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#bulkpullrequestaction">BulkPullRequestAction</a></span>
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

<div id="changeparticipant" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangeParticipant</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogcommit" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogCommit</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#changelogentry">ChangelogEntry</a></span>
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

<div id="changelogentryconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntryConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogentryedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntryEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#changelogentry">ChangelogEntry</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogparticipantconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogParticipantConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogparticipantedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogParticipantEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#changeparticipant">ChangeParticipant</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogpullrequest" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogPullRequest</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#changelogentry">ChangelogEntry</a></span>
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

<div id="clidownloadinstructionlink" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CliDownloadInstructionLink</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>label</code></td><td>String!</td><td></td></tr>
    <tr><td><code>uri</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="codesearchresult" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CodeSearchResult</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>code-search</span>
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

<div id="codesearchresultconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CodeSearchResultConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>code-search</span>
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

<div id="codesearchresultedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CodeSearchResultEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>code-search</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#codesearchresult">CodeSearchResult</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="column" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Column</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="connector" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Connector</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="connectorconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="connectoredge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#connector">Connector</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversation" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Conversation</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="conversationconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConversationConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#conversationedge">ConversationEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversationedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConversationEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#conversation">Conversation</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversationturnstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConversationTurnState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="createaccesstokenresult" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CreateAccessTokenResult</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="datatableavailable" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableAvailable</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#datatable">DataTable</a></span>
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

<div id="datatableconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="datatabledescriptor" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableDescriptor</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="datatableedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#datatable">DataTable</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatableerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#datatable">DataTable</a></span>
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

<div id="datatablefinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#datatable">DataTable</a></span>
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

<div id="datatableprocessing" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableProcessing</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#datatable">DataTable</a></span>
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

<div id="datatablesqlmessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableSqlMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#message">Message</a></span>
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

<div id="datatablesmessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTablesMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#message">Message</a></span>
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

<div id="devcenter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>recipe</code></td><td><a href="#recipedescriptor">RecipeDescriptor</a></td><td>The currently configured DevCenter recipe for this organization.</td></tr>
    <tr><td><code>runs</code></td><td>(first: Int = 10, after: String, where: <a href="#devcenterrunwhereinput">DevCenterRunWhereInput</a>, orderBy: [<a href="#devcenterrunorderbyinput">DevCenterRunOrderByInput</a>!]): <a href="#devcenterrunconnection">DevCenterRunConnection</a>!</td><td>DevCenter runs for this organization, ordered by start time descending.</td></tr>
  </tbody>
</table>
</div>

<div id="devcentercard" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterCard</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="devcentercarddescriptor" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterCardDescriptor</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="devcentermeasure" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterMeasure</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="devcentermeasuredescriptor" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterMeasureDescriptor</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="devcenterorganization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterOrganization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="devcenterrepositories" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRepositories</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="devcenterruncanceled" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunCanceled</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#devcenterrun">DevCenterRun</a></span>
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

<div id="devcenterrunconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="devcenterrunedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#devcenterrun">DevCenterRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrunerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#devcenterrun">DevCenterRun</a></span>
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

<div id="devcenterrunfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#devcenterrun">DevCenterRun</a></span>
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

<div id="devcenterrunrunning" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunRunning</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#devcenterrun">DevCenterRun</a></span>
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

<div id="diffstat" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DiffStat</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="directcommitsucceeded" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DirectCommitSucceeded</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="errormessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ErrorMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#message">Message</a></span>
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

<div id="exchangeauthorizationresult" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ExchangeAuthorizationResult</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="filechangeconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>FileChangeConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="filechangeedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>FileChangeEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#filechange">FileChange</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="forkandpullrequestcommitsucceeded" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ForkAndPullRequestCommitSucceeded</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="forkcommitoptions" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ForkCommitOptions</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#commitoptions">CommitOptions</a></span>
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

<div id="forkcommitsucceeded" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ForkCommitSucceeded</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="forkpullrequestoptions" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ForkPullRequestOptions</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#commitoptions">CommitOptions</a></span>
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

<div id="generichttptoolconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GenericHttpToolConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="gitlabconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GitLabConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="gitlabconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GitLabConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#scmconnection">ScmConnection</a></span>
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

<div id="gitlaboauth" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GitLabOauth</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="githubconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GithubConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="githubconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GithubConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#scmconnection">ScmConnection</a></span>
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

<div id="githuboauth" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GithubOauth</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>clientId</code></td><td>String!</td><td></td></tr>
    <tr><td><code>includePrivateRepos</code></td><td>Boolean!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="gorecipebundle" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GoRecipeBundle</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipebundle">RecipeBundle</a></span>
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

<div id="httptoolconnectivity" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>HttpToolConnectivity</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>connected</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>latency</code></td><td><a href="#duration">Duration</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="license" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>License</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>key</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="llmconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>LlmConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="lstartifact" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>LstArtifact</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
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

<div id="markup" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Markup</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#marker">Marker</a></span>
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

<div id="mavenconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MavenConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="mavenrecipebundle" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MavenRecipeBundle</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipebundle">RecipeBundle</a></span>
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

<div id="mergeoptions" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MergeOptions</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>deleteSourceBranch</code></td><td>Boolean!</td><td></td></tr>
    <tr><td><code>mergeMethod</code></td><td><a href="#mergemethod">MergeMethod</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="messageconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MessageConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>edges</code></td><td>[<a href="#messageedge">MessageEdge</a>!]!</td><td></td></tr>
    <tr><td><code>pageInfo</code></td><td><a href="#pageinfo">PageInfo</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="messageedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MessageEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#message">Message</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="moddy" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="morehelplink" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MoreHelpLink</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>label</code></td><td>String!</td><td></td></tr>
    <tr><td><code>uri</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="npmconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>NpmConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="npmrecipebundle" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>NpmRecipeBundle</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipebundle">RecipeBundle</a></span>
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

<div id="nugetconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>NugetConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="nugetrecipebundle" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>NugetRecipeBundle</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipebundle">RecipeBundle</a></span>
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

<div id="oauthauthorization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OAuthAuthorization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="option" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Option</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="organization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Organization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="organizationchangeset" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangeset</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="organizationchangesetconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangesetConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="organizationchangesetedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangesetEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="organizationcommitcanceled" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitCanceled</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationcommit">OrganizationCommit</a></span>
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

<div id="organizationcommitconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="organizationcommitedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationcommit">OrganizationCommit</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationcommiterror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationcommit">OrganizationCommit</a></span>
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

<div id="organizationcommitfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationcommit">OrganizationCommit</a></span>
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

<div id="organizationcommitqueued" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitQueued</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationcommit">OrganizationCommit</a></span>
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

<div id="organizationcommitrunning" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitRunning</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationcommit">OrganizationCommit</a></span>
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

<div id="organizationconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="organizationconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
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

<div id="organizationedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organization">Organization</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperun" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRun</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="organizationreciperuncanceled" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunCanceled</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
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

<div id="organizationreciperunconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="organizationreciperunedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#organizationreciperun">OrganizationRecipeRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
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

<div id="organizationreciperunfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
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

<div id="organizationreciperunqueued" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunQueued</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
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

<div id="organizationreciperunrunning" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunRunning</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
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

<div id="organizationreciperunsyncing" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunSyncing</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationchangeset">OrganizationChangeset</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#organizationreciperun">OrganizationRecipeRun</a></span>
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

<div id="pageinfo" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PageInfo</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
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

<div id="patch" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Patch</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="personalaccesstokenconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PersonalAccessTokenConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>maxExpiryDays</code></td><td>Int</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="piprecipebundle" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PipRecipeBundle</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipebundle">RecipeBundle</a></span>
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

<div id="platformcapabilities" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PlatformCapabilities</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>artifactsmaven</span>
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

<div id="profiling" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Profiling</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>deployed</code></td><td>Boolean!</td><td>Whether the per-tenant Pyroscope ASG, S3 bucket, and IAM are provisioned.</td></tr>
    <tr><td><code>session</code></td><td><a href="#profilingsession">ProfilingSession</a></td><td>The currently active profiling session, or null when profiling is off. Flipped by setProfiling.</td></tr>
  </tbody>
</table>
</div>

<div id="profilingsession" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ProfilingSession</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="prompt" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Prompt</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="pullrequestactioncanceled" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionCanceled</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>canceledBy</code></td><td><a href="#user">User</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="pullrequestactionedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#pullrequestaction">PullRequestAction</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionfailed" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionFailed</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#pullrequestaction">PullRequestAction</a></span>
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

<div id="pullrequestactionqueued" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionQueued</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionrunning" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionRunning</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#pullrequestaction">PullRequestAction</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionsucceeded" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionSucceeded</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#pullrequestaction">PullRequestAction</a></span>
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

<div id="pullrequestcommitsucceeded" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestCommitSucceeded</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommitsucceeded">RepositoryCommitSucceeded</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="pullrequestoptions" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestOptions</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#commitoptions">CommitOptions</a></span>
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

<div id="pullrequestref" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestRef</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="pullrequeststatus" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestStatus</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="pypiconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PypiConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="recipebundleconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeBundleConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipebundleedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeBundleEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipebundle">RecipeBundle</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipecategory" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeCategory</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipecategoryconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeCategoryConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipecategoryedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeCategoryEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#recipecategory">RecipeCategory</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipedescriptor" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeDescriptor</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="recipedescriptorconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeDescriptorConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipedescriptoredge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeDescriptorEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipedetailerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeDetailError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipedetail">RecipeDetail</a></span>
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

<div id="recipedetailfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeDetailFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipedetail">RecipeDetail</a></span>
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

<div id="recipedetailloading" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeDetailLoading</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipedetail">RecipeDetail</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipegraph" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeGraph</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipegraphedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeGraphEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipegraphvertex" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeGraphVertex</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeinstallationconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeinstallationedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeinstallationerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipeinstallation">RecipeInstallation</a></span>
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

<div id="recipeinstallationfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipeinstallation">RecipeInstallation</a></span>
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

<div id="recipeinstallationprocessing" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationProcessing</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipeinstallation">RecipeInstallation</a></span>
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

<div id="recipeinstallationqueued" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationQueued</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipeinstallation">RecipeInstallation</a></span>
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

<div id="recipemarketplace" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeMarketplace</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeoptionvalue" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeOptionValue</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeoptionsmessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeOptionsMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#message">Message</a></span>
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

<div id="reciperunfilechange" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeRunFileChange</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#filechange">FileChange</a></span>
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

<div id="reciperunmessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeRunMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#message">Message</a></span>
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

<div id="reciperunprogress" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeRunProgress</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="reciperuntotals" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeRunTotals</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="recipesearchmessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeSearchMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#message">Message</a></span>
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

<div id="recipeuninstallation" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeUninstallation</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<p>Result of an uninstall operation.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>removedCount</code></td><td>Int!</td><td>The number of recipes that were removed.</td></tr>
  </tbody>
</table>
</div>

<div id="reindexresult" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ReindexResult</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogwriter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>resetCount</code></td><td>Int!</td><td>Number of repository cursors that were reset.</td></tr>
    <tr><td><code>since</code></td><td><a href="#datetime">DateTime</a>!</td><td>The timestamp cursors were rewound to.</td></tr>
  </tbody>
</table>
</div>

<div id="repository" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Repository</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="repositoryauthorization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryAuthorization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="repositorybatchchange" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryBatchChange</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
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

<div id="repositorychangesetconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangesetConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="repositorychangesetedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangesetEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositorychangeset">RepositoryChangeset</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitcanceled" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitCanceled</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="repositorycommitconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="repositorycommitedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositorycommit">RepositoryCommit</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitfailed" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitFailed</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="repositorycommitnochanges" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitNoChanges</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="repositorycommitqueued" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitQueued</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="repositorycommitrunning" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitRunning</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorycommit">RepositoryCommit</a></span>
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

<div id="repositoryconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
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

<div id="repositoryedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperuncanceled" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunCanceled</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
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

<div id="repositoryreciperunconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="repositoryreciperunedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#repositoryreciperun">RepositoryRecipeRun</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
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

<div id="repositoryreciperunfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
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

<div id="repositoryreciperunnolst" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunNoLst</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
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

<div id="repositoryreciperunqueued" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunQueued</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
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

<div id="repositoryreciperunrunning" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunRunning</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositoryreciperun">RepositoryRecipeRun</a></span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#repositorychangeset">RepositoryChangeset</a></span>
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

<div id="reviewstatus" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ReviewStatus</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>approvedBy</code></td><td>[String!]</td><td></td></tr>
    <tr><td><code>reviewDecision</code></td><td><a href="#reviewdecision">ReviewDecision</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="revoketokenresult" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RevokeTokenResult</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="s3configuration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>S3Configuration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="scmtokeninfo" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ScmTokenInfo</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>created</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
    <tr><td><code>expiresAt</code></td><td><a href="#datetime">DateTime</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="searchresult" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>SearchResult</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#marker">Marker</a></span>
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

<div id="sendmessageresult" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>SendMessageResult</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="textmessage" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>TextMessage</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#message">Message</a></span>
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

<div id="toolinfo" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ToolInfo</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="uiconfiguration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UiConfiguration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="user" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>User</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="userconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UserConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="usersedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UsersEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#user">User</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationavailable" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationAvailable</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#visualization">Visualization</a></span>
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

<div id="visualizationconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="visualizationdescriptor" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationDescriptor</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetvisualizer</span>
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

<div id="visualizationedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#visualization">Visualization</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationerror" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationError</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#visualization">Visualization</a></span>
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

<div id="visualizationfinished" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationFinished</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#visualization">Visualization</a></span>
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

<div id="visualizationimageoutput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationImageOutput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#visualizationoutput">VisualizationOutput</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>format</code></td><td><a href="#imageformat">ImageFormat</a>!</td><td></td></tr>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationoption" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationOption</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetvisualizer</span>
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

<div id="visualizationplotlyoutput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationPlotlyOutput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#visualizationoutput">VisualizationOutput</a></span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td>Plotly JSON data (MIME type: application/vnd.plotly.v1+json)</td></tr>
  </tbody>
</table>
</div>

<div id="visualizationprocessing" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationProcessing</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#visualization">Visualization</a></span>
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

<div id="visualizationrepository" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationRepository</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="visualizationrepositoryconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationRepositoryConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="visualizationrepositoryedge" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationRepositoryEdge</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>node</code></td><td><a href="#visualizationrepository">VisualizationRepository</a>!</td><td></td></tr>
    <tr><td><code>cursor</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="yamlrecipebundle" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>YamlRecipeBundle</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#ede9fe', color: '#4338ca', border: '1px solid #c7d2fe'}}>implements <a href="#recipebundle">RecipeBundle</a></span>
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

<div id="auditlogsdownload" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownload</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestaction" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestAction</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogentry" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntry</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="commitoptions" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CommitOptions</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>branchName</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatable" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTable</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="devcenterrun" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRun</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="filechange" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>FileChange</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="marker" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Marker</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="message" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Message</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="organizationcommit" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommit</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="pullrequestaction" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestAction</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<p>The state of an individual repository within a `BulkPullRequestAction`. Use `__typename` to determine the current state.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>pullRequest</code></td><td><a href="#pullrequestref">PullRequestRef</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipebundle" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeBundle</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="recipedetail" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeDetail</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<p>State machine for recipe detail resolution. Querying the `detail` field on a RecipeDescriptor triggers background resolution of the full recipe bundle. Poll until `__typename` is `RecipeDetailFinished`.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>startedAt</code></td><td><a href="#datetime">DateTime</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallation" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallation</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="repositorychangeset" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangeset</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="repositorycommit" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommit</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<p>A commit result for a single repository within an organization-level commit operation. Use `__typename` to determine the current state.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repository">Repository</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitsucceeded" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitSucceeded</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="repositoryreciperun" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRun</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="scmconnection" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ScmConnection</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="visualization" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Visualization</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td></td></tr>
    <tr><td><code>descriptor</code></td><td><a href="#visualizationdescriptor">VisualizationDescriptor</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationoutput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationOutput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>data</code></td><td><a href="#base64">Base64</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

### Enums

<div id="accesstokenorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AccessTokenOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<ul>
  <li><code>CREATED</code></li>
  <li><code>EXPIRES_AT</code></li>
</ul>
</div>

<div id="auditactiontype" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditActionType</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<ul>
  <li><code>CREATE</code></li>
  <li><code>READ</code></li>
  <li><code>UPDATE</code></li>
  <li><code>DELETE</code></li>
</ul>
</div>

<div id="auditlogexportformat" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogExportFormat</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<ul>
  <li><code>CEF</code></li>
  <li><code>CSV</code></li>
</ul>
</div>

<div id="auditlogorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<ul>
  <li><code>TIMESTAMP</code></li>
  <li><code>USER_ID</code></li>
  <li><code>TARGET</code></li>
  <li><code>ACTION</code></li>
</ul>
</div>

<div id="auditlogsdownloadorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="auditoutcome" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditOutcome</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<ul>
  <li><code>SUCCESS</code></li>
  <li><code>FAILURE</code></li>
</ul>
</div>

<div id="buildstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BuildState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="bulkpullrequestactionorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>CREATED_AT</code></li>
  <li><code>STARTED_AT</code></li>
  <li><code>FINISHED_AT</code></li>
</ul>
</div>

<div id="bulkpullrequestactionstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogentryorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntryOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>UPDATED_AT</code></li>
  <li><code>CREATED_AT</code></li>
  <li><code>TITLE</code></li>
  <li><code>REPOSITORY_PATH</code></li>
</ul>
</div>

<div id="changelogentrytype" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntryType</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<p>Discriminator for filtering by entry type.</p>
<ul>
  <li><code>COMMIT</code></li>
  <li><code>PULL_REQUEST</code></li>
</ul>
</div>

<div id="changelogparticipantorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogParticipantOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>USERNAME</code></li>
  <li><code>EMAIL</code></li>
  <li><code>NAME</code></li>
</ul>
</div>

<div id="commitoption" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CommitOption</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="connectororderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<ul>
  <li><code>NICKNAME</code></li>
  <li><code>VERSION</code></li>
</ul>
</div>

<div id="connectortooltype" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorToolType</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="contributorrole" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ContributorRole</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<p>The participant's role for filtering.</p>
<ul>
  <li><code>AUTHOR</code></li>
  <li><code>ASSIGNEE</code></li>
  <li><code>CLOSED_BY</code></li>
  <li><code>REVIEWER</code></li>
</ul>
</div>

<div id="conversationorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConversationOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>LAST_UPDATED_AT</code></li>
</ul>
</div>

<div id="conversationphase" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConversationPhase</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<ul>
  <li><code>IDLE</code></li>
  <li><code>AWAITING_LLM</code></li>
  <li><code>STREAMING_TEXT</code></li>
  <li><code>TOOL_RUNNING</code></li>
  <li><code>ERRORED</code></li>
</ul>
</div>

<div id="datatableformat" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableFormat</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>CSV</code></li>
  <li><code>XLSX</code></li>
</ul>
</div>

<div id="datatableorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>DATA_TABLE</code></li>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="devcenteraggregation" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterAggregation</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<p>How DevCenter card results are aggregated across repositories.</p>
<ul>
  <li><code>PER_REPOSITORY</code></li>
  <li><code>PER_OCCURRENCE</code></li>
</ul>
</div>

<div id="devcenterrunorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>STATE</code></li>
</ul>
</div>

<div id="devcenterrunstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<p>Execution state of a DevCenter run.</p>
<ul>
  <li><code>RUNNING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>CANCELED</code></li>
  <li><code>ERROR</code></li>
</ul>
</div>

<div id="filechangeorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>FileChangeOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>PATH</code></li>
</ul>
</div>

<div id="imageformat" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ImageFormat</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<ul>
  <li><code>SVG</code></li>
  <li><code>GIF</code></li>
  <li><code>JPEG</code></li>
  <li><code>PNG</code></li>
</ul>
</div>

<div id="llmprovider" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>LlmProvider</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<ul>
  <li><code>ANTHROPIC</code></li>
  <li><code>GEMINI</code></li>
  <li><code>MISTRAL</code></li>
  <li><code>OPEN_AI</code></li>
</ul>
</div>

<div id="markuplevel" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MarkupLevel</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>DEBUG</code></li>
  <li><code>INFO</code></li>
  <li><code>WARNING</code></li>
  <li><code>ERROR</code></li>
  <li><code>NONE</code></li>
</ul>
</div>

<div id="mergemethod" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MergeMethod</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>MERGE</code></li>
  <li><code>SQUASH</code></li>
  <li><code>REBASE</code></li>
</ul>
</div>

<div id="mergeable" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Mergeable</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<ul>
  <li><code>MERGEABLE</code></li>
  <li><code>BLOCKED</code></li>
  <li><code>UNKNOWN</code></li>
</ul>
</div>

<div id="messagestate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MessageState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<ul>
  <li><code>IN_PROGRESS</code></li>
  <li><code>COMPLETED</code></li>
</ul>
</div>

<div id="organizationchangesetorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangesetOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>CREATED_AT</code></li>
  <li><code>TYPE</code></li>
  <li><code>USER</code></li>
</ul>
</div>

<div id="organizationchangesettype" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangesetType</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>RECIPE_RUN</code></li>
  <li><code>BATCH_CHANGE</code></li>
</ul>
</div>

<div id="organizationcommitorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="organizationorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<ul>
  <li><code>NAME</code></li>
</ul>
</div>

<div id="organizationreciperunorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>ENDED_AT</code></li>
  <li><code>STATE</code></li>
  <li><code>USER</code></li>
</ul>
</div>

<div id="organizationreciperunstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="profilingevent" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ProfilingEvent</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<p>The primary event the Pyroscope agent samples on. async-profiler can only collect one of these at a time as the primary event; alloc and lock sampling run on separate channels and are always on.</p>
<ul>
  <li><code>CPU</code></li>
  <li><code>WALL</code></li>
</ul>
</div>

<div id="pullrequestactionorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>REPOSITORY_PATH</code></li>
  <li><code>STATE</code></li>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="pullrequestactionstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>IN_PROGRESS</code></li>
  <li><code>SUCCESSFUL</code></li>
  <li><code>FAILED</code></li>
  <li><code>CANCELED</code></li>
</ul>
</div>

<div id="pullrequestactiontype" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionType</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>APPROVE</code></li>
  <li><code>MERGE</code></li>
  <li><code>CLOSE</code></li>
</ul>
</div>

<div id="pullrequeststate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>OPEN</code></li>
  <li><code>DRAFT</code></li>
  <li><code>CLOSED</code></li>
  <li><code>MERGED</code></li>
</ul>
</div>

<div id="recipebundleorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeBundleOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<ul>
  <li><code>PACKAGE_NAME</code></li>
  <li><code>VERSION</code></li>
  <li><code>REQUESTED_VERSION</code></li>
  <li><code>ECOSYSTEM</code></li>
</ul>
</div>

<div id="recipecategoryorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeCategoryOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<ul>
  <li><code>DISPLAY_NAME</code></li>
  <li><code>RECIPE_COUNT</code></li>
</ul>
</div>

<div id="recipeecosystem" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeEcosystem</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipegraphedgetype" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeGraphEdgeType</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<ul>
  <li><code>RECIPE</code></li>
  <li><code>PRECONDITION</code></li>
  <li><code>REFERENCE</code></li>
</ul>
</div>

<div id="recipeinstallationorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
  <li><code>STATUS</code></li>
</ul>
</div>

<div id="recipeinstallationstatus" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationStatus</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<ul>
  <li><code>QUEUED</code></li>
  <li><code>PROCESSING</code></li>
  <li><code>FINISHED</code></li>
  <li><code>ERROR</code></li>
</ul>
</div>

<div id="recipeorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<ul>
  <li><code>ID</code></li>
  <li><code>DISPLAY_NAME</code></li>
  <li><code>RECIPE_COUNT</code></li>
  <li><code>RELEVANCE</code></li>
</ul>
</div>

<div id="reciperunpriority" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeRunPriority</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<p>Priority level for recipe runs. HIGH priority runs target small organizations (≤100 repositories). LOW priority runs target large organizations (>100 repositories).</p>
<ul>
  <li><code>HIGH</code></li>
  <li><code>LOW</code></li>
</ul>
</div>

<div id="repositorychangesetorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangesetOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>PATH</code></li>
  <li><code>ORIGIN</code></li>
  <li><code>FILES_CHANGED</code></li>
  <li><code>SYNC_STATUS</code></li>
</ul>
</div>

<div id="repositorychangesetstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangesetState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="repositorycommitorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<ul>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="repositoryerrorreason" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryErrorReason</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<ul>
  <li><code>FAILED_LOAD_AST</code></li>
  <li><code>FAILED_LOAD_RECIPE</code></li>
  <li><code>TIMEOUT</code></li>
  <li><code>RECIPE_ERROR</code></li>
</ul>
</div>

<div id="repositoryorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<ul>
  <li><code>ORIGIN</code></li>
  <li><code>PATH</code></li>
  <li><code>BRANCH</code></li>
  <li><code>CHANGESET</code></li>
  <li><code>LST_ARTIFACT_PUBLISHED</code></li>
</ul>
</div>

<div id="repositoryreciperunorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<ul>
  <li><code>PATH</code></li>
  <li><code>ORIGIN</code></li>
  <li><code>STATE</code></li>
</ul>
</div>

<div id="repositorysyncstatus" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositorySyncStatus</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="reviewdecision" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ReviewDecision</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<ul>
  <li><code>APPROVED</code></li>
  <li><code>CHANGES_REQUESTED</code></li>
  <li><code>REVIEW_REQUIRED</code></li>
  <li><code>REVIEW_NOT_REQUIRED</code></li>
  <li><code>UNKNOWN</code></li>
</ul>
</div>

<div id="scmtype" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ScmType</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<ul>
  <li><code>GITHUB</code></li>
  <li><code>BITBUCKET</code></li>
  <li><code>BITBUCKET_CLOUD</code></li>
  <li><code>GITLAB</code></li>
  <li><code>AZURE_DEVOPS</code></li>
</ul>
</div>

<div id="sortorder" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>SortOrder</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
<ul>
  <li><code>ASC</code></li>
  <li><code>DESC</code></li>
</ul>
</div>

<div id="userorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UserOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<ul>
  <li><code>EMAIL</code></li>
  <li><code>USERNAME</code></li>
  <li><code>ROLE</code></li>
  <li><code>LAST_ACTIVE</code></li>
</ul>
</div>

<div id="userrole" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UserRole</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<ul>
  <li><code>ADMIN</code></li>
  <li><code>USER</code></li>
</ul>
</div>

<div id="visualizationorderbyfield" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationOrderByField</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<ul>
  <li><code>VISUALIZATION</code></li>
  <li><code>STARTED_AT</code></li>
</ul>
</div>

<div id="visualizationrepositoryrunstate" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationRepositoryRunState</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="accesstokenorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AccessTokenOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#accesstokenorderbyfield">AccessTokenOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="accesstokenwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AccessTokenWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="auditactiontypefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditActionTypeFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
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

<div id="auditlogexportformatfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogExportFormatFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
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

<div id="auditlogorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#auditlogorderbyfield">AuditLogOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
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

<div id="auditlogsdownloadorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#auditlogsdownloadorderbyfield">AuditLogsDownloadOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="auditlogsdownloadwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditLogsDownloadWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
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

<div id="auditoutcomefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>AuditOutcomeFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>auditreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#auditoutcome">AuditOutcome</a></td><td></td></tr>
    <tr><td><code>_neq</code></td><td><a href="#auditoutcome">AuditOutcome</a></td><td></td></tr>
  </tbody>
</table>
</div>

<div id="booleanfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BooleanFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td>Boolean</td><td></td></tr>
    <tr><td><code>_neq</code></td><td>Boolean</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="buildstatefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BuildStateFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="bulkpullrequestactionorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#bulkpullrequestactionorderbyfield">BulkPullRequestActionOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="bulkpullrequestactionstatefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionStateFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="bulkpullrequestactionwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>BulkPullRequestActionWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogauthorwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogAuthorWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogentryorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntryOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#changelogentryorderbyfield">ChangelogEntryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogentrytypefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntryTypeFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogentrywhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogEntryWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="changelogparticipantorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogParticipantOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#changelogparticipantorderbyfield">ChangelogParticipantOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="changelogparticipantwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ChangelogParticipantWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="commitinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CommitInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="commitstrategyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CommitStrategyInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="connectororderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#connectororderbyfield">ConnectorOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="connectortooltypefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorToolTypeFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_eq</code></td><td><a href="#connectortooltype">ConnectorToolType</a></td><td></td></tr>
    <tr><td><code>_in</code></td><td>[<a href="#connectortooltype">ConnectorToolType</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="connectorwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
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

<div id="conversationorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConversationOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#conversationorderbyfield">ConversationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="conversationwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConversationWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
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

<div id="createconversationinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CreateConversationInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>moddy</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>message</code></td><td>String!</td><td></td></tr>
    <tr><td><code>organizationId</code></td><td>ID!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="createuserorganizationinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>CreateUserOrganizationInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td>The name of the organization.</td></tr>
    <tr><td><code>repositories</code></td><td>[<a href="#repositoryinput">RepositoryInput</a>!]</td><td>Repositories to include in the organization.</td></tr>
  </tbody>
</table>
</div>

<div id="datatableformatfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableFormatFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="datatableorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#datatableorderbyfield">DataTableOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="datatablewhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DataTableWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="datetimefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DateTimeFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
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

<div id="devcenterrunorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#devcenterrunorderbyfield">DevCenterRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="devcenterrunstatefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunStateFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="devcenterrunwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DevCenterRunWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="directcommitinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DirectCommitInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<p>Direct commit to origin. No additional options required.</p>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>_empty</code></td><td>Boolean</td><td>Placeholder field. Direct commits require no additional configuration.</td></tr>
  </tbody>
</table>
</div>

<div id="exchangeauthorizationcodeinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ExchangeAuthorizationCodeInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
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

<div id="filechangeorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>FileChangeOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#filechangeorderbyfield">FileChangeOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="filechangewhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>FileChangeWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="forkandpullrequestcommitinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ForkAndPullRequestCommitInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="forkcommitinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ForkCommitInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="gorecipebundleinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GoRecipeBundleInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="gpginput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>GpgInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="idfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>IDFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
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

<div id="initiateauthorizationinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>InitiateAuthorizationInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin to authorize (e.g., github.com, gitlab.com).</td></tr>
    <tr><td><code>redirectUri</code></td><td>String!</td><td>The redirect URI where the VCS will send the callback. Must match an allowed redirect URI in the OAuth app configuration.</td></tr>
  </tbody>
</table>
</div>

<div id="intfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>IntFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
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

<div id="lstartifactwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>LstArtifactWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
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

<div id="mavenrecipebundleinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>MavenRecipeBundleInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="npmrecipebundleinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>NpmRecipeBundleInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="nugetrecipebundleinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>NugetRecipeBundleInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationchangesetorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangesetOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationchangesetorderbyfield">OrganizationChangesetOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationchangesettypefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangesetTypeFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="organizationchangesetwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationChangesetWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="organizationcommitorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationcommitorderbyfield">OrganizationCommitOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationcommitwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationCommitWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="organizationorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationorderbyfield">OrganizationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#organizationreciperunorderbyfield">OrganizationRecipeRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="organizationreciperunstatefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunStateFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="organizationreciperunwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationRecipeRunWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="organizationwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>OrganizationWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
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

<div id="pathfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PathFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
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

<div id="piprecipebundleinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PipRecipeBundleInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>packageName</code></td><td>String!</td><td></td></tr>
    <tr><td><code>version</code></td><td>String</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#pullrequestactionorderbyfield">PullRequestActionOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestactionstatefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionStateFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="pullrequestactiontypefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionTypeFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="pullrequestactionwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestActionWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="pullrequestcommitinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestCommitInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="pullrequestinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>repository</code></td><td><a href="#repositoryinput">RepositoryInput</a>!</td><td></td></tr>
    <tr><td><code>number</code></td><td>Int!</td><td>Pull request number.</td></tr>
  </tbody>
</table>
</div>

<div id="pullrequestselectioninput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestSelectionInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="pullrequestselectionmodifier" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestSelectionModifier</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="pullrequeststatefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>PullRequestStateFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="recipebundleinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeBundleInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipebundleorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeBundleOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipebundleorderbyfield">RecipeBundleOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipebundlewhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeBundleWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipecategoryorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeCategoryOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipecategoryorderbyfield">RecipeCategoryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipecategorywhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeCategoryWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeecosystemfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeEcosystemFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>ID!</td><td>Fully-qualified recipe ID. Example: `org.openrewrite.java.search.FindMethods`</td></tr>
    <tr><td><code>options</code></td><td>[<a href="#recipeoptioninput">RecipeOptionInput</a>!]</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallationorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipeinstallationorderbyfield">RecipeInstallationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipeinstallationstatusfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationStatusFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeinstallationwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeInstallationWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="recipeoptioninput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeOptionInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td>Option name. Example: `methodPattern`</td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td>Option value. Example: `java.util.List add(..)`</td></tr>
  </tbody>
</table>
</div>

<div id="recipeorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#recipeorderbyfield">RecipeOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="recipewhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RecipeWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="repositorychangesetorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangesetOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositorychangesetorderbyfield">RepositoryChangesetOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorychangesetstatefilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangesetStateFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="repositorychangesetwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryChangesetWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="repositorycommitorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositorycommitorderbyfield">RepositoryCommitOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositorycommitwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryCommitWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="repositoryinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corecommitter</span>
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

<div id="repositoryorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositoryorderbyfield">RepositoryOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#repositoryreciperunorderbyfield">RepositoryRecipeRunOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="repositoryreciperunwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryRecipeRunWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetreader</span>
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

<div id="repositorywhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RepositoryWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
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

<div id="reviewdecisionfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ReviewDecisionFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changelogreader</span>
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

<div id="revokescmtokeninput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RevokeScmTokenInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>origin</code></td><td>String!</td><td>The VCS origin to revoke the token for (e.g., github.com, gitlab.com).</td></tr>
  </tbody>
</table>
</div>

<div id="rundevcenterinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RunDevCenterInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>organizationId</code></td><td>ID!</td><td>The organization to run DevCenter for.</td></tr>
    <tr><td><code>recipeId</code></td><td>ID!</td><td>The DevCenter recipe to run.</td></tr>
  </tbody>
</table>
</div>

<div id="runrecipeinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>RunRecipeInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipeworker</span>
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

<div id="scmaccesstoken" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ScmAccessToken</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetcommitter</span>
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

<div id="stringfilter" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>StringFilter</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
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

<div id="updateuserorganizationinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UpdateUserOrganizationInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>organization</span>
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

<div id="userorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UserOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>authz</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#userorderbyfield">UserOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="userwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>UserWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
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

<div id="visualizationoptioninput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationOptionInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>changesetvisualizer</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>name</code></td><td>String!</td><td></td></tr>
    <tr><td><code>value</code></td><td><a href="#object">Object</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationorderbyinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationOrderByInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
</div>
<table>
  <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><code>field</code></td><td><a href="#visualizationorderbyfield">VisualizationOrderByField</a>!</td><td></td></tr>
    <tr><td><code>direction</code></td><td><a href="#sortorder">SortOrder</a>!</td><td></td></tr>
  </tbody>
</table>
</div>

<div id="visualizationwhereinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>VisualizationWhereInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>corechangeset</span>
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

<div id="yamlrecipebundleinput" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>YamlRecipeBundleInput</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>recipemarketplace</span>
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

<div id="connectortool" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>ConnectorTool</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>gateway</span>
</div>
<p>= <a href="#githubconfiguration">GithubConfiguration</a> | <a href="#gitlabconfiguration">GitLabConfiguration</a> | <a href="#bitbucketconfiguration">BitbucketConfiguration</a> | <a href="#bitbucketcloudconfiguration">BitbucketCloudConfiguration</a> | <a href="#azuredevopsconfiguration">AzureDevOpsConfiguration</a> | <a href="#artifactoryconfiguration">ArtifactoryConfiguration</a> | <a href="#mavenconfiguration">MavenConfiguration</a> | <a href="#pypiconfiguration">PypiConfiguration</a> | <a href="#npmconfiguration">NpmConfiguration</a> | <a href="#nugetconfiguration">NugetConfiguration</a> | <a href="#generichttptoolconfiguration">GenericHttpToolConfiguration</a> | <a href="#organizationconfiguration">OrganizationConfiguration</a> | <a href="#llmconfiguration">LlmConfiguration</a> | <a href="#s3configuration">S3Configuration</a></p>
</div>

### Scalars

<div id="base64" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Base64</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
<p>`Base64` represents a base64 encoded string. In the browser, `btoa` encodes ASCII strings to Base64.</p>
</div>

<div id="date" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Date</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
</div>

<div id="datetime" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>DateTime</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
</div>

<div id="duration" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Duration</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
</div>

<div id="json" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>JSON</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
</div>

<div id="long" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Long</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
</div>

<div id="markdown" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Markdown</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
<p>Contents may contain Markdown, HTML, or other text and should be passed through a Markdown parser by consumers</p>
</div>

<div id="object" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Object</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
</div>

<div id="path" style={{border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', marginBottom: '12px', background: '#fafafa'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px'}}>
<span style={{fontFamily: 'monospace', fontSize: '15px', fontWeight: '700', color: '#1e293b'}}>Path</span>
<span style={{fontFamily: '-apple-system,sans-serif', fontSize: '11px', padding: '2px 7px', borderRadius: '20px', background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0'}}>coregraphql</span>
</div>
<p>A file path relative to repository root (e.g., "src/main/java/Foo.java").</p>
</div>

