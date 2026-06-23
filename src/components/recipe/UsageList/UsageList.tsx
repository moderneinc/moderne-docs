import React, { type FunctionComponent } from 'react';
import RunRecipe from '@site/src/components/RunRecipe';
import { Accordion, type AccordionItem } from '../Accordion';
import type { UsageProps } from '../shared/types';

/** Usage as a collapsible accordion — first open. Single RunRecipe, or one row per labelled variant. */
export const UsageList: FunctionComponent<{
  usage: UsageProps;
  variants?: { label: string; props: UsageProps }[];
}> = ({ usage, variants }) => {
  const items: AccordionItem[] =
    variants && variants.length > 0
      ? variants.map((v) => ({ key: v.label, label: v.label, content: <RunRecipe {...v.props} /> }))
      : [{ key: 'usage', label: 'Run this recipe', content: <RunRecipe {...usage} /> }];

  return <Accordion items={items} />;
};
