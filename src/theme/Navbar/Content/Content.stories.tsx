import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { type ReactNode } from 'react';
import clsx from 'clsx';
import NavbarLogo from '@theme/Navbar/Logo';
import PersonaSwitcher, { type PersonaSwitcherMetadata } from '@site/src/components/PersonaSwitcher';
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
 * - Persona switcher (context-aware based on current path)
 * - Left and right navbar items
 * - Color mode toggle
 * - Search bar
 * - Mobile sidebar toggle
 * - Responsive layout
 *
 * Features:
 * - Persona switcher appears when viewing Platform documentation (Practitioner ↔ Admin)
 * - Auto-detects current documentation section based on URL path
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

// Sample persona metadata for Practitioner
const practitionerMetadata: PersonaSwitcherMetadata = {
  current: 'practitioner',
  currentLabel: 'Practitioner',
  alternates: [
    {
      label: 'Admin',
      path: '/administrator-documentation/moderne-platform',
      sidebarCategory: 'platform.admin',
    },
  ],
};

// Sample persona metadata for Admin
const adminMetadata: PersonaSwitcherMetadata = {
  current: 'admin',
  currentLabel: 'Admin',
  alternates: [
    {
      label: 'Practitioner',
      path: '/user-documentation/moderne-platform',
      sidebarCategory: 'platform.practitioner',
    },
  ],
};

/**
 * Default Navbar Content
 *
 * Shows the complete navbar content with all default features:
 * - Logo with MegaMenu
 * - Color mode toggle
 * - Search bar
 */
export const Default: Story = {
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
 * With Persona Switcher (Practitioner)
 *
 * Shows navbar with persona switcher for Practitioner documentation.
 * Appears when viewing user-documentation/moderne-platform pages.
 */
export const WithPersonaSwitcherPractitioner: Story = {
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
              <PersonaSwitcher metadata={practitionerMetadata} />
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
          Navbar content with Practitioner persona switcher.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Persona switcher appears after the logo</li>
          <li>Shows "Practitioner" badge with option to switch to "Admin"</li>
          <li>Context-aware based on current documentation section</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * With Persona Switcher (Admin)
 *
 * Shows navbar with persona switcher for Admin documentation.
 * Appears when viewing administrator-documentation/moderne-platform pages.
 */
export const WithPersonaSwitcherAdmin: Story = {
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
              <PersonaSwitcher metadata={adminMetadata} />
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
          Navbar content with Admin persona switcher.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Persona switcher appears after the logo</li>
          <li>Shows "Admin" badge with option to switch to "Practitioner"</li>
          <li>Demonstrates the Admin perspective</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * With Navbar Items
 *
 * Shows navbar with custom navigation items on left and right.
 * Demonstrates how navbar items are split between left and right containers.
 */
export const WithNavbarItems: Story = {
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
              <MockNavbarItem label="Guides" to="/guides" />
              <MockNavbarItem label="Tutorials" to="/tutorials" />
            </>
          }
          right={
            <>
              <MockNavbarItem label="GitHub" to="https://github.com" />
              <MockNavbarItem label="Support" to="/support" />
              <MockColorModeToggle />
              <MockSearchBar />
            </>
          }
        />
      </nav>
      <div style={{ padding: '20px' }}>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          Navbar content with custom navigation items.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Left items: Guides, Tutorials (after logo)</li>
          <li>Right items: GitHub, Support (before color mode toggle and search)</li>
          <li>Demonstrates left/right item distribution</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Full Featured Navbar
 *
 * Shows navbar with all features combined:
 * - Logo with MegaMenu
 * - Persona switcher
 * - Navigation items (left and right)
 * - Color mode toggle
 * - Search bar
 */
export const FullFeatured: Story = {
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
              <PersonaSwitcher metadata={practitionerMetadata} />
              <MockNavbarItem label="Guides" to="/guides" />
            </>
          }
          right={
            <>
              <MockNavbarItem label="GitHub" to="https://github.com" />
              <MockNavbarItem label="Support" to="/support" />
              <MockColorModeToggle />
              <MockSearchBar />
            </>
          }
        />
      </nav>
      <div style={{ padding: '20px' }}>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          Fully featured navbar with all components combined.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Logo with MegaMenu (click chevron to open)</li>
          <li>Persona switcher (Practitioner)</li>
          <li>Custom navigation items (left and right)</li>
          <li>Color mode toggle</li>
          <li>Search bar</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Without Search Bar
 *
 * Shows navbar without the search bar.
 * Useful when search is handled elsewhere or disabled.
 */
export const WithoutSearchBar: Story = {
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
              <PersonaSwitcher metadata={practitionerMetadata} />
            </>
          }
          right={
            <>
              <MockColorModeToggle />
            </>
          }
        />
      </nav>
      <div style={{ padding: '20px' }}>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          Navbar content without search bar.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Logo with MegaMenu</li>
          <li>Persona switcher</li>
          <li>Color mode toggle</li>
          <li>No search bar</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Without Color Mode Toggle
 *
 * Shows navbar without the color mode toggle.
 * Useful when color mode switching is disabled.
 */
export const WithoutColorModeToggle: Story = {
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
              <PersonaSwitcher metadata={practitionerMetadata} />
            </>
          }
          right={
            <>
              <MockSearchBar />
            </>
          }
        />
      </nav>
      <div style={{ padding: '20px' }}>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          Navbar content without color mode toggle.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Logo with MegaMenu</li>
          <li>Persona switcher</li>
          <li>Search bar</li>
          <li>No color mode toggle</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Minimal Navbar
 *
 * Shows navbar with minimal configuration - just logo and color mode toggle.
 * Simplest possible navbar layout.
 */
export const Minimal: Story = {
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
            </>
          }
        />
      </nav>
      <div style={{ padding: '20px' }}>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          Minimal navbar content - logo and color mode toggle only.
        </p>
        <ul style={{ color: 'var(--ifm-color-emphasis-600)' }}>
          <li>Logo with MegaMenu</li>
          <li>Color mode toggle</li>
          <li>No search bar, no persona switcher, no navigation items</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Interactive Persona Switching
 *
 * Demonstrates interactive persona switching behavior.
 * Shows how the persona switcher updates when switching between roles.
 */
export const InteractivePersonaSwitching: Story = {
  render: () => {
    const [currentPersona, setCurrentPersona] = useState<'practitioner' | 'admin'>('practitioner');

    const metadata: PersonaSwitcherMetadata =
      currentPersona === 'practitioner' ? practitionerMetadata : adminMetadata;

    return (
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
                <PersonaSwitcher metadata={metadata} />
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
          <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '16px' }}>
            <strong>Current Persona:</strong> {metadata.currentLabel}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <button
              onClick={() => setCurrentPersona('practitioner')}
              style={{
                padding: '8px 16px',
                background: currentPersona === 'practitioner' ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)',
                color: currentPersona === 'practitioner' ? 'white' : 'var(--ifm-color-emphasis-800)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Switch to Practitioner
            </button>
            <button
              onClick={() => setCurrentPersona('admin')}
              style={{
                padding: '8px 16px',
                background: currentPersona === 'admin' ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)',
                color: currentPersona === 'admin' ? 'white' : 'var(--ifm-color-emphasis-800)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Switch to Admin
            </button>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
            Click the buttons above to simulate navigating between Practitioner and Admin documentation.
            The persona switcher in the navbar updates accordingly.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demonstration of persona switching. Click the buttons to switch between Practitioner and Admin personas and see the navbar update.',
      },
    },
  },
};

/**
 * Responsive Layout Preview
 *
 * Shows the navbar at different viewport widths side-by-side.
 * Demonstrates responsive behavior and mobile sidebar toggle visibility.
 */
export const ResponsiveLayoutPreview: Story = {
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
                  <PersonaSwitcher metadata={practitionerMetadata} />
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
          On mobile, persona switcher and navigation items are hidden. Mobile sidebar toggle appears on the left.
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
