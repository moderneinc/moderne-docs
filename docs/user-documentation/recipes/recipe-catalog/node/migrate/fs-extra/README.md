---
description: Fs-extra OpenRewrite recipes.
---

# Fs-extra

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate `fs-extra` to Node.js `fs`](./migrate-fs-extra-to-node-fs.md)
* [Remove the `fs-extra` dependency](./remove-unused-fs-extra-dependency.md)

## Recipes

* [Find fs-extra usages that need manual migration](./find-fs-extra-manual-migrations.md)
* [Replace fs-extra `copy` with `fs.cp`](./replace-fs-extra-copy.md)
* [Replace fs-extra `emptyDir` with `mkdir` and `rm` of each entry](./replace-fs-extra-empty-dir.md)
* [Replace fs-extra `ensureDir`/`mkdirp`/`mkdirs` with `fs.mkdir`](./replace-fs-extra-mkdirs.md)
* [Replace fs-extra `ensureFile` with `fs.mkdir` and `fs.writeFile`](./replace-fs-extra-ensure-file.md)
* [Replace fs-extra `move` with a generated helper](./replace-fs-extra-move.md)
* [Replace fs-extra `outputFile` and `outputJson` with `mkdir` + `writeFile`](./replace-fs-extra-output-file.md)
* [Replace fs-extra `pathExists` with `fs.access`/`fs.existsSync`](./replace-fs-extra-path-exists.md)
* [Replace fs-extra `readJson` with `JSON.parse` of `readFile`](./replace-fs-extra-read-json.md)
* [Replace fs-extra `remove` with `fs.rm`](./replace-fs-extra-remove.md)
* [Replace fs-extra `writeJson` with `fs.writeFile`](./replace-fs-extra-write-json.md)
* [Replace fs-extra's re-exported `fs` methods with `node:fs`](./replace-fs-extra-native-methods.md)


