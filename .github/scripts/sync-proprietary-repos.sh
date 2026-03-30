#!/usr/bin/env bash
set -euo pipefail

ORG="${GITHUB_ORG:-moderneinc}"
PREFIX="rewrite-"
DATA_FILE=".github/data/proprietary-repos.txt"

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

# Extract current list from data file
current=$(sort "$DATA_FILE")

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

# Write the discovered repos to the data file
echo "$discovered" > "$DATA_FILE"
echo "Updated $DATA_FILE."
