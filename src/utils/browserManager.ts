import 'dotenv/config';

import {
    Browser,
    BrowserContext,
    Page,
    BrowserType,
    LaunchOptions,
    chromium,
    firefox,
    webkit
} from 'playwright';

export class BrowserManager {
    private static browser: Browser;
    private static context: BrowserContext;
    private static page: Page;
}