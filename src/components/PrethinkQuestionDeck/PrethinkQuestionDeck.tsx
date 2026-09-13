import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FunctionComponent,
  type ReactElement,
  type ReactNode,
} from 'react';
import styles from './PrethinkQuestionDeck.module.css';

/** How many face-down cards to render behind the top of the deck. */
const DECK_DEPTH = 6;

/** How many drawn cards stay in the DOM. Older ones are dropped from the pile. */
const PILE_DEPTH = 12;

/** Duration of the shuffle animation, in ms. Keep in sync with the CSS. */
const SHUFFLE_MS = 900;

/**
 * Inline formatting tags, used to tell a markdown list apart from a paragraph
 * when deciding whether a single wrapping element holds the cards.
 */
const INLINE_TAGS = new Set(['strong', 'em', 'code', 'a', 'del', 'span']);

/** Separators an author might put between the theme and the question. */
const THEME_SEPARATOR = /^[\s]*[—–:-][\s]*/;

export type PrethinkQuestion = {
  /** Stable identifier, used as a React key. */
  id: number;
  /** The question, phrased as a user would ask their agent. */
  text: string;
  /** Broad subject, shown on the card face. */
  theme: string;
};

type DrawnCard = PrethinkQuestion & {
  /** Resting rotation, so the pile reads as physical rather than snapped to a grid. */
  rotation: number;
  /** Resting offset in px. */
  offsetX: number;
  offsetY: number;
};

type WithChildren = { children?: ReactNode };

/** Pull the plain text out of an arbitrary MDX subtree. */
function textOf(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return '';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(textOf).join('');
  }
  if (isValidElement(node)) {
    return textOf((node.props as WithChildren).children);
  }
  return '';
}

/**
 * Find the first `<strong>` in a subtree. Markdown `**Theme**` compiles to one,
 * and `strong` is not remapped by Docusaurus MDXComponents, so matching the
 * intrinsic tag name is safe here in a way that matching `ul` or `li` is not.
 */
function findStrong(node: ReactNode): ReactElement | undefined {
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findStrong(child);
      if (found) {
        return found;
      }
    }
    return undefined;
  }
  if (!isValidElement(node)) {
    return undefined;
  }
  if (node.type === 'strong') {
    return node;
  }
  return findStrong((node.props as WithChildren).children);
}

/**
 * Reduce the children to one element per card.
 *
 * Markdown hands us a single list element wrapping the items, so when there is
 * exactly one child element whose own element children all share a type that is
 * not inline formatting, we treat that child as the list and its children as the
 * cards. Anything else is taken as an already-flat set of cards, which is what
 * stories and tests pass.
 */
function cardElementsOf(children: ReactNode): ReactNode[] {
  const top = Children.toArray(children).filter(isValidElement);
  if (top.length !== 1) {
    return top;
  }

  const inner = Children.toArray((top[0].props as WithChildren).children).filter(isValidElement);
  if (inner.length === 0) {
    return top;
  }

  const [first] = inner;
  const uniform = inner.every((item) => item.type === first.type);
  const isInline = typeof first.type === 'string' && INLINE_TAGS.has(first.type);
  return uniform && !isInline ? inner : top;
}

/**
 * Read the question set out of the component's children.
 *
 * Each list item contributes one card. A leading bold run becomes the theme and
 * the remainder becomes the question, so a card is authored in markdown as:
 *
 * ```md
 * * **Architecture** — Which packages sit furthest from the main sequence?
 * ```
 *
 * An item with no bold run still works; it becomes an untitled card.
 */
export function parseQuestions(children: ReactNode): PrethinkQuestion[] {
  return cardElementsOf(children)
    .map((item, index) => {
      const strong = findStrong(item);
      const theme = strong ? textOf(strong).trim() : '';
      const full = textOf(item).trim();
      const text = (theme ? full.slice(theme.length) : full).replace(THEME_SEPARATOR, '').trim();
      return { id: index, theme, text };
    })
    .filter((question) => question.text.length > 0);
}

/** Fisher-Yates. Returns a new array; does not mutate the input. */
function shuffle<T>(items: readonly T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Small random resting placement for a card landing on the discard pile.
 * Enough to read as a handled pile, not so much that the top card is hard to
 * read or the pile spills past its container.
 */
function jitter(): Pick<DrawnCard, 'rotation' | 'offsetX' | 'offsetY'> {
  return {
    rotation: Math.random() * 10 - 5,
    offsetX: Math.random() * 14 - 7,
    offsetY: Math.random() * 14 - 7,
  };
}

export type PrethinkQuestionDeckProps = {
  /**
   * The questions, authored as a markdown list. Each list item becomes a card,
   * with a leading bold run read as the card's theme.
   */
  children?: ReactNode;
};

/**
 * An interactive deck of Prethink questions, supplied as a markdown list.
 *
 * Click the face-down deck to draw the top card onto the pile beside it; each
 * new card lands on the previous one with a little rotation so the pile looks
 * handled rather than stacked by a machine. Reshuffle returns every card to the
 * deck and deals a fresh order.
 *
 * Motion is suppressed under `prefers-reduced-motion`, where cards appear in
 * place instead of animating; the drawn question is also announced through a
 * live region so the interaction does not depend on seeing the animation.
 */
export const PrethinkQuestionDeck: FunctionComponent<PrethinkQuestionDeckProps> = ({ children }) => {
  const symbol = useBaseUrl('/img/moderne-symbol.svg');

  // Parsing is memoised on the children so that the deck's own state updates do
  // not rebuild the question set, which would restart the shuffle effect below.
  const questions = useMemo(() => parseQuestions(children), [children]);

  // Start in deterministic order so server and client markup match, then
  // shuffle after mount. Shuffling during render would cause a hydration
  // mismatch, since the server and the browser would pick different orders.
  const [deck, setDeck] = useState<PrethinkQuestion[]>(() => [...questions]);
  const [drawn, setDrawn] = useState<DrawnCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const shuffleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runShuffle = useCallback(
    (source: PrethinkQuestion[]) => {
      if (shuffleTimer.current) {
        clearTimeout(shuffleTimer.current);
      }
      setIsShuffling(true);
      setDeck(shuffle(source));
      setDrawn([]);
      shuffleTimer.current = setTimeout(() => setIsShuffling(false), SHUFFLE_MS);
    },
    [],
  );

  useEffect(() => {
    setHasMounted(true);
    runShuffle(questions);
    return () => {
      if (shuffleTimer.current) {
        clearTimeout(shuffleTimer.current);
      }
    };
  }, [questions, runShuffle]);

  const drawCard = useCallback(() => {
    if (isShuffling) {
      return;
    }
    setDeck((current) => {
      if (current.length === 0) {
        return current;
      }
      const [next, ...rest] = current;
      setDrawn((pile) => [...pile, { ...next, ...jitter() }].slice(-PILE_DEPTH));
      return rest;
    });
  }, [isShuffling]);

  const reshuffle = useCallback(() => runShuffle(questions), [questions, runShuffle]);

  const topCard = drawn.length > 0 ? drawn[drawn.length - 1] : undefined;
  const isEmpty = deck.length === 0;

  // Only the top few face-down cards are rendered; the rest are invisible anyway.
  const backs = useMemo(
    () => Array.from({ length: Math.min(DECK_DEPTH, deck.length) }, (_, i) => i),
    [deck.length],
  );

  if (questions.length === 0) {
    return null;
  }

  return (
    <div className={styles.deckArea}>
      <div className={styles.tableau}>
        <div className={styles.drawColumn}>
          <button
            type="button"
            className={styles.drawStack}
            onClick={drawCard}
            disabled={isEmpty || isShuffling}
            aria-label={
              isEmpty
                ? 'The deck is empty. Reshuffle to start again.'
                : `Draw a question. ${deck.length} cards remaining.`
            }
          >
            {backs.map((depth) => (
              <span
                key={depth}
                className={`${styles.cardBack} ${isShuffling && hasMounted ? styles.cardBackShuffling : ''}`}
                style={
                  {
                    '--card-depth': depth,
                    '--shuffle-delay': `${depth * 60}ms`,
                  } as React.CSSProperties
                }
                aria-hidden="true"
              >
                <img src={symbol} alt="" width={20} height={20} className={styles.cardMark} />
              </span>
            ))}

            {isEmpty && (
              <span className={styles.emptySlot} aria-hidden="true">
                Deck empty
              </span>
            )}
          </button>

          <p className={styles.counter}>
            {isEmpty ? 'No cards left' : `${deck.length} of ${questions.length} left`}
          </p>
        </div>

        <div className={styles.pileColumn}>
          <div className={styles.pile}>
            {drawn.length === 0 && !isShuffling && (
              <p className={styles.pilePlaceholder}>Click the deck to draw a question</p>
            )}

            {drawn.map((card, index) => (
              <article
                key={`${card.id}-${index}`}
                className={styles.cardFace}
                data-top={index === drawn.length - 1 ? 'true' : undefined}
                aria-hidden={index === drawn.length - 1 ? undefined : 'true'}
                style={
                  {
                    '--card-rotation': `${card.rotation}deg`,
                    '--card-offset-x': `${card.offsetX}px`,
                    '--card-offset-y': `${card.offsetY}px`,
                    '--pile-index': index,
                  } as React.CSSProperties
                }
              >
                {card.theme && <span className={styles.cardTheme}>{card.theme}</span>}
                <p className={styles.cardQuestion}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.reshuffleButton} onClick={reshuffle}>
          Reshuffle deck
        </button>
      </div>

      {/* The drawn question, for screen readers and anyone who cannot see the pile. */}
      <p className={styles.liveRegion} aria-live="polite">
        {topCard ? `${topCard.theme}. ${topCard.text}` : ''}
      </p>
    </div>
  );
};

PrethinkQuestionDeck.displayName = 'PrethinkQuestionDeck';
