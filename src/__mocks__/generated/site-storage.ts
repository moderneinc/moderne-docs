/**
 * Mock implementation of @generated/site-storage for Storybook.
 *
 * Must match the real generated module's shape: `{ type, namespace }`.
 * Docusaurus's createStorageSlot reads `SiteStorage.type` to pick the
 * browser storage (`window[type]`) and appends `SiteStorage.namespace` to
 * every key. A missing `type`/`namespace` produces `window[undefined]`
 * (→ `getItem` of undefined) and keys like `...dismissundefined`.
 */

export default {
  type: 'localStorage' as const,
  namespace: '',
};
