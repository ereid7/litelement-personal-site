import { LitElement, html, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import githubSvg from '../../../resources/icons/github.svg';
import linkedinSvg from '../../../resources/icons/linkedin.svg';

// stylesheet
import sidebarStyles from '!!raw-loader!./css/sidebar.css';

export class Sidebar extends LitElement {

  static get properties() {
    return {
      darkMode: { type: Boolean },
      aboutMe: { type: Object },
      experience: { type: Object },
      projects: { type: Object },
      sideBarMap: { type: Object }
    };
  }

  // TODO capture diagnostics
  // TODO set cookie with style setting
  static get styles() {
    return [unsafeCSS(sidebarStyles)]
  }

  constructor() {
    super()
    this.darkMode = false;
  }

  render() {
    return html`
      <div class=${classMap(this.sideBarMap)}>
        <p class="sidebarheader">Evan Reid</p>
        <hr />
        <a id="aboutme" @click=${this.onClick} class=${this.isPageActive("aboutme", "")}>About Me</a>
        <a id="experience" @click=${this.onClick} class=${this.isPageActive("experience")}>Experience</a>
        <a id="projects" @click=${this.onClick} class=${this.isPageActive("projects")}>Projects</a>
        <hr />
        <div class="iconBar">
          <div class="siteIcons">${githubSvg}</div>
          <div class="siteIcons">${linkedinSvg}</div>
        </div>
        <toggle-button 
          class="toggleButton" 
          @toggle-changed="${this.themeChanged}"> 
        </toggle-button>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback();
    this.sideBarMap = { sidebar: true, sidebarDark: false }
  }

  onClick(event) {
    this.updatePage(event.target.id)
  }

  isPageActive(...itemNames) {
    const path = window.location.pathname.substr(1);
    let pageActive = false;
    itemNames.forEach((item) => {
      if (path === item) {
        pageActive = true;
      }
    })

    return classMap({ active: pageActive })
  }

  updatePage(activePage) {
     // update document path TODO correct defn - get name from const
     window.history.pushState({}, "test", `/${activePage}`)
     this.dispatchEvent(new CustomEvent("popstate", { composed: true, bubbles: true }))

     this.performUpdate();
  }

  themeChanged(e) {
    this.darkMode = e.detail.darkMode;
    this.sideBarMap = { sidebar: true, sidebarDark: this.darkMode }
  }
}

customElements.define('side-bar', Sidebar);
