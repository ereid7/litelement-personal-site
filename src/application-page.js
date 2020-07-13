import { LitElement, html, css } from 'lit-element';

export class Application extends LitElement {

  static get properties() {
    return {
      darkMode: { 
        type: Boolean
      },
    };
  }

  static get styles() {
    return css`     
    .applications {
      text-align: center;
    }
    
    @media screen and (max-width: 1100px) {
      .applications {
        left: 0px;
      }
    }
    `;
  }

  constructor() {
    super();
    this.darkMode = false;
  }

  render() {
    return html`
    <side-bar></side-bar>
    <!-- TODO use slot here - extend common styles for about-me pages -->
    <div class="applications">
      ${this.renderPage()}
    </div>
    `
  }


  renderPage() {
    const path = document.location.pathname.substr(1);
    switch (path) {
      case "":
      case "aboutme":
        return html`<about-me .darkMode="${this.darkMode}"></about-me>`;
      case "experience":
        return html`<experience-page .darkMode="${this.darkMode}"></experience-page>`;
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    this.attachListeners();
    console.log(document.location);
  }

  attachListeners() {
    window.addEventListener('popstate', (event) => {
      this.performUpdate();
    })

    this.addEventListener("darkMode", this.onThemeChanged);
    this.addEventListener("lightMode", this.onThemeChanged)
  }

  // TODO refactor
  onThemeChanged(e) {
    const body = document.body;
    this.darkMode = e.type === "darkMode";
    if (this.darkMode) {
      body.style.background = "#1E1E1E"
    } else {
      body.style.background = "white"
    }
  }
}

customElements.define('application-page', Application);
