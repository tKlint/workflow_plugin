import puppeteer from 'puppeteer';
import sleep from './utils/sleep.js'
/**
 * 登录
 * @param {puppeteer.Page} page 
 * @param {*} userName 
 * @param {*} password 
 */
export default async function openMenu(page) {
    const versionReleaseSelector = '#rel > a';
    const releaseMenuItemSelector = '#version_release > a';
    const releaseTableSelector = '#tp';
    await page.waitForSelector(versionReleaseSelector);
    await page.click(versionReleaseSelector);
    await sleep(500);
    await page.waitForSelector(releaseMenuItemSelector);
    await page.click(releaseMenuItemSelector);

    await page.waitForSelector(releaseTableSelector);

}