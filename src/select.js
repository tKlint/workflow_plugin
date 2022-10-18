// import puppeteer from 'puppeteer';
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
      const responseData = await response.json();
      console.log(responseData.list, 'responseData.list');
      lastVersion = responseData.list[0].name;
    }
  });

  while (!lastVersion) {
    console.log('wait response');
    // eslint-disable-next-line no-await-in-loop
    await sleep(500);
  }
  setState({
    nextVersion: nextVersion(lastVersion),
  });
  console.log(nextVersion(lastVersion), 'next');
  await page.click(releaseBtnSelector);
}
