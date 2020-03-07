import { LitElement, html, css } from 'lit-element';

export class Sidebar extends LitElement {

  static get styles() {
    return css`

      .sidebar {
        margin: 0;
        padding: 0;
        width: 200px;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
      }
      
      .sidebar a {
        display: block;
        color: black;
        padding: 5px;
        margin: 10px;
        text-align: center;
        text-decoration: none;
      }

      .sidebarheader {
        display: block;
        color: black;
        padding: 5px;
        margin: 10px;
        margin-top: 25%;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
      }
       
      .sidebar a.active {
        background-color: #4CAF50;
        color: white;
      }
      
      .sidebar a:hover:not(.active) {
        background-color: #555;
        color: white;
      }
      
      @media screen and (max-width: 700px) {
        .sidebar {
          width: 100%;
          height: auto;
          position: relative;
        }
        .sidebar a {float: none; text-align: center;}
        .sidebarheader {float: none; text-align: center;}
        div.content {margin-left: 0;}
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
        <a class="active" href="#home">About Me</a>
        <a class="active" href="#home">Resume</a>
        <a class="active" href="#home">Projects</a>
        <hr />
      </div>
    `
  }
}

customElements.define('side-bar', Sidebar);
