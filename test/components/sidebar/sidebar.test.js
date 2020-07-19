/* eslint-disable no-unused-expressions */
import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon';

import '../../../src/components/sidebar/sidebar.js';

/**
 * @typedef {import('../../../src/components/sidebar/sidebar.js').SideBar} SideBar
 */

const _template = html`<side-bar></side-bar>`

/**
 * Helper Methods
 */

describe('side bar', () => {

  /**
   * Functionality unit tests
   */

  it('Verify darkMode set to false by default', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));

    // assert dark mode is false
    expect(el.darkMode).to.equal(false);
  });

  it('Verify updatePage called with aboutme id when clicked', async () => {
    const el = /** @type {SideBar} */ (await fixture(_template));
    const updatePage = stub(el, 'updatePage')

    el.shadowRoot.getElementById('aboutme').click();

    // assert dark mode is false
    expect(updatePage).to.have.calledWith('aboutme');
  });

  /**
   * DOM unit tests
   */

});
