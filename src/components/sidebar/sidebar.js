import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export class Sidebar extends LitElement {

  static get properties() {
     return {
       aboutMe: { type: Object },
       resume: { type: Object },
       projects: { type: Object }
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

      .sidebarheader {
        display: block;
        color: #3C4146;
        padding: 5px;
        margin: 10px;
        margin-top: 30px;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
      }

      hr {
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #D6D9DC;
        backgorund-color: #D6D9DC;
      }

      .sidebar a.active {
        background-color: #555;
        color: white;
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
          height: 135px;
          position: relative;
        }
        .sidebar a {
          float: none;
          text-align: center;
          margin-top: 4px;
          margin-bottom: 4px;
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

      .siteIcons {
        width: 25px;
        margin-left: 10px;
        margin-right: 10px;
      }

      .siteIcons {
        filter: invert(24%) sepia(19%) saturate(245%) hue-rotate(169deg) brightness(92%) contrast(90%);
      }
    `;
  }

  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback();
    let url = window.location.href;
    this.aboutMe = { active: url.endsWith("aboutme") },
    this.resume = { active: url.endsWith("resume") },
    this.projects = { active: url.endsWith("projects") }
  }

  onClick(event) {
    let activePage = event.explicitOriginalTarget.id;
    this.aboutMe = { active: activePage === "aboutme" };
    this.resume = { active: activePage === "resume" };
    this.projects = { active: activePage === "projects" };
  }

  themeChanged(e) {
    let event = new Event(e.type);
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="sidebar">
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
