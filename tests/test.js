data = require('../test-assets/data')
functionTemplate = require('../test-assets/functionTemplate')
var pageObject = {}

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },

    after: browser => {
        browser.end()
    },

    'Test Case': browsr => {
        functionTemplate(pageObject, data)

        browser.element('css selector', 'selectorHere', function (res) {
            if (res != null) {
                // do something
            }
        })
    },

}