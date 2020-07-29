import { html } from 'lit-element';
import { BasePage } from './base-page';
import { classMap } from 'lit-html/directives/class-map';

// TODO create list of projects to add to this page

export class ProjectsPage extends BasePage {

  constructor() {
    super()
  }

  render() {
    return html`
    <div class=${classMap({
      dark: this.darkMode
    })}>
      <div class="page-body">
        <h1 class="header">Projects</h1>
        
      </div>
      <footer-page></footer-page>
    </div>
    `
  }
}

customElements.define('projects-page', ProjectsPage);
