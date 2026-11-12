import Link from '@docusaurus/Link';
import { ModButton } from '@site/src/components/ModButton';
import { ProductCardsGrid } from '@site/src/components/ProductCardsGrid';
import { VideoCard, type VideoCardGradient } from '@site/src/components/VideoCard';
import { homepageProducts } from '@site/src/config/megaMenuData';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { FunctionComponent } from 'react';
import styles from './index.module.css';

/**
 * Resolves a product's landing page from the sidebar config, so this page and
 * the "Browse by area" tiles cannot drift apart. Fails the build if the sidebar
 * label changes.
 */
function hrefFor(productName: string): string {
  const product = homepageProducts.find((p) => p.name === productName);
  if (!product) {
    throw new Error(
      `Homepage: no sidebar category labelled "${productName}" with customProps.megaMenu`,
    );
  }
  return product.homepageHref || product.href;
}

export const HeroSection: FunctionComponent = () => {
  return (
    <section className={clsx(styles.container, styles.hero)}>
      <h1 className={styles.heroHeading}>
        Explore documentation
        <br />
        and tutorials to go further
      </h1>
      <p className={styles.heroLede}>
        Discover how to fix vulnerabilities, standardize code quality, perform type-aware code
        searches, and accelerate refactoring at enterprise scale.
      </p>
      <div className={styles.heroActions}>
        <ModButton
          variant="primary"
          size="large"
          className={styles.heroButton}
          href={hrefFor('Platform')}
        >
          Get started
        </ModButton>
        <ModButton
          variant="secondary"
          size="large"
          className={clsx(styles.heroButton, styles.heroButtonSecondary)}
          href="#what-is-moderne"
        >
          What is Moderne?
        </ModButton>
      </div>
    </section>
  );
};

type Video = {
  url: string;
  title: string;
  gradient: VideoCardGradient;
};

const videos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=SxABeHxvc4s',
    title: 'Spring Boot 4 migration with Moderne',
    gradient: 'coral',
  },
  {
    url: 'https://www.youtube.com/watch?v=Q-ej2lCJHRs',
    title: 'Moderne vs. OpenRewrite: What’s the difference?',
    gradient: 'violet',
  },
  {
    url: 'https://www.youtube.com/watch?v=FQs048JKXVw',
    title: 'Understand your code landscape with the Moderne DevCenter',
    gradient: 'sky',
  },
];

export const WhatIsModerneSection: FunctionComponent = () => {
  return (
    <section className={styles.band} aria-labelledby="what-is-moderne">
      <div className={clsx(styles.container, styles.bandInner)}>
        <div className={styles.split}>
          <h2 className={styles.displayTitle} id="what-is-moderne">
            What is Moderne?
          </h2>
          <div className={styles.prose}>
            <p className={styles.proseText}>
              Moderne builds the knowledge, discovery, and execution tools coding agents rely on to
              operate faster, more accurately, and at far lower cost across real-world software
              systems. It is powered by the{' '}
              <Link className={styles.proseLink} href="https://docs.openrewrite.org/">
                OpenRewrite
              </Link>{' '}
              <Link
                className={styles.proseLink}
                href="/user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees"
              >
                Lossless Semantic Tree (LST)
              </Link>
              , the industry’s most comprehensive context model for understanding and transforming
              your code at scale.
            </p>
            <p className={styles.proseText}>
              With Moderne, organizations can automate framework migrations, remediate security
              vulnerabilities, perform organization-wide code search, and standardize code quality
              across thousands of repositories.
            </p>
          </div>
        </div>
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <VideoCard
              key={video.url}
              url={video.url}
              title={video.title}
              gradient={video.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Product = {
  /** Display name on this page */
  name: string;
  /** Sidebar category label, used to resolve the link */
  product: string;
  description: string;
};

/** Four columns; the first two stack a pair of products. */
const productColumns: Product[][] = [
  [
    {
      name: 'Moderne Platform',
      product: 'Platform',
      description:
        'An enterprise-ready, private SaaS solution that enables anyone in your organization to run recipes, create pull requests, and generate detailed reports across all of your repositories. No code required.',
    },
    {
      name: 'Moddy',
      product: 'Moddy',
      description:
        'A multi-repo AI agent that combines natural language with the accuracy and scalability of Moderne and OpenRewrite. Ask it something like “Help me upgrade to Spring Boot 3.5” and it finds and runs the right recipes for you.',
    },
  ],
  [
    {
      name: 'Moderne CLI',
      product: 'CLI',
      description:
        'A command line tool that complements the Platform, enabling you to build LST artifacts across many repositories and run recipes against all of them from your local machine. It also helps you create and test your own recipes.',
    },
    {
      name: 'IntelliJ IDEA plugin',
      product: 'IDE plugins',
      description:
        'Helps you create and debug recipes while letting you search for code across all of your repositories at once.',
    },
  ],
  [
    {
      name: 'Moderne DX',
      product: 'DX',
      description:
        'Runs the Platform’s recipe marketplace, code search, and changesets on a machine you control. Your source code, your LSTs, and everything your developers do with them stays inside your network.',
    },
  ],
  [
    {
      name: 'Moderne Prethink',
      product: 'Agent tools',
      description:
        'Recipes that generate structured context for coding agents. They pre-resolve service endpoints, dependencies, test coverage, and more, instead of leaving agents to infer them from raw code.',
    },
  ],
];

export const AboutModerneSection: FunctionComponent = () => {
  return (
    <section className={clsx(styles.container, styles.about)} aria-labelledby="more-about-moderne">
      <div className={styles.split}>
        <h2 className={styles.displayTitle} id="more-about-moderne">
          More about Moderne
        </h2>
        <p className={styles.aboutLede}>
          Moderne delivers a coordinated set of tools that coding agents and developers use to
          understand software systems, discover relevant code, and safely execute large-scale
          engineering changes. Your organization can run{' '}
          <Link className={styles.proseLink} href="https://codegenomeproject.org/recipes">
            existing recipes
          </Link>{' '}
          from our extensive catalog or create your own.
        </p>
      </div>

      <div className={styles.productGrid}>
        {productColumns.map((column) => (
          <div key={column[0].name} className={styles.productColumn}>
            {column.map((product) => (
              <Link key={product.name} href={hrefFor(product.product)} className={styles.product}>
                <span className={styles.productHead}>
                  <span className={styles.productName}>{product.name}</span>
                  <span className={styles.productArrow} aria-hidden="true">
                    →
                  </span>
                </span>
                <span className={styles.productDescription}>{product.description}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        Moderne is SOC 2 Type 2 compliant. A private SaaS can be created for your team in any major
        cloud provider or region. It supports numerous languages, data formats, build tools, and
        frameworks, plus{' '}
        <Link
          className={styles.proseLink}
          href="/administrator-documentation/moderne-platform/references/supported-scms"
        >
          most Git-based source code management tools
        </Link>
        .
      </p>
    </section>
  );
};

const Home: FunctionComponent = () => {
  return (
    <Layout
      title="Moderne Documentation"
      description="Explore documentation and tutorials for automated code remediation. Fix vulnerabilities, standardize code quality, perform type-aware code searches, and accelerate refactoring at enterprise scale with Moderne Platform, CLI, DX, and more."
    >
      <main className={styles.homePage}>
        <HeroSection />
        <div className={clsx(styles.container, styles.browse)}>
          <ProductCardsGrid products={homepageProducts} />
        </div>
        <WhatIsModerneSection />
        <AboutModerneSection />
      </main>
    </Layout>
  );
};

export default Home;
