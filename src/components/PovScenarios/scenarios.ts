/**
 * The agents `mod <agent> chat` starts and the proof-of-value scenarios the picker offers. The
 * command the picker renders is built from these, so a prompt edited here changes the page.
 */

export interface Agent {
  id: string;
  label: string;
  /** The subcommand: `mod <cli> chat`. */
  cli: string;
  /** Windsurf takes no `--prompt`; the prompt is typed into its chat panel instead. */
  takesPrompt: boolean;
}

export const AGENTS: Agent[] = [
  { id: 'copilot', label: 'GitHub Copilot', cli: 'copilot', takesPrompt: true },
  { id: 'claude', label: 'Claude Code', cli: 'claude', takesPrompt: true },
  { id: 'codex', label: 'Codex', cli: 'codex', takesPrompt: true },
  { id: 'cursor', label: 'Cursor', cli: 'cursor', takesPrompt: true },
  { id: 'kiro', label: 'Kiro', cli: 'kiro', takesPrompt: true },
  { id: 'amp', label: 'Amp', cli: 'amp', takesPrompt: true },
  { id: 'opencode', label: 'OpenCode', cli: 'opencode', takesPrompt: true },
  { id: 'pi', label: 'Pi', cli: 'pi', takesPrompt: true },
  { id: 'vscode', label: 'VS Code', cli: 'vscode', takesPrompt: true },
  { id: 'windsurf', label: 'Windsurf', cli: 'windsurf', takesPrompt: false },
];

export interface Scenario {
  id: string;
  label: string;
  /** An episodic scenario ends; an always-on one is restarted and keeps going. */
  kind: 'episodic' | 'always-on';
  /** The working set directory the session is started in. */
  directory: string;
  prompt: string;
  /** One sentence shown under the command. */
  summary: string;
  /** The page section that describes the scenario. */
  anchor: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'deck',
    label: 'Run the POV and fill in the value deck',
    kind: 'episodic',
    directory: './pov',
    prompt:
      'Run the proof of value on this organization and fill in the deck at ./moderne-pov.pptx. ' +
      'The notes on each slide say what it needs and how to measure it. Replace every ' +
      '{{placeholder}} with what you measured and add the screenshots the notes ask for. Leave ' +
      'a slide out rather than guess. Every number in the finished deck must trace to a ' +
      'changeset, a data table or a session you can name.',
    summary:
      'The agent runs the proof of value end to end and fills in a deck for leadership, one measured result per slide.',
    anchor: '#running-the-pov-and-filling-in-the-value-deck',
  },
  {
    id: 'spring-boot',
    label: 'Keep every repository on the latest Spring Boot',
    kind: 'always-on',
    directory: './factory-spring-boot',
    prompt:
      'Perpetually keep every repository on the latest Spring Boot release. Find where each ' +
      'repository stands, run the upgrade recipe over everything that is behind, verify each ' +
      'repository with its own build, and open pull requests as they pass. Where the recipe ' +
      'falls short, fix it or write a new one so the fix reaches every repository, then run it ' +
      'again over everything. Record what you learn in data tables. When everything is ' +
      'current, say so, and start over when the next release ships.',
    summary:
      'A standing objective: the session brings every repository to the current release, fixes the recipe where it falls short, and starts again when the next release ships.',
    anchor: '#keeping-every-repository-on-the-latest-spring-boot',
  },
  {
    id: 'vulnerabilities',
    label: 'Watch for new vulnerabilities and fix them everywhere',
    kind: 'always-on',
    directory: './factory-vulnerabilities',
    prompt:
      'Monitor for newly disclosed vulnerabilities that affect the tech stack of this ' +
      'organization. Use the last30days skill for that when you have it, and web research when ' +
      'you do not. For each vulnerability, find every repository it reaches with code search, ' +
      'find or write a recipe that remediates it, run the recipe over everything affected, ' +
      'verify with each repository\'s own build, and open pull requests. Generalize any fix you ' +
      'make by hand into a recipe so it applies everywhere. Keep going.',
    summary:
      'A standing objective: the session reads what was disclosed, finds where it reaches the estate, and remediates it with a recipe that runs everywhere.',
    anchor: '#watching-for-vulnerabilities-and-fixing-them-everywhere',
  },
  {
    id: 'data-flow',
    label: 'Build a data-flow understanding of the code',
    kind: 'episodic',
    directory: './data-flow',
    prompt:
      'Develop additional capabilities in pursuit of understanding how data flows through this ' +
      'code and the third-party libraries it uses, so that when I have a data flow question ' +
      'there is a ready facility that deeply understands the code. Build the capabilities as ' +
      'recipes and data tables that can be run again over the whole organization, prove them ' +
      'on real questions about this code, and record what each one answers and where it falls ' +
      'short.',
    summary:
      'A longer piece of work: the session builds recipes and data tables that answer where data goes, and proves them on real questions about your code.',
    anchor: '#building-a-data-flow-understanding-of-the-code',
  },
];

/** The width the prompt is wrapped to inside the rendered command. */
const PROMPT_WIDTH = 76;

/** Breaks the prompt at spaces so the rendered command reads without a horizontal scroll. */
export function wrapPrompt(prompt: string): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of prompt.split(' ')) {
    if (line && line.length + 1 + word.length > PROMPT_WIDTH) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** The `mod <agent> chat` command for an agent and a scenario, with the prompt in place. */
export function chatCommand(agent: Agent, scenario: Scenario): string {
  const start = `mod ${agent.cli} chat ${scenario.directory} --org "<organization>"`;
  if (!agent.takesPrompt) return start;
  const [first, ...rest] = wrapPrompt(scenario.prompt);
  const prompt = [`--prompt "${first}`, ...rest.map((l) => `  ${l}`)].join('\n');
  return `${start} \\\n  ${prompt}"`;
}
