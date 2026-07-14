// Node --require hook that monkey-patches Docusaurus's SSG executor to render
// only a subset of routes per shard, serializes per-shard link/anchor data for
// cross-shard broken-link aggregation, and suppresses the per-shard
// broken-link check (the combine job runs an aggregated check instead).
//
// Loaded via scripts/build-shard.js.

const SHARD_INDEX = parseInt(process.env.SHARD_INDEX ?? '', 10);
const SHARD_TOTAL = parseInt(process.env.SHARD_TOTAL ?? '', 10);

if (Number.isNaN(SHARD_INDEX) || Number.isNaN(SHARD_TOTAL)) {
  return;
}

if (SHARD_TOTAL < 1 || SHARD_INDEX < 0 || SHARD_INDEX >= SHARD_TOTAL) {
  throw new Error(
    `Invalid shard config: SHARD_INDEX=${SHARD_INDEX} SHARD_TOTAL=${SHARD_TOTAL}`,
  );
}

const fs = require('fs');
const path = require('path');
const ssgExecutor = require('@docusaurus/core/lib/ssg/ssgExecutor');
const { flattenRoutes } = require('@docusaurus/utils');

const originalExecuteSSG = ssgExecutor.executeSSG;

// Routes matched here are pulled out of the normal modulo pool and rendered
// exclusively by the last shard, giving them an isolated memory budget.
// All auto-generated lists/ pages are large and prone to OOM in normal shards.
const HEAVY_ROUTE_PATTERNS = [
  '/user-documentation/recipes/lists',
];

ssgExecutor.executeSSG = async function shardedExecuteSSG(opts) {
  // Keep the untouched full route list so we can restore it after SSG. The
  // reduced list below only limits what THIS shard renders; postBuild plugins
  // (client-redirects, sitemap) must still see every route or they validate
  // their targets against a partial route set and fail (e.g. redirects to
  // pages rendered by another shard look "missing").
  const originalRoutesPaths = opts.props.routesPaths;
  const allPaths = [...originalRoutesPaths].sort();
  const DEDICATED_SHARD = SHARD_TOTAL - 1;

  const isHeavy = (p) => HEAVY_ROUTE_PATTERNS.some((pat) => p === pat || p.startsWith(pat + '/'));
  const heavyPaths = allPaths.filter(isHeavy);
  const normalPaths = allPaths.filter((p) => !isHeavy(p));

  let mine;
  if (SHARD_INDEX === DEDICATED_SHARD) {
    // Last shard: only the heavy routes
    mine = heavyPaths;
  } else {
    // All other shards: split normal routes across SHARD_TOTAL - 1 buckets
    mine = normalPaths.filter((_, i) => i % (SHARD_TOTAL - 1) === SHARD_INDEX);
  }

  console.log(
    `[shard ${SHARD_INDEX}/${SHARD_TOTAL}] rendering ${mine.length} of ${allPaths.length} routes` +
    (SHARD_INDEX === DEDICATED_SHARD ? ' (dedicated heavy shard)' : ''),
  );
  opts.props.routesPaths = mine;

  const result = await originalExecuteSSG.call(this, opts);

  // Restore the full route list now that this shard is done rendering, so
  // postBuild lifecycle plugins (client-redirects target validation, sitemap)
  // operate on the complete set of routes rather than this shard's subset.
  // Every shard then emits the same redirect/sitemap files, which merge-shards
  // deduplicates via last-wins.
  opts.props.routesPaths = originalRoutesPaths;

  serializeShardMeta(result, opts);

  // Suppress the per-shard broken-link check; cross-shard aggregation
  // happens in the combine job using the serialized meta.
  opts.props.siteConfig.onBrokenLinks = 'ignore';
  opts.props.siteConfig.onBrokenAnchors = 'ignore';

  return result;
};

function serializeShardMeta(result, opts) {
  const collectedLinks = {};
  for (const [route, data] of Object.entries(result.collectedData)) {
    collectedLinks[route] = {
      links: data.links || [],
      anchors: data.anchors || [],
    };
  }

  const flatRoutes = flattenRoutes(opts.props.routes)
    .filter((r) => r.path !== '*')
    .map((r) => ({ path: r.path, exact: !!r.exact, strict: !!r.strict }));

  const metaPath = path.join(opts.props.outDir, '_shard-meta.json');
  fs.writeFileSync(
    metaPath,
    JSON.stringify({
      shardIndex: SHARD_INDEX,
      shardTotal: SHARD_TOTAL,
      onBrokenLinks: opts.props.siteConfig.onBrokenLinks,
      onBrokenAnchors: opts.props.siteConfig.onBrokenAnchors,
      flatRoutes,
      collectedLinks,
    }),
  );
  console.log(
    `[shard-patch] wrote ${metaPath} — ${Object.keys(collectedLinks).length} routes, ${flatRoutes.length} total`,
  );
}

console.log(
  `[shard-patch] active — shard ${SHARD_INDEX} of ${SHARD_TOTAL}`,
);
