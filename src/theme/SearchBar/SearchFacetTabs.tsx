import clsx from 'clsx';
import type {ReactNode} from 'react';
import styles from './SearchFacetTabs.module.css';

export type SearchTab = 'all' | 'documentation' | 'recipes';

interface SearchFacetTabsProps {
  activeTab: SearchTab;
  onTabChange: (tab: SearchTab) => void;
}

const tabs: {value: SearchTab; label: string}[] = [
  {value: 'all', label: 'All'},
  {value: 'documentation', label: 'Documentation'},
  {value: 'recipes', label: 'Recipes'},
];

export default function SearchFacetTabs({
  activeTab,
  onTabChange,
}: SearchFacetTabsProps): ReactNode {
  return (
    <div
      className={styles.tabsContainer}
      role="tablist"
      aria-label="Search scope">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={activeTab === tab.value}
          className={clsx(
            styles.tab,
            activeTab === tab.value && styles.tabActive,
          )}
          onClick={() => onTabChange(tab.value)}
          type="button">
          {tab.label}
        </button>
      ))}
    </div>
  );
}
