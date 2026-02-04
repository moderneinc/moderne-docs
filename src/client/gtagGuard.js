// Guard against gtag not being loaded during HMR/client-side navigation
// This provides a no-op stub until the real gtag loads
if (typeof window !== 'undefined' && !window.gtag) {
  window.gtag = function() {
    // Queue commands for when gtag loads
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  };
}
