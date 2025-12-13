import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import clsx from 'clsx';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import styles from './styles.module.css';

/**
 * AnnouncementBarLayout Component
 *
 * Internal component that renders the announcement bar layout for Storybook.
 * This is extracted to avoid Docusaurus hook dependencies.
 * The actual AnnouncementBar component uses useThemeConfig() and useAnnouncementBar() hooks.
 */
interface AnnouncementBarLayoutProps {
  content: string;
  isCloseable?: boolean;
}

function AnnouncementBarLayout({
  content,
  isCloseable = true,
}: AnnouncementBarLayoutProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'var(--ifm-color-emphasis-600)' }}>
        <p>Announcement bar was closed. Refresh the story to see it again.</p>
      </div>
    );
  }

  return (
    <div className={styles.announcementBar} role="banner">
      {isCloseable && <div className={styles.announcementBarPlaceholder} />}
      <div
        className={styles.announcementBarContent}
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {isCloseable && (
        <button
          type="button"
          aria-label="Close"
          onClick={() => setIsVisible(false)}
          className={clsx('clean-btn close', styles.announcementBarClose)}
        >
          <svg
            width={14}
            height={14}
            strokeWidth={3.1}
            viewBox="0 0 15 15"
            style={{ verticalAlign: 'middle' }}
          >
            <g stroke="currentColor">
              <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25" />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
}

/**
 * AnnouncementBar - Swizzled Docusaurus component
 *
 * Displays important announcements at the top of the site with:
 * - Centered text content
 * - Support for HTML content including links
 * - Optional close button
 * - Dark mode support
 * - Responsive layout
 * - Persistent dismissal (in production via localStorage)
 *
 * Features:
 * - Sticky positioning at top of page (above navbar)
 * - Underlined links that inherit announcement text color
 * - Accessible close button with ARIA label
 * - Border bottom separator
 * - Auto height with minimum padding
 * - Print media query to hide in print view
 *
 * Common use cases:
 * - Product announcements
 * - Event promotions
 * - Important notices
 * - Breaking news
 * - System status updates
 */
const meta: Meta<typeof AnnouncementBarLayout> = {
  title: 'Theme/AnnouncementBar',
  component: AnnouncementBarLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Swizzled Docusaurus AnnouncementBar component for site-wide announcements with optional dismissal.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'HTML content to display in the announcement bar',
      control: 'text',
    },
    isCloseable: {
      description: 'Whether the announcement bar can be closed/dismissed',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Announcement
 *
 * Standard announcement bar with a simple text message and close button.
 * Most common use case for general announcements.
 */
export const Default: Story = {
  args: {
    content: 'Welcome to the Moderne Documentation! Check out our new getting started guide.',
    isCloseable: true,
  },
};

/**
 * With Link
 *
 * Announcement containing a hyperlink to an external page.
 * Links are underlined and inherit the announcement text color.
 */
export const WithLink: Story = {
  args: {
    content:
      'Now announcing the inaugural <a href="https://coderemix.ai/"><strong>Code Remix Summit</strong></a> – in Miami May 12th-14th.',
    isCloseable: true,
  },
};

/**
 * Event Promotion
 *
 * Real-world example promoting an event with strong emphasis.
 * Shows how to use HTML formatting within announcements.
 */
export const EventPromotion: Story = {
  args: {
    content:
      '🎉 Join us at <a href="https://events.moderne.io/webinar"><strong>Moderne Live 2025</strong></a> - Register now for exclusive early access!',
    isCloseable: true,
  },
};

/**
 * Product Launch
 *
 * Announcement for a new product or feature launch.
 * Demonstrates multiple links and formatting.
 */
export const ProductLaunch: Story = {
  args: {
    content:
      '🚀 New: <a href="/docs/user-documentation/moderne-cli"><strong>Moderne CLI 3.0</strong></a> is now available! <a href="/releases/moderne-cli">Read the release notes</a> →',
    isCloseable: true,
  },
};

/**
 * Short Message
 *
 * Brief announcement with minimal text.
 * Tests layout with very short content.
 */
export const ShortMessage: Story = {
  args: {
    content: '✨ New feature available!',
    isCloseable: true,
  },
};

/**
 * Long Message
 *
 * Lengthy announcement that tests text wrapping and layout.
 * Important for responsive behavior validation.
 */
export const LongMessage: Story = {
  args: {
    content:
      'Important update: We have released a comprehensive guide covering advanced program analysis techniques including control flow, data flow, and taint analysis for OpenRewrite recipes. <a href="/docs/openrewrite-advanced-program-analysis">Learn more about these powerful capabilities</a> and how to leverage them in your custom recipes.',
    isCloseable: true,
  },
};

/**
 * Not Closeable
 *
 * Critical announcement that cannot be dismissed.
 * Used for important system-wide messages that users must see.
 */
export const NotCloseable: Story = {
  args: {
    content:
      '⚠️ Scheduled maintenance on January 15th, 2025 from 2:00 AM - 4:00 AM EST. <a href="/status">View status page</a>',
    isCloseable: false,
  },
};

/**
 * System Status Warning
 *
 * Warning-style announcement for system issues or degraded service.
 * No close button to ensure visibility.
 */
export const SystemStatus: Story = {
  args: {
    content:
      '⚠️ We are currently experiencing degraded performance. Our team is investigating. <a href="https://status.moderne.io">Check status →</a>',
    isCloseable: false,
  },
};

/**
 * Documentation Update
 *
 * Announcement about new or updated documentation sections.
 * Common pattern for documentation sites.
 */
export const DocumentationUpdate: Story = {
  args: {
    content:
      '📚 New: <a href="/docs/hands-on-learning">Hands-on Learning Workshops</a> now available! Interactive tutorials to get you started with Moderne.',
    isCloseable: true,
  },
};

/**
 * Multiple Links
 *
 * Announcement with several hyperlinks.
 * Tests link styling and spacing.
 */
export const MultipleLinks: Story = {
  args: {
    content:
      'Explore our resources: <a href="/docs/user-documentation">User Guide</a> | <a href="/docs/administrator-documentation">Admin Guide</a> | <a href="https://app.moderne.io">Platform</a> | <a href="https://github.com/moderneinc">GitHub</a>',
    isCloseable: true,
  },
};

/**
 * Bold and Italic Text
 *
 * Announcement using various text formatting options.
 * Demonstrates HTML formatting capabilities.
 */
export const FormattedText: Story = {
  args: {
    content:
      '<strong>Important:</strong> Starting next month, we\'re introducing <em>enhanced security features</em>. <a href="/security">Learn more</a>',
    isCloseable: true,
  },
};

/**
 * Emoji Heavy
 *
 * Playful announcement with multiple emojis.
 * Tests rendering of Unicode characters.
 */
export const EmojiHeavy: Story = {
  args: {
    content:
      '🎊 🎉 🎈 Celebrating 1 million recipes run on Moderne Platform! 🚀 ✨ 🎯 <a href="/blog/milestone">Read our story</a>',
    isCloseable: true,
  },
};

/**
 * Call to Action
 *
 * Action-oriented announcement encouraging user engagement.
 * Common for marketing and conversion purposes.
 */
export const CallToAction: Story = {
  args: {
    content:
      '💡 Ready to automate your codebase? <a href="https://app.moderne.io/signup"><strong>Start your free trial today</strong></a> – No credit card required.',
    isCloseable: true,
  },
};

/**
 * Dark Mode Showcase
 *
 * Demonstrates announcement bar styling in both light and dark modes.
 * Toggle dark mode to see the color scheme adaptation.
 */
export const DarkModeShowcase: Story = {
  args: {
    content:
      '🌙 Toggle dark mode to see how announcements adapt! <a href="/docs">Explore our docs</a> for more features.',
    isCloseable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle between light and dark modes to see the announcement bar styling changes. The component automatically adapts to the current color scheme using CSS variables.',
      },
    },
  },
};

/**
 * Real-World Example: Code Remix Summit
 *
 * Actual announcement used in production for Code Remix Summit.
 * Shows realistic formatting and link usage.
 */
export const CodeRemixSummit: Story = {
  args: {
    content:
      'Now announcing the inaugural <a href="https://coderemix.ai/"><strong>Code Remix Summit</strong></a> – in Miami May 12th-14th.',
    isCloseable: true,
  },
};

/**
 * Responsive Behavior Test
 *
 * Tests how announcement bar behaves at different viewport sizes.
 * View this story at various screen widths to see text wrapping.
 */
export const ResponsiveBehavior: Story = {
  args: {
    content:
      'This is a moderately long announcement that will wrap to multiple lines on mobile devices but remain on a single line on desktop screens. <a href="/docs">Learn more about responsive design</a>',
    isCloseable: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story:
          'Resize the viewport to see how the announcement bar adapts. On mobile (<997px), the bar has auto height and allows text wrapping. On desktop (≥997px), it has a fixed height of 30px.',
      },
    },
  },
};

/**
 * All Variations Grid
 *
 * Shows multiple announcement bar variations together for comparison.
 * Useful for visual regression testing and design review.
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Simple Text (Closeable)
        </h3>
        <AnnouncementBarLayout
          content="Welcome to the Moderne Documentation! Check out our new getting started guide."
          isCloseable={true}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          With Link
        </h3>
        <AnnouncementBarLayout
          content='Now announcing the inaugural <a href="https://coderemix.ai/"><strong>Code Remix Summit</strong></a> – in Miami May 12th-14th.'
          isCloseable={true}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Event Promotion with Emoji
        </h3>
        <AnnouncementBarLayout
          content='🎉 Join us at <a href="https://events.moderne.io/webinar"><strong>Moderne Live 2025</strong></a> - Register now for exclusive early access!'
          isCloseable={true}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Short Message
        </h3>
        <AnnouncementBarLayout content="✨ New feature available!" isCloseable={true} />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Long Message (Tests Wrapping)
        </h3>
        <AnnouncementBarLayout
          content='Important update: We have released a comprehensive guide covering advanced program analysis techniques including control flow, data flow, and taint analysis for OpenRewrite recipes. <a href="/docs/openrewrite-advanced-program-analysis">Learn more about these powerful capabilities</a> and how to leverage them in your custom recipes.'
          isCloseable={true}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Not Closeable (Critical Notice)
        </h3>
        <AnnouncementBarLayout
          content='⚠️ Scheduled maintenance on January 15th, 2025 from 2:00 AM - 4:00 AM EST. <a href="/status">View status page</a>'
          isCloseable={false}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Multiple Links
        </h3>
        <AnnouncementBarLayout
          content='Explore our resources: <a href="/docs/user-documentation">User Guide</a> | <a href="/docs/administrator-documentation">Admin Guide</a> | <a href="https://app.moderne.io">Platform</a> | <a href="https://github.com/moderneinc">GitHub</a>'
          isCloseable={true}
        />
      </div>

      <div>
        <h3
          style={{
            fontSize: '14px',
            margin: '12px 20px 8px',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          Call to Action
        </h3>
        <AnnouncementBarLayout
          content='💡 Ready to automate your codebase? <a href="https://app.moderne.io/signup"><strong>Start your free trial today</strong></a> – No credit card required.'
          isCloseable={true}
        />
      </div>
    </div>
  ),
};
