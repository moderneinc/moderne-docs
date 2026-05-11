import aa from 'search-insights';

// Pre-initialize the Algolia Insights client so it is bundled and available
// synchronously. Without this, DocSearch loads search-insights from CDN
// asynchronously, which causes click events to be queued but never flushed
// before page navigation.
aa('init', {
  appId: 'MEFFK0HGO6',
  apiKey: '15eb9c9f6f3147b1cf82b1b7f93cace8',
  useCookie: true,
});
