import React from 'react';
import styles from './Loading.module.css';
import { ReactComponent as LoadingIcon } from '../../Assets/loading.svg';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <LoadingIcon />
      </div>
    </div>
  );
};

export default Loading;
