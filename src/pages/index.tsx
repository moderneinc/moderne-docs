import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { NeoButton } from '@site/src/components/NeoButton';
import { ProductCardsGrid } from '@site/src/components/ProductCardsGrid';
import { homepageProducts } from '@site/src/config/megaMenuData';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { FunctionComponent } from 'react';
import VideoPlayer from '@site/src/components/VideoPlayer';
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
          Discover how to fix vulnerabilities, standardize code quality, 
          perform type-aware code searches, and accelerate refactoring at enterprise scale.
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
          Moderne builds the knowledge, discovery, and execution tools coding agents rely on to operate faster, more accurately, and at far lower cost across real-world software systems. Powered by the <Link href="https://docs.openrewrite.org/">OpenRewrite</Link> <Link href="/administrator-documentation/moderne-platform/references/lossless-semantic-trees">Lossless Semantic Tree (LST)</Link>, the industry's most comprehensive context model for understanding and transforming your code at scale.
        </p>
        <p className={styles.sectionDescription}>  
          With Moderne, organizations can automate framework migrations, remediate security vulnerabilities, perform organization-wide code search, and standardize code quality across thousands of repositories.
        </p>
      </div>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <VideoPlayer
            key={video.id}
            className={styles.videoThumbnail}
            url={video.url}
            controls={true}
            width={300}
            height={168}
          />
        ))}
      </div>
    </section>
  );
}

export const AboutModerneSection: FunctionComponent = () => {
  return (
    <section className={styles.platformSection}>
      <h2 className={styles.sectionTitle}>More about Moderne</h2>
      <div className={styles.platformContent}>
        <p>
          Moderne delivers a coordinated set of tools that coding agents and developers use to understand software systems, discover relevant code, and safely execute large-scale engineering changes. Your organization can run <Link href="/user-documentation/recipes/recipe-catalog">existing recipes</Link> from our extensive catalog or create your own. Moderne offers several tools to help you do this:
        </p>
        <p>
          The <Link href="/user-documentation/moderne-platform/getting-started/running-your-first-recipe"><strong>Moderne Platform</strong></Link> is an enterprise-ready, private SaaS solution that enables anyone in your organization to run recipes, create pull requests, and generate detailed reports across all of your repositories - all without writing a line of code.
        </p>
        <p>
          The <Link href="/user-documentation/moderne-cli/getting-started/cli-intro"><strong>Moderne CLI</strong></Link> is a command line tool that complements the Platform, enabling you to build LST artifacts across many repositories and run recipes against all of them from your local machine. It also provides substantial benefits for creating and testing your own recipes.
        </p>
        <p>
          <Link href="/administrator-documentation/moderne-dx/getting-started/overview"><strong>Moderne DX</strong></Link> brings the power of large-scale code insights and remediations into air-gapped or highly secure environments. It gives you the tools to build as much or as little as you need while ensuring all of your code and data remains under your own security controls.
        </p>
        <p>
          <Link href="/user-documentation/moddy/moddy-platform"><strong>Moddy</strong></Link> is a multi-repo AI agent that combines natural language with the accuracy and scalability of Moderne and OpenRewrite. You can ask it questions like "Help me upgrade to Spring Boot 3.5" and it will find and execute the appropriate recipes for you.
        </p>
        <p>
          <Link href="/user-documentation/agent-tools/prethink"><strong>Moderne Prethink</strong></Link> recipes generate structured context that gives coding agents a clear, accurate understanding of your entire codebase. Instead of forcing agents to infer your architecture from raw code, Prethink provides pre-resolved knowledge about service endpoints, dependencies, test coverage, and more.
        </p>
        <p>
          Moderne also offers an <Link href="/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install"><strong>IntelliJ IDEA plugin</strong></Link> that helps you create and debug recipes while allowing you to search for code across all of your repositories at once.
        </p>
        <p>
          Moderne is SOC 2 Type 2 compliant, so you can be confident that your code is secure. Furthermore, a private SaaS can be created for your team in any major cloud provider or region of your choice. Moderne currently supports numerous languages, data formats, build tools, and frameworks - with more being routinely added over time. Moderne also supports <Link href="/administrator-documentation/moderne-platform/references/supported-scms">most Git-based source code management tools</Link>.
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
        description="Explore documentation and tutorials for automated code remediation. Fix vulnerabilities, standardize code quality, perform type-aware code searches, and accelerate refactoring at enterprise scale with Moderne Platform, CLI, DX, and more."
      >
        <main className={styles.homePage}>
          <GemDecorations />
          <div className={styles.pageBody}>
            <HeroSection />
            <ProductCardsGrid products={homepageProducts} />
            <WhatIsModerneSection />
            <AboutModerneSection />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
