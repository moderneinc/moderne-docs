# GraphQL API Documentation

## Query

| Field | Argument | Type | Description |
| :--- | :--- | :--- | :--- |
| **accessTokens** |  | \[[AccessTokenView](api-schema.md#accesstokenview)!\]! |  |
| **activeRecipeRuns** |  | \[[RecipeRun](api-schema.md#reciperun)!\]! | Get all currently active recipe runs by a user id \(passed via header\) sorted by most recent |
|  | `limit` | [Int](api-schema.md#int) |  |
|  | `sortOrder` | [SortOrder](api-schema.md#sortorder) |  |
| **category** |  | [RecipeCategory](api-schema.md#recipecategory)! | Returns a single category with associated `recipes` and `subCategories` |
|  | `categoryId` | [ID](api-schema.md#id)! |  |
| **findRecipes** |  | \[[Recipe](api-schema.md#recipe)!\]! | Search for recipes by `query` |
|  | `query` | [String](api-schema.md#string)! |  |
| **githubAppInstallationRepositories** |  | \[[GithubAppInstallationRepository](api-schema.md#githubappinstallationrepository)!\]! |  |
|  | `installationId` | [ID](api-schema.md#id)! |  |
| **githubAppInstallations** |  | \[[GithubAppInstallation](api-schema.md#githubappinstallation)!\]! |  |
| **githubOrganizations** |  | \[[GithubOrganization](api-schema.md#githuborganization)!\]! | Github Organizations the user belong to, includes public and private |
|  | `name` | [String](api-schema.md#string) | Optional name to filter user's organizations by |
| **githubRepositories** |  | \[[GithubRepository](api-schema.md#githubrepository)!\]! | Github Repositories owned by the user directly, not an organization |
| **previousRecipeRuns** |  | \[[RecipeRun](api-schema.md#reciperun)!\]! | Get all recipe runs by a user id \(passed via header\) sorted by most recent |
|  | `limit` | [Int](api-schema.md#int) |  |
|  | `sortOrder` | [SortOrder](api-schema.md#sortorder) |  |
| **recipe** |  | [Recipe](api-schema.md#recipe)! | Look up single recipe record by `id` \n   Example: id: `org.openrewrite.java.testing.junit5.IgnoreToDisabled` |
|  | `id` | [ID](api-schema.md#id)! |  |
| **recipeArtifacts** |  | \[[RecipeArtifact](api-schema.md#recipeartifact)!\]! | Return all loaded recipe artifacts |
| **recipeRun** |  | [RecipeRun](api-schema.md#reciperun)! |  |
|  | `id` | [ID](api-schema.md#id)! |  |
| **recipeRunResults** |  | [RecipeRunResultsByRepository](api-schema.md#reciperunresultsbyrepository)! | This query is only apart of MRE for the purposes of schema composition   Queries will be handled directly by a worker. |
|  | `after` | [String](api-schema.md#string) |  |
|  | `first` | [Int](api-schema.md#int) |  |
|  | `id` | [ID](api-schema.md#id)! |  |
|  | `repositoryId` | [ID](api-schema.md#id)! |  |
| **recipeRunResultsByRepository** |  | [ResultConnection](api-schema.md#resultconnection)! | This query is only apart of MRE for the purposes of schema composition   Queries will be handled directly by a worker. |
|  | `after` | [String](api-schema.md#string) |  |
|  | `first` | [Int](api-schema.md#int) |  |
|  | `id` | [ID](api-schema.md#id)! | Run ID |
|  | `query` | [String](api-schema.md#string) |  |
|  | `repositoryId` | [ID](api-schema.md#id)! | Example: `Netflix:eureka` |
| **recipeRunSummaryByRepository** |  | [RecipeRunSummary](api-schema.md#reciperunsummary)! |  |
|  | `id` | [ID](api-schema.md#id)! | Recipe Run ID |
|  | `repositoryId` | [ID](api-schema.md#id)! | Example: `Netflix:eureka` |
| **recipes**  ⚠️ |  | \[[Recipe](api-schema.md#recipe)!\]! | Returns multiple recipes matching the list of strings provided   @Deprecated -- use recipe\(id\) instead   {% hint style="warning" %} **DEPRECATED** - use `recipe(id)` instead{% hint %} |
|  | `names` | \[[String](api-schema.md#string)!\]! |  |
| **repository** |  | [Repository](api-schema.md#repository)! | This query is only apart of MRE for the purposes of schema composition   Queries will be handled directly by a worker. |
|  | `id` | [ID](api-schema.md#id)! |  |
| **repositoryIndex** |  | \[[RepositoryIndexItem](api-schema.md#repositoryindexitem)!\] | Returns the list of known repository identifiers |
| **worker** |  | [Worker](api-schema.md#worker) | Look up worker by name |
|  | `name` | [String](api-schema.md#string)! |  |
| **workers** |  | \[[Worker](api-schema.md#worker)!\]! | Return all known workers |

## Mutation

| Field | Argument | Type | Description |
| :--- | :--- | :--- | :--- |
| **addIngestToGithubRepository** |  | [String](api-schema.md#string)! |  |
|  | `installationId` | [String](api-schema.md#string)! |  |
|  | `repositoryName` | [String](api-schema.md#string)! |  |
|  | `repositoryOwner` | [String](api-schema.md#string)! |  |
| **cancelRecipeRun** |  | [ID](api-schema.md#id)! |  |
|  | `id` | [ID](api-schema.md#id)! |  |
| **commitToBranch** |  | [BranchResponse](api-schema.md#branchresponse)! |  |
|  | `branchName` | [String](api-schema.md#string)! |  |
|  | `commit` | [String](api-schema.md#string)! |  |
|  | `commitMessage` | [String](api-schema.md#string)! |  |
|  | `recipeRunId` | [ID](api-schema.md#id)! |  |
|  | `repositoryId` | [ID](api-schema.md#id)! |  |
|  | `resultsLink` | [String](api-schema.md#string)! |  |
| **createAccessToken** |  | [String](api-schema.md#string)! |  |
|  | `description` | [String](api-schema.md#string) |  |
| **createBranchFromResult** |  | [BranchResponse](api-schema.md#branchresponse)! |  |
|  | `branchName` | [String](api-schema.md#string)! |  |
|  | `commit` | [String](api-schema.md#string)! |  |
|  | `commitMessage` | [String](api-schema.md#string)! |  |
|  | `fork` | [Boolean](api-schema.md#boolean)! |  |
|  | `recipeRunId` | [ID](api-schema.md#id)! |  |
|  | `repositoryId` | [ID](api-schema.md#id)! |  |
|  | `resultsLink` | [String](api-schema.md#string)! |  |
| **deleteAccessToken** |  | [Boolean](api-schema.md#boolean)! |  |
|  | `id` | [ID](api-schema.md#id)! |  |
| **loadRecipes** |  | [RecipeArtifact](api-schema.md#recipeartifact) |  |
|  | `artifactId` | [String](api-schema.md#string)! |  |
|  | `datedSnapshotVersion` | [String](api-schema.md#string) |  |
|  | `groupId` | [String](api-schema.md#string)! |  |
|  | `version` | [String](api-schema.md#string)! |  |
| **runRecipe** |  | [RecipeRun](api-schema.md#reciperun)! |  |
|  | `run` | [RecipeRunInput](api-schema.md#reciperuninput)! |  |
| **runYamlRecipe** |  | [RecipeRun](api-schema.md#reciperun)! |  |
|  | `repositoryFilter` | \[[ID](api-schema.md#id)!\] |  |
|  | `yaml` | [String](api-schema.md#string)! |  |

## Objects

### AccessTokenView

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **created** |  | [DateTime](api-schema.md#datetime)! |  |
| **description** |  | [String](api-schema.md#string) |  |
| **id** |  | [ID](api-schema.md#id)! |  |

### BranchResponse

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **branchName** |  | [String](api-schema.md#string)! |  |
| **commit** |  | [String](api-schema.md#string)! | Commit SHA |
| **repository** |  | [GithubRepository](api-schema.md#githubrepository)! |  |

### Commit

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **branch** |  | [String](api-schema.md#string)! |  |
| **changeset** |  | [String](api-schema.md#string)! | Git SHA |

### GithubAppInstallation

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **accountLogin** |  | [String](api-schema.md#string)! |  |
| **accountType** |  | [GithubAccountType](api-schema.md#githubaccounttype)! |  |
| **id** |  | [ID](api-schema.md#id)! |  |
| **repositories** |  | \[[GithubAppInstallationRepository](api-schema.md#githubappinstallationrepository)!\]! |  |

### GithubAppInstallationRepository

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **hasWorkflowInstalled** |  | [Boolean](api-schema.md#boolean)! |  |
| **isWorkflowRunInProgress** |  | [Boolean](api-schema.md#boolean)! |  |
| **lastWorkflowRunAt** |  | [DateTime](api-schema.md#datetime) |  |
| **repository** |  | [GithubRepository](api-schema.md#githubrepository)! |  |
| **wasLastWorkflowRunSuccessful** |  | [Boolean](api-schema.md#boolean) |  |

### GithubOrganization

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **id** |  | [ID](api-schema.md#id)! |  |
| **name** |  | [String](api-schema.md#string)! |  |
| **repositories** |  | \[[GithubRepository](api-schema.md#githubrepository)!\]! |  |
| **url** |  | [String](api-schema.md#string)! |  |

### GithubRepository

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **defaultBranch** |  | [String](api-schema.md#string)! |  |
| **fullName** |  | [String](api-schema.md#string)! |  |
| **id** |  | [ID](api-schema.md#id)! |  |
| **name** |  | [String](api-schema.md#string)! |  |
| **privateRepo** |  | [Boolean](api-schema.md#boolean)! |  |

### GithubUserAccessTokenResponse

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **accessToken** |  | [String](api-schema.md#string)! |  |
| **refreshToken** |  | [String](api-schema.md#string)! |  |

### Option

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **description** |  | [String](api-schema.md#string)! |  |
| **displayName** |  | [String](api-schema.md#string)! |  |
| **example** |  | [String](api-schema.md#string) |  |
| **name** |  | [String](api-schema.md#string)! |  |
| **required** |  | [Boolean](api-schema.md#boolean)! |  |
| **type** |  | [String](api-schema.md#string)! |  |
| **valid** |  | \[[String](api-schema.md#string)\] |  |
| **value** |  | [Object](api-schema.md#object) |  |

### Organization

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **id** |  | [ID](api-schema.md#id)! |  |
| **name** |  | [String](api-schema.md#string)! |  |

### Page

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **endCursor** |  | [String](api-schema.md#string)! |  |
| **hasNextPage** |  | [Boolean](api-schema.md#boolean)! |  |

### Recipe

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **description** |  | [String](api-schema.md#string) | Note: May contain markdown formatting   @markdown |
| **id** |  | [ID](api-schema.md#id)! | Example: `org.openrewrite.java.testing.junit5.IgnoreToDisabled` |
| **languages** |  | \[[String](api-schema.md#string)!\]! |  |
| **name** |  | [String](api-schema.md#string)! | Note: May contain markdown formatting   @markdown |
| **options** |  | \[[Option](api-schema.md#option)!\]! |  |
| **recipeArtifact** |  | [RecipeArtifact](api-schema.md#recipeartifact) |  |
| **recipeList** |  | \[[Recipe](api-schema.md#recipe)!\]! |  |
| **tags** |  | \[[String](api-schema.md#string)!\]! |  |
| **totalRecipes** |  | [Int](api-schema.md#int)! |  |

### RecipeArtifact

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **artifactId** |  | [String](api-schema.md#string)! |  |
| **datedSnapshotVersion** |  | [String](api-schema.md#string) |  |
| **groupId** |  | [String](api-schema.md#string)! |  |
| **repositoryUrl** |  | [String](api-schema.md#string) |  |
| **requestedVersion** |  | [String](api-schema.md#string)! |  |
| **snapshotTime** |  | [DateTime](api-schema.md#datetime) | The time from datedSnapshotVersion extracted into a DateTime   for human readable presentation in time zones other than UTC |
| **version** |  | [String](api-schema.md#string)! |  |

### RecipeCategory

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **breadcrumbs** |  | \[[RecipeCategoryBreadcrumb](api-schema.md#recipecategorybreadcrumb)!\]! |  |
| **description** |  | [String](api-schema.md#string) | @markdown |
| **id** |  | [ID](api-schema.md#id)! |  |
| **name** |  | [String](api-schema.md#string)! | Captialization handled in services.   Text transformation by client not required   @markdown |
| **recipes** |  | \[[Recipe](api-schema.md#recipe)!\]! |  |
| **subCategories** |  | \[[RecipeCategory](api-schema.md#recipecategory)!\]! | Sorted alphabetically by `RecipeCategory.name` |
| **tags** |  | \[[String](api-schema.md#string)!\]! |  |
| **totalRecipeCount** |  | [Int](api-schema.md#int)! |  |

### RecipeCategoryBreadcrumb

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **id** |  | [ID](api-schema.md#id)! |  |
| **name** |  | [String](api-schema.md#string)! |  |

### RecipeRun

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **id** |  | [ID](api-schema.md#id)! |  |
| **recipe** |  | [Recipe](api-schema.md#recipe)! |  |
| **repositoryFilter** |  | \[[ID](api-schema.md#id)!\]! |  |
| **start** |  | [DateTime](api-schema.md#datetime)! |  |
| **state** |  | [RecipeRunState](api-schema.md#reciperunstate)! |  |
| **summaryResults** |  | \[[RecipeRunSummary](api-schema.md#reciperunsummary)!\]! | Sorted alphabetically by Repository ID |

### RecipeRunResultsByRepository

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **commit** |  | [Commit](api-schema.md#commit)! |  |
| **patchLink** |  | [String](api-schema.md#string) |  |
| **results** |  | [ResultConnection](api-schema.md#resultconnection)! |  |
| **totalResults** |  | [Int](api-schema.md#int)! |  |
| **totalSearched** |  | [Int](api-schema.md#int)! |  |

### RecipeRunSummary

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **commit** |  | [Commit](api-schema.md#commit)! |  |
| **lastUpdated** |  | [DateTime](api-schema.md#datetime)! |  |
| **repositoryId** |  | [ID](api-schema.md#id)! |  |
| **resultsLink** |  | [String](api-schema.md#string) | The GraphQL endpoint that you can execute a RecipeRunResultsByRepository.   When a worker is in Moderne's VPC, the API gateway serves as a redirect to   the worker node.      @see [https://api.moderne.io/worker/results?worker=abc123](https://api.moderne.io/worker/results?worker=abc123) |
| **runId** |  | [ID](api-schema.md#id)! |  |
| **state** |  | [RecipeRunSummaryState](api-schema.md#reciperunsummarystate)! |  |
| **stateMessage** |  | [String](api-schema.md#string) |  |
| **totalResults** |  | [Int](api-schema.md#int)! |  |
| **totalSearched** |  | [Int](api-schema.md#int)! |  |

### Repository

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **commit** |  | [Commit](api-schema.md#commit)! |  |
| **id** |  | [ID](api-schema.md#id)! | Example: `netflix:eureka` |
| **ingested** |  | [DateTime](api-schema.md#datetime)! | Example: `2021-05-13T11:56:29.818228-07:00` |
| **javaVersion** |  | [RepositoryJavaVersion](api-schema.md#repositoryjavaversion) |  |
| **name** |  | [String](api-schema.md#string)! | Example: `eureka` |
| **organization** |  | [Organization](api-schema.md#organization)! | Example: `netflix` |
| **sourceFilesByType** |  | \[[SourceFileTypeCount](api-schema.md#sourcefiletypecount)!\]! | Example: {"fileType": "java", "count": 1392} |

### RepositoryIndexItem

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **id** |  | [ID](api-schema.md#id)! |  |
| **link** |  | [String](api-schema.md#string)! |  |

### RepositoryJavaVersion

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **createdBy** |  | [String](api-schema.md#string)! |  |
| **sourceCompatibility** |  | [String](api-schema.md#string)! |  |
| **targetCompatibility** |  | [String](api-schema.md#string)! |  |
| **vmVendor** |  | [String](api-schema.md#string)! |  |

### Result

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **after** |  | [String](api-schema.md#string)! |  |
| **afterSourcePath** |  | [String](api-schema.md#string)! |  |
| **before** |  | [String](api-schema.md#string)! |  |
| **beforeSourcePath** |  | [String](api-schema.md#string)! |  |
| **diff** |  | [String](api-schema.md#string)! |  |

### ResultConnection

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **edges** |  | \[[ResultEdge](api-schema.md#resultedge)!\]! |  |
| **pageInfo** |  | [Page](api-schema.md#page)! |  |

### ResultEdge

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **cursor** |  | [String](api-schema.md#string)! |  |
| **node** |  | [Result](api-schema.md#result)! |  |

### SourceFileTypeCount

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **count** |  | [Int](api-schema.md#int)! | Example: 1392 |
| **fileType** |  | [String](api-schema.md#string)! | Example: `java` |
| **linesOfCode** |  | [Int](api-schema.md#int)! |  |

### Worker

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **connectedSince** |  | [DateTime](api-schema.md#datetime)! |  |
| **name** |  | [String](api-schema.md#string)! |  |
| **repositories** |  | \[[String](api-schema.md#string)!\]! |  |

## Inputs

### OptionInput

Recipe option input value type depends on the particular recipe

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **name** |  | [String](api-schema.md#string)! | Example: `methodPattern` |
| **value** |  | [Object](api-schema.md#object)! | Example: `java.util.List add(..)` |

### RecipeInput

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **id** |  | [ID](api-schema.md#id)! | Example: `org.openrewrite.java.search.FindMethods` |
| **options** |  | \[[OptionInput](api-schema.md#optioninput)!\] |  |

### RecipeRunInput

| Field |  | Type | Description |
| :--- | :--- | :--- | :--- |
| **recipe** |  | [RecipeInput](api-schema.md#recipeinput)! |  |
| **repositoryFilter** |  | \[[ID](api-schema.md#id)!\] | Send `null` to run on all repositories.   Example: `airbnb:epoxy` |

## Enums

### ErrorDetail

| Value | Description |
| :--- | :--- |
| **DEADLINE\_EXCEEDED** | The deadline expired before the operation could complete.      For operations that change the state of the system, this error   may be returned even if the operation has completed successfully.   For example, a successful response from a server could have been   delayed long enough for the deadline to expire.      HTTP Mapping: 504 Gateway Timeout   Error Type: UNAVAILABLE |
| **ENHANCE\_YOUR\_CALM** | The server detected that the client is exhibiting a behavior that   might be generating excessive load.      HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm   Error Type: UNAVAILABLE |
| **FIELD\_NOT\_FOUND** | The requested field is not found in the schema.      This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a   query is valid, but is unable to return a result \(if, for example, a   specific video id doesn't exist\). `FIELD_NOT_FOUND` is intended to be   returned by the server to signify that the requested field is not known to exist.   This may be returned in lieu of failing the entire query.   See also `PERMISSION_DENIED` for cases where the   requested field is invalid only for the given user or class of users.      HTTP Mapping: 404 Not Found   Error Type: BAD\_REQUEST |
| **INVALID\_ARGUMENT** | The client specified an invalid argument.      Note that this differs from `FAILED_PRECONDITION`.   `INVALID_ARGUMENT` indicates arguments that are problematic   regardless of the state of the system \(e.g., a malformed file name\).      HTTP Mapping: 400 Bad Request   Error Type: BAD\_REQUEST |
| **INVALID\_CURSOR** | The provided cursor is not valid.      The most common usage for this error is when a client is paginating   through a list that uses stateful cursors. In that case, the provided   cursor may be expired.      HTTP Mapping: 404 Not Found   Error Type: NOT\_FOUND |
| **MISSING\_RESOURCE** | Unable to perform operation because a required resource is missing.      Example: Client is attempting to refresh a list, but the specified   list is expired. This requires an action by the client to get a new list.      If the user is simply trying GET a resource that is not found,   use the NOT\_FOUND error type. FAILED\_PRECONDITION.MISSING\_RESOURCE   is to be used particularly when the user is performing an operation   that requires a particular resource to exist.      HTTP Mapping: 400 Bad Request or 500 Internal Server Error   Error Type: FAILED\_PRECONDITION |
| **SERVICE\_ERROR** | Service Error.      There is a problem with an upstream service.      This may be returned if a gateway receives an unknown error from a service   or if a service is unreachable.   If a request times out which waiting on a response from a service,   `DEADLINE_EXCEEDED` may be returned instead.   If a service returns a more specific error Type, the specific error Type may   be returned instead.      HTTP Mapping: 502 Bad Gateway   Error Type: UNAVAILABLE |
| **TCP\_FAILURE** | Request failed due to network errors.      HTTP Mapping: 503 Unavailable   Error Type: UNAVAILABLE |
| **THROTTLED\_CONCURRENCY** | Request throttled based on server concurrency limits.      HTTP Mapping: 503 Unavailable   Error Type: UNAVAILABLE |
| **THROTTLED\_CPU** | Request throttled based on server CPU limits      HTTP Mapping: 503 Unavailable.   Error Type: UNAVAILABLE |
| **UNIMPLEMENTED** | The operation is not implemented or is not currently supported/enabled.      HTTP Mapping: 501 Not Implemented   Error Type: BAD\_REQUEST |
| **UNKNOWN** | Unknown error.      This error should only be returned when no other error detail applies.   If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.      HTTP Mapping: 500 Internal Server Error |

### ErrorType

| Value | Description |
| :--- | :--- |
| **BAD\_REQUEST** | Bad Request.      There is a problem with the request.   Retrying the same request is not likely to succeed.   An example would be a query or argument that cannot be deserialized.      HTTP Mapping: 400 Bad Request |
| **FAILED\_PRECONDITION** | The operation was rejected because the system is not in a state   required for the operation's execution.  For example, the directory   to be deleted is non-empty, an rmdir operation is applied to   a non-directory, etc.      Service implementers can use the following guidelines to decide   between `FAILED_PRECONDITION` and `UNAVAILABLE`:      - Use `UNAVAILABLE` if the client can retry just the failing call.   - Use `FAILED_PRECONDITION` if the client should not retry until   the system state has been explicitly fixed.  E.g., if an "rmdir"        fails because the directory is non-empty, `FAILED_PRECONDITION`   should be returned since the client should not retry unless   the files are deleted from the directory.      HTTP Mapping: 400 Bad Request or 500 Internal Server Error |
| **INTERNAL** | Internal error.      An unexpected internal error was encountered. This means that some   invariants expected by the underlying system have been broken.   This error code is reserved for serious errors.      HTTP Mapping: 500 Internal Server Error |
| **NOT\_FOUND** | The requested entity was not found.      This could apply to a resource that has never existed \(e.g. bad resource id\),   or a resource that no longer exists \(e.g. cache expired.\)      Note to server developers: if a request is denied for an entire class   of users, such as gradual feature rollout or undocumented allowlist,   `NOT_FOUND` may be used. If a request is denied for some users within   a class of users, such as user-based access control, `PERMISSION_DENIED`   must be used.      HTTP Mapping: 404 Not Found |
| **PERMISSION\_DENIED** | The caller does not have permission to execute the specified   operation.      `PERMISSION_DENIED` must not be used for rejections   caused by exhausting some resource or quota.   `PERMISSION_DENIED` must not be used if the caller   cannot be identified \(use `UNAUTHENTICATED`   instead for those errors\).      This error Type does not imply the   request is valid or the requested entity exists or satisfies   other pre-conditions.      HTTP Mapping: 403 Forbidden |
| **UNAUTHENTICATED** | The request does not have valid authentication credentials.      This is intended to be returned only for routes that require   authentication.      HTTP Mapping: 401 Unauthorized |
| **UNAVAILABLE** | Currently Unavailable.      The service is currently unavailable.  This is most likely a   transient condition, which can be corrected by retrying with   a backoff.      HTTP Mapping: 503 Unavailable |
| **UNKNOWN** | Unknown error.      For example, this error may be returned when   an error code received from another address space belongs to   an error space that is not known in this address space.  Also   errors raised by APIs that do not return enough error information   may be converted to this error.      If a client sees an unknown errorType, it will be interpreted as UNKNOWN.   Unknown errors MUST NOT trigger any special behavior. These MAY be treated   by an implementation as being equivalent to INTERNAL.      When possible, a more specific error should be provided.      HTTP Mapping: 520 Unknown Error |

### GithubAccountType

| Value | Description |
| :--- | :--- |
| **Organization** |  |
| **User** |  |

### RecipeRunState

| Value | Description |
| :--- | :--- |
| **CANCELED** |  |
| **FINISHED** |  |
| **RUNNING** |  |

### RecipeRunSummaryState

| Value | Description |
| :--- | :--- |
| **CANCELED** |  |
| **CREATED** |  |
| **ERROR** |  |
| **FINISHED** |  |
| **LOADING** |  |
| **QUEUED** |  |
| **RUNNING** |  |
| **TIMEOUT** |  |
| **UNAVAILABLE** |  |

### SortOrder

| Value | Description |
| :--- | :--- |
| **ASC** |  |
| **DESC** |  |

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTime

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string \(such as `"4"`\) or integer \(such as `4`\) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -\(2^31\) and 2^31 - 1.

### Object

An object scalar

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

