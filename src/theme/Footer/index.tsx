import React from 'react';
import { LinkedinIcon, YoutubeIcon, MessageCircleIcon } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import styles from './styles.module.css';

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className={styles.social}>
      <a href="https://x.com/moderneinc" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
        <XIcon />
      </a>
      <a href="https://www.linkedin.com/company/moderneinc" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon size={24} />
      </a>
      <a href="https://www.youtube.com/@moderneinc" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
        <YoutubeIcon size={24} />
      </a>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className={styles.links}>
      <a href="mailto:support@moderne.io">Contact us</a>
      <a href="https://www.moderne.io/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>
      <a href="https://www.moderne.io/terms-of-service" target="_blank" rel="noopener noreferrer">Terms</a>
      <span>© Moderne, {new Date().getFullYear()}</span>
    </div>
  );
}

function FeedbackButton() {
  return (
    <NeoButton
      variant="primary"
      size="medium"
      href="mailto:support@moderne.io"
      icon={<MessageCircleIcon size={16} />}
      iconPosition="left"
    >
      Give feedback
    </NeoButton>
  );
}

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <SocialLinks />
        <FooterLinks />
        <FeedbackButton />
      </div>
    </footer>
  );
}
