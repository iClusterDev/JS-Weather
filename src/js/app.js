import Weather from './components/Weather';

export default () => {
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
};
