# LST cleanup

As your team develops new code, LSTs will be created and added to your artifact repository. Over time, however, many of these LSTs will no longer be useful and should be removed to save space.

There are two common scenarios where LSTs need to be manually cleaned up:

1. When people work in feature branches that then get merged in or deleted – all LSTs for those branches serve no point as any changes made on them can't be merged in at that point.
2. When people work in feature branches that are continuously updated – all old LSTs for those branches serve no point as they aren't accessible from Moderne anymore (as Moderne only grabs the latest ones).

While those two scenarios are similar, the behavior in Moderne and the cleanup process for the LSTs are slightly different. Let's walk through what you'll need to do in both of these situations.

## Cleaning up LSTs for merged/deleted branches

In this scenario, when you go to run a recipe in Moderne, you will be able to run recipes against the repository + branch combination that no longer exists – which is a waste of time as you won't be able to merge in the results.

To fix this, you will **first** need to remove the old LSTs from your artifact repository. We strongly recommend setting up some form of automation for this.[ You could potentially write a simple script that removes LSTs that haven't been updated in more than one week](lst-cleanup.md#example-aql-queries-for-finding-old-lsts).

**After the LSTs have been removed from your artifact repository**, you will need to perform some action to let Moderne know about these changes. This is because Moderne **does not** poll for artifacts being deleted. Once Moderne has downloaded an LST, it will continue to allow you to run recipes on it – even if those artifacts no longer exist in your artifact repository.

To address this issue, you have two main options:

1. Run a GraphQL cleanup query to sync all LSTs
2. Write custom, more targeted code to sync specific LSTs

### GraphQL cleanup query

{% hint style="danger" %}
Be very careful before running the GraphQL query mentioned in this section. Depending on the parameters provided, it can cause some LSTs to be unavailable for up to 24 hours. There is no way to cancel or stop this query once it has been started.
{% endhint %}

Moderne provides a [GraphQL reindex query that you can run to force a sync of all LSTs](https://app.moderne.io/graphql?url=https%253A%252F%252Fapi.app.moderne.io%252Fgraphql\&query=bXV0YXRpb24gcmVpbmRleCB7CiAgaW5kZXgoZm9yY2VVcGRhdGU6IHRydWUsIG1vZGlmaWVkU2luY2UgOiIyMDIzLTAxLTAxVDAwOjAwWiIpewogICAgY291bnQKICB9Cn0%3D).

{% tabs %}
{% tab title="Reindex mutation" %}
```graphql
mutation reindex {
  index(forceUpdate: true, modifiedSince :"2023-01-01T00:00Z"){
    count
  }
}
```
{% endtab %}

{% tab title="cURL" %}
{% code overflow="wrap" %}
```bash
curl -X POST https://api.app.moderne.io/graphql \
    -H 'Authorization: Bearer <session token or Moderne PAT here>' \
    -H 'Content-Type: application/json' \
    -d '{ "query": "mutation reindex {\n  index(forceUpdate: true, modifiedSince :\"2023-01-01T00:00Z\"){\n    count\n  }\n}" }'
```
{% endcode %}
{% endtab %}
{% endtabs %}

Running this `reindex` query will cause the agent to reach out to your artifact repository and ask for all available LSTs. It will then download the metadata for each of these. After all of the metadata has been downloaded, the old LSTs will effectively be removed from the platform. Moderne will then begin downloading the latest LSTs for each repository. As this runs, you will see repositories begin appearing in the platform again.

While you can still run recipes on the LSTs that are coming in, all of the LSTs won't be available for a significant amount of time (up to 24 hours depending on the number of repositories you have). Because of that, you should strongly consider only running this query during off-hours or on a weekend when there won't be much traffic.

### More targeted, custom code

If you want to ensure Moderne removes old LSTs without incurring any downtime, you can write custom code to interact with the Moderne GraphQL APIs. This code would probably take the form of:

* Get the set of all artifacts for all repositories that exist in Moderne
* Ask your artifact repository if those still exist over there
* If they don't, make a request to remove those LSTs from the Moderne platform

You could then run this custom script once a week or so.

## Cleaning up old LSTs for branches that still exist

In this scenario, you won't notice any issues in Moderne. You will still be able to run recipes against the latest LSTs and commit the results from said recipes. However, your artifact repository will begin to fill up with old LSTs that are no longer needed.

To fix this issue, we encourage you to write some form of automation that removes old LSTs from your artifact repository (perhaps by deleting all LSTs that haven't been updated in over a week). See [our example below](lst-cleanup.md#example-aql-queries-for-finding-old-lsts) for what this might look like.

Unlike the scenario where a branch is deleted, you **do not need to make any API calls to Moderne**.

## Example AQL queries for finding old LSTs

```aql
items.find({
    "repo":{"$match":"ingest-repo"},
    "path":{"$match":"some-org/some-repo*"},
    "created":{"$last" : "1d"}
}).limit(10000)
```

{% code overflow="wrap" %}
```bash
curl -X POST -H 'Content-Type: text/plain' -u user:password <artifactory url>/api/search/aql -d 'items.find({"repo":{"$match":"ingest-repo"},"modified":{"$gt":"2023-06-16T18:00:00.000000-04:00"}  ,"modified":{"$gt":"2024-04-17T16:48:50.00860443Z"}}).include("name","repo","path","modified").limit(100)'
```
{% endcode %}
