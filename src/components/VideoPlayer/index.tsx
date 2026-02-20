import BrowserOnly from '@docusaurus/BrowserOnly';
import type { FunctionComponent } from 'react';

interface VideoPlayerProps {
  url: string;
  controls?: boolean | string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * SSR-safe wrapper around react-player.
 *
 * react-player renders differently on the server (empty div) vs the client
 * (full player with iframe/controls), which causes React hydration errors.
 * This component defers rendering to the client via BrowserOnly.
 */
const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({
  url,
  controls = true,
  className,
  width,
  height,
}) => {
  const style = {
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  };

  return (
    <BrowserOnly fallback={<div className={className} style={style} />}>
      {() => {
        const ReactPlayer = require('react-player').default;
        return (
          <ReactPlayer
            className={className}
            url={url}
            controls={controls === true || controls === 'true'}
            width={width}
            height={height}
          />
        );
      }}
    </BrowserOnly>
  );
};

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
