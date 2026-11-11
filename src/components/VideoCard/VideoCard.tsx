import clsx from 'clsx';
import { useEffect, useRef, useState, type FunctionComponent } from 'react';
import VideoPlayer from '@site/src/components/VideoPlayer';
import styles from './VideoCard.module.css';

export type VideoCardGradient = 'coral' | 'violet' | 'sky';

export type VideoCardProps = {
  /** YouTube (or other react-player supported) URL */
  url: string;
  /** Title shown on the poster and read to assistive tech */
  title: string;
  /** Which brand gradient the poster uses */
  gradient?: VideoCardGradient;
  className?: string;
};

/**
 * Moderne logo mark, drawn in the poster's top-right corner.
 */
const ModerneMark: FunctionComponent = () => (
  <svg viewBox="0 0 136 136" aria-hidden="true" className={styles.mark}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M133.875 0.264884C132.594 -0.261791 131.111 0.0252481 130.129 1.00994L70.9515 60.1889C67.0604 26.3679 38.2891 0.00442968 3.4375 1.20257e-07C2.52586 1.20257e-07 1.6532 0.363664 1.00734 1.00772C0.361919 1.65134 0 2.52573 0 3.43733V132.559C0 134.457 1.539 135.997 3.4375 135.997H132.556C134.454 135.997 135.994 134.457 135.994 132.559V3.43733C135.994 2.04645 135.157 0.794212 133.873 0.262221M129.119 11.7344V64.5569H76.2943L129.119 11.7344ZM129.119 96.8395H71.4304V71.4329H129.119V96.8395ZM6.87543 124.261V71.4382H59.7004L33.2888 97.8495L6.87543 124.261ZM6.87543 6.97036C37.8457 8.69611 62.7392 33.5898 64.4624 64.5591H6.87543V6.97036ZM38.1474 102.711L64.5585 76.3001V129.123H11.7336L38.1474 102.711ZM71.4335 103.716H129.122V129.123H71.4335V103.716Z"
    />
  </svg>
);

/**
 * VideoCard renders a 16:9 gradient poster with the video's title and a play
 * button. Clicking it swaps the poster for the embedded player in place and
 * starts playback, so the page never loads a YouTube iframe until the reader
 * asks for it.
 *
 * The outer frame persists across the swap and receives focus once the player
 * mounts, so a keyboard user is not dropped back to the top of the document
 * when the button they activated unmounts.
 */
export const VideoCard: FunctionComponent<VideoCardProps> = ({
  url,
  title,
  gradient = 'coral',
  className,
}) => {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playing) {
      frameRef.current?.focus();
    }
  }, [playing]);

  return (
    <div
      ref={frameRef}
      className={clsx(styles.frame, className)}
      tabIndex={playing ? -1 : undefined}
      aria-label={playing ? title : undefined}
    >
      {playing ? (
        <div className={styles.player}>
          <VideoPlayer url={url} controls playing width="100%" height="100%" />
        </div>
      ) : (
        <button
          type="button"
          className={clsx(styles.poster, styles[`poster--${gradient}`])}
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <span className={styles.scrim} aria-hidden="true" />
          <span className={styles.title} aria-hidden="true">
            {title}
          </span>
          <ModerneMark />
          <span className={styles.play} aria-hidden="true">
            <svg viewBox="0 0 24 24" className={styles.playIcon}>
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

VideoCard.displayName = 'VideoCard';
