import React, { useState, type FunctionComponent } from 'react';
import CodeBlock from '@theme/CodeBlock';
import { AGENTS, SCENARIOS, chatCommand, wrapPrompt } from './scenarios';
import styles from './PovScenarios.module.css';

const KIND_LABEL = { episodic: 'Runs once', 'always-on': 'Always on' } as const;

/**
 * Agent and scenario pickers over the `mod <agent> chat` command a proof of value starts with.
 * The command updates as the reader picks, and the code block's own copy button copies it.
 */
export const PovScenarios: FunctionComponent = () => {
  const [agentId, setAgentId] = useState(AGENTS[0].id);
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0].id);
  const agent = AGENTS.find((a) => a.id === agentId) ?? AGENTS[0];
  const scenario = SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0];

  return (
    <div className={styles.scenarios}>
      <div className={styles.picker}>
        <label className={styles.field}>
          <span className={styles.label}>Agent</span>
          <select className={styles.select} value={agent.id} onChange={(e) => setAgentId(e.target.value)}>
            {AGENTS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Scenario</span>
          <select
            className={styles.select}
            value={scenario.id}
            onChange={(e) => setScenarioId(e.target.value)}
          >
            {SCENARIOS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <CodeBlock language="bash">{chatCommand(agent, scenario)}</CodeBlock>
      {!agent.takesPrompt && (
        <>
          <p className={styles.summary}>
            Windsurf does not take <code>--prompt</code>. Paste this into the chat panel once the IDE opens:
          </p>
          <CodeBlock language="text">{wrapPrompt(scenario.prompt).join('\n')}</CodeBlock>
        </>
      )}
      <p className={styles.summary}>
        <span className={styles.kind}>{KIND_LABEL[scenario.kind]}.</span> {scenario.summary}{' '}
        <a href={scenario.anchor}>Read what the session does.</a>
      </p>
    </div>
  );
};

PovScenarios.displayName = 'PovScenarios';
