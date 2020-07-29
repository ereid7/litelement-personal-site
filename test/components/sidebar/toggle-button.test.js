/* eslint-disable no-unused-expressions */
import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon';

import '../../../src/components/sidebar/toggle-button.js';

/**
 * @typedef {import('../../../src/components/sidebar/toggle-button.js').ToggleButton} ToggleButton
 */

const _template = html`<toggle-button></toggle-button>`

/**
 * Helper Methods
 */
const clickToggleButton = (element) => {
  element.shadowRoot.getElementById('toggle').click();
}

describe('toggle button', () => {

  /**
   * Functionality unit tests
   */

  it('Verify toggled set to false by default', async () => {
    const el = /** @type {ToggleButton} */ (await fixture(_template));

    // assert toggled is false
    expect(el.toggled).to.equal(false);
  });

  it('Verify toggled set to true when toggled', async () => {
    const el = /** @type {ToggleButton} */ (await fixture(_template));
    clickToggleButton(el);

    // assert toggled is true
    expect(el.toggled).to.equal(true);
  });

  it('Verify onChange and performUpdate called when toggled', async () => {
    const el = /** @type {ToggleButton} */ (await fixture(_template));
    const onChange = stub(el, 'dispatchEvent');
    const performUpdate = stub(el, 'performUpdate');
    clickToggleButton(el);

    // assert onChange was called once
    expect(onChange).to.have.callCount(1);
    expect(performUpdate).to.have.callCount(1);
  });

  it('Verify toggle-changed event is fired when toggled', async () => {
    const el = /** @type {ToggleButton} */ (await fixture(_template));

    // toggle
    setTimeout(() => clickToggleButton(el));
    const { detail } = await oneEvent(el, 'toggle-changed');

    // assert event toggled is true
    expect(detail.darkMode).to.be.true;
  });

  it('Verify toggle-changed event is fired with darkMode=false when toggled/untoggled', async () => {
    const el = /** @type {ToggleButton} */ (await fixture(_template));

    // toggle
    clickToggleButton(el);
    // untoggle
    setTimeout(() => clickToggleButton(el));
    const { detail } = await oneEvent(el, 'toggle-changed');

    // assert event darkMode is false
    expect(detail.darkMode).to.be.false;
  });

  /**
   * DOM unit tests
   */

  it('Display toggle button template', async () => {
    const el = /** @type {ToggleButton}} */ (await fixture(_template));
    
    // assert template is correct
    expect(el).shadowDom.to.equal(`
    <div className="toggleButton"> 
      <label class="form-switch">
        <input id="toggle" type="checkbox">
        <i></i></label>
      </body>
    </div> 
    `);
  });
});
