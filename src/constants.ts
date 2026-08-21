/**
 * Base64-encoded id of the `Default` organization — the curated sample-repo
 * org first-time trial runs target. Must stay in sync with moderne-ui's
 * DEFAULT_ORG_ID (helpers/organizations.helper.ts); moderne-ui's
 * useOrganizationFromUrl hook decodes this value with the same base64
 * encoding this was produced with.
 *
 * NOTE: this is currently the DEV-tenant value (raw id 'ALL/Default',
 * resolved against api.dev.moderne.io) — no production credential was
 * available when this was set. It MUST be re-verified against
 * api.app.moderne.io before this feature ships to production.
 */
export const DEFAULT_ORG_ID_B64 = 'QUxML0RlZmF1bHQ=';
