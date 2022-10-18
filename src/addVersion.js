// import puppeteer from 'puppeteer';
import { getState } from './utils/store.js';
import * as optionsValue from './utils/const.js';

const { projectJTOptionsValue, projectQKOptionsValue } = optionsValue.default;

function deifferentiationPlatform(group) {
  switch (group) {
    case 'frontend':
      return {
        ...projectQKOptionsValue[group],
        YY: 14080,
        ZC: 14075,
      };
    case 'backend':
      console.log('开发中...');
      process.exit(-3);
      break;
    default:
      process.exit(-3);
  }
  return '';
}

function getOptionsValueWithPlatform(platform, group) {
  switch (platform) {
    case 'JT':
      return projectJTOptionsValue[group];
    case 'QK':
      return deifferentiationPlatform(group);
    default:
      process.exit(-2);
  }
  return '';
}

/**
 * 登录
 * @param {puppeteer.Page} page
 */
export default async function addVersion(page) {
  const formSelector = '#add_admin_form';
  const platformSelectSelector = '#platform';
  const projectSelector = '#qkcp_fk';
  const submitSelector = '#add_admin_form > div:nth-child(2) > div > button';
  const branchSelector = '#branch';
  const versionInputSelector = '#name';
  const {
    targetGitBranch, nextVersion, platform, group, project,
  } = getState();
  await page.waitForSelector(formSelector);

  const platformValueMap = {
    QK: '祺鲲平台',
    JT: '河北平台',
  };
  await page.select(platformSelectSelector, platformValueMap[platform]);
  const platformOptionsValueMap = getOptionsValueWithPlatform(platform, group);
  await page.select(projectSelector, platformOptionsValueMap[project].toString());

  await page.select(branchSelector, ` ${targetGitBranch}`);

  await page.type(versionInputSelector, nextVersion, { delay: 100 });

  await page.click(submitSelector);
}
