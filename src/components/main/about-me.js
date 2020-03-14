import { LitElement, html, css } from 'lit-element';

// TODO use typescript
// TODO custom scrollbar

export class AboutMe extends LitElement {

  static get styles() {
    return css`
      .body {
        font-family: Roboto Mono, monospace;
        color: #3C4146;
        display: inline-block;
        margin-top: 40px;
        width: 600px;
        text-align: left;
        overflow-wrap: normal;
      }

      @media screen and (max-width: 900px) {
        .body {
          width: auto;
          margin-top: 0px;
          margin-left: 20px;
          margin-right: 20px;
        }
      }

      .subHeader {
        color: #abd1de;
        margin-left: 2px;
      }
    `;
  }

  constructor() {
    super()
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="aboutMe">
          <div id="aboutMeBody" class="body">
            <h1 class="Header">Evan Reid</h1>
            <h3 class="subHeader">Human</h3>
            <p>At the time of this writing I’ve been working full time in the Square San Francisco office for about four years. The culture here relies on high-bandwidth interpersonal interactions and working in close physical collaboration. Some of my colleagues, when they work from home for a day or two, will return to the office and say they’re happy to be back because home “has too many distractions”. Others can’t wait to get home and away from the distractions of the office to focus.</p>
            <p>My career in professional software started when I was 21 and until I joined Square 8 years later I only ever worked remotely and with flexible hours. The first three or so years I struggled to keep a schedule and stay on task but I eventually found a system that works for me really well. So well, actually, that when I joined Square my productivity took a hit as I tried to adjust to the distractions of a communal working space. Here are the rules that I developed for myself over most of a decade to make remote, flexible work more productive than being physically close to my colleagues.</p>
            <p>At the time of this writing I’ve been working full time in the Square San Francisco office for about four years. The culture here relies on high-bandwidth interpersonal interactions and working in close physical collaboration. Some of my colleagues, when they work from home for a day or two, will return to the office and say they’re happy to be back because home “has too many distractions”. Others can’t wait to get home and away from the distractions of the office to focus.</p>
            <p>My career in professional software started when I was 21 and until I joined Square 8 years later I only ever worked remotely and with flexible hours. The first three or so years I struggled to keep a schedule and stay on task but I eventually found a system that works for me really well. So well, actually, that when I joined Square my productivity took a hit as I tried to adjust to the distractions of a communal working space. Here are the rules that I developed for myself over most of a decade to make remote, flexible work more productive than being physically close to my colleagues.</p>
            <p>At the time of this writing I’ve been working full time in the Square San Francisco office for about four years. The culture here relies on high-bandwidth interpersonal interactions and working in close physical collaboration. Some of my colleagues, when they work from home for a day or two, will return to the office and say they’re happy to be back because home “has too many distractions”. Others can’t wait to get home and away from the distractions of the office to focus.</p>
            <p>My career in professional software started when I was 21 and until I joined Square 8 years later I only ever worked remotely and with flexible hours. The first three or so years I struggled to keep a schedule and stay on task but I eventually found a system that works for me really well. So well, actually, that when I joined Square my productivity took a hit as I tried to adjust to the distractions of a communal working space. Here are the rules that I developed for myself over most of a decade to make remote, flexible work more productive than being physically close to my colleagues.</p>
            <p>At the time of this writing I’ve been working full time in the Square San Francisco office for about four years. The culture here relies on high-bandwidth interpersonal interactions and working in close physical collaboration. Some of my colleagues, when they work from home for a day or two, will return to the office and say they’re happy to be back because home “has too many distractions”. Others can’t wait to get home and away from the distractions of the office to focus.</p>
            <p>My career in professional software started when I was 21 and until I joined Square 8 years later I only ever worked remotely and with flexible hours. The first three or so years I struggled to keep a schedule and stay on task but I eventually found a system that works for me really well. So well, actually, that when I joined Square my productivity took a hit as I tried to adjust to the distractions of a communal working space. Here are the rules that I developed for myself over most of a decade to make remote, flexible work more productive than being physically close to my colleagues.</p>
        </div>
      </div>
    `
  }
}

customElements.define('about-me', AboutMe);
