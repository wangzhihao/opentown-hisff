import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-3-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Polymer3Element extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-3-element',
      },
    };
  }
}

window.customElements.define('polymer-3-element', Polymer3Element);
