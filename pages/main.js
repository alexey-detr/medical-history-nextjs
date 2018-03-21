import React from 'react';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Head from 'next/head';
import styles from '../styles/main.css';
import Navigator from '../components/Navigator';

class Main extends React.Component {
  static getInitialProps({ store, query }) {
    return {};
  }

  render() {
    return <div>
      <Head>
        <title>Medical History</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        <link rel='stylesheet' href='/_next/static/style.css'/>
      </Head>
      <div className={styles.mainContainer}>
          <Navigator/>
      </div>
    </div>;
  }
}

Main.propTypes = {
  model: PropTypes.object,
};

export default withRedux(initStore)(Main);
