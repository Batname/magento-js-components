
const Browser = require('zombie');
const should = require('should');

describe('User visits home page', () => {

    let browser = new Browser();

    it('should be successful', done => {
        browser.visit('http://magento-js-components.dev/', err => {
            should.equal(err, null, 'Error is null');
            browser.assert.success();

            browser.assert.text('title', 'Home page');

            done();
        });
    });

});
