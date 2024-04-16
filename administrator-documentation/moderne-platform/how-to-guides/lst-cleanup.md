# Cleaning up old LSTs

As your team develops new code, LSTs will be created and added to your artifact repository. Over time, however, many of these LSTs will no longer be useful. This is especially common when working in feature branches that get merged in or deleted – all LSTs for those branches serve no point as any changes made on them can't be merged in at that point.

While this isn't a big deal, it does cost your company money to continue to store these defunct LSTs in your artifact repository. Because of that, we encourage you to create some automation that removes old LSTs (such as ones that haven't been updated in more than week).

An important caveat with this is that Moderne **does not** poll for artifacts being deleted. Once Moderne has downloaded an LST, it will continue to allow you to run recipes on it - even if those artifacts no longer exist in your artifact repository. Trying to commit changes against these LSTs will just result in errors.

To address that issue, you have two main options: 

1. A GraphQL cleanup query to sync all LSTs
2. Writing custom, more targeted code to sync specific LSTs

Let's walk through what each of these entails.

## GraphQL cleanup query

{% hint style=warning %}
Be very careful before running the GraphQL query mentioned in this section. Depending on the parameters provided, it can cause some LSTs to be unavailable for up to 24 hours. There is no way to cancel or stop this query once it has been started.
{% endhint %}

Moderne provides a [GraphQL reindex query that you can run to force a sync of all LSTs](https://app.moderne.io/graphql?url=https%253A%252F%252Fapi.app.moderne.io%252Fgraphql&query=bXV0YXRpb24gcmVpbmRleCB7CiAgaW5kZXgoZm9yY2VVcGRhdGU6IHRydWUsIG1vZGlmaWVkU2luY2UgOiIyMDIzLTAxLTAxVDAwOjAwWiIpewogICAgY291bnQKICB9Cn0%3D).

Running this `reindex` query will cause the agent to reach out to your artifact repository and ask for all available LSTs. It will then download the metadata for each of these. After all of the metadata has been downloaded, the old LSTs will effectively be removed from the platform. Moderne will then begin downloading the latest LSTs for each repository. As this runs, you will see repositories begin appearing in the platform again.

While you can still run recipes on the LSTs that are coming in, all of the LSTs won't be available for a significant amount of time (up to 24 hours depending on the number of repositories you have). Because of that, you should strongly consider only running this query during off-hours or on a weekend when there won't be much traffic.

## More targeted, custom code

If you want to ensure Moderne removes old LSTs without incurring any downtime, you can write custom code to interact with the Moderne GraphQL APIs. This code would probably take the form of:

* Get the set of all artifacts for all repositories that exist in Moderne
* Ask your artifact repository if those still exist over there
* If they don't, make a request to remove those LSTs from the Moderne platform

You could then run this custom script once a week or so.