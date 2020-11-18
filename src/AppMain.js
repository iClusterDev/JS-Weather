import { LitElement, html, css } from 'lit-element';
import Weather from './js/lib/Weather';
import './js/components/AppError';
import './js/components/AppLoading';
import './js/components/AppLocation';
import './js/components/AppTemperature';
import './js/components/AppDescription';

const errorTemplate = () => {
  return html` <app-error></app-error> `;
};

const loadingTemplate = () => {
  return html` <app-loading></app-loading> `;
};

const dataTemplate = (location, temperature, description) => {
  return html`
    <div id="app">
      <app-location name="${location}"></app-location>
      <app-temperature value="${temperature}"></app-temperature>
      <app-description text="${description}"></app-description>
    </div>
  `;
};

class AppMain extends LitElement {
  static get styles() {
    return css`
      #app {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(rgb(47, 150, 163), rgb(48, 62, 143));
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: 300;
      }
    `;
  }

  static get properties() {
    return {
      error: { type: Boolean, attribute: false },
      loading: { type: Boolean, attribute: false },
      location: { type: String, attribute: false },
      temperature: { type: Number, attribute: false },
      description: { type: String, attribute: false },
    };
  }

  constructor() {
    super();
    this.error = null;
    this.loading = true;
    this.location = null;
    this.temperature = null;
    this.description = null;
  }

  render() {
    if (this.error) {
      return errorTemplate();
    } else {
      return this.loading ? loadingTemplate() : dataTemplate(this.location, this.temperature, this.description);
    }
  }

  async firstUpdated() {
    try {
      const coords = await Weather.getDeviceCoords();
      const { temperature, location, description } = await Weather.getDataByCoords(coords);
      this.location = location;
      this.temperature = temperature;
      this.description = description;
      this.loading = false;
    } catch (error) {
      this.error = true;
    }
  }
}

customElements.define('app-main', AppMain);
