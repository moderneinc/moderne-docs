package io.moderne.docs

import org.gradle.api.DefaultTask
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask
import java.time.Instant
import java.time.ZoneOffset

private val RELEASE_TAG = Regex("""v\d+\.\d+\.\d+""")
private val REWRITE_CORE = Regex("""META-INF/lib/rewrite-core-(\d+\.\d+\.\d+)\.jar""")
private const val CENTRAL_DIRECTORY_BYTES = 256 * 1024

@UntrackedTask(because = "Releases come from GitHub")
abstract class UpdateCliReleases : DefaultTask() {
    /// A token that can read moderneinc/moderne-cli's releases, which are private.
    @get:Internal
    abstract val githubToken: Property<String>

    @get:OutputFile
    abstract val markdownFile: RegularFileProperty

    @TaskAction
    fun update() {
        val file = markdownFile.get().asFile
        val page = file.readText()
        val releases = newReleases(page, githubReleases())
        if (releases.isEmpty()) {
            logger.lifecycle("No CLI releases newer than those on the page")
            return
        }
        file.writeText(releases.fold(page) { updated, release ->
            logger.lifecycle("Adding CLI ${release.tag}")
            addRelease(updated, releaseSection(release, bundledRewriteVersion(release.tag)))
        })
    }

    private fun githubReleases(): List<CliRelease> {
        @Suppress("UNCHECKED_CAST")
        val releases = httpGetJson(
            "https://api.github.com/repos/moderneinc/moderne-cli/releases?per_page=100",
            mapOf("Authorization" to "Bearer ${githubToken.get()}", "Accept" to "application/vnd.github+json"),
        ) as List<Map<String, Any?>>
        return releases
            .filter { it["draft"] == false && it["prerelease"] == false && RELEASE_TAG.matches(it["tag_name"] as String) }
            .map {
                CliRelease(
                    tag = it["tag_name"] as String,
                    date = Instant.parse(it["published_at"] as String).atOffset(ZoneOffset.UTC).toLocalDate(),
                    notes = it["body"] as String? ?: "",
                )
            }
    }

    /// Reads the OpenRewrite version from the name of the `rewrite-core` jar bundled in the release's published jar. Only
    /// the jar's zip central directory at its end, which lists the entry names, is requested, as the jar is hundreds of
    /// megabytes.
    private fun bundledRewriteVersion(tag: String): String? {
        val version = tag.removePrefix("v")
        val jar = "https://artifacts.codegenomeproject.org/maven/io/moderne/moderne-cli/$version/moderne-cli-$version.jar"
        val response = httpGetStream(jar, mapOf("Range" to "bytes=-$CENTRAL_DIRECTORY_BYTES"))
        response.body().use { body ->
            if (response.statusCode() != 206) {
                logger.warn("No OpenRewrite version for CLI $tag, as $jar answered ${response.statusCode()} to a request for its last bytes")
                return null
            }
            val rewriteCore = REWRITE_CORE.find(String(body.readNBytes(CENTRAL_DIRECTORY_BYTES), Charsets.ISO_8859_1))
            if (rewriteCore == null) {
                logger.warn("No OpenRewrite version for CLI $tag, as $jar names no rewrite-core jar at its end")
            }
            return rewriteCore?.groupValues?.get(1)
        }
    }
}
