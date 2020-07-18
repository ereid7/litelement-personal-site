import { LitElement, html, css, unsafeCSS } from 'lit-element';

// stylesheet
import { styles } from './css/toggle-button.css.js';

export class ToggleButton extends LitElement {
  static get properties() {
    return {
      toggled: false
    };
  }

  static get styles() {
    // toggle button styles from:
    // https://www.cssscript.com/realistic-ios-switch-pure-css/
    return [unsafeCSS(styles)]
  }

  constructor() {
    super();
    this.toggled = false;
  }

  onChange(e) {
    this.toggled = e.target.checked;
    this.performUpdate();
    
    const event = new CustomEvent('toggle-changed', { 
      bubbles: true, 
      composed: true, 
      detail: { darkMode: this.toggled } 
    }) 
    this.dispatchEvent(event);
  }

  render() {
    return html`
    <div className="toggleButton"> 
      <label class="form-switch">
        <input id="toggle" @change="${this.onChange}" type="checkbox">
        <i></i></label>
      </body>
    </div> 
    `
  }
}

customElements.define('toggle-button', ToggleButton);