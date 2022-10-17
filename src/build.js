import puppeteer from 'puppeteer';
import login from './login.js'
import openMenu from './menu.js'
import select from './select.js';
import addVersion from './addVersion.js';
import sleep from './utils/sleep.js';

/**
 * @param {'frontend' | 'backend'} group 
 * @param {'CJ' | 'HZ' | 'YY' | 'ZC'} project 
 * @param {'JT' | 'QK'} platform 
 * @param {string} targetGitBranch 
 */
export default async function runBuild () {
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

    page.on('response', async (response) => {
        const url = response.url();
        if (url === process.env.ADD_VERSION_API) {
            const result = await response.json();
            if (result.status === 'S') {
                console.log('发布成功');
            } else {
                console.log('发布失败: ', result);
            }
        }
    })

    console.log('发布成功, 即将终止程序');
    await sleep(1000);

    await page.close();
    process.exit(0);
}