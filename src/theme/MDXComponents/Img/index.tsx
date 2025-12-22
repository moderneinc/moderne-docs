import {type FunctionComponent, type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/MDXComponents/Img';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import styles from './styles.module.css';

function transformImgClassName(className?: string): string {
  return clsx(className, styles.img);
}

const ZoomableImage: FunctionComponent<Props> = (props) => {
  return (
    <Zoom>
      <img
        decoding="async"
        loading="lazy"
        {...props}
        className={transformImgClassName(props.className)}
      />
    </Zoom>
  );
};

ZoomableImage.displayName = 'ZoomableImage';

export default ZoomableImage; 