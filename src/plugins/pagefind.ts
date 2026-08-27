import { execFile } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';
import type { LoadContext, Plugin } from '@docusaurus/types';

const execFileAsync = promisify(execFile);

/** Generates the Pagefind index after a build, and serves the last build's index in dev. */
export default function pagefindPlugin(context?: LoadContext): Plugin<void> {
  // Docusaurus always passes a context; knip calls plugin factories bare.
  const siteDir = context?.siteDir ?? process.cwd();
  const baseUrl = context?.baseUrl ?? '/';

  return {
    name: 'moderne-pagefind',

    configureWebpack() {
      return {
        // Appends to the default static dirs, so /pagefind/* falls through to here.
        devServer: {
          static: [
            {
              publicPath: `${baseUrl}pagefind/`,
              directory: path.join(siteDir, 'build', 'pagefind'),
              watch: false,
            },
          ],
        },
      } as ReturnType<NonNullable<Plugin<void>['configureWebpack']>>;
    },

    async postBuild({ outDir }) {
      if (process.env.SHARD_INDEX !== undefined) {
        console.log(
          `[pagefind] Skipping index for shard ${process.env.SHARD_INDEX}; ` +
            'the combine step indexes the merged build.',
        );
        return;
      }

      if (process.env.SKIP_PAGEFIND) {
        console.log('[pagefind] Skipping index (SKIP_PAGEFIND is set).');
        return;
      }

      // A child process, since jiti would rewrite the script's ESM-only `pagefind` import into a require().
      const script = path.join(siteDir, 'scripts', 'pagefind-index.mjs');
      const { stdout, stderr } = await execFileAsync(process.execPath, [script, outDir], {
        cwd: siteDir,
        // Headroom so a verbose failure isn't truncated.
        maxBuffer: 10 * 1024 * 1024,
      });
      process.stdout.write(stdout);
      if (stderr) {
        process.stderr.write(stderr);
      }
    },
  };
}
