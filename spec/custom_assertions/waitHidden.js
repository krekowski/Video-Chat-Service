/**
 * Checks if the given element is not visible on the page.
 *
 * ```
 *    this.demoTest = function (browser) {
 *      browser.assert.waitHidden(".should_not_be_visible");
 *    };
 * ```
 *
 * @method waitHidden
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(selector, msg) {

  var MSG_ELEMENT_NOT_FOUND = 'Testing if element <%s> is waitHidden. ' +
    'Element could not be located.';

  this.message = msg || util.format('Testing if element <%s> is waitHidden.', selector);
  this.expected = true;

  this.pass = function(value) {
    return value === this.expected;
  };

  this.failure = function(result) {
    var failed = result === false || result && result.status === -1;
    if (failed) {
      this.message = msg || util.format(MSG_ELEMENT_NOT_FOUND, selector);
    }
    return failed;
  };

  this.value = function(result) {
    return !result.value;
  };

  this.command = function(callback) {
    this.api.waitForElementNotVisible(selector, 1000, () => {
      this.api.isVisible(selector, callback);
    })
    return this
  };

};