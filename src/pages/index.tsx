import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { NeoButton } from '@site/src/components/NeoButton';
import { ProductCardsGrid } from '@site/src/components/ProductCardsGrid';
import { homepageProducts } from '@site/src/config/megaMenuData';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { FunctionComponent } from 'react';
import ReactPlayer from 'react-player';
import styles from './index.module.css';

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
            href="/user-documentation/moderne-platform/getting-started/running-your-first-recipe"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Get started
          </NeoButton>
        </div>
      </div>
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
            <ProductCardsGrid products={homepageProducts} />
            <WhatIsModerneSection />
            <PlatformDetailsSection />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
