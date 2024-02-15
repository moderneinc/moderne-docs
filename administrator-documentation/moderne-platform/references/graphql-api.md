# GraphQL API

## Query

| Field                            |                                                                           Argument | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description |
| -------------------------------- | ---------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                       |                       [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Paginated result of all Moderne Agents that are presently connected to the Moderne Platform                                                                                                                                                                                                                                                                                                                                                                                                                                        |             |
| **artifactDiagnostics**          |                         [ArtifactDiagnostics](graphql-api.md#artifactdiagnostics)! | Set of diagnostic queries to better understand the state of artifacts in the platform                                                                                                                                                                                                                                                                                                                                                                                                                                              |             |
| **httpTool**                     |                         \[[ToolConfiguration](graphql-api.md#toolconfiguration)!]! | <p>Find a specific set of integrations by URL</p><p>Requires administrative role.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                              |             |
| url                              |                                                   [String](graphql-api.md#string)! | Example: `https://github.com`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |
| **indexableRepositories** ⚠️     |                                 \[[AstRepository](graphql-api.md#astrepository)!]! | <p>⚠️ <strong>DEPRECATED</strong></p><p>Use artifactDiagnostics.indexableRepositories instead</p>                                                                                                                                                                                                                                                                                                                                                                                                                                  |             |
| **tools**                        |                         \[[ToolConfiguration](graphql-api.md#toolconfiguration)!]! | <p>List of all integrations that are configured through connected Moderne Agent(s)</p><p>Requires administrative role.</p>                                                                                                                                                                                                                                                                                                                                                                                                         |             |
| **events**                       |                                 [EventConnection](graphql-api.md#eventconnection)! | Paginated result of events that have been logged                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| filter                           |                                [EventFilterInput](graphql-api.md#eventfilterinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| filters                          |                          [AuditLogFilterInput](graphql-api.md#auditlogfilterinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| since                            |                                                [DateTime](graphql-api.md#datetime) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **activeRecipeRuns**             |                                         \[[RecipeRun](graphql-api.md#reciperun)!]! | Get all currently active recipes by a user id (passed via header), sorted by most recent.                                                                                                                                                                                                                                                                                                                                                                                                                                          |             |
| limit                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| sortOrder                        |                                              [SortOrder](graphql-api.md#sortorder) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **allOrganizations**             |                                   \[[Organization](graphql-api.md#organization)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **allRecipeRuns**                |           [RecipeRunHistoryConnection](graphql-api.md#reciperunhistoryconnection)! | Get all recipe runs sorted by most recent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| before                           |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| filterBy                         |                        [RecipeRunFilterInput](graphql-api.md#reciperunfilterinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| last                             |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| sortOrder                        |                                              [SortOrder](graphql-api.md#sortorder) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **canDeploy**                    |                                                 [Boolean](graphql-api.md#boolean)! | Can be used to determine if the current user is able to deploy any recipes.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |             |
| **categories**                   |                               \[[RecipeCategory](graphql-api.md#recipecategory)!]! | Returns the categories with associated recipes or subcategories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |             |
| categoryId                       |                                                            [ID](graphql-api.md#id) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **customRecipeForRecipeRun**     |                                        [CustomRecipe](graphql-api.md#customrecipe) | Get the custom recipe for a given recipe run id. Still present after the recipe run results are no longer available.                                                                                                                                                                                                                                                                                                                                                                                                               |             |
| recipeRunId                      |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **dataTableDownload**            |                     [DataTableDownloadTask](graphql-api.md#datatabledownloadtask)! | Poll to see if a data table download task has completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **dataTableRepositoryOrigins**   |                                               \[[String](graphql-api.md#string)!]! | A list of the distinct repository origins that have produced rows for a particular data table. This can be used to ensure that valid VCS OAuth tokens are available for all origins prior to downloading a data table. If a valid OAuth token is not available at the time the data table is downloaded, authorization checks for that origin will fail and the row will not be included in the result. Without being able to complete an authorization check, we cannot determine if the user has read access to that repository. |             |
| dataTable                        |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| recipeRunId                      |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **defaultCommitOptions**         |                                   \[[CommitOption](graphql-api.md#commitoption)!]! | List of default commit options for tenant, which is configured in agent config. If agent config doesn't have this option will return all available options.                                                                                                                                                                                                                                                                                                                                                                        |             |
| **findRepositories**             |                                       \[[Repository](graphql-api.md#repository)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| repositoryQuery                  |                                 [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **findRepository**               |                                            [Repository](graphql-api.md#repository) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| repositoryQuery                  |                                 [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **latestRecipeDeployments**      |               \[[RecipeDeploymentResult](graphql-api.md#recipedeploymentresult)!]! | `groupId` and `artifactId` are glob-able patterns. When multiple deployments exist for a particular group and artifact, return only the latest one (by start time). May return an empty list if no such deployments are found. Deployment activity is not persisted across service restarts, so this data is only available for a short time.                                                                                                                                                                                      |             |
| artifactId                       |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| groupId                          |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **organization**                 |                                       [Organization](graphql-api.md#organization)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! | Filter organizations by id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |             |
| **organizationSummaries**        |                     \[[OrganizationSummary](graphql-api.md#organizationsummary)!]! | Returns a list of the organization summaries containing the known id and name for each organization.                                                                                                                                                                                                                                                                                                                                                                                                                               |             |
| **organizations**                |                                   \[[Organization](graphql-api.md#organization)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                            [ID](graphql-api.md#id) | Filter organizations by id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |             |
| **previousRecipeRuns**           |           [RecipeRunHistoryConnection](graphql-api.md#reciperunhistoryconnection)! | Get all recipe runs by a user id (passed via header) sorted by most recent.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| before                           |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| filterBy                         |                        [RecipeRunFilterInput](graphql-api.md#reciperunfilterinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| last                             |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| sortOrder                        |                                              [SortOrder](graphql-api.md#sortorder) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **quarantinedRepositories**      |                                        \[[Repository](graphql-api.md#repository)!] |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **recipe**                       |                                                   [Recipe](graphql-api.md#recipe)! | Look up a single recipe record by it's fully-qualified `ID`. \n Example: `id`: `org.openrewrite.java.testing.junit5.IgnoreToDisabled`                                                                                                                                                                                                                                                                                                                                                                                              |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **recipeArtifacts**              |                               \[[RecipeArtifact](graphql-api.md#recipeartifact)!]! | Return all loaded recipe artifacts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **recipeDeployment**             |                   [RecipeDeploymentResult](graphql-api.md#recipedeploymentresult)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **recipeDeployments**            |               \[[RecipeDeploymentResult](graphql-api.md#recipedeploymentresult)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| state                            |                      [RecipeDeploymentState](graphql-api.md#recipedeploymentstate) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **recipeRun**                    |                                             [RecipeRun](graphql-api.md#reciperun)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **recipeRunReportDownload**      |          [RecipeRunReportDownloadTask](graphql-api.md#reciperunreportdownloadtask) | Poll to see if a recipe run report download task has completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **recipeRunSummaryByRepository** |                               [RecipeRunSummary](graphql-api.md#reciperunsummary)! | Used to fetch meta information about a recipe result for a particular repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |             |
| id                               |                                                           [ID](graphql-api.md#id)! | Recipe Run ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |
| repositoryInput                  |                                 [RepositoryInput](graphql-api.md#repositoryinput)! | Example: {"scmType":"GITHUB","origin":"git@...","path":"Netflix/eureka","branch":"main"}                                                                                                                                                                                                                                                                                                                                                                                                                                           |             |
| **repositories**                 |                       [RepositoryConnection](graphql-api.md#repositoryconnection)! | Returns a paginated list of known repository identifiers                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| filter                           |                                [RepositoryFilter](graphql-api.md#repositoryfilter) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **repositoryIndex** ⚠️           |                                        \[[Repository](graphql-api.md#repository)!] | <p>Returns the list of known repository identifiers</p><p>⚠️ <strong>DEPRECATED</strong></p><p>Use <code>repositories</code> which is paginated for improved performance.</p>                                                                                                                                                                                                                                                                                                                                                      |             |
| showOrphaned                     |                                                  [Boolean](graphql-api.md#boolean) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **searchRecipes**                |                   [RecipeSearchConnection](graphql-api.md#recipesearchconnection)! | Search for recipes matching the supplied search query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| featureAi                        |                                                  [Boolean](graphql-api.md#boolean) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| query                            |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **statistics**                   |                             [ServiceStatistics](graphql-api.md#servicestatistics)! | Return statistics about the number of recipes and the number of repositories                                                                                                                                                                                                                                                                                                                                                                                                                                                       |             |
| **worker**                       |                                                    [Worker](graphql-api.md#worker) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| name                             |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **workers**                      |                                               \[[Worker](graphql-api.md#worker)!]! | This query returns a list of all active worker nodes processing recipes.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |             |
| **allCommitJobs**                |                         [CommitJobConnection](graphql-api.md#commitjobconnection)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **commitJob**                    |                                              [CommitJob](graphql-api.md#commitjob) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **commitJobs**                   |                         [CommitJobConnection](graphql-api.md#commitjobconnection)! | Sorted in descending order of start time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **commitsReportDownload**        |              [CommitsReportDownloadTask](graphql-api.md#commitsreportdownloadtask) | Check the status of a commits report download task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **organizationExists**           |                                                 [Boolean](graphql-api.md#boolean)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| repository                       |                                 [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **pullRequestActionJob**         |                       [PullRequestActionJob](graphql-api.md#pullrequestactionjob)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **pullRequestStatistics**        |                 \[[PullRequestStatistics](graphql-api.md#pullrequeststatistics)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| origin                           |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| query                            |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **userHasAccessToRepository**    |                                                 [Boolean](graphql-api.md#boolean)! | Does the current user have access to the repository specified by origin?                                                                                                                                                                                                                                                                                                                                                                                                                                                           |             |
| repository                       |                                 [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **verifyToken**                  |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| origin                           |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| scmType                          |                                                 [ScmType](graphql-api.md#scmtype)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **accessTokenEmails**            |                                               \[[String](graphql-api.md#string)!]! | <p>Returns all active access tokens for a given email address.</p><p>Requires administrative access</p>                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| **accessTokens**                 |                                     \[[AccessToken](graphql-api.md#accesstoken)!]! | Returns all active access tokens for the current user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| **scm**                          |                                [ScmConfiguration](graphql-api.md#scmconfiguration) | Get the configuration for a specific SCM by the `resourceId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |             |
| resourceId                       |                                                   [String](graphql-api.md#string)! | Example: `https://github.com`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |
| **scms**                         |                           \[[ScmConfiguration](graphql-api.md#scmconfiguration)!]! | Returns configuration for all SCM providers that have been configured through the Moderne Agent.                                                                                                                                                                                                                                                                                                                                                                                                                                   |             |
| **allVisualizationRunHistory**   |           [VisualizationRunConnection](graphql-api.md#visualizationrunconnection)! | The visualization history, filtered to a particular visualization and/or organization if provided.                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| before                           |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| filter                           |                    [VisualizationRunFilter](graphql-api.md#visualizationrunfilter) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| last                             |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| sortOrder                        |                                              [SortOrder](graphql-api.md#sortorder) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **visualization**                |                                     [Visualization](graphql-api.md#visualization)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **visualizationCategories**      |                 \[[VisualizationCategory](graphql-api.md#visualizationcategory)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| categoryId                       |                                                            [ID](graphql-api.md#id) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **visualizationDeployment**      |      [VisualizationDeploymentResult](graphql-api.md#visualizationdeploymentresult) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                   [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **visualizationDeployments**     | \[[VisualizationDeploymentResult](graphql-api.md#visualizationdeploymentresult)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| state                            |        [VisualizationDeploymentState](graphql-api.md#visualizationdeploymentstate) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **visualizationRun**             |                               [VisualizationRun](graphql-api.md#visualizationrun)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| id                               |                                                           [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **visualizationRunHistory**      |           [VisualizationRunConnection](graphql-api.md#visualizationrunconnection)! | The users visualization history, filtered to a particular visualization and/or organization if provided.                                                                                                                                                                                                                                                                                                                                                                                                                           |             |
| after                            |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| before                           |                                                    [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| filter                           |                    [VisualizationRunFilter](graphql-api.md#visualizationrunfilter) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| first                            |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| last                             |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| organizationId                   |                                                            [ID](graphql-api.md#id) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| recipeRunId                      |                                                            [ID](graphql-api.md#id) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| sortOrder                        |                                              [SortOrder](graphql-api.md#sortorder) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| visualizationId                  |                                                            [ID](graphql-api.md#id) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |

## Mutation

| Field                                       |                                                                       Argument | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description |
| ------------------------------------------- | -----------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **deleteAstsOlderThan**                     |                                                      [Int](graphql-api.md#int) | <p>Removes all artifacts from the database that have been modified before the specified date.</p><p>Requires administrative role.</p>                                                                                                                                                                                                                                                                                                                                                                           |             |
| modifiedTimestamp                           |                                           [DateTime](graphql-api.md#datetime)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **deleteRepositoriesByUrl**                 |                                              [Boolean](graphql-api.md#boolean) | <p>Removes a repository and all associated artifacts from the database by location</p><p>Requires administrative role.</p>                                                                                                                                                                                                                                                                                                                                                                                      |             |
| url                                         |                                               [String](graphql-api.md#string)! | Example: `http://example.com/artifactory`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |             |
| **deleteRepository**                        |                                              [Boolean](graphql-api.md#boolean) | Removes a Repository and all associated artifacts from the database.                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| repositoryInput                             |                             [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **deleteRepositoryByLocation**              |                                              [Boolean](graphql-api.md#boolean) | <p>Removes a repository and all associated artifacts from the database by location</p><p>Requires administrative role.</p>                                                                                                                                                                                                                                                                                                                                                                                      |             |
| location                                    |                                               [String](graphql-api.md#string)! | Example: `moderne-public/cobol-sample-repo/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| **index**                                   |                       [AstIndexConnection](graphql-api.md#astindexconnection)! | Manually run an indexing operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| dryRun                                      |                                              [Boolean](graphql-api.md#boolean) | <p>If <code>true</code>, performs list and describe operations on the artifact repository, but does not update that database or download any artifacts.</p><p>If <code>false</code>, performs:</p><ol><li>list updates available since <code>modifiedSince</code> (<code>now()</code> if not specified)</li><li>if <code>force</code> is <code>false</code>, look for new artifacts</li><li>describe artifacts (modifies database)</li></ol><p>Download action will be performed on next scheduled interval</p> |             |
| first                                       |                                                      [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| forceUpdate                                 |                                              [Boolean](graphql-api.md#boolean) | Override metadata about an artifact in the database and re-download it from the source.                                                                                                                                                                                                                                                                                                                                                                                                                         |             |
| locationRegex                               |                                                [String](graphql-api.md#string) | Regular expression to match all or part of the location Location example: moderne-ingest/com/netflix/Nicobar/nicobar-groovy2/0.3.2-SNAPSHOT/nicobar-groovy2-0.3.2-20230306.135104-1-ast.jar                                                                                                                                                                                                                                                                                                                     |             |
| modifiedSince                               |                                            [DateTime](graphql-api.md#datetime) | <p>If set, list artifacts that were published after that date, regardless of whether they have already been indexed previously.</p><p>Defaults: <code>now()</code></p>                                                                                                                                                                                                                                                                                                                                          |             |
| **reportModerneCliBuildResult**             |                                             [Boolean](graphql-api.md#boolean)! | Report a build result from the Moderne CLI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |             |
| input                                       |                     [CliBuildResultInput](graphql-api.md#clibuildresultinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **updateRecipes**                           |                                              [Boolean](graphql-api.md#boolean) | Synchronize the deployed recipes in the tenant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **cancelAllActiveRuns**                     |                                              [Boolean](graphql-api.md#boolean) | Attempt to cancel all runs for all users. The mutation will return immediately. Cancellation is "best effort". No guarantees are made of when or if the cancellations will complete.                                                                                                                                                                                                                                                                                                                            |             |
| **cancelAllActiveRunsForUser**              |                                              [Boolean](graphql-api.md#boolean) | Attempt to cancel all runs for the user making the request. The mutation will return immediately. Cancellation is "best effort". No guarantees are made of when or if the cancellations will complete.                                                                                                                                                                                                                                                                                                          |             |
| **cancelRecipeRun**                         |                                                       [ID](graphql-api.md#id)! | Attempt to cancel the given run. The mutation will return immediately. Cancellation is "best effort". No guarantees are made about when or if the cancellation will complete.                                                                                                                                                                                                                                                                                                                                   |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **cancelRecipeRunValidation**               |                                             [Boolean](graphql-api.md#boolean)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **copyRecipeRunsToHistory**                 |                                             [Boolean](graphql-api.md#boolean)! | Diagnostic mutation to verify copying recipe runs to history.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |             |
| copyHistoryInput                            |                            [CopyHistoryInput](graphql-api.md#copyhistoryinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **createUserOrganization**                  |                                   [Organization](graphql-api.md#organization)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| userOrganization                            |                 [UserOrganizationInput](graphql-api.md#userorganizationinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **deleteRecipeArtifact**                    |                                              [Boolean](graphql-api.md#boolean) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| artifactId                                  |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| groupId                                     |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **deleteRecipeRunHistory**                  |                                                     [Int](graphql-api.md#int)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| email                                       |                                                [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **deleteUserOrganization**                  |                                             [Boolean](graphql-api.md#boolean)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **downloadDataTable**                       |                 [DataTableDownloadTask](graphql-api.md#datatabledownloadtask)! | Initiate a download task (requires polling `dataTableDownload` query to check for completion)                                                                                                                                                                                                                                                                                                                                                                                                                   |             |
| dataTable                                   |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| format                                      |                             [DataTableFormat](graphql-api.md#datatableformat)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| recipeRunId                                 |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| validateDataTableName                       |                                             [Boolean](graphql-api.md#boolean)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **downloadRecipeRunReport**                 |     [RecipeRunReportDownloadTask](graphql-api.md#reciperunreportdownloadtask)! | Initiate a download task of all recipe runs in the past three days (requires polling `recipeRunReportDownload` query to check for completion)                                                                                                                                                                                                                                                                                                                                                                   |             |
| **flushAgentMavenPomCache**                 |                                             [Boolean](graphql-api.md#boolean)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **loadRecipesAsync**                        |               [RecipeDeploymentResult](graphql-api.md#recipedeploymentresult)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| artifactId                                  |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| datedSnapshotVersion                        |                                                [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| groupId                                     |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| trace                                       |                                              [Boolean](graphql-api.md#boolean) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| version                                     |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **quarantineRepository**                    |                                        [Repository](graphql-api.md#repository) | When a repository routinely errors or causes instability, it can be quarantined, making it effectively invisible to the service until it is un-quarantined                                                                                                                                                                                                                                                                                                                                                      |             |
| repositoryInput                             |                             [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **queueRecipeRunValidation**                |                                             [Boolean](graphql-api.md#boolean)! | Queue up validation jobs for validating project builds with recipe changes. Incubating and admin only.                                                                                                                                                                                                                                                                                                                                                                                                          |             |
| validationInput                             |                 [RecipeValidationInput](graphql-api.md#recipevalidationinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **refreshOrganizations**                    |                                             [Boolean](graphql-api.md#boolean)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **runRecipe**                               |                                         [RecipeRun](graphql-api.md#reciperun)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| run                                         |                               [RecipeRunInput](graphql-api.md#reciperuninput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **runYamlRecipe**                           |                                         [RecipeRun](graphql-api.md#reciperun)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| organizationId                              |                                                        [ID](graphql-api.md#id) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| priority                                    |                          [RecipeRunPriority](graphql-api.md#reciperunpriority) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| repositoryFilter                            |                          \[[RepositoryInput](graphql-api.md#repositoryinput)!] |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| sourceFileFilter                            |                            [SourceFileFilter](graphql-api.md#sourcefilefilter) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| yaml                                        |                                               [Base64](graphql-api.md#base64)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **unquarantineRepository**                  |                                        [Repository](graphql-api.md#repository) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| repositoryInput                             |                             [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **updateUserOrganization**                  |                                   [Organization](graphql-api.md#organization)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| userOrganization                            |     [UserOrganizationUpdateInput](graphql-api.md#userorganizationupdateinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **approvePullRequests**                     |                   [PullRequestActionJob](graphql-api.md#pullrequestactionjob)! | Mass approve pull requests. Currently only Github is supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| approvalJobInput                            |                           [ApprovalJobInput](graphql-api.md#approvaljobinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **cancelCommitJob**                         |                                         [CommitJob](graphql-api.md#commitjob)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **cancelPullRequestActionJob**              |                   [PullRequestActionJob](graphql-api.md#pullrequestactionjob)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **closePullRequests**                       |                   [PullRequestActionJob](graphql-api.md#pullrequestactionjob)! | Mass close pull requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |             |
| closeJobInput                               |                                 [CloseJobInput](graphql-api.md#closejobinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **commit**                                  |                                         [CommitJob](graphql-api.md#commitjob)! | Push a branch to the origin remote.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| commit                                      |                                      [CommitInput](graphql-api.md#commitinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| orgId                                       |                                                        [ID](graphql-api.md#id) | Organization ID that will be used to detect available commit options                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| **downloadCommitsReport**                   |         [CommitsReportDownloadTask](graphql-api.md#commitsreportdownloadtask)! | <p>Download a report of all commits, successful and failed, since <code>since</code> (default: 30 days ago)</p><p>Requires querying <code>commitsReportDownload</code> to get the status. The result of <code>commitsReportDownload</code> will contain a URL to download the resulting report.</p>                                                                                                                                                                                                             |             |
| since                                       |                                            [DateTime](graphql-api.md#datetime) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **exchangeBitbucketAuthorizationVerifier**  |                                             [Boolean](graphql-api.md#boolean)! | Bitbucket Server OAuth 1.0a - Exchange request token and verifier for Access Token. Successfully exchanged access tokens are stored for future use.                                                                                                                                                                                                                                                                                                                                                             |             |
| origin                                      |                                                [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| requestToken                                |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| verifier                                    |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **exchangeBitbucketCloudAuthorizationCode** |                                             [Boolean](graphql-api.md#boolean)! | Bitbucket Cloud OAuth 2.0 - Exchange authorization code for Access Token. Successfully exchanged access tokens are stored for future use.                                                                                                                                                                                                                                                                                                                                                                       |             |
| code                                        |                                               [String](graphql-api.md#string)! | Temporary code returned from SCM from Step 1 of the OAuth web application flow.                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| origin                                      |                                               [String](graphql-api.md#string)! | Origin e.g. bitbucket.org                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |             |
| redirectUri                                 |                                               [String](graphql-api.md#string)! | Valid redirect URI for the associated SCM OAuth app.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| **exchangeGitLabAuthorizationCode**         |                                             [Boolean](graphql-api.md#boolean)! | Exchanges a GitLab OAuth Auth code with PKCE access code for an access token. Successfully exchanged tokens are stored for future use. @see https://docs.gitlab.com/ee/api/oauth2.html#authorization-code-with-proof-key-for-code-exchange-pkce                                                                                                                                                                                                                                                                 |             |
| code                                        |                                               [String](graphql-api.md#string)! | Authorization code returned from GitLab via oauth/authorize endpoint, step 1 in auth-code-pkce exchange                                                                                                                                                                                                                                                                                                                                                                                                         |             |
| codeVerifier                                |                                               [String](graphql-api.md#string)! | PKCE code verifier used to generate code challenge sent to oauth/authorize endpoint                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| origin                                      |                                               [String](graphql-api.md#string)! | Origin e.g. gitlab.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |             |
| redirectUri                                 |                                               [String](graphql-api.md#string)! | Valid redirect URI for the associated SCM OAuth app.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| **exchangeGithubAuthorizationCode**         |                                             [Boolean](graphql-api.md#boolean)! | <p>Exchanges a Github OAuth access code for an access token.</p><p>Successfully exchanged tokens are stored for future use.</p><p>@see https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow</p>                                                                                                                                                                                                                                                           |             |
| code                                        |                                               [String](graphql-api.md#string)! | Temporary code returned from SCM from Step 1 of the OAuth web application flow.                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| origin                                      |                                               [String](graphql-api.md#string)! | Origin e.g. github.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |             |
| redirectUri                                 |                                               [String](graphql-api.md#string)! | Valid redirect URI for the associated SCM OAuth app.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| **forkAndCommit**                           |                                         [CommitJob](graphql-api.md#commitjob)! | Push a branch to a fork.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |             |
| commit                                      |                                      [CommitInput](graphql-api.md#commitinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| orgId                                       |                                                        [ID](graphql-api.md#id) | Organization ID that will be used to detect available commit options                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| organization                                |                                                [String](graphql-api.md#string) | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account.                                                                                                                                                                                                                                                                                                                                                                                      |             |
| shouldPrefixOrganizationName                |                                              [Boolean](graphql-api.md#boolean) | <p>Rename the fork to include the prefix of the origin repository to avoid name collisions.</p><p>Notes:</p><ul><li>This will only work if the fork is successfully created in the first place. Existing collisions will return as an error</li></ul><p>Example: <code>openrewrite/rewrite</code> -> <code>myuser/rewrite</code> -> <code>myuser/openrewrite__rewrite</code></p>                                                                                                                                |             |
| **forkAndPullRequest**                      |                                         [CommitJob](graphql-api.md#commitjob)! | Open a pull request from a branch pushed to a fork.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| canRecreateClosedPullRequest                |                                              [Boolean](graphql-api.md#boolean) | Allows to reuse closed/merged pull request. By default pull request will be reused.                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| commit                                      |                                      [CommitInput](graphql-api.md#commitinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| draft                                       |                                              [Boolean](graphql-api.md#boolean) | Defaults to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |             |
| maintainerCanModify                         |                                              [Boolean](graphql-api.md#boolean) | GitHub only flag to allow maintainers to edit a pull request.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |             |
| orgId                                       |                                                        [ID](graphql-api.md#id) | Organization ID that will be used to detect available commit options                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| organization                                |                                                [String](graphql-api.md#string) | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account.                                                                                                                                                                                                                                                                                                                                                                                      |             |
| pullRequestBody                             |                                                [Base64](graphql-api.md#base64) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| pullRequestTitle                            |                                                [String](graphql-api.md#string) | If unset, the commit message will be used as the pull request title.                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| shouldPrefixOrganizationName                |                                              [Boolean](graphql-api.md#boolean) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **getBitbucketRequestToken**                |                                               [String](graphql-api.md#string)! | Obtain a Bitbucket Server OAuth 1.0a Unauthorized Request Token. Returns request token to use with bitbucket authorize endpoint                                                                                                                                                                                                                                                                                                                                                                                 |             |
| callbackUrl                                 |                                               [String](graphql-api.md#string)! | URL to redirect to after user authorizes token                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |             |
| origin                                      |                                               [String](graphql-api.md#string)! | Origin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |             |
| **mergePullRequests**                       |                   [PullRequestActionJob](graphql-api.md#pullrequestactionjob)! | Mass merge pull requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |             |
| mergeJobInput                               |                                 [MergeJobInput](graphql-api.md#mergejobinput)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **pullRequest**                             |                                         [CommitJob](graphql-api.md#commitjob)! | Open a pull request from a branch pushed to the origin remote.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |             |
| autoMergeMethod                             |                                      [MergeMethod](graphql-api.md#mergemethod) | If allowed by the repository, set the pull request to automatically merge after all checks pass. `null` means do not auto-merge. This is "best effort" -- if auto-merge is not enabled on the SCM or the repository, commits will not fail even if this is set.                                                                                                                                                                                                                                                 |             |
| canRecreateClosedPullRequest                |                                              [Boolean](graphql-api.md#boolean) | Allows to reuse closed/merged pull request. Default to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |             |
| commit                                      |                                      [CommitInput](graphql-api.md#commitinput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| draft                                       |                                              [Boolean](graphql-api.md#boolean) | Defaults to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |             |
| orgId                                       |                                                        [ID](graphql-api.md#id) | Organization ID that will be used to detect available commit options                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| pullRequestBody                             |                                                [Base64](graphql-api.md#base64) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| pullRequestTitle                            |                                                [String](graphql-api.md#string) | If unset, the commit message will be used as the pull request title.                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| **rerunFailedCommitJob**                    |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| gpgKeys                                     |                                            [GpgInput](graphql-api.md#gpginput) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| scmAccessTokens                             |                            \[[ScmAccessToken](graphql-api.md#scmaccesstoken)!] |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **rerunFailedPullRequestActionJob**         |                                                       [ID](graphql-api.md#id)! | Rerunning a failed pull request action job does not create a new job, it resets any tasks in FAILED, ORPHANED or CANCELED statuses                                                                                                                                                                                                                                                                                                                                                                              |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **revokeBitbucketAccessToken**              |                                             [Boolean](graphql-api.md#boolean)! | Not exposed on the supergraph. Used by token-service                                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| accessToken                                 |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| origin                                      |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| patToken                                    |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **createAccessToken**                       |                                               [String](graphql-api.md#string)! | <p>Creates a Moderne Personal Access Tokens for authenticating to the Moderne Platform API.</p><p>These tokens are limited in scope and cannot be used to perform queries and mutations that require an administrative role.</p>                                                                                                                                                                                                                                                                                |             |
| description                                 |                                                [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **deleteAllAccessTokens**                   |                                             [Boolean](graphql-api.md#boolean)! | <p>Delete all access tokens for a given email address.</p><p>Useful for cleaning up after a user has been removed from an organization. Requires administrative access</p>                                                                                                                                                                                                                                                                                                                                      |             |
| email                                       |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **revokeAccessToken**                       |                                             [Boolean](graphql-api.md#boolean)! | Revokes a Moderne Personal Access Token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **revokeAllScmTokens**                      |                                             [Boolean](graphql-api.md#boolean)! | Remove all your active SCM OAuth tokens from the platform.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |
| **revokeScmToken**                          |                                             [Boolean](graphql-api.md#boolean)! | Revoke a specific SCM OAuth token from the platform.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| scmServerUrl                                |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **cancelVisualizationRun**                  |                           [VisualizationRun](graphql-api.md#visualizationrun)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| id                                          |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **deleteVisualizationArtifact**             |                                              [Boolean](graphql-api.md#boolean) | Remove visualizations by package name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |             |
| name                                        |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **loadVisualizations**                      | [VisualizationDeploymentResult](graphql-api.md#visualizationdeploymentresult)! | Load visualizations from a PyPI package repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| name                                        |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| version                                     |                                                [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **loadVisualizationsAsync**                 | [VisualizationDeploymentResult](graphql-api.md#visualizationdeploymentresult)! | Load visualization from PyPI package asynchronously.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| name                                        |                                               [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| version                                     |                                                [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| **runVisualization**                        |                           [VisualizationRun](graphql-api.md#visualizationrun)! | Creates a new visualization run for a given recipe run and organization. The provided organization must be the same as the organization of the recipe run or contain a superset of its repositories. For example, a recipe run on ALL can serve as a visualization for any organization.                                                                                                                                                                                                                        |             |
| ephemeral                                   |                                             [Boolean](graphql-api.md#boolean)! | Ephemeral visualizations (ad hoc recipe run visualizations, repository details page) can be deleted a few days after they are created. Non-ephemeral runs should stick around forever until a subsequent run with the same visualization id and organization id is finished.                                                                                                                                                                                                                                    |             |
| options                                     |                                  \[[OptionInput](graphql-api.md#optioninput)!] |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| organizationId                              |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| priority                                    |            [VisualizationRunPriority](graphql-api.md#visualizationrunpriority) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |
| recipeRunId                                 |                                                [String](graphql-api.md#string) | If recipeRunId is not provided, a new recipe run will be initiated.                                                                                                                                                                                                                                                                                                                                                                                                                                             |             |
| visualizationId                             |                                                       [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |             |

## Objects

### AccessToken

Moderne Personal Access Tokens

| Field           |                             Argument | Type                                                                                               | Description |
| --------------- | -----------------------------------: | -------------------------------------------------------------------------------------------------- | ----------- |
| **created**     | [DateTime](graphql-api.md#datetime)! | The date and time the token was created.                                                           |             |
| **description** |      [String](graphql-api.md#string) | <p>Optional description of the token.</p><p>Useful for distinguishing between multiple tokens.</p> |             |
| **id**          |             [ID](graphql-api.md#id)! | The unique identifier for the access token. This is not the same as the token itself.              |             |

### Agent

| Field            |                                                   Argument | Type | Description |
| ---------------- | ---------------------------------------------------------: | ---- | ----------- |
| **id**           |                                   [ID](graphql-api.md#id)! |      |             |
| **nickname**     |                            [String](graphql-api.md#string) |      |             |
| **tenantDomain** |                            [String](graphql-api.md#string) |      |             |
| **tools**        | \[[ToolConfiguration](graphql-api.md#toolconfiguration)!]! |      |             |
| **version**      |                           [String](graphql-api.md#string)! |      |             |

### AgentIndexConnection

| Field        |                                           Argument | Type | Description |
| ------------ | -------------------------------------------------: | ---- | ----------- |
| **count**    |                          [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[AgentIndexEdge](graphql-api.md#agentindexedge)] |      |             |
| **pageInfo** |                [PageInfo](graphql-api.md#pageinfo) |      |             |

### AgentIndexEdge

| Field      |                        Argument | Type | Description |
| ---------- | ------------------------------: | ---- | ----------- |
| **cursor** | [String](graphql-api.md#string) |      |             |
| **node**   |  [Agent](graphql-api.md#agent)! |      |             |

### ApproveAction

| Field              |                                 Argument | Type                                                  | Description |
| ------------------ | ---------------------------------------: | ----------------------------------------------------- | ----------- |
| **createdAt**      |     [DateTime](graphql-api.md#datetime)! |                                                       |             |
| **pullRequestUrl** |         [String](graphql-api.md#string)! | Url of the pull request, used for determining the id. |             |
| **repository**     | [Repository](graphql-api.md#repository)! |                                                       |             |
| **state**          |   [TaskState](graphql-api.md#taskstate)! |                                                       |             |
| **stateMessage**   |          [String](graphql-api.md#string) |                                                       |             |
| **updatedAt**      |     [DateTime](graphql-api.md#datetime)! |                                                       |             |

### ArtifactDiagnostics

| Field                             |                                                                             Argument | Type                                                                                                               | Description |
| --------------------------------- | -----------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| **allArtifacts**                  |                     \[[AstArtifactRepository](graphql-api.md#astartifactrepository)] | All artifacts associated with a repository                                                                         |             |
| olderThan                         |                                                  [DateTime](graphql-api.md#datetime) |                                                                                                                    |             |
| repository                        |                                   [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                                    |             |
| **allArtifactsByLocation**        | \[[AstArtifactRepositoryDiagnostic](graphql-api.md#astartifactrepositorydiagnostic)] | All artifacts associated with a location                                                                           |             |
| location                          |                                                     [String](graphql-api.md#string)! | Example: `moderne-ingest/moderneinc/cobol-sample-repo/`                                                            |             |
| olderThan                         |                                                  [DateTime](graphql-api.md#datetime) |                                                                                                                    |             |
| **artifactsToDownload**           |                     \[[AstArtifactRepository](graphql-api.md#astartifactrepository)] | List of artifacts that have been described in the database, but have not had their artifacts downloaded to storage |             |
| **indexableRepositories**         |                                   \[[AstRepository](graphql-api.md#astrepository)!]! | The newest artifact we've seen, regardless of whether or not it is downloaded                                      |             |
| **latestMavenArtifactByLocation** |                                            [AstArtifact](graphql-api.md#astartifact) |                                                                                                                    |             |
| location                          |                                                     [String](graphql-api.md#string)! |                                                                                                                    |             |
| **latestMavenArtifacts**          |                                         \[[AstArtifact](graphql-api.md#astartifact)] |                                                                                                                    |             |
| **listUpdates**                   |                                         \[[AstArtifact](graphql-api.md#astartifact)] |                                                                                                                    |             |
| modifiedSince                     |                                                  [DateTime](graphql-api.md#datetime) |                                                                                                                    |             |
| **mavenIndexProperties**          |                           \[[MavenIndexProperty](graphql-api.md#mavenindexproperty)] |                                                                                                                    |             |
| **repositoryCount**               |                                                            [Int](graphql-api.md#int) | Repository count of ingested artifacts that have not been downloaded                                               |             |
| olderThan                         |                                                  [DateTime](graphql-api.md#datetime) | Example: `2023-07-01T00:00:00Z`                                                                                    |             |

### ArtifactStats

| Field             |                     Argument | Type                                                                                       | Description |
| ----------------- | ---------------------------: | ------------------------------------------------------------------------------------------ | ----------- |
| **astsPublished** |   [Int](graphql-api.md#int)! | Total number of AST artifacts published on this date and subsequently uploaded to Moderne. |             |
| **date**          | [Date](graphql-api.md#date)! |                                                                                            |             |

### ArtifactoryConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **artifactStats**              |           \[[ArtifactStats](graphql-api.md#artifactstats)!]! | Statistics about the artifacts in this Artifactory instance                                             |             |
| **astQuery**                   |                              [String](graphql-api.md#string) | The query used to find artifacts in this Artifactory instance                                           |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |

### Ast

| Field                  |                             Argument | Type | Description |
| ---------------------- | -----------------------------------: | ---- | ----------- |
| **artifactRepository** |     [String](graphql-api.md#string)! |      |             |
| **location**           |     [String](graphql-api.md#string)! |      |             |
| **modified**           | [DateTime](graphql-api.md#datetime)! |      |             |
| **weight**             |          [Long](graphql-api.md#long) |      |             |

### AstArtifact

| Field         |                             Argument | Type | Description |
| ------------- | -----------------------------------: | ---- | ----------- |
| **location**  |     [String](graphql-api.md#string)! |      |             |
| **timestamp** | [DateTime](graphql-api.md#datetime)! |      |             |
| **url**       |     [String](graphql-api.md#string)! |      |             |

### AstArtifactRepository

| Field                  |                            Argument | Type | Description |
| ---------------------- | ----------------------------------: | ---- | ----------- |
| **artifactLocation**   |     [String](graphql-api.md#string) |      |             |
| **artifactModified**   | [DateTime](graphql-api.md#datetime) |      |             |
| **artifactRepository** |     [String](graphql-api.md#string) |      |             |
| **branch**             |     [String](graphql-api.md#string) |      |             |
| **buildId**            |     [String](graphql-api.md#string) |      |             |
| **buildPluginName**    |     [String](graphql-api.md#string) |      |             |
| **buildPluginVersion** |     [String](graphql-api.md#string) |      |             |
| **changeset**          |     [String](graphql-api.md#string) |      |             |
| **origin**             |     [String](graphql-api.md#string) |      |             |
| **path**               |     [String](graphql-api.md#string) |      |             |

### AstArtifactRepositoryDiagnostic

| Field                  |                            Argument | Type | Description |
| ---------------------- | ----------------------------------: | ---- | ----------- |
| **artifactLocation**   |     [String](graphql-api.md#string) |      |             |
| **artifactModified**   | [DateTime](graphql-api.md#datetime) |      |             |
| **artifactRepository** |     [String](graphql-api.md#string) |      |             |
| **branch**             |     [String](graphql-api.md#string) |      |             |
| **buildId**            |     [String](graphql-api.md#string) |      |             |
| **buildPluginName**    |     [String](graphql-api.md#string) |      |             |
| **buildPluginVersion** |     [String](graphql-api.md#string) |      |             |
| **changeset**          |     [String](graphql-api.md#string) |      |             |
| **isDownloaded**       |   [Boolean](graphql-api.md#boolean) |      |             |
| **origin**             |     [String](graphql-api.md#string) |      |             |
| **path**               |     [String](graphql-api.md#string) |      |             |

### AstIndexConnection

| Field        |                                       Argument | Type | Description |
| ------------ | ---------------------------------------------: | ---- | ----------- |
| **count**    |                      [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[AstIndexEdge](graphql-api.md#astindexedge)] |      |             |
| **pageInfo** |            [PageInfo](graphql-api.md#pageinfo) |      |             |

### AstIndexEdge

| Field      |                        Argument | Type | Description |
| ---------- | ------------------------------: | ---- | ----------- |
| **cursor** | [String](graphql-api.md#string) |      |             |
| **node**   |      [Ast](graphql-api.md#ast)! |      |             |

### AstRepository

| Field                          |                            Argument | Type | Description |
| ------------------------------ | ----------------------------------: | ---- | ----------- |
| **newestArtifactModifiedTime** | [DateTime](graphql-api.md#datetime) |      |             |
| **uri**                        |     [String](graphql-api.md#string) |      |             |

### BitbucketCloudConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **oauth**                      |      [OAuthConfiguration](graphql-api.md#oauthconfiguration) | Only used for Bitbucket Cloud                                                                           |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |
| **isAuthorized**               |                           [Boolean](graphql-api.md#boolean)! | Whether the current user has an active OAUth authorization                                              |             |
| **tokens**                     |               \[[AccessToken](graphql-api.md#accesstoken)!]! | Active authorization tokens for Bitbucket Cloud                                                         |             |

### BitbucketCloudRepository

| Field         |                            Argument | Type                                                                                               | Description |
| ------------- | ----------------------------------: | -------------------------------------------------------------------------------------------------- | ----------- |
| **branch**    |     [String](graphql-api.md#string) |                                                                                                    |             |
| **changeset** |     [String](graphql-api.md#string) |                                                                                                    |             |
| **ingested**  | [DateTime](graphql-api.md#datetime) | Available on repositoryIndex and organizations queries Example: `2021-05-13T11:56:29.818228-07:00` |             |
| **name**      |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **origin**    |     [String](graphql-api.md#string) |                                                                                                    |             |
| **path**      |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **project**   |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **weight**    |         [Long](graphql-api.md#long) |                                                                                                    |             |

### BitbucketConfiguration

Extend interface implementation types from Artifact Storage

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **alternateUrls**              |                         \[[String](graphql-api.md#string)!]! | Alternative URLS that can be used to access this Bitbucket instance                                     |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **ssh**                        |          [SshConfiguration](graphql-api.md#sshconfiguration) |                                                                                                         |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |
| **isAuthorized**               |                           [Boolean](graphql-api.md#boolean)! | Whether the current user has an active OAUth authorization                                              |             |
| **tokens**                     |               \[[AccessToken](graphql-api.md#accesstoken)!]! | Active authorization tokens for Bitbucket                                                               |             |

### BitbucketRepository

| Field         |                            Argument | Type                                                                                               | Description |
| ------------- | ----------------------------------: | -------------------------------------------------------------------------------------------------- | ----------- |
| **branch**    |     [String](graphql-api.md#string) |                                                                                                    |             |
| **changeset** |     [String](graphql-api.md#string) |                                                                                                    |             |
| **ingested**  | [DateTime](graphql-api.md#datetime) | Available on repositoryIndex and organizations queries Example: `2021-05-13T11:56:29.818228-07:00` |             |
| **name**      |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **origin**    |     [String](graphql-api.md#string) |                                                                                                    |             |
| **path**      |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **project**   |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **weight**    |         [Long](graphql-api.md#long) |                                                                                                    |             |

### BranchCommitOptions

| Field          |                        Argument | Type | Description |
| -------------- | ------------------------------: | ---- | ----------- |
| **branchName** | [String](graphql-api.md#string) |      |             |

### CloseAction

| Field              |                                 Argument | Type                                                  | Description |
| ------------------ | ---------------------------------------: | ----------------------------------------------------- | ----------- |
| **createdAt**      |     [DateTime](graphql-api.md#datetime)! |                                                       |             |
| **pullRequestUrl** |         [String](graphql-api.md#string)! | Url of the pull request, used for determining the id. |             |
| **repository**     | [Repository](graphql-api.md#repository)! |                                                       |             |
| **state**          |   [TaskState](graphql-api.md#taskstate)! |                                                       |             |
| **stateMessage**   |          [String](graphql-api.md#string) |                                                       |             |
| **updatedAt**      |     [DateTime](graphql-api.md#datetime)! |                                                       |             |

### Column

| Field           |                         Argument | Type | Description |
| --------------- | -------------------------------: | ---- | ----------- |
| **description** | [String](graphql-api.md#string)! |      |             |
| **displayName** | [String](graphql-api.md#string)! |      |             |
| **name**        | [String](graphql-api.md#string)! |      |             |
| **type**        | [String](graphql-api.md#string)! |      |             |

### Commit

| Field                 |                                              Argument | Type                                                               | Description |
| --------------------- | ----------------------------------------------------: | ------------------------------------------------------------------ | ----------- |
| **commitType**        |              [CommitType](graphql-api.md#committype)! |                                                                    |             |
| **createdAt**         |                  [DateTime](graphql-api.md#datetime)! |                                                                    |             |
| **modified** ⚠️       |                  [DateTime](graphql-api.md#datetime)! | <p>⚠️ <strong>DEPRECATED</strong></p><p>Use updatedAt instead.</p> |             |
| **pullRequestStatus** | [PullRequestStatus](graphql-api.md#pullrequeststatus) |                                                                    |             |
| **repository**        |              [Repository](graphql-api.md#repository)! |                                                                    |             |
| **resultLink**        |                       [String](graphql-api.md#string) |                                                                    |             |
| **state**             |            [CommitState](graphql-api.md#commitstate)! |                                                                    |             |
| **stateMessage**      |                       [String](graphql-api.md#string) |                                                                    |             |
| **updatedAt**         |                  [DateTime](graphql-api.md#datetime)! |                                                                    |             |

### CommitConnection

| Field        |                                   Argument | Type | Description |
| ------------ | -----------------------------------------: | ---- | ----------- |
| **count**    |                  [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[CommitEdge](graphql-api.md#commitedge)] |      |             |
| **pageInfo** |        [PageInfo](graphql-api.md#pageinfo) |      |             |

### CommitEdge

| Field      |                         Argument | Type | Description |
| ---------- | -------------------------------: | ---- | ----------- |
| **cursor** |  [String](graphql-api.md#string) |      |             |
| **node**   | [Commit](graphql-api.md#commit)! |      |             |

### CommitJob

| Field                     |                                                                         Argument | Type | Description |
| ------------------------- | -------------------------------------------------------------------------------: | ---- | ----------- |
| **commits**               |                             [CommitConnection](graphql-api.md#commitconnection)! |      |             |
| after                     |                                                  [String](graphql-api.md#string) |      |             |
| filterBy                  |                      [CommitJobFilterInput](graphql-api.md#commitjobfilterinput) |      |             |
| first                     |                                                        [Int](graphql-api.md#int) |      |             |
| orderBy                   |                        [CommitJobOrderInput](graphql-api.md#commitjoborderinput) |      |             |
| **completed**             |                                                       [Int](graphql-api.md#int)! |      |             |
| **email**                 |                                                 [String](graphql-api.md#string)! |      |             |
| **excludedFiles**         |                                              \[[String](graphql-api.md#string)!] |      |             |
| **extendedMessage**       |                                                  [Base64](graphql-api.md#base64) |      |             |
| **id**                    |                                                         [ID](graphql-api.md#id)! |      |             |
| **message**               |                                                 [String](graphql-api.md#string)! |      |             |
| **options**               |                                   [CommitOptions](graphql-api.md#commitoptions)! |      |             |
| **organization**          |                                      [Organization](graphql-api.md#organization) |      |             |
| **pullRequestActionJobs** | [PullRequestActionJobConnection](graphql-api.md#pullrequestactionjobconnection)! |      |             |
| after                     |                                                  [String](graphql-api.md#string) |      |             |
| first                     |                                                        [Int](graphql-api.md#int) |      |             |
| type                      |                    [PullRequestActionType](graphql-api.md#pullrequestactiontype) |      |             |
| **recipeRunId**           |                                                         [ID](graphql-api.md#id)! |      |             |
| **started**               |                                             [DateTime](graphql-api.md#datetime)! |      |             |
| **state**                 |                                 [CommitJobState](graphql-api.md#commitjobstate)! |      |             |
| **summaryResults**        |                             [CommitJobSummary](graphql-api.md#commitjobsummary)! |      |             |

### CommitJobConnection

| Field        |                                         Argument | Type | Description |
| ------------ | -----------------------------------------------: | ---- | ----------- |
| **count**    |                        [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[CommitJobEdge](graphql-api.md#commitjobedge)] |      |             |
| **pageInfo** |              [PageInfo](graphql-api.md#pageinfo) |      |             |

### CommitJobEdge

| Field      |                               Argument | Type | Description |
| ---------- | -------------------------------------: | ---- | ----------- |
| **cursor** |        [String](graphql-api.md#string) |      |             |
| **node**   | [CommitJob](graphql-api.md#commitjob)! |      |             |

### CommitJobSummary

| Field               |                   Argument | Type | Description |
| ------------------- | -------------------------: | ---- | ----------- |
| **canceledCount**   | [Int](graphql-api.md#int)! |      |             |
| **count**           | [Int](graphql-api.md#int)! |      |             |
| **failedCount**     | [Int](graphql-api.md#int)! |      |             |
| **noChangeCount**   | [Int](graphql-api.md#int)! |      |             |
| **successfulCount** | [Int](graphql-api.md#int)! |      |             |

### CommitsReportDownloadTask

| Field            |                                                         Argument | Type | Description |
| ---------------- | ---------------------------------------------------------------: | ---- | ----------- |
| **fileSize**     |                                     [Long](graphql-api.md#long)! |      |             |
| **id**           |                                         [ID](graphql-api.md#id)! |      |             |
| **state**        | [CommitsReportTaskState](graphql-api.md#commitsreporttaskstate)! |      |             |
| **stateMessage** |                                  [String](graphql-api.md#string) |      |             |
| **url**          |                                  [String](graphql-api.md#string) |      |             |

### Contributor

| Field         |                         Argument | Type | Description |
| ------------- | -------------------------------: | ---- | ----------- |
| **email**     | [String](graphql-api.md#string)! |      |             |
| **lineCount** |       [Int](graphql-api.md#int)! |      |             |
| **name**      | [String](graphql-api.md#string)! |      |             |

### CustomRecipe

| Field           |                         Argument | Type | Description |
| --------------- | -------------------------------: | ---- | ----------- |
| **description** | [String](graphql-api.md#string)! |      |             |
| **id**          |         [ID](graphql-api.md#id)! |      |             |
| **name**        | [String](graphql-api.md#string)! |      |             |
| **yaml**        | [Base64](graphql-api.md#base64)! |      |             |

### Dashboard

| Field                     |                                                                      Argument | Type                                                    | Description |
| ------------------------- | ----------------------------------------------------------------------------: | ------------------------------------------------------- | ----------- |
| **organizationStats**     |                    \[[OrganizationStats](graphql-api.md#organizationstats)!]! | Contains statistics for this organization.              |             |
| **security**              |                           \[[SecurityResult](graphql-api.md#securityresult)!] | Security results for this organization.                 |             |
| **upgradesAndMigrations** | \[[UpgradesAndMigrationsResult](graphql-api.md#upgradesandmigrationsresult)!] | Available/recommended upgrades and migrations.          |             |
| **visualizations**        |                             \[[Visualization](graphql-api.md#visualization)!] | Recommended visualizations to run on this organization. |             |

### DataTable

| Field           |                             Argument | Type | Description |
| --------------- | -----------------------------------: | ---- | ----------- |
| **columns**     | \[[Column](graphql-api.md#column)!]! |      |             |
| **description** |     [String](graphql-api.md#string)! |      |             |
| **displayName** |     [String](graphql-api.md#string)! |      |             |
| **name**        |     [String](graphql-api.md#string)! |      |             |

### DataTableDownloadStats

| Field            |                     Argument | Type                                                                                                       | Description |
| ---------------- | ---------------------------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| **fileSize**     | [Long](graphql-api.md#long)! | <p>File size in bytes.</p><p>When status is PENDING, this is the size of the file built to this point.</p> |             |
| **repositories** |   [Int](graphql-api.md#int)! | The number of repositories that contributed data to this table                                             |             |

### DataTableDownloadTask

| Field            |                                                         Argument | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------------: | ---------------------------------------------------------- | ----------- |
| **dataTable**    |                           [DataTable](graphql-api.md#datatable)! |                                                            |             |
| **downloadUrl**  |                                  [String](graphql-api.md#string) | URL will be `null` until the download job is complete.     |             |
| **format**       |               [DataTableFormat](graphql-api.md#datatableformat)! |                                                            |             |
| **id**           |                                         [ID](graphql-api.md#id)! | Download task ID provided by `downloadDataTable` mutation. |             |
| **recipeRunId**  |                                 [String](graphql-api.md#string)! |                                                            |             |
| **state**        |           [DownloadTaskState](graphql-api.md#downloadtaskstate)! |                                                            |             |
| **stateMessage** |                                  [String](graphql-api.md#string) |                                                            |             |
| **stats**        | [DataTableDownloadStats](graphql-api.md#datatabledownloadstats)! |                                                            |             |

### Event

| Field           |                                 Argument | Type                                                                                                                          | Description |
| --------------- | ---------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **action**      |         [String](graphql-api.md#string)! | <p>The action that was performed</p><p>Example: <code>GET_RECIPE</code></p>                                                   |             |
| **actionType**  | [ActionType](graphql-api.md#actiontype)! | <p>The type of action that was performed</p><p>Example: <code>Read</code></p>                                                 |             |
| **description** |     [Markdown](graphql-api.md#markdown)! | <p>Extended description of the logged event</p><p>Example:</p><pre><code>Get a specific recipe and its details.
</code></pre> |             |
| **outcome**     |          [String](graphql-api.md#string) | <p>The outcome of the action</p><p>Generally be either: <code>Success</code> or <code>Failed</code></p>                       |             |
| **target**      |         [String](graphql-api.md#string)! | <p>The target of the event</p><p>Example: <code>recipes</code> or <code>recipe.runs</code></p>                                |             |
| **timestamp**   |     [DateTime](graphql-api.md#datetime)! | The time the event was logged                                                                                                 |             |
| **userId**      |         [String](graphql-api.md#string)! | Unique identifier for the user that triggered the event                                                                       |             |

### EventConnection

| Field        |                                   Argument | Type | Description |
| ------------ | -----------------------------------------: | ---- | ----------- |
| **count**    |                 [Int](graphql-api.md#int)! |      |             |
| **edges**    | \[[EventEdge](graphql-api.md#eventedge)!]! |      |             |
| **pageInfo** |               [Page](graphql-api.md#page)! |      |             |

### EventEdge

| Field      |                         Argument | Type | Description |
| ---------- | -------------------------------: | ---- | ----------- |
| **cursor** | [String](graphql-api.md#string)! |      |             |
| **node**   |   [Event](graphql-api.md#event)! |      |             |

### ForkCommitOptions

| Field                  |                           Argument | Type                                                                                                                       | Description |
| ---------------------- | ---------------------------------: | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **branchName**         |    [String](graphql-api.md#string) |                                                                                                                            |             |
| **organization**       |    [String](graphql-api.md#string) | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account. |             |
| **prefixOrganization** | [Boolean](graphql-api.md#boolean)! |                                                                                                                            |             |

### ForkPullRequestOptions

| Field                            |                           Argument | Type                                                                                                                       | Description |
| -------------------------------- | ---------------------------------: | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **branchName**                   |    [String](graphql-api.md#string) |                                                                                                                            |             |
| **canRecreateClosedPullRequest** | [Boolean](graphql-api.md#boolean)! |                                                                                                                            |             |
| **draft**                        | [Boolean](graphql-api.md#boolean)! |                                                                                                                            |             |
| **maintainerCanModify**          | [Boolean](graphql-api.md#boolean)! | GitHub only flag to allow maintainers to edit a pull request.                                                              |             |
| **organization**                 |    [String](graphql-api.md#string) | If set, the fork will be created in this organization. Otherwise, the fork will be created in the user's personal account. |             |
| **prefixOrganization**           | [Boolean](graphql-api.md#boolean)! |                                                                                                                            |             |
| **pullRequestBody**              |    [Base64](graphql-api.md#base64) |                                                                                                                            |             |
| **pullRequestTitle**             |    [String](graphql-api.md#string) | If unset, the commit message will be used as the pull request title.                                                       |             |

### GenericHttpToolConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |

### GitHubRepository

| Field            |                            Argument | Type                                                                                               | Description |
| ---------------- | ----------------------------------: | -------------------------------------------------------------------------------------------------- | ----------- |
| **branch**       |     [String](graphql-api.md#string) |                                                                                                    |             |
| **changeset**    |     [String](graphql-api.md#string) |                                                                                                    |             |
| **ingested**     | [DateTime](graphql-api.md#datetime) | Available on repositoryIndex and organizations queries Example: `2021-05-13T11:56:29.818228-07:00` |             |
| **name**         |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **organization** |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **origin**       |     [String](graphql-api.md#string) |                                                                                                    |             |
| **path**         |    [String](graphql-api.md#string)! |                                                                                                    |             |
| **weight**       |         [Long](graphql-api.md#long) |                                                                                                    |             |

### GitLabConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **oauth**                      |      [OAuthConfiguration](graphql-api.md#oauthconfiguration) |                                                                                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **ssh**                        |          [SshConfiguration](graphql-api.md#sshconfiguration) |                                                                                                         |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |
| **isAuthorized**               |                           [Boolean](graphql-api.md#boolean)! | Whether the current user has an active OAUth authorization                                              |             |
| **tokens**                     |               \[[AccessToken](graphql-api.md#accesstoken)!]! | Active authorization tokens for GitLab                                                                  |             |

### GitLabRepository

| Field                |                            Argument | Type                                                                                                                                                                                | Description |
| -------------------- | ----------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **branch** ⚠️        |     [String](graphql-api.md#string) | <p>⚠️ <strong>DEPRECATED</strong></p><p>No longer supported</p>                                                                                                                     |             |
| **changeset**        |     [String](graphql-api.md#string) |                                                                                                                                                                                     |             |
| **ingested**         | [DateTime](graphql-api.md#datetime) | Available on repositoryIndex and organizations queries Example: `2021-05-13T11:56:29.818228-07:00`                                                                                  |             |
| **name**             |    [String](graphql-api.md#string)! |                                                                                                                                                                                     |             |
| **organization** ⚠️  |    [String](graphql-api.md#string)! | <p>⚠️ <strong>DEPRECATED</strong></p><p>GitLab does not have a concept of an Organization, but rather groups and subgroups.</p>                                                     |             |
| **origin**           |     [String](graphql-api.md#string) |                                                                                                                                                                                     |             |
| **path**             |    [String](graphql-api.md#string)! |                                                                                                                                                                                     |             |
| **projectNamespace** |    [String](graphql-api.md#string)! | <p>GitLab's project structure is group/(subgroup/subgroup...)/repo.</p><p><code>projectNamespace</code> represents the concatenation of all groups (used to find the repo path)</p> |             |
| **weight**           |         [Long](graphql-api.md#long) |                                                                                                                                                                                     |             |

### GithubConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **allowableOrganizations**     |                         \[[String](graphql-api.md#string)!]! | A list of organizations that Moderne is permitted to fork repositories into                             |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **oauth**                      |      [OAuthConfiguration](graphql-api.md#oauthconfiguration) |                                                                                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **ssh**                        |          [SshConfiguration](graphql-api.md#sshconfiguration) |                                                                                                         |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |
| **isAuthorized**               |                           [Boolean](graphql-api.md#boolean)! | Whether the current user has an active OAUth authorization                                              |             |
| **tokens**                     |               \[[AccessToken](graphql-api.md#accesstoken)!]! | Active authorization tokens for GitHub                                                                  |             |

### GroupArtifactVersion

| Field                    |                         Argument | Type | Description |
| ------------------------ | -------------------------------: | ---- | ----------- |
| **artifactId**           | [String](graphql-api.md#string)! |      |             |
| **datedSnapshotVersion** |  [String](graphql-api.md#string) |      |             |
| **groupId**              | [String](graphql-api.md#string)! |      |             |
| **version**              | [String](graphql-api.md#string)! |      |             |

### JenkinsConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |

### Maintainer

| Field    |                         Argument | Type | Description |
| -------- | -------------------------------: | ---- | ----------- |
| **logo** |  [String](graphql-api.md#string) |      |             |
| **name** | [String](graphql-api.md#string)! |      |             |

### MavenConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **artifactStats**              |           \[[ArtifactStats](graphql-api.md#artifactstats)!]! | Maven-specific fields                                                                                   |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isArtifactSource**           |                           [Boolean](graphql-api.md#boolean)! |                                                                                                         |             |
| **isRecipeSource**             |                           [Boolean](graphql-api.md#boolean)! |                                                                                                         |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **localRepository**            |                                 [Path](graphql-api.md#path)! |                                                                                                         |             |
| **mavenResponseStatus**        |   [MavenResponseStatus](graphql-api.md#mavenresponsestatus)! | Attempt to connect to this maven repository and share the results.                                      |             |
| **releases**                   |                           [Boolean](graphql-api.md#boolean)! | Does this repository support releases?                                                                  |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **snapshots**                  |                           [Boolean](graphql-api.md#boolean)! | Does this repository support snapshots?                                                                 |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |

### MavenIndexProperty

| Field          |                            Argument | Type | Description |
| -------------- | ----------------------------------: | ---- | ----------- |
| **properties** | \[[String](graphql-api.md#string)!] |      |             |
| **url**        |    [String](graphql-api.md#string)! |      |             |

### MavenResponseStatus

| Field                  |                            Argument | Type                                                                                             | Description |
| ---------------------- | ----------------------------------: | ------------------------------------------------------------------------------------------------ | ----------- |
| **responseCode**       |          [Int](graphql-api.md#int)! | HTTP response code when calling this Maven repository.                                           |             |
| **supported**          |  [Boolean](graphql-api.md#boolean)! | If this Maven configuration will be used for recipe loading and during recipe running in worker. |             |
| **unsupportedReasons** | \[[String](graphql-api.md#string)!] | If not supported by recipe loading/running, this field will contain the reason(s) why.           |             |

### MergeAction

| Field              |                                     Argument | Type                                                  | Description |
| ------------------ | -------------------------------------------: | ----------------------------------------------------- | ----------- |
| **createdAt**      |         [DateTime](graphql-api.md#datetime)! |                                                       |             |
| **options**        | [MergeOptions](graphql-api.md#mergeoptions)! |                                                       |             |
| **pullRequestUrl** |             [String](graphql-api.md#string)! | Url of the pull request, used for determining the id. |             |
| **repository**     |     [Repository](graphql-api.md#repository)! |                                                       |             |
| **state**          |       [TaskState](graphql-api.md#taskstate)! |                                                       |             |
| **stateMessage**   |              [String](graphql-api.md#string) |                                                       |             |
| **updatedAt**      |         [DateTime](graphql-api.md#datetime)! |                                                       |             |

### MergeOptions

| Field                  |                                   Argument | Type | Description |
| ---------------------- | -----------------------------------------: | ---- | ----------- |
| **deleteSourceBranch** |         [Boolean](graphql-api.md#boolean)! |      |             |
| **mergeMethod**        | [MergeMethod](graphql-api.md#mergemethod)! |      |             |

### OAuthConfiguration

| Field                   |                           Argument | Type                                                                                                                         | Description |
| ----------------------- | ---------------------------------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **clientId**            |   [String](graphql-api.md#string)! | The OAuth client ID to use when connecting to this tool.                                                                     |             |
| **includePrivateRepos** | [Boolean](graphql-api.md#boolean)! | If `true`, Moderne may add additional OAuth scopes to the authorization request to allow for access to private repositories. |             |

### Option

| Field           |                           Argument | Type | Description |
| --------------- | ---------------------------------: | ---- | ----------- |
| **name**        |   [String](graphql-api.md#string)! |      |             |
| **value**       |    [Object](graphql-api.md#object) |      |             |
| **description** |   [String](graphql-api.md#string)! |      |             |
| **displayName** |   [String](graphql-api.md#string)! |      |             |
| **example**     |    [String](graphql-api.md#string) |      |             |
| **required**    | [Boolean](graphql-api.md#boolean)! |      |             |
| **type**        |   [String](graphql-api.md#string)! |      |             |
| **valid**       | \[[String](graphql-api.md#string)] |      |             |

### Organization

federated from recipe execution

| Field                  |                                                     Argument | Type                                                                                                                                                                                                                                                                       | Description |
| ---------------------- | -----------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **dashboard**          |                        [Dashboard](graphql-api.md#dashboard) | <p>Get current dashboard results for this organization. Requires an organizations service with at least one section configured, and requires the last dashboard run to be completed.</p><p>NOTE: This is an in-development feature and the data is currently not real.</p> |             |
| **id**                 |                                     [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                                            |             |
| **commitOptions**      |             \[[CommitOption](graphql-api.md#commitoption)!]! |                                                                                                                                                                                                                                                                            |             |
| **description**        |                              [String](graphql-api.md#string) | Used by user organizations                                                                                                                                                                                                                                                 |             |
| **isUserOrganization** |                           [Boolean](graphql-api.md#boolean)! |                                                                                                                                                                                                                                                                            |             |
| **name**               |                             [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                                            |             |
| **parent**             |                  [Organization](graphql-api.md#organization) |                                                                                                                                                                                                                                                                            |             |
| **repositories**       |                 \[[Repository](graphql-api.md#repository)!]! | providing these fields for backwards compatibility with exiting Service/Store code that depends on them                                                                                                                                                                    |             |
| **repositoriesPages**  | [RepositoryConnection](graphql-api.md#repositoryconnection)! |                                                                                                                                                                                                                                                                            |             |
| after                  |                              [String](graphql-api.md#string) |                                                                                                                                                                                                                                                                            |             |
| filter                 |          [RepositoryFilter](graphql-api.md#repositoryfilter) |                                                                                                                                                                                                                                                                            |             |
| first                  |                                    [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                                            |             |
| **repositoryCount**    |                                   [Int](graphql-api.md#int)! |                                                                                                                                                                                                                                                                            |             |

### OrganizationConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |

### OrganizationStats

| Field     |                         Argument | Type | Description |
| --------- | -------------------------------: | ---- | ----------- |
| **name**  | [String](graphql-api.md#string)! |      |             |
| **value** |       [Int](graphql-api.md#int)! |      |             |

### OrganizationSummary

| Field    |                         Argument | Type | Description |
| -------- | -------------------------------: | ---- | ----------- |
| **id**   |         [ID](graphql-api.md#id)! |      |             |
| **name** | [String](graphql-api.md#string)! |      |             |

### OrphanedRepository

A repository which originates from a source control management tool for which there is no agent connected.

| Field         |                            Argument | Type | Description |
| ------------- | ----------------------------------: | ---- | ----------- |
| **branch**    |     [String](graphql-api.md#string) |      |             |
| **changeset** |     [String](graphql-api.md#string) |      |             |
| **ingested**  | [DateTime](graphql-api.md#datetime) |      |             |
| **origin**    |     [String](graphql-api.md#string) |      |             |
| **path**      |    [String](graphql-api.md#string)! |      |             |
| **weight**    |         [Long](graphql-api.md#long) |      |             |

### Page

| Field           |                           Argument | Type | Description |
| --------------- | ---------------------------------: | ---- | ----------- |
| **endCursor**   |   [String](graphql-api.md#string)! |      |             |
| **hasNextPage** | [Boolean](graphql-api.md#boolean)! |      |             |

### PageInfo

Pagination Type - Generic

| Field               |                           Argument | Type | Description |
| ------------------- | ---------------------------------: | ---- | ----------- |
| **endCursor**       |    [String](graphql-api.md#string) |      |             |
| **hasNextPage**     | [Boolean](graphql-api.md#boolean)! |      |             |
| **hasPreviousPage** | [Boolean](graphql-api.md#boolean)! |      |             |
| **startCursor**     |    [String](graphql-api.md#string) |      |             |

### PullRequestActionConnection

| Field        |                                                          Argument | Type | Description |
| ------------ | ----------------------------------------------------------------: | ---- | ----------- |
| **count**    |                                         [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[PullRequestActionEdge](graphql-api.md#pullrequestactionedge)!] |      |             |
| **pageInfo** |                               [PageInfo](graphql-api.md#pageinfo) |      |             |

### PullRequestActionEdge

| Field      |                                               Argument | Type | Description |
| ---------- | -----------------------------------------------------: | ---- | ----------- |
| **cursor** |                        [String](graphql-api.md#string) |      |             |
| **node**   | [PullRequestAction](graphql-api.md#pullrequestaction)! |      |             |

### PullRequestActionJob

| Field              |                                                                          Argument | Type | Description |
| ------------------ | --------------------------------------------------------------------------------: | ---- | ----------- |
| **commitJobId**    |                                                          [ID](graphql-api.md#id)! |      |             |
| **completed**      |                                                        [Int](graphql-api.md#int)! |      |             |
| **createdAt**      |                                              [DateTime](graphql-api.md#datetime)! |      |             |
| **email**          |                                                  [String](graphql-api.md#string)! |      |             |
| **id**             |                                                          [ID](graphql-api.md#id)! |      |             |
| **state**          |                                              [JobState](graphql-api.md#jobstate)! |      |             |
| **summaryResults** |        [PullRequestActionJobSummary](graphql-api.md#pullrequestactionjobsummary)! |      |             |
| **tasks**          |         [PullRequestActionConnection](graphql-api.md#pullrequestactionconnection) |      |             |
| after              |                                                   [String](graphql-api.md#string) |      |             |
| filterBy           | [PullRequestActionJobFilterInput](graphql-api.md#pullrequestactionjobfilterinput) |      |             |
| first              |                                                         [Int](graphql-api.md#int) |      |             |
| orderBy            |   [PullRequestActionJobOrderInput](graphql-api.md#pullrequestactionjoborderinput) |      |             |
| **type**           |                    [PullRequestActionType](graphql-api.md#pullrequestactiontype)! |      |             |

### PullRequestActionJobConnection

| Field        |                                                                Argument | Type | Description |
| ------------ | ----------------------------------------------------------------------: | ---- | ----------- |
| **count**    |                                               [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[PullRequestActionJobEdge](graphql-api.md#pullrequestactionjobedge)!] |      |             |
| **pageInfo** |                                     [PageInfo](graphql-api.md#pageinfo) |      |             |

### PullRequestActionJobEdge

| Field      |                                                     Argument | Type | Description |
| ---------- | -----------------------------------------------------------: | ---- | ----------- |
| **cursor** |                              [String](graphql-api.md#string) |      |             |
| **node**   | [PullRequestActionJob](graphql-api.md#pullrequestactionjob)! |      |             |

### PullRequestActionJobSummary

| Field               |                   Argument | Type | Description |
| ------------------- | -------------------------: | ---- | ----------- |
| **canceledCount**   | [Int](graphql-api.md#int)! |      |             |
| **count**           | [Int](graphql-api.md#int)! |      |             |
| **failedCount**     | [Int](graphql-api.md#int)! |      |             |
| **successfulCount** | [Int](graphql-api.md#int)! |      |             |

### PullRequestOptions

| Field                            |                                  Argument | Type                                                                 | Description |
| -------------------------------- | ----------------------------------------: | -------------------------------------------------------------------- | ----------- |
| **autoMergeMethod**              | [MergeMethod](graphql-api.md#mergemethod) |                                                                      |             |
| **branchName**                   |           [String](graphql-api.md#string) |                                                                      |             |
| **canRecreateClosedPullRequest** |        [Boolean](graphql-api.md#boolean)! |                                                                      |             |
| **draft**                        |        [Boolean](graphql-api.md#boolean)! |                                                                      |             |
| **pullRequestBody**              |           [Base64](graphql-api.md#base64) |                                                                      |             |
| **pullRequestTitle**             |           [String](graphql-api.md#string) | If unset, the commit message will be used as the pull request title. |             |

### PullRequestStatistics

| Field      |                                             Argument | Type | Description |
| ---------- | ---------------------------------------------------: | ---- | ----------- |
| **date**   |                 [DateTime](graphql-api.md#datetime)! |      |             |
| **id**     |                             [ID](graphql-api.md#id)! |      |             |
| **origin** |                      [String](graphql-api.md#string) |      |             |
| **type**   | [PullRequestState](graphql-api.md#pullrequeststate)! |      |             |

### PullRequestStatus

| Field                    |                                             Argument | Type                                                                                          | Description |
| ------------------------ | ---------------------------------------------------: | --------------------------------------------------------------------------------------------- | ----------- |
| **ciState**              |                    [CiState](graphql-api.md#cistate) |                                                                                               |             |
| **mergeable**            |               [Mergeable](graphql-api.md#mergeable)! | Can this pull request be merged or not                                                        |             |
| **otherBlockingReasons** |                 \[[String](graphql-api.md#string)!]! | Additional status flags that block this pull request. Can depend on the SCM service provider. |             |
| **review**               |         [ReviewStatus](graphql-api.md#reviewstatus)! |                                                                                               |             |
| **state**                | [PullRequestState](graphql-api.md#pullrequeststate)! |                                                                                               |             |

### PypiConfiguration

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Instances of the Moderne Agent where this tool has been configured                                      |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! | Shared fields                                                                                           |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |

### Recipe

| Field              |                                           Argument | Type                                                                                  | Description |
| ------------------ | -------------------------------------------------: | ------------------------------------------------------------------------------------- | ----------- |
| **id**             |                           [ID](graphql-api.md#id)! | Example: `org.openrewrite.java.testing.junit5.IgnoreToDisabled`                       |             |
| **options**        |               \[[Option](graphql-api.md#option)!]! |                                                                                       |             |
| **contributors**   |      \[[Contributor](graphql-api.md#contributor)!] | Contributors to the recipe based on git                                               |             |
| **dataTables**     |         \[[DataTable](graphql-api.md#datatable)!]! |                                                                                       |             |
| **description**    |                [Markdown](graphql-api.md#markdown) |                                                                                       |             |
| **maintainers**    |        \[[Maintainer](graphql-api.md#maintainer)!] | Curated list of verified maintainers of the recipe                                    |             |
| **name**           |               [Markdown](graphql-api.md#markdown)! |                                                                                       |             |
| **permalink**      |                   [String](graphql-api.md#string)! | Link to run the recipe through the Moderne UI.                                        |             |
| **recipeArtifact** |    [RecipeArtifact](graphql-api.md#recipeartifact) |                                                                                       |             |
| **recipeList**     |               \[[Recipe](graphql-api.md#recipe)!]! |                                                                                       |             |
| **sourceUrl**      |                    [String](graphql-api.md#string) | <p>URL to the source file<br>Currently only OpenRewrite recipes have a source URL</p> |             |
| **tags**           |               \[[String](graphql-api.md#string)!]! |                                                                                       |             |
| **timeSavings**    |                [Duration](graphql-api.md#duration) |                                                                                       |             |
| **totalRecipes**   |                         [Int](graphql-api.md#int)! |                                                                                       |             |
| **yaml**           |                    [Base64](graphql-api.md#base64) |                                                                                       |             |
| **visualizations** | \[[Visualization](graphql-api.md#visualization)!]! |                                                                                       |             |

### RecipeArtifact

| Field                            |                                                         Argument | Type                                                                                                                      | Description |
| -------------------------------- | ---------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **artifactId**                   |                                 [String](graphql-api.md#string)! |                                                                                                                           |             |
| **datedSnapshotVersion**         |                                  [String](graphql-api.md#string) |                                                                                                                           |             |
| **groupId**                      |                                 [String](graphql-api.md#string)! |                                                                                                                           |             |
| **recipeCount**                  |                                        [Int](graphql-api.md#int) |                                                                                                                           |             |
| **repositoryUrl**                |                                  [String](graphql-api.md#string) |                                                                                                                           |             |
| **requestedVersion**             |                                 [String](graphql-api.md#string)! |                                                                                                                           |             |
| **snapshotTime**                 |                              [DateTime](graphql-api.md#datetime) | The time from datedSnapshotVersion extracted into a DateTime for human-readable presentation in time zones other than UTC |             |
| **transitiveDependencyVersions** | \[[GroupArtifactVersion](graphql-api.md#groupartifactversion)!]! |                                                                                                                           |             |
| **version**                      |                                 [String](graphql-api.md#string)! |                                                                                                                           |             |

### RecipeCategory

| Field                |                                                                 Argument | Type                                                                         | Description |
| -------------------- | -----------------------------------------------------------------------: | ---------------------------------------------------------------------------- | ----------- |
| **breadcrumbs**      | \[[RecipeCategoryBreadcrumb](graphql-api.md#recipecategorybreadcrumb)!]! |                                                                              |             |
| **categories**       |                     \[[RecipeCategory](graphql-api.md#recipecategory)!]! | Categories are sorted alphabetically by name.                                |             |
| **description**      |                                      [Markdown](graphql-api.md#markdown) |                                                                              |             |
| **id**               |                                                 [ID](graphql-api.md#id)! |                                                                              |             |
| **name**             |                                     [Markdown](graphql-api.md#markdown)! |                                                                              |             |
| **recipes**          |                                     \[[Recipe](graphql-api.md#recipe)!]! | Any given category will have either recipes or sub-categories, but not both. |             |
| **tags**             |                                     \[[String](graphql-api.md#string)!]! |                                                                              |             |
| **totalRecipeCount** |                                               [Int](graphql-api.md#int)! |                                                                              |             |

### RecipeCategoryBreadcrumb

| Field    |                         Argument | Type | Description |
| -------- | -------------------------------: | ---- | ----------- |
| **id**   |         [ID](graphql-api.md#id)! |      |             |
| **name** | [String](graphql-api.md#string)! |      |             |

### RecipeDeploymentResult

| Field            |                                                       Argument | Type                                                              | Description |
| ---------------- | -------------------------------------------------------------: | ----------------------------------------------------------------- | ----------- |
| **artifact**     |                [RecipeArtifact](graphql-api.md#recipeartifact) | Will be set if and only if `state` is `FINISHED`.                 |             |
| **canDeploy**    |                              [Boolean](graphql-api.md#boolean) |                                                                   |             |
| **duration**     |                            [Duration](graphql-api.md#duration) |                                                                   |             |
| **id**           |                                       [ID](graphql-api.md#id)! |                                                                   |             |
| **start**        |                            [DateTime](graphql-api.md#datetime) |                                                                   |             |
| **state**        | [RecipeDeploymentState](graphql-api.md#recipedeploymentstate)! |                                                                   |             |
| **stateMessage** |                                [String](graphql-api.md#string) |                                                                   |             |
| **tenantDomain** |                                [String](graphql-api.md#string) |                                                                   |             |
| **trace**        |                            \[[String](graphql-api.md#string)!] | Trace information about how recipe artifact resolution proceeded. |             |

### RecipeRun

| Field                   |                                                                 Argument | Type                                                                                                                             | Description |
| ----------------------- | -----------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **email**               |                                          [String](graphql-api.md#string) |                                                                                                                                  |             |
| **end**                 |                                      [DateTime](graphql-api.md#datetime) |                                                                                                                                  |             |
| **id**                  |                                                 [ID](graphql-api.md#id)! |                                                                                                                                  |             |
| **organization**        |                              [Organization](graphql-api.md#organization) |                                                                                                                                  |             |
| **organizationId** ⚠️   |                                                  [ID](graphql-api.md#id) | <p>The id of the organization the recipe was ran under.</p><p>⚠️ <strong>DEPRECATED</strong></p><p>Use organization instead.</p> |             |
| **priority**            |                   [RecipeRunPriority](graphql-api.md#reciperunpriority)! |                                                                                                                                  |             |
| **recipe**              |                                          [Recipe](graphql-api.md#recipe) | The recipe used for this run. If this is null the recipe is no longer loaded.                                                    |             |
| **start**               |                                     [DateTime](graphql-api.md#datetime)! |                                                                                                                                  |             |
| **state**               |                         [RecipeRunState](graphql-api.md#reciperunstate)! |                                                                                                                                  |             |
| **summaryResultsPages** | [RecipeRunSummaryConnection](graphql-api.md#reciperunsummaryconnection)! |                                                                                                                                  |             |
| after                   |                                          [String](graphql-api.md#string) |                                                                                                                                  |             |
| before                  |                                          [String](graphql-api.md#string) |                                                                                                                                  |             |
| filterBy                |    [SummaryResultsFilterInput](graphql-api.md#summaryresultsfilterinput) |                                                                                                                                  |             |
| first                   |                                                [Int](graphql-api.md#int) |                                                                                                                                  |             |
| last                    |                                                [Int](graphql-api.md#int) |                                                                                                                                  |             |
| orderBy                 |      [SummaryResultsOrderInput](graphql-api.md#summaryresultsorderinput) |                                                                                                                                  |             |
| **totals**              |                       [RecipeRunTotals](graphql-api.md#reciperuntotals)! |                                                                                                                                  |             |
| **user**                |                                         [String](graphql-api.md#string)! |                                                                                                                                  |             |
| **commitJobs**          |               [CommitJobConnection](graphql-api.md#commitjobconnection)! |                                                                                                                                  |             |
| after                   |                                          [String](graphql-api.md#string) |                                                                                                                                  |             |
| first                   |                                                [Int](graphql-api.md#int) |                                                                                                                                  |             |
| **visualizationRuns**   | [VisualizationRunConnection](graphql-api.md#visualizationrunconnection)! |                                                                                                                                  |             |
| after                   |                                          [String](graphql-api.md#string) |                                                                                                                                  |             |
| before                  |                                          [String](graphql-api.md#string) |                                                                                                                                  |             |
| filter                  |          [VisualizationRunFilter](graphql-api.md#visualizationrunfilter) |                                                                                                                                  |             |
| first                   |                                                [Int](graphql-api.md#int) |                                                                                                                                  |             |
| last                    |                                                [Int](graphql-api.md#int) |                                                                                                                                  |             |
| sortOrder               |                                    [SortOrder](graphql-api.md#sortorder) |                                                                                                                                  |             |
| visualizationId         |                                                  [ID](graphql-api.md#id) |                                                                                                                                  |             |

### RecipeRunHistory

| Field         |                               Argument | Type                                                               | Description |
| ------------- | -------------------------------------: | ------------------------------------------------------------------ | ----------- |
| **end**       |    [DateTime](graphql-api.md#datetime) |                                                                    |             |
| **recipe** ⚠️ |       [Recipe](graphql-api.md#recipe)! | <p>⚠️ <strong>DEPRECATED</strong></p><p>Use recipeRun instead.</p> |             |
| **recipeRun** | [RecipeRun](graphql-api.md#reciperun)! |                                                                    |             |
| **runId**     |               [ID](graphql-api.md#id)! |                                                                    |             |
| **start**     |   [DateTime](graphql-api.md#datetime)! |                                                                    |             |

### RecipeRunHistoryConnection

Pagination Types - Recipe Run History

| Field        |                                                       Argument | Type | Description |
| ------------ | -------------------------------------------------------------: | ---- | ----------- |
| **count**    |                                      [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[RecipeRunHistoryEdge](graphql-api.md#reciperunhistoryedge)] |      |             |
| **pageInfo** |                            [PageInfo](graphql-api.md#pageinfo) |      |             |

### RecipeRunHistoryEdge

| Field      |                                            Argument | Type | Description |
| ---------- | --------------------------------------------------: | ---- | ----------- |
| **cursor** |                     [String](graphql-api.md#string) |      |             |
| **node**   | [RecipeRunHistory](graphql-api.md#reciperunhistory) |      |             |

### RecipeRunPerformance

| Field                    |                            Argument | Type | Description |
| ------------------------ | ----------------------------------: | ---- | ----------- |
| **astLoading**           | [Duration](graphql-api.md#duration) |      |             |
| **dependencyResolution** | [Duration](graphql-api.md#duration) |      |             |
| **recipeRun**            | [Duration](graphql-api.md#duration) |      |             |

### RecipeRunReportDownloadTask

| Field            |                                               Argument | Type | Description |
| ---------------- | -----------------------------------------------------: | ---- | ----------- |
| **fileSize**     |                           [Long](graphql-api.md#long)! |      |             |
| **id**           |                               [ID](graphql-api.md#id)! |      |             |
| **state**        | [DownloadTaskState](graphql-api.md#downloadtaskstate)! |      |             |
| **stateMessage** |                        [String](graphql-api.md#string) |      |             |
| **url**          |                        [String](graphql-api.md#string) |      |             |

### RecipeRunSummary

| Field               |                                                                  Argument | Type                                                                                                                   | Description |
| ------------------- | ------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| **commit**          |               [RepositoryProvenance](graphql-api.md#repositoryprovenance) |                                                                                                                        |             |
| **dataTables**      |                                      \[[String](graphql-api.md#string)!]! | Data tables produced by a recipe for this repository                                                                   |             |
| **debugMarkers**    |                                                [Int](graphql-api.md#int)! | Total number of debug markers (not committable).                                                                       |             |
| **errorMarkers**    |                                                [Int](graphql-api.md#int)! | Total number of error markers (not committable).                                                                       |             |
| **errorReason**     | [RecipeRunSummaryErrorReason](graphql-api.md#reciperunsummaryerrorreason) |                                                                                                                        |             |
| **infoMarkers**     |                                                [Int](graphql-api.md#int)! | Total number of information markers (not committable).                                                                 |             |
| **lastUpdated**     |                                      [DateTime](graphql-api.md#datetime)! |                                                                                                                        |             |
| **organizationId**  |                                                   [ID](graphql-api.md#id) | The id of the organization the recipe was ran under.                                                                   |             |
| **performance**     |               [RecipeRunPerformance](graphql-api.md#reciperunperformance) |                                                                                                                        |             |
| **queuePosition**   |                                                 [Int](graphql-api.md#int) | Position in the worker queue or null if not queued.                                                                    |             |
| **repository**      |                                  [Repository](graphql-api.md#repository)! |                                                                                                                        |             |
| **runId**           |                                                  [ID](graphql-api.md#id)! |                                                                                                                        |             |
| **state**           |            [RecipeRunSummaryState](graphql-api.md#reciperunsummarystate)! |                                                                                                                        |             |
| **stateMessage**    |                                           [String](graphql-api.md#string) |                                                                                                                        |             |
| **timeSavings**     |                                       [Duration](graphql-api.md#duration) | Estimated time savings if each occurrence of a recipe was applied.                                                     |             |
| **totalChanged**    |                                                [Int](graphql-api.md#int)! | Total number of changes that would be visible in a patch or could be committed to the repository.                      |             |
| **totalResults**    |                                                [Int](graphql-api.md#int)! | Total number of markers in a file. Search markers are not visible in a patch or cannot be committed to the repository. |             |
| **totalSearched**   |                                                [Int](graphql-api.md#int)! |                                                                                                                        |             |
| **validationState** |       [RecipeRunValidationState](graphql-api.md#reciperunvalidationstate) |                                                                                                                        |             |
| **validationUrl**   |                                           [String](graphql-api.md#string) |                                                                                                                        |             |
| **warningMarkers**  |                                                [Int](graphql-api.md#int)! | Total number of warning markers (not committable).                                                                     |             |
| **worker**          |                                           [String](graphql-api.md#string) |                                                                                                                        |             |

### RecipeRunSummaryConnection

Pagination Type - Recipe Run Summary

| Field        |                                                       Argument | Type | Description |
| ------------ | -------------------------------------------------------------: | ---- | ----------- |
| **count**    |                                      [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[RecipeRunSummaryEdge](graphql-api.md#reciperunsummaryedge)] |      |             |
| **pageInfo** |                            [PageInfo](graphql-api.md#pageinfo) |      |             |

### RecipeRunSummaryEdge

| Field      |                                            Argument | Type | Description |
| ---------- | --------------------------------------------------: | ---- | ----------- |
| **cursor** |                     [String](graphql-api.md#string) |      |             |
| **node**   | [RecipeRunSummary](graphql-api.md#reciperunsummary) |      |             |

### RecipeRunTotals

| Field                              |                             Argument | Type                                                                                                                                                     | Description |
| ---------------------------------- | -----------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **dataTables**                     | \[[String](graphql-api.md#string)!]! | Unique data table names produced by all repositories                                                                                                     |             |
| **totalDebugMarkers**              |           [Int](graphql-api.md#int)! | Total number of debug markers (not committable).                                                                                                         |             |
| **totalErrorMarkers**              |           [Int](graphql-api.md#int)! | Total number of error markers (not committable).                                                                                                         |             |
| **totalFilesChanged**              |           [Int](graphql-api.md#int)! | Total number of changes that would be visible in a patch or could be committed to the repository.                                                        |             |
| **totalFilesResults**              |           [Int](graphql-api.md#int)! | Total number of files with markers                                                                                                                       |             |
| **totalFilesSearched**             |           [Int](graphql-api.md#int)! | Total number of files searched across all repositories in the recipe run.                                                                                |             |
| **totalInfoMarkers**               |           [Int](graphql-api.md#int)! | Total number of information markers (not committable).                                                                                                   |             |
| **totalRepositoriesInProgress**    |           [Int](graphql-api.md#int)! | Total number of repositories still running or yet to be run.                                                                                             |             |
| **totalRepositoriesSuccessful**    |           [Int](graphql-api.md#int)! | Total number of repositories with markers.                                                                                                               |             |
| **totalRepositoriesWithErrors**    |           [Int](graphql-api.md#int)! | Total number of repositories with errors from the recipe run.                                                                                            |             |
| **totalRepositoriesWithNoChanges** |           [Int](graphql-api.md#int)! | Total number of repositories with no markers.                                                                                                            |             |
| **totalRepositoriesWithResults**   |           [Int](graphql-api.md#int)! | <p>Total number of repositories with results.</p><p>Results may or may not be visible in patches or committed to the repository.</p>                     |             |
| **totalResults**                   |           [Int](graphql-api.md#int)! | <p>Total number of markers across all files.</p><p>Markers are not changes that would be visible in a patch or could be committed to the repository.</p> |             |
| **totalTimeSavings**               |  [Duration](graphql-api.md#duration) | Estimated time savings if each occurrence of a recipe was applied.                                                                                       |             |
| **totalWarningMarkers**            |           [Int](graphql-api.md#int)! | Total number of warning markers (not committable).                                                                                                       |             |

### RecipeSearchConnection

Pagination Types - Search Recipes

| Field        |                                               Argument | Type | Description |
| ------------ | -----------------------------------------------------: | ---- | ----------- |
| **count**    |                              [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[RecipeSearchEdge](graphql-api.md#recipesearchedge)] |      |             |
| **pageInfo** |                    [PageInfo](graphql-api.md#pageinfo) |      |             |

### RecipeSearchEdge

| Field      |                        Argument | Type | Description |
| ---------- | ------------------------------: | ---- | ----------- |
| **cursor** | [String](graphql-api.md#string) |      |             |
| **node**   | [Recipe](graphql-api.md#recipe) |      |             |

### RepositoryConnection

| Field        |                                           Argument | Type | Description |
| ------------ | -------------------------------------------------: | ---- | ----------- |
| **count**    |                          [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[RepositoryEdge](graphql-api.md#repositoryedge)] |      |             |
| **pageInfo** |                [PageInfo](graphql-api.md#pageinfo) |      |             |

### RepositoryEdge

| Field      |                                Argument | Type | Description |
| ---------- | --------------------------------------: | ---- | ----------- |
| **cursor** |         [String](graphql-api.md#string) |      |             |
| **node**   | [Repository](graphql-api.md#repository) |      |             |

### RepositoryGroup

| Field            |                                    Argument | Type | Description |
| ---------------- | ------------------------------------------: | ---- | ----------- |
| **description**  |             [String](graphql-api.md#string) |      |             |
| **name**         |            [String](graphql-api.md#string)! |      |             |
| **repositories** | \[[Repository](graphql-api.md#repository)!] |      |             |

### RepositoryProvenance

| Field         |                        Argument | Type    | Description |
| ------------- | ------------------------------: | ------- | ----------- |
| **branch**    | [String](graphql-api.md#string) |         |             |
| **changeset** | [String](graphql-api.md#string) | Git SHA |             |

### ReviewStatus

| Field              |                                         Argument | Type                       | Description |
| ------------------ | -----------------------------------------------: | -------------------------- | ----------- |
| **approvedBy**     |              \[[String](graphql-api.md#string)!] |                            |             |
| **reviewDecision** | [ReviewDecision](graphql-api.md#reviewdecision)! | sub data fetcher if needed |             |

### SecurityResult

| Field                   |                             Argument | Type                                                                                   | Description |
| ----------------------- | -----------------------------------: | -------------------------------------------------------------------------------------- | ----------- |
| **filesChanged**        |           [Int](graphql-api.md#int)! | Total number of files changed across all repositories in this recipe run.              |             |
| **occurrences**         |           [Int](graphql-api.md#int)! | Total total number of changes across all repositories in this recipe run.              |             |
| **recipe** ⚠️           |     [Recipe](graphql-api.md#recipe)! | <p>⚠️ <strong>DEPRECATED</strong></p><p>No longer supported</p>                        |             |
| **recipes**             | \[[Recipe](graphql-api.md#recipe)!]! |                                                                                        |             |
| **repositoriesChanged** |           [Int](graphql-api.md#int)! | Number of repositories with results.                                                   |             |
| **riskScore**           |           [Int](graphql-api.md#int)! | An indicator for the risk mitigated by this recipe                                     |             |
| **timeSavings**         | [Duration](graphql-api.md#duration)! | Total amount of time that would be saved by committing the changes in the recipes run. |             |
| **totalRepositories**   |           [Int](graphql-api.md#int)! | Number of repositories in this organization at the time this recipe was run.           |             |
| **updatedAt**           |  [DateTime](graphql-api.md#datetime) | The time at which this recipe last ran                                                 |             |

### ServiceStatistics

| Field                   |                   Argument | Type                                                  | Description |
| ----------------------- | -------------------------: | ----------------------------------------------------- | ----------- |
| **recipeCount**         | [Int](graphql-api.md#int)! | Total number of recipes in the tenant                 |             |
| **repositoryCount**     | [Int](graphql-api.md#int)! | Total number of repositories in the tenant            |             |
| **userRepositoryCount** | [Int](graphql-api.md#int)! | Total number of repositories the calling user can see |             |

### SshConfiguration

| Field    |                  Argument | Type | Description |
| -------- | ------------------------: | ---- | ----------- |
| **port** | [Int](graphql-api.md#int) |      |             |

### ToolConnectivity

| Field              |                                                         Argument | Type                                                           | Description |
| ------------------ | ---------------------------------------------------------------: | -------------------------------------------------------------- | ----------- |
| **agentId**        |                                         [ID](graphql-api.md#id)! |                                                                |             |
| **isConnected** ⚠️ |                               [Boolean](graphql-api.md#boolean)! | <p>⚠️ <strong>DEPRECATED</strong></p><p>Use status instead</p> |             |
| **message** ⚠️     |                                  [String](graphql-api.md#string) | <p>⚠️ <strong>DEPRECATED</strong></p><p>Use status instead</p> |             |
| **status**         | [ToolConnectivityStatus](graphql-api.md#toolconnectivitystatus)! |                                                                |             |

### UpgradesAndMigrationsResult

| Field                   |                             Argument | Type                                                                                   | Description |
| ----------------------- | -----------------------------------: | -------------------------------------------------------------------------------------- | ----------- |
| **filesChanged**        |           [Int](graphql-api.md#int)! | Total number of files changed across all repositories in this recipe run.              |             |
| **occurrences**         |           [Int](graphql-api.md#int)! | Total total number of changes across all repositories in this recipe run.              |             |
| **recipe** ⚠️           |     [Recipe](graphql-api.md#recipe)! | <p>⚠️ <strong>DEPRECATED</strong></p><p>No longer supported</p>                        |             |
| **recipes**             | \[[Recipe](graphql-api.md#recipe)!]! |                                                                                        |             |
| **repositoriesChanged** |           [Int](graphql-api.md#int)! | Number of repositories with results.                                                   |             |
| **timeSavings**         | [Duration](graphql-api.md#duration)! | Total amount of time that would be saved by committing the changes in the recipes run. |             |
| **totalRepositories**   |           [Int](graphql-api.md#int)! | Number of repositories in this organization at the time this recipe was run.           |             |
| **updatedAt**           |  [DateTime](graphql-api.md#datetime) | The time at which this recipe last ran                                                 |             |

### Visualization

| Field           |                                                     Argument | Type | Description |
| --------------- | -----------------------------------------------------------: | ---- | ----------- |
| **id**          |                                     [ID](graphql-api.md#id)! |      |             |
| **options**     |                         \[[Option](graphql-api.md#option)!]! |      |             |
| **recipe**      |                             [Recipe](graphql-api.md#recipe)! |      |             |
| **dataTable**   |                       [DataTable](graphql-api.md#datatable)! |      |             |
| **description** |                         [Markdown](graphql-api.md#markdown)! |      |             |
| **images**      | \[[VisualizationImage](graphql-api.md#visualizationimage)!]! |      |             |
| **name**        |                         [Markdown](graphql-api.md#markdown)! |      |             |

### VisualizationArtifact

| Field                |                                           Argument | Type | Description |
| -------------------- | -------------------------------------------------: | ---- | ----------- |
| **indexUrl**         |                    [String](graphql-api.md#string) |      |             |
| **installedVersion** |                    [String](graphql-api.md#string) |      |             |
| **name**             |                   [String](graphql-api.md#string)! |      |             |
| **requestedVersion** |                    [String](graphql-api.md#string) |      |             |
| **visualizations**   | \[[Visualization](graphql-api.md#visualization)!]! |      |             |

### VisualizationCategory

| Field              |                                                           Argument | Type                                                                                | Description |
| ------------------ | -----------------------------------------------------------------: | ----------------------------------------------------------------------------------- | ----------- |
| **categories**     | \[[VisualizationCategory](graphql-api.md#visualizationcategory)!]! | Categories are sorted alphabetically by name.                                       |             |
| **description**    |                                [Markdown](graphql-api.md#markdown) |                                                                                     |             |
| **id**             |                                           [ID](graphql-api.md#id)! |                                                                                     |             |
| **name**           |                               [Markdown](graphql-api.md#markdown)! |                                                                                     |             |
| **visualizations** |                 \[[Visualization](graphql-api.md#visualization)!]! | Any given category will have either visualizations or sub-categories, but not both. |             |

### VisualizationDeploymentResult

| Field            |                                                                     Argument | Type | Description |
| ---------------- | ---------------------------------------------------------------------------: | ---- | ----------- |
| **artifact**     |                [VisualizationArtifact](graphql-api.md#visualizationartifact) |      |             |
| **duration**     |                                          [Duration](graphql-api.md#duration) |      |             |
| **id**           |                                                     [ID](graphql-api.md#id)! |      |             |
| **start**        |                                          [DateTime](graphql-api.md#datetime) |      |             |
| **state**        | [VisualizationDeploymentState](graphql-api.md#visualizationdeploymentstate)! |      |             |
| **stateMessage** |                                              [String](graphql-api.md#string) |      |             |

### VisualizationImage

| Field        |                         Argument | Type                             | Description |
| ------------ | -------------------------------: | -------------------------------- | ----------- |
| **contents** | [Base64](graphql-api.md#base64)! |                                  |             |
| **height**   |        [Int](graphql-api.md#int) | Height, in pixels, of the image. |             |

### VisualizationRun

| Field               |                                                                                     Argument | Type                                                                                                                                                                                                                                                   | Description |
| ------------------- | -------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| **dataTable**       |                                                              [String](graphql-api.md#string) |                                                                                                                                                                                                                                                        |             |
| rows                |                                                                   [Int](graphql-api.md#int)! |                                                                                                                                                                                                                                                        |             |
| **email**           |                                                             [String](graphql-api.md#string)! |                                                                                                                                                                                                                                                        |             |
| **id**              |                                                                     [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                        |             |
| **lastUpdatedDate** |                                                         [DateTime](graphql-api.md#datetime)! |                                                                                                                                                                                                                                                        |             |
| **notebook**        |                                                                  [JSON](graphql-api.md#json) | The whole notebook, including the output. This is not persisted permanently, so is only available for an indeterminate time after the run completes. This is a diagnostic utility for when a notebook's saved output is not enough to debug a problem. |             |
| **organization**    |                                                  [Organization](graphql-api.md#organization) |                                                                                                                                                                                                                                                        |             |
| **organizationId**  |                                                                     [ID](graphql-api.md#id)! |                                                                                                                                                                                                                                                        |             |
| **output**          |                                                                  [JSON](graphql-api.md#json) |                                                                                                                                                                                                                                                        |             |
| **priority**        |                         [VisualizationRunPriority](graphql-api.md#visualizationrunpriority)! |                                                                                                                                                                                                                                                        |             |
| **recipeRun**       |                                                        [RecipeRun](graphql-api.md#reciperun) |                                                                                                                                                                                                                                                        |             |
| **repositories**    | [VisualizationRunRepositoryConnection](graphql-api.md#visualizationrunrepositoryconnection)! |                                                                                                                                                                                                                                                        |             |
| after               |                                                              [String](graphql-api.md#string) |                                                                                                                                                                                                                                                        |             |
| before              |                                                              [String](graphql-api.md#string) |                                                                                                                                                                                                                                                        |             |
| first               |                                                                    [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                        |             |
| last                |                                                                    [Int](graphql-api.md#int) |                                                                                                                                                                                                                                                        |             |
| **state**           |                               [VisualizationRunState](graphql-api.md#visualizationrunstate)! |                                                                                                                                                                                                                                                        |             |
| **stateMessage**    |                                                              [String](graphql-api.md#string) |                                                                                                                                                                                                                                                        |             |
| **visualization**   |                                                [Visualization](graphql-api.md#visualization) |                                                                                                                                                                                                                                                        |             |

### VisualizationRunConnection

| Field        |                                                       Argument | Type | Description |
| ------------ | -------------------------------------------------------------: | ---- | ----------- |
| **count**    |                                      [Int](graphql-api.md#int) |      |             |
| **edges**    | \[[VisualizationRunEdge](graphql-api.md#visualizationrunedge)] |      |             |
| **pageInfo** |                            [PageInfo](graphql-api.md#pageinfo) |      |             |

### VisualizationRunEdge

| Field      |                                            Argument | Type | Description |
| ---------- | --------------------------------------------------: | ---- | ----------- |
| **cursor** |                     [String](graphql-api.md#string) |      |             |
| **node**   | [VisualizationRun](graphql-api.md#visualizationrun) |      |             |

### VisualizationRunRepositoryConnection

Pagination Type - Recipe Run Summary

| Field            |                                                                           Argument | Type                                                                                                                                                                                                                                | Description |
| ---------------- | ---------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **count**        |                                                          [Int](graphql-api.md#int) |                                                                                                                                                                                                                                     |             |
| **edges**        | \[[VisualizationRunRepositoryEdge](graphql-api.md#visualizationrunrepositoryedge)] |                                                                                                                                                                                                                                     |             |
| **missingCount** |                                                          [Int](graphql-api.md#int) | The total count of repositories whose data tables have not been uploaded. This can happen in the event that the recipe run / upload is not complete yet, and also in the case where the recipe run or upload failed for any reason. |             |
| **pageInfo**     |                                                [PageInfo](graphql-api.md#pageinfo) |                                                                                                                                                                                                                                     |             |

### VisualizationRunRepositoryEdge

| Field      |                                                                               Argument | Type | Description |
| ---------- | -------------------------------------------------------------------------------------: | ---- | ----------- |
| **cursor** |                                                       [String](graphql-api.md#string)! |      |             |
| **node**   | [VisualizationRunRepositorySummary](graphql-api.md#visualizationrunrepositorysummary)! |      |             |

### VisualizationRunRepositorySummary

| Field            |                                                                                         Argument | Type | Description |
| ---------------- | -----------------------------------------------------------------------------------------------: | ---- | ----------- |
| **repository**   |                                                          [Repository](graphql-api.md#repository) |      |             |
| **state**        | [VisualizationRunRepositorySummaryState](graphql-api.md#visualizationrunrepositorysummarystate)! |      |             |
| **stateMessage** |                                                                  [String](graphql-api.md#string) |      |             |

### Worker

| Field              |                                     Argument | Type | Description |
| ------------------ | -------------------------------------------: | ---- | ----------- |
| **connectedSince** |         [DateTime](graphql-api.md#datetime)! |      |             |
| **name**           |             [String](graphql-api.md#string)! |      |             |
| **repositories**   | \[[Repository](graphql-api.md#repository)!]! |      |             |

## Inputs

### ApprovalJobInput

| Field            | Type                                                   | Description                                 |
| ---------------- | ------------------------------------------------------ | ------------------------------------------- |
| **commitJobId**  | [ID](graphql-api.md#id)!                               | ID of the commit job, also called commitId. |
| **repositories** | \[[RepositoryInput](graphql-api.md#repositoryinput)!]! |                                             |

### AuditLogFilterInput

| Field               | Type                                                                   | Description |
| ------------------- | ---------------------------------------------------------------------- | ----------- |
| **items**           | \[[AuditLogFilterItemInput](graphql-api.md#auditlogfilteriteminput)!]! |             |
| **logicalOperator** | [LogicalOperator](graphql-api.md#logicaloperator)                      |             |

### AuditLogFilterItemInput

| Field          | Type                                                           | Description |
| -------------- | -------------------------------------------------------------- | ----------- |
| **comparator** | [Comparator](graphql-api.md#comparator)                        |             |
| **field**      | [AuditLogFilterColumns](graphql-api.md#auditlogfiltercolumns)! |             |
| **value**      | [String](graphql-api.md#string)                                |             |

### CliBuildResultInput

| Field               | Type                                               | Description                                                                                      |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **buildJobLink**    | [String](graphql-api.md#string)                    |                                                                                                  |
| **buildTimeMs**     | [Long](graphql-api.md#long)!                       | The total time the build ran, in milliseconds. Inclusive of the time it take to build each step. |
| **buildTools**      | \[[CliBuildTool](graphql-api.md#clibuildtool)!]!   |                                                                                                  |
| **cliVersion**      | [String](graphql-api.md#string)!                   |                                                                                                  |
| **operatingSystem** | [String](graphql-api.md#string)                    |                                                                                                  |
| **repository**      | [RepositoryInput](graphql-api.md#repositoryinput)! |                                                                                                  |
| **sourceFiles**     | [Int](graphql-api.md#int)!                         | The total source files contributed by this build step                                            |
| **success**         | [Boolean](graphql-api.md#boolean)!                 |                                                                                                  |

### CliBuildTool

| Field             | Type                                                 | Description                                                                                                                                                                                                                                                                                                         |
| ----------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **buildTimeMs**   | [Long](graphql-api.md#long)!                         | The time it took to run this build tool step, in milliseconds. Exclusive of the time it takes to discover and solve for constraints e.g. the appropriate Java version to use for a Gradle step.                                                                                                                     |
| **pluginVersion** | [String](graphql-api.md#string)                      | In the case of Gradle or Maven, this will be the version of the build plugin injected into the build to produce LST fragments. In the case of Bazel, Modjava, and Native this will be null, since the only version number we could give would be the CLI version which is already specified on CliBuildResultInput. |
| **sourceFiles**   | [Int](graphql-api.md#int)!                           | The total source files contributed by this build step                                                                                                                                                                                                                                                               |
| **step**          | [CliBuildToolStep](graphql-api.md#clibuildtoolstep)! |                                                                                                                                                                                                                                                                                                                     |
| **success**       | [Boolean](graphql-api.md#boolean)!                   |                                                                                                                                                                                                                                                                                                                     |
| **version**       | [String](graphql-api.md#string)                      | In the case of Gradle or Maven, this will be the version of Gradle or Maven itself, either driven by a wrapper or the version installed on the system.                                                                                                                                                              |

### CloseJobInput

| Field            | Type                                                   | Description                                 |
| ---------------- | ------------------------------------------------------ | ------------------------------------------- |
| **commitJobId**  | [ID](graphql-api.md#id)!                               | ID of the commit job, also called commitId. |
| **repositories** | \[[RepositoryInput](graphql-api.md#repositoryinput)!]! |                                             |

### CommitInput

| Field               | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **branchName**      | [String](graphql-api.md#string)                        | If unset, commit to the branch that the LST was generated from.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **email**           | [String](graphql-api.md#string)                        | Email to author commit with. Verified against your emails (public and private) that are verified in your SCM provider. If left blank, your first email will be used.                                                                                                                                                                                                                                                                                                                                                                                                       |
| **excludedFiles**   | \[[String](graphql-api.md#string)!]                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **extendedMessage** | [Base64](graphql-api.md#base64)                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **gpgKey**          | [GpgInput](graphql-api.md#gpginput)                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **message**         | [String](graphql-api.md#string)!                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **recipeRunId**     | [ID](graphql-api.md#id)!                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **repositories**    | \[[RepositoryInput](graphql-api.md#repositoryinput)!]! |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **scmAccessTokens** | \[[ScmAccessToken](graphql-api.md#scmaccesstoken)!]    | <p>Accepts personal access tokens created through your SCM Provider.</p><p>This will be used in lieu of a OAuth token obtained through web flow.</p><p><strong>Limitations:</strong></p><ul><li>Bitbucket Data Center and Server requires version 5.5 or later.</li><li><code>scmAccessTokens</code> will take precedence over any access token stored in the database.</li></ul><p>@see https://docs.moderne.io/user-documentation/recipe-execution-and-commits-with-graphql#creating-a-pull-request @see https://docs.moderne.io/references/create-scm-access-tokens</p> |

### CommitJobFilterInput

| Field        | Type                                          | Description |
| ------------ | --------------------------------------------- | ----------- |
| **query**    | [String](graphql-api.md#string)               |             |
| **statuses** | \[[CommitState](graphql-api.md#commitstate)!] |             |

### CommitJobOrderInput

| Field         | Type                                                       | Description |
| ------------- | ---------------------------------------------------------- | ----------- |
| **direction** | [SortOrder](graphql-api.md#sortorder)!                     |             |
| **field**     | [CommitJobOrderField](graphql-api.md#commitjoborderfield)! |             |

### CopyHistoryInput

| Field     | Type                                 | Description |
| --------- | ------------------------------------ | ----------- |
| **since** | [DateTime](graphql-api.md#datetime)! |             |

### DateRangeInput

| Field     | Type                                | Description |
| --------- | ----------------------------------- | ----------- |
| **end**   | [DateTime](graphql-api.md#datetime) |             |
| **start** | [DateTime](graphql-api.md#datetime) |             |

### EventFilterInput

| Field           | Type                                    | Description                                                                                                          |
| --------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **action**      | [String](graphql-api.md#string)         | <p>Limit result set to a specific action</p><p>Example: <code>GET_RECIPE</code></p>                                  |
| **actionType**  | [ActionType](graphql-api.md#actiontype) | Limit result set to a specific action type                                                                           |
| **description** | [String](graphql-api.md#string)         |                                                                                                                      |
| **outcome**     | [String](graphql-api.md#string)         | <p>Limit result set to a specific outcome</p><p>Generally be either: <code>Success</code> or <code>Failed</code></p> |
| **target**      | [String](graphql-api.md#string)         | <p>Limit result set to a specific target</p><p>Example: <code>recipes</code> or <code>recipe.runs</code></p>         |
| **userId**      | [String](graphql-api.md#string)         | Limit result set to a specific user by id                                                                            |

### GpgInput

| Field          | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| **passphrase** | [String](graphql-api.md#string)  |             |
| **privateKey** | [String](graphql-api.md#string)! |             |
| **publicKey**  | [String](graphql-api.md#string)! |             |

### MergeJobInput

| Field                  | Type                                                   | Description                                 |
| ---------------------- | ------------------------------------------------------ | ------------------------------------------- |
| **commitJobId**        | [ID](graphql-api.md#id)!                               | ID of the commit job, also called commitId. |
| **deleteSourceBranch** | [Boolean](graphql-api.md#boolean)!                     |                                             |
| **mergeMethod**        | [MergeMethod](graphql-api.md#mergemethod)!             |                                             |
| **repositories**       | \[[RepositoryInput](graphql-api.md#repositoryinput)!]! |                                             |

### OptionInput

| Field     | Type                             | Description                       |
| --------- | -------------------------------- | --------------------------------- |
| **name**  | [String](graphql-api.md#string)! | Example: `methodPattern`          |
| **value** | [Object](graphql-api.md#object)! | Example: `java.util.List add(..)` |

### PartialCommitInput

| Field         | Type                             | Description                        |
| ------------- | -------------------------------- | ---------------------------------- |
| **branch**    | [String](graphql-api.md#string)! |                                    |
| **changeset** | [String](graphql-api.md#string)! | Git SHA                            |
| **origin**    | [String](graphql-api.md#string)! | SSH or HTTPS URL to the repository |

### PartialRepositoryInput

| Field               | Type                                                     | Description |
| ------------------- | -------------------------------------------------------- | ----------- |
| **commit**          | [PartialCommitInput](graphql-api.md#partialcommitinput)! |             |
| **repositoryInput** | [RepositoryInput](graphql-api.md#repositoryinput)!       |             |
| **sourceFiles**     | \[[SourceFileInput](graphql-api.md#sourcefileinput)!]!   |             |

### PullRequestActionJobFilterInput

| Field        | Type                                      | Description |
| ------------ | ----------------------------------------- | ----------- |
| **query**    | [String](graphql-api.md#string)           |             |
| **statuses** | \[[TaskState](graphql-api.md#taskstate)!] |             |

### PullRequestActionJobOrderInput

| Field         | Type                                                                             | Description |
| ------------- | -------------------------------------------------------------------------------- | ----------- |
| **direction** | [SortOrder](graphql-api.md#sortorder)!                                           |             |
| **field**     | [PullRequestActionJobOrderField](graphql-api.md#pullrequestactionjoborderfield)! |             |

### RecipeInput

| Field       | Type                                          | Description                                        |
| ----------- | --------------------------------------------- | -------------------------------------------------- |
| **id**      | [ID](graphql-api.md#id)!                      | Example: `org.openrewrite.java.search.FindMethods` |
| **options** | \[[OptionInput](graphql-api.md#optioninput)!] |                                                    |

### RecipeRunFilterInput

| Field               | Type                                                | Description |
| ------------------- | --------------------------------------------------- | ----------- |
| **dateRange**       | [DateRangeInput](graphql-api.md#daterangeinput)     |             |
| **emailStartsWith** | [String](graphql-api.md#string)                     |             |
| **organizationId**  | [ID](graphql-api.md#id)                             |             |
| **showOnlyMyRuns**  | [Boolean](graphql-api.md#boolean)                   |             |
| **states**          | \[[RecipeRunState](graphql-api.md#reciperunstate)!] |             |

### RecipeRunInput

| Field                 | Type                                                            | Description                                                                                            |
| --------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **organizationId**    | [ID](graphql-api.md#id)                                         | When supplied, the repositories the recipe will be run on will be sourced from the given organization. |
| **partialRepository** | [PartialRepositoryInput](graphql-api.md#partialrepositoryinput) |                                                                                                        |
| **priority**          | [RecipeRunPriority](graphql-api.md#reciperunpriority)           |                                                                                                        |
| **recipe**            | [RecipeInput](graphql-api.md#recipeinput)!                      |                                                                                                        |
| **repositoryFilter**  | \[[RepositoryInput](graphql-api.md#repositoryinput)!]           |                                                                                                        |
| **sourceFileFilter**  | [SourceFileFilter](graphql-api.md#sourcefilefilter)             | When supplied, only run the recipe on the files that do not match any excluded files.                  |

### RecipeValidationInput

| Field                | Type                                                  | Description |
| -------------------- | ----------------------------------------------------- | ----------- |
| **repositoryFilter** | \[[RepositoryInput](graphql-api.md#repositoryinput)!] |             |
| **runId**            | [ID](graphql-api.md#id)!                              |             |

### RepositoryFilter

| Field            | Type                                                 | Description                      |
| ---------------- | ---------------------------------------------------- | -------------------------------- |
| **filterBy**     | [RepositoryFields](graphql-api.md#repositoryfields)  |                                  |
| **query**        | [String](graphql-api.md#string)                      |                                  |
| **repositories** | \[[RepositoryInput](graphql-api.md#repositoryinput)] | Used to filter repository groups |
| **showOrphaned** | [Boolean](graphql-api.md#boolean)                    |                                  |
| **sortBy**       | [RepositoryFields](graphql-api.md#repositoryfields)! |                                  |
| **sortOrder**    | [SortOrder](graphql-api.md#sortorder)!               |                                  |

### RepositoryInput

| Field      | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| **branch** | [String](graphql-api.md#string)  |             |
| **origin** | [String](graphql-api.md#string)  |             |
| **path**   | [String](graphql-api.md#string)! |             |

### ScmAccessToken

| Field     | Type                               | Description |
| --------- | ---------------------------------- | ----------- |
| **type**  | [ScmType](graphql-api.md#scmtype)! |             |
| **value** | [String](graphql-api.md#string)!   |             |

### SourceFileFilter

| Field        | Type                                | Description                                               |
| ------------ | ----------------------------------- | --------------------------------------------------------- |
| **excludes** | \[[String](graphql-api.md#string)!] | List of file patterns to exclude from running the recipe. |

### SourceFileInput

| Field          | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| **source**     | [Base64](graphql-api.md#base64)! |             |
| **sourcePath** | [Path](graphql-api.md#path)!     |             |

### SummaryResultsFilterInput

| Field               | Type                                                                         | Description                                           |
| ------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- |
| **errorReasons**    | \[[RecipeRunSummaryErrorReason](graphql-api.md#reciperunsummaryerrorreason)] |                                                       |
| **onlyWithResults** | [Boolean](graphql-api.md#boolean)                                            | Only returns results that where changes would be made |
| **query**           | [String](graphql-api.md#string)                                              | Fuzzy search repositories                             |
| **statuses**        | \[[RecipeRunSummaryState](graphql-api.md#reciperunsummarystate)]             |                                                       |

### SummaryResultsOrderInput

| Field         | Type                                                           | Description |
| ------------- | -------------------------------------------------------------- | ----------- |
| **direction** | [SortOrder](graphql-api.md#sortorder)!                         |             |
| **field**     | [RecipeResultColumnKey](graphql-api.md#reciperesultcolumnkey)! |             |

### UserOrganizationInput

| Field            | Type                                                   | Description |
| ---------------- | ------------------------------------------------------ | ----------- |
| **description**  | [String](graphql-api.md#string)                        |             |
| **name**         | [String](graphql-api.md#string)!                       |             |
| **repositories** | \[[RepositoryInput](graphql-api.md#repositoryinput)!]! |             |

### UserOrganizationUpdateInput

| Field            | Type                                                   | Description |
| ---------------- | ------------------------------------------------------ | ----------- |
| **description**  | [String](graphql-api.md#string)                        |             |
| **id**           | [ID](graphql-api.md#id)!                               |             |
| **name**         | [String](graphql-api.md#string)!                       |             |
| **repositories** | \[[RepositoryInput](graphql-api.md#repositoryinput)!]! |             |

### VisualizationRunFilter

| Field               | Type                                                             | Description |
| ------------------- | ---------------------------------------------------------------- | ----------- |
| **organizationId**  | [ID](graphql-api.md#id)                                          |             |
| **recipeRunId**     | [ID](graphql-api.md#id)                                          |             |
| **statuses**        | \[[VisualizationRunState](graphql-api.md#visualizationrunstate)] |             |
| **visualizationId** | [ID](graphql-api.md#id)                                          |             |

## Enums

### ActionType

| Value      | Description |
| ---------- | ----------- |
| **Create** |             |
| **Delete** |             |
| **Read**   |             |
| **Update** |             |

### AuditLogFilterColumns

| Value            | Description |
| ---------------- | ----------- |
| **ACTION**       |             |
| **ACTION\_TYPE** |             |
| **DESCRIPTION**  |             |
| **OUTCOME**      |             |
| **TARGET**       |             |
| **TIMESTAMP**    |             |
| **USER\_ID**     |             |

### CiState

| Value             | Description |
| ----------------- | ----------- |
| **FAILED**        |             |
| **IN\_PROGRESS**  |             |
| **NOT\_REQUIRED** |             |
| **PENDING**       |             |
| **SKIPPED**       |             |
| **SUCCESSFUL**    |             |

### CliBuildToolStep

| Value       | Description |
| ----------- | ----------- |
| **Bazel**   |             |
| **Gradle**  |             |
| **Maven**   |             |
| **Modjava** |             |
| **Native**  |             |

### CommitJobOrderField

| Value           | Description                                    |
| --------------- | ---------------------------------------------- |
| **MODIFIED**    | MODIFIED is deprecated, please use UPDATED\_AT |
| **REPOSITORY**  |                                                |
| **STATE**       |                                                |
| **UPDATED\_AT** |                                                |

### CommitJobState

| Value                | Description                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CANCELED**         | <p>Represents a commit job that was canceled.</p><p>The commit job may have some commits that were successfully processed and some that were not.</p>     |
| **FAILED**           | All commits failed.                                                                                                                                       |
| **IN\_PROGRESS**     | Has commits either waiting to be processed or actively being processed.                                                                                   |
| **NO\_CHANGES**      | <p>None of the commits yielded changes.</p><p>This is different from a successful commit job because no changes were made to the upstream repository.</p> |
| **PARTIAL\_FAILURE** | All commits have finished processing and more than 50% were failures.                                                                                     |
| **PARTIAL\_SUCCESS** | All commits have finished processing and 50% or more were successful.                                                                                     |
| **SUCCESSFUL**       | <p>All commits succeeded.</p><p>This also includes commits that yielded no changes.</p>                                                                   |

### CommitOption

| Value                  | Description |
| ---------------------- | ----------- |
| **Branch**             |             |
| **Direct**             |             |
| **Fork**               |             |
| **ForkAndPullRequest** |             |
| **None**               |             |
| **PullRequest**        |             |

### CommitState

| Value           | Description                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CANCELED**    |                                                                                                                                                                                                     |
| **COMPLETED**   | A commit that was processed successfully.                                                                                                                                                           |
| **FAILED**      | A commit that was processed but encountered an error.                                                                                                                                               |
| **NO\_CHANGES** | <p>A commit that was process but yielded no changes.</p><p>Generally this occurs when applying a patch to the upstream repository does not produce any changes to the source file(s) to commit.</p> |
| **ORPHANED**    | A commit that was started but could not be completed in time. A new processor should be able to pick up the commit and resume processing.                                                           |
| **PROCESSING**  | A commit that is actively being processed.                                                                                                                                                          |
| **QUEUED**      | A commit that is waiting to be processed.                                                                                                                                                           |

### CommitType

| Value                        | Description |
| ---------------------------- | ----------- |
| **DIRECT**                   |             |
| **FORK**                     |             |
| **FORK\_AND\_PULL\_REQUEST** |             |
| **PULL\_REQUEST**            |             |

### CommitsReportTaskState

| Value       | Description |
| ----------- | ----------- |
| **FAILURE** |             |
| **PENDING** |             |
| **SUCCESS** |             |

### Comparator

| Value             | Description |
| ----------------- | ----------- |
| **CONTAINS**      |             |
| **DATE\_RANGE**   |             |
| **ENDS\_WITH**    |             |
| **EQUALS**        |             |
| **IS\_EMPTY**     |             |
| **NOT\_CONTAINS** |             |
| **NOT\_EMPTY**    |             |
| **STARTS\_WITH**  |             |

### DataTableFormat

| Value     | Description |
| --------- | ----------- |
| **CSV**   |             |
| **EXCEL** |             |

### DownloadTaskState

| Value       | Description |
| ----------- | ----------- |
| **FAILURE** |             |
| **PENDING** |             |
| **SUCCESS** |             |

### ErrorDetail

| Value                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DEADLINE\_EXCEEDED**     | <p>The deadline expired before the operation could complete.</p><p>For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire.</p><p>HTTP Mapping: 504 Gateway Timeout Error Type: UNAVAILABLE</p>                                                                                                                                                                                                                                                                 |
| **ENHANCE\_YOUR\_CALM**    | <p>The server detected that the client is exhibiting a behavior that might be generating excessive load.</p><p>HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm Error Type: UNAVAILABLE</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **FIELD\_NOT\_FOUND**      | <p>The requested field is not found in the schema.</p><p>This differs from <code>NOT_FOUND</code> in that <code>NOT_FOUND</code> should be used when a query is valid, but is unable to return a result (if, for example, a specific video id doesn't exist). <code>FIELD_NOT_FOUND</code> is intended to be returned by the server to signify that the requested field is not known to exist. This may be returned in lieu of failing the entire query. See also <code>PERMISSION_DENIED</code> for cases where the requested field is invalid only for the given user or class of users.</p><p>HTTP Mapping: 404 Not Found Error Type: BAD_REQUEST</p> |
| **INVALID\_ARGUMENT**      | <p>The client specified an invalid argument.</p><p>Note that this differs from <code>FAILED_PRECONDITION</code>. <code>INVALID_ARGUMENT</code> indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name).</p><p>HTTP Mapping: 400 Bad Request Error Type: BAD_REQUEST</p>                                                                                                                                                                                                                                                                                                                             |
| **INVALID\_CURSOR**        | <p>The provided cursor is not valid.</p><p>The most common usage for this error is when a client is paginating through a list that uses stateful cursors. In that case, the provided cursor may be expired.</p><p>HTTP Mapping: 404 Not Found Error Type: NOT_FOUND</p>                                                                                                                                                                                                                                                                                                                                                                                  |
| **MISSING\_RESOURCE**      | <p>Unable to perform operation because a required resource is missing.</p><p>Example: Client is attempting to refresh a list, but the specified list is expired. This requires an action by the client to get a new list.</p><p>If the user is simply trying GET a resource that is not found, use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE is to be used particularly when the user is performing an operation that requires a particular resource to exist.</p><p>HTTP Mapping: 400 Bad Request or 500 Internal Server Error Error Type: FAILED_PRECONDITION</p>                                                                 |
| **SERVICE\_ERROR**         | <p>Service Error.</p><p>There is a problem with an upstream service.</p><p>This may be returned if a gateway receives an unknown error from a service or if a service is unreachable. If a request times out which waiting on a response from a service, <code>DEADLINE_EXCEEDED</code> may be returned instead. If a service returns a more specific error Type, the specific error Type may be returned instead.</p><p>HTTP Mapping: 502 Bad Gateway Error Type: UNAVAILABLE</p>                                                                                                                                                                       |
| **TCP\_FAILURE**           | <p>Request failed due to network errors.</p><p>HTTP Mapping: 503 Unavailable Error Type: UNAVAILABLE</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **THROTTLED\_CONCURRENCY** | <p>Request throttled based on server concurrency limits.</p><p>HTTP Mapping: 503 Unavailable Error Type: UNAVAILABLE</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **THROTTLED\_CPU**         | <p>Request throttled based on server CPU limits</p><p>HTTP Mapping: 503 Unavailable. Error Type: UNAVAILABLE</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **UNIMPLEMENTED**          | <p>The operation is not implemented or is not currently supported/enabled.</p><p>HTTP Mapping: 501 Not Implemented Error Type: BAD_REQUEST</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **UNKNOWN**                | <p>Unknown error.</p><p>This error should only be returned when no other error detail applies. If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.</p><p>HTTP Mapping: 500 Internal Server Error</p>                                                                                                                                                                                                                                                                                                                                                                                                                             |

### ErrorType

| Value                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BAD\_REQUEST**         | <p>Bad Request.</p><p>There is a problem with the request. Retrying the same request is not likely to succeed. An example would be a query or argument that cannot be deserialized.</p><p>HTTP Mapping: 400 Bad Request</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **FAILED\_PRECONDITION** | <p>The operation was rejected because the system is not in a state required for the operation's execution. For example, the directory to be deleted is non-empty, an rmdir operation is applied to a non-directory, etc.</p><p>Service implementers can use the following guidelines to decide between <code>FAILED_PRECONDITION</code> and <code>UNAVAILABLE</code>:</p><ul><li>Use <code>UNAVAILABLE</code> if the client can retry just the failing call.</li><li>Use <code>FAILED_PRECONDITION</code> if the client should not retry until the system state has been explicitly fixed. E.g., if an "rmdir" fails because the directory is non-empty, <code>FAILED_PRECONDITION</code> should be returned since the client should not retry unless the files are deleted from the directory.</li></ul><p>HTTP Mapping: 400 Bad Request or 500 Internal Server Error</p> |
| **INTERNAL**             | <p>Internal error.</p><p>An unexpected internal error was encountered. This means that some invariants expected by the underlying system have been broken. This error code is reserved for serious errors.</p><p>HTTP Mapping: 500 Internal Server Error</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **NOT\_FOUND**           | <p>The requested entity was not found.</p><p>This could apply to a resource that has never existed (e.g. bad resource id), or a resource that no longer exists (e.g. cache expired.)</p><p>Note to server developers: if a request is denied for an entire class of users, such as gradual feature rollout or undocumented allowlist, <code>NOT_FOUND</code> may be used. If a request is denied for some users within a class of users, such as user-based access control, <code>PERMISSION_DENIED</code> must be used.</p><p>HTTP Mapping: 404 Not Found</p>                                                                                                                                                                                                                                                                                                             |
| **PERMISSION\_DENIED**   | <p>The caller does not have permission to execute the specified operation.</p><p><code>PERMISSION_DENIED</code> must not be used for rejections caused by exhausting some resource or quota. <code>PERMISSION_DENIED</code> must not be used if the caller cannot be identified (use <code>UNAUTHENTICATED</code> instead for those errors).</p><p>This error Type does not imply the request is valid or the requested entity exists or satisfies other pre-conditions.</p><p>HTTP Mapping: 403 Forbidden</p>                                                                                                                                                                                                                                                                                                                                                             |
| **UNAUTHENTICATED**      | <p>The request does not have valid authentication credentials.</p><p>This is intended to be returned only for routes that require authentication.</p><p>HTTP Mapping: 401 Unauthorized</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **UNAVAILABLE**          | <p>Currently Unavailable.</p><p>The service is currently unavailable. This is most likely a transient condition, which can be corrected by retrying with a backoff.</p><p>HTTP Mapping: 503 Unavailable</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **UNKNOWN**              | <p>Unknown error.</p><p>For example, this error may be returned when an error code received from another address space belongs to an error space that is not known in this address space. Also errors raised by APIs that do not return enough error information may be converted to this error.</p><p>If a client sees an unknown errorType, it will be interpreted as UNKNOWN. Unknown errors MUST NOT trigger any special behavior. These MAY be treated by an implementation as being equivalent to INTERNAL.</p><p>When possible, a more specific error should be provided.</p><p>HTTP Mapping: 520 Unknown Error</p>                                                                                                                                                                                                                                                 |

### JobState

| Value                     | Description                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **CANCELED**              | <p>Represents a job that was canceled.</p><p>The job may have some tasks that were successfully processed and some that were not.</p> |
| **FAILED**                | All tasks failed.                                                                                                                     |
| **IN\_PROGRESS**          | Has tasks either waiting to be processed or actively being processed.                                                                 |
| **PARTIALLY\_FAILED**     | All tasks have finished processing and more than 50% were failures.                                                                   |
| **PARTIALLY\_SUCCESSFUL** | All tasks have finished processing and 50% or more were successful.                                                                   |
| **SUCCESSFUL**            | All tasks succeeded.                                                                                                                  |

### LogicalOperator

| Value   | Description |
| ------- | ----------- |
| **AND** |             |
| **OR**  |             |

### MergeMethod

| Value      | Description |
| ---------- | ----------- |
| **MERGE**  |             |
| **REBASE** |             |
| **SQUASH** |             |

### Mergeable

| Value         | Description |
| ------------- | ----------- |
| **BLOCKED**   |             |
| **MERGEABLE** |             |
| **UNKNOWN**   |             |

### PullRequestActionJobOrderField

| Value           | Description |
| --------------- | ----------- |
| **REPOSITORY**  |             |
| **STATE**       |             |
| **UPDATED\_AT** |             |

### PullRequestActionType

| Value       | Description |
| ----------- | ----------- |
| **APPROVE** |             |
| **CLOSE**   |             |
| **MERGE**   |             |

### PullRequestState

| Value      | Description |
| ---------- | ----------- |
| **CLOSED** |             |
| **MERGED** |             |
| **OPEN**   |             |

### RecipeDeploymentState

| Value        | Description |
| ------------ | ----------- |
| **ERROR**    |             |
| **FINISHED** |             |
| **LOADING**  |             |
| **QUEUED**   |             |

### RecipeResultColumnKey

| Value                      | Description |
| -------------------------- | ----------- |
| **AST\_LOADING**           |             |
| **BRANCH**                 |             |
| **DEBUG\_MARKERS**         |             |
| **DEPENDENCY\_RESOLUTION** |             |
| **ERROR\_MARKERS**         |             |
| **ERROR\_REASON**          |             |
| **INFO\_MARKERS**          |             |
| **LAST\_UPDATED**          |             |
| **PATH**                   |             |
| **RECIPE\_RUN**            |             |
| **STATUS**                 |             |
| **TOTAL\_CHANGED**         |             |
| **TOTAL\_RESULTS**         |             |
| **TOTAL\_SEARCHED**        |             |
| **WARNING\_MARKERS**       |             |
| **WORKER**                 |             |

### RecipeRunPriority

| Value      | Description |
| ---------- | ----------- |
| **LOW**    |             |
| **NORMAL** |             |

### RecipeRunState

| Value        | Description |
| ------------ | ----------- |
| **CANCELED** |             |
| **FINISHED** |             |
| **RUNNING**  |             |

### RecipeRunSummaryErrorReason

| Value                            | Description |
| -------------------------------- | ----------- |
| **FAILED\_LOAD\_AST**            |             |
| **FAILED\_LOAD\_RECIPE**         |             |
| **FAILED\_LOAD\_SYMMETRIC\_KEY** |             |
| **RECIPE\_ERROR**                |             |
| **TIMEOUT**                      |             |

### RecipeRunSummaryState

| Value           | Description                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **CANCELED**    |                                                                                                        |
| **CREATED**     |                                                                                                        |
| **ERROR**       | A worker was unable to process this recipe.                                                            |
| **FINISHED**    |                                                                                                        |
| **LOADING**     | A repository's Abstract Syntax Tree is loading into a worker.                                          |
| **QUEUED**      | A repository is waiting for open workers to process the recipe.                                        |
| **RUNNING**     |                                                                                                        |
| **UNAVAILABLE** | A worker was unavailable to display the results of this recipe.                                        |
| **YIELDED**     | A repository has been partially visited and is waiting for open workers to further process the recipe. |

### RecipeRunValidationState

| Value        | Description |
| ------------ | ----------- |
| **CANCELED** |             |
| **ERROR**    |             |
| **FAIL**     |             |
| **ORPHANED** |             |
| **PASS**     |             |
| **PENDING**  |             |
| **QUEUED**   |             |

### RepositoryFields

| Value            | Description |
| ---------------- | ----------- |
| **BRANCH**       |             |
| **CHANGESET**    |             |
| **INGESTED**     |             |
| **NAME**         |             |
| **ORGANIZATION** |             |
| **ORIGIN**       |             |
| **PATH**         |             |
| **WEIGHT**       |             |

### ReviewDecision

| Value                     | Description |
| ------------------------- | ----------- |
| **APPROVED**              |             |
| **CHANGES\_REQUESTED**    |             |
| **REVIEW\_NOT\_REQUIRED** |             |
| **REVIEW\_REQUIRED**      |             |
| **UNKNOWN**               |             |

### ScmType

| Value                | Description |
| -------------------- | ----------- |
| **BITBUCKET**        |             |
| **BITBUCKET\_CLOUD** |             |
| **GITHUB**           |             |
| **GITLAB**           |             |

### SortOrder

| Value    | Description |
| -------- | ----------- |
| **ASC**  |             |
| **DESC** |             |

### TaskState

| Value            | Description                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **CANCELED**     | A task that was cancelled                                                                                               |
| **FAILED**       | A task that was processed but encountered an error.                                                                     |
| **IN\_PROGRESS** | A task that is actively being processed.                                                                                |
| **ORPHANED**     | A task that was started but could not be completed in time. A new processor can pick up the task and resume processing. |
| **QUEUED**       | A task that is waiting to be processed.                                                                                 |
| **SUCCESSFUL**   | A task that was processed successfully.                                                                                 |

### ToolConnectivityStatus

| Value            | Description                                         |
| ---------------- | --------------------------------------------------- |
| **CONNECTED**    | Moderne has successfully connected to this tool     |
| **DISCONNECTED** | Moderne has not successfully connected to this tool |
| **SKIPPED**      | Connectivity test was intentionally bypassed        |
| **UNKNOWN**      | Not supported by the version of Moderne Agent       |

### VisualizationDeploymentState

| Value            | Description |
| ---------------- | ----------- |
| **FAILED**       |             |
| **IN\_PROGRESS** |             |
| **QUEUED**       |             |
| **SUCCESSFUL**   |             |

### VisualizationRunPriority

| Value      | Description |
| ---------- | ----------- |
| **LOW**    |             |
| **NORMAL** |             |

### VisualizationRunRepositorySummaryState

| Value               | Description |
| ------------------- | ----------- |
| **CANCELED**        |             |
| **ERROR**           |             |
| **FINISHED**        |             |
| **FINISHED\_EMPTY** |             |
| **QUEUED**          |             |
| **RUNNING**         |             |

### VisualizationRunState

| Value                 | Description |
| --------------------- | ----------- |
| **CANCELED**          |             |
| **COLLECTING\_DATA**  |             |
| **ERROR**             |             |
| **FINISHED**          |             |
| **FINISHED\_EMPTY**   |             |
| **QUEUED**            |             |
| **RECIPE\_COMPLETED** |             |
| **RUNNING\_NOTEBOOK** |             |
| **RUNNING\_RECIPE**   |             |

## Scalars

### Base64

`Base64` represents a base64 encoded string. In the browser, `btoa` encodes ASCII strings to Base64.

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Date

An RFC-3339 compliant Full Date Scalar

### DateTime

A slightly refined version of RFC-3339 compliant DateTime Scalar

### Duration

String in ISO-8601. Example: `PT10S` -> 10 seconds

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

`Path` represents the path to a file or directory. The scalar value serializes and parses to a `string`.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

## Interfaces

### CommitOptions

| Field          |                        Argument | Type | Description |
| -------------- | ------------------------------: | ---- | ----------- |
| **branchName** | [String](graphql-api.md#string) |      |             |

### PullRequestAction

| Field              |                                 Argument | Type | Description |
| ------------------ | ---------------------------------------: | ---- | ----------- |
| **createdAt**      |     [DateTime](graphql-api.md#datetime)! |      |             |
| **pullRequestUrl** |         [String](graphql-api.md#string)! |      |             |
| **repository**     | [Repository](graphql-api.md#repository)! |      |             |
| **state**          |   [TaskState](graphql-api.md#taskstate)! |      |             |
| **stateMessage**   |          [String](graphql-api.md#string) |      |             |
| **updatedAt**      |     [DateTime](graphql-api.md#datetime)! |      |             |

### Repository

| Field      |                         Argument | Type | Description |
| ---------- | -------------------------------: | ---- | ----------- |
| **branch** |  [String](graphql-api.md#string) |      |             |
| **origin** |  [String](graphql-api.md#string) |      |             |
| **path**   | [String](graphql-api.md#string)! |      |             |

### ToolConfiguration

Interface for integrations that are configured through the Moderne Agent

| Field                          |                                                     Argument | Type                                                                                                    | Description |
| ------------------------------ | -----------------------------------------------------------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| **agents**                     | [AgentIndexConnection](graphql-api.md#agentindexconnection)! | Agents that this tool is configured on                                                                  |             |
| after                          |                              [String](graphql-api.md#string) |                                                                                                         |             |
| first                          |                                    [Int](graphql-api.md#int) |                                                                                                         |             |
| **canConnect**                 |     \[[ToolConnectivity](graphql-api.md#toolconnectivity)!]! | Verify that agent can connect to this tool                                                              |             |
| **id**                         |                                     [ID](graphql-api.md#id)! |                                                                                                         |             |
| **isSkipSsl**                  |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate SSL certificates when connecting to this tool.                     |             |
| **isSkipValidateConnectivity** |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne will not validate connectivity to this tool.                                         |             |
| **resourceId**                 |                             [String](graphql-api.md#string)! | A valid URL, including scheme                                                                           |             |
| **valid**                      |                           [Boolean](graphql-api.md#boolean)! | If `true`, Moderne has successfully validated the configuration and possibly connectivity to this tool. |             |

## Unions

### ScmConfiguration

| Type                                                                          | Description                                                 |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [**BitbucketCloudConfiguration**](graphql-api.md#bitbucketcloudconfiguration) |                                                             |
| [**BitbucketConfiguration**](graphql-api.md#bitbucketconfiguration)           | Extend interface implementation types from Artifact Storage |
| [**GitLabConfiguration**](graphql-api.md#gitlabconfiguration)                 |                                                             |
| [**GithubConfiguration**](graphql-api.md#githubconfiguration)                 |                                                             |
