import { LitElement, html } from 'lit-element';

class AppError extends LitElement {
  render() {
    return html`
      <div>Ooops...</div>
      <div>Something Went Wrong!</div>
      <div>Try Again Later</div>
    `;
  }
}

customElements.define('app-error', AppError);
