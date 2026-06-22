import React, { type FunctionComponent } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { Accordion, type AccordionItem } from './Accordion';
import type { RecipeExample } from './types';
import styles from './styles.module.css';

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
      <div className={styles.exampleName}><code className={styles.exampleTest}>{ex.name}</code></div>
    )}
    {ex.parameters && ex.parameters.length > 0 && (
      <table className={styles.paramTable}>
        <thead><tr><th className={styles.th}>Parameter</th><th className={styles.th}>Value</th></tr></thead>
        <tbody>
          {ex.parameters.map((p) => (
            <tr key={p.parameter}>
              <td className={styles.td}>{p.parameter}</td>
              <td className={styles.td}><code className={styles.inlineCode}>{p.value}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
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

/** Examples as a collapsible accordion — first one open. The `## Examples` heading is in the page markdown. */
export const ExampleList: FunctionComponent<{ examples: RecipeExample[] }> = ({ examples }) => {
  const items: AccordionItem[] = examples.map((ex, i) => {
    const langs = ex.variants.map((v) => v.language).join(', ');
    return { key: ex.name ? `${ex.name}-${i}` : `example-${i}`, label: langs || `Example ${i + 1}`, content: <ExampleBody example={ex} /> };
  });
  return <Accordion items={items} />;
};
