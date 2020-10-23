import { html, css, svg } from 'lit-element';
import { BasePage } from './base-page';
import { classMap } from 'lit-html/directives/class-map';
import { nuvaLogoSvg } from '../../../resources/icons/nuvalogo.svg';
import { trLogoSvg } from '../../../resources/icons/trlogo.svg';

export class ExperiencePage extends BasePage {

  constructor() {
    super()
  }

  // TODO add logos
  render() {
    return html`
    <div class=${classMap({
      dark: this.darkMode
    })}>
      <div class="page-body">
        <h1 style="margin-bottom: 10px">Experience</h1>

        <div class="section-header">
          <div class="header-icon">
            ${nuvaLogoSvg}
          </div>
          <h3 class="header-title">Nuvasive</h3>
        </div>

        <h4 class="header">Associate Software Engineer</h4>
        <h5 class="subHeader short">Jan 2020 - Present</h4>
        <p>There are three reasons why Canada is one of the best countries in the world. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well-trained teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed. Canadian cities have many parks and lots of space for people to live. As a result, Canada is a desirable place to live.</p>

        <h4 class="header">Software Engineer Intern</h4>
        <h5 class="subHeader short">May 2019 - Aug 2019</h4>

        <hr>

        <div class="section-header">
          <div class="header-icon" style="opacity: 0.8">
            ${trLogoSvg}
          </div>
          <h3 class="header-title">Thomson Reuters</h3>
        </div>
        
        <h4 class="header">Software Engineer Intern</h4>
        <h5 class="subHeader short">Jan 2018 - Oct 2018</h4>
      </div>

      <footer-page></footer-page>
    </div>
    `
  }
}

customElements.define('experience-page', ExperiencePage);
