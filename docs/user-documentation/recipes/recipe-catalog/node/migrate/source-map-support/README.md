---
description: Source-map-support OpenRewrite recipes.
---

# Source-map-support

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate `source-map-support` to Node.js native source maps](./migrate-source-map-support-to-native.md)
* [Remove the `source-map-support` dependency](./remove-unused-source-map-support-dependency.md)

## Recipes

* [Enable native source maps at launch and drop `source-map-support`](./enable-source-maps-at-launch.md)
* [Find source-map-support usages that need manual migration](./find-source-map-support-manual-migrations.md)
* [Replace `source-map-support` with `process.setSourceMapsEnabled()`](./replace-source-map-support-install.md)
* [Replace `source-map-support/register` with `--enable-source-maps` in `package.json`](./replace-source-map-support-register-in-package-json.md)
* [Replace `source-map-support/register` with `enable-source-maps` in mocha config](./replace-source-map-support-register-in-mocha-config.md)


