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

window.addEventListener('load', async () => {
  try {
    const coords = await Weather.getDeviceCoords();
    const { temperature, location, description } = await Weather.getDataByCoords(coords);

    const locationEl = document.querySelector('#location');
    const descriptionEl = document.querySelector('#description');
    const temperatureUnitEl = document.querySelector('#temperature-unit');
    const temperatureValueEl = document.querySelector('#temperature-value');

    locationEl.textContent = location;
    descriptionEl.textContent = description;
    temperatureUnitEl.textContent = 'degrees';
    temperatureValueEl.textContent = temperature;
  } catch (error) {
    console.log(error);
  }
});
