/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../../../src/components/sidebar/toggle-button.js';

/**
 * @typedef {import('../../../src/components/sidebar/toggle-button.js').ToggleButton} ToggleButton
 */

const sidebarTemplate = html`<toggle-button></toggle-button>`

describe('toggle button', () => {

  /**
   * Functionality unit tests
   */

  // it('Verify darkMode set to false by default', async () => {
  //   const el = /** @type {SideBar */ (await fixture(sidebarTemplate));
  //   expect(el.darkMode).to.equal(false);
  // });


  /**
   * DOM unit tests
   */

});
