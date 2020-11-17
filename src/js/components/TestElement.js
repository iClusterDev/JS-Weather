import { LitElement, html } from 'lit-element';

class TestElement extends LitElement {
  render() {
    return html`<div>Hello from TestElement!</div>`;
  }
}

customElements.define('test-element', TestElement);
