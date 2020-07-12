import { LitElement, html, css } from 'lit-element';

export class Application extends LitElement {

  createRenderRoot() {
    return this;
  }

  // static get styles() {
  //   return css`

  //   .outlet {
  //     margin: 0;
  //     position: absolute;
  //     left: 240px;
  //     margin-left: 5vw;
  //   }
    
  //   @media screen and (max-width: 700px) {
  //     .outlet {
  //       margin: 0;
  //       position: absolute;
  //       left: 0px;
  //       margin-left: 5vw;
  //     }
  //   }
  //   `;
  // }

  constructor() {
    super()
  }

  render() {
    return html`
    <side-bar></side-bar>
    <div id="applications">
      <about-me></about-me>
    </div>
      <!-- <output class="outlet"></output> -->
    `
  }

  connectedCallback() {
    super.connectedCallback();
   
    this.attachListeners();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties)

    console.log(document.location)
  }

  attachListeners() {
    window.addEventListener('popstate', (event) => {
      this.onLocationChanged();
    })
  }

  onLocationChanged() {
    console.log(document.location);
  }
}

customElements.define('application-page', Application);
