import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { NeoButton } from '@site/src/components/NeoButton';
import { NeoCard } from '@site/src/components/NeoCard';
import { NeoGelButton } from '@site/src/components/NeoGelButton';
import CodeRemixLogo from '@site/static/img/coderemix.svg';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  MessageSquareCode,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react';
import ReactPlayer from 'react-player';
import styles from './index.module.css';

export const PRODUCTS = [
  {
    product: 'platform' as const,
    label: 'Platform',
    href: '/user-documentation/moderne-platform',
  },
  {
    product: 'dx' as const,
    label: 'DX',
    href: '/administrator-documentation/moderne-DX',
  },
  {
    product: 'cli' as const,
    label: 'CLI',
    href: '/user-documentation/moderne-cli',
  },
  {
    product: 'moddy' as const,
    label: 'Moddy',
    href: '/user-documentation/moddy',
  },
  {
    product: 'recipes' as const,
    label: 'Recipes',
    href: '/user-documentation/recipes',
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
      </div>
    </section>
  );
}

export function ProductNavigation(): JSX.Element {
  return (
    <section className={styles.productNav}>
      {PRODUCTS.map((item) => (
        <NeoGelButton
          key={item.label}
          product={item.product}
          href={item.href}
          ariaLabel={`Go to ${item.label} documentation`}
        >
          {item.label}
        </NeoGelButton>
      ))}
    </section>
  );
}

export function TryItOutCard(): JSX.Element {
  return (
    <NeoCard
      title="Try it out"
      description="Try our public instance or request a private team instance for a proof of value."
      buttons={
        <div className={styles.cardButtons}>
          <NeoButton
            variant="text"
            size="small"
            href="https://app.moderne.io"
            target="_blank"
            rel="noopener noreferrer"
            icon={<ExternalLink size={16} />}
            iconPosition="right"
          >
            Free public instance
          </NeoButton>
          <NeoButton
            variant="text"
            size="small"
            href="/user-documentation/moderne-platform/getting-started/running-your-first-recipe"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Quickstart guide
          </NeoButton>
        </div>
      }
    />
  );
}

export function WeeklyCodeRemixCard(): JSX.Element {
  return (
    <NeoCard
      title="Weekly Code Remix"
      description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
      buttons={
        <div className={styles.cardButtons}>
          <NeoButton
            variant="text"
            size="small"
            href="https://www.youtube.com/@moderne-and-openrewrite"
            target="_blank"
            rel="noopener noreferrer"
            icon={<ExternalLink size={16} />}
            iconPosition="right"
          >
            YouTube channel
          </NeoButton>
          <NeoButton
            variant="text"
            size="small"
            href="https://www.youtube.com/@Moderne-and-OpenRewrite/streams"
            target="_blank"
            rel="noopener noreferrer"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Past sessions & recaps
          </NeoButton>
        </div>
      }
    />
  );
}

export function LearningResourcesCard(): JSX.Element {
  return (
    <NeoCard
      title="Learning & resources"
      description="Here are some helpful resources to keep you moving."
      buttons={
        <div className={styles.cardButtons}>
          <NeoButton
            variant="text"
            size="small"
            href="/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Plugin for JetBrains
          </NeoButton>
          <NeoButton
            variant="text"
            size="small"
            href="/hands-on-learning"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Hands on learning
          </NeoButton>
        </div>
      }
    />
  );
}

export function ResourceSection(): JSX.Element {
  return (
    <section className={styles.resourceSection}>
      <TryItOutCard />
      <WeeklyCodeRemixCard />
      <LearningResourcesCard />
    </section>
  );
}

export function WhatIsModerneCard(): JSX.Element {
  return (
    <div id="what-is-moderne" className={styles.whatIsSection}>
      <h2 className={styles.sectionTitle}>What is Moderne?</h2>
      <p className={styles.sectionText}>
        With Moderne, you can fix security vulnerabilities, standardize code quality, and
        automate maintenance processes such as framework migrations. Code refactoring work
        and security vulnerability remediations that used to take months and teams of
        developers can be done in minutes. This can not only save your company millions of
        dollars in software maintenance costs, but it can also give developers substantially
        more time to focus on delivering business value.
      </p>
      <div className={styles.videoGrid}>
        <div className={styles.videoThumbnail}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LgvqAzTxkEU"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.videoThumbnail}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Q-ej2lCJHRs"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.videoThumbnail}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KRXDMGt7DRE"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export function ModernePlatformCard(): JSX.Element {
  return (
    <div className={styles.platformSection}>
      <h2 className={styles.sectionTitle}>More about our platform</h2>
      <div className={styles.platformText}>
        <p>
          The Moderne Platform is an enterprise-ready, private Software as a Service (SaaS) solution that provides automated code remediation at scale. The platform asynchronously ingests detailed artifacts of your codebase (<Link href="https://docs.openrewrite.org/concepts-explanations/lossless-semantic-trees">Lossless Semantic Trees</Link>) that can be quickly and precisely searched. Then, your organization's source code can be transformed by running "<Link href="/user-documentation/recipes">recipes</Link>" across repositories of your choosing. These recipes can be created by your team, or you can take advantage of the hundreds of recipes already defined in <Link href="https://docs.openrewrite.org">OpenRewrite</Link> – an open-source project managed by Moderne.
        </p>
        <p>
          The platform offers a clean UI that enables anyone in your organization to run recipes, create PRs, or generate detailed reports about your codebase – all without writing a line of code. It also provides a recommendation engine to help you discover new recipes based on an analysis of your code.
        </p>
        <p>
          Moderne is SOC 2 Type 2 compliant, so you can be confident that your code is secure. Furthermore, a private SaaS can be created for your team in any major cloud provider or region of your choice.
        </p>
        <p>
          Moderne currently supports numerous languages, data formats, build tools, and frameworks – with more being routinely added over time. Moderne also currently supports <Link href="/administrator-documentation/moderne-dx/how-to-guides/configure-an-agent-with-organizations#scm-configuration">most Git-based source code management tools</Link>.
        </p>
      </div>
    </div>
  );
}

export function ContentSection(): JSX.Element {
  return (
    <section className={styles.contentSection}>
      <WhatIsModerneCard />
      <ModernePlatformCard />
    </section>
  );
}

export function GemDecorations(): JSX.Element {
  return (
    <div className={styles.gemDecorations}>
      {/* Large background gems */}
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
            <ContentSection />
          </div>
        </main>
      </Layout>
    </>
  );
}
