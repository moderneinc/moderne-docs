// Swizzled from @docusaurus/theme-classic to render labels containing inline
// HTML (e.g. <code> tags from backticks in recipe sidebar_label values).
//
// scripts/build-recipe-catalog/generate-sidebar.js pre-renders labels through
// `marked.parseInline()`, so labels that contain '<' are HTML strings and must
// be injected via dangerouslySetInnerHTML. Plain text labels render unchanged.

import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/DocSidebarItem/Link';

import styles from './styles.module.css';

function LinkLabel({ label }: { label: string }) {
  const hasHtml = label.includes('<');
  // Strip tags for the title attribute (tooltip on hover) so it stays as
  // plain text even when the visible label uses inline code/em/etc.
  const titleText = hasHtml ? label.replace(/<[^>]+>/g, '') : label;
  return hasHtml ? (
    <span
      title={titleText}
      className={styles.linkLabel}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  ) : (
    <span title={label} className={styles.linkLabel}>
      {label}
    </span>
  );
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          { 'menu__link--active': isActive },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        <LinkLabel label={label} />
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
