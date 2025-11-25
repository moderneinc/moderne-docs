import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NavbarLayout from './index';

/**
 * Mock Navbar Content for demonstration
 */
function MockNavbarContent() {
  return (
    <div className="navbar__inner" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
    }}>
      <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        color: 'var(--ifm-navbar-link-color)',
      }}>
        <span style={{ fontWeight: 600, fontSize: '18px' }}>Moderne Docs</span>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Guides</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>API</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</a>
      </div>
      <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
      }}>
        <button style={{
          padding: '6px 12px',
          border: '1px solid var(--ifm-color-border)',
          borderRadius: '4px',
          background: 'transparent',
          cursor: 'pointer',
          color: 'var(--ifm-navbar-link-color)',
        }}>
          Search
        </button>
        <button style={{
          padding: '6px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          color: 'var(--ifm-navbar-link-color)',
        }}>
          🌙
        </button>
      </div>
    </div>
  );
}

/**
 * Background content to demonstrate frosted glass blur effect
 */
function BackgroundContent() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px',
        borderRadius: '8px',
        color: 'white',
        marginBottom: '20px',
      }}>
        <h1 style={{ margin: '0 0 16px 0', fontSize: '32px' }}>Frosted Glass Effect</h1>
        <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>
          Scroll down to see how the navbar creates a frosted glass blur effect over this colorful background.
          The navbar uses backdrop-filter: blur(10px) to create the translucent effect.
        </p>
      </div>

      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          background: i % 2 === 0
            ? 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)'
            : 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
          padding: '20px',
          margin: '10px 0',
          borderRadius: '4px',
          color: 'white',
        }}>
          Content block {i + 1} - The navbar above blurs this colorful content
        </div>
      ))}
    </div>
  );
}

/**
 * Navbar Layout - Ejected Docusaurus component
 *
 * The navbar layout container component with:
 * - Frosted glass background effect (backdrop-filter blur)
 * - Semi-transparent background
 * - Dark mode support
 * - Hide-on-scroll functionality
 * - Fixed positioning
 *
 * Changes from Docusaurus original:
 * - Added className parameter for module CSS styling
 * - Applied frosted glass effect via styles.navbar
 * - Removed mobile sidebar components (disabled in our implementation)
 */
const meta: Meta<typeof NavbarLayout> = {
  title: 'Theme/Navbar/Layout',
  component: NavbarLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Ejected Docusaurus Navbar Layout component with frosted glass effect and modular CSS styling.',
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
 * Interactive navbar layout showing the frosted glass effect.
 * Scroll down to see the blur effect over the colorful background content.
 */
export const Interactive: Story = {
  render: () => (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <NavbarLayout>
        <MockNavbarContent />
      </NavbarLayout>
      <div style={{ paddingTop: 'var(--ifm-navbar-height, 60px)' }}>
        <BackgroundContent />
      </div>
    </div>
  ),
};

/**
 * All Variations
 *
 * Shows the navbar layout in different configurations.
 * Toggle dark mode in Storybook toolbar to see theme variations.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: 'var(--ifm-color-emphasis-600)',
          padding: '0 16px',
        }}>
          Default - Fixed Position with Frosted Glass
        </h3>
        <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
          <NavbarLayout>
            <MockNavbarContent />
          </NavbarLayout>
          <div style={{ paddingTop: 'var(--ifm-navbar-height, 60px)' }}>
            <BackgroundContent />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: 'var(--ifm-color-emphasis-600)',
          padding: '0 16px',
        }}>
          Minimal Content
        </h3>
        <NavbarLayout>
          <div style={{ padding: '12px 0', color: 'var(--ifm-navbar-link-color)' }}>
            Simple navbar with minimal content
          </div>
        </NavbarLayout>
      </div>

      <div>
        <h3 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: 'var(--ifm-color-emphasis-600)',
          padding: '0 16px',
        }}>
          Over Patterned Background
        </h3>
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'repeating-linear-gradient(45deg, #606dbc 0, #606dbc 10px, #465298 10px, #465298 20px)',
          }} />
          <NavbarLayout>
            <MockNavbarContent />
          </NavbarLayout>
        </div>
        <p style={{
          fontSize: '12px',
          color: 'var(--ifm-color-emphasis-600)',
          margin: '8px 16px 0',
        }}>
          The frosted glass effect creates a blur over the patterned background
        </p>
      </div>
    </div>
  ),
};
