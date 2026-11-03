import { createContext, type ReactNode } from 'react';

export interface Break {
  /** Offset in the joined line where the continued text starts. */
  offset: number;
  /** Width of the continued line's original indent, in characters. */
  indent: number;
}

/** Breaks per joined line, keyed by the joined line's text. */
export type Breaks = Map<string, Break[]>;

export const BreaksContext = createContext<Breaks | null>(null);

/** Joins `\`-continued lines and records where each continuation started. */
export function joinContinuations(code: string): { code: string; breaks: Breaks } {
  const lines: string[] = [];
  const breaks: Breaks = new Map();
  let current: string | null = null;
  let currentBreaks: Break[] = [];
  for (const source of code.split('\n')) {
    let text = source;
    if (current !== null) {
      const indent = source.length - source.trimStart().length;
      text = current + source.slice(indent);
      currentBreaks.push({ offset: current.length, indent });
    }
    const continued = /[ \t]*\\$/.exec(text);
    if (continued) {
      current = text.slice(0, continued.index) + ' ';
      continue;
    }
    lines.push(text);
    if (currentBreaks.length > 0) breaks.set(text, currentBreaks);
    current = null;
    currentBreaks = [];
  }
  if (current !== null) lines.push(current.trimEnd());
  return { code: lines.join('\n'), breaks };
}

/** Splits a token's text at the breaks it spans, calling `marker` for each break. */
export function splitAtBreaks(
  text: string,
  tokenStart: number,
  lineBreaks: Break[],
  marker: (b: Break) => ReactNode
): ReactNode[] | null {
  const inside = lineBreaks.filter((b) => b.offset >= tokenStart && b.offset < tokenStart + text.length);
  if (inside.length === 0) return null;
  const parts: ReactNode[] = [];
  let pos = 0;
  for (const b of inside) {
    parts.push(text.slice(pos, b.offset - tokenStart), marker(b));
    pos = b.offset - tokenStart;
  }
  parts.push(text.slice(pos));
  return parts;
}
