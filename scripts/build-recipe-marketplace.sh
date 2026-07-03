#!/usr/bin/env bash
#
# Build the Moderne CLI recipe marketplace CSV.
#
# Installs every OpenRewrite recipe module listed in the generated "latest
# versions of every OpenRewrite module" doc, then copies the resulting
# recipes-v5.csv into this repository as a static resource.
#
# Two variants can be built (see RECIPE_VERSIONS):
#   * released  - jars resolved to their newest stable release (RELEASE), for
#                 conservative users. Written to static/recipes-v5-released.csv.
#   * snapshot  - jars resolved to the newest available build (LATEST), which
#                 includes Maven snapshots, for users who want to stay current.
#                 Written to static/recipes-v5-snapshot.csv.
# pip/npm/go modules are installed unversioned (newest published) in both.
#
# Uses the `mod` CLI already on your PATH if present; otherwise downloads the
# latest moderne-cli jar from Maven Central and runs it with `java`.
#
# All of the logic lives here (rather than in the workflow) so it can run both in
# CI (.github/workflows/build-recipe-marketplace.yml) and locally.
#
# Local usage:
#   scripts/build-recipe-marketplace.sh
#
# By default this writes CLI state to a throwaway temp directory, so a local run
# never reads or overwrites your personal ~/.moderne/cli catalog.
#
# Environment variables (all optional):
#   RECIPE_VERSIONS       'snapshot' (default) or 'released'; see above.
#   MODERNE_CLI_HOME      Base directory for CLI state. The marketplace CSV is
#                         written to $MODERNE_CLI_HOME/recipes-v5.csv. Defaults to
#                         a fresh temp dir so a local run starts from an empty
#                         catalog and never touches ~/.moderne/cli.
#   MODERNE_OPTS          Extra JVM options passed to `java` when the jar is
#                         downloaded (e.g. -Xmx4g). Ignored when using PATH `mod`.
#   MARKETPLACE_CSV_DEST  Where to copy the finished CSV
#                         (default: <repo>/static/recipes-v5.csv).
#   MODULES_DOC           Markdown doc to read the module install commands from
#                         (default: the generated latest-versions doc in this repo).
#
set -euo pipefail

log() { printf '==> %s\n' "$*"; }
warn() { printf 'WARN: %s\n' "$*" >&2; }
die() { printf 'ERROR: %s\n' "$*" >&2; exit 1; }

REPO_ROOT="$(git -C "$(dirname "${BASH_SOURCE[0]}")" rev-parse --show-toplevel)"

MODULES_DOC="${MODULES_DOC:-$REPO_ROOT/docs/user-documentation/recipes/lists/latest-versions-of-every-openrewrite-module.md}"
RECIPE_VERSIONS="${RECIPE_VERSIONS:-snapshot}"

case "$RECIPE_VERSIONS" in
  snapshot) DEFAULT_CSV=recipes-v5-snapshot.csv ;; # jars at LATEST (newest, incl. snapshots)
  released) DEFAULT_CSV=recipes-v5-released.csv ;; # jars at RELEASE (newest stable release)
  *) die "RECIPE_VERSIONS must be 'snapshot' or 'released', got '$RECIPE_VERSIONS'" ;;
esac
MARKETPLACE_CSV_DEST="${MARKETPLACE_CSV_DEST:-$REPO_ROOT/static/$DEFAULT_CSV}"

[ -f "$MODULES_DOC" ] || die "Modules doc not found: $MODULES_DOC"

# Work directory for downloads; cleaned up on exit.
WORK_DIR="$(mktemp -d)"
cleanup() { rm -rf "$WORK_DIR"; }
trap cleanup EXIT

# Isolate CLI state so we never read or clobber a developer's real catalog.
if [ -z "${MODERNE_CLI_HOME:-}" ]; then
  MODERNE_CLI_HOME="$WORK_DIR/cli-home"
  log "MODERNE_CLI_HOME not set; using throwaway dir $MODERNE_CLI_HOME"
fi
export MODERNE_CLI_HOME
mkdir -p "$MODERNE_CLI_HOME"

# ---------------------------------------------------------------------------
# 1. Acquire the Moderne CLI: reuse an installed `mod`, else download the jar.
# ---------------------------------------------------------------------------
if command -v mod >/dev/null 2>&1; then
  log "Using 'mod' found on PATH: $(command -v mod)"
  # `command mod` bypasses the mod() wrapper defined below.
  MOD_BIN=(command mod)
else
  MAVEN_BASE="https://repo1.maven.org/maven2/io/moderne/moderne-cli"
  log "No 'mod' on PATH; resolving latest moderne-cli from Maven Central"
  VERSION="$(curl -fsSL "$MAVEN_BASE/maven-metadata.xml" \
    | grep -o '<release>[^<]*</release>' | sed -e 's/<release>//' -e 's|</release>||' | head -1)"
  [ -n "$VERSION" ] || die "Could not resolve latest moderne-cli version"
  JAR="$WORK_DIR/moderne-cli-$VERSION.jar"
  log "Downloading moderne-cli $VERSION"
  curl -fsSL -o "$JAR" "$MAVEN_BASE/$VERSION/moderne-cli-$VERSION.jar"
  # MODERNE_OPTS is intentionally unquoted so multiple JVM flags word-split.
  # shellcheck disable=SC2206
  MOD_BIN=(java ${MODERNE_OPTS:-} -jar "$JAR")
fi

mod() { "${MOD_BIN[@]}" "$@"; }

# ---------------------------------------------------------------------------
# 2. Install every recipe module from the "Latest versions" tab of the doc.
# ---------------------------------------------------------------------------
# The doc is generated daily and is the single source of truth for the module
# list. Extract the `mod config recipes <ecosystem> install ...` command lines
# from the "Latest versions" tab (which pins nothing, so `upgrade` stays easy).
INSTALL_CMDS=()
while IFS= read -r cmd_line; do
  INSTALL_CMDS+=("$cmd_line")
done < <(awk '
  /<TabItem value="latest"/ { intab = 1 }
  intab && /<\/TabItem>/    { intab = 0 }
  intab && /^```/           { infence = !infence; next }
  intab && infence && /^mod config recipes/ { print }
' "$MODULES_DOC")

[ "${#INSTALL_CMDS[@]}" -gt 0 ] || die "No install commands found in $MODULES_DOC"

# Each non-jar ecosystem shells out to an external toolchain. Skip (with a loud
# warning) any ecosystem whose toolchain is missing rather than failing the run.
tool_available() {
  case "$1" in
    jar) command -v java >/dev/null ;;                       # always present (runs the CLI)
    pip) command -v python3 >/dev/null || command -v python >/dev/null ;;
    npm) command -v npm >/dev/null ;;
    go)  command -v go >/dev/null ;;
    *)   return 0 ;;
  esac
}

log "Installing recipe modules using $RECIPE_VERSIONS versions"
SKIPPED=()
for cmd in "${INSTALL_CMDS[@]}"; do
  # The snapshot/released distinction only applies to jars: `:LATEST` picks the
  # newest artifact (including Maven snapshots) while `:RELEASE` picks the newest
  # stable release. pip/npm/go lines carry no version token, so this is a no-op.
  [ "$RECIPE_VERSIONS" = released ] && cmd="${cmd//:LATEST/:RELEASE}"
  read -ra parts <<< "$cmd"          # mod config recipes <ecosystem> install <artifacts...>
  ecosystem="${parts[3]}"
  if ! tool_available "$ecosystem"; then
    warn "Skipping '$ecosystem' recipe modules: no '$ecosystem' toolchain on PATH"
    SKIPPED+=("$ecosystem")
    continue
  fi
  log "Installing '$ecosystem' recipe modules"
  mod "${parts[@]:1}"                # drop the literal leading `mod`
done

# ---------------------------------------------------------------------------
# 3. Copy the resulting marketplace CSV into the repository.
# ---------------------------------------------------------------------------
CSV_SRC="$MODERNE_CLI_HOME/recipes-v5.csv"
[ -f "$CSV_SRC" ] || die "Expected marketplace CSV not found at $CSV_SRC"

# Count CSV records, not physical lines: the options/dataTables JSON columns
# contain embedded newlines inside quoted fields. A record ends on any physical
# line where the running double-quote count is even (i.e. not mid-quoted-field).
ROW_COUNT="$(awk 'BEGIN { FS = "" }
  { for (i = 1; i <= NF; i++) if ($i == "\"") q++ }
  q % 2 == 0 { records++ }
  END { print records - 1 }' "$CSV_SRC")"
log "Marketplace CSV has $ROW_COUNT recipe row(s)"

mkdir -p "$(dirname "$MARKETPLACE_CSV_DEST")"
cp "$CSV_SRC" "$MARKETPLACE_CSV_DEST"
log "Wrote marketplace CSV to $MARKETPLACE_CSV_DEST"

if [ "${#SKIPPED[@]}" -gt 0 ]; then
  warn "Marketplace is missing modules for ecosystem(s): ${SKIPPED[*]} (toolchain unavailable)"
fi
