package io.moderne.docs

import java.time.LocalDate
import java.time.Month
import java.time.format.TextStyle
import java.util.Locale

/// A Moderne CLI release on GitHub, with its release notes.
internal data class CliRelease(val tag: String, val date: LocalDate, val notes: String)

private const val CHANGELOG = "## Changelog"
private val ANCHOR = Regex("""\{/\* #(v\d+\.\d+\.\d+) \*/\}""")
private val RELEASE_DATE = Regex("""\((\d{4})-(\d{2})-\d{2}\)""")
private val NOTES_HEADING = Regex("^##(#*) *")
private val CONVENTIONAL_COMMIT_PREFIX = Regex("""^ ?\* [A-Za-z0-9_-]+\([A-Za-z0-9_-]+\): """)
private val AUTHOR_AND_PULL_REQUEST = Regex(""" by \[?@.*""")
private val VERSION_ORDER = compareBy<List<Int>>({ it[0] }, { it[1] }, { it[2] })

/// The releases newer than the newest one on the page, oldest first, so that adding them in turn leaves the newest on top.
internal fun newReleases(page: String, releases: List<CliRelease>): List<CliRelease> {
    val newest = checkNotNull(ANCHOR.findAll(page).map { version(it.groupValues[1]) }.maxWithOrNull(VERSION_ORDER)) {
        "The CLI releases page lists no release to add newer ones above"
    }
    return releases
        .filter { VERSION_ORDER.compare(version(it.tag), newest) > 0 }
        .sortedWith(compareBy(VERSION_ORDER) { version(it.tag) })
}

/// The release's section, whose `{/* #vX.Y.Z */}` heading id lets it be linked as `cli-releases#vX.Y.Z`.
internal fun releaseSection(release: CliRelease, rewriteVersion: String?): String = buildString {
    append("### CLI ${release.tag} (${release.date}) {/* #${release.tag} */}\n\n")
    if (rewriteVersion != null) {
        append("_Based on [OpenRewrite $rewriteVersion](https://github.com/openrewrite/rewrite/releases/tag/v$rewriteVersion)_\n\n")
    }
    for (line in release.notes.lines()) {
        if (line.startsWith("## New Contributors")) {
            break
        }
        if ("**Full Changelog**" in line) {
            continue
        }
        var note = CONVENTIONAL_COMMIT_PREFIX.replaceFirst(NOTES_HEADING.replaceFirst(line, "####$1 "), "")
        if (note.isBlank()) {
            continue
        }
        note = AUTHOR_AND_PULL_REQUEST.replaceFirst(note, "")
        if (note[0] !in "#*-") {
            note = "* $note"
        }
        append(escapeMdx(note)).append('\n')
    }
}

/// Puts the release under its month's `## <Month> <Year>` header, which the page's sidebar lists releases by. Releases
/// between `## Changelog` and the first month header, as added before releases were grouped by month, move under theirs too.
internal fun addRelease(page: String, section: String): String {
    val lines = page.lines().toMutableList()
    val changelog = lines.indexOf(CHANGELOG)
    check(changelog >= 0) { "The CLI releases page has no $CHANGELOG header" }
    lines.addAll(changelog + 1, section.trim().lines())
    return groupByMonth(lines, changelog).joinToString("\n") + "\n"
}

/// Releases above the first month header are newest first, so a header is due wherever the month changes.
private fun groupByMonth(lines: List<String>, changelog: Int): List<String> {
    var firstHeader = changelog + 1
    while (firstHeader < lines.size && !lines[firstHeader].startsWith("## ")) {
        firstHeader++
    }

    val grouped = lines.subList(0, changelog + 1).toMutableList()
    var block = mutableListOf<String>()
    var month: String? = null
    for (line in lines.subList(changelog + 1, firstHeader)) {
        if (line.startsWith("### ")) {
            grouped.addBlock(block)
            block = mutableListOf()
            val releaseMonth = monthOf(line)
            if (releaseMonth != null && releaseMonth != month) {
                month = releaseMonth
                grouped.addBlock(listOf("## $month"))
            }
        }
        block += line
    }
    grouped.addBlock(block)

    var rest = lines.subList(firstHeader, lines.size)
    if (rest.firstOrNull() == "## $month") {
        rest = rest.subList(1, rest.size)
    }
    grouped.addBlock(rest)
    return grouped
}

private fun monthOf(heading: String): String? = RELEASE_DATE.find(heading)?.let { date ->
    val (year, month) = date.destructured
    Month.of(month.toInt()).getDisplayName(TextStyle.FULL, Locale.ENGLISH) + " " + year
}

private fun MutableList<String>.addBlock(block: List<String>) {
    val trimmed = block.dropWhile(String::isBlank).dropLastWhile(String::isBlank)
    if (trimmed.isNotEmpty()) {
        add("")
        addAll(trimmed)
    }
}

private fun version(tag: String) = tag.removePrefix("v").split('.').map(String::toInt)

/// MDX reads `<` as the start of a JSX element and `{` as the start of an expression. Code spans are read literally,
/// so they are left as they are.
private fun escapeMdx(markdown: String): String = buildString {
    var i = 0
    while (i < markdown.length) {
        val c = markdown[i]
        when {
            c == '\\' && i + 1 < markdown.length -> {
                append(markdown, i, i + 2)
                i += 2
            }
            c == '`' -> {
                val end = endOfCodeSpan(markdown, i)
                append(markdown, i, end)
                i = end
            }
            else -> {
                if (c == '<' || c == '{') {
                    append('\\')
                }
                append(c)
                i++
            }
        }
    }
}

/// A code span closes on a backtick run as long as the one that opened it. Without one, the opening run is literal.
private fun endOfCodeSpan(markdown: String, start: Int): Int {
    val fence = backticks(markdown, start)
    var i = start + fence
    while (i < markdown.length) {
        if (markdown[i] == '`') {
            val run = backticks(markdown, i)
            if (run == fence) {
                return i + run
            }
            i += run
        } else {
            i++
        }
    }
    return start + fence
}

private fun backticks(markdown: String, start: Int): Int {
    var i = start
    while (i < markdown.length && markdown[i] == '`') {
        i++
    }
    return i - start
}
