import { html } from '../../../node_modules/lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { BasePage } from './base-page';

export class AboutMe extends BasePage {
  constructor() {
    super()
    this.linkedinUrl = "https://www.linkedin.com/in/evan-reid-51703a123/";
    this.githubUrl = "https://github.com/ereid7";
    this.email = "evan@reids.us";
  }

  render() {
    return html`
      <div class=${classMap(this.contentClassMap)}>
        <div id="aboutMeBody" class="page-body">
          <h1 class="header">Evan Reid</h1>
          <h4 class="subHeader">San Diego, CA</h4>
          <p>Recent graduate from University of Wisconsin Stout 
            with a B.S in Applied Math and Computer Science.
            Currently starting my career as an Associate Software Engineer at Nuvasive, San Diego CA.</p>
          <hr>
          <h3>Reaching Me</h3>
          <p>You can reach me by email at <a href="mailto:${this.email}">evan@reids.us</a></p>
          <p>You can also find me on <a href="${this.linkedinUrl}">Linkedin</a> or <a href="${this.githubUrl}">Github</a>.</p>
        </div>

        <footer-page></footer-page>
      </div>
    `
  }
}

customElements.define('about-me', AboutMe);
