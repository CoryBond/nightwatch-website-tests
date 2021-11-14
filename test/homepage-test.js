const {getQueriesFrom} = require('@testing-library/nightwatch')

module.exports = {
  before(client) {
    this.homepage = client.page.home();
  },

  async "Fails In Firefox!"(browser) {
    browser.init();
    browser.waitForElementVisible("body", 1000);

    const {getAllByText} = getQueriesFrom(browser)

    console.log("getByText?", getAllByText);

    const input = await getAllByText('Nightwatch v2.0-beta');

        console.log("input", input);

  },


  after(client) {
    client.end();
  }
};
