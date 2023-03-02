# Changelog

### UI v9.56.0 (2023/02/14)

Repository Groups has been refreshed. The global menu will now separate Organizations that are defined by either the Moderne Agent or your implementation of the Moderne Organization service and _Repository groups_ that are locally curated collections of repositories.&#x20;

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

We've also added some visual touches to better group icons in the top navigation as well as providing you with a quick visual cue of the current selection.

### UI v9.51.0 (2023/02/01)

A new option has been added to the Pull Request form to allow or disallow the reopening of closed pull requests.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-02-01 at 4.46.48 PM.png" alt=""><figcaption></figcaption></figure>

`See how to run against the API` link has been added to the commit form as well. This will show the GraphQL for the action.

<figure><img src="../.gitbook/assets/Screenshot 2023-02-01 at 4.47.03 PM.png" alt=""><figcaption></figcaption></figure>

### UI v9.46.0 (2023/01/21)

Data tables: Recipes can now emit tabular data according to a schema that they define.

<figure><img src="../.gitbook/assets/image (13) (2).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

### UI v9.44.0 (2023/01/21)

#### Repository quick view

Hover over the info icon to quickly view more information including the commit that the artifact was generated from and when it was ingested into the platform.

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

### UI v9.41.0 (2023/01/17)

#### Removal of the default repository group `All`

Moderne SaaS no longer provides a default named repository group called `All` that represents all ingested repositories. Customers can [define their own named repository group](../how-to/on-premise-agent/configure-repository-groups.md) through Agent to provide this functionality. See the example below.

```json
{
  "All": {
    "name": "All",
    "repositories": null
  },
  "Default": {
    "name": "Default",
    "repositories": [...]
  }
}
```

### UI v9.39.0 (2023/01/11)

#### Actions moved to left

Actions for grids are now presented on the left-hand side of the table.&#x20;

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

### UI v9.37.0 (2023/01/10)

#### Bitbucket Cloud support

Repositories hosted on Bitbucket cloud are now supported. This [requires additional configuration through your agent](../how-to/on-premise-agent/configure-bitbucket-cloud-to-agent.md#prerequisites).

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

### UI v9.35.0 (2022/12/30)

#### Admin token management

We have added the ability for admins to view and revoke Moderne personal access tokens of any user.  There is now a new Access tokens page under the admin navigations:\
![](<../.gitbook/assets/image (23) (1).png>)\


#### Improved keyboard shortcuts

While addressing some keyboard shortcuts that were reported to conflict with certain browsers we overhauled the keyboard shortcuts to primarily use single key commands and added more.  These commands will not fire if the focus of the browser is in a text input or any control like field.  Additionally, we have provided a new short cut cheat sheet that is activated with `shift`+`?`&#x20;

![](<../.gitbook/assets/image (24).png>)

#### Recipe source links

We want to improve users and recipe authors' experience finding source code for a particular recipe.  We have added on the recipe details pages a link on OpenRewrite recipes that will use a specialized GitHub search query to find the source.  We have plans to expand this functionality in the future.\


<figure><img src="../.gitbook/assets/image (3) (3).png" alt=""><figcaption></figcaption></figure>

### UI v9.31.0 (2022/12/16)

#### Support for adding applicability tests to builder recipes

The "Add to builder" button now has an additional drop-down to support adding the current recipe to the builder as an applicability test.

These tests currently come in two variants:

* `singleSource` - The custom recipe will _**only be run on those source files**_ that would have been changed by _**all**_ `singleSource` test recipes.&#x20;
* `anySource` - The custom recipe will run on _**all**_ _**source files**_ if there would have been a change from all `anySource` tests. Not all `anySource` tests have to change the _**same**_ file; as long as there would be one change from each test then the custom recipe would be run.

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption><p>For more information on applicability test see the <a href="https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices#use-applicability-tests">OpenRewrite documentation</a>.</p></figcaption></figure>

### UI v9.29.0 (2022/12/14)

#### Show error when recipe no longer exists

<figure><img src="../.gitbook/assets/Screenshot 2022-12-14 at 7.48.21 AM.png" alt=""><figcaption></figcaption></figure>

### UI v9.28.0 (2022/12/10)

#### Origin and base branch added to commit results table

<figure><img src="../.gitbook/assets/Screenshot 2022-12-14 at 7.46.44 AM.png" alt=""><figcaption></figcaption></figure>

### UI v9.26.0 (2022/12/09)

#### Patch and commit are now disabled if there are no results to commit

<figure><img src="../.gitbook/assets/Screenshot 2022-12-14 at 7.44.05 AM.png" alt=""><figcaption></figcaption></figure>

### UI v9.25.0 (2022/12/08)

#### Add error details to errors in diffs

An Error card shows the code where the error was discovered, the error message, and now a new section called details that will show any extra details like stack traces. Additionally, the copy button in the upper right of the card now copies all sections as a string of Markdown to your copy buffer.

<figure><img src="../.gitbook/assets/Screenshot 2022-12-14 at 7.41.10 AM.png" alt=""><figcaption></figcaption></figure>

### UI v9.24.0 (2022/12/02)

#### Create a new repository group from existing

<figure><img src="../.gitbook/assets/Screenshot 2022-12-14 at 7.34.45 AM.png" alt=""><figcaption></figcaption></figure>

#### Add see how to run GraphQL to more locations

This has been added to the following pages:&#x20;

* recent commits
* commit jobs
* organizations
* workers
* quarantine

<figure><img src="../.gitbook/assets/Screenshot 2022-12-14 at 7.38.08 AM (1).png" alt=""><figcaption></figcaption></figure>

### UI v9.23.0 (2022/11/30)

#### Ignore whitespace changes

You can now hide whitespace changes from diffs via the _Settings_ menu

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

### UI v9.21.0 (2022/11/18)

#### Viewing result diffs

Now it's even easier to filter down the result set to only those diffs that include errors from the result diff menu bar.

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

### UI v9.15.0 (2022/11/03)

#### Status page

We have added a status page \`/status\` that displays a general summary of the site's health.

<figure><img src="../.gitbook/assets/image (1) (4).png" alt=""><figcaption></figcaption></figure>

#### Enhanced marker info

Recipe run results summary view now has the option to view the number of markers returned for each repository.

<figure><img src="../.gitbook/assets/image (4) (4).png" alt=""><figcaption></figcaption></figure>

This can also be viewed in the extended summary.

<figure><img src="../.gitbook/assets/image (2) (3).png" alt=""><figcaption></figcaption></figure>

### UI v9.14.0 (2022/11/02)

#### Named repository groups

Previously repository selection was performed at recipe run time. Now users will create named repository groups that will drive what repositories recipes are run against and what repositories are shown on the Organizations page. The group in use will be visible in the header. Groups can also be created from the repositories of a recipe run. There is also a `All` group by default that is all the repositories of the tenant. The named groups are initially stored in the browser's local storage.

&#x20;**Running a recipe**

![Screen Shot 2022-10-27 at 3 19 15 PM](https://user-images.githubusercontent.com/882752/198409345-b2928215-cbba-4b83-874b-ea252b278a8c.png)

**Repository group menu**

<figure><img src="https://user-images.githubusercontent.com/882752/198373476-a59acf07-65b3-445c-83dc-45b297b17641.png" alt=""><figcaption></figcaption></figure>

From this menu, users can change their selection, create a new grouping, or navigate to the management page for all their groups.

**Repository group creation**

<figure><img src="../.gitbook/assets/Screenshot 2022-11-01 at 4.23.53 PM.png" alt=""><figcaption></figcaption></figure>

**Organization view filtered**

<figure><img src="../.gitbook/assets/198373110-be781452-f3b7-4aca-a6be-066ee300d923.png" alt=""><figcaption></figcaption></figure>

As shown above, only repositories defined in the user's repository group are displayed.

**Recipe run group creation**

![Screenshot 2022-10-28 at 1 22 22 PM](https://user-images.githubusercontent.com/882752/198725658-f288e789-8c2e-420a-9d9b-57c4a74738eb.png)

New groups can be created from the selected rows of a recipe run.

### UI v9.11.0 (2022/10/24)

#### Only show error hunks

In addition to using Moderne for running recipes, it is also common to use the built-in debugging tools for recipe development. &#x20;

<figure><img src="../.gitbook/assets/image (6) (2).png" alt=""><figcaption></figcaption></figure>

Previously, the `Only show errors` a toggle would limit diffs to only those containing errors.  For large files with multiple hunks of changes, this behavior still required recipe authors to manually search for the errors that surfaced.\
\
We have changed this behavior so that `Only show errors` will now cause only the hunks with errors to render.

### UI v9.8.0

#### Commit job status

Previously the _Recent Commit Job_ page only reported the overall status of job completion. We now surface the number of successful, failed, or jobs with no changes.

<figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>

### UI v9.7.0

#### More markers!

We have increased the types of markers we annotate and surface in the diff view of the UI. Previously the new markers will now render as squiggly lines with an icon. If there are additional details, it will allow you to click in to see those details:\
ou may have noticed search markers displaying like this:\


<figure><img src="../.gitbook/assets/image (2) (3) (1).png" alt=""><figcaption></figcaption></figure>



<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

In addition to search markers, we will render info/debug, warnings, and errors in a similar way:

![](<../.gitbook/assets/image (10).png>)

![](<../.gitbook/assets/image (4) (3).png>)

![](<../.gitbook/assets/image (16).png>)



### UI v9.5.0

#### Improved recipe deployment

Deploying recipe artifacts now has an improved asynchronous experience. We've added the recipe artifact state and last deployment time to increase the visibility around the freshness of a recipe artifact.Notable changes to the Moderne platform

<figure><img src="../.gitbook/assets/image (7) (3).png" alt=""><figcaption><p>View recipe artifact state and last deployment time.</p></figcaption></figure>

### UI v9.4.0

#### Moderne update notice



<figure><img src="../.gitbook/assets/image (2) (4).png" alt=""><figcaption><p>If there is a Moderne update in the middle of your browser session, you should now see a prompt to refresh your page to ensure you have the latest version available.</p></figcaption></figure>
