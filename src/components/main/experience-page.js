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
        <p>Work on full stack development of spinal surgery platform, <a href="https://www.nuvasive.com/surgical-solutions/pulse/">Pulse</a>.
        Create and maintain software tools used for simulation, testing, and globalization.
        Technology stack includes a C#/.NET backend and a web based (LitElement) front-end.</p>

        <h4 class="header">Software Engineer Intern</h4>
        <h5 class="subHeader short">May 2019 - Aug 2019</h4>
        <p>Worked on individual research project to determine the value of using machine learning models (PyTorch, SkLearn) to predict amplitude markers that are manually set by neurophysiologists.
        Developed an internal web application for collecting neuromonitoring data used for training the models.</p>
        <hr>

        <div class="section-header">
          <div class="header-icon" style="opacity: 0.8">
            ${trLogoSvg}
          </div>
          <h3 class="header-title">Thomson Reuters</h3>
        </div>
        
        <h4 class="header">Software Engineer Intern</h4>
        <h5 class="subHeader short">Jan 2018 - Oct 2018</h4>
        <p>
        Worked on full stack development of web application targeted towards legal professionals, <a href="https://legal.thomsonreuters.com/en/insights/articles/connect-the-business-and-practice-of-law-panoramic">Panoramic</a>. 
        Participated in six week agile development training program led by an agile coach.
        Technology stack includes Java backend and web based (Angular) front-end.
        </p>
      </div>

      <footer-page></footer-page>
    </div>
    `
  }
}

customElements.define('experience-page', ExperiencePage);
