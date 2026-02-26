---
sidebar_label: Troubleshooting commit issues
description: How to troubleshoot common commit and pull request failures in the Moderne Platform.
---

# Troubleshooting commit issues

This guide covers the most common commit and pull request failure scenarios in the Moderne Platform, their root causes, and how to resolve them. For general information on creating commits and PRs, see [Working with commits and PRs](./track-commits.md).

## "Unable to apply changes" (LST source differs from repository)

This is the most common commit failure. It occurs when the source code in the Lossless Semantic Tree (LST) no longer matches the current state of the repository.

You will see an error like:

> Unable to apply changes to this repository on the latest commit for this branch. This is typically caused by the LST being out of date.

### Root causes

* **New commits were pushed after the LST was built.** If the repository has received new commits since the LST was ingested, the LST is stale and Moderne cannot cleanly apply the recipe's changes.
* **The build modifies files in a way that differs from what is checked into git.** The LST is built from the state of the source code _during_ the build. If anything in your build pipeline changes file contents — code generators, formatters, preprocessors, or post-processing scripts — the LST will capture those modified contents rather than what is checked into git. Common examples include:
  * **Code generators** (OpenAPI Generator, Protobuf, JAXB, etc.) that stamp build timestamps, version strings, or other non-deterministic values into generated files.
  * **Formatters or linters** (Prettier, google-java-format, etc.) running as part of the build that reformat source files differently than what is committed.
  * **Annotation processors** that produce or modify source files during compilation.
  * **Build plugins** that inject values (e.g., Git commit hashes, build dates) into source files.
* **Encoding or charset mismatches.** If the LST was built with a different character encoding than what is in the repository, the source text won't match.

### Troubleshooting steps

1. **Check whether the mismatched files are modified by the build.** Look for `@Generated` annotations, `/generated/` directory paths, files produced by code generation tools, or files that a formatter might have reformatted.
2. **Verify the LST is up to date.** Compare the LST ingestion timestamp with recent commits in the repository. If the repository has received commits since ingestion, the LST is stale.
3. **Re-ingest the LST and try again.** Trigger a fresh LST build so that it captures the current state of the repository, then rerun the recipe and commit.
4. **Make your build deterministic.** Ensure that running the build twice on the same source produces identical output. Disable timestamp injection in code generators, pin formatter versions, and avoid build plugins that inject non-deterministic values into source files. If certain generated files don't need recipe changes, exclude those directories from LST ingestion.

## SCM authentication and token issues (UI and API)

Commit failures related to authentication typically appear as permission denied errors, 401/403 HTTP responses, or provider-specific error messages. These issues can occur whether you commit through the Moderne UI or the GraphQL API.

### Root causes

* **OAuth token expired.** SCM tokens obtained through the Moderne UI have a limited lifespan. For GitHub, OAuth tokens expire after 8 hours. If your session has been open longer than that, your token may no longer be valid.
* **Insufficient SCM permissions.** Your SCM account may not have write or push access to the target repository.

### Troubleshooting steps

1. **Re-authorize your SCM connection** through the Moderne UI. Navigate to your user settings and reconnect your SCM provider to obtain a fresh token.
2. **Verify your SCM account has write permissions** to the target repository. Try pushing a test commit directly through your SCM provider to confirm access. Depending on your organization's policies, you may only have permission to push to a fork or to specific branches. If you intend to create a pull request, confirm that your account can push to the branch Moderne will use as the PR source.

## SCM authentication issues (API only)

When committing through the [GraphQL API](./recipe-execution-and-commits-with-graphql.md), there are additional authentication issues that don't apply to the UI.

### Root causes

* **Missing SCM token.** The `scmAccessTokens` input is required when using the GraphQL mutation to create commits. Without it, the commit will fail with a permissions error.
* **Azure DevOps service principal not supported.** If you pass a service principal token to the API, you may see errors like:

  > TF401019: The Git repository with name or identifier does not exist or you do not have permissions

  or:

  > VS860045: Provided subject type 'aadsp' is not supported

  Azure DevOps requires a User-type personal access token (PAT), not a service principal token.

### Troubleshooting steps

1. **Ensure `scmAccessTokens` is provided** in the commit mutation. See [Creating SCM access tokens](../references/create-scm-access-tokens.md) for setup instructions.
2. **For Azure DevOps:** Use a User-type PAT, not a service principal token. Ensure the PAT has `Code (Read & Write)` scope at minimum.

## Rate limiting

When committing at scale, you may encounter rate limit errors from your SCM provider.

### How Moderne handles rate limits

Moderne automatically handles rate limiting with exponential backoff. When a rate limit error is encountered, the commit job retries up to three times with increasing wait times (2 minutes, 4 minutes, and 8 minutes). If all retries are exhausted, the job is marked as failed. See [Working with commits and PRs](./track-commits.md#rate-limiting-and-retry-logic) for more details.

### Root causes

* **GitHub API rate limits.** GitHub Apps are rate-limited per organization installation, not per user. When multiple users commit simultaneously through the same GitHub App installation, they share the same rate limit pool, which can be exhausted quickly.
* **SCM provider throttling.** Bitbucket, GitLab, and Azure DevOps each have their own rate limit policies that may be triggered during large-scale commit operations.

### Troubleshooting steps

1. **Wait and retry.** If you see rate limit errors, wait for the backoff period to pass and then click the **Re-run failed** button in the [commit view](./track-commits.md#how-to-use-the-commit-view).
2. **Be aware of shared rate limits.** For GitHub Apps, coordinate with other users in your organization to avoid exhausting the per-installation rate limit simultaneously.
3. **Stagger large commit jobs.** If you need to commit to hundreds of repositories, consider breaking the work into smaller batches spread across time.

## Pull request already exists

When attempting to create a PR, you may see an error like:

> A pull request already exists for `user:branch-name`

### Root cause

A PR is already open from the same source branch. SCM providers do not allow duplicate PRs from the same branch to the same target.

### Troubleshooting steps

1. **Close or merge the existing PR** before creating a new one from the same branch.
2. **Use a different branch name** for the new commit to avoid the conflict.
3. **Push to the existing branch** if you want to update the existing PR. Note that this can cause conflicts if the branch has been modified — see [Conflicts when pushing to existing PR branches](#conflicts-when-pushing-to-existing-pr-branches) below.

## Repository is archived or read-only

Commits will fail if the target repository has been archived or set to read-only in your SCM provider.

### Root cause

Archived repositories are read-only. SCM providers reject all write operations (commits, branches, PRs) to archived repositories.

### Troubleshooting steps

1. **Check whether the repository is archived** in your SCM provider's settings.
2. **Unarchive the repository** if changes are needed, then retry the commit.
3. **Exclude archived repositories** from your recipe results before committing by deselecting them in the results view.

## NON_FAST_FORWARD errors (direct commits)

When using the direct commit strategy (not creating a PR), you may encounter a `NON_FAST_FORWARD` rejection.

### Root cause

This occurs when the LST was built against an older commit than the current branch HEAD. The direct commit strategy attempts to push a commit based on the LST's version of the code, but the branch has moved forward since then. The rebase fallback may also fail if there are conflicts between the recipe's changes and the new commits.

### Troubleshooting steps

1. **Re-ingest the LST** so it matches the latest commit on the target branch, then rerun the recipe and commit.
2. **Use the PR strategy instead of direct commit.** PRs are more resilient to concurrent changes because the SCM provider handles merge resolution.

## Conflicts when pushing to existing PR branches

If you have an open PR and attempt to push additional recipe changes to the same branch, the operation may fail due to conflicts.

### Root cause

When Moderne pushes changes to an existing PR branch, it rebases the new changes onto the branch. If the branch has been manually modified, or if a different recipe's results were previously pushed to it, conflicts can arise that prevent the rebase from completing.

### Troubleshooting steps

1. **Don't manually modify Moderne-created branches.** If you need to make manual adjustments, do so after all Moderne commits are complete.
2. **Close the PR and create a new one** if the branch has diverged from what Moderne expects.
3. **Avoid pushing different recipe results to the same branch.** Each recipe should use its own branch name to prevent conflicts.

## Commit shows "No changes"

In some cases, a recipe produces results in the Moderne UI, but the commit reports that no changes were made.

### Root cause

The recipe detected changes, but those changes were filtered out during the commit process. This can happen when:

* Changed files are excluded by `.gitignore` in the target repository.
* Commit filters removed the affected files.
* The recipe produced changes that are identical to what already exists in the repository (e.g., the LST was slightly out of date but the net change is zero).

### Troubleshooting steps

1. **Review the recipe results** to confirm that real, substantive changes were detected.
2. **Check that the changed files aren't gitignored** in the target repository.
3. **Re-ingest the LST** and rerun the recipe to ensure the results reflect the current state of the code.

## Additional resources

* [Working with commits and PRs](./track-commits.md) — general commit workflow and tracking
* [Recipe execution and commits with GraphQL](./recipe-execution-and-commits-with-graphql.md) — committing via the API
* [Creating SCM access tokens](../references/create-scm-access-tokens.md) — token setup and configuration
* [Troubleshooting LST issues](../../../administrator-documentation/moderne-platform/how-to-guides/troubleshooting-lst-issues.md) — resolving LST ingestion and visibility problems
