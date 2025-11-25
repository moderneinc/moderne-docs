/**
 * Custom BackToTopButton that shows when scrolled past threshold,
 * regardless of scroll direction (fixes Docusaurus default behavior
 * that only shows when scrolling up).
 */

import React, {useEffect, useState, useCallback, type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';

import styles from './styles.module.css';

const THRESHOLD = 50;

function useBackToTopButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShown(scrollTop > THRESHOLD);
    };

    // Check initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return {shown, scrollToTop};
}

export default function BackToTopButton(): ReactNode {
  const {shown, scrollToTop} = useBackToTopButton();

  return (
    <button
      aria-label={translate({
        id: 'theme.BackToTopButton.buttonAriaLabel',
        message: 'Scroll back to top',
        description: 'The ARIA label for the back to top button',
      })}
      className={clsx(
        'clean-btn',
        ThemeClassNames.common.backToTopButton,
        styles.backToTopButton,
        shown && styles.backToTopButtonShow,
      )}
      type="button"
      onClick={scrollToTop}
    />
  );
}
