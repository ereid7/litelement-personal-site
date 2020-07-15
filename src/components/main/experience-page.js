import { LitElement, html, css } from 'lit-element';
import { BasePage } from './base-page';
import { classMap } from 'lit-html/directives/class-map';

export class ExperiencePage extends BasePage {

  constructor() {
    super()
  }

  // TODO add logos
  render() {
    return html`
    <div class=${classMap(this.contentClassMap)}>
      <div class="page-body">
        <h1 class="header">Experience</h1>
        <h4 class="header">Associate Software Engineer</h4>
        <h5 class="subHeader short">NuVasive</h4>
        <h5 class="subHeader short">Jan 2020 - Present</h4>
        <p>There are three reasons why Canada is one of the best countries in the world. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well-trained teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed. Canadian cities have many parks and lots of space for people to live. As a result, Canada is a desirable place to live.</p>
        <hr>
        <h4 class="header">Software Engineer Intern</h4>
        <h5 class="subHeader short">NuVasive</h4>
        <h5 class="subHeader short">May 2019 - Aug 2019</h4>
        <hr>
        <h4 class="header">Software Engineer Intern</h4>
        <h5 class="subHeader short">Thomson Reuters</h4>
        <h5 class="subHeader short">Jan 2018 - Oct 2018</h4>
      </div>

      <footer-page></footer-page>
    </div>
    `
  }
}

customElements.define('experience-page', ExperiencePage);
