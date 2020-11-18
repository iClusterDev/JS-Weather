import { LitElement, html, css } from 'lit-element';

class AppTemperature extends LitElement {
  static get styles() {
    return css`
      #temperature {
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      #temperature-value {
        font-size: 3rem;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Number, attribute: true },
    };
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    return html`
      <div id="temperature">
        <div id="temperature-value">${this.value}</div>
        <small>degrees</small>
      </div>
    `;
  }
}

customElements.define('app-temperature', AppTemperature);
