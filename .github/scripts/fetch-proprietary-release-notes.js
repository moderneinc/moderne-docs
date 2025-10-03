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

async function getLastUpdateDate() {
  const outputPath = path.join(__dirname, '../../docs/releases/proprietary-recipe-changelog.md');

  if (!fs.existsSync(outputPath)) {
    return null;
  }

  const content = fs.readFileSync(outputPath, 'utf-8');
  const match = content.match(/Last updated: (\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : null;
}

async function generateChangelog() {
  console.log('Fetching releases from proprietary recipe repositories...');

  // Fetch all releases concurrently
  const allReleasesPromises = RECIPE_REPOS.map(repo => fetchReleases(repo));
  const repoReleases = await Promise.all(allReleasesPromises);

  const totalReleases = repoReleases.reduce((sum, r) => sum + r.releases.length, 0);
  console.log(`Found ${totalReleases} total releases across ${RECIPE_REPOS.length} repositories`);

  // Get the last update date from the existing file
  const lastUpdateDate = await getLastUpdateDate();
  console.log(`Last update date: ${lastUpdateDate || 'none (new file)'}`);

  // Flatten all releases and add repo name to each
  // Filter to only include releases from the last year
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const allReleases = [];
  for (const { repo, releases } of repoReleases) {
    for (const release of releases) {
      const releaseDate = new Date(release.published_at);
      if (releaseDate >= oneYearAgo) {
        allReleases.push({
          ...release,
          repo: repo
        });
      }
    }
  }

  console.log(`Filtered to ${allReleases.length} releases from the last year`);

  // Check if there are any new releases since last update
  const lastUpdateDateObj = lastUpdateDate ? new Date(lastUpdateDate + 'T00:00:00Z') : new Date(0);
  const hasNewReleases = allReleases.some(release => {
    const releaseDate = new Date(release.published_at);
    return releaseDate > lastUpdateDateObj;
  });

  if (!hasNewReleases && lastUpdateDate) {
    console.log('No new releases since last update. Keeping existing file.');
    return;
  }

  console.log(`Found ${hasNewReleases ? 'new' : 'initial'} releases to process`);

  // Group releases by date (using UTC to avoid timezone issues)
  const releasesByDate = new Map();
  for (const release of allReleases) {
    const date = new Date(release.published_at);
    const dateKey = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
    if (!releasesByDate.has(dateKey)) {
      releasesByDate.set(dateKey, []);
    }
    releasesByDate.get(dateKey).push(release);
  }

  // Sort dates (newest first) and sort releases within each date by repo name
  const sortedDates = Array.from(releasesByDate.keys()).sort((a, b) => {
    return new Date(b) - new Date(a);
  });

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

  // Output releases grouped by date
  for (const date of sortedDates) {
    const releases = releasesByDate.get(date);

    // Sort releases within this date by repo name
    releases.sort((a, b) => a.repo.localeCompare(b.repo));

    // Collect releases with content for this date
    let dateContent = '';
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

      // 8. Remove **What's Changed** headers entirely (it's redundant)
      escapedBody = escapedBody.replace(/\*\*What's Changed\*\*\s*/gm, '');

      // 9. Trim trailing whitespace
      escapedBody = escapedBody.trim();

      // Check if the body has meaningful content after cleanup
      const hasContent = escapedBody.length > 0;

      if (!hasContent) {
        // Skip this release entirely - no meaningful content
        continue;
      }

      // Include repo name with the version (H4 so it doesn't appear in sidebar)
      dateContent += `#### ${release.repo} - ${release.name}\n\n${escapedBody}\n\n`;
    }

    // Only add the date header if there's content for this date
    if (dateContent.length > 0) {
      markdown += `## ${date}\n\n${dateContent}`;
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