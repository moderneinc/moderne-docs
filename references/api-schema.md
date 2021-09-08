# Moderne.io GraphQL API


## Query
| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **accessTokens**  | | [<a href="#accesstokenview">AccessTokenView</a>!]! | |
| **activeRecipeRuns**  | | [<a href="#reciperun">RecipeRun</a>!]! | Get all currently active recipe runs by a user id (passed via header) sorted by most recent | 
 | | `limit` | <a href="#int">Int</a> | | 
 | | `sortOrder` | <a href="#sortorder">SortOrder</a> | |
| **category**  | | <a href="#recipecategory">RecipeCategory</a>! | Returns a single category with associated `recipes` and `subCategories` | 
 | | `categoryId` | <a href="#id">ID</a>! | |
| **findRecipes**  | | [<a href="#recipe">Recipe</a>!]! | Search for recipes by `query` | 
 | | `query` | <a href="#string">String</a>! | |
| **githubAppInstallationRepositories**  | | [<a href="#githubappinstallationrepository">GithubAppInstallationRepository</a>!]! | | 
 | | `installationId` | <a href="#id">ID</a>! | |
| **githubAppInstallations**  | | [<a href="#githubappinstallation">GithubAppInstallation</a>!]! | |
| **githubOrganizations**  | | [<a href="#githuborganization">GithubOrganization</a>!]! | Github Organizations the user belong to, includes public and private | 
 | | `name` | <a href="#string">String</a> | Optional name to filter user's organizations by |
| **githubRepositories**  | | [<a href="#githubrepository">GithubRepository</a>!]! | Github Repositories owned by the user directly, not an organization |
| **previousRecipeRuns**  | | [<a href="#reciperun">RecipeRun</a>!]! | Get all recipe runs by a user id (passed via header) sorted by most recent | 
 | | `limit` | <a href="#int">Int</a> | | 
 | | `sortOrder` | <a href="#sortorder">SortOrder</a> | |
| **recipe**  | | <a href="#recipe">Recipe</a>! | Look up single recipe record by `id` \n <br/> Example: id: `org.openrewrite.java.testing.junit5.IgnoreToDisabled` | 
 | | `id` | <a href="#id">ID</a>! | |
| **recipeArtifacts**  | | [<a href="#recipeartifact">RecipeArtifact</a>!]! | Return all loaded recipe artifacts |
| **recipeRun**  | | <a href="#reciperun">RecipeRun</a>! | | 
 | | `id` | <a href="#id">ID</a>! | |
| **recipeRunResults**  | | <a href="#reciperunresultsbyrepository">RecipeRunResultsByRepository</a>! | This query is only apart of MRE for the purposes of schema composition <br/> Queries will be handled directly by a worker. | 
 | | `after` | <a href="#string">String</a> | | 
 | | `first` | <a href="#int">Int</a> | | 
 | | `id` | <a href="#id">ID</a>! | | 
 | | `repositoryId` | <a href="#id">ID</a>! | |
| **recipeRunResultsByRepository**  | | <a href="#resultconnection">ResultConnection</a>! | This query is only apart of MRE for the purposes of schema composition <br/> Queries will be handled directly by a worker. | 
 | | `after` | <a href="#string">String</a> | | 
 | | `first` | <a href="#int">Int</a> | | 
 | | `id` | <a href="#id">ID</a>! | Run ID | 
 | | `query` | <a href="#string">String</a> | | 
 | | `repositoryId` | <a href="#id">ID</a>! | Example: `Netflix:eureka` |
| **recipeRunSummaryByRepository**  | | <a href="#reciperunsummary">RecipeRunSummary</a>! | | 
 | | `id` | <a href="#id">ID</a>! | Recipe Run ID | 
 | | `repositoryId` | <a href="#id">ID</a>! | Example: `Netflix:eureka` |
| **recipes**  ⚠️ | | [<a href="#recipe">Recipe</a>!]! | Returns multiple recipes matching the list of strings provided <br/> @Deprecated -- use recipe(id) instead <br/> <p> use `recipe(id)` instead</p> | 
 | | `names` | [<a href="#string">String</a>!]! | |
| **repository**  | | <a href="#repository">Repository</a>! | This query is only apart of MRE for the purposes of schema composition <br/> Queries will be handled directly by a worker. | 
 | | `id` | <a href="#id">ID</a>! | |
| **repositoryIndex**  | | [<a href="#repositoryindexitem">RepositoryIndexItem</a>!] | Returns the list of known repository identifiers |
| **worker**  | | <a href="#worker">Worker</a> | Look up worker by name | 
 | | `name` | <a href="#string">String</a>! | |
| **workers**  | | [<a href="#worker">Worker</a>!]! | Return all known workers |

## Mutation
| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **addIngestToGithubRepository**  | | <a href="#string">String</a>! | | 
 | | `installationId` | <a href="#string">String</a>! | | 
 | | `repositoryName` | <a href="#string">String</a>! | | 
 | | `repositoryOwner` | <a href="#string">String</a>! | |
| **cancelRecipeRun**  | | <a href="#id">ID</a>! | | 
 | | `id` | <a href="#id">ID</a>! | |
| **commitToBranch**  | | <a href="#branchresponse">BranchResponse</a>! | | 
 | | `branchName` | <a href="#string">String</a>! | | 
 | | `commit` | <a href="#string">String</a>! | | 
 | | `commitMessage` | <a href="#string">String</a>! | | 
 | | `recipeRunId` | <a href="#id">ID</a>! | | 
 | | `repositoryId` | <a href="#id">ID</a>! | | 
 | | `resultsLink` | <a href="#string">String</a>! | |
| **createAccessToken**  | | <a href="#string">String</a>! | | 
 | | `description` | <a href="#string">String</a> | |
| **createBranchFromResult**  | | <a href="#branchresponse">BranchResponse</a>! | | 
 | | `branchName` | <a href="#string">String</a>! | | 
 | | `commit` | <a href="#string">String</a>! | | 
 | | `commitMessage` | <a href="#string">String</a>! | | 
 | | `fork` | <a href="#boolean">Boolean</a>! | | 
 | | `recipeRunId` | <a href="#id">ID</a>! | | 
 | | `repositoryId` | <a href="#id">ID</a>! | | 
 | | `resultsLink` | <a href="#string">String</a>! | |
| **deleteAccessToken**  | | <a href="#boolean">Boolean</a>! | | 
 | | `id` | <a href="#id">ID</a>! | |
| **loadRecipes**  | | <a href="#recipeartifact">RecipeArtifact</a> | | 
 | | `artifactId` | <a href="#string">String</a>! | | 
 | | `datedSnapshotVersion` | <a href="#string">String</a> | | 
 | | `groupId` | <a href="#string">String</a>! | | 
 | | `version` | <a href="#string">String</a>! | |
| **runRecipe**  | | <a href="#reciperun">RecipeRun</a>! | | 
 | | `run` | <a href="#reciperuninput">RecipeRunInput</a>! | |
| **runYamlRecipe**  | | <a href="#reciperun">RecipeRun</a>! | | 
 | | `repositoryFilter` | [<a href="#id">ID</a>!] | | 
 | | `yaml` | <a href="#string">String</a>! | |

## Objects

### AccessTokenView

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **created**  | | <a href="#datetime">DateTime</a>! | |
| **description**  | | <a href="#string">String</a> | |
| **id**  | | <a href="#id">ID</a>! | |

### BranchResponse

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **branchName**  | | <a href="#string">String</a>! | |
| **commit**  | | <a href="#string">String</a>! | Commit SHA |
| **repository**  | | <a href="#githubrepository">GithubRepository</a>! | |

### Commit

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **branch**  | | <a href="#string">String</a>! | |
| **changeset**  | | <a href="#string">String</a>! | Git SHA |

### GithubAppInstallation

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **accountLogin**  | | <a href="#string">String</a>! | |
| **accountType**  | | <a href="#githubaccounttype">GithubAccountType</a>! | |
| **id**  | | <a href="#id">ID</a>! | |
| **repositories**  | | [<a href="#githubappinstallationrepository">GithubAppInstallationRepository</a>!]! | |

### GithubAppInstallationRepository

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **hasWorkflowInstalled**  | | <a href="#boolean">Boolean</a>! | |
| **isWorkflowRunInProgress**  | | <a href="#boolean">Boolean</a>! | |
| **lastWorkflowRunAt**  | | <a href="#datetime">DateTime</a> | |
| **repository**  | | <a href="#githubrepository">GithubRepository</a>! | |
| **wasLastWorkflowRunSuccessful**  | | <a href="#boolean">Boolean</a> | |

### GithubOrganization

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **id**  | | <a href="#id">ID</a>! | |
| **name**  | | <a href="#string">String</a>! | |
| **repositories**  | | [<a href="#githubrepository">GithubRepository</a>!]! | |
| **url**  | | <a href="#string">String</a>! | |

### GithubRepository

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **defaultBranch**  | | <a href="#string">String</a>! | |
| **fullName**  | | <a href="#string">String</a>! | |
| **id**  | | <a href="#id">ID</a>! | |
| **name**  | | <a href="#string">String</a>! | |
| **privateRepo**  | | <a href="#boolean">Boolean</a>! | |

### GithubUserAccessTokenResponse

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **accessToken**  | | <a href="#string">String</a>! | |
| **refreshToken**  | | <a href="#string">String</a>! | |

### Option

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **description**  | | <a href="#string">String</a>! | |
| **displayName**  | | <a href="#string">String</a>! | |
| **example**  | | <a href="#string">String</a> | |
| **name**  | | <a href="#string">String</a>! | |
| **required**  | | <a href="#boolean">Boolean</a>! | |
| **type**  | | <a href="#string">String</a>! | |
| **valid**  | | [<a href="#string">String</a>] | |
| **value**  | | <a href="#object">Object</a> | |

### Organization

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **id**  | | <a href="#id">ID</a>! | |
| **name**  | | <a href="#string">String</a>! | |

### Page

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **endCursor**  | | <a href="#string">String</a>! | |
| **hasNextPage**  | | <a href="#boolean">Boolean</a>! | |

### Recipe

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **description**  | | <a href="#string">String</a> | Note: May contain markdown formatting <br/> @markdown |
| **id**  | | <a href="#id">ID</a>! | Example: `org.openrewrite.java.testing.junit5.IgnoreToDisabled` |
| **languages**  | | [<a href="#string">String</a>!]! | |
| **name**  | | <a href="#string">String</a>! | Note: May contain markdown formatting <br/> @markdown |
| **options**  | | [<a href="#option">Option</a>!]! | |
| **recipeArtifact**  | | <a href="#recipeartifact">RecipeArtifact</a> | |
| **recipeList**  | | [<a href="#recipe">Recipe</a>!]! | |
| **tags**  | | [<a href="#string">String</a>!]! | |
| **totalRecipes**  | | <a href="#int">Int</a>! | |

### RecipeArtifact

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **artifactId**  | | <a href="#string">String</a>! | |
| **datedSnapshotVersion**  | | <a href="#string">String</a> | |
| **groupId**  | | <a href="#string">String</a>! | |
| **repositoryUrl**  | | <a href="#string">String</a> | |
| **requestedVersion**  | | <a href="#string">String</a>! | |
| **snapshotTime**  | | <a href="#datetime">DateTime</a> | The time from datedSnapshotVersion extracted into a DateTime <br/> for human readable presentation in time zones other than UTC |
| **version**  | | <a href="#string">String</a>! | |

### RecipeCategory

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **breadcrumbs**  | | [<a href="#recipecategorybreadcrumb">RecipeCategoryBreadcrumb</a>!]! | |
| **description**  | | <a href="#string">String</a> | @markdown |
| **id**  | | <a href="#id">ID</a>! | |
| **name**  | | <a href="#string">String</a>! | Captialization handled in services. <br/> Text transformation by client not required <br/> @markdown |
| **recipes**  | | [<a href="#recipe">Recipe</a>!]! | |
| **subCategories**  | | [<a href="#recipecategory">RecipeCategory</a>!]! | Sorted alphabetically by `RecipeCategory.name` |
| **tags**  | | [<a href="#string">String</a>!]! | |
| **totalRecipeCount**  | | <a href="#int">Int</a>! | |

### RecipeCategoryBreadcrumb

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **id**  | | <a href="#id">ID</a>! | |
| **name**  | | <a href="#string">String</a>! | |

### RecipeRun

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **id**  | | <a href="#id">ID</a>! | |
| **recipe**  | | <a href="#recipe">Recipe</a>! | |
| **repositoryFilter**  | | [<a href="#id">ID</a>!]! | |
| **start**  | | <a href="#datetime">DateTime</a>! | |
| **state**  | | <a href="#reciperunstate">RecipeRunState</a>! | |
| **summaryResults**  | | [<a href="#reciperunsummary">RecipeRunSummary</a>!]! | Sorted alphabetically by Repository ID |

### RecipeRunResultsByRepository

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **commit**  | | <a href="#commit">Commit</a>! | |
| **patchLink**  | | <a href="#string">String</a> | |
| **results**  | | <a href="#resultconnection">ResultConnection</a>! | |
| **totalResults**  | | <a href="#int">Int</a>! | |
| **totalSearched**  | | <a href="#int">Int</a>! | |

### RecipeRunSummary

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **commit**  | | <a href="#commit">Commit</a>! | |
| **lastUpdated**  | | <a href="#datetime">DateTime</a>! | |
| **repositoryId**  | | <a href="#id">ID</a>! | |
| **resultsLink**  | | <a href="#string">String</a> | The GraphQL endpoint that you can execute a RecipeRunResultsByRepository. <br/> When a worker is in Moderne's VPC, the API gateway serves as a redirect to <br/> the worker node. <br/>  <br/> @see https://api.moderne.io/worker/results?worker=abc123 |
| **runId**  | | <a href="#id">ID</a>! | |
| **state**  | | <a href="#reciperunsummarystate">RecipeRunSummaryState</a>! | |
| **stateMessage**  | | <a href="#string">String</a> | |
| **totalResults**  | | <a href="#int">Int</a>! | |
| **totalSearched**  | | <a href="#int">Int</a>! | |

### Repository

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **commit**  | | <a href="#commit">Commit</a>! | |
| **id**  | | <a href="#id">ID</a>! | Example: `netflix:eureka` |
| **ingested**  | | <a href="#datetime">DateTime</a>! | Example: `2021-05-13T11:56:29.818228-07:00` |
| **javaVersion**  | | <a href="#repositoryjavaversion">RepositoryJavaVersion</a> | |
| **name**  | | <a href="#string">String</a>! | Example: `eureka` |
| **organization**  | | <a href="#organization">Organization</a>! | Example: `netflix` |
| **sourceFilesByType**  | | [<a href="#sourcefiletypecount">SourceFileTypeCount</a>!]! | Example: {"fileType": "java", "count": 1392} |

### RepositoryIndexItem

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **id**  | | <a href="#id">ID</a>! | |
| **link**  | | <a href="#string">String</a>! | |

### RepositoryJavaVersion

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **createdBy**  | | <a href="#string">String</a>! | |
| **sourceCompatibility**  | | <a href="#string">String</a>! | |
| **targetCompatibility**  | | <a href="#string">String</a>! | |
| **vmVendor**  | | <a href="#string">String</a>! | |

### Result

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **after**  | | <a href="#string">String</a>! | |
| **afterSourcePath**  | | <a href="#string">String</a>! | |
| **before**  | | <a href="#string">String</a>! | |
| **beforeSourcePath**  | | <a href="#string">String</a>! | |
| **diff**  | | <a href="#string">String</a>! | |

### ResultConnection

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **edges**  | | [<a href="#resultedge">ResultEdge</a>!]! | |
| **pageInfo**  | | <a href="#page">Page</a>! | |

### ResultEdge

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **cursor**  | | <a href="#string">String</a>! | |
| **node**  | | <a href="#result">Result</a>! | |

### SourceFileTypeCount

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **count**  | | <a href="#int">Int</a>! | Example: 1392 |
| **fileType**  | | <a href="#string">String</a>! | Example: `java` |
| **linesOfCode**  | | <a href="#int">Int</a>! | |

### Worker

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **connectedSince**  | | <a href="#datetime">DateTime</a>! | |
| **name**  | | <a href="#string">String</a>! | |
| **repositories**  | | [<a href="#string">String</a>!]! | |

## Inputs

### OptionInput

Recipe option input value type depends on the particular recipe

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **name**  | | <a href="#string">String</a>! | Example: `methodPattern` |
| **value**  | | <a href="#object">Object</a>! | Example: `java.util.List add(..)` |

### RecipeInput

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **id**  | | <a href="#id">ID</a>! | Example: `org.openrewrite.java.search.FindMethods` |
| **options**  | | [<a href="#optioninput">OptionInput</a>!] | |

### RecipeRunInput

| Field | Argument | Type | Description | 
| ---- | ---- | ---- | ---- |
| **recipe**  | | <a href="#recipeinput">RecipeInput</a>! | |
| **repositoryFilter**  | | [<a href="#id">ID</a>!] | Send `null` to run on all repositories. <br/> Example: `airbnb:epoxy` |

## Enums

### ErrorDetail

| Value | Description |
| ---- | ---- |
| **DEADLINE_EXCEEDED**  | The deadline expired before the operation could complete. <br/>  <br/> For operations that change the state of the system, this error <br/> may be returned even if the operation has completed successfully. <br/> For example, a successful response from a server could have been <br/> delayed long enough for the deadline to expire. <br/>  <br/> HTTP Mapping: 504 Gateway Timeout <br/> Error Type: UNAVAILABLE | 
| **ENHANCE_YOUR_CALM**  | The server detected that the client is exhibiting a behavior that <br/> might be generating excessive load. <br/>  <br/> HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm <br/> Error Type: UNAVAILABLE | 
| **FIELD_NOT_FOUND**  | The requested field is not found in the schema. <br/>  <br/> This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a <br/> query is valid, but is unable to return a result (if, for example, a <br/> specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be <br/> returned by the server to signify that the requested field is not known to exist. <br/> This may be returned in lieu of failing the entire query. <br/> See also `PERMISSION_DENIED` for cases where the <br/> requested field is invalid only for the given user or class of users. <br/>  <br/> HTTP Mapping: 404 Not Found <br/> Error Type: BAD_REQUEST | 
| **INVALID_ARGUMENT**  | The client specified an invalid argument. <br/>  <br/> Note that this differs from `FAILED_PRECONDITION`. <br/> `INVALID_ARGUMENT` indicates arguments that are problematic <br/> regardless of the state of the system (e.g., a malformed file name). <br/>  <br/> HTTP Mapping: 400 Bad Request <br/> Error Type: BAD_REQUEST | 
| **INVALID_CURSOR**  | The provided cursor is not valid. <br/>  <br/> The most common usage for this error is when a client is paginating <br/> through a list that uses stateful cursors. In that case, the provided <br/> cursor may be expired. <br/>  <br/> HTTP Mapping: 404 Not Found <br/> Error Type: NOT_FOUND | 
| **MISSING_RESOURCE**  | Unable to perform operation because a required resource is missing. <br/>  <br/> Example: Client is attempting to refresh a list, but the specified <br/> list is expired. This requires an action by the client to get a new list. <br/>  <br/> If the user is simply trying GET a resource that is not found, <br/> use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE <br/> is to be used particularly when the user is performing an operation <br/> that requires a particular resource to exist. <br/>  <br/> HTTP Mapping: 400 Bad Request or 500 Internal Server Error <br/> Error Type: FAILED_PRECONDITION | 
| **SERVICE_ERROR**  | Service Error. <br/>  <br/> There is a problem with an upstream service. <br/>  <br/> This may be returned if a gateway receives an unknown error from a service <br/> or if a service is unreachable. <br/> If a request times out which waiting on a response from a service, <br/> `DEADLINE_EXCEEDED` may be returned instead. <br/> If a service returns a more specific error Type, the specific error Type may <br/> be returned instead. <br/>  <br/> HTTP Mapping: 502 Bad Gateway <br/> Error Type: UNAVAILABLE | 
| **TCP_FAILURE**  | Request failed due to network errors. <br/>  <br/> HTTP Mapping: 503 Unavailable <br/> Error Type: UNAVAILABLE | 
| **THROTTLED_CONCURRENCY**  | Request throttled based on server concurrency limits. <br/>  <br/> HTTP Mapping: 503 Unavailable <br/> Error Type: UNAVAILABLE | 
| **THROTTLED_CPU**  | Request throttled based on server CPU limits <br/>  <br/> HTTP Mapping: 503 Unavailable. <br/> Error Type: UNAVAILABLE | 
| **UNIMPLEMENTED**  | The operation is not implemented or is not currently supported/enabled. <br/>  <br/> HTTP Mapping: 501 Not Implemented <br/> Error Type: BAD_REQUEST | 
| **UNKNOWN**  | Unknown error. <br/>  <br/> This error should only be returned when no other error detail applies. <br/> If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN. <br/>  <br/> HTTP Mapping: 500 Internal Server Error | 

### ErrorType

| Value | Description |
| ---- | ---- |
| **BAD_REQUEST**  | Bad Request. <br/>  <br/> There is a problem with the request. <br/> Retrying the same request is not likely to succeed. <br/> An example would be a query or argument that cannot be deserialized. <br/>  <br/> HTTP Mapping: 400 Bad Request | 
| **FAILED_PRECONDITION**  | The operation was rejected because the system is not in a state <br/> required for the operation's execution.  For example, the directory <br/> to be deleted is non-empty, an rmdir operation is applied to <br/> a non-directory, etc. <br/>  <br/> Service implementers can use the following guidelines to decide <br/> between `FAILED_PRECONDITION` and `UNAVAILABLE`: <br/>  <br/> - Use `UNAVAILABLE` if the client can retry just the failing call. <br/> - Use `FAILED_PRECONDITION` if the client should not retry until <br/> the system state has been explicitly fixed.  E.g., if an "rmdir" <br/>      fails because the directory is non-empty, `FAILED_PRECONDITION` <br/> should be returned since the client should not retry unless <br/> the files are deleted from the directory. <br/>  <br/> HTTP Mapping: 400 Bad Request or 500 Internal Server Error | 
| **INTERNAL**  | Internal error. <br/>  <br/> An unexpected internal error was encountered. This means that some <br/> invariants expected by the underlying system have been broken. <br/> This error code is reserved for serious errors. <br/>  <br/> HTTP Mapping: 500 Internal Server Error | 
| **NOT_FOUND**  | The requested entity was not found. <br/>  <br/> This could apply to a resource that has never existed (e.g. bad resource id), <br/> or a resource that no longer exists (e.g. cache expired.) <br/>  <br/> Note to server developers: if a request is denied for an entire class <br/> of users, such as gradual feature rollout or undocumented allowlist, <br/> `NOT_FOUND` may be used. If a request is denied for some users within <br/> a class of users, such as user-based access control, `PERMISSION_DENIED` <br/> must be used. <br/>  <br/> HTTP Mapping: 404 Not Found | 
| **PERMISSION_DENIED**  | The caller does not have permission to execute the specified <br/> operation. <br/>  <br/> `PERMISSION_DENIED` must not be used for rejections <br/> caused by exhausting some resource or quota. <br/> `PERMISSION_DENIED` must not be used if the caller <br/> cannot be identified (use `UNAUTHENTICATED` <br/> instead for those errors). <br/>  <br/> This error Type does not imply the <br/> request is valid or the requested entity exists or satisfies <br/> other pre-conditions. <br/>  <br/> HTTP Mapping: 403 Forbidden | 
| **UNAUTHENTICATED**  | The request does not have valid authentication credentials. <br/>  <br/> This is intended to be returned only for routes that require <br/> authentication. <br/>  <br/> HTTP Mapping: 401 Unauthorized | 
| **UNAVAILABLE**  | Currently Unavailable. <br/>  <br/> The service is currently unavailable.  This is most likely a <br/> transient condition, which can be corrected by retrying with <br/> a backoff. <br/>  <br/> HTTP Mapping: 503 Unavailable | 
| **UNKNOWN**  | Unknown error. <br/>  <br/> For example, this error may be returned when <br/> an error code received from another address space belongs to <br/> an error space that is not known in this address space.  Also <br/> errors raised by APIs that do not return enough error information <br/> may be converted to this error. <br/>  <br/> If a client sees an unknown errorType, it will be interpreted as UNKNOWN. <br/> Unknown errors MUST NOT trigger any special behavior. These MAY be treated <br/> by an implementation as being equivalent to INTERNAL. <br/>  <br/> When possible, a more specific error should be provided. <br/>  <br/> HTTP Mapping: 520 Unknown Error | 

### GithubAccountType

| Value | Description |
| ---- | ---- |
| **Organization**  |  | 
| **User**  |  | 

### RecipeRunState

| Value | Description |
| ---- | ---- |
| **CANCELED**  |  | 
| **FINISHED**  |  | 
| **RUNNING**  |  | 

### RecipeRunSummaryState

| Value | Description |
| ---- | ---- |
| **CANCELED**  |  | 
| **CREATED**  |  | 
| **ERROR**  |  | 
| **FINISHED**  |  | 
| **LOADING**  |  | 
| **QUEUED**  |  | 
| **RUNNING**  |  | 
| **TIMEOUT**  |  | 
| **UNAVAILABLE**  |  | 

### SortOrder

| Value | Description |
| ---- | ---- |
| **ASC**  |  | 
| **DESC**  |  | 

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTime

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### Object

An object scalar

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

