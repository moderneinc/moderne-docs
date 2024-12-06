---
description: Instructions for downloading reports
---

# Reporting

## Overview

Moderne offers a variety of reports for administrators:

* **Audit logs** - every action any user takes in the system is logged. We currently have two ways of accessing it: via a UI, and via the API as a download in CEF format.
* **Recipes run** - every recipe run by every user in your system. Includes the recipe name, time saved, user that ran it, recipe, as well as various statistics of the recipe run.
* **Commits made** - every commit made by every user in your system. Includes the recipe run id (to be able to link the reports together), the type of commit, status of the commit job, as well as other statistics of the commit job.
* **Usage** - every recipe run and associated commit by every user in your system. The generated report combines the commit and recipe run reports. This report includes 
the recipe name, time saved, user that ran it, recipe, as well as various statistics of the recipe run. If any commit was created in association with the recipe run details
of the commit are included: the type of commit, status of the commit job, as well as other statistics of the commit job. This report requires administrative permission to execute

## Audit logs

Audit logs are accessible from `https://<TENANT>.moderne.io/admin/audit-logs`, and can be viewed in the UI, accessed from the API, or downloaded in [CEF format](https://www.microfocus.com/documentation/arcsight/arcsight-smartconnectors-8.3/cef-implementation-standard/#CEF/Chapter%201%20What%20is%20CEF.htm?TocPath=_____2).

<figure>
  ![](./assets/audit-logs.png)
  <figcaption></figcaption>
</figure>

To download audit logs, use the "Export to CEF" button: ![](./assets/audit-log-download.png)

## Other reports (recipe runs, commits and usage)

To access non-audit-log reports, navigate to `https://<TENANT>.moderne.io/admin/reports`.

<figure>
  ![](./assets/reports.png)
  <figcaption></figcaption>
</figure>

These reports can be downloaded using the download button: ![](./assets/report-download.png)

## Accessing via the API

All of these reports can be accessed via the API as well. Here is an example of how to prepare and download the recipe run report:

```graphql
mutation firstDownloadRecipeRunReport {
  downloadRecipeRunReport {
    id
  }
}

query secondDownloadRecipeRunReport($id: ID!) {
  recipeRunReportDownload(id: $id) {
    id
    state
    stateMessage
    url
    fileSize
  }
}
```

The output of `secondDownloadRecipeRunReport` will include a URL which you can then use to download the report.

**Note:** These actions require admin access, and Moderne tokens do not provide admin access (even for platform administrators). You must use your current JWT, accessible by accessing `https://<TENANT>.moderne.io/graphql` and copying the authorization:

<figure>
  ![](./assets/admin-access.png)
  <figcaption></figcaption>
</figure>
