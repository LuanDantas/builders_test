import React from 'react';
import styles from './Home.module.css';
import Map from '../Common/Map';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import useFetch from '../../Hooks/useFetch';
import { WEATHER_BY_GEOLOCATION } from '../../API/api';
import moment from 'moment/min/moment-with-locales';
import Moment from 'react-moment';
import 'moment-timezone';

Moment.globalMoment = moment;
Moment.globalLocale = 'pt-br';

const Home = () => {
  const { data, error, loading, request } = useFetch();
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  let lat;
  let lon;
  let currentDate = new Date();

  function temperatureConverter(valNum) {
    return parseFloat(valNum - 273.15).toFixed(0);
  }

  React.useEffect(() => {
    var promiseWeather = new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;

        resolve({ lat, lon });
      });
    });

    promiseWeather.then(function (value) {
      setLatitude(value.lat);
      setLongitude(value.lon);

      async function getData() {
        const { url, options } = WEATHER_BY_GEOLOCATION(lat, lon);
        await request(url, options);
      }

      getData();
    });
  }, [lat, request]);

  return (
    <section className={styles.mapContainer}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {latitude && longitude ? (
        <Map latitude={latitude} longitude={longitude} />
      ) : (
        <Loading />
      )}
      {data && (
        <div
          className={`${styles.weather} ${data.weather[0].main.toLowerCase()}`}
        >
          <div>
            <h2 className={styles.city}>{data.name}</h2>
            <h3 className={styles.date}>
              <Moment format="DD">{currentDate}</Moment> de{' '}
              <span>
                <Moment format="MMMM">{currentDate}</Moment>
              </span>{' '}
              de <Moment format="YYYY">{currentDate}</Moment>
            </h3>
            <p className={styles.description}>{data.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn//${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
            />
          </div>
          <div>
            <h2 className={styles.temp}>
              {parseFloat(data.main.temp - 273.15).toFixed(0)}°
            </h2>
            <h3 className={styles.variableTemp}>
              <span className={styles.maxTemp}>Máx:</span>{' '}
              {temperatureConverter(data.main.temp_max)}° |{' '}
              <span className={styles.minTemp}>Mín:</span>{' '}
              {temperatureConverter(data.main.temp_min)}°
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
