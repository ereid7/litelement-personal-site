/* eslint-disable no-unused-expressions */
import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { gitHubSvg } from '../../../resources/icons/github.svg.js';
import { linkedInSvg } from '../../../resources/icons/linkedin.svg.js';
import { spy, stub } from 'sinon';

import '../../../src/components/sidebar/sidebar.js';

// TODO cleanup all test comments

/**
 * @typedef {import('../../../src/components/sidebar/sidebar.js').SideBar} SideBar
 */

const _template = html`<side-bar></side-bar>`

/**
 * Helper Methods
 */

const clickSidebarItem = (element, itemName) => {
    element.shadowRoot.getElementById(itemName).click();
}

const simulateToggleEvent = (element, toggled) => {
    const toggleButton = element.shadowRoot.querySelector('toggle-button');
    const event = new CustomEvent('toggle-changed', { 
        bubbles: true, 
        composed: true, 
        detail: { darkMode: toggled } 
      }) 
    toggleButton.dispatchEvent(event)
}

describe('side bar', () => {

  /**
   * Functionality unit tests
   */

  it('Verify darkMode set to false by default', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));

    // assert dark mode is false
    expect(el.darkMode).to.equal(false);
  });

  /**
   * onClick tests
   */
  it('Verify updatePage called with aboutme id when About Me clicked', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    const updatePage = stub(el, 'updatePage')

    clickSidebarItem(el, 'aboutme')

    // assert dark mode is false
    expect(updatePage).to.have.calledWith('aboutme');
  });

  it('Verify updatePage called with experience id when Experience clicked', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    const updatePage = stub(el, 'updatePage')

    clickSidebarItem(el, 'experience')

    // assert dark mode is false
    expect(updatePage).to.have.calledWith('experience');
  });

  it('Verify updatePage called with projects id when Projects clicked', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    const updatePage = stub(el, 'updatePage')

    clickSidebarItem(el, 'projects')

    // assert dark mode is false
    expect(updatePage).to.have.calledWith('projects');
  });

  /**
   * updatePage tests
   */
  it('Verify path changed to activePage when updatePage is called', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    const expectedPage = 'experience';
    el.updatePage(expectedPage);
    
    const actualPage = window.location.pathname;

    // assert current page is 'experience'
    expect(actualPage).to.equal(`/${expectedPage}`);
  });

  it('Verify popstate event dispatched when updatePage called', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    
    setTimeout(() => el.updatePage('testpage'));
    const { composed, bubbles } = await oneEvent(el, 'popstate');

    console.log(composed);

    // assert popstate event was dispatcehd with composed, bubbles set to true
    expect(composed).to.equal(true);
    expect(bubbles).to.equal(true);
  });

  it('Verify performUpdate() is called when updatePage is called', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    const performUpdate = stub(el, 'performUpdate');

    el.updatePage('testPage');

    expect(performUpdate).to.have.callCount(1);
  });
  
  /**
   * isPageActive tests
   */

  it('Verify isPageActive returns true when path is contained in itemNames', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    clickSidebarItem(el, 'aboutme');

    const result = el.isPageActive('aboutme');

    // assert isPageActive returns true
    expect(result).to.equal(true);
  });

  it('Verify isPageActive returns false when path is not contained in itemNames', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    clickSidebarItem(el, 'projects');

    const result = el.isPageActive('aboutme');

    // assert isPageActive returns false
    expect(result).to.equal(false);
  });

  /**
   * onThemeChanged tests
   */

  it('Verify onThemeChanged sets darkMode=true when toggle-changed event detail darkMode=true', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));

    simulateToggleEvent(el, true);

    // assert darkMode is true
    expect(el.darkMode).to.equal(true);
  });

  it('Verify onThemeChanged sets darkMode=false when toggle-changed event detail darkMode=false', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));

    simulateToggleEvent(el, true);
    simulateToggleEvent(el, false);

    // assert darkMode is true
    expect(el.darkMode).to.equal(false);
  });

  it('Verify performUpdate is called when onThemeChanged is called', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    const performUpdate = stub(el, 'performUpdate');

    simulateToggleEvent(el, true);

    // assert darkMode is true
    expect(performUpdate).to.have.callCount(1);
  });

  /**
   * DOM unit tests
   */

  it('Display toggle button template', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    clickSidebarItem(el, 'aboutme');
    
    // assert template is correct
    expect(el).shadowDom.to.contain(`<a id="aboutme" class="active">About Me</a>`);
  });
});
