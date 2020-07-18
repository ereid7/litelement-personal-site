/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../src/application-page.js';

/**
 * @typedef {import('../src/application-page.js').ApplicationPage} ApplicationPage
 */

const _template = html`<application-page></application-page>`

/**
  * Helper Methods
  */
const navigateToPath = (path) => {
  // simulate navigating to experience page
  window.history.pushState({}, "test", `/${path}`);
  window.dispatchEvent(new CustomEvent("popstate", { composed: true, bubbles: true }));
}

const fireToggleChanged = (element, toggled) => {
  // simulate button toggle-changed event
  const sideBar = element.shadowRoot.querySelector('side-bar');
  sideBar.dispatchEvent(new CustomEvent('toggle-changed', { 
    bubbles: true,
    composed: true,
    detail: {
      darkMode: toggled
    }
  }))
}

describe('application page', () => {

  /**
   * Functionality unit tests
   */
  
  it('Verify attachListeners called on firstUpdated', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(_template));
    const attachListeners = stub(el, 'attachListeners');
    el.firstUpdated(null);

    // assert that listeners are attached
    expect(attachListeners).to.have.callCount(1);
  });

  it('Verify darkMode set to false by default', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(_template));
    expect(el.darkMode).to.equal(false);
  });

  it('Verify update darkMode=true when toggle-changed event detail true', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(_template));

    fireToggleChanged(el, true);

    // assert dark mode is true
    expect(el.darkMode).to.equal(true);
  });

  it('Verify update darkMode=false when toggle-changed event detail false', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(_template));
    el.darkMode = true;
    fireToggleChanged(el, false);

    // assert dark mode is true
    expect(el.darkMode).to.equal(false);
  });

  it('Verify performUpdate called on popstate event', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(_template));
    const performUpdate = stub(el, 'performUpdate');

    // dispatch popstate event
    window.dispatchEvent(new CustomEvent('popstate', { composed: true, bubbles: true }));

    // assert performUpdate() has been called once
    expect(performUpdate).to.have.callCount(1);
  });

  /**
   * DOM unit tests
   */

  it('Display about-me page by default', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(_template));
    
    expect(el).shadowDom.to.equal(`
    <side-bar></side-bar>
    <div class="applications">
      <about-me></about-me>
    </div>
    `);
  });

  it('Display experience page for experience path', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(_template));

    navigateToPath('experience');

    expect(el).shadowDom.to.equal(`
    <side-bar></side-bar>
    <div class="applications">
      <experience-page></experience-page>
    </div>
    `);
  });

  it('Display projects page for projects path', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(html`
      <application-page></application-page>
    `));

    navigateToPath('projects');

    expect(el).shadowDom.to.equal(`
    <side-bar></side-bar>
    <div class="applications">
      <projects-page></projects-page>
    </div>
    `);
  });
});
