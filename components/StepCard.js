import React from 'react';
import styles from './StepCard.css';

export default (WrappedComponent) => {
  return class StepCard extends React.Component {
    render() {
      return <div className={styles.card}>
        <div className={styles.title}>
          {this.props.title}
        </div>
        <div className={styles.content}>
          <WrappedComponent {...this.props}/>
        </div>
      </div>;
    }
  };
}
