import { LitElement, html } from 'lit-element';

class AppDescription extends LitElement {
  static get properties() {
    return {
      text: { type: String, attribute: true },
    };
  }

  constructor() {
    super();
    this.text = '';
  }

  render() {
    return html` <div>${this.text}</div> `;
  }
}

customElements.define('app-description', AppDescription);
