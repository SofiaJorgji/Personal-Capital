'use strict';

const expect = require('chai').expect;

const data = require('../data/data');
const utils = require('../utils/utils');

const PersonalCapitalPage = require('../pageobjects/personalCapitalPage');

describe('Personal Capital Financial tools', function() {

	it('should navigate to financial tools', function() {
		browser.url(data.baseUrl);
		PersonalCapitalPage.financialTools.click();
		expect(PersonalCapitalPage.signUpButton).to.exist;
	});

	it('should fill the form', function() {
		PersonalCapitalPage.signUpButton.click();
		expect(PersonalCapitalPage.email).to.exist;

		PersonalCapitalPage.email.setValue(data.user.email);
		PersonalCapitalPage.password.setValue(data.user.password);
		PersonalCapitalPage.phoneNumber.setValue(data.user.phoneNumber);

		expect(PersonalCapitalPage.password.getValue()).to.equal(data.user.password);
		expect(PersonalCapitalPage.email.getValue()).to.equal(data.user.email);
		expect(PersonalCapitalPage.phoneNumber.getValue()).to.equal(data.user.phoneNumber);
	});
});
