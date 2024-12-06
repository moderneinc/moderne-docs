---
description: Instructions for downloading reports
---

# Reporting

## Overview

Moderne offers some reports:

* **Usage by organization** - every recipe run and associated commit by every user for a specific organization. The generated report combines the commit and recipe run reports. This report includes
the recipe name, time saved, user that ran it, recipe, as well as various statistics of the recipe run. If any commit was created in association with the recipe run details
of the commit are included: the type of commit, status of the commit job, as well as other statistics of the commit job.

## Usage by organization
The usages report is accessible from `https://<TENANT>.moderne.io/devcenter/{organization}`

## Accessing via the API

All of these reports can be accessed via the API as well. Here is an example of how to prepare and download the usage report:

```graphql
mutation firstGenerateUsageReport($until: DateTime!, $since:DateTime!, $organizationId: String) {
    downloadUsageReport(until: $until, since: $since , organizationId:$organizationId) {
        id
    }
}
```

```json
{
  "since": "2024-10-29T10:15:30Z",
  "until":"2024-12-30T10:15:30Z",
  "organizationId":"my_organization_Id"
}
```

```graphql
query secondDownloadUsageReport($id: ID!) {
    usageReportDownload(id: $id) {
        id
        state
        stateMessage
        url
        fileSize
    }
}
```

The output of `secondDownloadUsageReport` will include a URL which you can then use to download the report.
