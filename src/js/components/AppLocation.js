import { LitElement, html, css } from 'lit-element';

class AppLocation extends LitElement {
  static get styles() {
    return css`
      #location {
        font-size: 2rem;
        padding: 1rem;
        margin: 1rem 0;
      }
    `;
  }

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
    return html` <div id="location">${this.name}</div> `;
  }
}

customElements.define('app-location', AppLocation);
