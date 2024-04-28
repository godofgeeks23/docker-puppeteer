import puppeteer from 'puppeteer';

(async () => {
    // create a new browser instance
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        args: [
            '--disable-setuid-sandbox',
            '--no-sandbox'
        ]
    });

    // create a new page instance
    const page = await browser.newPage();
    await page.goto('https://developer.chrome.com/');
    await page.setViewport({ width: 1080, height: 1024 });
    await page.type('.devsite-search-field', 'automate beyond recorder');

    // click on the search button
    const searchResultSelector = '.devsite-result-item-link';

    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    const textSelector = await page.waitForSelector(
        'text/Customize and automate'
    );

    const fullTitle = await textSelector?.evaluate(el => el.textContent);

    console.log('Blog post title - "%s".', fullTitle);

    await browser.close();

})();
