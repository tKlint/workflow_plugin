import puppeteer from 'puppeteer';
import login from './login.js'
import openMenu from './menu.js'
import select from './select.js';
import addVersion from './addVersion.js';

/**
 * 
 * @param {'frontend' | 'backend'} group 
 * @param {'CJ' | 'HZ' | 'YY' | 'ZC'} project 
 * @param {'JT' | 'QK'} platform 
 * @param {string} targetGitBranch 
 */
export default async function runBuild (group, project, platform, targetGitBranch) {
    console.log('building...');
    const { USER_NAME, USER_PASSWORD, ECP_URL} = process.env;
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1200,
        height: 480,
        deviceScaleFactor: 1,
    })
    await page.goto(ECP_URL);
    await login(page, USER_NAME, USER_PASSWORD);
    await openMenu(page);
    await select(page);
    await addVersion(page);
}