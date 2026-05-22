// Recipe-catalog pages live outside Docusaurus's route map (they're rendered
// by scripts/build-recipe-catalog/ and merged into the build). Docusaurus's
// React Router treats /user-documentation/recipes/recipe-catalog/... links as
// internal and tries to client-side route to them, which 404s.
//
// Intercept clicks on those links and force a full-page navigation so the
// server returns the static recipe HTML directly.

const RECIPE_PREFIX = '/user-documentation/recipes/recipe-catalog/';

if (typeof window !== 'undefined') {
  document.addEventListener(
    'click',
    (event) => {
      // Bail on modified clicks — user wants a new tab / window / download.
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest && event.target.closest('a[href]');
      if (!anchor) return;
      if (anchor.target && anchor.target !== '_self') return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith(RECIPE_PREFIX)) return;

      // Force a full navigation. The static recipe HTML at this URL doesn't
      // depend on Docusaurus's JS bundle.
      event.preventDefault();
      window.location.assign(href);
    },
    // Use capture phase so we run before Docusaurus's Link component.
    true,
  );
}
