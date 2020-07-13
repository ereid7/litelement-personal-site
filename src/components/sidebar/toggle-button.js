import { LitElement, html, css } from 'lit-element';

export class ToggleButton extends LitElement {

  static get properties() {
    return {
      isDark: false
    };
  }

  static get styles() {
    // toggle button styles from:
    // https://www.cssscript.com/realistic-ios-switch-pure-css/
    return css`
      .form-switch {
        cursor: pointer;
        opacity: 0.8;
        position: absolute;
        bottom: 10px;
        left: 10px;
        display: inline-block
        text-align: center
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }
      .form-switch i {
        position: relative;
        display: inline-block;
        margin-right: .5rem;
        width: 46px;
        height: 26px;
        background-color: #e6e6e6;
        border-radius: 23px;
        vertical-align: text-bottom;
        transition: all 0.3s linear;
      }
      .form-switch i::before {
        content: "";
        position: absolute;
        left: 0;
        width: 42px;
        height: 22px;
        background-color: #9AC0CD;
        border-radius: 11px;
        transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
        transition: all 0.25s linear;
      }
      .form-switch i::after {
        content: "";
        position: absolute;
        left: 0;
        width: 22px;
        height: 22px;
        background-color: #fff;
        border-radius: 11px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
        transform: translate3d(2px, 2px, 0);
        transition: all 0.2s ease-in-out;
      }
      .form-switch:active i::after {
        width: 28px;
        transform: translate3d(2px, 2px, 0);
      }
      @media screen and (max-width: 1100px) {
        .form-switch {
          position: static;
          margin-left: 2px;
        }
      }
      .form-switch:active input:checked + i::after { transform: translate3d(16px, 2px, 0); }
      .form-switch input { display: none; }
      .form-switch input:checked + i { background-color: #42526C; }
      .form-switch input:checked + i::before { transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0); }
      .form-switch input:checked + i::after { transform: translate3d(22px, 2px, 0); }
    `;
  }

  constructor() {
    super();
  }

  onChange(e) {
    this.isDark = e.target.checked;
    this.performUpdate();
    
    let event = this.isDark 
      ? new CustomEvent('darkMode', { bubbles: true, composed: true }) 
      : new CustomEvent('lightMode', { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div className="toggleButton"> 
        <label class="form-switch">
          <input id="darkMode" @change="${ this.onChange }" type="checkbox">
          <i></i></label>
        </body>
      </div> 
    `
  }
}

customElements.define('toggle-button', ToggleButton);