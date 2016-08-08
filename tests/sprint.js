module.exports = {
    'Sprint' : function (browser) {
        browser
            .url('http://sprint-vkirst.rhcloud.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('Sprint')
            .assert.containsText('a.navbar-brand', 'Sprint')
            .assert.containsText('a.btn.btn-default', 'New team')
            .end();
    }
};
