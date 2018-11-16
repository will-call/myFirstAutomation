module.exports = {
    url: 'https://www.google.com/',
    elements: {
        selector: '.example',
        xpathTemplate: {
            selector: '//*[@class="example"]',
            locateStrategy: 'xpath'
        }
    }
}