import { slugify } from '../components/WhatsNew/slugify';

/**
 * The months on the What's new page, newest first. The sidebar lists these
 * under the page as section links, so keep them in step with the
 * WhatsNewMonth labels in docs/whats-new.mdx (a test checks this).
 */
export const whatsNewMonths = [
  'November 2026',
  'October 2026',
  'September 2026',
  'August 2026',
  'July 2026',
  'June 2026',
  'May 2026',
  'April 2026',
  'March 2026',
  'February 2026',
  'January 2026',
  'December 2025',
  'November 2025',
  'October 2025',
  'September 2025',
  'August 2025',
  'July 2025',
  'June 2025',
];

/** The in-page link for a month, e.g. /whats-new#november-2026 */
export function whatsNewMonthHref(label: string): string {
  return `/whats-new#${slugify(label)}`;
}
