import React, { type FunctionComponent } from 'react';
import RunRecipe from '@site/src/components/RunRecipe';
import { Accordion, type AccordionItem } from '../Accordion/Accordion.prototype';
import type { UsageProps } from '../shared/types';

/**
 * Usage as a collapsible accordion (see Accordion) — first one open. The master
 * template shows every labelled variant (Java/JVM, with-configuration, JS/Python/
 * C#); a real recipe shows its single RunRecipe in one container.
 */
export const UsageList: FunctionComponent<{
  title: string;
  usage: UsageProps;
  variants?: { label: string; props: UsageProps }[];
}> = ({ title, usage, variants }) => {
  const items: AccordionItem[] =
    variants && variants.length > 0
      ? variants.map((v) => ({
          key: v.label,
          label: v.label,
          content: <RunRecipe {...v.props} />,
        }))
      : [{ key: 'usage', label: 'Run this recipe', content: <RunRecipe {...usage} /> }];

  return <Accordion title={title} items={items} />;
};
