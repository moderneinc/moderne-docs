import Link from "@docusaurus/Link";
import {
  findFirstSidebarItemLink,
  useDocById,
} from "@docusaurus/plugin-content-docs/client";
import { usePluralForm } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import { FunctionComponent, type ReactNode } from "react";

import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";
import type { Props } from "@theme/DocCard";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

/**
 * Extended customProps interface for sidebar items with gem icon support.
 * Used by both category and link items to specify which gem icon to display.
 */
interface GemIconCustomProps {
  /** Gem icon filename (without extension) from /img/gems/ */
  gemIcon?: string;
  /** Whether this item should appear in the MegaMenu */
  megaMenu?: boolean;
}

function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: "1 item|{count} items",
          id: "theme.docs.DocCard.categoryDescription.plurals",
          description:
            "The default description for a category card in the generated index about how many items this category includes",
        },
        { count }
      )
    );
}

interface CardContainerProps {
  href: string;
  children: ReactNode;
}

const CardContainer: FunctionComponent<CardContainerProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className={clsx("card", styles.cardContainer)}
    >
      {children}
    </Link>
  );
};

CardContainer.displayName = 'CardContainer';

interface CardLayoutProps {
  href: string;
  title: string;
  description?: string;
  gemIcon?: string;
}

const CardLayout: FunctionComponent<CardLayoutProps> = ({ href, title, description, gemIcon }) => {
  // Default to pink gem if no icon specified
  const iconSrc = gemIcon
    ? `/img/gems/${gemIcon}.png`
    : '/img/gems/pink.png';

  return (
    <CardContainer href={href}>
      <div className={styles.cardIcon}>
        <img src={iconSrc} alt="" role="presentation" />
      </div>
      <div className={styles.cardContent}>
        <Heading
          as="h2"
          className={clsx(styles.cardTitle, 'doc-card-title')}
          title={title}
        >
          {title}
        </Heading>
        {description && (
          <p
            className={clsx(styles.cardDescription)}
            title={description}
          >
            {description}
          </p>
        )}
      </div>
    </CardContainer>
  );
};

CardLayout.displayName = 'CardLayout';

interface CardCategoryProps {
  item: PropSidebarItemCategory;
}

const CardCategory: FunctionComponent<CardCategoryProps> = ({ item }) => {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  // Extract gem icon from customProps if available
  const customProps = item.customProps as GemIconCustomProps | undefined;
  const gemIcon = customProps?.gemIcon;

  return (
    <CardLayout
      href={href}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      gemIcon={gemIcon}
    />
  );
};

CardCategory.displayName = 'CardCategory';

interface CardLinkProps {
  item: PropSidebarItemLink;
}

const CardLink: FunctionComponent<CardLinkProps> = ({ item }) => {
  const doc = useDocById(item.docId ?? undefined);

  // Extract gem icon from customProps only (frontMatter not available on PropVersionDoc)
  const customProps = item.customProps as GemIconCustomProps | undefined;
  const gemIcon = customProps?.gemIcon;

  return (
    <CardLayout
      href={item.href}
      title={item.label}
      description={item.description ?? doc?.description}
      gemIcon={gemIcon}
    />
  );
};

CardLink.displayName = 'CardLink';

const DocCard: FunctionComponent<Props> = ({ item }) => {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
};

DocCard.displayName = 'DocCard';

export default DocCard;
