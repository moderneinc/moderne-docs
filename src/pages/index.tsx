import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { NeoButton } from '@site/src/components/NeoButton';
import { NeoCard } from '@site/src/components/NeoCard';
import { NeoGelButton } from '@site/src/components/NeoGelButton';
import { deriveProductsFromSidebars } from '@site/src/utils/deriveMegaMenuData';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { FunctionComponent } from 'react';
import ReactPlayer from 'react-player';
import styles from './index.module.css';

/**
 * Products derived from sidebar configuration (single source of truth)
 * Each product has: name, icon (gem path), description, href
 */
const products = deriveProductsFromSidebars();

export const HeroSection: FunctionComponent = () => {
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
            href="#what-is-moderne"
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

export const ProductNavigation: FunctionComponent = () => {
  return (
    <section className={styles.productNav}>
      {products.map((prod) => (
        <NeoGelButton
          key={prod.name}
          gemIcon={prod.icon}
          href={prod.href}
          aria-label={`Go to ${prod.name} documentation`}
        >
          {prod.name}
        </NeoGelButton>
      ))}
    </section>
  );
}

export const WhatIsModerneSection: FunctionComponent = () => {
  const videos = [
    {
      id: 'LgvqAzTxkEU',
      url: 'https://www.youtube.com/watch?v=LgvqAzTxkEU',
      thumbnail: 'https://img.youtube.com/vi/LgvqAzTxkEU/hqdefault.jpg',
      title: 'Migrate to Spring Boot 3.5 on the Moderne Platform',
    },
    {
      id: 'Q-ej2lCJHRs',
      url: 'https://www.youtube.com/watch?v=Q-ej2lCJHRs',
      thumbnail: 'https://img.youtube.com/vi/Q-ej2lCJHRs/hqdefault.jpg',
      title: 'OpenRewrite vs. Moderne',
    },
    {
      id: 'KRXDMGt7DRE',
      url: 'https://www.youtube.com/watch?v=KRXDMGt7DRE',
      thumbnail: 'https://img.youtube.com/vi/KRXDMGt7DRE/hqdefault.jpg',
      title: 'Moderne DevCenter',
    },
  ];

  return (
    <section className={styles.whatIsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle} id='what-is-moderne'>What is Moderne?</h2>
        <p className={styles.sectionDescription}>
          With Moderne, you can fix security vulnerabilities, standardize code quality, and automate maintenance processes such as framework migrations. Code refactoring work and security vulnerability remediations that used to take months and teams of developers can be done in minutes. This can not only save your company millions of dollars in software maintenance costs, but it can also give developers substantially more time to focus on delivering business value.
        </p>
      </div>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <ReactPlayer className={styles.videoThumbnail} url={video.url} controls={true} key={video.id}
          width={300} height={168}
          />
        ))}
      </div>
    </section>
  );
}

export const PlatformDetailsSection: FunctionComponent = () => {
  return (
    <section className={styles.platformSection}>
      <h2 className={styles.sectionTitle}>More about our platform</h2>
      <div className={styles.platformContent}>
        <p>
          The Moderne Platform is an enterprise-ready, private Software as a Service (SaaS) solution that provides automated code remediation at scale. The platform asynchronously ingests detailed artifacts of your codebase (<Link href="/administrator-documentation/moderne-platform/references/lossless-semantic-trees">Lossless Semantic Trees</Link>) that can be quickly and precisely searched. Then, your organization's source code can be transformed by running "<Link href="https://docs.openrewrite.org/concepts-and-explanations/recipes">recipes</Link>" across repositories of your choosing. These recipes can be created by your team, or you can take advantage of the hundreds of recipes already defined in <Link href="https://docs.openrewrite.org/">OpenRewrite</Link> - an open-source project managed by Moderne.
        </p>
        <p>
          The platform offers a clean UI that enables anyone in your organization to run recipes, create PRs, or generate detailed reports about your codebase - all without writing a line of code. It also provides a recommendation engine to help you discover new recipes based on an analysis of your code.
        </p>
        <p>
          Moderne is SOC 2 Type 2 compliant, so you can be confident that your code is secure. Furthermore, a private SaaS can be created for your team in any major cloud provider or region of your choice.
        </p>
        <p>
          Moderne currently supports numerous languages, data formats, build tools, and frameworks - with more being routinely added over time. Moderne also currently supports <Link href="/administrator-documentation/moderne-platform/references/supported-scms">most Git-based source code management tools</Link>.
        </p>
      </div>
    </section>
  );
}

export const ResourceSection: FunctionComponent = () => {
  return (
    <section className={styles.resourceSection}>
      <NeoCard
        title="Try it out"
        description="Try our public instance or request a private team instance for a proof of value."
        buttons={
          <>
            <Link href="https://app.moderne.io/" className={styles.cardLink}>
              Free public instance
              <ArrowRight size={16} />
            </Link>
            <Link href="/user-documentation/moderne-platform/getting-started/running-your-first-recipe" className={styles.cardLink}>
              Quickstart guide
              <ArrowRight size={16} />
            </Link>
          </>
        }
      />
      <NeoCard
        title="Weekly Code Remix"
        description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
        buttons={
          <>
            <Link href="https://www.youtube.com/@moderne-and-openrewrite" className={styles.cardLink}>
              YouTube channel
              <ArrowRight size={16} />
            </Link>
            <Link href="https://www.youtube.com/@Moderne-and-OpenRewrite/streams" className={styles.cardLink}>
              Past sessions & recaps
              <ArrowRight size={16} />
            </Link>
          </>
        }
      />
      <NeoCard
        title="Learning & resources"
        description="Here are some helpful resources to keep you moving."
        buttons={
          <>
            <Link href="/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install" className={styles.cardLink}>
              Plugin for JetBrains
              <ArrowRight size={16} />
            </Link>
            <Link href="/hands-on-learning/fundamentals/workshop-overview" className={styles.cardLink}>
              Hands on learning
              <ArrowRight size={16} />
            </Link>
          </>
        }
      />
    </section>
  );
}

export const GemDecorations: FunctionComponent = () => {
  return (
    <div className={styles.gemDecorations}>
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

const Home: FunctionComponent = () => {
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
            <WhatIsModerneSection />
            <PlatformDetailsSection />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
