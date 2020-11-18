import { LitElement, html } from 'lit-element';

class AppTemperature extends LitElement {
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
    return html` <div>${this.value}</div> `;
  }
}

customElements.define('app-temperature', AppTemperature);
