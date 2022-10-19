import puppeteer from 'puppeteer';
import { getState, setState } from './utils/store.js';
import * as optionsValue from './utils/const.js';
import sleep from './utils/sleep.js';
import nextVersion from './utils/version.js';

const { projectJTOptionsValue, projectQKOptionsValue } = optionsValue.default;

function getOptionsValueWithPlatform(platform, group) {
  switch (platform) {
    case 'JT':
      return projectJTOptionsValue[group];
    case 'QK':
      return projectQKOptionsValue[group];
    default:
      return '';
  }
}


// const projectEnmu = {
//   CJ: "采集",
//   HZ: ""
// }

/**
 * 登录
 * @param {puppeteer.Page} page
 */
export default async function select(page) {
  const { group, platform, project } = getState();
  const platformSelectSelector = '#platform';
  const projectSelector = '#qkcp_fk';
  const searchSelector = '#searchButton';
  const releaseBtnSelector = '#mainContent > div.page-content > div.panel.panel-default > div.panel-heading.panel-title > table > tbody > tr > td:nth-child(2) > a';
  const platformValueMap = {
    QK: '祺鲲平台',
    JT: '河北平台',
  };
  await page.select(platformSelectSelector, platformValueMap[platform]);
  await sleep(500);
  const platformOptionsValueMap = getOptionsValueWithPlatform(platform, group);
  if (!platformOptionsValueMap) {
    process.exit(-2);
  }
  await page.select(projectSelector, platformOptionsValueMap[project].toString());
  await page.click(searchSelector);

  let lastVersion;
  page.on('response', async (response) => {
    const url = response.url();

    if (url === process.env.V_LIST_API && !lastVersion) {
      const paramsStr = response.request().postData();
      const { platform: platformParams, qkcp_fk: qkcpFk } = JSON.parse(paramsStr);
      if (
        platformParams !== platformValueMap[platform]
        || qkcpFk !== platformOptionsValueMap[project].toString()
      ) {
        console.log('不对劲 查询参数不正确');
        await page.click(searchSelector);
      }
      const responseData = await response.json();
      const { list } = responseData;
      console.log(list, 'responseData.list');
      lastVersion = list[0].name || '-';
      // next(lastVersion);
    }
  });
  async function noop() {
    await sleep(2000);
    if (!lastVersion) {
      console.log('未响应, 2s后等待再次监听');
      await noop();
    }
  }
  await noop();
  setState({
    nextVersion: nextVersion(lastVersion),
  });
  console.log(nextVersion(lastVersion), 'next');
  await page.click(releaseBtnSelector);
}
