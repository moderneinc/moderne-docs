#!/usr/bin/env bash
set -euo pipefail

ORG="${GITHUB_ORG:-moderneinc}"
PREFIX="rewrite-"
WORKFLOW_FILE=".github/workflows/update-proprietary-release-notes.yml"

# Repos to exclude (space-separated, add names here if needed)
EXCLUDE_REPOS=""

echo "Discovering ${PREFIX}* repos in ${ORG}..."

# Use gh to list all non-archived repos matching the prefix
discovered=$(gh repo list "$ORG" \
  --limit 200 \
  --no-archived \
  --json name \
  --jq ".[].name | select(startswith(\"${PREFIX}\"))" \
  | sort)

discovered_count=$(echo "$discovered" | wc -l | tr -d ' ')
echo "Found ${discovered_count} repos matching ${PREFIX}*"

# Apply exclusions
if [ -n "$EXCLUDE_REPOS" ]; then
  for repo in $EXCLUDE_REPOS; do
    discovered=$(echo "$discovered" | grep -v "^${repo}$" || true)
  done
fi

# Extract current list from workflow file
current=$(sed -n '/repositories: |/,/^[[:space:]]*$/p' "$WORKFLOW_FILE" \
  | tail -n +2 \
  | sed '/^[[:space:]]*$/d' \
  | sed 's/^[[:space:]]*//' \
  | sort)

# Diff
added=$(comm -23 <(echo "$discovered") <(echo "$current"))
removed=$(comm -13 <(echo "$discovered") <(echo "$current"))

if [ -z "$added" ] && [ -z "$removed" ]; then
  echo "Repo list is already up to date."
  exit 0
fi

if [ -n "$added" ]; then
  echo "Adding: $added"
fi
if [ -n "$removed" ]; then
  echo "Removing: $removed"
fi

# Build the indented repo block (12 spaces to match existing format)
repo_block=$(echo "$discovered" | sed 's/^/            /')

# Write the new repo block to a temp file for awk to read
repo_file=$(mktemp)
echo "$repo_block" > "$repo_file"

# Replace the repositories block in the workflow file
# Strategy: skip lines inside the repo block, insert new block at the boundary
awk -v repo_file="$repo_file" '
  /repositories: \|/ {
    print
    in_repos = 1
    next
  }
  in_repos && (/^[[:space:]]*$/ || /^[[:space:]]+- /) {
    while ((getline line < repo_file) > 0) print line
    close(repo_file)
    in_repos = 0
  }
  !in_repos { print }
' "$WORKFLOW_FILE" > "${WORKFLOW_FILE}.tmp"

rm -f "$repo_file"
mv "${WORKFLOW_FILE}.tmp" "$WORKFLOW_FILE"
echo "Updated workflow file."
