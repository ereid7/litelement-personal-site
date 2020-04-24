import { LitElement, html, css } from 'lit-element';

export class Experience extends LitElement {

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

  render() {
    return html`
    <div class="experience">
      <div class="body">
        <h1 class="header">Experience</h1>
        <h4 class="subHeader">human</h4>
            <p>Recent graduate from University of Wisconsin Stout 
              with a B.S in Applied Math and Computer Science.
              Currently starting my career as an Associate Software Engineer at Nuvasive, San Diego CA.</p>
            <p>I consider myself to be a critical thinker with a big heart.</p>
            <p>My interests include reading, software, and chihuahua meetups.</p>
      </div>
    </div>
    `
  }
}

customElements.define('experience-page', Experience);
