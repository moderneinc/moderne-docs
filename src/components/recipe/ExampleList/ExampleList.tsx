import React, { type FunctionComponent, type ReactNode } from 'react';
import clsx from 'clsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { Accordion, type AccordionItem } from '../Accordion';
import type { RecipeExample } from '../shared/types';
import styles from './ExampleList.module.css';
import shared from '../shared/styles.module.css';

/** Map an example's source kind to a Prism language CodeBlock understands. */
const codeLang = (lang: string): string => {
  const map: Record<string, string> = {
    'pom.xml': 'xml',
    'build.gradle': 'groovy',
    mavenProject: 'text',
    gradleProject: 'text',
  };
  return map[lang] ?? lang;
};

/** The body of a single example: optional test id, parameters, and before/after (or diff). */
const ExampleBody: FunctionComponent<{ example: RecipeExample }> = ({ example: ex }) => (
  <>
    {ex.name && (
      <div className={styles.exampleName}><code className={shared.inlineCode}>{ex.name}</code></div>
    )}
    {ex.parameters && ex.parameters.length > 0 && (
      <div className={shared.tableScroll}>
        <table className={clsx(shared.table, styles.paramTable)}>
          <thead><tr><th className={shared.th}>Parameter</th><th className={shared.th}>Value</th></tr></thead>
          <tbody>
            {ex.parameters.map((p) => (
              <tr key={p.parameter}>
                <td className={shared.td}>{p.parameter}</td>
                <td className={shared.td}><code className={shared.inlineCode}>{p.value}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    {ex.unchanged && (
      <div className={styles.unchangedBlock}>
        <div className={styles.exampleLabel}>Unchanged</div>
        <CodeBlock language={codeLang(ex.unchanged.language)}>{ex.unchanged.code}</CodeBlock>
      </div>
    )}
    {ex.variants.map((v) => (
      <Tabs key={v.language} groupId="beforeAfter">
        <TabItem value={v.language} label={v.language}>
          {v.newFile ? (
            <>
              <div className={styles.afterLabel}>New file</div>
              <CodeBlock language={codeLang(v.language)}>{v.after}</CodeBlock>
            </>
          ) : (
            <>
              <div className={styles.beforeLabel}>Before</div>
              <CodeBlock language={codeLang(v.language)}>{v.before}</CodeBlock>
              <div className={styles.afterLabel}>After</div>
              <CodeBlock language={codeLang(v.language)}>{v.after}</CodeBlock>
            </>
          )}
        </TabItem>
        {v.diff && (
          <TabItem value="diff" label="Diff">
            <CodeBlock language="diff">{v.diff}</CodeBlock>
          </TabItem>
        )}
      </Tabs>
    ))}
  </>
);

/**
 * Examples as a collapsible accordion — first one open. Pass the section's markdown `## Examples`
 * heading as children: it renders in the accordion's header row (with the Expand/Collapse-all toggle)
 * and still feeds the native TOC.
 */
export const ExampleList: FunctionComponent<{ examples: RecipeExample[]; children: ReactNode }> = ({ examples, children }) => {
  const items: AccordionItem[] = examples.map((ex, i) => {
    const langs = ex.variants.map((v) => v.language).join(', ');
    return { key: ex.name ? `${ex.name}-${i}` : `example-${i}`, label: langs || `Example ${i + 1}`, content: <ExampleBody example={ex} /> };
  });
  // `.recipe` scopes the prototype's Neo "button tab group" styling onto the Docusaurus <Tabs>
  // (the segmented before/after/diff picker) and the table-chrome resets — production pages aren't
  // wrapped in `.recipe` the way the standalone prototype page was.
  return (
    <div className={shared.recipe}>
      <Accordion items={items}>{children}</Accordion>
    </div>
  );
};
