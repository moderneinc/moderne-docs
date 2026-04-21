---
description: Migration OpenRewrite recipes.
---

# Migration

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Move `DOCUMENT` import to `@angular/core`](./move-document-import.md)
* [Remove IE11 polyfills](./remove-ie-polyfills.md)
* [Replace deep `zone.js` imports](./replace-deep-zone-js-imports.md)
* [Replace form classes with untyped variants](./replace-untyped-forms.md)
* [Replace `node-sass` with `sass`](./replace-node-sass-with-sass.md)

## Recipes

* [Add `@angular/localize/init` polyfill import](./add-localize-polyfill.md)
* [Add TestBed module teardown](./add-testbed-teardown.md)
* [Add `defaultConfiguration` to build targets](./add-default-configuration.md)
* [Add generic type to `ModuleWithProviders`](./add-module-with-providers-generic.md)
* [Add `static: false` to view queries](./add-static-false-to-view-queries.md)
* [Enable AOT compilation in `angular.json`](./enable-aot-build.md)
* [Make standalone flag explicit](./explicit-standalone-flag.md)
* [Migrate `@Input()` to signal-based `input()`](./migrate-input-to-signal.md)
* [Migrate `@Output()` to signal-based `output()`](./migrate-output-to-signal.md)
* [Migrate constructor injection to `inject()`](./migrate-constructor-to-inject.md)
* [Migrate query decorators to signal-based functions](./migrate-query-to-signal.md)
* [Migrate to solution-style tsconfig](./migrate-to-solution-style-tsconfig.md)
* [Remove `BrowserModule.withServerTransition`](./remove-browser-module-with-server-transition.md)
* [Remove `ComponentFactoryResolver`](./remove-component-factory-resolver.md)
* [Remove `aotSummaries` from TestBed](./remove-aot-summaries.md)
* [Remove `defaultProject` from `angular.json`](./remove-default-project.md)
* [Remove empty `ngOnInit` lifecycle hooks](./remove-empty-ng-on-init.md)
* [Remove `enableIvy` compiler option](./remove-enable-ivy.md)
* [Remove `entryComponents`](./remove-entry-components.md)
* [Remove `es5BrowserSupport` from `angular.json`](./remove-es5-browser-support.md)
* [Remove `extractCss` from `angular.json`](./remove-extract-css.md)
* [Remove `moduleId`](./remove-module-id.md)
* [Remove redundant `standalone: true`](./remove-standalone-true.md)
* [Remove `relativeLinkResolution`](./remove-relative-link-resolution.md)
* [Remove `static: false` from view queries](./remove-static-false.md)
* [Remove zone.js polyfill from angular.json](./remove-zone-js-polyfill.md)
* [Rename `ExperimentalPendingTasks` to `PendingTasks`](./rename-pending-tasks.md)
* [Rename `afterRender` to `afterEveryRender`](./rename-after-render.md)
* [Rename file](./rename-file.md)
* [Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesForDebug`](./rename-check-no-changes.md)
* [Rename `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection`](./rename-zoneless-provider.md)
* [Replace `HttpClientModule` with `provideHttpClient()`](./replace-http-client-module.md)
* [Replace `InjectFlags` with options object](./replace-inject-flags.md)
* [Replace `RouterLinkWithHref` with `RouterLink`](./replace-router-link-with-href.md)
* [Replace `TestBed.get()` with `TestBed.inject()`](./replace-testbed-get-with-inject.md)
* [Replace `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`](./replace-view-encapsulation-native.md)
* [Replace `async` with `waitForAsync`](./replace-async-with-wait-for-async.md)
* [Replace `initialNavigation` option values](./replace-initial-navigation.md)
* [Replace string-based `loadChildren` with dynamic `import()`](./replace-load-children-string.md)
* [Replace `validator`/`asyncValidator` with plural forms](./replace-validator-with-validators.md)
* [Update component `templateUrl`](./update-component-template-url.md)
* [Update `tsconfig.json` module settings for Ivy](./update-tsconfig-module.md)
* [Update `tsconfig.json` target to `es2017`](./update-tsconfig-target.md)


