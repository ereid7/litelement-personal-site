import { LitElement, unsafeCSS } from 'lit-element';

// stylesheet
import { styles } from './css/base-page.css.js';

export class BasePage extends LitElement {

  static get properties() {
    return {
      darkMode: { 
        type: Boolean, 
        reflect: true
      },
    };
  }

  constructor() {
    super();

    this.darkMode = false;
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }
}

// define element for testing
customElements.define('base-page', BasePage);