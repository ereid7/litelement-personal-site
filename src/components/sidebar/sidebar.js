import { LitElement, html, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { gitHubSvg } from '../../../resources/icons/github.svg.js';
import { linkedInSvg } from '../../../resources/icons/linkedin.svg.js';

// stylesheet
import { styles } from './css/sidebar.css.js';

export class Sidebar extends LitElement {

  static get properties() {
    return {
      darkMode: { type: Boolean },
      aboutMe: { type: Object },
      experience: { type: Object },
      projects: { type: Object }
    };
  }

  // TODO capture diagnostics
  // TODO set cookie with style setting
  static get styles() {
    return [unsafeCSS(styles)]
  }

  constructor() {
    super()
    this.darkMode = false;
  }

  render() {
    return html`
      <div class=${classMap({
        sidebar: true,
        sidebarDark: this.darkMode
      })}>
        <p class="sidebarheader">Evan Reid</p>
        <hr />
        <a id="aboutme" @click=${this.onClick} class=${classMap({ active: this.isPageActive("aboutme", "")})}>About Me</a>
        <a id="experience" @click=${this.onClick} class=${classMap({ active: this.isPageActive("experience")})}>Experience</a>
        <!-- <a id="projects" @click=${this.onClick} class=${classMap({ active: this.isPageActive("projects")})}>Projects</a> -->
        <hr />
        <div class="iconBar">
          <div class="siteIcons">${gitHubSvg}</div>
          <div class="siteIcons">${linkedInSvg}</div>
        </div>
        <toggle-button 
          class="toggleButton" 
          @toggle-changed="${this.onThemeChanged}"> 
        </toggle-button>
      </div>
    `
  }

  onClick(event) {
    this.updatePage(event.target.id)
  }

  updatePage(activePage) {
    window.history.pushState({}, `${activePage}`, `/${activePage}`)
    this.dispatchEvent(new CustomEvent("popstate", { composed: true, bubbles: true }))

    this.performUpdate();
 }

  isPageActive(...itemNames) {
    const path = window.location.pathname.substr(1);
    let pageActive = false;
    itemNames.forEach((item) => {
      if (path === item) {
        pageActive = true;
      }
    })

    return pageActive;
  }

  onThemeChanged(e) {
    this.darkMode = e.detail.darkMode;
    this.performUpdate();
  }
}

customElements.define('side-bar', Sidebar);
