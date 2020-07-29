/* eslint-disable no-unused-expressions */
import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon';

import '../../../src/components/main/base-page.js';

/**
 * @typedef {import('../../../src/components/main/base-page.js').BasePage} BasePage
 */

const _template = html`<base-page></base-page>`

/**
 * Helper Methods
 */

describe('base page tests', () => {
  /**
   * Functionality unit tests
   */

  it('Verify base page default property values', async () => {
    const el = /** @type {BasePage} */ (await fixture(_template));

    // assert toggled is false
    expect(el.darkMode).to.be.false;
  });
});
