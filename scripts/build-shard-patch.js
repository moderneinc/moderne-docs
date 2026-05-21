// Node --require hook that monkey-patches Docusaurus's SSG executor to render
// only a subset of routes per shard. Loaded via scripts/build-shard.js.

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

const ssgExecutor = require('@docusaurus/core/lib/ssg/ssgExecutor');
const originalExecuteSSG = ssgExecutor.executeSSG;

ssgExecutor.executeSSG = async function shardedExecuteSSG(opts) {
  const allPaths = [...opts.props.routesPaths].sort();
  const mine = allPaths.filter((_, i) => i % SHARD_TOTAL === SHARD_INDEX);
  console.log(
    `[shard ${SHARD_INDEX}/${SHARD_TOTAL}] rendering ${mine.length} of ${allPaths.length} routes`,
  );
  opts.props.routesPaths = mine;
  return originalExecuteSSG.call(this, opts);
};

console.log(
  `[shard-patch] active — shard ${SHARD_INDEX} of ${SHARD_TOTAL}`,
);
