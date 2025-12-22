import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { type ReactNode } from 'react';
import clsx from 'clsx';
import NavbarLogo from '@theme/Navbar/Logo';
import { Search, Moon, Sun } from 'lucide-react';

/**
 * Mock NavbarItem component for Storybook
 * Simulates Docusaurus NavbarItem without dependencies
 */
function MockNavbarItem({ label, to }: { label: string; to?: string }) {
  return (
    <a
      href={to || '#'}
      className="navbar__item navbar__link"
      style={{
        textDecoration: 'none',
        color: 'var(--ifm-navbar-link-color)',
        padding: '0.5rem 0.75rem',
        fontSize: '14px',
        fontWeight: 500,
      }}
    >
      {label}
    </a>
  );
}

/**
 * Mock SearchBar component for Storybook
 * Simulates Docusaurus SearchBar without dependencies
 */
function MockSearchBar() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: 'var(--ifm-background-surface-color)',
      }}
    >
      <Search size={16} color="var(--ifm-color-emphasis-600)" />
      <span style={{ fontSize: '14px', color: 'var(--ifm-color-emphasis-600)' }}>Search</span>
    </div>
  );
}

/**
 * Mock MobileSidebarToggle component for Storybook
 * Simulates Docusaurus mobile sidebar toggle button
 */
function MockMobileSidebarToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle navigation bar"
      className="navbar__toggle clean-btn"
      style={{
        display: 'none',
        padding: '0.5rem',
        marginRight: '0.5rem',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        role="img"
        focusable="false"
      >
        <title>Menu</title>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M4 7h22M4 15h22M4 23h22"
        />
      </svg>
    </button>
  );
}

/**
 * Mock ColorModeToggle component for Storybook
 * Simulates Docusaurus color mode toggle without dependencies
 */
function MockColorModeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  const toggleColorMode = () => {
    setIsDark(!isDark);
    // Toggle the data-theme attribute on the document element
    if (typeof document !== 'undefined') {
      const newTheme = !isDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleColorMode}
      className={className}
      aria-label="Toggle between dark and light mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: 'var(--ifm-navbar-link-color)',
      }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

/**
 * NavbarContentLayout - Extracted layout component
 *
 * Internal component that renders the navbar content layout for Storybook.
 * This is extracted to avoid Docusaurus hook dependencies (useLocation, useNavbarMobileSidebar, etc.).
 * The actual NavbarContent component uses several Docusaurus hooks.
 */
function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div className={clsx('navbar__items')}>
        {left}
      </div>
      <div className={clsx('navbar__items navbar__items--right')}>
        {right}
      </div>
    </div>
  );
}

/**
 * Navbar/Content - Swizzled Docusaurus component
 *
 * The main navbar content component that handles:
 * - Logo with MegaMenu integration
 * - Left and right navbar items
 * - Color mode toggle
 * - Search bar
 * - Mobile sidebar toggle
 * - Responsive layout
 *
 * Features:
 * - Integrates all navbar components into a cohesive layout
 * - Dark mode support
 * - Mobile-responsive behavior
 */
const meta: Meta<typeof NavbarContentLayout> = {
  title: 'Theme/Navbar/Content',
  component: NavbarContentLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus Navbar Content component with persona switcher, logo, navigation items, and search.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive
 *
 * Interactive navbar content showing the default configuration.
 * The navbar renders as-is without controls since it's composed of multiple sub-components.
 */
export const Interactive: Story = {
  render: () => (
    <div style={{ position: 'relative', minHeight: '800px' }}>
      <nav
        style={{
          background: 'var(--ifm-navbar-background-color)',
          borderBottom: '1px solid var(--ifm-color-border)',
          padding: '0 var(--ifm-navbar-padding-horizontal)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <NavbarContentLayout
          left={
            <>
              <MockMobileSidebarToggle />
              <NavbarLogo />
            </>
          }
          right={
            <>
              <MockColorModeToggle />
              <MockSearchBar />
            </>
          }
        />
      </nav>
      <div style={{ padding: '20px' }}>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          Default navbar content with logo, MegaMenu, color mode toggle, and search bar.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Click the chevron next to "Docs" to open the MegaMenu</li>
          <li>Toggle between light and dark modes</li>
          <li>Search bar on the right</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * All Variations
 *
 * Shows the navbar in different configurations and viewport widths.
 * Demonstrates responsive behavior and component composition variations.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Desktop */}
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Desktop View (996px+)
        </h3>
        <div style={{ border: '1px solid var(--ifm-color-border)', borderRadius: '4px', overflow: 'hidden' }}>
          <nav
            style={{
              background: 'var(--ifm-navbar-background-color)',
              borderBottom: '1px solid var(--ifm-color-border)',
              padding: '0 var(--ifm-navbar-padding-horizontal)',
            }}
          >
            <NavbarContentLayout
              left={
                <>
                  <NavbarLogo />
                  <MockNavbarItem label="Guides" to="/guides" />
                </>
              }
              right={
                <>
                  <MockNavbarItem label="GitHub" to="https://github.com" />
                  <MockColorModeToggle />
                  <MockSearchBar />
                </>
              }
            />
          </nav>
        </div>
      </div>

      {/* Tablet/Mobile */}
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Mobile View (below 996px)
        </h3>
        <div style={{ border: '1px solid var(--ifm-color-border)', borderRadius: '4px', overflow: 'hidden', maxWidth: '375px' }}>
          <nav
            style={{
              background: 'var(--ifm-navbar-background-color)',
              borderBottom: '1px solid var(--ifm-color-border)',
              padding: '0 16px',
            }}
          >
            <NavbarContentLayout
              left={
                <>
                  <MockMobileSidebarToggle />
                  <NavbarLogo />
                </>
              }
              right={
                <>
                  <MockColorModeToggle />
                </>
              }
            />
          </nav>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--ifm-color-emphasis-600)', marginTop: '8px' }}>
          On mobile, navigation items are hidden. Mobile sidebar toggle appears on the left.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Visual comparison of navbar layout at different viewport sizes. Shows how components are hidden/revealed based on screen width.',
      },
    },
  },
};
