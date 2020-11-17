import { LitElement, html } from 'lit-element';

class AppLocation extends LitElement {
  static get properties() {
    return {
      name: { type: String, attribute: true },
    };
  }

  constructor() {
    super();
    this.name = '';
  }

  render() {
    return html` <div>${this.name}</div> `;
  }
}

customElements.define('app-location', AppLocation);
