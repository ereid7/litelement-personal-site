import { LitElement, html, css, unsafeCSS } from 'lit-element';

// stylesheet
import toggleButtonStyles from '!!raw-loader!./css/toggle-button.css';

export class ToggleButton extends LitElement {

  static get properties() {
    return {
      darkMode: false
    };
  }

  static get styles() {
    // toggle button styles from:
    // https://www.cssscript.com/realistic-ios-switch-pure-css/
    return [unsafeCSS(toggleButtonStyles)]
  }

  constructor() {
    super();
  }

  onChange(e) {
    this.darkMode = e.target.checked;
    this.performUpdate();
    
    let event = new CustomEvent('toggle-changed', { 
      bubbles: true, 
      composed: true, 
      detail: { darkMode: this.darkMode } 
    }) 
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div className="toggleButton"> 
        <label class="form-switch">
          <input id="darkMode" @change="${this.onChange}" type="checkbox">
          <i></i></label>
        </body>
      </div> 
    `
  }
}

customElements.define('toggle-button', ToggleButton);