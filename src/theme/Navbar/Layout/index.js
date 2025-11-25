import React from 'react';
import clsx from 'clsx';
import Layout from '@theme-original/Navbar/Layout';
import styles from './styles.module.css';

export default function LayoutWrapper(props) {
  return (
    <Layout {...props} className={clsx(styles.navbar, props.className)} />
  );
}
