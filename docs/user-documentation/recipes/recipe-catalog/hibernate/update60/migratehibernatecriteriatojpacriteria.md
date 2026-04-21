---
sidebar_label: "Migrate Hibernate Criteria API to JPA Criteria API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Hibernate Criteria API to JPA Criteria API

**io.moderne.hibernate.update60.MigrateHibernateCriteriaToJpaCriteria**

_Migrates code using the legacy Hibernate Criteria API (org.hibernate.Criteria, org.hibernate.criterion.*) to the JPA Criteria API (jakarta.persistence.criteria.*). Handles common patterns including Restrictions (with and/or), Order, Projections, list(), and uniqueResult()._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Hibernate 6.0.x (Moderne Edition)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate60-moderne-edition)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import java.util.List;

public class EmployeeDao {
    private Session session;

    public List findByDepartment(String dept) {
        Criteria criteria = session.createCriteria(Employee.class);
        criteria.add(Restrictions.eq("department", dept));
        return criteria.list();
    }
}
```

###### After
```java
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import org.hibernate.Session;

import java.util.List;

public class EmployeeDao {
    private Session session;

    public List findByDepartment(String dept) {
        CriteriaBuilder cb = session.getCriteriaBuilder();
        CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
        Root<Employee> root = cq.from(Employee.class);
        cq.where(cb.equal(root.get("department"), dept));
        return session.createQuery(cq).getResultList();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-import org.hibernate.Criteria;
+import jakarta.persistence.criteria.CriteriaBuilder;
+import jakarta.persistence.criteria.CriteriaQuery;
+import jakarta.persistence.criteria.Root;
import org.hibernate.Session;
@@ -3,1 +5,0 @@
import org.hibernate.Criteria;
import org.hibernate.Session;
-import org.hibernate.criterion.Restrictions;

@@ -11,3 +12,5 @@

    public List findByDepartment(String dept) {
-       Criteria criteria = session.createCriteria(Employee.class);
-       criteria.add(Restrictions.eq("department", dept));
-       return criteria.list();
+       CriteriaBuilder cb = session.getCriteriaBuilder();
+       CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
+       Root<Employee> root = cq.from(Employee.class);
+       cq.where(cb.equal(root.get("department"), dept));
+       return session.createQuery(cq).getResultList();
    }
```
</TabItem>
</Tabs>

###### Unchanged
```java
public class Employee {
    private String department;
    public String getDepartment() { return department; }
}
```


## Usage

<RunRecipe
  recipeName="io.moderne.hibernate.update60.MigrateHibernateCriteriaToJpaCriteria"
  displayName="Migrate Hibernate Criteria API to JPA Criteria API"
  groupId="io.moderne.recipe"
  artifactId="rewrite-hibernate"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.hibernate.update60.MigrateHibernateCriteriaToJpaCriteria" />

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
