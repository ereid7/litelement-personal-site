import { LitElement, html, css } from 'lit-element';

export class ToggleButton extends LitElement {

  static get styles() {
    return css`
      div {
        text-align: center;
        display: block;
        position: absolute;
        left: 40px;
        bottom: 20px;
      }

      @media screen and (max-width: 700px) {
        div {
          position: static;
        }
      }
    `;
  }

  constructor() {
    super()
  }

  render() {
    return html`
    <div className="toggleButton"> 
      light
      <input type="radio" checked="checked" name="radio">

      <input type="radio" name="radio">
      dark
    </div> 
    `
  }
}

customElements.define('toggle-button', ToggleButton);
