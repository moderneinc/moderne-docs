#!/usr/bin/env bash
set -euo pipefail

ORG="${GITHUB_ORG:-moderneinc}"
PREFIXES="rewrite- recipes-"
DATA_FILE=".github/data/proprietary-repos.txt"

# Repos to exclude (space-separated exact names)
EXCLUDE_REPOS="rewrite-recipe-starter rewrite-module-template rewrite-kyndryl"
# Substrings that mark a repo for exclusion (any match excludes the repo)
EXCLUDE_SUBSTRINGS="workshop"

echo "Discovering repos in ${ORG} matching: ${PREFIXES// /* }*"

prefix_pattern="^($(echo "$PREFIXES" | tr ' ' '|'))"

# Use gh to list all non-archived repos matching any of the prefixes
discovered=$(gh repo list "$ORG" \
  --limit 500 \
  --no-archived \
  --json name \
  --jq '.[].name' \
  | { grep -E "$prefix_pattern" || true; } \
  | sort)

if [ -z "$discovered" ]; then
  echo "No repos discovered; refusing to overwrite ${DATA_FILE}." >&2
  exit 1
fi

discovered_count=$(echo "$discovered" | grep -c '')
echo "Found ${discovered_count} matching repos"

# Apply exact-name exclusions
if [ -n "$EXCLUDE_REPOS" ]; then
  for repo in $EXCLUDE_REPOS; do
    discovered=$(echo "$discovered" | grep -v "^${repo}$" || true)
  done
fi

# Apply substring exclusions
if [ -n "$EXCLUDE_SUBSTRINGS" ]; then
  for substr in $EXCLUDE_SUBSTRINGS; do
    discovered=$(echo "$discovered" | grep -v "$substr" || true)
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
