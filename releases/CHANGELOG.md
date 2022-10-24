# Changelog

Deploying recipe artifacts now has an improved asynchronous experience. We've added the recipe artifact state and last deployment time to increase the visibility around the freshness of a recipe artifact.Notable changes to the Moderne platform

### UI v9.11.0

#### Only show error hunks

In addition to using Moderne for running recipes it is also common to use the built in debugging tools for recipe development. &#x20;

![](<../.gitbook/assets/image (6).png>)

Previously, the `Only show errors` toggle would limit diffs to only those containing errors.  For very large files with multiple hunks of changes this behavior still required recipe authors to manually search for the errors that surfaced.\
\
We have changed this behavior so that `Only show errors` will now cause only the hunks with errors to render.

### UI v9.8.0

#### Commit job status

Previously the _Recent Commit Job_ page only reported the overall status of job completion. We now surface the number of successful, failed, or jobs with no changes.

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

### UI v9.7.0

#### More markers!

We have increased the types of markers we annotate and surface in the diff view of the UI. Previously yThe new markers will now render as squiggly lines with an icon. If there are additional details, it will allow you to click in to see those details:\
ou may have noticed search markers displaying like this:\


<figure><img src="../.gitbook/assets/image (2) (3).png" alt=""><figcaption></figcaption></figure>



<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

In addition to search markers, we will render info/debug, warnings, and errors in a similar way:

![](<../.gitbook/assets/image (10).png>)

![](<../.gitbook/assets/image (1).png>)

![](<../.gitbook/assets/image (16).png>)

### UI v9.5.0

#### Improved recipe deployment



<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption><p>View recipe artifact state and last deployment time.</p></figcaption></figure>

### UI v9.4.0

#### Moderne update notice



<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption><p>If there is a Moderne update in the middle of your browser session, you should now see a prompt to refresh your page to ensure you have the latest version available.</p></figcaption></figure>
