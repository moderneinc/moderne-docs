import { Bot, BookOpen, Layers, Server, Sparkles, SquareTerminal } from 'lucide-react';
import type { FunctionComponent } from 'react';

export type WhatsNewProduct =
  | 'platform'
  | 'cli'
  | 'dx'
  | 'openrewrite'
  | 'agents'
  | 'moddy'
  | 'docs'
  | 'moderne';

/**
 * The products that get a filter chip, in chip order. Other products still
 * label their entries, which show under All.
 */
export const FILTERABLE_PRODUCTS: WhatsNewProduct[] = ['platform', 'cli', 'dx', 'openrewrite'];

const ICON_SIZE = 16;
const ICON_STROKE = 1.8;

/** The OpenRewrite mark, drawn with strokes so it takes the current color. */
const OpenRewriteIcon: FunctionComponent = () => (
  <svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 346 346"
    fill="none"
    stroke="currentColor"
    strokeWidth="17"
    strokeLinejoin="miter"
    aria-hidden="true"
  >
    <path d="M8.5 337.5V8.5H172.5A164 164 0 0 1 336.5 172.5H8.5" />
    <path d="M8.5 337.5H337.5L8.5 8.5" />
    <path d="M172.5 8.5V337.5" />
    <path d="M90.5 172.5V337.5" />
  </svg>
);

/** The Moderne mark, for company-wide announcements. */
const ModerneIcon: FunctionComponent = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.68 1.36a.51.51 0 0 0-.57.12l-9 9.14c-.59-5.23-4.97-9.3-10.27-9.3-.14 0-.27.06-.37.16s-.15.23-.15.38v19.97c0 .03 0 .05.01.08 0 .03.01.05.02.08v.02c0 .02.02.03.02.04.01.02.03.05.04.07s.03.04.05.06.04.04.06.05c.02.02.04.03.07.04.01 0 .03.02.04.03h.02c.06.02.12.04.18.04h19.63c.29 0 .52-.24.52-.53V1.85a.54.54 0 0 0-.32-.49zm-.73 1.77v8.16h-8.03zm0 13.14h-8.77v-3.92h8.77zM2.37 20.51v-8.16h8.03l-4.02 4.08-4.02 4.08zm0-18.11c4.71.27 8.49 4.11 8.76 8.89H2.37zm4.75 14.78 4.02-4.08v8.16H3.1zm5.06 4.08v-3.92h8.77v3.92z" />
  </svg>
);

const lucide =
  (Icon: typeof Layers): FunctionComponent =>
  () => <Icon size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />;

export type ProductMeta = {
  /** Label shown beside the icon, e.g. "Platform" */
  label: string;
  /** Icon component drawn in the current color */
  Icon: FunctionComponent;
};

export const products: Record<WhatsNewProduct, ProductMeta> = {
  platform: { label: 'Platform', Icon: lucide(Layers) },
  cli: { label: 'CLI', Icon: lucide(SquareTerminal) },
  dx: { label: 'DX', Icon: lucide(Server) },
  openrewrite: { label: 'OpenRewrite', Icon: OpenRewriteIcon },
  agents: { label: 'Agent tools', Icon: lucide(Bot) },
  moddy: { label: 'Moddy', Icon: lucide(Sparkles) },
  docs: { label: 'Docs', Icon: lucide(BookOpen) },
  moderne: { label: 'Moderne', Icon: ModerneIcon },
};
