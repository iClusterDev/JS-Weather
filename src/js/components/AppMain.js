import { LitElement, html } from 'lit-element';
import './AppLocation';

class AppMain extends LitElement {
  static get properties() {
    return {
      location: { type: String },
    };
  }

  constructor() {
    super();
    this.location = '';
  }

  render() {
    return html`
      <button @click="${this.handleClick}">clickme</button>
        <div>
          <app-location name="${this.location}"></app-location>
        </div>
      </button>
    `;
  }

  handleClick() {
    this.location = 'Crawley';
  }
}

customElements.define('app-main', AppMain);
