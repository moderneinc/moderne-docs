import type { Plugin } from '@docusaurus/types';
import * as fs from 'fs/promises';
import * as path from 'path';

interface PluginOptions {
  noIndexPatterns: string[];
}

const META_TAG = '<meta name="robots" content="noindex">';

export default function pluginNoIndexRecipes(
  _context: unknown,
  options: PluginOptions,
): Plugin {
  return {
    name: 'docusaurus-plugin-noindex-recipes',

    async postBuild({ routesPaths, outDir }) {
      const matchingRoutes = routesPaths.filter((routePath) =>
        options.noIndexPatterns.some((pattern) => routePath.startsWith(pattern)),
      );

      console.log(
        `[noindex-recipes] Injecting noindex meta tag into ${matchingRoutes.length} pages...`,
      );

      await Promise.all(
        matchingRoutes.map(async (routePath) => {
          const htmlFilePath = path.join(outDir, routePath, 'index.html');

          try {
            let html = await fs.readFile(htmlFilePath, 'utf-8');

            if (!html.includes('name="robots"')) {
              html = html.replace('<head>', `<head>\n    ${META_TAG}`);
              await fs.writeFile(htmlFilePath, html, 'utf-8');
            }
          } catch {
            // Some routes may not have a corresponding HTML file
          }
        }),
      );

      console.log(`[noindex-recipes] Done.`);
    },
  };
}
