---
sidebar_label: "Applies a codemod to all source files"
canonical_url: "https://docs.openrewrite.org/recipes/codemods/applycodemod"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Applies a codemod to all source files

**org.openrewrite.codemods.ApplyCodemod**

_Applies a codemod represented by an NPM package to all source files._

## Recipe source

[GitHub: ApplyCodemod.java](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/ApplyCodemod.java),
[Issue Tracker](https://github.com/moderneinc/rewrite-codemods/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | transform | Transform to be applied using the executable. | `-t path/to/transform/optimus-prime` |
| `String` | executable | *Optional*. Path to the codemod executable relative to the NPM directory. Defaults to `jscodeshift/bin/jscodeshift.js`. | `@next/codemod/bin/next-codemod.js` |
| `String` | fileFilter | Optional glob pattern to filter files to apply the codemod to. Defaults to all files. Note: not all codemods support file glob filtering. | `**/*.(j|t)sx` |
| `List` | codemodArgs | *Optional*. Arguments which get passed to the codemod command. | `--force --jscodeshift='--parser=${parser}'` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add React imports](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v10/addmissingreactimport.md)
* [Adds `DefaultTheme` module augmentation to typescript projects](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themeaugment.md)
* [Combination of all deprecations](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/all.md)
* [Convert `var` to `let`](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/5to6/vartolet.md)
* [Converts ExpansionPanel to use ExpansionPanel component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/expansionpanelcomponent.md)
* [Converts GridList to use Grid component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/gridlistcomponent.md)
* [Converts JSS styles to styled-components](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/jsstostyled.md)
* [Converts JSS to TypeScript in React components](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/jsstotssreact.md)
* [Converts `rootRef` to `ref`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/rootref.md)
* [Converts `sx` prop to `sx` style prop](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/boxsxprop.md)
* [Converts all `@mui/material` submodule imports to the root module](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/toplevelimports.md)
* [Converts base imports to use React hooks](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/basehookimports.md)
* [Converts components to use the v4 adapter module](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/adapterv.md)
* [Ensures presets are safe to use](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/presetsafe.md)
* [Generate named exports from CommonJS modules](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/5to6/namedexportgeneration.md)
* [Migrate `ImageResponse` imports](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v14_0/nextogimport.md)
* [Migrate to the New Image Component](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v13_0/nextimageexperimental.md)
* [Moves date pickers to `@mui/x-date-picker`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/datepickersmovedtox.md)
* [Moves lab modules to `@mui/material`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/movedlabmodules.md)
* [Moves tree view to `@mui/x-tree-view`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/treeviewmovedtox.md)
* [Optimizes imports](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/optimalimports.md)
* [Prepends emotion cache](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/emotionprependcache.md)
* [Remove &quot;use strict&quot; directives](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/5to6/nostrict.md)
* [Remove `&lt;a&gt;` Tags From Link Components](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v13_0/newlink.md)
* [Remove system props and add them to the `sx` prop](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/systemprops.md)
* [Removes `Unstyled` suffix from base components](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/baseremoveunstyledsuffix.md)
* [Removes `component` prop from base components](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/baseremovecomponentprop.md)
* [Removes `imgProps` prop from Avatar component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/joyavatarremoveimgprops.md)
* [Rename Next Image Imports](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v11/cratonext.md)
* [Rename Next Image Imports](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v13_0/nextimagetolegacyimage.md)
* [Renames CSS properties for Box component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/boxrenamecss.md)
* [Renames CSS variables](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/renamecssvariables.md)
* [Renames `Mui` classname prefix](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/joyrenameclassnameprefix.md)
* [Renames `TextField` to `Input`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/joytextfieldtoinput.md)
* [Renames `alpha` prop to `opacity`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/faderenamealpha.md)
* [Renames `closeIcon` prop to `closeButtonIcon`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/autocompleterenamecloseicon.md)
* [Renames `collapsedHeight` prop to `transitionCollapsedHeight`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/collapserenamecollapsedheight.md)
* [Renames `color` prop to `colorOverride`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/buttoncolorprop.md)
* [Renames `component` prop to `as`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/componentrenameprop.md)
* [Renames `gap` prop to `spacing`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/boxrenamegap.md)
* [Renames `option` prop to `getOptionLabel`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/autocompleterenameoption.md)
* [Renames `row` prop to `flexDirection=&quot;row&quot;`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/joyrenamerowprop.md)
* [Renames base components to slots](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/baserenamecomponentstoslots.md)
* [Renames components to slots](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/joyrenamecomponentstoslots.md)
* [Replace all function expressions with only `return` statement with simple arrow](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/5to6/simplearrow.md)
* [Replace lodash and underscore array functions with native JavaScript](/user-documentation/recipes/recipe-catalog/codemods/migrate/lodash/lodashunderscorearray.md)
* [Replace lodash and underscore function functions with native JavaScript](/user-documentation/recipes/recipe-catalog/codemods/migrate/lodash/lodashunderscorefunction.md)
* [Replace lodash and underscore object functions with native JavaScript](/user-documentation/recipes/recipe-catalog/codemods/migrate/lodash/lodashunderscoreobjects.md)
* [Replace lodash and underscore utility functions with native JavaScript](/user-documentation/recipes/recipe-catalog/codemods/migrate/lodash/lodashunderscoreutil.md)
* [Replaces `@mui` imports with `@mui/material`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/muireplace.md)
* [Transform AMD style `define()` calls to ES6 `import` statements](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/5to6/amdtoesm.md)
* [Transform AMP HOC into page config](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v8/withamptoconfig.md)
* [Transform Anonymous Components into Named Components](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v9/namedefaultcomponent.md)
* [Transform CommonJS style `require()` calls to ES6 `import` statements](/user-documentation/recipes/recipe-catalog/codemods/ecmascript/5to6/cjstoesm.md)
* [Update the theme creation from `@mui/system@v5` to be compatible with `@pigment-css/react`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themev.md)
* [Update the usage of the `sx` prop to be compatible with `@pigment-css/react`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/sxprop.md)
* [Updates `borderRadius` prop values](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/boxborderradiusvalues.md)
* [Updates `circle` prop to `variant=&quot;circular&quot;`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/avatarcirclecircular.md)
* [Updates `circular` prop to `variant=&quot;circular&quot;`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/paginationroundcircular.md)
* [Updates `down` prop for Hidden component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/hiddendownprops.md)
* [Updates `justify` prop to `justifyContent` for Grid component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/gridjustifyjustifycontent.md)
* [Updates `minRows` and `maxRows` props for TextareaAutosize component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/textareaminmaxrows.md)
* [Updates `overlap` prop to `variant=&quot;dot&quot;`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/badgeoverlapvalue.md)
* [Updates `round` values for theme typography](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themetypographyround.md)
* [Updates `size` prop for IconButton component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/iconbuttonsize.md)
* [Updates `variant` prop for Chip component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/chipvariantprop.md)
* [Updates `variant` prop for CircularProgress component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/circularprogressvariant.md)
* [Updates `variant` prop for Fab component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/fabvariant.md)
* [Updates `variant` prop for Skeleton component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/skeletonvariant.md)
* [Updates `variant` prop usage](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/variantprop.md)
* [Updates `width` values for theme breakpoints](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themebreakpointswidth.md)
* [Updates base imports to use named exports](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/baseusenamedexports.md)
* [Updates createMuiTheme usage](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/createtheme.md)
* [Updates import paths for core styles](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/corestylesimport.md)
* [Updates link underline on hover](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/linkunderlinehover.md)
* [Updates props for Dialog component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/dialogprops.md)
* [Updates props for DialogTitle component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/dialogtitleprops.md)
* [Updates props for Modal component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/modalprops.md)
* [Updates props for Table component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/tableprops.md)
* [Updates scroll buttons for Tabs component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/tabsscrollbuttons.md)
* [Updates the usage of `styled` from `@mui/system@v5` to be compatible with` @pigment-css/react`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/styled.md)
* [Updates the usage of the `@mui/material/Grid2`, `@mui/system/Grid`, and `@mui/joy/Grid` components to their updated APIs](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/gridvprops.md)
* [Updates theme breakpoints](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themebreakpoints.md)
* [Updates theme options](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themeoptions.md)
* [Updates theme palette mode](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themepalettemode.md)
* [Updates theme spacing API](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themespacingapi.md)
* [Updates theme spacing](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themespacing.md)
* [Updates usage of ThemeProvider](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/themeprovider.md)
* [Updates usage of `@mui/styles`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/materialuistyles.md)
* [Updates usage of `@mui/types`](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/materialuitypes.md)
* [Updates usage of styled engine provider](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/styledengineprovider.md)
* [Updates usage of transitions](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/transitions.md)
* [Updates usage of useAutocomplete](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/useautocomplete.md)
* [Updates usage of useTransitionProps](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/usetransitionprops.md)
* [Updates withMobileDialog higher-order component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/withmobiledialog.md)
* [Updates withWidth higher-order component](/user-documentation/recipes/recipe-catalog/codemods/migrate/mui/withwidth.md)
* [Use Built-in Font](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v13_2/builtinnextfont.md)
* [Use `viewport` export](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v14_0/metadatatoviewportexport.md)
* [Use `withRouter`](/user-documentation/recipes/recipe-catalog/codemods/migrate/nextjs/v6/urltowithrouter.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ApplyCodemodExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ApplyCodemodExample
displayName: Applies a codemod to all source files example
recipeList:
  - org.openrewrite.codemods.ApplyCodemod:
      transform: '-t path/to/transform/optimus-prime'
      executable: '@next/codemod/bin/next-codemod.js'
      fileFilter: '**/*.(j|t)sx'
      codemodArgs: --force --jscodeshift='--parser=${parser}'
```

Now that `com.yourorg.ApplyCodemodExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ApplyCodemodExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}")
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.ApplyCodemodExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-codemods</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ApplyCodemod --recipe-option "transform='-t path/to/transform/optimus-prime'" --recipe-option "executable='@next/codemod/bin/next-codemod.js'" --recipe-option "fileFilter='**/*.(j|t)sx'" --recipe-option "codemodArgs=--force --jscodeshift='--parser=${parser}'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codemods.ApplyCodemod" />

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
