---
title: "Remediate server-side request forgery (SSRF)"
sidebar_label: "Remediate server-side request forgery (SSRF)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remediate server-side request forgery (SSRF)

**org.openrewrite.java.security.FixCwe918**

_Inserts a guard that validates URLs constructed from user-controlled input do not resolve to internal, reserved, or otherwise unsafe network addresses, blocking server-side request forgery (SSRF) attacks. The block list covers IPv4 and IPv6, including IPv4-mapped IPv6 (`::ffff:0:0/96`), IPv6 ULA (`fc00::/7`), NAT64 (`64:ff9b::/96`), 6to4 (`2002::/16`), and Teredo (`2001::/32`) — all of which embed or translate to addresses that would otherwise bypass a naïve `isSiteLocalAddress` / `isLoopbackAddress` check.  The guard does not by itself prevent DNS rebinding. `URL.openConnection()` re-resolves the host at connect time, so a rapidly shifting authoritative DNS response can answer with a public IP during validation and an internal IP at connect time. Closing this time-of-check / time-of-use window requires binding the TCP connection to the validated IP literal — typically via a hardened HTTP client with a custom DNS resolver (`HttpClient.Builder`, Apache HttpClient's `DnsResolver`, OkHttp's `Dns`, etc.) — and is HTTP-client-specific, so it is out of scope for this recipe.  The block list reflects IANA special-use registries at the time of this recipe's release and is not, and cannot be, permanently complete. New special-use ranges are assigned periodically — `3fff::/20` was added as IPv6 documentation space in 2024 (RFC 9637), for example — so the list will need ongoing maintenance to keep pace with the IANA IPv4 and IPv6 Special-Purpose Address Registries._

### Tags

* [CWE-918](/user-documentation/recipes/lists/recipes-by-tag#cwe)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Remediate OWASP A01:2025 Broken access control](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/security/owasp2025a01)
* [Remediate OWASP A05:2025 Injection](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/security/owasp2025a05)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.servlet.http.HttpServletRequest;

import java.net.URL;

class Test {
    void handleRequest(HttpServletRequest request) throws Exception {
        String target = request.getParameter("url");
        URL url = new URL(target);
        url.openConnection();
    }
}
```

###### After
```java
import javax.servlet.http.HttpServletRequest;

import java.net.URL;

class Test {
    void handleRequest(HttpServletRequest request) throws Exception {
        String target = request.getParameter("url");
        URL url = new URL(target);
        ssrfGuardValidateUrl(url);
        url.openConnection();
    }

    private static void ssrfGuardValidateUrl(java.net.URL url) {
        String[] blockedCidrs = {
                "0.0.0.0/8",
                "10.0.0.0/8",
                "100.64.0.0/10",
                "127.0.0.0/8",
                "169.254.0.0/16",
                "172.16.0.0/12",
                "192.0.0.0/24",
                "192.0.2.0/24",
                "192.168.0.0/16",
                "198.18.0.0/15",
                "198.51.100.0/24",
                "203.0.113.0/24",
                "224.0.0.0/3",
                "::/128",
                "::1/128",
                "::ffff:0:0/96",
                "64:ff9b::/96",
                "100::/64",
                "2001::/32",
                "2001:10::/28",
                "2001:db8::/32",
                "2002::/16",
                "fc00::/7",
                "fe80::/10",
                "fec0::/10",
                "ff00::/8"
        };
        try {
            for (java.net.InetAddress addr : java.net.InetAddress.getAllByName(url.getHost())) {
                byte[] addrBytes = addr.getAddress();
                for (String cidr : blockedCidrs) {
                    int slash = cidr.indexOf('/');
                    byte[] prefixBytes = java.net.InetAddress.getByName(cidr.substring(0, slash)).getAddress();
                    if (prefixBytes.length != addrBytes.length) {
                        continue;
                    }
                    int prefixLen = Integer.parseInt(cidr.substring(slash + 1));
                    int fullBytes = prefixLen >>> 3;
                    int remainingBits = prefixLen & 7;
                    boolean match = true;
                    for (int i = 0; i < fullBytes && match; i++) {
                        if (addrBytes[i] != prefixBytes[i]) {
                            match = false;
                        }
                    }
                    if (match && remainingBits > 0) {
                        int mask = 0xFF << (8 - remainingBits);
                        if ((addrBytes[fullBytes] & mask) != (prefixBytes[fullBytes] & mask)) {
                            match = false;
                        }
                    }
                    if (match) {
                        throw new SecurityException("Blocked request to internal address");
                    }
                }
            }
        } catch (java.net.UnknownHostException e) {
            throw new SecurityException("Unable to resolve host", e);
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -9,0 +9,1 @@
        String target = request.getParameter("url");
        URL url = new URL(target);
+       ssrfGuardValidateUrl(url);
        url.openConnection();
@@ -11,0 +12,63 @@
        url.openConnection();
    }
+
+   private static void ssrfGuardValidateUrl(java.net.URL url) {
+       String[] blockedCidrs = {
+               "0.0.0.0/8",
+               "10.0.0.0/8",
+               "100.64.0.0/10",
+               "127.0.0.0/8",
+               "169.254.0.0/16",
+               "172.16.0.0/12",
+               "192.0.0.0/24",
+               "192.0.2.0/24",
+               "192.168.0.0/16",
+               "198.18.0.0/15",
+               "198.51.100.0/24",
+               "203.0.113.0/24",
+               "224.0.0.0/3",
+               "::/128",
+               "::1/128",
+               "::ffff:0:0/96",
+               "64:ff9b::/96",
+               "100::/64",
+               "2001::/32",
+               "2001:10::/28",
+               "2001:db8::/32",
+               "2002::/16",
+               "fc00::/7",
+               "fe80::/10",
+               "fec0::/10",
+               "ff00::/8"
+       };
+       try {
+           for (java.net.InetAddress addr : java.net.InetAddress.getAllByName(url.getHost())) {
+               byte[] addrBytes = addr.getAddress();
+               for (String cidr : blockedCidrs) {
+                   int slash = cidr.indexOf('/');
+                   byte[] prefixBytes = java.net.InetAddress.getByName(cidr.substring(0, slash)).getAddress();
+                   if (prefixBytes.length != addrBytes.length) {
+                       continue;
+                   }
+                   int prefixLen = Integer.parseInt(cidr.substring(slash + 1));
+                   int fullBytes = prefixLen >>> 3;
+                   int remainingBits = prefixLen & 7;
+                   boolean match = true;
+                   for (int i = 0; i < fullBytes && match; i++) {
+                       if (addrBytes[i] != prefixBytes[i]) {
+                           match = false;
+                       }
+                   }
+                   if (match && remainingBits > 0) {
+                       int mask = 0xFF << (8 - remainingBits);
+                       if ((addrBytes[fullBytes] & mask) != (prefixBytes[fullBytes] & mask)) {
+                           match = false;
+                       }
+                   }
+                   if (match) {
+                       throw new SecurityException("Blocked request to internal address");
+                   }
+               }
+           }
+       } catch (java.net.UnknownHostException e) {
+           throw new SecurityException("Unable to resolve host", e);
+       }
+   }
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.security.FixCwe918"
  displayName="Remediate server-side request forgery (SSRF)"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-java-security"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.FixCwe918" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
