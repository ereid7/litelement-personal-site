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
      contentClassMap: { type: Object }
    };
  }

  static get styles() {
    return [unsafeCSS(styles)]
  }

  constructor() {
    super();
    this.contentClassMap = { dark: false };
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    changedProperties.forEach((_, propName) => {
      if (propName === "darkMode") {
        this.contentClassMap = { dark: this.darkMode }
      }
    })
  }
}
