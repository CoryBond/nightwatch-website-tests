const {getQueriesFrom} = require('@testing-library/nightwatch')

module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  async "Fails In Firefox!"(browser) {
    browser.init();
    browser.waitForElementVisible("body", 1000);

    const {getByText} = getQueriesFrom(browser)

    const input = await getByText('e');

    browser.expect.element(input).to.be.visible;
  },


  after(client) {
    client.end();
  }
};
