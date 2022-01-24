import React from 'react';
import styles from '../Home/Home.module.css';
import Geocode from 'react-geocode';

const Address = ({ latitude, longitude }) => {
  const [endereco, setEndereco] = React.useState('');
  let address;

  Geocode.setApiKey('AIzaSyBzEYVPx_jL90u0DvaOSMFiP9KjURLNsNg');
  Geocode.setLanguage('pt_br');
  Geocode.setRegion('br');

  Geocode.fromLatLng(latitude, longitude).then(
    (response) => {
      address = response.results[0].formatted_address;
      setEndereco(address);
    },
    (error) => {
      console.error(error);
    },
  );

  return <p className={styles.address}>{endereco}</p>;
};

export default Address;
