---
sidebar_label: "Add a nested block to a Terraform resource"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add a nested block to a Terraform resource

**org.openrewrite.terraform.AddResourceNestedBlock**

_Add a nested block (e.g. `parameter { ... }`) to a Terraform resource if no matching instance exists. When `keyMatchers` is provided, the recipe deduplicates by attribute keys so it works correctly with repeatable blocks like `aws_db_parameter_group.parameter`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | resourceType | A Terraform resource type, without the quotes. | `aws_db_parameter_group` |
| `String` | resourceNamePattern | *Optional*. A regular expression matched against the resource's local name (the second label). If omitted, all resources of `resourceType` are considered. | `rds_.*` |
| `List` | resourceAttrMatchers | *Optional*. A list of `attr=valueRegex` entries. The resource is considered a match only if every entry matches an attribute on the resource (AND semantics). Useful to narrow scoping by `family`, `engine`, etc. | `family=mysql.*|mariadb.*` |
| `List` | keyMatchers | *Optional*. A list of `attr=valueRegex` entries identifying an existing nested block instance (e.g. `name=local_infile` for `aws_db_parameter_group.parameter`). If a sibling block of the same type matches every key, the nested block is considered already present and not inserted. Without `keyMatchers`, the recipe falls back to skipping insertion when any sibling block of the same type exists (suitable for single-instance blocks like `lifecycle` / `timeouts`). | `name=local_infile` |
| `String` | block | Raw multiline HCL of the nested block to insert, including the block type header and any labels. The block type (and labels) used for sibling lookup are derived from this value. | <pre>parameter \{<br />  name  = "local_infile"<br />  value = "0"<br />\}</pre> |
| `String` | position | *Optional*. Where to place the new block within the resource body: `first` or `last`. Defaults to `last`. Valid options: `first`, `last` | `last` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|resourceType|`aws_db_parameter_group`|
|resourceNamePattern|`null`|
|resourceAttrMatchers|`List.of("family=mysql.*|mariadb.*")`|
|keyMatchers|`List.of("name=local_infile")`|
|block|`LOCAL_INFILE_BLOCK`|
|position|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="hcl" label="hcl">


###### Before
```hcl
resource "aws_db_parameter_group" "mysql" {
  name   = "rds-mysql-pg"
  family = "mysql8.0"
}
```

###### After
```hcl
resource "aws_db_parameter_group" "mysql" {
  name   = "rds-mysql-pg"
  family = "mysql8.0"
  parameter {
    apply_method = "immediate"
    name         = "local_infile"
    value        = "0"
  }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,0 +4,5 @@
  name   = "rds-mysql-pg"
  family = "mysql8.0"
+ parameter {
+   apply_method = "immediate"
+   name         = "local_infile"
+   value        = "0"
+ }
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options.
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddResourceNestedBlockExample
displayName: Add a nested block to a Terraform resource example
recipeList:
  - org.openrewrite.terraform.AddResourceNestedBlock:
      resourceType: aws_db_parameter_group
      resourceNamePattern: rds_.*
      resourceAttrMatchers:
        - family=mysql.*|mariadb.*
      keyMatchers:
        - name=local_infile
      block: >
        parameter {
          name  = "local_infile"
          value = "0"
        }
      position: last
```

<RunRecipe
  recipeName="org.openrewrite.terraform.AddResourceNestedBlock"
  displayName="Add a nested block to a Terraform resource"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-terraform"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM"
  requiresConfiguration
  cliOptions={' --recipe-option "resourceType=aws_db_parameter_group" --recipe-option "resourceNamePattern=rds_.*" --recipe-option "resourceAttrMatchers=family=mysql.*|mariadb.*" --recipe-option "keyMatchers=name=local_infile" --recipe-option "block=>\n        parameter {\n          name  = "local_infile"\n          value = "0"\n        }" --recipe-option "position=last"'}
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.terraform.AddResourceNestedBlock" />

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
