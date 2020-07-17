/* eslint-disable no-unused-expressions */
import { html, fixture, expect, stub } from '@open-wc/testing';
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

const expectedTemplate = (elementName) => {
  return `
  <side-bar></side-bar>
  <div class="applications">
    <${elementName}></${elementName}>
  </div>
  `;
}

describe('application page', () => {

  it('listeners attached on firstUpdated', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));
    const attachListeners = stub(el, 'attachListeners');
    el.firstUpdated(null);

    // assert that listeners are attached
    expect(attachListeners).to.have.callCount(1);
  });

  it('darkMode set to false by default', async () => {
    const el = /** @type {ApplicationPage} */ (await fixture(appTemplate));
    expect(el.darkMode).to.equal(false);
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
