import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { NeoButton } from '@site/src/components/NeoButton';
import CodeRemixLogo from '@site/static/img/coderemix.svg';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {
  ArrowRight,
  BookOpen,
  MessageSquareCode,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react';
import styles from './index.module.css';

export const PRODUCTS = [
  {
    label: 'Platform',
    icon: BookOpen,
    href: '/user-documentation/moderne-platform',
    gemIcon: 'red.png',
  },
  {
    label: 'DX',
    icon: Server,
    href: '/administrator-documentation/moderne-DX',
    gemIcon: 'pink.png',
  },
  {
    label: 'CLI',
    icon: Terminal,
    href: '/user-documentation/moderne-cli',
    gemIcon: 'blue.png',
  },
  {
    label: 'Moddy',
    icon: MessageSquareCode,
    href: '/user-documentation/moddy',
    gemIcon: 'green.png',
  },
  {
    label: 'Recipes',
    icon: Sparkles,
    href: '/user-documentation/recipes',
    gemIcon: 'yellow.png',
  },
];

export function HeroSection(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          <span className={styles.heroHeadingBlue}>Explore documentation</span>
          <br />
          <span className={styles.heroHeadingDark}>and tutorials to go further</span>
        </h1>
        <p className={styles.heroSubheading}>
          Discover how to fix vulnerabilities, standardize code quality, and
          accelerate large-scale refactoring.
        </p>
        <div>
          <NeoButton
            variant="primary"
            size="medium"
            href="/introduction"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            What's Moderne?
          </NeoButton>
        </div>
      </div>
    </section>
  );
}

export function ProductPill({ product }): JSX.Element {
  const Icon = product.icon;

  return (
    <Link
      href={product.href}
      className={styles.productPill}
      aria-label={`Go to ${product.label} documentation`}
    >
      <div className={styles.productPillInner}>
        <div className={styles.productIcon}>
          <img
            src={`/img/gems/${product.gemIcon}`}
            alt=""
            className={styles.productIconImg}
          />
        </div>
        <span className={styles.productLabel}>{product.label}</span>
      </div>
    </Link>
  );
}

export function ProductNavigation(): JSX.Element {
  return (
    <section className={styles.productNav}>
      {PRODUCTS.map((product) => (
        <ProductPill key={product.label} product={product} />
      ))}
    </section>
  );
}

export function CodeRemixCard(): JSX.Element {
  return (
    <div className={styles.resourceCard}>
      <div className={styles.resourceCardInner}>
        <div className={styles.resourceCardHeader}>
          <span className={styles.codeRemixText}>Join</span>
          <CodeRemixLogo className={styles.codeRemixLogo} />
          <span className={styles.codeRemixText}>to learn weekly</span>
        </div>
        <div className={styles.resourceLinks}>
          <Link href="https://www.youtube.com/@moderne-and-openrewrite" className={styles.resourceLink}>
            <span>YouTube channel</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="https://www.youtube.com/@Moderne-and-OpenRewrite/streams" className={styles.resourceLink}>
            <span>Past sessions & recaps</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LearningResourcesCard(): JSX.Element {
  const resources = [
    {
      label: 'Plugin for JetBrains',
      href: '/user-documentation/moderne-ide-integration',
    },
    {
      label: 'Hands on Learning',
      href: '/user-documentation/recipes',
    },
    {
      label: 'Releases',
      href: '/releases/agent-releases',
    },
  ];

  return (
    <div className={styles.resourceCard}>
      <div className={styles.resourceCardInner}>
        <h2 className={styles.resourceCardTitle}>Guides</h2>
        <div className={styles.resourceLinks}>
          {resources.map((resource) => (
            <Link key={resource.label} href={resource.href} className={styles.resourceLink}>
              <BookOpen size={16} />
              <span>{resource.label}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResourceSection(): JSX.Element {
  return (
    <section className={styles.resourceSection}>
      <CodeRemixCard />
      <LearningResourcesCard />
    </section>
  );
}

export function GemDecorations(): JSX.Element {
  return (
    <div className={styles.gemDecorations}>
      {/* Small gems around hero */}
      <img
        src="/img/gems/green-small.png"
        alt=""
        className={clsx(styles.gem, styles.gemTopRight)}
      />
      <img
        src="/img/gems/purple-small.png"
        alt=""
        className={clsx(styles.gem, styles.gemMidLeft)}
      />
      <img
        src="/img/gems/pink-small.png"
        alt=""
        className={clsx(styles.gem, styles.gemMidRight)}
      />
      <img
        src="/img/gems/gray-small.png"
        alt=""
        className={clsx(styles.gem, styles.gemBottomRight)}
      />

      {/* Large gems on edges */}
      <img
        src="/img/gems/pink-large.png"
        alt=""
        className={clsx(styles.gem, styles.gemLargeRight)}
      />
      <img
        src="/img/gems/pink.png"
        alt=""
        className={clsx(styles.gem, styles.gemLargeLeft)}
      />
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Head>
        <meta property="og:image" content="/img/og-home.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout
        title="Moderne Documentation"
        description="Explore documentation and tutorials for automated code remediation. Fix vulnerabilities, standardize code quality, and accelerate large-scale refactoring with Moderne Platform, CLI, DX, and more."
      >
        <main className={styles.homePage}>
          <GemDecorations />
          <div className={styles.pageBody}>
            <HeroSection />
            <ProductNavigation />
            <ResourceSection />
          </div>
        </main>
      </Layout>
    </>
  );
}
