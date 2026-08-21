import React from 'react';
import { describe, expect, it } from 'vitest';
import { parseQuestions } from './PrethinkQuestionDeck';

/**
 * A markdown list compiles to a single `<ul>` whose children are `<li>`
 * elements, which is the shape MDX hands the deck on a docs page.
 */
describe('parseQuestions', () => {
  it('reads one card per list item, splitting theme from question', () => {
    const questions = parseQuestions(
      <ul>
        <li>
          <strong>Architecture</strong> — Which packages sit furthest from the main sequence?
        </li>
        <li>
          <strong>Testing</strong> — Is test coverage correlated with complexity here?
        </li>
      </ul>,
    );

    expect(questions).toEqual([
      { id: 0, theme: 'Architecture', text: 'Which packages sit furthest from the main sequence?' },
      { id: 1, theme: 'Testing', text: 'Is test coverage correlated with complexity here?' },
    ]);
  });

  it('keeps em dashes that belong to the question itself', () => {
    const [question] = parseQuestions(
      <ul>
        <li>
          <strong>Code health</strong> — Which methods breach every threshold at once — cyclomatic,
          cognitive, and nesting?
        </li>
      </ul>,
    );

    expect(question.text).toBe(
      'Which methods breach every threshold at once — cyclomatic, cognitive, and nesting?',
    );
  });

  it('accepts colons and hyphens as separators', () => {
    const questions = parseQuestions(
      <ul>
        <li>
          <strong>Testing</strong>: What is the test-to-code ratio per module?
        </li>
        <li>
          <strong>Runtime</strong> - How is this service configured to run?
        </li>
      </ul>,
    );

    expect(questions.map((q) => q.text)).toEqual([
      'What is the test-to-code ratio per module?',
      'How is this service configured to run?',
    ]);
  });

  it('treats an item with no bold run as an untitled card', () => {
    expect(
      parseQuestions(
        <ul>
          <li>What is the single most surprising thing about this codebase?</li>
        </ul>,
      ),
    ).toEqual([
      { id: 0, theme: '', text: 'What is the single most surprising thing about this codebase?' },
    ]);
  });

  it('reads through inline markup inside a question', () => {
    const [question] = parseQuestions(
      <ul>
        <li>
          <strong>Dependencies</strong> — Which repositories still depend on{' '}
          <code>commons-lang3</code> 3.2?
        </li>
      </ul>,
    );

    expect(question.text).toBe('Which repositories still depend on commons-lang3 3.2?');
  });

  it('handles a single-item list', () => {
    expect(
      parseQuestions(
        <ul>
          <li>
            <strong>Architecture</strong> — Draw the module dependency graph.
          </li>
        </ul>,
      ),
    ).toEqual([{ id: 0, theme: 'Architecture', text: 'Draw the module dependency graph.' }]);
  });

  it('does not mistake a paragraph for a list of cards', () => {
    const questions = parseQuestions(
      <p>
        <strong>Architecture</strong> — Draw the module dependency graph.
      </p>,
    );

    expect(questions).toEqual([
      { id: 0, theme: 'Architecture', text: 'Draw the module dependency graph.' },
    ]);
  });

  it('ignores empty items and empty children', () => {
    expect(parseQuestions(undefined)).toEqual([]);
    expect(
      parseQuestions(
        <ul>
          <li> </li>
          <li>
            <strong>Testing</strong> — Which classes have zero mapped tests?
          </li>
        </ul>,
      ),
    ).toEqual([{ id: 1, theme: 'Testing', text: 'Which classes have zero mapped tests?' }]);
  });
});
