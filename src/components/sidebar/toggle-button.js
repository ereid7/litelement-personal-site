import { LitElement, html, css } from 'lit-element';

export class ToggleButton extends LitElement {

  static get properties() {
    return {
      isDark: false
    };
  }

  static get styles() {
    return css`
      div {
        text-align: center;
        display: block;
        color: #3C4146;
        position: absolute;
        left: 42px;
        bottom: 20px;
      }

      input {
        color: #3C4146;
      }

      @media screen and (max-width: 700px) {
        div {
          position: static;
          margin: 10px;
          margin-top: 25px;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  onChange(e) {
    let toggleDark = new Event ('dark');
    this.dispatchEvent(toggleDark);
  }


  render() {
    return html`
    <div className="toggleButton"> 
      light
      <input @change="${this.onChange}" type="radio" checked="checked" name="radio" value="light">
      <input type="radio" name="radio" value="dark">
      dark
    </div> 
    `
  }
}

customElements.define('toggle-button', ToggleButton);
