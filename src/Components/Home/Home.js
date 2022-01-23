import React from 'react';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import Map from '../Common/Map';
import styles from './Home.module.css';

const Home = () => {
  return (
    // <section className="container mainContainer">
    <section className={styles.mapContainer}>
      <Map />
      <div className={styles.weather}>
        <div>
          <h2>São José do Rio Preto, SP</h2>
          <h3>23 de Janeiro de 2022</h3>
          <p>Nublado</p>
        </div>
        <div>
          <h2>35</h2>
          <h3>Máx: 37 | Mín: 28</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
