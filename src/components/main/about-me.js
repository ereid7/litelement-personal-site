import { LitElement, html, css } from 'lit-element';

// TODO use typescript
// TODO custom scrollbar

export class AboutMe extends LitElement {

  static get styles() {
    return css`
      div {
        margin: 0;
        position: relative;
      }
    `;
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="aboutMe"> 
         <h2>About Me</h2>
      </div>
    `
  }
}

customElements.define('about-me', AboutMe);
