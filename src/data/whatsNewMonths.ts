import { slugify } from '../components/WhatsNew/slugify';

/**
 * The months on the What's new page, newest first. The page's table of
 * contents is built from these, so keep them in step with the WhatsNewMonth
 * labels in docs/whats-new.mdx (a test checks this).
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

/**
 * Table of contents entries for the What's new page. The month headings are
 * rendered by WhatsNewMonth, where Docusaurus can't find them, so the page
 * exports this as its `toc`.
 */
export const whatsNewToc = whatsNewMonths.map((label) => ({
  value: label,
  id: slugify(label),
  level: 2,
}));
