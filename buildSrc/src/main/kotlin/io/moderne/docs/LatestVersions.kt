package io.moderne.docs

/// Where a module's recipes install from, named after the `mod config recipes` subcommand that installs them.
enum class Ecosystem(val cli: String) {
    Maven("jar"),
    Pip("pip"),
    Npm("npm"),
    NuGet("nuget"),
    Go("go");

    fun pinned(packageName: String, version: String) = when (this) {
        Maven -> "$packageName:$version"
        Pip -> "$packageName==$version"
        Npm, NuGet -> "$packageName@$version"
        Go -> "$packageName@v$version"
    }

    fun latest(packageName: String) = if (this == Maven) "$packageName:LATEST" else packageName
}

data class Module(
    val groupId: String,
    val artifactId: String,
    val version: String,
    val license: License,
    val repository: String,
    val ecosystem: Ecosystem = Ecosystem.Maven,
    /// The name the module installs by, which differs from its coordinates for modules with no Maven artifact.
    val packageName: String = "$groupId:$artifactId",
) {
    val coordinates get() = "$groupId:$artifactId"

    val versionToken get() = "{{VERSION_${groupId}_$artifactId}}".uppercase().replace('-', '_').replace('.', '_')

    companion object {
        fun of(pom: Pom) = Module(pom.groupId, pom.artifactId, pom.version, pom.license, pom.repository)
    }
}

class LatestVersions(
    val rewriteBom: String,
    val rewriteRecipeBom: String,
    val moderneRecipeBom: String,
    val gradlePlugin: String,
    val mavenPlugin: String,
    modules: Collection<Module>,
) {
    val modules = modules.sortedWith(compareBy(Module::groupId, Module::artifactId))

    private class Install(val module: Module, val ecosystem: Ecosystem, val packageName: String)

    private val installs = this.modules
        .filter { it.artifactId !in VERSION_ONLY_MODULES }
        .flatMap { module ->
            if (module.ecosystem != Ecosystem.Maven) {
                listOf(Install(module, module.ecosystem, module.packageName))
            } else {
                listOfNotNull(
                    Install(module, Ecosystem.Maven, module.coordinates),
                    PIP_PACKAGES[module.artifactId]?.let { Install(module, Ecosystem.Pip, it) },
                    NPM_PACKAGES[module.artifactId]?.let { Install(module, Ecosystem.Npm, it) },
                )
            }
        }

    fun javascript(): String = buildString {
        appendLine("const latestVersions = {")
        appendLine("  \"{{VERSION_REWRITE_RECIPE_BOM}}\": \"$rewriteRecipeBom\",")
        appendLine("  \"{{VERSION_REWRITE_GRADLE_PLUGIN}}\": \"$gradlePlugin\",")
        appendLine("  \"{{VERSION_REWRITE_MAVEN_PLUGIN}}\": \"$mavenPlugin\",")
        for (module in modules) {
            appendLine("  \"${module.versionToken}\": \"${module.version}\",")
        }
        appendLine("};")
        appendLine("export default latestVersions;")
    }

    fun markdown(): String = buildString {
        append(HEADER)
        appendLine(headlineRow("org.openrewrite:rewrite-bom", "https://github.com/openrewrite/rewrite", rewriteBom, License.Apache2))
        appendLine(headlineRow("org.openrewrite:rewrite-maven-plugin", "https://github.com/openrewrite/rewrite-maven-plugin", mavenPlugin, License.Apache2))
        appendLine(headlineRow("org.openrewrite:rewrite-gradle-plugin", "https://github.com/openrewrite/rewrite-gradle-plugin", gradlePlugin, License.Apache2))
        appendLine(headlineRow("org.openrewrite.recipe:rewrite-recipe-bom", "https://github.com/openrewrite/rewrite-recipe-bom", rewriteRecipeBom, License.Apache2))
        appendLine(headlineRow("io.moderne.recipe:moderne-recipe-bom", "https://github.com/moderneinc/moderne-recipe-bom", moderneRecipeBom, License.Proprietary))
        for (module in modules) {
            val name = if (module.repository.isEmpty()) module.packageName else "[${module.packageName}](${module.repository})"
            appendLine("| $name | ${release(module.repository, module.version)} | ${module.license.markdown()} |")
        }
        append(CLI_INSTALLATION)
        appendLine(installCommands { install -> install.ecosystem.pinned(install.packageName, install.module.versionToken) })
        append(LATEST_CLI_INSTALLATION)
        appendLine(installCommands { install -> install.ecosystem.latest(install.packageName) })
        append(MODERNE_INSTALLATION)
        append(installMutations())
        append(MARKETPLACE_SYNC)
    }

    private fun headlineRow(name: String, repository: String, version: String, license: License) =
        "| [**$name**]($repository) | **${release(repository, version)}** | ${license.markdown()} |"

    private fun release(repository: String, version: String) =
        if (repository.isEmpty()) version else "[$version]($repository/releases/tag/v$version)"

    private fun installCommands(packageReference: (Install) -> String): String =
        installs.groupBy(Install::ecosystem).toSortedMap().entries.joinToString("\n") { (ecosystem, packages) ->
            "mod config recipes ${ecosystem.cli} install ${packages.joinToString(" ", transform = packageReference)}"
        }

    private fun installMutations(): String = installs.map(Install::module).distinct().joinToString("") { module ->
        val alias = "load_${module.groupId}_${module.artifactId}".replace('-', '_').replace('.', '_')
        val bundle = when (module.ecosystem) {
            Ecosystem.Maven ->
                "maven: { groupId: \"${module.groupId}\", artifactId: \"${module.artifactId}\", version: \"LATEST\" }"
            Ecosystem.Pip -> "pip: { packageName: \"${module.packageName}\" }"
            Ecosystem.Npm -> "npm: { packageName: \"${module.packageName}\", version: \"latest\" }"
            // `*-*` is the NuGet floating version for the newest package, prereleases included.
            Ecosystem.NuGet -> "nuget: { packageName: \"${module.packageName}\", version: \"*-*\" }"
            Ecosystem.Go -> "go: { packageName: \"${module.packageName}\" }"
        }
        "  $alias: installRecipesUniversal(bundle: { $bundle }) {\n    id\n  }\n"
    }

    companion object {
        /// Modules listed for their version alone, as they ship no recipes to install.
        val VERSION_ONLY_MODULES = setOf("rewrite-polyglot", "rewrite-templating")

        val PIP_PACKAGES = mapOf(
            "rewrite-python" to "openrewrite",
            "rewrite-migrate-python" to "openrewrite-migrate-python",
            "rewrite-static-analysis-python" to "openrewrite-static-analysis",
        )

        val NPM_PACKAGES = mapOf(
            "rewrite-javascript" to "@openrewrite/rewrite",
            "rewrite-nodejs" to "@openrewrite/recipes-nodejs",
            "rewrite-angular" to "@openrewrite/recipes-angular",
            "rewrite-react" to "@openrewrite/recipes-react",
        )
    }
}
