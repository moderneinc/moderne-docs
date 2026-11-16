import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import { Check, ChevronDown } from 'lucide-react';
import { type FunctionComponent, useCallback, useEffect, useId, useRef, useState } from 'react';
import styles from './PlatformToggle.module.css';

const USER_BASE = '/user-documentation/moderne-platform';
const ADMIN_BASE = '/administrator-documentation/moderne-platform';

const OPTIONS = [
  { key: 'user', label: 'User docs', trigger: 'user docs', href: USER_BASE },
  { key: 'admin', label: 'Admin docs', trigger: 'admin docs', href: ADMIN_BASE },
] as const;

/**
 * Sidebar heading for the Platform section that doubles as the switch between
 * the user and administrator docs. It reads as one phrase, "Platform user
 * docs", where the second part opens a menu with the two sets of docs.
 */
export const PlatformToggle: FunctionComponent = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const isAdmin = location.pathname.includes('/administrator-documentation/');
  const current = isAdmin ? OPTIONS[1] : OPTIONS[0];

  const close = useCallback(() => setOpen(false), []);

  // Close when the pointer lands outside the menu, or on Escape.
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onPointerDown = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        close();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);

  return (
    <div className={styles.switcher} ref={wrapperRef}>
      <span className={styles.label}>Platform</span>
      <span className={styles.triggerWrap}>
        <button
          type="button"
          className={clsx(styles.trigger, open && styles.triggerOpen)}
          onClick={() => setOpen((value) => !value)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`Platform ${current.trigger}. Switch between user and admin docs`}
        >
          {current.trigger}
          <ChevronDown className={styles.chevron} size={12} aria-hidden="true" />
        </button>
        {open && (
          <div className={styles.menu} role="menu" id={menuId} aria-label="Platform documentation">
            {OPTIONS.map((option) => {
              const active = option.key === current.key;
              return (
                <Link
                  key={option.key}
                  to={option.href}
                  role="menuitem"
                  className={clsx(styles.menuItem, active && styles.menuItemActive)}
                  aria-current={active ? 'page' : undefined}
                  onClick={close}
                >
                  {option.label}
                  {active && <Check className={styles.check} size={14} aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        )}
      </span>
    </div>
  );
};

PlatformToggle.displayName = 'PlatformToggle';
