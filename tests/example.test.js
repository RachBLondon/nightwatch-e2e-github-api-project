module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=language]', 'ruby')
      .setValue('input[name=location]', 'london')
      .click('button')
      .pause(1000)
      .assert.visible('.pager')
      .assert.containsText('.col-xs-6:first-child h4',
      'Adam Morse')
      .end();
  }
};
