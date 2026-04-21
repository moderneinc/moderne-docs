---
sidebar_label: "Track data lineage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Track data lineage

**org.openrewrite.analysis.java.datalineage.TrackDataLineage**

Tracks the flow of data from database sources to API sinks to understand data dependencies and support compliance requirements.

## Prerequisites for detecting a data flow

All of the following conditions must be met for the recipe to report a flow:

1. The source code must contain at least one method call matching a recognized **source** (see below).
2. The source code must contain at least one method call matching a recognized **sink** (see below).
3. The tainted data must propagate from the source to the sink through variable assignments within the same method or via fields across methods in the same compilation unit.
4. No **flow breaker** (see below) may appear on the path between source and sink.
5. The relevant library types (e.g., `java.sql.ResultSet`, `javax.ws.rs.core.Response`) must be on the classpath so that OpenRewrite can resolve types. If types are unresolved, method matchers will not trigger and no flows will be detected.

## Recognized sources (database reads)

| Category | Classes |
| --- | --- |
| JDBC | `java.sql.ResultSet` |
| JPA (javax) | `javax.persistence.EntityManager`, `Query`, `TypedQuery` |
| JPA (jakarta) | `jakarta.persistence.EntityManager`, `Query`, `TypedQuery` |
| Hibernate | `org.hibernate.Session`, `org.hibernate.query.Query` |
| Spring Data | `org.springframework.data.repository.CrudRepository` |
| Spring JDBC | `org.springframework.jdbc.core.JdbcTemplate` |
| MyBatis | `org.apache.ibatis.session.SqlSession`, `org.mybatis.spring.SqlSessionTemplate` |
| MongoDB | `com.mongodb.client.MongoCollection`, `org.springframework.data.mongodb.core.MongoTemplate` |
| Redis | `redis.clients.jedis.Jedis`, `org.springframework.data.redis.core.RedisTemplate`, `ValueOperations`, `HashOperations` |
| Cassandra | `com.datastax.driver.core.Session`, `org.springframework.data.cassandra.core.CassandraTemplate` |
| Elasticsearch | `org.elasticsearch.client.RestHighLevelClient`, `org.springframework.data.elasticsearch.core.ElasticsearchTemplate` |
| Heuristic | Any class with `Repository`, `Dao`, or `Mapper` in its name calling methods starting with find, get, query, search, load, fetch, or select |

## Recognized sinks (API responses)

| Category | Classes |
| --- | --- |
| JAX-RS (javax) | `javax.ws.rs.core.Response`, `Response.ResponseBuilder` |
| JAX-RS (jakarta) | `jakarta.ws.rs.core.Response`, `Response.ResponseBuilder` |
| Spring MVC | `org.springframework.http.ResponseEntity`, `ResponseEntity.BodyBuilder` |
| Servlet (javax) | `javax.servlet.http.HttpServletResponse`, `javax.servlet.ServletOutputStream` |
| Servlet (jakarta) | `jakarta.servlet.http.HttpServletResponse`, `jakarta.servlet.ServletOutputStream` |
| Java I/O | `java.io.PrintWriter`, `java.io.Writer`, `java.io.OutputStream` |
| Jackson | `com.fasterxml.jackson.databind.ObjectMapper`, `com.fasterxml.jackson.core.JsonGenerator` |
| Gson | `com.google.gson.Gson`, `com.google.gson.JsonWriter` |
| GraphQL | `graphql.schema.DataFetcher`, `graphql.schema.PropertyDataFetcher` |
| Spring WebFlux | `ServerResponse`, `reactor.core.publisher.Mono`, `reactor.core.publisher.Flux` |
| gRPC | `io.grpc.stub.StreamObserver` |
| WebSocket | `javax.websocket.Session`, `RemoteEndpoint.Basic`, `jakarta.websocket.*`, `org.springframework.web.socket.WebSocketSession` |

## Flow breakers

Flows are broken by methods matching common sanitization patterns (anonymize, redact, mask, encrypt, hash, sanitize, etc.) or authorization checks (isAuthorized, hasPermission, hasRole, etc.).

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.sql.ResultSet;
import javax.ws.rs.core.Response;

class UserController {
    public Response getUser(String id, ResultSet rs) throws Exception {
        String name = rs.getString("name");
        String email = rs.getString("email");

        User user = new User(name, email);
        return Response.ok(user).build();
    }

    class User {
        String name, email;
        User(String n, String e) { name = n; email = e; }
    }
}
```

###### After
```java
import java.sql.ResultSet;
import javax.ws.rs.core.Response;

class UserController {
    public Response getUser(String id, ResultSet rs) throws Exception {
        String name = rs.getString("name");
        String email = rs.getString("email");

        User user = new User(name, email);
        return /*~~(DATA_LINEAGE use)~~>*/Response.ok(user).build();
    }

    class User {
        String name, email;
        User(String n, String e) { name = n; email = e; }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -10,1 +10,1 @@

        User user = new User(name, email);
-       return Response.ok(user).build();
+       return /*~~(DATA_LINEAGE use)~~>*/Response.ok(user).build();
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.analysis.java.datalineage.TrackDataLineage"
  displayName="Track data lineage"
  groupId="io.moderne.recipe"
  artifactId="rewrite-program-analysis"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_PROGRAM_ANALYSIS"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.analysis.java.datalineage.TrackDataLineage" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.analysis.java.taint.table.TaintFlowTable" label="TaintFlowTable">

### Taint flow
**org.openrewrite.analysis.java.taint.table.TaintFlowTable**

_Records taint flows from sources to sinks with their taint types._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Source line | The line number where the taint source is located. |
| Source | The source code where taint originates. |
| Sink line | The line number where the taint sink is located. |
| Sink | The sink code where taint flows to. |
| Taint type | The taint type that matched at the sink. |

</TabItem>

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
