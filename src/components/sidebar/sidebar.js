import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export class Sidebar extends LitElement {

  static get properties() {
    return {
      isDark: { type: Boolean },
      aboutMe: { type: Object },
      resume: { type: Object },
      projects: { type: Object },
      sideBarMap: { type: Object }
    };
  }

  static get styles() {
    return css`
      .sidebar {
        font-family: Courier;
        border-right: 1px solid;
        border-color: #D6D9DC;
        margin: 0;
        padding: 0;
        width: 200px;
        text-align: center;
        background-color: #FAFAFB;
        position: fixed;
        height: 100%;
        overflow: auto;
      }

      .sidebarDark {
        border-color: #444444;
        background-color: #323234;
      }

      .sidebar a {
        display: block;
        color: #3C4146;
        padding: 5px;
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
      }

      .sidebarDark a {
        color: #B1B1B2;
      }

      .sidebar p {
        display: block;
        color: #3C4146;
        padding: 5px;
        margin: 10px;
        margin-top: 30px;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
      }

      .sidebarDark p {
        color: #B1B1B2;
      }

      .sidebar hr {
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid;
        border-color: #D6D9DC;
      }

      .sidebarDark hr {
        border-color: #444444;
      }

      .sidebarDark a:hover:not(.active) {
        background-color: #B9B9BB;
      }

      .sidebar a.active {
        background-color: #abd1de;
      }

      .sidebarDark a.active {
        background-color: #42526C;
      }


      .sidebar a:hover:not(.active) {
        background-color: #B9B9BB;
      }

      @media screen and (max-width: 700px) {
        .sidebar {
          border-right: 0px;
          border-bottom: 1px solid;
          border-color: #D6D9DC;
          width: 100%;
          height: 140px;
          position: relative;
        }
        .sidebarDark {
          border-color: #444444;
        }
        .sidebar a {
          float: none;
          text-align: center;
          margin-top: 6px;
          margin-bottom: 6px;
        }
        .sidebarheader {
          position:absolute;
          visibility: hidden;
        }
        div.content {margin-left: 0;}
        hr {
          position:absolute;
          visibility: hidden;
        }
        .iconBar {
          position:absolute;
          visibility: hidden;
        }
      }

      .iconBar {
        text-align: center;
      }

      .sidebar img {
        width: 25px;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
        filter: invert(79%) sepia(29%) saturate(261%) hue-rotate(149deg) brightness(92%) contrast(84%);    
      }

      .sidebarDark img {
        filter: invert(29%) sepia(22%) saturate(683%) hue-rotate(178deg) brightness(97%) contrast(92%);
      }
  `
  }

  constructor() {
    super()
    this.isDark = false;
  }

  connectedCallback() {
    super.connectedCallback();
    let url = window.location.href;
    this.aboutMe = { active: url.endsWith("aboutme") },
    this.resume = { active: url.endsWith("resume") },
    this.projects = { active: url.endsWith("projects") }
    this.sideBarMap = { sidebar: true, sidebarDark: false }
  }

  onClick(event) {
    // have to set whole object or use requestupdate
    let activePage = event.explicitOriginalTarget.id;
    this.aboutMe = { active: activePage === "aboutme" };
    this.resume = { active: activePage === "resume" };
    this.projects = { active: activePage === "projects" };
  }

  themeChanged(e) {
    this.isDark = e.type == "darkMode";
    this.sideBarMap = { sidebar: true, sidebarDark: this.isDark }
    this.dispatchEvent(new Event(e.type));
  }

  render() {
    return html`
      <div class=${classMap(this.sideBarMap)}>
        <p class="sidebarheader">Evan Reid</p>
        <hr />
        <a id="aboutme" @click=${this.onClick} class=${classMap(this.aboutMe)} href="/aboutme">About Me</a>
        <a id="resume" @click=${this.onClick} class=${classMap(this.resume)} href="/resume">Resume</a>
        <a id="projects" @click=${this.onClick} class=${classMap(this.projects)} href="/aboutme">Projects</a>
        <hr />
        <div class="iconBar">
          <img class="siteIcons" src="../../resources/icons/github.svg" ></img>
          <img class="siteIcons" src="../../resources/icons/linkedin.svg" ></img>
        </div>
        <toggle-button 
          class="toggleButton" 
          @darkMode="${(e) => { this.themeChanged(e) }}"
          @lightMode="${(e) => { this.themeChanged(e) }}"> 
        </toggle-button>
      </div>
    `
  }
}

customElements.define('side-bar', Sidebar);
