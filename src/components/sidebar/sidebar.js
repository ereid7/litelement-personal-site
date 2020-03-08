import { LitElement, html, css } from 'lit-element';

export class Sidebar extends LitElement {

  static get styles() {
    return css`
      .sidebar {
        font-family: Helvetica;
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
        color: black;
        padding: 5px;
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        text-decoration: none;
      }

      .sidebarheader {
        display: block;
        color: #3C4146;
        padding: 5px;
        margin: 10px;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
      }

      hr {
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
       
      .sidebar a.active {
        background-color: #B6BFC9;
        color: #3C4146;
      }
      
      .sidebar a:hover:not(.active) {
        background-color: #555;
        color: white;
      }
      
      @media screen and (max-width: 700px) {
        .sidebar {
          border-right: 0px;
          border-bottom: 1px solid;
          width: 100%;
          height: auto;
          position: relative;
        }
        .sidebar a {float: none; text-align: center;}
        .sidebarheader {float: none; text-align: center;}
        div.content {margin-left: 0;}
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

  render() {
    return html`
      <div class="sidebar">
        <p class="sidebarheader">Evan Reid</p>
        <hr />
        <a class="active" href="#home">About Me</a>
        <a class="active" href="#home">Resume</a>
        <a class="active" href="#home">Projects</a>
        
        <hr />
        <div class="iconBar">
          <img class="siteIcons" src="../../resources/icons/github.svg" ></img>
          <img class="siteIcons" src="../../resources/icons/linkedin.svg" ></img>
        </div>
        <toggle-button />
      </div>
    `
  }
}

customElements.define('side-bar', Sidebar);
