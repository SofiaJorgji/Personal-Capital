'use strict';

const utils = {

	waitForAndReturn(browser, selector) {
		browser.waitForEnabled(selector);
		return browser.element(selector);
	}
};

module.exports = utils;
