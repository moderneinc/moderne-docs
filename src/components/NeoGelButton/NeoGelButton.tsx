import React, { FunctionComponent } from 'react';
import styles from './NeoGelButton.module.css';
import clsx from 'clsx';

export type NeoGelButtonProps = {
  /** Path to gem icon image (e.g., '/img/gems/clear-block.png') */
  gemIcon: string;

  /** Button text content */
  children: React.ReactNode;

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  /** Disabled state */
  disabled?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Button type attribute (only used when rendering as button) */
  type?: 'button' | 'submit' | 'reset';

  /** Aria label for accessibility */
  'aria-label'?: string;

  /** If provided, renders as an <a> tag instead of <button> */
  href?: string;

  /** Link target (only used with href) */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /** Link rel attribute (only used with href) */
  rel?: string;
};

/**
 * NeoGelButton component for product branding
 * Displays a gem icon alongside text, styled as a pill-shaped button
 * Based on Figma Gel Button design from Neo Design System
 *
 * The gemIcon prop should be the path to the gem image, typically derived
 * from the sidebar configuration (customProps.gemIcon).
 */
export const NeoGelButton: FunctionComponent<NeoGelButtonProps> = ({
  gemIcon,
  children,
  onClick,
  disabled = false,
  className,
  type = 'button',
  'aria-label': ariaLabel,
  href,
  target,
  rel,
}) => {
  const buttonClasses = clsx(
    styles.neoGelButton,
    {
      [styles['neoGelButton--disabled']]: disabled,
    },
    className
  );

  const content = (
    <>
      <span className={styles.neoGelButton__icon}>
        <img src={gemIcon} alt="" className={styles.neoGelButton__gem} />
      </span>
      <span className={styles.neoGelButton__text}>{children}</span>
    </>
  );

  // Render as link if href is provided
  if (href) {
    // Add security attributes for target="_blank" to prevent tabnapping
    const secureRel = target === '_blank'
      ? rel
        ? `${rel} noopener noreferrer`
        : 'noopener noreferrer'
      : rel;

    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target}
        rel={secureRel}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

NeoGelButton.displayName = 'NeoGelButton';
