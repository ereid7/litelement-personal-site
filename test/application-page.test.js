/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../src/application-page.js';

/**
 * @typedef {import('../src/application-page.js').ApplicationPage} ApplicationPage
 */

const appTemplate = html`<application-page></application-page>`

/**
  * Helper Methods
  */
const navigateToPath = (path) => {
  // simulate navigating to experience page
  window.history.pushState({}, "test", `/${path}`);
  window.dispatchEvent(new CustomEvent("popstate", { composed: true, bubbles: true }));
}

describe('application page', () => {

  /**
   * Functionality unit tests
   */
  it('Verify listeners attached on firstUpdated', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));
    const attachListeners = stub(el, 'attachListeners');
    el.firstUpdated(null);

    // assert that listeners are attached
    expect(attachListeners).to.have.callCount(1);
  });

  it('Verify darkMode set to false by default', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));
    expect(el.darkMode).to.equal(false);
  });

  it('Verify update darkMode when toggle-changed event recieved', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));
    const sideBar = el.shadowRoot.querySelector('side-bar');

    // simulate button toggle-changed event
    sideBar.dispatchEvent(new CustomEvent('toggle-changed', { 
      bubbles: true,
      composed: true,
      detail: {
        darkMode: true
      }
    }))

    // assert dark mode is true
    expect(el.darkMode).to.equal(true);
  });

  it('Verify performUpdate called on popstate event', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));
    const performUpdate = stub(el, 'performUpdate');

    // dispatch popstate event
    window.dispatchEvent(new CustomEvent('popstate', { composed: true, bubbles: true }));

    // assert performUpdate() has been called once
    expect(performUpdate).to.have.callCount(1);
  });

  /**
   * DOM unit tests
   */

  it('display about-me page by default', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));
    
    expect(el).shadowDom.to.equal(`
    <side-bar></side-bar>
    <div class="applications">
      <about-me></about-me>
    </div>
    `);
  });

  it('display experience page for experience path', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));

    // simulate navigating to experience page
    navigateToPath('experience');

    expect(el).shadowDom.to.equal(`
    <side-bar></side-bar>
    <div class="applications">
      <experience-page></experience-page>
    </div>
    `);
  });

  it('display projects page for projects path', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(html`
      <application-page></application-page>
    `));

    // simulate navigating to experience page
    navigateToPath('projects');

    expect(el).shadowDom.to.equal(`
    <side-bar></side-bar>
    <div class="applications">
      <projects-page></projects-page>
    </div>
    `);
  });
});
