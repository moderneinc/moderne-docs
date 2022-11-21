# Changelog

### UI v9.15.0 (2022/11/03)

#### Status page

We have added a status page \`/status\` that displays a general summary of the site's health.

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

#### Enhanced marker info

Recipe run results summary view now has the option to view the number of markers returned for each repository.

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

This can also be viewed in the extended summary.

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

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

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

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


<figure><img src="../.gitbook/assets/image (2) (3).png" alt=""><figcaption></figcaption></figure>



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
