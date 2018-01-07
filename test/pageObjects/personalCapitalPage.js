'use strict';

const waitForAndReturn = require('../utils/utils').waitForAndReturn;

const PersonalCapitalPage = {

	// elements
	get financialTools() {
		return waitForAndReturn(browser, "a[data-automation-id='header.financial-software']");
	},

	get signUpButton() {
		return waitForAndReturn(browser, "a[data-automation-id='header.getStarted']");
	},

	get email() {
		return waitForAndReturn(browser, '#username');
	},

	get password() {
		return waitForAndReturn(browser, '#passwd');
	},

	get phoneNumber() {
		return waitForAndReturn(browser, '#phoneNumber');
	},

	get captchaFrame() {
		return waitForAndReturn(browser, "iframe[role='presentation']");
	},

	get captcha() {
		return waitForAndReturn(browser, '.recaptcha-checkbox-checkmark');
	},

	get captchaUnchecked() {
		return waitForAndReturn(browser, '.recaptcha-checkbox-unchecked');
	},

	get captchaChecked() {
		return waitForAndReturn(browser, '.recaptcha-checkbox-checked');
	},
};

module.exports = PersonalCapitalPage;
