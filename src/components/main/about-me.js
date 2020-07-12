import { LitElement, html, css } from '../../../node_modules/lit-element';

// TODO use typescript
// TODO custom scrollbar

export class AboutMe extends LitElement {

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super()
  }

  createRenderRoot() {
    return this;
  }

  // TODO navigate here on blank url
  render() {
    let linkedinUrl = "https://www.linkedin.com/in/evan-reid-51703a123/";
    let githubUrl = "https://github.com/ereid7"
    let email = "evan@reids.us";

    return html`
      <div class="aboutMe">
          <div id="aboutMeBody" class="body">
            <h1 class="header">Evan Reid</h1>
            <h4 class="subHeader">San Diego, CA</h4>
            <p>Recent graduate from University of Wisconsin Stout 
              with a B.S in Applied Math and Computer Science.
              Currently starting my career as an Associate Software Engineer at Nuvasive, San Diego CA.</p>
            <hr>
            <h3>Reaching Me</h3>
            <p>You can reach me by email at <a href="mailto:${email}">evan@reids.us</a></p>
            <p>You can also find me on <a href="${linkedinUrl}">Linkedin</a> or <a href="${githubUrl}">Github</a>.</p>
        </div>

        <footer-page></footer-page>
      </div>
    `
  }
}

customElements.define('about-me', AboutMe);
