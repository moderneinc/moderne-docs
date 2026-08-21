import type { ReactNode } from 'react';

/** The DocSearch icon set, transcribed from `@docsearch/react@4.6.3`; ./docsearch.css depends on these shapes. */

export function SearchIcon({ size = 20 }: { size?: number }): ReactNode {
  return (
    <svg
      width={size}
      height={size}
      className="DocSearch-Search-Icon"
      viewBox="0 0 24 24"
      aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" strokeWidth="1.4" />
      <path
        d="m21 21-4.3-4.3"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(): ReactNode {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <path
        d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RecentIcon(): ReactNode {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <g
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" />
        <path d="M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" />
      </g>
    </svg>
  );
}

export function FavoriteIcon(): ReactNode {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <path
        d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Result row pointing at a whole page. */
export function PageIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

/** Result row pointing at a heading within a page. */
export function HeadingIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  );
}

/** The "press enter to open" glyph trailing a result row. */
export function SelectIcon(): ReactNode {
  return (
    <svg className="DocSearch-Hit-Select-Icon" width="20" height="20" viewBox="0 0 20 20">
      <g
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M18 3v4c0 2-2 4-4 4H2" />
        <path d="M8 17l-6-6 6-6" />
      </g>
    </svg>
  );
}

export function NoResultsIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5a5e9a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m13.5 8.5-5 5" />
      <path d="m8.5 8.5 5 5" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function LoadingIcon(): ReactNode {
  return (
    <svg viewBox="0 0 38 38" stroke="currentColor" strokeOpacity=".5">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".3" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}

/** Wraps the small keycap glyphs in the modal footer. */
function CommandIcon({ ariaLabel, children }: { ariaLabel: string; children: ReactNode }): ReactNode {
  return (
    <svg width="20" height="20" aria-label={ariaLabel} viewBox="0 0 24 24" role="img">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4">
        {children}
      </g>
    </svg>
  );
}

export function ArrowDownIcon({ ariaLabel }: { ariaLabel: string }): ReactNode {
  return (
    <CommandIcon ariaLabel={ariaLabel}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </CommandIcon>
  );
}

export function ArrowUpIcon({ ariaLabel }: { ariaLabel: string }): ReactNode {
  return (
    <CommandIcon ariaLabel={ariaLabel}>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </CommandIcon>
  );
}

export function EnterKeyIcon({ ariaLabel }: { ariaLabel: string }): ReactNode {
  return (
    <CommandIcon ariaLabel={ariaLabel}>
      <polyline points="9 10 4 15 9 20" />
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </CommandIcon>
  );
}

/** The elbow joining a heading row to its page row; the stubbed variant ends the branch. */
export function TreeIcon({ isLastChild }: { isLastChild: boolean }): ReactNode {
  return (
    <svg className="DocSearch-Hit-Tree" viewBox="0 0 24 54">
      <g
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d={isLastChild ? 'M8 6v21M20 27H8.3' : 'M8 6v42M20 27H8.3'} />
      </g>
    </svg>
  );
}
