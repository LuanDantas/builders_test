export const API_URL = 'https://api.openweathermap.org/data/2.5/weather/';
export const API_KEY = 'dea9c1a47f941dbfa63bfee5e70e5872';

export function WEATHER_BY_GEOLOCATION(lat, lon) {
  return {
    url: `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function WEATHER_BY_CITY_NAME(name) {
  return {
    url: `${API_URL}?q=${name}&appid=${API_KEY}&lang=pt_br`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
