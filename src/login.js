// import puppeteer from 'puppeteer';

/**
 * 登录
 * @param {puppeteer.Page} page
 * @param {*} userName
 * @param {*} password
 */
export default async function login(page, userName, password) {
  const userNameInputSelector = '#username';
  const userPasswordInputSelector = '#password';
  const submitSelector = '#loginForm > fieldset > div.clearfix > button';
  await page.waitForSelector(userNameInputSelector);
  await page.type(userNameInputSelector, userName, { delay: 100 });
  await page.waitForSelector(userPasswordInputSelector);
  await page.type(userPasswordInputSelector, password, { delay: 100 });
  await page.waitForSelector(submitSelector);
  await page.click(submitSelector);
}
