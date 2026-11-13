import { Children, createContext, isValidElement, useContext, type ReactNode } from 'react';
import type { WhatsNewProduct } from './products';

export type WhatsNewSelection = WhatsNewProduct | 'all';

/** The product the reader has filtered the feed to; 'all' shows everything */
export const WhatsNewFilterContext = createContext<WhatsNewSelection>('all');

export function useWhatsNewFilter(): WhatsNewSelection {
  return useContext(WhatsNewFilterContext);
}

/**
 * Collect the `product` prop of every entry element in a tree of children.
 * Months and MDX fragments are walked through; an entry stops the walk.
 */
export function collectProducts(node: ReactNode): WhatsNewProduct[] {
  const found: WhatsNewProduct[] = [];
  const visit = (children: ReactNode) => {
    Children.forEach(children, (child) => {
      if (!isValidElement(child)) {
        return;
      }
      const props = child.props as { product?: WhatsNewProduct; children?: ReactNode };
      if (props.product) {
        found.push(props.product);
        return;
      }
      visit(props.children);
    });
  };
  visit(node);
  return found;
}
