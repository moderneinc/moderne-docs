import React, { type FunctionComponent, type ReactNode } from 'react';
import RunRecipe from '@site/src/components/RunRecipe';
import { Accordion, type AccordionItem } from '../Accordion';
import type { UsageProps } from '../shared/types';

/**
 * Usage as a collapsible accordion — first open. Single RunRecipe, or one row per labelled variant.
 * Pass the section's markdown `## Usage` heading as children: it renders in the accordion header row
 * (with the toggle) and still feeds the native TOC.
 */
export const UsageList: FunctionComponent<{
  usage: UsageProps;
  variants?: { label: string; props: UsageProps }[];
  children?: ReactNode;
}> = ({ usage, variants, children }) => {
  const items: AccordionItem[] =
    variants && variants.length > 0
      ? variants.map((v) => ({ key: v.label, label: v.label, content: <RunRecipe {...v.props} /> }))
      : [{ key: 'usage', label: 'Run this recipe', content: <RunRecipe {...usage} /> }];

  return <Accordion items={items}>{children}</Accordion>;
};
