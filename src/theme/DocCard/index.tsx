import Link from "@docusaurus/Link";
import {
  findFirstSidebarItemLink,
  useDocById,
} from "@docusaurus/plugin-content-docs/client";
import { usePluralForm } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import { type ReactNode } from "react";

import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";
import type { Props } from "@theme/DocCard";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

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

function CardContainer({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx("card", styles.cardContainer)}
    >
      {children}
    </Link>
  );
}

function CardLayout({
  href,
  title,
  description,
  gemIcon,
}: {
  href: string;
  title: string;
  description?: string;
  gemIcon?: string;
}): JSX.Element {
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
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory;
}): JSX.Element | null {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  // Extract gem icon from customProps if available
  const gemIcon = (item.customProps as any)?.gemIcon as string | undefined;

  return (
    <CardLayout
      href={href}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      gemIcon={gemIcon}
    />
  );
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
  const doc = useDocById(item.docId ?? undefined);

  // Extract gem icon from customProps only (frontMatter not available on PropVersionDoc)
  const gemIcon = (item.customProps as any)?.gemIcon as string | undefined;

  return (
    <CardLayout
      href={item.href}
      title={item.label}
      description={item.description ?? doc?.description}
      gemIcon={gemIcon}
    />
  );
}

export default function DocCard({ item }: Props): JSX.Element {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
