package io.moderne.docs

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class LatestVersionsTest {
    private val rewrite = "https://github.com/openrewrite/rewrite"
    private val recipesCsharp = "https://github.com/moderneinc/recipes-csharp"
    private val latestVersions = LatestVersions(
        rewriteBom = "8.95.0",
        rewriteRecipeBom = "3.43.0",
        moderneRecipeBom = "0.48.0",
        gradlePlugin = "7.44.1",
        mavenPlugin = "6.52.0",
        modules = listOf(
            Module("org.openrewrite", "rewrite-python", "8.95.0", License.MSAL, rewrite),
            Module("org.openrewrite", "rewrite-core", "8.95.0", License.Apache2, rewrite),
            Module("org.openrewrite", "rewrite-templating", "1.48.0", License.Apache2, "https://github.com/openrewrite/rewrite-templating"),
            Module("io.moderne.recipe", "rewrite-spring", "0.46.0", License.Proprietary, "https://github.com/moderneinc/rewrite-spring"),
            Module("io.moderne.recipe", "recipes-code-quality", "0.11.0", License.Proprietary, recipesCsharp, Ecosystem.NuGet, "OpenRewrite.Recipes.CSharp.CodeQuality"),
            Module("io.moderne.recipe", "recipes-javascript-code-quality", "0.5.0", License.Proprietary, "https://github.com/moderneinc/recipes-javascript", Ecosystem.Npm, "@openrewrite/recipes-code-quality"),
            Module("org.openrewrite.recipe", "recipes-go", "0.14.0", License.Proprietary, "https://github.com/moderneinc/recipes-go", Ecosystem.Go, "github.com/moderneinc/recipes-go"),
        ),
    )

    @Test
    fun javascriptHasEveryModule() {
        assertThat(latestVersions.javascript()).isEqualTo(
            """
            const latestVersions = {
              "{{VERSION_REWRITE_RECIPE_BOM}}": "3.43.0",
              "{{VERSION_REWRITE_GRADLE_PLUGIN}}": "7.44.1",
              "{{VERSION_REWRITE_MAVEN_PLUGIN}}": "6.52.0",
              "{{VERSION_IO_MODERNE_RECIPE_RECIPES_CODE_QUALITY}}": "0.11.0",
              "{{VERSION_IO_MODERNE_RECIPE_RECIPES_JAVASCRIPT_CODE_QUALITY}}": "0.5.0",
              "{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}}": "0.46.0",
              "{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}}": "8.95.0",
              "{{VERSION_ORG_OPENREWRITE_REWRITE_PYTHON}}": "8.95.0",
              "{{VERSION_ORG_OPENREWRITE_REWRITE_TEMPLATING}}": "1.48.0",
              "{{VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO}}": "0.14.0",
            };
            export default latestVersions;

            """.trimIndent()
        )
    }

    @Test
    fun tableListsEveryModuleByThePackageItInstallsBy() {
        val rows = latestVersions.markdown().lines().filter { it.startsWith("| [") }

        assertThat(rows).containsExactly(
            "| [**org.openrewrite:rewrite-bom**]($rewrite) | **[8.95.0]($rewrite/releases/tag/v8.95.0)** | ${License.Apache2.markdown()} |",
            "| [**org.openrewrite:rewrite-maven-plugin**](https://github.com/openrewrite/rewrite-maven-plugin) | **[6.52.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.52.0)** | ${License.Apache2.markdown()} |",
            "| [**org.openrewrite:rewrite-gradle-plugin**](https://github.com/openrewrite/rewrite-gradle-plugin) | **[7.44.1](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.44.1)** | ${License.Apache2.markdown()} |",
            "| [**org.openrewrite.recipe:rewrite-recipe-bom**](https://github.com/openrewrite/rewrite-recipe-bom) | **[3.43.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.43.0)** | ${License.Apache2.markdown()} |",
            "| [**io.moderne.recipe:moderne-recipe-bom**](https://github.com/moderneinc/moderne-recipe-bom) | **[0.48.0](https://github.com/moderneinc/moderne-recipe-bom/releases/tag/v0.48.0)** | ${License.Proprietary.markdown()} |",
            "| [OpenRewrite.Recipes.CSharp.CodeQuality]($recipesCsharp) | [0.11.0]($recipesCsharp/releases/tag/v0.11.0) | ${License.Proprietary.markdown()} |",
            "| [@openrewrite/recipes-code-quality](https://github.com/moderneinc/recipes-javascript) | [0.5.0](https://github.com/moderneinc/recipes-javascript/releases/tag/v0.5.0) | ${License.Proprietary.markdown()} |",
            "| [io.moderne.recipe:rewrite-spring](https://github.com/moderneinc/rewrite-spring) | [0.46.0](https://github.com/moderneinc/rewrite-spring/releases/tag/v0.46.0) | ${License.Proprietary.markdown()} |",
            "| [org.openrewrite:rewrite-core]($rewrite) | [8.95.0]($rewrite/releases/tag/v8.95.0) | ${License.Apache2.markdown()} |",
            "| [org.openrewrite:rewrite-python]($rewrite) | [8.95.0]($rewrite/releases/tag/v8.95.0) | ${License.MSAL.markdown()} |",
            "| [org.openrewrite:rewrite-templating](https://github.com/openrewrite/rewrite-templating) | [1.48.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.48.0) | ${License.Apache2.markdown()} |",
            "| [github.com/moderneinc/recipes-go](https://github.com/moderneinc/recipes-go) | [0.14.0](https://github.com/moderneinc/recipes-go/releases/tag/v0.14.0) | ${License.Proprietary.markdown()} |",
        )
    }

    @Test
    fun installsEveryModuleThatShipsRecipes() {
        val installs = latestVersions.markdown().lines().filter { it.startsWith("mod config recipes") && " install " in it }

        assertThat(installs).containsExactly(
            "mod config recipes jar install io.moderne.recipe:rewrite-spring:{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}} org.openrewrite:rewrite-core:{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}} org.openrewrite:rewrite-python:{{VERSION_ORG_OPENREWRITE_REWRITE_PYTHON}}",
            "mod config recipes pip install openrewrite=={{VERSION_ORG_OPENREWRITE_REWRITE_PYTHON}}",
            "mod config recipes npm install @openrewrite/recipes-code-quality@{{VERSION_IO_MODERNE_RECIPE_RECIPES_JAVASCRIPT_CODE_QUALITY}}",
            "mod config recipes nuget install OpenRewrite.Recipes.CSharp.CodeQuality@{{VERSION_IO_MODERNE_RECIPE_RECIPES_CODE_QUALITY}}",
            "mod config recipes go install github.com/moderneinc/recipes-go@v{{VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO}}",
            "mod config recipes jar install io.moderne.recipe:rewrite-spring:LATEST org.openrewrite:rewrite-core:LATEST org.openrewrite:rewrite-python:LATEST",
            "mod config recipes pip install openrewrite",
            "mod config recipes npm install @openrewrite/recipes-code-quality",
            "mod config recipes nuget install OpenRewrite.Recipes.CSharp.CodeQuality",
            "mod config recipes go install github.com/moderneinc/recipes-go",
        )
    }

    @Test
    fun mutationInstallsEachModuleOnceFromItsOwnEcosystem() {
        val bundles = latestVersions.markdown().lines().filter { it.startsWith("  load_") }

        assertThat(bundles).containsExactly(
            "  load_io_moderne_recipe_recipes_code_quality: installRecipesUniversal(bundle: { nuget: { packageName: \"OpenRewrite.Recipes.CSharp.CodeQuality\", version: \"*-*\" } }) {",
            "  load_io_moderne_recipe_recipes_javascript_code_quality: installRecipesUniversal(bundle: { npm: { packageName: \"@openrewrite/recipes-code-quality\", version: \"latest\" } }) {",
            "  load_io_moderne_recipe_rewrite_spring: installRecipesUniversal(bundle: { maven: { groupId: \"io.moderne.recipe\", artifactId: \"rewrite-spring\", version: \"LATEST\" } }) {",
            "  load_org_openrewrite_rewrite_core: installRecipesUniversal(bundle: { maven: { groupId: \"org.openrewrite\", artifactId: \"rewrite-core\", version: \"LATEST\" } }) {",
            "  load_org_openrewrite_rewrite_python: installRecipesUniversal(bundle: { maven: { groupId: \"org.openrewrite\", artifactId: \"rewrite-python\", version: \"LATEST\" } }) {",
            "  load_org_openrewrite_recipe_recipes_go: installRecipesUniversal(bundle: { go: { packageName: \"github.com/moderneinc/recipes-go\" } }) {",
        )
    }
}
