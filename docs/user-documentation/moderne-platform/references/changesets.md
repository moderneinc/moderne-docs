---
title: Changesets
sidebar_label: Changesets
description: What a changeset is in the Moderne Platform, the kinds there are, and what you can do with one.
---

# Changesets

When you run a recipe across an organization, Moderne has to keep track of what happened in every repository it touched. That includes:

* Which files changed.
* How those files changed (the diffs).
* What data tables were produced.
* Whether anything failed.

The object that holds all these things is a **changeset**.

You can see all the changesets in your tenant by navigating to the [activity view](../getting-started/activity-view.md). Every row on that page is a changeset. You can click on one and be taken to a page that contains all of the changeset details.

## Where changesets come from

Changesets can be created by:

* Running a recipe.
* Saving a [code search](../getting-started/code-search.md).
  * _Since a search doesn't change anything, the changeset lists the lines that matched instead of diffs._
* An agent making changes to code through any of the Moderne agent tools.

## Working with a changeset

### Moderne Platform

From the changeset's results page, you can:

* Review what happened in each repository.
* Download the data tables.
* Commit the changes back to your source control.

### Moderne CLI

You can pull down exactly the repositories a changeset covers:

```bash
mod git sync moderne working-set --changeset <ID>
```

That clones each repository at the right commit and downloads its LST alongside it, so a team or an agent can pick up where the changeset left off. Anything they push lands back on the same changeset.

You can also read a changeset's data tables without checking anything out. For a saved search, the table is `SearchResults`. For a recipe run, it's whichever table that recipe produces.

```bash
mod study moderne://changeset/<ID> --data-table SearchResults
```

### Moderne API

Everything the results page does is also available through the API. The [recipe execution guide](../how-to-guides/recipe-execution-and-commits-with-graphql.md) covers polling a changeset, downloading its data tables, and committing it.

## Finding a changeset's ID

A changeset ID is a timestamp followed by a short random string, such as `20261026174920-9W0ao`.

### Moderne Platform

To find the ID, open up the changeset from the activity view and look at the URL. The changeset ID is after the organization and before any `?` options.

```
https://app.moderne.io/results/<organization>/<changeset ID>?...
```

### Moderne API

The `runRecipe` mutation returns the ID of the changeset it created. You will then use that ID for every additional call (e.g., polling the run, downloading the data tables, and committing). The [recipe execution guide](../how-to-guides/recipe-execution-and-commits-with-graphql.md) walks through each of those steps.

```json
{
  "data": {
    "runRecipe": {
      "id": "20260723153349-gueAs"
    }
  }
}
```
