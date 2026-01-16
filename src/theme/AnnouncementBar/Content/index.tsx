import {type FunctionComponent} from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import type {Props} from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';

const AnnouncementBarContent: FunctionComponent<Props> = (props) => {
  const {announcementBar} = useThemeConfig();
  const {content} = announcementBar!;
  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: content}}
    />
  );
};

AnnouncementBarContent.displayName = 'AnnouncementBarContent';

export default AnnouncementBarContent;
