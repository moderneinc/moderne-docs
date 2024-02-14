# Moderne GraphQL API

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [AccessToken](#accesstoken)
    * [Agent](#agent)
    * [AgentIndexConnection](#agentindexconnection)
    * [AgentIndexEdge](#agentindexedge)
    * [ApproveAction](#approveaction)
    * [ArtifactDiagnostics](#artifactdiagnostics)
    * [ArtifactStats](#artifactstats)
    * [ArtifactoryConfiguration](#artifactoryconfiguration)
    * [Ast](#ast)
    * [AstArtifact](#astartifact)
    * [AstArtifactRepository](#astartifactrepository)
    * [AstArtifactRepositoryDiagnostic](#astartifactrepositorydiagnostic)
    * [AstIndexConnection](#astindexconnection)
    * [AstIndexEdge](#astindexedge)
    * [AstRepository](#astrepository)
    * [BitbucketCloudConfiguration](#bitbucketcloudconfiguration)
    * [BitbucketCloudRepository](#bitbucketcloudrepository)
    * [BitbucketConfiguration](#bitbucketconfiguration)
    * [BitbucketRepository](#bitbucketrepository)
    * [BranchCommitOptions](#branchcommitoptions)
    * [CloseAction](#closeaction)
    * [Column](#column)
    * [Commit](#commit)
    * [CommitConnection](#commitconnection)
    * [CommitEdge](#commitedge)
    * [CommitJob](#commitjob)
    * [CommitJobConnection](#commitjobconnection)
    * [CommitJobEdge](#commitjobedge)
    * [CommitJobSummary](#commitjobsummary)
    * [CommitsReportDownloadTask](#commitsreportdownloadtask)
    * [Contributor](#contributor)
    * [CustomRecipe](#customrecipe)
    * [Dashboard](#dashboard)
    * [DataTable](#datatable)
    * [DataTableDownloadStats](#datatabledownloadstats)
    * [DataTableDownloadTask](#datatabledownloadtask)
    * [Event](#event)
    * [EventConnection](#eventconnection)
    * [EventEdge](#eventedge)
    * [ForkCommitOptions](#forkcommitoptions)
    * [ForkPullRequestOptions](#forkpullrequestoptions)
    * [GenericHttpToolConfiguration](#generichttptoolconfiguration)
    * [GitHubRepository](#githubrepository)
    * [GitLabConfiguration](#gitlabconfiguration)
    * [GitLabRepository](#gitlabrepository)
    * [GithubConfiguration](#githubconfiguration)
    * [GroupArtifactVersion](#groupartifactversion)
    * [JenkinsConfiguration](#jenkinsconfiguration)
    * [Maintainer](#maintainer)
    * [MavenConfiguration](#mavenconfiguration)
    * [MavenIndexProperty](#mavenindexproperty)
    * [MavenResponseStatus](#mavenresponsestatus)
    * [MergeAction](#mergeaction)
    * [MergeOptions](#mergeoptions)
    * [OAuthConfiguration](#oauthconfiguration)
    * [Option](#option)
    * [Organization](#organization)
    * [OrganizationConfiguration](#organizationconfiguration)
    * [OrganizationStats](#organizationstats)
    * [OrganizationSummary](#organizationsummary)
    * [OrphanedRepository](#orphanedrepository)
    * [Page](#page)
    * [PageInfo](#pageinfo)
    * [PullRequestActionConnection](#pullrequestactionconnection)
    * [PullRequestActionEdge](#pullrequestactionedge)
    * [PullRequestActionJob](#pullrequestactionjob)
    * [PullRequestActionJobConnection](#pullrequestactionjobconnection)
    * [PullRequestActionJobEdge](#pullrequestactionjobedge)
    * [PullRequestActionJobSummary](#pullrequestactionjobsummary)
    * [PullRequestOptions](#pullrequestoptions)
    * [PullRequestStatistics](#pullrequeststatistics)
    * [PullRequestStatus](#pullrequeststatus)
    * [PypiConfiguration](#pypiconfiguration)
    * [Recipe](#recipe)
    * [RecipeArtifact](#recipeartifact)
    * [RecipeCategory](#recipecategory)
    * [RecipeCategoryBreadcrumb](#recipecategorybreadcrumb)
    * [RecipeDeploymentResult](#recipedeploymentresult)
    * [RecipeRun](#reciperun)
    * [RecipeRunHistory](#reciperunhistory)
    * [RecipeRunHistoryConnection](#reciperunhistoryconnection)
    * [RecipeRunHistoryEdge](#reciperunhistoryedge)
    * [RecipeRunPerformance](#reciperunperformance)
    * [RecipeRunReportDownloadTask](#reciperunreportdownloadtask)
    * [RecipeRunSummary](#reciperunsummary)
    * [RecipeRunSummaryConnection](#reciperunsummaryconnection)
    * [RecipeRunSummaryEdge](#reciperunsummaryedge)
    * [RecipeRunTotals](#reciperuntotals)
    * [RecipeSearchConnection](#recipesearchconnection)
    * [RecipeSearchEdge](#recipesearchedge)
    * [RepositoryConnection](#repositoryconnection)
    * [RepositoryEdge](#repositoryedge)
    * [RepositoryGroup](#repositorygroup)
    * [RepositoryProvenance](#repositoryprovenance)
    * [ReviewStatus](#reviewstatus)
    * [SecurityResult](#securityresult)
    * [ServiceStatistics](#servicestatistics)
    * [SshConfiguration](#sshconfiguration)
    * [ToolConnectivity](#toolconnectivity)
    * [UpgradesAndMigrationsResult](#upgradesandmigrationsresult)
    * [Visualization](#visualization)
    * [VisualizationArtifact](#visualizationartifact)
    * [VisualizationCategory](#visualizationcategory)
    * [VisualizationDeploymentResult](#visualizationdeploymentresult)
    * [VisualizationImage](#visualizationimage)
    * [VisualizationRun](#visualizationrun)
    * [VisualizationRunConnection](#visualizationrunconnection)
    * [VisualizationRunEdge](#visualizationrunedge)
    * [VisualizationRunRepositoryConnection](#visualizationrunrepositoryconnection)
    * [VisualizationRunRepositoryEdge](#visualizationrunrepositoryedge)
    * [VisualizationRunRepositorySummary](#visualizationrunrepositorysummary)
    * [Worker](#worker)
  * [Inputs](#inputs)
    * [ApprovalJobInput](#approvaljobinput)
    * [AuditLogFilterInput](#auditlogfilterinput)
    * [AuditLogFilterItemInput](#auditlogfilteriteminput)
    * [CliBuildResultInput](#clibuildresultinput)
    * [CliBuildTool](#clibuildtool)
    * [CloseJobInput](#closejobinput)
    * [CommitInput](#commitinput)
    * [CommitJobFilterInput](#commitjobfilterinput)
    * [CommitJobOrderInput](#commitjoborderinput)
    * [CopyHistoryInput](#copyhistoryinput)
    * [DateRangeInput](#daterangeinput)
    * [EventFilterInput](#eventfilterinput)
    * [GpgInput](#gpginput)
    * [MergeJobInput](#mergejobinput)
    * [OptionInput](#optioninput)
    * [PartialCommitInput](#partialcommitinput)
    * [PartialRepositoryInput](#partialrepositoryinput)
    * [PullRequestActionJobFilterInput](#pullrequestactionjobfilterinput)
    * [PullRequestActionJobOrderInput](#pullrequestactionjoborderinput)
    * [RecipeInput](#recipeinput)
    * [RecipeRunFilterInput](#reciperunfilterinput)
    * [RecipeRunInput](#reciperuninput)
    * [RecipeValidationInput](#recipevalidationinput)
    * [RepositoryFilter](#repositoryfilter)
    * [RepositoryInput](#repositoryinput)
    * [ScmAccessToken](#scmaccesstoken)
    * [SourceFileFilter](#sourcefilefilter)
    * [SourceFileInput](#sourcefileinput)
    * [SummaryResultsFilterInput](#summaryresultsfilterinput)
    * [SummaryResultsOrderInput](#summaryresultsorderinput)
    * [UserOrganizationInput](#userorganizationinput)
    * [UserOrganizationUpdateInput](#userorganizationupdateinput)
    * [VisualizationRunFilter](#visualizationrunfilter)
  * [Enums](#enums)
    * [ActionType](#actiontype)
    * [AuditLogFilterColumns](#auditlogfiltercolumns)
    * [CiState](#cistate)
    * [CliBuildToolStep](#clibuildtoolstep)
    * [CommitJobOrderField](#commitjoborderfield)
    * [CommitJobState](#commitjobstate)
    * [CommitOption](#commitoption)
    * [CommitState](#commitstate)
    * [CommitType](#committype)
    * [CommitsReportTaskState](#commitsreporttaskstate)
    * [Comparator](#comparator)
    * [DataTableFormat](#datatableformat)
    * [DownloadTaskState](#downloadtaskstate)
    * [ErrorDetail](#errordetail)
    * [ErrorType](#errortype)
    * [JobState](#jobstate)
    * [LogicalOperator](#logicaloperator)
    * [MergeMethod](#mergemethod)
    * [Mergeable](#mergeable)
    * [PullRequestActionJobOrderField](#pullrequestactionjoborderfield)
    * [PullRequestActionType](#pullrequestactiontype)
    * [PullRequestState](#pullrequeststate)
    * [RecipeDeploymentState](#recipedeploymentstate)
    * [RecipeResultColumnKey](#reciperesultcolumnkey)
    * [RecipeRunPriority](#reciperunpriority)
    * [RecipeRunState](#reciperunstate)
    * [RecipeRunSummaryErrorReason](#reciperunsummaryerrorreason)
    * [RecipeRunSummaryState](#reciperunsummarystate)
    * [RecipeRunValidationState](#reciperunvalidationstate)
    * [RepositoryFields](#repositoryfields)
    * [ReviewDecision](#reviewdecision)
    * [ScmType](#scmtype)
    * [SortOrder](#sortorder)
    * [TaskState](#taskstate)
    * [ToolConnectivityStatus](#toolconnectivitystatus)
    * [VisualizationDeploymentState](#visualizationdeploymentstate)
    * [VisualizationRunPriority](#visualizationrunpriority)
    * [VisualizationRunRepositorySummaryState](#visualizationrunrepositorysummarystate)
    * [VisualizationRunState](#visualizationrunstate)
  * [Scalars](#scalars)
    * [Base64](#base64)
    * [Boolean](#boolean)
    * [Date](#date)
    * [DateTime](#datetime)
    * [Duration](#duration)
    * [ID](#id)
    * [Int](#int)
    * [JSON](#json)
    * [Long](#long)
    * [Markdown](#markdown)
    * [Object](#object)
    * [Path](#path)
    * [String](#string)
  * [Interfaces](#interfaces)
    * [CommitOptions](#commitoptions)
    * [PullRequestAction](#pullrequestaction)
    * [Repository](#repository)
    * [ToolConfiguration](#toolconfiguration)
  * [Unions](#unions)
    * [ScmConfiguration](#scmconfiguration)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Paginated result of all Moderne Agents that are presently connected to the Moderne Platform

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactDiagnostics</strong></td>
<td valign="top"><a href="#artifactdiagnostics">ArtifactDiagnostics</a>!</td>
<td>

Set of diagnostic queries to better understand the state of artifacts in the platform

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>httpTool</strong></td>
<td valign="top">[<a href="#toolconfiguration">ToolConfiguration</a>!]!</td>
<td>

Find a specific set of integrations by URL

Requires administrative role.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">url</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `https://github.com`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>indexableRepositories</strong> ⚠️</td>
<td valign="top">[<a href="#astrepository">AstRepository</a>!]!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use artifactDiagnostics.indexableRepositories instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tools</strong></td>
<td valign="top">[<a href="#toolconfiguration">ToolConfiguration</a>!]!</td>
<td>

List of all integrations that are configured through connected Moderne Agent(s)

Requires administrative role.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#eventconnection">EventConnection</a>!</td>
<td>

Paginated result of events that have been logged

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#eventfilterinput">EventFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filters</td>
<td valign="top"><a href="#auditlogfilterinput">AuditLogFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">since</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activeRecipeRuns</strong></td>
<td valign="top">[<a href="#reciperun">RecipeRun</a>!]!</td>
<td>

Get all currently active recipes by a user id (passed via header), sorted by most recent.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortOrder</td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allOrganizations</strong></td>
<td valign="top">[<a href="#organization">Organization</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allRecipeRuns</strong></td>
<td valign="top"><a href="#reciperunhistoryconnection">RecipeRunHistoryConnection</a>!</td>
<td>

Get all recipe runs sorted by most recent.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterBy</td>
<td valign="top"><a href="#reciperunfilterinput">RecipeRunFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortOrder</td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDeploy</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Can be used to determine if the current user is able to deploy any recipes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#recipecategory">RecipeCategory</a>!]!</td>
<td>

Returns the categories with associated recipes or subcategories.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categoryId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customRecipeForRecipeRun</strong></td>
<td valign="top"><a href="#customrecipe">CustomRecipe</a></td>
<td>

Get the custom recipe for a given recipe run id. Still present after the recipe
run results are no longer available.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipeRunId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataTableDownload</strong></td>
<td valign="top"><a href="#datatabledownloadtask">DataTableDownloadTask</a>!</td>
<td>

Poll to see if a data table download task has completed.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataTableRepositoryOrigins</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A list of the distinct repository origins that have produced rows for a particular data table.
This can be used to ensure that valid VCS OAuth tokens are available for all origins prior to
downloading a data table. If a valid OAuth token is not available at the time the data table is
downloaded, authorization checks for that origin will fail and the row will not be included in
the result. Without being able to complete an authorization check, we cannot determine if the user
has read access to that repository.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">dataTable</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipeRunId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultCommitOptions</strong></td>
<td valign="top">[<a href="#commitoption">CommitOption</a>!]!</td>
<td>

List of default commit options for tenant, which is configured in agent config.
If agent config doesn't have this option will return all available options.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>findRepositories</strong></td>
<td valign="top">[<a href="#repository">Repository</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryQuery</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>findRepository</strong></td>
<td valign="top"><a href="#repository">Repository</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryQuery</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latestRecipeDeployments</strong></td>
<td valign="top">[<a href="#recipedeploymentresult">RecipeDeploymentResult</a>!]!</td>
<td>

`groupId` and `artifactId` are glob-able patterns. When multiple deployments
exist for a particular group and artifact, return only the latest one (by start time).
May return an empty list if no such deployments are found. Deployment activity is not
persisted across service restarts, so this data is only available for a short time.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artifactId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">groupId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organization">Organization</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Filter organizations by id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizationSummaries</strong></td>
<td valign="top">[<a href="#organizationsummary">OrganizationSummary</a>!]!</td>
<td>

Returns a list of the organization summaries containing the known id and name for each organization.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizations</strong></td>
<td valign="top">[<a href="#organization">Organization</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Filter organizations by id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>previousRecipeRuns</strong></td>
<td valign="top"><a href="#reciperunhistoryconnection">RecipeRunHistoryConnection</a>!</td>
<td>

Get all recipe runs by a user id (passed via header) sorted by most recent.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterBy</td>
<td valign="top"><a href="#reciperunfilterinput">RecipeRunFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortOrder</td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quarantinedRepositories</strong></td>
<td valign="top">[<a href="#repository">Repository</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong></td>
<td valign="top"><a href="#recipe">Recipe</a>!</td>
<td>

Look up a single recipe record by it's fully-qualified `ID`. \n
Example: `id`: `org.openrewrite.java.testing.junit5.IgnoreToDisabled`

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeArtifacts</strong></td>
<td valign="top">[<a href="#recipeartifact">RecipeArtifact</a>!]!</td>
<td>

Return all loaded recipe artifacts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeDeployment</strong></td>
<td valign="top"><a href="#recipedeploymentresult">RecipeDeploymentResult</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeDeployments</strong></td>
<td valign="top">[<a href="#recipedeploymentresult">RecipeDeploymentResult</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">state</td>
<td valign="top"><a href="#recipedeploymentstate">RecipeDeploymentState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRun</strong></td>
<td valign="top"><a href="#reciperun">RecipeRun</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunReportDownload</strong></td>
<td valign="top"><a href="#reciperunreportdownloadtask">RecipeRunReportDownloadTask</a></td>
<td>

Poll to see if a recipe run report download task has completed.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunSummaryByRepository</strong></td>
<td valign="top"><a href="#reciperunsummary">RecipeRunSummary</a>!</td>
<td>

Used to fetch meta information about a recipe result for a particular repository.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Recipe Run ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryInput</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td>

Example: {"scmType":"GITHUB","origin":"git@...","path":"Netflix/eureka","branch":"main"}

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top"><a href="#repositoryconnection">RepositoryConnection</a>!</td>
<td>

Returns a paginated list of known repository identifiers

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#repositoryfilter">RepositoryFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryIndex</strong> ⚠️</td>
<td valign="top">[<a href="#repository">Repository</a>!]</td>
<td>

Returns the list of known repository identifiers

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use `repositories` which is paginated for improved performance.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">showOrphaned</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>searchRecipes</strong></td>
<td valign="top"><a href="#recipesearchconnection">RecipeSearchConnection</a>!</td>
<td>

Search for recipes matching the supplied search query.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">featureAi</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statistics</strong></td>
<td valign="top"><a href="#servicestatistics">ServiceStatistics</a>!</td>
<td>

Return statistics about the number of recipes and the number of repositories

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>worker</strong></td>
<td valign="top"><a href="#worker">Worker</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>workers</strong></td>
<td valign="top">[<a href="#worker">Worker</a>!]!</td>
<td>

This query returns a list of all active worker nodes processing recipes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allCommitJobs</strong></td>
<td valign="top"><a href="#commitjobconnection">CommitJobConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitJob</strong></td>
<td valign="top"><a href="#commitjob">CommitJob</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitJobs</strong></td>
<td valign="top"><a href="#commitjobconnection">CommitJobConnection</a>!</td>
<td>

Sorted in descending order of start time

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitsReportDownload</strong></td>
<td valign="top"><a href="#commitsreportdownloadtask">CommitsReportDownloadTask</a></td>
<td>

Check the status of a commits report download task.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizationExists</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repository</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestActionJob</strong></td>
<td valign="top"><a href="#pullrequestactionjob">PullRequestActionJob</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestStatistics</strong></td>
<td valign="top">[<a href="#pullrequeststatistics">PullRequestStatistics</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userHasAccessToRepository</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Does the current user have access to the repository specified by origin?

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repository</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>verifyToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">scmType</td>
<td valign="top"><a href="#scmtype">ScmType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accessTokenEmails</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Returns all active access tokens for a given email address.

Requires administrative access

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accessTokens</strong></td>
<td valign="top">[<a href="#accesstoken">AccessToken</a>!]!</td>
<td>

Returns all active access tokens for the current user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scm</strong></td>
<td valign="top"><a href="#scmconfiguration">ScmConfiguration</a></td>
<td>

Get the configuration for a specific SCM by the `resourceId`

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resourceId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `https://github.com`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scms</strong></td>
<td valign="top">[<a href="#scmconfiguration">ScmConfiguration</a>!]!</td>
<td>

Returns configuration for all SCM providers that have been configured through the Moderne Agent.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allVisualizationRunHistory</strong></td>
<td valign="top"><a href="#visualizationrunconnection">VisualizationRunConnection</a>!</td>
<td>

The visualization history, filtered to a particular visualization and/or organization if provided.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#visualizationrunfilter">VisualizationRunFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortOrder</td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualization</strong></td>
<td valign="top"><a href="#visualization">Visualization</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizationCategories</strong></td>
<td valign="top">[<a href="#visualizationcategory">VisualizationCategory</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categoryId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizationDeployment</strong></td>
<td valign="top"><a href="#visualizationdeploymentresult">VisualizationDeploymentResult</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizationDeployments</strong></td>
<td valign="top">[<a href="#visualizationdeploymentresult">VisualizationDeploymentResult</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">state</td>
<td valign="top"><a href="#visualizationdeploymentstate">VisualizationDeploymentState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizationRun</strong></td>
<td valign="top"><a href="#visualizationrun">VisualizationRun</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizationRunHistory</strong></td>
<td valign="top"><a href="#visualizationrunconnection">VisualizationRunConnection</a>!</td>
<td>

The users visualization history, filtered to a particular visualization and/or organization if provided.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#visualizationrunfilter">VisualizationRunFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organizationId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipeRunId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortOrder</td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">visualizationId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>deleteAstsOlderThan</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Removes all artifacts from the database that have been modified before the specified date.

Requires administrative role.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">modifiedTimestamp</td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRepositoriesByUrl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Removes a repository and all associated artifacts from the database by location

Requires administrative role.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">url</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `http://example.com/artifactory`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRepository</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Removes a Repository and all associated artifacts from the database.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryInput</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRepositoryByLocation</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Removes a repository and all associated artifacts from the database by location

Requires administrative role.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">location</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `moderne-public/cobol-sample-repo/`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>index</strong></td>
<td valign="top"><a href="#astindexconnection">AstIndexConnection</a>!</td>
<td>

Manually run an indexing operation.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">dryRun</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If `true`, performs list and describe operations on the artifact repository, but does not update that database or download any artifacts.

If `false`, performs:

1. list updates available since `modifiedSince` (`now()` if not specified)
2. if `force` is `false`, look for new artifacts
3. describe artifacts (modifies database)

Download action will be performed on next scheduled interval

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">forceUpdate</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Override metadata about an artifact in the database and re-download it from the source.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">locationRegex</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Regular expression to match all or part of the location
Location example: moderne-ingest/com/netflix/Nicobar/nicobar-groovy2/0.3.2-SNAPSHOT/nicobar-groovy2-0.3.2-20230306.135104-1-ast.jar

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">modifiedSince</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

If set, list artifacts that were published after that date, regardless of whether they have already been indexed previously.

Defaults: `now()`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reportModerneCliBuildResult</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Report a build result from the Moderne CLI.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#clibuildresultinput">CliBuildResultInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateRecipes</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Synchronize the deployed recipes in the tenant.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelAllActiveRuns</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Attempt to cancel all runs for all users.
The mutation will return immediately.
Cancellation is "best effort".
No guarantees are made of when or if the cancellations will complete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelAllActiveRunsForUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Attempt to cancel all runs for the user making the request.
The mutation will return immediately.
Cancellation is "best effort".
No guarantees are made of when or if the cancellations will complete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelRecipeRun</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Attempt to cancel the given run.
The mutation will return immediately.
Cancellation is "best effort".
No guarantees are made about when or if the cancellation will complete.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelRecipeRunValidation</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyRecipeRunsToHistory</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Diagnostic mutation to verify copying recipe runs to history.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">copyHistoryInput</td>
<td valign="top"><a href="#copyhistoryinput">CopyHistoryInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createUserOrganization</strong></td>
<td valign="top"><a href="#organization">Organization</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userOrganization</td>
<td valign="top"><a href="#userorganizationinput">UserOrganizationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRecipeArtifact</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artifactId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">groupId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRecipeRunHistory</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteUserOrganization</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>downloadDataTable</strong></td>
<td valign="top"><a href="#datatabledownloadtask">DataTableDownloadTask</a>!</td>
<td>

Initiate a download task (requires polling `dataTableDownload` query to check for completion)

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">dataTable</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">format</td>
<td valign="top"><a href="#datatableformat">DataTableFormat</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipeRunId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">validateDataTableName</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>downloadRecipeRunReport</strong></td>
<td valign="top"><a href="#reciperunreportdownloadtask">RecipeRunReportDownloadTask</a>!</td>
<td>

Initiate a download task of all recipe runs in the past three days (requires polling `recipeRunReportDownload` query to check for completion)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>flushAgentMavenPomCache</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loadRecipesAsync</strong></td>
<td valign="top"><a href="#recipedeploymentresult">RecipeDeploymentResult</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artifactId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">datedSnapshotVersion</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">groupId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trace</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">version</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quarantineRepository</strong></td>
<td valign="top"><a href="#repository">Repository</a></td>
<td>

When a repository routinely errors or causes instability, it can be quarantined, making it
effectively invisible to the service until it is un-quarantined

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryInput</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>queueRecipeRunValidation</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Queue up validation jobs for validating project builds with recipe changes. Incubating and admin only.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">validationInput</td>
<td valign="top"><a href="#recipevalidationinput">RecipeValidationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshOrganizations</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>runRecipe</strong></td>
<td valign="top"><a href="#reciperun">RecipeRun</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">run</td>
<td valign="top"><a href="#reciperuninput">RecipeRunInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>runYamlRecipe</strong></td>
<td valign="top"><a href="#reciperun">RecipeRun</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organizationId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">priority</td>
<td valign="top"><a href="#reciperunpriority">RecipeRunPriority</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryFilter</td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sourceFileFilter</td>
<td valign="top"><a href="#sourcefilefilter">SourceFileFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">yaml</td>
<td valign="top"><a href="#base64">Base64</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unquarantineRepository</strong></td>
<td valign="top"><a href="#repository">Repository</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryInput</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUserOrganization</strong></td>
<td valign="top"><a href="#organization">Organization</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userOrganization</td>
<td valign="top"><a href="#userorganizationupdateinput">UserOrganizationUpdateInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>approvePullRequests</strong></td>
<td valign="top"><a href="#pullrequestactionjob">PullRequestActionJob</a>!</td>
<td>

Mass approve pull requests. Currently only Github is supported.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">approvalJobInput</td>
<td valign="top"><a href="#approvaljobinput">ApprovalJobInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelCommitJob</strong></td>
<td valign="top"><a href="#commitjob">CommitJob</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelPullRequestActionJob</strong></td>
<td valign="top"><a href="#pullrequestactionjob">PullRequestActionJob</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>closePullRequests</strong></td>
<td valign="top"><a href="#pullrequestactionjob">PullRequestActionJob</a>!</td>
<td>

Mass close pull requests.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">closeJobInput</td>
<td valign="top"><a href="#closejobinput">CloseJobInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commit</strong></td>
<td valign="top"><a href="#commitjob">CommitJob</a>!</td>
<td>

Push a branch to the origin remote.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commit</td>
<td valign="top"><a href="#commitinput">CommitInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orgId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Organization ID that will be used to detect available commit options

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>downloadCommitsReport</strong></td>
<td valign="top"><a href="#commitsreportdownloadtask">CommitsReportDownloadTask</a>!</td>
<td>

Download a report of all commits, successful and failed, since `since` (default: 30 days ago)

Requires querying `commitsReportDownload` to get the status. The result of `commitsReportDownload` will
contain a URL to download the resulting report.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">since</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeBitbucketAuthorizationVerifier</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Bitbucket Server OAuth 1.0a - Exchange request token and verifier for Access Token. Successfully exchanged access
tokens are stored for future use.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requestToken</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">verifier</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeBitbucketCloudAuthorizationCode</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Bitbucket Cloud OAuth 2.0 - Exchange authorization code for Access Token. Successfully exchanged access
tokens are stored for future use.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">code</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Temporary code returned from SCM from Step 1 of the OAuth web application flow.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Origin e.g. bitbucket.org

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUri</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Valid redirect URI for the associated SCM OAuth app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeGitLabAuthorizationCode</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Exchanges a GitLab OAuth Auth code with PKCE access code for an access token.
Successfully exchanged tokens are stored for future use.
@see https://docs.gitlab.com/ee/api/oauth2.html#authorization-code-with-proof-key-for-code-exchange-pkce

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">code</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Authorization code returned from GitLab via oauth/authorize endpoint, step 1 in auth-code-pkce exchange

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">codeVerifier</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

PKCE code verifier used to generate code challenge sent to oauth/authorize endpoint

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Origin e.g. gitlab.com

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUri</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Valid redirect URI for the associated SCM OAuth app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeGithubAuthorizationCode</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Exchanges a Github OAuth access code for an access token.

Successfully exchanged tokens are stored for future use.

@see https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">code</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Temporary code returned from SCM from Step 1 of the OAuth web application flow.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Origin e.g. github.com

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUri</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Valid redirect URI for the associated SCM OAuth app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>forkAndCommit</strong></td>
<td valign="top"><a href="#commitjob">CommitJob</a>!</td>
<td>

Push a branch to a fork.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commit</td>
<td valign="top"><a href="#commitinput">CommitInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orgId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Organization ID that will be used to detect available commit options

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organization</td>
<td valign="top"><a href="#string">String</a></td>
<td>

If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">shouldPrefixOrganizationName</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Rename the fork to include the prefix of the origin repository to avoid name collisions.

Notes:
- This will only work if the fork is successfully created in the first place. Existing collisions will return as an error

Example:
`openrewrite/rewrite` -> `myuser/rewrite` -> `myuser/openrewrite__rewrite`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>forkAndPullRequest</strong></td>
<td valign="top"><a href="#commitjob">CommitJob</a>!</td>
<td>

Open a pull request from a branch pushed to a fork.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">canRecreateClosedPullRequest</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Allows to reuse closed/merged pull request. By default pull request will be reused.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commit</td>
<td valign="top"><a href="#commitinput">CommitInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">draft</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Defaults to false.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">maintainerCanModify</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

GitHub only flag to allow maintainers to edit a pull request.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orgId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Organization ID that will be used to detect available commit options

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organization</td>
<td valign="top"><a href="#string">String</a></td>
<td>

If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pullRequestBody</td>
<td valign="top"><a href="#base64">Base64</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pullRequestTitle</td>
<td valign="top"><a href="#string">String</a></td>
<td>

If unset, the commit message will be used as the pull request title.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">shouldPrefixOrganizationName</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getBitbucketRequestToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Obtain a Bitbucket Server OAuth 1.0a Unauthorized Request Token. Returns request token to use with bitbucket
authorize endpoint

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">callbackUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

URL to redirect to after user authorizes token

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Origin

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mergePullRequests</strong></td>
<td valign="top"><a href="#pullrequestactionjob">PullRequestActionJob</a>!</td>
<td>

Mass merge pull requests.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mergeJobInput</td>
<td valign="top"><a href="#mergejobinput">MergeJobInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequest</strong></td>
<td valign="top"><a href="#commitjob">CommitJob</a>!</td>
<td>

Open a pull request from a branch pushed to the origin remote.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">autoMergeMethod</td>
<td valign="top"><a href="#mergemethod">MergeMethod</a></td>
<td>

If allowed by the repository, set the pull request to automatically merge after all checks pass.
`null` means do not auto-merge.
This is "best effort" -- if auto-merge is not enabled on the SCM or the repository, commits will not
fail even if this is set.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">canRecreateClosedPullRequest</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Allows to reuse closed/merged pull request. Default to true.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commit</td>
<td valign="top"><a href="#commitinput">CommitInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">draft</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Defaults to false.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orgId</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

Organization ID that will be used to detect available commit options

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pullRequestBody</td>
<td valign="top"><a href="#base64">Base64</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pullRequestTitle</td>
<td valign="top"><a href="#string">String</a></td>
<td>

If unset, the commit message will be used as the pull request title.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rerunFailedCommitJob</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">gpgKeys</td>
<td valign="top"><a href="#gpginput">GpgInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">scmAccessTokens</td>
<td valign="top">[<a href="#scmaccesstoken">ScmAccessToken</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rerunFailedPullRequestActionJob</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Rerunning a failed pull request action job does not create a new job, it resets any tasks in
FAILED, ORPHANED or CANCELED statuses

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>revokeBitbucketAccessToken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Not exposed on the supergraph. Used by token-service

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">accessToken</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">patToken</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createAccessToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Creates a Moderne Personal Access Tokens for authenticating to the Moderne Platform API.

These tokens are limited in scope and cannot be used to perform queries and mutations that require an administrative role.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">description</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAllAccessTokens</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Delete all access tokens for a given email address.

Useful for cleaning up after a user has been removed from an organization.
Requires administrative access

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>revokeAccessToken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Revokes a Moderne Personal Access Token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>revokeAllScmTokens</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Remove all your active SCM OAuth tokens from the platform.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>revokeScmToken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Revoke a specific SCM OAuth token from the platform.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">scmServerUrl</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelVisualizationRun</strong></td>
<td valign="top"><a href="#visualizationrun">VisualizationRun</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteVisualizationArtifact</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Remove visualizations by package name.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loadVisualizations</strong></td>
<td valign="top"><a href="#visualizationdeploymentresult">VisualizationDeploymentResult</a>!</td>
<td>

Load visualizations from a PyPI package repository.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">version</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loadVisualizationsAsync</strong></td>
<td valign="top"><a href="#visualizationdeploymentresult">VisualizationDeploymentResult</a>!</td>
<td>

Load visualization from PyPI package asynchronously.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">version</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>runVisualization</strong></td>
<td valign="top"><a href="#visualizationrun">VisualizationRun</a>!</td>
<td>

Creates a new visualization run for a given recipe run and organization. The provided organization
must be the same as the organization of the recipe run or contain a superset of its repositories.
For example, a recipe run on ALL can serve as a visualization for any organization.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ephemeral</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Ephemeral visualizations (ad hoc recipe run visualizations, repository details page)
can be deleted a few days after they are created. Non-ephemeral runs
should stick around forever until a subsequent run with the same
visualization id and organization id is finished.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top">[<a href="#optioninput">OptionInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">organizationId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">priority</td>
<td valign="top"><a href="#visualizationrunpriority">VisualizationRunPriority</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipeRunId</td>
<td valign="top"><a href="#string">String</a></td>
<td>

If recipeRunId is not provided, a new recipe run will be initiated.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">visualizationId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### AccessToken

Moderne Personal Access Tokens

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

The date and time the token was created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional description of the token.

Useful for distinguishing between multiple tokens.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The unique identifier for the access token.
This is not the same as the token itself.

</td>
</tr>
</tbody>
</table>

### Agent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nickname</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tenantDomain</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tools</strong></td>
<td valign="top">[<a href="#toolconfiguration">ToolConfiguration</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>version</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AgentIndexConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#agentindexedge">AgentIndexEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### AgentIndexEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#agent">Agent</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ApproveAction

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Url of the pull request, used for determining the id.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#taskstate">TaskState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ArtifactDiagnostics

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>allArtifacts</strong></td>
<td valign="top">[<a href="#astartifactrepository">AstArtifactRepository</a>]</td>
<td>

All artifacts associated with a repository

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">olderThan</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repository</td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allArtifactsByLocation</strong></td>
<td valign="top">[<a href="#astartifactrepositorydiagnostic">AstArtifactRepositoryDiagnostic</a>]</td>
<td>

All artifacts associated with a location

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">location</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `moderne-ingest/moderneinc/cobol-sample-repo/`

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">olderThan</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactsToDownload</strong></td>
<td valign="top">[<a href="#astartifactrepository">AstArtifactRepository</a>]</td>
<td>

List of artifacts that have been described in the database, but have not had their artifacts downloaded to storage

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>indexableRepositories</strong></td>
<td valign="top">[<a href="#astrepository">AstRepository</a>!]!</td>
<td>

The newest artifact we've seen, regardless of whether or not it is downloaded

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latestMavenArtifactByLocation</strong></td>
<td valign="top"><a href="#astartifact">AstArtifact</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">location</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latestMavenArtifacts</strong></td>
<td valign="top">[<a href="#astartifact">AstArtifact</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>listUpdates</strong></td>
<td valign="top">[<a href="#astartifact">AstArtifact</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">modifiedSince</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mavenIndexProperties</strong></td>
<td valign="top">[<a href="#mavenindexproperty">MavenIndexProperty</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Repository count of ingested artifacts that have not been downloaded

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">olderThan</td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Example: `2023-07-01T00:00:00Z`

</td>
</tr>
</tbody>
</table>

### ArtifactStats

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>astsPublished</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of AST artifacts published on this date and subsequently uploaded to Moderne.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ArtifactoryConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactStats</strong></td>
<td valign="top">[<a href="#artifactstats">ArtifactStats</a>!]!</td>
<td>

Statistics about the artifacts in this Artifactory instance

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>astQuery</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The query used to find artifacts in this Artifactory instance

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
</tbody>
</table>

### Ast

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artifactRepository</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>location</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#long">Long</a></td>
<td></td>
</tr>
</tbody>
</table>

### AstArtifact

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>location</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AstArtifactRepository

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artifactLocation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactModified</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactRepository</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildPluginName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildPluginVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### AstArtifactRepositoryDiagnostic

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artifactLocation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactModified</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactRepository</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildPluginName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildPluginVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDownloaded</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### AstIndexConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#astindexedge">AstIndexEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### AstIndexEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#ast">Ast</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AstRepository

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>newestArtifactModifiedTime</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### BitbucketCloudConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>oauth</strong></td>
<td valign="top"><a href="#oauthconfiguration">OAuthConfiguration</a></td>
<td>

Only used for Bitbucket Cloud

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAuthorized</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the current user has an active OAUth authorization

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokens</strong></td>
<td valign="top">[<a href="#accesstoken">AccessToken</a>!]!</td>
<td>

Active authorization tokens for Bitbucket Cloud

</td>
</tr>
</tbody>
</table>

### BitbucketCloudRepository

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ingested</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Available on repositoryIndex and organizations queries
Example: `2021-05-13T11:56:29.818228-07:00`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#long">Long</a></td>
<td></td>
</tr>
</tbody>
</table>

### BitbucketConfiguration

 Extend interface implementation types from Artifact Storage

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>alternateUrls</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Alternative URLS that can be used to access this Bitbucket instance

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ssh</strong></td>
<td valign="top"><a href="#sshconfiguration">SshConfiguration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAuthorized</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the current user has an active OAUth authorization

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokens</strong></td>
<td valign="top">[<a href="#accesstoken">AccessToken</a>!]!</td>
<td>

Active authorization tokens for Bitbucket

</td>
</tr>
</tbody>
</table>

### BitbucketRepository

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ingested</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Available on repositoryIndex and organizations queries
Example: `2021-05-13T11:56:29.818228-07:00`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#long">Long</a></td>
<td></td>
</tr>
</tbody>
</table>

### BranchCommitOptions

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branchName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### CloseAction

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Url of the pull request, used for determining the id.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#taskstate">TaskState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Column

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Commit

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commitType</strong></td>
<td valign="top"><a href="#committype">CommitType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modified</strong> ⚠️</td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use updatedAt instead.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestStatus</strong></td>
<td valign="top"><a href="#pullrequeststatus">PullRequestStatus</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resultLink</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#commitstate">CommitState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CommitConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#commitedge">CommitEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### CommitEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#commit">Commit</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CommitJob

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commits</strong></td>
<td valign="top"><a href="#commitconnection">CommitConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterBy</td>
<td valign="top"><a href="#commitjobfilterinput">CommitJobFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#commitjoborderinput">CommitJobOrderInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>completed</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>excludedFiles</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>extendedMessage</strong></td>
<td valign="top"><a href="#base64">Base64</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top"><a href="#commitoptions">CommitOptions</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organization">Organization</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestActionJobs</strong></td>
<td valign="top"><a href="#pullrequestactionjobconnection">PullRequestActionJobConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#pullrequestactiontype">PullRequestActionType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>started</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#commitjobstate">CommitJobState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>summaryResults</strong></td>
<td valign="top"><a href="#commitjobsummary">CommitJobSummary</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CommitJobConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#commitjobedge">CommitJobEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### CommitJobEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#commitjob">CommitJob</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CommitJobSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>canceledCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>failedCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>noChangeCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>successfulCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CommitsReportDownloadTask

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>fileSize</strong></td>
<td valign="top"><a href="#long">Long</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#commitsreporttaskstate">CommitsReportTaskState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Contributor

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lineCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CustomRecipe

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>yaml</strong></td>
<td valign="top"><a href="#base64">Base64</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Dashboard

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>organizationStats</strong></td>
<td valign="top">[<a href="#organizationstats">OrganizationStats</a>!]!</td>
<td>

Contains statistics for this organization.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>security</strong></td>
<td valign="top">[<a href="#securityresult">SecurityResult</a>!]</td>
<td>

Security results for this organization.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>upgradesAndMigrations</strong></td>
<td valign="top">[<a href="#upgradesandmigrationsresult">UpgradesAndMigrationsResult</a>!]</td>
<td>

Available/recommended upgrades and migrations.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizations</strong></td>
<td valign="top">[<a href="#visualization">Visualization</a>!]</td>
<td>

Recommended visualizations to run on this organization.

</td>
</tr>
</tbody>
</table>

### DataTable

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>columns</strong></td>
<td valign="top">[<a href="#column">Column</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DataTableDownloadStats

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>fileSize</strong></td>
<td valign="top"><a href="#long">Long</a>!</td>
<td>

File size in bytes.

When status is PENDING, this is the size of the file built to this point.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The number of repositories that contributed data to this table

</td>
</tr>
</tbody>
</table>

### DataTableDownloadTask

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dataTable</strong></td>
<td valign="top"><a href="#datatable">DataTable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>downloadUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL will be `null` until the download job is complete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>format</strong></td>
<td valign="top"><a href="#datatableformat">DataTableFormat</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Download task ID provided by `downloadDataTable` mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#downloadtaskstate">DownloadTaskState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stats</strong></td>
<td valign="top"><a href="#datatabledownloadstats">DataTableDownloadStats</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Event

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The action that was performed

Example: `GET_RECIPE`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actionType</strong></td>
<td valign="top"><a href="#actiontype">ActionType</a>!</td>
<td>

The type of action that was performed

Example: `Read`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#markdown">Markdown</a>!</td>
<td>

Extended description of the logged event

Example:
```
Get a specific recipe and its details.
```

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>outcome</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The outcome of the action

Generally be either: `Success` or `Failed`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The target of the event

Example: `recipes` or `recipe.runs`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

The time the event was logged

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Unique identifier for the user that triggered the event

</td>
</tr>
</tbody>
</table>

### EventConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#eventedge">EventEdge</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#page">Page</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### EventEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#event">Event</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ForkCommitOptions

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branchName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>prefixOrganization</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ForkPullRequestOptions

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branchName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canRecreateClosedPullRequest</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draft</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maintainerCanModify</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

GitHub only flag to allow maintainers to edit a pull request.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's
personal account.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>prefixOrganization</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestBody</strong></td>
<td valign="top"><a href="#base64">Base64</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

If unset, the commit message will be used as the pull request title.

</td>
</tr>
</tbody>
</table>

### GenericHttpToolConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
</tbody>
</table>

### GitHubRepository

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ingested</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Available on repositoryIndex and organizations queries
Example: `2021-05-13T11:56:29.818228-07:00`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#long">Long</a></td>
<td></td>
</tr>
</tbody>
</table>

### GitLabConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>oauth</strong></td>
<td valign="top"><a href="#oauthconfiguration">OAuthConfiguration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ssh</strong></td>
<td valign="top"><a href="#sshconfiguration">SshConfiguration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAuthorized</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the current user has an active OAUth authorization

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokens</strong></td>
<td valign="top">[<a href="#accesstoken">AccessToken</a>!]!</td>
<td>

Active authorization tokens for GitLab

</td>
</tr>
</tbody>
</table>

### GitLabRepository

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a></td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

No longer supported

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ingested</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

Available on repositoryIndex and organizations queries
Example: `2021-05-13T11:56:29.818228-07:00`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

GitLab does not have a concept of an Organization, but rather groups and subgroups.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projectNamespace</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

GitLab's project structure is group/(subgroup/subgroup...)/repo.

`projectNamespace` represents the concatenation of all groups (used to find the repo path)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#long">Long</a></td>
<td></td>
</tr>
</tbody>
</table>

### GithubConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allowableOrganizations</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

A list of organizations that Moderne is permitted to fork repositories into

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>oauth</strong></td>
<td valign="top"><a href="#oauthconfiguration">OAuthConfiguration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ssh</strong></td>
<td valign="top"><a href="#sshconfiguration">SshConfiguration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAuthorized</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the current user has an active OAUth authorization

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tokens</strong></td>
<td valign="top">[<a href="#accesstoken">AccessToken</a>!]!</td>
<td>

Active authorization tokens for GitHub

</td>
</tr>
</tbody>
</table>

### GroupArtifactVersion

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artifactId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>datedSnapshotVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>groupId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>version</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### JenkinsConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
</tbody>
</table>

### Maintainer

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>logo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MavenConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artifactStats</strong></td>
<td valign="top">[<a href="#artifactstats">ArtifactStats</a>!]!</td>
<td>

 Maven-specific fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isArtifactSource</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isRecipeSource</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>localRepository</strong></td>
<td valign="top"><a href="#path">Path</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mavenResponseStatus</strong></td>
<td valign="top"><a href="#mavenresponsestatus">MavenResponseStatus</a>!</td>
<td>

Attempt to connect to this maven repository and share the results.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Does this repository support releases?

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>snapshots</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Does this repository support snapshots?

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
</tbody>
</table>

### MavenIndexProperty

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>properties</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MavenResponseStatus

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>responseCode</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

HTTP response code when calling this Maven repository.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>supported</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If this Maven configuration will be used for recipe loading and during recipe running
in worker.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unsupportedReasons</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

If not supported by recipe loading/running, this field will contain the reason(s) why.

</td>
</tr>
</tbody>
</table>

### MergeAction

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top"><a href="#mergeoptions">MergeOptions</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Url of the pull request, used for determining the id.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#taskstate">TaskState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MergeOptions

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>deleteSourceBranch</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mergeMethod</strong></td>
<td valign="top"><a href="#mergemethod">MergeMethod</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### OAuthConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>clientId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The OAuth client ID to use when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>includePrivateRepos</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne may add additional OAuth scopes to the authorization request to allow for access to private repositories.

</td>
</tr>
</tbody>
</table>

### Option

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#object">Object</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>example</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>required</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### Organization

 federated from recipe execution

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dashboard</strong></td>
<td valign="top"><a href="#dashboard">Dashboard</a></td>
<td>

Get current dashboard results for this organization.
Requires an organizations service with at least one section
configured, and requires the last dashboard run to be completed.

NOTE: This is an in-development feature and the data is currently not real.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitOptions</strong></td>
<td valign="top">[<a href="#commitoption">CommitOption</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Used by user organizations

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isUserOrganization</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#organization">Organization</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repository">Repository</a>!]!</td>
<td>

 providing these fields for backwards compatibility with exiting Service/Store code that depends on them

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoriesPages</strong></td>
<td valign="top"><a href="#repositoryconnection">RepositoryConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#repositoryfilter">RepositoryFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### OrganizationConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
</tbody>
</table>

### OrganizationStats

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### OrganizationSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### OrphanedRepository

A repository which originates from a source control management tool for which there is no agent connected.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ingested</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>weight</strong></td>
<td valign="top"><a href="#long">Long</a></td>
<td></td>
</tr>
</tbody>
</table>

### Page

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PageInfo

 Pagination Type - Generic

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasPreviousPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#pullrequestactionedge">PullRequestActionEdge</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#pullrequestaction">PullRequestAction</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionJob

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commitJobId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>completed</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#jobstate">JobState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>summaryResults</strong></td>
<td valign="top"><a href="#pullrequestactionjobsummary">PullRequestActionJobSummary</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tasks</strong></td>
<td valign="top"><a href="#pullrequestactionconnection">PullRequestActionConnection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterBy</td>
<td valign="top"><a href="#pullrequestactionjobfilterinput">PullRequestActionJobFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#pullrequestactionjoborderinput">PullRequestActionJobOrderInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#pullrequestactiontype">PullRequestActionType</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionJobConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#pullrequestactionjobedge">PullRequestActionJobEdge</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionJobEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#pullrequestactionjob">PullRequestActionJob</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionJobSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>canceledCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>failedCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>successfulCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestOptions

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>autoMergeMethod</strong></td>
<td valign="top"><a href="#mergemethod">MergeMethod</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>branchName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canRecreateClosedPullRequest</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>draft</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestBody</strong></td>
<td valign="top"><a href="#base64">Base64</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestTitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

If unset, the commit message will be used as the pull request title.

</td>
</tr>
</tbody>
</table>

### PullRequestStatistics

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#pullrequeststate">PullRequestState</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestStatus

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ciState</strong></td>
<td valign="top"><a href="#cistate">CiState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mergeable</strong></td>
<td valign="top"><a href="#mergeable">Mergeable</a>!</td>
<td>

Can this pull request be merged or not

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>otherBlockingReasons</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Additional status flags that block this pull request. Can depend on the SCM service provider.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>review</strong></td>
<td valign="top"><a href="#reviewstatus">ReviewStatus</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#pullrequeststate">PullRequestState</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PypiConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Instances of the Moderne Agent where this tool has been configured

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

 Shared fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
</tbody>
</table>

### Recipe

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Example: `org.openrewrite.java.testing.junit5.IgnoreToDisabled`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#option">Option</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contributors</strong></td>
<td valign="top">[<a href="#contributor">Contributor</a>!]</td>
<td>

Contributors to the recipe based on git

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataTables</strong></td>
<td valign="top">[<a href="#datatable">DataTable</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#markdown">Markdown</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maintainers</strong></td>
<td valign="top">[<a href="#maintainer">Maintainer</a>!]</td>
<td>

Curated list of verified maintainers of the recipe

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#markdown">Markdown</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>permalink</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Link to run the recipe through the Moderne UI.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeArtifact</strong></td>
<td valign="top"><a href="#recipeartifact">RecipeArtifact</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeList</strong></td>
<td valign="top">[<a href="#recipe">Recipe</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URL to the source file \
Currently only OpenRewrite recipes have a source URL

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeSavings</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRecipes</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>yaml</strong></td>
<td valign="top"><a href="#base64">Base64</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizations</strong></td>
<td valign="top">[<a href="#visualization">Visualization</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeArtifact

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artifactId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>datedSnapshotVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>groupId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestedVersion</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>snapshotTime</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

The time from datedSnapshotVersion extracted into a DateTime
for human-readable presentation in time zones other than UTC

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transitiveDependencyVersions</strong></td>
<td valign="top">[<a href="#groupartifactversion">GroupArtifactVersion</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>version</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeCategory

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>breadcrumbs</strong></td>
<td valign="top">[<a href="#recipecategorybreadcrumb">RecipeCategoryBreadcrumb</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#recipecategory">RecipeCategory</a>!]!</td>
<td>

Categories are sorted alphabetically by name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#markdown">Markdown</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#markdown">Markdown</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipes</strong></td>
<td valign="top">[<a href="#recipe">Recipe</a>!]!</td>
<td>

Any given category will have either recipes or sub-categories, but not both.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRecipeCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeCategoryBreadcrumb

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeDeploymentResult

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artifact</strong></td>
<td valign="top"><a href="#recipeartifact">RecipeArtifact</a></td>
<td>

Will be set if and only if `state` is `FINISHED`.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canDeploy</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#recipedeploymentstate">RecipeDeploymentState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tenantDomain</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trace</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

Trace information about how recipe artifact resolution proceeded.

</td>
</tr>
</tbody>
</table>

### RecipeRun

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organization">Organization</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizationId</strong> ⚠️</td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the organization the recipe was ran under.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use organization instead.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="#reciperunpriority">RecipeRunPriority</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong></td>
<td valign="top"><a href="#recipe">Recipe</a></td>
<td>

The recipe used for this run. If this is null the recipe is no longer loaded.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#reciperunstate">RecipeRunState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>summaryResultsPages</strong></td>
<td valign="top"><a href="#reciperunsummaryconnection">RecipeRunSummaryConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterBy</td>
<td valign="top"><a href="#summaryresultsfilterinput">SummaryResultsFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#summaryresultsorderinput">SummaryResultsOrderInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totals</strong></td>
<td valign="top"><a href="#reciperuntotals">RecipeRunTotals</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitJobs</strong></td>
<td valign="top"><a href="#commitjobconnection">CommitJobConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizationRuns</strong></td>
<td valign="top"><a href="#visualizationrunconnection">VisualizationRunConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#visualizationrunfilter">VisualizationRunFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortOrder</td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">visualizationId</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunHistory

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong> ⚠️</td>
<td valign="top"><a href="#recipe">Recipe</a>!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use recipeRun instead.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRun</strong></td>
<td valign="top"><a href="#reciperun">RecipeRun</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>runId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunHistoryConnection

 Pagination Types - Recipe Run History

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#reciperunhistoryedge">RecipeRunHistoryEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunHistoryEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#reciperunhistory">RecipeRunHistory</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunPerformance

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>astLoading</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dependencyResolution</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRun</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunReportDownloadTask

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>fileSize</strong></td>
<td valign="top"><a href="#long">Long</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#downloadtaskstate">DownloadTaskState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunSummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commit</strong></td>
<td valign="top"><a href="#repositoryprovenance">RepositoryProvenance</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataTables</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Data tables produced by a recipe for this repository

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>debugMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of debug markers (not committable).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errorMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of error markers (not committable).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errorReason</strong></td>
<td valign="top"><a href="#reciperunsummaryerrorreason">RecipeRunSummaryErrorReason</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>infoMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of information markers (not committable).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastUpdated</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizationId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

The id of the organization the recipe was ran under.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>performance</strong></td>
<td valign="top"><a href="#reciperunperformance">RecipeRunPerformance</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>queuePosition</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Position in the worker queue or null if not queued.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>runId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#reciperunsummarystate">RecipeRunSummaryState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeSavings</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td>

Estimated time savings if each occurrence of a recipe was applied.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalChanged</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of changes that would be visible in a patch or could be committed to the repository.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalResults</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of markers in a file. Search markers are not visible in a patch or cannot be committed to the repository.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalSearched</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>validationState</strong></td>
<td valign="top"><a href="#reciperunvalidationstate">RecipeRunValidationState</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>validationUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warningMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of warning markers (not committable).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>worker</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunSummaryConnection

 Pagination Type - Recipe Run Summary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#reciperunsummaryedge">RecipeRunSummaryEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunSummaryEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#reciperunsummary">RecipeRunSummary</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunTotals

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dataTables</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Unique data table names produced by all repositories

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalDebugMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of debug markers (not committable).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalErrorMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of error markers (not committable).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalFilesChanged</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of changes that would be visible in a patch or could be committed to the repository.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalFilesResults</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of files with markers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalFilesSearched</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of files searched across all repositories in the recipe run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalInfoMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of information markers (not committable).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRepositoriesInProgress</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of repositories still running or yet to be run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRepositoriesSuccessful</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of repositories with markers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRepositoriesWithErrors</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of repositories with errors from the recipe run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRepositoriesWithNoChanges</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of repositories with no markers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRepositoriesWithResults</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of repositories with results.

Results may or may not be visible in patches or committed to the repository.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalResults</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of markers across all files.

Markers are not changes that would be visible in a patch or could be committed to the repository.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalTimeSavings</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td>

Estimated time savings if each occurrence of a recipe was applied.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalWarningMarkers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of warning markers (not committable).

</td>
</tr>
</tbody>
</table>

### RecipeSearchConnection

 Pagination Types - Search Recipes

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#recipesearchedge">RecipeSearchEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeSearchEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#recipe">Recipe</a></td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#repositoryedge">RepositoryEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#repository">Repository</a></td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryGroup

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repository">Repository</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryProvenance

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Git SHA

</td>
</tr>
</tbody>
</table>

### ReviewStatus

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>approvedBy</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewDecision</strong></td>
<td valign="top"><a href="#reviewdecision">ReviewDecision</a>!</td>
<td>

sub data fetcher if needed

</td>
</tr>
</tbody>
</table>

### SecurityResult

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>filesChanged</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of files changed across all repositories in this recipe run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>occurrences</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total total number of changes across all repositories in this recipe run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong> ⚠️</td>
<td valign="top"><a href="#recipe">Recipe</a>!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

No longer supported

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipes</strong></td>
<td valign="top">[<a href="#recipe">Recipe</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoriesChanged</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Number of repositories with results.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>riskScore</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

An indicator for the risk mitigated by this recipe

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeSavings</strong></td>
<td valign="top"><a href="#duration">Duration</a>!</td>
<td>

Total amount of time that would be saved by committing the changes in the recipes run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRepositories</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Number of repositories in this organization at the time this recipe was run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

The time at which this recipe last ran

</td>
</tr>
</tbody>
</table>

### ServiceStatistics

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>recipeCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of recipes in the tenant

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of repositories in the tenant

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userRepositoryCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of repositories the calling user can see

</td>
</tr>
</tbody>
</table>

### SshConfiguration

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>port</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### ToolConnectivity

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agentId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isConnected</strong> ⚠️</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use status instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a></td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use status instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#toolconnectivitystatus">ToolConnectivityStatus</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpgradesAndMigrationsResult

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>filesChanged</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of files changed across all repositories in this recipe run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>occurrences</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total total number of changes across all repositories in this recipe run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong> ⚠️</td>
<td valign="top"><a href="#recipe">Recipe</a>!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

No longer supported

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipes</strong></td>
<td valign="top">[<a href="#recipe">Recipe</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoriesChanged</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Number of repositories with results.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeSavings</strong></td>
<td valign="top"><a href="#duration">Duration</a>!</td>
<td>

Total amount of time that would be saved by committing the changes in the recipes run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRepositories</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Number of repositories in this organization at the time this recipe was run.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

The time at which this recipe last ran

</td>
</tr>
</tbody>
</table>

### Visualization

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#option">Option</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong></td>
<td valign="top"><a href="#recipe">Recipe</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dataTable</strong></td>
<td valign="top"><a href="#datatable">DataTable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#markdown">Markdown</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#visualizationimage">VisualizationImage</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#markdown">Markdown</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationArtifact

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>indexUrl</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>installedVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requestedVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizations</strong></td>
<td valign="top">[<a href="#visualization">Visualization</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationCategory

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#visualizationcategory">VisualizationCategory</a>!]!</td>
<td>

Categories are sorted alphabetically by name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#markdown">Markdown</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#markdown">Markdown</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizations</strong></td>
<td valign="top">[<a href="#visualization">Visualization</a>!]!</td>
<td>

Any given category will have either visualizations or sub-categories, but not both.

</td>
</tr>
</tbody>
</table>

### VisualizationDeploymentResult

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artifact</strong></td>
<td valign="top"><a href="#visualizationartifact">VisualizationArtifact</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#visualizationdeploymentstate">VisualizationDeploymentState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationImage

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>contents</strong></td>
<td valign="top"><a href="#base64">Base64</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>height</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Height, in pixels, of the image.

</td>
</tr>
</tbody>
</table>

### VisualizationRun

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dataTable</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">rows</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastUpdatedDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notebook</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

The whole notebook, including the output. This is not persisted
permanently, so is only available for an indeterminate time
after the run completes. This is a diagnostic utility for when
a notebook's saved output is not enough to debug a problem.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organization">Organization</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizationId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>output</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="#visualizationrunpriority">VisualizationRunPriority</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRun</strong></td>
<td valign="top"><a href="#reciperun">RecipeRun</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top"><a href="#visualizationrunrepositoryconnection">VisualizationRunRepositoryConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#visualizationrunstate">VisualizationRunState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualization</strong></td>
<td valign="top"><a href="#visualization">Visualization</a></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#visualizationrunedge">VisualizationRunEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#visualizationrun">VisualizationRun</a></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunRepositoryConnection

 Pagination Type - Recipe Run Summary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#visualizationrunrepositoryedge">VisualizationRunRepositoryEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>missingCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The total count of repositories whose data tables have not been uploaded.
This can happen in the event that the recipe run / upload is not complete yet,
and also in the case where the recipe run or upload failed for any reason.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunRepositoryEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#visualizationrunrepositorysummary">VisualizationRunRepositorySummary</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunRepositorySummary

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#visualizationrunrepositorysummarystate">VisualizationRunRepositorySummaryState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Worker

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>connectedSince</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repository">Repository</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### ApprovalJobInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commitJobId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the commit job, also called commitId.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### AuditLogFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>items</strong></td>
<td valign="top">[<a href="#auditlogfilteriteminput">AuditLogFilterItemInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>logicalOperator</strong></td>
<td valign="top"><a href="#logicaloperator">LogicalOperator</a></td>
<td></td>
</tr>
</tbody>
</table>

### AuditLogFilterItemInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>comparator</strong></td>
<td valign="top"><a href="#comparator">Comparator</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#auditlogfiltercolumns">AuditLogFilterColumns</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### CliBuildResultInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>buildJobLink</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildTimeMs</strong></td>
<td valign="top"><a href="#long">Long</a>!</td>
<td>

The total time the build ran, in milliseconds. Inclusive of the time it take to build each step.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buildTools</strong></td>
<td valign="top">[<a href="#clibuildtool">CliBuildTool</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cliVersion</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>operatingSystem</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceFiles</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total source files contributed by this build step

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>success</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CliBuildTool

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>buildTimeMs</strong></td>
<td valign="top"><a href="#long">Long</a>!</td>
<td>

The time it took to run this build tool step, in milliseconds. Exclusive of the time it takes to discover
and solve for constraints e.g. the appropriate Java version to use for a Gradle step.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pluginVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

In the case of Gradle or Maven, this will be the version of the build plugin injected into the build
to produce LST fragments. In the case of Bazel, Modjava, and Native this will be null, since the only
version number we could give would be the CLI version which is already specified on CliBuildResultInput.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceFiles</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The total source files contributed by this build step

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>step</strong></td>
<td valign="top"><a href="#clibuildtoolstep">CliBuildToolStep</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>success</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>version</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

In the case of Gradle or Maven, this will be the version of Gradle or Maven itself, either driven by a wrapper
or the version installed on the system.

</td>
</tr>
</tbody>
</table>

### CloseJobInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commitJobId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the commit job, also called commitId.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CommitInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branchName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

If unset, commit to the branch that the LST was generated from.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Email to author commit with. Verified against your emails (public and private) that are verified in your SCM provider.
If left blank, your first email will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>excludedFiles</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>extendedMessage</strong></td>
<td valign="top"><a href="#base64">Base64</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gpgKey</strong></td>
<td valign="top"><a href="#gpginput">GpgInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scmAccessTokens</strong></td>
<td valign="top">[<a href="#scmaccesstoken">ScmAccessToken</a>!]</td>
<td>

Accepts personal access tokens created through your SCM Provider.

This will be used in lieu of a OAuth token obtained through web flow.

**Limitations:**

- Bitbucket Data Center and Server requires version 5.5 or later.
- `scmAccessTokens` will take precedence over any access token stored in the database.

@see https://docs.moderne.io/user-documentation/recipe-execution-and-commits-with-graphql#creating-a-pull-request
@see https://docs.moderne.io/references/create-scm-access-tokens

</td>
</tr>
</tbody>
</table>

### CommitJobFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>query</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statuses</strong></td>
<td valign="top">[<a href="#commitstate">CommitState</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### CommitJobOrderInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#commitjoborderfield">CommitJobOrderField</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CopyHistoryInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>since</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DateRangeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
</tbody>
</table>

### EventFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Limit result set to a specific action

Example: `GET_RECIPE`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actionType</strong></td>
<td valign="top"><a href="#actiontype">ActionType</a></td>
<td>

Limit result set to a specific action type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>outcome</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Limit result set to a specific outcome

Generally be either: `Success` or `Failed`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Limit result set to a specific target

Example: `recipes` or `recipe.runs`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Limit result set to a specific user by id

</td>
</tr>
</tbody>
</table>

### GpgInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>passphrase</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>privateKey</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicKey</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MergeJobInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commitJobId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the commit job, also called commitId.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteSourceBranch</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mergeMethod</strong></td>
<td valign="top"><a href="#mergemethod">MergeMethod</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### OptionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `methodPattern`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#object">Object</a>!</td>
<td>

Example: `java.util.List add(..)`

</td>
</tr>
</tbody>
</table>

### PartialCommitInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>changeset</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Git SHA

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

SSH or HTTPS URL to the repository

</td>
</tr>
</tbody>
</table>

### PartialRepositoryInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>commit</strong></td>
<td valign="top"><a href="#partialcommitinput">PartialCommitInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryInput</strong></td>
<td valign="top"><a href="#repositoryinput">RepositoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceFiles</strong></td>
<td valign="top">[<a href="#sourcefileinput">SourceFileInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionJobFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>query</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statuses</strong></td>
<td valign="top">[<a href="#taskstate">TaskState</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionJobOrderInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#pullrequestactionjoborderfield">PullRequestActionJobOrderField</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Example: `org.openrewrite.java.search.FindMethods`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#optioninput">OptionInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dateRange</strong></td>
<td valign="top"><a href="#daterangeinput">DateRangeInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>emailStartsWith</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organizationId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>showOnlyMyRuns</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>states</strong></td>
<td valign="top">[<a href="#reciperunstate">RecipeRunState</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>organizationId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

When supplied, the repositories the recipe will be run on will be sourced from the given organization.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>partialRepository</strong></td>
<td valign="top"><a href="#partialrepositoryinput">PartialRepositoryInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="#reciperunpriority">RecipeRunPriority</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong></td>
<td valign="top"><a href="#recipeinput">RecipeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryFilter</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceFileFilter</strong></td>
<td valign="top"><a href="#sourcefilefilter">SourceFileFilter</a></td>
<td>

When supplied, only run the recipe on the files that do not match any excluded files.

</td>
</tr>
</tbody>
</table>

### RecipeValidationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>repositoryFilter</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>runId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>filterBy</strong></td>
<td valign="top"><a href="#repositoryfields">RepositoryFields</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>query</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>]</td>
<td>

 Used to filter repository groups

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>showOrphaned</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortBy</strong></td>
<td valign="top"><a href="#repositoryfields">RepositoryFields</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortOrder</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ScmAccessToken

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#scmtype">ScmType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SourceFileFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>excludes</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>

List of file patterns to exclude from running the recipe.

</td>
</tr>
</tbody>
</table>

### SourceFileInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#base64">Base64</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourcePath</strong></td>
<td valign="top"><a href="#path">Path</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SummaryResultsFilterInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>errorReasons</strong></td>
<td valign="top">[<a href="#reciperunsummaryerrorreason">RecipeRunSummaryErrorReason</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>onlyWithResults</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Only returns results that where changes would be made

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>query</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Fuzzy search repositories

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statuses</strong></td>
<td valign="top">[<a href="#reciperunsummarystate">RecipeRunSummaryState</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SummaryResultsOrderInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#sortorder">SortOrder</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#reciperesultcolumnkey">RecipeResultColumnKey</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UserOrganizationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UserOrganizationUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#repositoryinput">RepositoryInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>organizationId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statuses</strong></td>
<td valign="top">[<a href="#visualizationrunstate">VisualizationRunState</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visualizationId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
</tbody>
</table>

## Enums

### ActionType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Create</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Delete</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Read</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Update</strong></td>
<td></td>
</tr>
</tbody>
</table>

### AuditLogFilterColumns

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ACTION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ACTION_TYPE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DESCRIPTION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OUTCOME</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TARGET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TIMESTAMP</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>USER_ID</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CiState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FAILED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IN_PROGRESS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SKIPPED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SUCCESSFUL</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CliBuildToolStep

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Bazel</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Gradle</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Maven</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Modjava</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Native</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CommitJobOrderField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MODIFIED</strong></td>
<td>

MODIFIED is deprecated, please use UPDATED_AT

</td>
</tr>
<tr>
<td valign="top"><strong>REPOSITORY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>STATE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UPDATED_AT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CommitJobState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td>

Represents a commit job that was canceled.

The commit job may have some commits that were successfully processed and some that were not.

</td>
</tr>
<tr>
<td valign="top"><strong>FAILED</strong></td>
<td>

All commits failed.

</td>
</tr>
<tr>
<td valign="top"><strong>IN_PROGRESS</strong></td>
<td>

Has commits either waiting to be processed or actively being processed.

</td>
</tr>
<tr>
<td valign="top"><strong>NO_CHANGES</strong></td>
<td>

None of the commits yielded changes.

This is different from a successful commit job because no changes were made to the upstream repository.

</td>
</tr>
<tr>
<td valign="top"><strong>PARTIAL_FAILURE</strong></td>
<td>

All commits have finished processing and more than 50% were failures.

</td>
</tr>
<tr>
<td valign="top"><strong>PARTIAL_SUCCESS</strong></td>
<td>

All commits have finished processing and 50% or more were successful.

</td>
</tr>
<tr>
<td valign="top"><strong>SUCCESSFUL</strong></td>
<td>

All commits succeeded.

This also includes commits that yielded no changes.

</td>
</tr>
</tbody>
</table>

### CommitOption

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Branch</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Direct</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Fork</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ForkAndPullRequest</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>None</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PullRequest</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CommitState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COMPLETED</strong></td>
<td>

A commit that was processed successfully.

</td>
</tr>
<tr>
<td valign="top"><strong>FAILED</strong></td>
<td>

A commit that was processed but encountered an error.

</td>
</tr>
<tr>
<td valign="top"><strong>NO_CHANGES</strong></td>
<td>

A commit that was process but yielded no changes.

Generally this occurs when applying a patch to the upstream repository does not produce any changes to the source file(s) to commit.

</td>
</tr>
<tr>
<td valign="top"><strong>ORPHANED</strong></td>
<td>

A commit that was started but could not be completed in time.
A new processor should be able to pick up the commit and resume processing.

</td>
</tr>
<tr>
<td valign="top"><strong>PROCESSING</strong></td>
<td>

A commit that is actively being processed.

</td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td>

A commit that is waiting to be processed.

</td>
</tr>
</tbody>
</table>

### CommitType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DIRECT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FORK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FORK_AND_PULL_REQUEST</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PULL_REQUEST</strong></td>
<td></td>
</tr>
</tbody>
</table>

### CommitsReportTaskState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FAILURE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SUCCESS</strong></td>
<td></td>
</tr>
</tbody>
</table>

### Comparator

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CONTAINS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DATE_RANGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ENDS_WITH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EQUALS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IS_EMPTY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_CONTAINS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NOT_EMPTY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>STARTS_WITH</strong></td>
<td></td>
</tr>
</tbody>
</table>

### DataTableFormat

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CSV</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXCEL</strong></td>
<td></td>
</tr>
</tbody>
</table>

### DownloadTaskState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FAILURE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SUCCESS</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ErrorDetail

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>DEADLINE_EXCEEDED</strong></td>
<td>

The deadline expired before the operation could complete.

For operations that change the state of the system, this error
may be returned even if the operation has completed successfully.
For example, a successful response from a server could have been
delayed long enough for the deadline to expire.

HTTP Mapping: 504 Gateway Timeout
Error Type: UNAVAILABLE

</td>
</tr>
<tr>
<td valign="top"><strong>ENHANCE_YOUR_CALM</strong></td>
<td>

The server detected that the client is exhibiting a behavior that
might be generating excessive load.

HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
Error Type: UNAVAILABLE

</td>
</tr>
<tr>
<td valign="top"><strong>FIELD_NOT_FOUND</strong></td>
<td>

The requested field is not found in the schema.

This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
query is valid, but is unable to return a result (if, for example, a
specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
returned by the server to signify that the requested field is not known to exist.
This may be returned in lieu of failing the entire query.
See also `PERMISSION_DENIED` for cases where the
requested field is invalid only for the given user or class of users.

HTTP Mapping: 404 Not Found
Error Type: BAD_REQUEST

</td>
</tr>
<tr>
<td valign="top"><strong>INVALID_ARGUMENT</strong></td>
<td>

The client specified an invalid argument.

Note that this differs from `FAILED_PRECONDITION`.
`INVALID_ARGUMENT` indicates arguments that are problematic
regardless of the state of the system (e.g., a malformed file name).

HTTP Mapping: 400 Bad Request
Error Type: BAD_REQUEST

</td>
</tr>
<tr>
<td valign="top"><strong>INVALID_CURSOR</strong></td>
<td>

The provided cursor is not valid.

The most common usage for this error is when a client is paginating
through a list that uses stateful cursors. In that case, the provided
cursor may be expired.

HTTP Mapping: 404 Not Found
Error Type: NOT_FOUND

</td>
</tr>
<tr>
<td valign="top"><strong>MISSING_RESOURCE</strong></td>
<td>

Unable to perform operation because a required resource is missing.

Example: Client is attempting to refresh a list, but the specified
list is expired. This requires an action by the client to get a new list.

If the user is simply trying GET a resource that is not found,
use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
is to be used particularly when the user is performing an operation
that requires a particular resource to exist.

HTTP Mapping: 400 Bad Request or 500 Internal Server Error
Error Type: FAILED_PRECONDITION

</td>
</tr>
<tr>
<td valign="top"><strong>SERVICE_ERROR</strong></td>
<td>

Service Error.

There is a problem with an upstream service.

This may be returned if a gateway receives an unknown error from a service
or if a service is unreachable.
If a request times out which waiting on a response from a service,
`DEADLINE_EXCEEDED` may be returned instead.
If a service returns a more specific error Type, the specific error Type may
be returned instead.

HTTP Mapping: 502 Bad Gateway
Error Type: UNAVAILABLE

</td>
</tr>
<tr>
<td valign="top"><strong>TCP_FAILURE</strong></td>
<td>

Request failed due to network errors.

HTTP Mapping: 503 Unavailable
Error Type: UNAVAILABLE

</td>
</tr>
<tr>
<td valign="top"><strong>THROTTLED_CONCURRENCY</strong></td>
<td>

Request throttled based on server concurrency limits.

HTTP Mapping: 503 Unavailable
Error Type: UNAVAILABLE

</td>
</tr>
<tr>
<td valign="top"><strong>THROTTLED_CPU</strong></td>
<td>

Request throttled based on server CPU limits

HTTP Mapping: 503 Unavailable.
Error Type: UNAVAILABLE

</td>
</tr>
<tr>
<td valign="top"><strong>UNIMPLEMENTED</strong></td>
<td>

The operation is not implemented or is not currently supported/enabled.

HTTP Mapping: 501 Not Implemented
Error Type: BAD_REQUEST

</td>
</tr>
<tr>
<td valign="top"><strong>UNKNOWN</strong></td>
<td>

Unknown error.

This error should only be returned when no other error detail applies.
If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.

HTTP Mapping: 500 Internal Server Error

</td>
</tr>
</tbody>
</table>

### ErrorType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BAD_REQUEST</strong></td>
<td>

Bad Request.

There is a problem with the request.
Retrying the same request is not likely to succeed.
An example would be a query or argument that cannot be deserialized.

HTTP Mapping: 400 Bad Request

</td>
</tr>
<tr>
<td valign="top"><strong>FAILED_PRECONDITION</strong></td>
<td>

The operation was rejected because the system is not in a state
required for the operation's execution.  For example, the directory
to be deleted is non-empty, an rmdir operation is applied to
a non-directory, etc.

Service implementers can use the following guidelines to decide
between `FAILED_PRECONDITION` and `UNAVAILABLE`:

- Use `UNAVAILABLE` if the client can retry just the failing call.
- Use `FAILED_PRECONDITION` if the client should not retry until
the system state has been explicitly fixed.  E.g., if an "rmdir"
     fails because the directory is non-empty, `FAILED_PRECONDITION`
should be returned since the client should not retry unless
the files are deleted from the directory.

HTTP Mapping: 400 Bad Request or 500 Internal Server Error

</td>
</tr>
<tr>
<td valign="top"><strong>INTERNAL</strong></td>
<td>

Internal error.

An unexpected internal error was encountered. This means that some
invariants expected by the underlying system have been broken.
This error code is reserved for serious errors.

HTTP Mapping: 500 Internal Server Error

</td>
</tr>
<tr>
<td valign="top"><strong>NOT_FOUND</strong></td>
<td>

The requested entity was not found.

This could apply to a resource that has never existed (e.g. bad resource id),
or a resource that no longer exists (e.g. cache expired.)

Note to server developers: if a request is denied for an entire class
of users, such as gradual feature rollout or undocumented allowlist,
`NOT_FOUND` may be used. If a request is denied for some users within
a class of users, such as user-based access control, `PERMISSION_DENIED`
must be used.

HTTP Mapping: 404 Not Found

</td>
</tr>
<tr>
<td valign="top"><strong>PERMISSION_DENIED</strong></td>
<td>

The caller does not have permission to execute the specified
operation.

`PERMISSION_DENIED` must not be used for rejections
caused by exhausting some resource or quota.
`PERMISSION_DENIED` must not be used if the caller
cannot be identified (use `UNAUTHENTICATED`
instead for those errors).

This error Type does not imply the
request is valid or the requested entity exists or satisfies
other pre-conditions.

HTTP Mapping: 403 Forbidden

</td>
</tr>
<tr>
<td valign="top"><strong>UNAUTHENTICATED</strong></td>
<td>

The request does not have valid authentication credentials.

This is intended to be returned only for routes that require
authentication.

HTTP Mapping: 401 Unauthorized

</td>
</tr>
<tr>
<td valign="top"><strong>UNAVAILABLE</strong></td>
<td>

Currently Unavailable.

The service is currently unavailable.  This is most likely a
transient condition, which can be corrected by retrying with
a backoff.

HTTP Mapping: 503 Unavailable

</td>
</tr>
<tr>
<td valign="top"><strong>UNKNOWN</strong></td>
<td>

Unknown error.

For example, this error may be returned when
an error code received from another address space belongs to
an error space that is not known in this address space.  Also
errors raised by APIs that do not return enough error information
may be converted to this error.

If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
Unknown errors MUST NOT trigger any special behavior. These MAY be treated
by an implementation as being equivalent to INTERNAL.

When possible, a more specific error should be provided.

HTTP Mapping: 520 Unknown Error

</td>
</tr>
</tbody>
</table>

### JobState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td>

Represents a job that was canceled.

The job may have some tasks that were successfully processed and some that were not.

</td>
</tr>
<tr>
<td valign="top"><strong>FAILED</strong></td>
<td>

All tasks failed.

</td>
</tr>
<tr>
<td valign="top"><strong>IN_PROGRESS</strong></td>
<td>

Has tasks either waiting to be processed or actively being processed.

</td>
</tr>
<tr>
<td valign="top"><strong>PARTIALLY_FAILED</strong></td>
<td>

All tasks have finished processing and more than 50% were failures.

</td>
</tr>
<tr>
<td valign="top"><strong>PARTIALLY_SUCCESSFUL</strong></td>
<td>

All tasks have finished processing and 50% or more were successful.

</td>
</tr>
<tr>
<td valign="top"><strong>SUCCESSFUL</strong></td>
<td>

All tasks succeeded.

</td>
</tr>
</tbody>
</table>

### LogicalOperator

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>AND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OR</strong></td>
<td></td>
</tr>
</tbody>
</table>

### MergeMethod

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MERGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REBASE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SQUASH</strong></td>
<td></td>
</tr>
</tbody>
</table>

### Mergeable

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BLOCKED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MERGEABLE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNKNOWN</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionJobOrderField

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>REPOSITORY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>STATE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UPDATED_AT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestActionType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>APPROVE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CLOSE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MERGE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CLOSED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MERGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>OPEN</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeDeploymentState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FINISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LOADING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeResultColumnKey

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>AST_LOADING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BRANCH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DEBUG_MARKERS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DEPENDENCY_RESOLUTION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ERROR_MARKERS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ERROR_REASON</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INFO_MARKERS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LAST_UPDATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PATH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RECIPE_RUN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>STATUS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TOTAL_CHANGED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TOTAL_RESULTS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TOTAL_SEARCHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WARNING_MARKERS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WORKER</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunPriority

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>LOW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NORMAL</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FINISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RUNNING</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunSummaryErrorReason

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FAILED_LOAD_AST</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FAILED_LOAD_RECIPE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FAILED_LOAD_SYMMETRIC_KEY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RECIPE_ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TIMEOUT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunSummaryState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CREATED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ERROR</strong></td>
<td>

A worker was unable to process this recipe.

</td>
</tr>
<tr>
<td valign="top"><strong>FINISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>LOADING</strong></td>
<td>

A repository's Abstract Syntax Tree is loading into a worker.

</td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td>

A repository is waiting for open workers to process the recipe.

</td>
</tr>
<tr>
<td valign="top"><strong>RUNNING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNAVAILABLE</strong></td>
<td>

A worker was unavailable to display the results of this recipe.

</td>
</tr>
<tr>
<td valign="top"><strong>YIELDED</strong></td>
<td>

A repository has been partially visited and is waiting for open workers to further process the recipe.

</td>
</tr>
</tbody>
</table>

### RecipeRunValidationState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FAIL</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORPHANED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PASS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PENDING</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryFields

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BRANCH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHANGESET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>INGESTED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NAME</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORGANIZATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ORIGIN</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PATH</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>WEIGHT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ReviewDecision

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>APPROVED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CHANGES_REQUESTED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REVIEW_NOT_REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REVIEW_REQUIRED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNKNOWN</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ScmType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BITBUCKET</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BITBUCKET_CLOUD</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GITHUB</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>GITLAB</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SortOrder

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ASC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DESC</strong></td>
<td></td>
</tr>
</tbody>
</table>

### TaskState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td>

A task that was cancelled

</td>
</tr>
<tr>
<td valign="top"><strong>FAILED</strong></td>
<td>

A task that was processed but encountered an error.

</td>
</tr>
<tr>
<td valign="top"><strong>IN_PROGRESS</strong></td>
<td>

A task that is actively being processed.

</td>
</tr>
<tr>
<td valign="top"><strong>ORPHANED</strong></td>
<td>

A task that was started but could not be completed in time.
A new processor can pick up the task and resume processing.

</td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td>

A task that is waiting to be processed.

</td>
</tr>
<tr>
<td valign="top"><strong>SUCCESSFUL</strong></td>
<td>

A task that was processed successfully.

</td>
</tr>
</tbody>
</table>

### ToolConnectivityStatus

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CONNECTED</strong></td>
<td>

Moderne has successfully connected to this tool

</td>
</tr>
<tr>
<td valign="top"><strong>DISCONNECTED</strong></td>
<td>

Moderne has not successfully connected to this tool

</td>
</tr>
<tr>
<td valign="top"><strong>SKIPPED</strong></td>
<td>

Connectivity test was intentionally bypassed

</td>
</tr>
<tr>
<td valign="top"><strong>UNKNOWN</strong></td>
<td>

Not supported by the version of Moderne Agent

</td>
</tr>
</tbody>
</table>

### VisualizationDeploymentState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FAILED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IN_PROGRESS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SUCCESSFUL</strong></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunPriority

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>LOW</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NORMAL</strong></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunRepositorySummaryState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FINISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FINISHED_EMPTY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RUNNING</strong></td>
<td></td>
</tr>
</tbody>
</table>

### VisualizationRunState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CANCELED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>COLLECTING_DATA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ERROR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FINISHED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FINISHED_EMPTY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUEUED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RECIPE_COMPLETED</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RUNNING_NOTEBOOK</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>RUNNING_RECIPE</strong></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Base64

`Base64` represents a base64 encoded string.
In the browser, `btoa` encodes ASCII strings to Base64.

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Date

An RFC-3339 compliant Full Date Scalar

### DateTime

A slightly refined version of RFC-3339 compliant DateTime Scalar

### Duration

String in ISO-8601.
Example: `PT10S` -> 10 seconds

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### JSON

A JSON scalar

### Long

A 64-bit signed integer

### Markdown

Contents may contain Markdown, HTML, or other text and should be passed through a Markdown parser by consumers

### Object

An object scalar

### Path

`Path` represents the path to a file or directory.
The scalar value serializes and parses to a `string`.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.


## Interfaces


### CommitOptions

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branchName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PullRequestAction

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pullRequestUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top"><a href="#taskstate">TaskState</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateMessage</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Repository

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>origin</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ToolConfiguration

Interface for integrations that are configured through the Moderne Agent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>agents</strong></td>
<td valign="top"><a href="#agentindexconnection">AgentIndexConnection</a>!</td>
<td>

Agents that this tool is configured on

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canConnect</strong></td>
<td valign="top">[<a href="#toolconnectivity">ToolConnectivity</a>!]!</td>
<td>

Verify that agent can connect to this tool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipSsl</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate SSL certificates when connecting to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isSkipValidateConnectivity</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne will not validate connectivity to this tool.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A valid URL, including scheme

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valid</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool.

</td>
</tr>
</tbody>
</table>

## Unions

### ScmConfiguration

<table>
<thead>
<th align="left">Type</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong><a href="#bitbucketcloudconfiguration">BitbucketCloudConfiguration</a></strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong><a href="#bitbucketconfiguration">BitbucketConfiguration</a></strong></td>
<td valign="top"> Extend interface implementation types from Artifact Storage</td>
</tr>
<tr>
<td valign="top"><strong><a href="#gitlabconfiguration">GitLabConfiguration</a></strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong><a href="#githubconfiguration">GithubConfiguration</a></strong></td>
<td></td>
</tr>
</tbody>
</table>
