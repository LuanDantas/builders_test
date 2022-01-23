import React from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '91.6vh',
};

const center = {
  lat: -20.770053733511237,
  lng: -49.38811277691601,
};

const position = {
  lat: -20.770053733511237,
  lng: -49.38811277691601,
};

const zoom = 16;

const options = {
  disableDefaultUI: true,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBzEYVPx_jL90u0DvaOSMFiP9KjURLNsNg',
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={options}
      onLoad={(map, marker) => {
        const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
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

export default React.memo(MyComponent);
