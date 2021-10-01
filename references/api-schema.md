# Moderne.io GraphQL API


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
<td colspan="2" valign="top"><strong>accessTokens</strong></td>
<td valign="top">[<a href="#accesstokenview">AccessTokenView</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activeRecipeRuns</strong></td>
<td valign="top">[<a href="#reciperun">RecipeRun</a>!]!</td>
<td>

Get all currently active recipes by a user id (passed via header); sorted by most recent.

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
<td colspan="2" valign="top"><strong>allowedUsers</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#recipecategory">RecipeCategory</a>!</td>
<td>

Returns a single category with associated `recipes` and `subCategories`.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categoryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#eventconnection">EventConnection</a>!</td>
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
<td colspan="2" valign="top"><strong>findRecipes</strong></td>
<td valign="top">[<a href="#recipe">Recipe</a>!]!</td>
<td>

Search for recipes matching the supplied search query.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>githubApiTokenExists</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>githubAppInstallationRepositories</strong></td>
<td valign="top">[<a href="#githubappinstallationrepository">GithubAppInstallationRepository</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">installationId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>githubAppInstallations</strong></td>
<td valign="top">[<a href="#githubappinstallation">GithubAppInstallation</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>previousRecipeRuns</strong></td>
<td valign="top"><a href="#reciperunconnection">RecipeRunConnection</a>!</td>
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
<td colspan="2" align="right" valign="top">first</td>
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
<td valign="top">[<a href="#repositoryindexitem">RepositoryIndexItem</a>!]</td>
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
<td colspan="2" valign="top"><strong>recipeRunResults</strong></td>
<td valign="top"><a href="#reciperunresultsbyrepository">RecipeRunResultsByRepository</a>!</td>
<td>

This query is only a part of Recipe Execution for schema composition.
Queries are handled directly by a worker.

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
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunResultsByRepository</strong></td>
<td valign="top"><a href="#resultconnection">ResultConnection</a>!</td>
<td>

This query is only a part of Recipe Execution for schema composition
Queries are handled directly by a worker.

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
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Run ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Example: `Netflix:eureka`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipeRunSummaryByRepository</strong></td>
<td valign="top"><a href="#reciperunsummary">RecipeRunSummary</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Recipe Run ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Example: `Netflix:eureka`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipes</strong> ⚠️</td>
<td valign="top">[<a href="#recipe">Recipe</a>!]!</td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

use `recipe(id)` instead

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">names</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#repository">Repository</a>!</td>
<td>

This query is only a part of Recipe Execution for schema composition
Queries are handled directly by a worker.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryIndex</strong></td>
<td valign="top">[<a href="#repositoryindexitem">RepositoryIndexItem</a>!]</td>
<td>

Returns the list of known repository identifiers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceFilesChanged</strong></td>
<td valign="top">[<a href="#sourcefile">SourceFile</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commit</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">origin</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userAllowed</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userHasAccessToRepository</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Does the current user have access to the repositoryId?

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
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
<td colspan="2" valign="top"><strong>addAllowedUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addIngestToGithubRepository</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">installationId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryOwner</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelRecipeRun</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitToBranch</strong></td>
<td valign="top"><a href="#branchresponse">BranchResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">branchName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commit</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commitMessage</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipeRunId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resultsLink</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createAccessToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">description</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createBranchFromResult</strong></td>
<td valign="top"><a href="#branchresponse">BranchResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">branchName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commit</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">commitMessage</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">fork</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recipeRunId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">repositoryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resultsLink</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAccessToken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAllowedUser</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">username</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteGitHubApiToken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>exchangeGithubAuthorizationCode</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Exchanges a GitHub OAuth access code into an access token.

Successful exchanged tokens are stored for future use.

@see https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">code</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Temporary code returned from GitHub from Step 1 of the OAuth web application flow.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">redirectUri</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Valid redirect URI for the associated GitHub OAuth app.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loadRecipes</strong></td>
<td valign="top"><a href="#recipeartifact">RecipeArtifact</a></td>
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
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>runAdHocPolyglotRecipe</strong></td>
<td valign="top"><a href="#reciperun">RecipeRun</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#adhocreciperuninput">AdHocRecipeRunInput</a>!</td>
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
<td colspan="2" align="right" valign="top">repositoryFilter</td>
<td valign="top">[<a href="#id">ID</a>!]</td>
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
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### AccessTokenView

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
<td></td>
</tr>
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
</tbody>
</table>

### BranchResponse

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
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commit</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Commit SHA

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#githubrepository">GithubRepository</a>!</td>
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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actionType</strong></td>
<td valign="top"><a href="#actiontype">ActionType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
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

### GithubAppInstallation

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
<td colspan="2" valign="top"><strong>accountLogin</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>accountType</strong></td>
<td valign="top"><a href="#githubaccounttype">GithubAccountType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositories</strong></td>
<td valign="top">[<a href="#githubappinstallationrepository">GithubAppInstallationRepository</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### GithubAppInstallationRepository

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
<td colspan="2" valign="top"><strong>hasWorkflowInstalled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isWorkflowRunInProgress</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastWorkflowRunAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repository</strong></td>
<td valign="top"><a href="#githubrepository">GithubRepository</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>wasLastWorkflowRunSuccessful</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

### GithubOrganization

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

### GithubRepository

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
<td colspan="2" valign="top"><strong>defaultBranch</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fullName</strong></td>
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
<td colspan="2" valign="top"><strong>privateRepo</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### GithubUserAccessTokenResponse

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
<td colspan="2" valign="top"><strong>accessToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refreshToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
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
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
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
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#object">Object</a></td>
<td></td>
</tr>
</tbody>
</table>

### Organization

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
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Note: May contain markdown formatting
@markdown

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Example: `org.openrewrite.java.testing.junit5.IgnoreToDisabled`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>languages</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Note: May contain markdown formatting
@markdown

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#option">Option</a>!]!</td>
<td></td>
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
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalRecipes</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
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
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

@markdown

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Services handle capitalization of `name`.
Clients are responsible for parsing and formatting Markdown to HTML
@markdown

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipes</strong></td>
<td valign="top">[<a href="#recipe">Recipe</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subCategories</strong></td>
<td valign="top">[<a href="#recipecategory">RecipeCategory</a>!]!</td>
<td>

Categories are sorted alphabetically by `RecipeCategory.name`.

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
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong></td>
<td valign="top"><a href="#recipe">Recipe</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryFilter</strong></td>
<td valign="top">[<a href="#id">ID</a>!]!</td>
<td></td>
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
<td colspan="2" valign="top"><strong>summaryResults</strong></td>
<td valign="top">[<a href="#reciperunsummary">RecipeRunSummary</a>!]!</td>
<td>

Sorted alphabetically by Repository ID

</td>
</tr>
</tbody>
</table>

### RecipeRunConnection

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
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#reciperunedge">RecipeRunEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunEdge

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
<td valign="top"><a href="#reciperun">RecipeRun</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecipeRunResultsByRepository

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
<td valign="top"><a href="#commit">Commit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>patchLink</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>results</strong></td>
<td valign="top"><a href="#resultconnection">ResultConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalResults</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalSearched</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
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
<td valign="top"><a href="#commit">Commit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastUpdated</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resultsLink</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The GraphQL endpoint that you can execute a `RecipeRunResultsByRepository`.
When a worker is in Moderne's VPC, the API gateway redirects to the worker node.

@see https://api.moderne.io/worker/results?worker=abc123

</td>
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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalResults</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalSearched</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
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
<td colspan="2" valign="top"><strong>commit</strong></td>
<td valign="top"><a href="#commit">Commit</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Example: `netflix:eureka`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ingested</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

Example: `2021-05-13T11:56:29.818228-07:00`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>javaVersion</strong></td>
<td valign="top"><a href="#repositoryjavaversion">RepositoryJavaVersion</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `eureka`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>organization</strong></td>
<td valign="top"><a href="#organization">Organization</a>!</td>
<td>

Example: `netflix`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceFilesByType</strong></td>
<td valign="top">[<a href="#sourcefiletypecount">SourceFileTypeCount</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryIndexItem

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
<td colspan="2" valign="top"><strong>link</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RepositoryJavaVersion

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
<td colspan="2" valign="top"><strong>createdBy</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceCompatibility</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>targetCompatibility</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>vmVendor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Result

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
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>afterSourcePath</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>before</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>beforeSourcePath</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>diff</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ResultConnection

 Pagination Types - Results

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
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#resultedge">ResultEdge</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### ResultEdge

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
<td valign="top"><a href="#result">Result</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SourceFile

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

### SourceFileTypeCount

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
<td>

`count` represents the number of files of this type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fileType</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Example: `java`

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linesOfCode</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Cumulative count of lines across all the files of this type.

</td>
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
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### AdHocRecipeInput

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#optioninput">OptionInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#base64">Base64</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourcePath</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AdHocRecipeRunInput

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
<td colspan="2" valign="top"><strong>partialRepository</strong></td>
<td valign="top"><a href="#partialrepositoryinput">PartialRepositoryInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong></td>
<td valign="top"><a href="#adhocrecipeinput">AdHocRecipeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryFilter</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Send `null` to run on all repositories.
Example: `airbnb:epoxy`

</td>
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
<td valign="top"><a href="#commitinput">CommitInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceFiles</strong></td>
<td valign="top">[<a href="#sourcefileinput">SourceFileInput</a>!]!</td>
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
<td colspan="2" valign="top"><strong>partialRepository</strong></td>
<td valign="top"><a href="#partialrepositoryinput">PartialRepositoryInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recipe</strong></td>
<td valign="top"><a href="#recipeinput">RecipeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repositoryFilter</strong></td>
<td valign="top">[<a href="#id">ID</a>!]</td>
<td>

Send `null` to run on all repositories.
Example: `airbnb:epoxy`

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

### GithubAccountType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Organization</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>User</strong></td>
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
<td valign="top"><strong>TIMEOUT</strong></td>
<td>

A worker was unable to process this recipe in a reasonable amount of time.

</td>
</tr>
<tr>
<td valign="top"><strong>UNAVAILABLE</strong></td>
<td>

A worker was unavailable to process this recipe.

</td>
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

## Scalars

### Base64

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTime

### Duration

String in ISO-8601.
Example: `PT10S` -> 10 seconds

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### Object

An object scalar

### Path

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

