import { LitElement, html, css } from 'lit-element';
import { router } from "lit-element-router";

// TODO use typescript
// TODO custom scrollbar
export class MainPage extends router(LitElement) {

  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object }
    };
  }

  static get routes() {
    return [
      {
        name: "aboutme",
        pattern: "/aboutme",
      },
      {
        name: "resume",
        pattern: "/resume"
      },
      {
        name: "aboutme",
        pattern: "*"
      }
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  static get styles() {
    return css`
      router-outlet {
        margin: 0;
        position: absolute;
        left: 240px;
        margin-left: 5vw;
      }

      @media screen and (max-width: 700px) {
        router-outlet {
          margin: 0;
          position: absolute;
          left: 0px;
          margin-left: 5vw;
        }
      }
    `;
  }

  render() {
    return html`
      <router-outlet active-route=${this.route}>
        <about-me route="aboutme"></about-me>
        <resume-page route="resume"></resume-page>
      </router-outlet>
    `
  }
}

customElements.define('main-page', MainPage);
