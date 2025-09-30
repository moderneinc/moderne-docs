import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_ORG = process.env.GITHUB_ORG || 'moderneinc';

// List of proprietary recipe repositories
const RECIPE_REPOS = [
  'rewrite-ai-search',
  'rewrite-android',
  'rewrite-azul',
  'rewrite-circleci',
  'rewrite-codemods-ng',
  'rewrite-compiled-analysis',
  'rewrite-comprehension',
  'rewrite-concourse',
  'rewrite-dotnet',
  'rewrite-elastic',
  'rewrite-hibernate',
  'rewrite-java-security',
  'rewrite-kafka',
  'rewrite-kubernetes',
  'rewrite-nodejs',
  'rewrite-program-analysis',
  'rewrite-reactive-streams',
  'rewrite-spring',
  'rewrite-sql',
  'rewrite-terraform',
];

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

async function fetchReleases(repo) {
  try {
    const { data: releases } = await octokit.repos.listReleases({
      owner: GITHUB_ORG,
      repo: repo,
      per_page: 100, // Get all releases
    });

    return {
      repo,
      releases: releases.map(release => ({
        name: release.name || release.tag_name,
        tag: release.tag_name,
        published_at: release.published_at,
        body: release.body || '',
        html_url: release.html_url,
      })),
      mostRecentDate: releases.length > 0 ? new Date(releases[0].published_at) : new Date(0),
    };
  } catch (error) {
    console.error(`Error fetching releases for ${repo}:`, error.message);
    return {
      repo,
      releases: [],
      mostRecentDate: new Date(0),
    };
  }
}

async function generateChangelog() {
  console.log('Fetching releases from proprietary recipe repositories...');

  // Fetch all releases concurrently
  const allReleasesPromises = RECIPE_REPOS.map(repo => fetchReleases(repo));
  const repoReleases = await Promise.all(allReleasesPromises);

  // Sort repos by most recent release date (newest first)
  repoReleases.sort((a, b) => b.mostRecentDate - a.mostRecentDate);

  const totalReleases = repoReleases.reduce((sum, r) => sum + r.releases.length, 0);
  console.log(`Found ${totalReleases} total releases across ${RECIPE_REPOS.length} repositories`);

  // Generate markdown
  let markdown = `---
description: Changelog for Moderne proprietary OpenRewrite recipes.
---

# Proprietary recipe changelog

This page contains release notes for [Moderne proprietary OpenRewrite recipes](https://docs.openrewrite.org/reference/moderne-recipes).

:::info
This changelog is automatically generated from GitHub releases. Last updated: ${new Date().toISOString().split('T')[0]}
:::

`;

  // Output each repo's releases
  for (const { repo, releases } of repoReleases) {
    if (releases.length === 0) {
      continue;
    }

    markdown += `## ${repo}\n\n`;

    for (const release of releases) {
      if (!release.body) {
        // Skip releases with no body at all
        continue;
      }

      // Escape HTML-like tags that might be in code examples
      let escapedBody = release.body.trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Remove "New Contributors" section and everything after it
      const newContributorsIndex = escapedBody.indexOf('## New Contributors');
      if (newContributorsIndex !== -1) {
        escapedBody = escapedBody.substring(0, newContributorsIndex).trim();
      }

      // Convert ## and ### headers to bold text (to avoid competing with repo H2)
      escapedBody = escapedBody.replace(/^###? (.+)$/gm, '**$1**');

      // Remove references to private GitHub content:
      // 1. Remove "by @username" mentions
      escapedBody = escapedBody.replace(/\s+by @[\w-]+/g, '');

      // 2. Remove "in https://github.com/.../pull/..." references
      escapedBody = escapedBody.replace(/\s+in https:\/\/github\.com\/[^\s]+/g, '');

      // 3. Remove commit hashes (standalone, after "in", at end of lines, or in parentheses)
      escapedBody = escapedBody.replace(/\s+in [a-f0-9]{40}/g, '');
      escapedBody = escapedBody.replace(/\s+[a-f0-9]{40}\s*$/gm, '');
      escapedBody = escapedBody.replace(/\s*\([a-f0-9]{40}\)/g, '');

      // 4. Remove standalone links to github.com (like Full Changelog links)
      escapedBody = escapedBody.replace(/\*\*Full Changelog\*\*:\s*https:\/\/github\.com\/[^\s]+/g, '');

      // 5. Remove markdown links that point to github.com
      escapedBody = escapedBody.replace(/\[([^\]]+)\]\(https:\/\/github\.com\/[^)]+\)/g, '$1');

      // 6. Remove any remaining standalone github.com URLs
      escapedBody = escapedBody.replace(/https:\/\/github\.com\/[^\s)]+/g, '');

      // 7. Clean up OpenRewrite version update lines to be more descriptive
      escapedBody = escapedBody.replace(/^\*?\s*OpenRewrite\s+(v[\d.]+):\s*$/gm, '* Updated repository to use OpenRewrite version $1');

      // 8. Ensure **What's Changed** has exactly one blank line after it
      // First normalize to remove any existing newlines after it, then add exactly 2
      escapedBody = escapedBody.replace(/\*\*What's Changed\*\*\s*/gm, '**What\'s Changed**\n\n');

      // 10. Trim trailing whitespace
      escapedBody = escapedBody.trim();

      // Check if the body has meaningful content after cleanup
      const hasContent = escapedBody.length > 0;

      if (!hasContent) {
        // Skip this release entirely - no meaningful content
        continue;
      }

      const releaseDate = new Date(release.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      markdown += `#### ${release.name} - *${releaseDate}*\n\n${escapedBody}\n\n`;
    }
  }

  // Write to file
  const outputPath = path.join(__dirname, '../../docs/releases/proprietary-recipe-changelog.md');
  const outputDir = path.dirname(outputPath);

  // Ensure directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, markdown);
  console.log(`Changelog written to ${outputPath}`);
}

generateChangelog().catch(error => {
  console.error('Error generating changelog:', error);
  process.exit(1);
});