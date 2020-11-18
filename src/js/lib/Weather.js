import key from './key';

class Weather {
  /**
   * If the device geolocation is available
   * returns the coords object
   * @params null
   * @returns Object
   */
  static getDeviceCoords() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords));
      } else {
        // check for local store
        reject(new Error('Error - Weather.getDeviceCoords: no navigator.geolocation on device'));
      }
    });
  }

  /**
   * Returns the weather data object fetched from the
   * OpenWeather API. The coordinates object must be provided
   * @params Object
   * @returns Object
   */
  static getDataByCoords({ latitude, longitude }) {
    return new Promise((resolve, reject) => {
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp: temperature } = data.main;
          const { name: location } = data;
          const [{ description } = description] = data.weather;
          resolve({ temperature, location, description });
        })
        .catch(() => {
          reject(new Error('Error - Weather.getDataByCoords: cannot get data at the moment'));
        });
    });
  }
}

export default Weather;
