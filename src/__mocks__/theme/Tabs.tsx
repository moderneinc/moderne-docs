/**
 * Mock of @theme/Tabs for Storybook — emits the same DOM/class names as the real Docusaurus Tabs
 * (`.tabs-container`, `ul.tabs`, `li.tabs__item(--active)`) so our `.recipe :global(.tabs…)` Neo
 * segmented-picker styling applies exactly as it does on the docs site. Clicking a tab switches panels.
 */
import React, { Children, isValidElement, useState, type ReactElement, type ReactNode } from 'react';

type TabItemProps = { label?: string; value?: string; children?: ReactNode };

export default function Tabs({ children }: { children?: ReactNode }): React.ReactElement {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<TabItemProps>[];
  const [active, setActive] = useState(0);
  return (
    <div className="tabs-container">
      <ul role="tablist" className="tabs">
        {items.map((item, i) => (
          <li
            key={item.props.value ?? i}
            role="tab"
            tabIndex={0}
            aria-selected={i === active}
            className={`tabs__item${i === active ? ' tabs__item--active' : ''}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActive(i); }}
          >
            {item.props.label ?? item.props.value}
          </li>
        ))}
      </ul>
      <div className="margin-top--md">{items[active]}</div>
    </div>
  );
}
