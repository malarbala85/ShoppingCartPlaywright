import { chromium, Browser } from 'playwright';

let browser: Browser;

async function globalSetup() {
    browser = await chromium.launch();
    globalThis.__BROWSER__ = browser;
}

export default globalSetup;
