import { LitElement, html } from 'lit-element';

class AppLoading extends LitElement {
  render() {
    return html` <div>Loading...</div> `;
  }
}

customElements.define('app-loading', AppLoading);
