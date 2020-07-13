import { LitElement, html, css } from 'lit-element';
import { BasePage } from './base-page';
import { classMap } from 'lit-html/directives/class-map';

export class ExperiencePage extends BasePage {

  constructor() {
    super()
  }

  render() {
    return html`
    <div class=${classMap(this.contentClassMap)}>
      <div class="page-body">
        <h1 class="header">Experience</h1>
        <h4 class="subHeader">human</h4>
            <p>Recent graduate from University of Wisconsin Stout 
              with a B.S in Applied Math and Computer Science.
              Currently starting my career as an Associate Software Engineer at Nuvasive, San Diego CA.</p>
            <p>I consider myself to be a critical thinker with a big heart.</p>
            <p>My interests include reading, software, and chihuahua meetups. TEST</p>
      </div>
    </div>
    `
  }
}

customElements.define('experience-page', ExperiencePage);
