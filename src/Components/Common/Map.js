import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function MapComponent({ latitude, longitude }) {
  const [map, setMap] = React.useState(null);

  const containerStyle = {
    width: '100%',
    height: '91.6vh',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const position = {
    lat: latitude,
    lng: longitude,
  };

  const zoom = 16;

  const options = {
    disableDefaultUI: true,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBzEYVPx_jL90u0DvaOSMFiP9KjURLNsNg',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={options}
      onLoad={(map, marker) => {
        setMap(map);
      }}
      onUnmount={(map) => {
        setMap(null);
      }}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
