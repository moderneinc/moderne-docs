package io.moderne.docs

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import java.time.LocalDate

class CliReleasesTest {
    private val date = LocalDate.of(2026, 11, 7)

    @Test
    fun newReleasesAreThoseAboveTheNewestOnThePage() {
        val page = """
            ## Changelog

            ### CLI v4.12.4 (2026-11-07) {/* #v4.12.4 */}

            ### CLI / DX v4.9.10 (2026-10-01) {/* #v4.9.10 */}
            """.trimIndent()
        val releases = listOf("v4.13.0", "v4.12.10", "v4.12.4", "v4.12.3", "v3.99.0").map { CliRelease(it, date, "") }

        assertThat(newReleases(page, releases).map(CliRelease::tag)).containsExactly("v4.12.10", "v4.13.0")
    }

    @Test
    fun releaseFromGitHubReleaseNotes() {
        val notes = """
            ## What's Changed
            * Give a source set built on Java 8 its JDK's class library by @timtebeek in https://github.com/moderneinc/moderne-cli/pull/5147
            * fix(search): Match `<T>` and {account} by [@octocat](https://github.com/octocat) in https://github.com/moderneinc/moderne-cli/pull/5150
            ### New Features
            A line without a bullet

            ## New Contributors
            * @octocat made their first contribution in https://github.com/moderneinc/moderne-cli/pull/5150


            **Full Changelog**: https://github.com/moderneinc/moderne-cli/compare/v4.12.3...v4.12.4
            """.trimIndent()

        assertThat(releaseSection(CliRelease("v4.12.4", date, notes), "8.101.1")).isEqualTo(
            """
            ### CLI v4.12.4 (2026-11-07) {/* #v4.12.4 */}

            _Based on [OpenRewrite 8.101.1](https://github.com/openrewrite/rewrite/releases/tag/v8.101.1)_

            #### What's Changed
            * Give a source set built on Java 8 its JDK's class library
            * Match `<T>` and \{account}
            ##### New Features
            * A line without a bullet

            """.trimIndent()
        )
    }

    @Test
    fun releaseWithoutKnownRewriteVersion() {
        val release = CliRelease("v4.12.4", date, "* Only change by @timtebeek in https://github.com/moderneinc/moderne-cli/pull/1")

        assertThat(releaseSection(release, null)).isEqualTo(
            """
            ### CLI v4.12.4 (2026-11-07) {/* #v4.12.4 */}

            * Only change

            """.trimIndent()
        )
    }

    @Test
    fun firstReleaseOfAMonthAddsItsHeader() {
        val page = """
            ## Changelog

            ## October 2026

            ### CLI v4.12.0 (2026-10-28) {/* #v4.12.0 */}
            * October release

            """.trimIndent()

        assertThat(addRelease(page, "### CLI v4.12.1 (2026-11-01) {/* #v4.12.1 */}\n\n* November release\n")).isEqualTo(
            """
            ## Changelog

            ## November 2026

            ### CLI v4.12.1 (2026-11-01) {/* #v4.12.1 */}

            * November release

            ## October 2026

            ### CLI v4.12.0 (2026-10-28) {/* #v4.12.0 */}
            * October release

            """.trimIndent()
        )
    }

    @Test
    fun laterReleaseOfAMonthGoesAboveTheEarlierOnes() {
        val page = """
            ## Changelog

            ## November 2026

            ### CLI v4.12.1 (2026-11-01) {/* #v4.12.1 */}
            * First November release

            """.trimIndent()

        assertThat(addRelease(page, "### CLI v4.12.2 (2026-11-03) {/* #v4.12.2 */}\n* Second November release\n")).isEqualTo(
            """
            ## Changelog

            ## November 2026

            ### CLI v4.12.2 (2026-11-03) {/* #v4.12.2 */}
            * Second November release

            ### CLI v4.12.1 (2026-11-01) {/* #v4.12.1 */}
            * First November release

            """.trimIndent()
        )
    }

    @Test
    fun releasesAboveTheFirstMonthHeaderMoveUnderTheirMonth() {
        val page = """
            ## Changelog

            ### CLI v4.12.1 (2026-11-01) {/* #v4.12.1 */}
            * First November release

            ### CLI v4.12.0 (2026-10-30) {/* #v4.12.0 */}
            * Last October release


            ## October 2026

            ### CLI v4.11.0 (2026-10-18) {/* #v4.11.0 */}
            * Earlier October release

            """.trimIndent()

        assertThat(addRelease(page, "### CLI v4.12.2 (2026-11-03) {/* #v4.12.2 */}\n* Second November release\n")).isEqualTo(
            """
            ## Changelog

            ## November 2026

            ### CLI v4.12.2 (2026-11-03) {/* #v4.12.2 */}
            * Second November release

            ### CLI v4.12.1 (2026-11-01) {/* #v4.12.1 */}
            * First November release

            ## October 2026

            ### CLI v4.12.0 (2026-10-30) {/* #v4.12.0 */}
            * Last October release

            ### CLI v4.11.0 (2026-10-18) {/* #v4.11.0 */}
            * Earlier October release

            """.trimIndent()
        )
    }
}
