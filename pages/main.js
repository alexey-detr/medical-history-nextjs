import React from 'react';

import withRedux from 'next-redux-wrapper';
import Head from 'next/head';

import makeStore from '../store';
import styles from '../styles/main.css';
import Navigator from '../components/Navigator';

const Main = () => (
  <div>
    <Head>
      <title>Medical History</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <div className={styles.mainContainer}>
      <Navigator />
    </div>
  </div>
);

export default withRedux(makeStore)(Main);
