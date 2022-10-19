/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import child_process from 'child_process';
import login from './login.js';
import * as optionsValue from './utils/const.js';
import { getState, setState } from './utils/store.js';
import nextVersion from './utils/version.js';

const { projectJTOptionsValue, projectQKOptionsValue } = optionsValue.default;

function addVersionAction(cookie, platform, qkcp_fk, branch, version) {
  fetch('http://ecp.bravowhale-uat.com:8000/ecp/rel/addVersionAdmin', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryVDgDtOD7eB0Tybpv',
      'proxy-connection': 'keep-alive',
      'x-requested-with': 'XMLHttpRequest',
      cookie: `ace.settings=%7B%22sidebar-collapsed%22%3A-1%7D; menumin=0; activeId_1=rel; activeId_2=version_release; JSESSIONID=${cookie}; mp_7ccb86f5c2939026a4b5de83b5971ed9_mixpanel=%7B%22distinct_id%22%3A%20%22183ee4229b776a-08617ed02c6855-19525635-13c680-183ee4229b89ac%22%2C%22%24device_id%22%3A%20%22183ee4229b776a-08617ed02c6855-19525635-13c680-183ee4229b89ac%22%2C%22site_type%22%3A%20%22similarweb%20extension%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D`,
      Referer: 'http://ecp.bravowhale-uat.com:8000/ecp/rel/toAddAdminVer',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: `------WebKitFormBoundaryVDgDtOD7eB0Tybpv\r\nContent-Disposition: form-data; name=\"platform\"\r\n\r\n${platform}\r\n------WebKitFormBoundaryVDgDtOD7eB0Tybpv\r\nContent-Disposition: form-data; name=\"qkcp_fk\"\r\n\r\n${qkcp_fk}\r\n------WebKitFormBoundaryVDgDtOD7eB0Tybpv\r\nContent-Disposition: form-data; name=\"branch\"\r\n\r\n ${branch}\r\n------WebKitFormBoundaryVDgDtOD7eB0Tybpv\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\n${version}\r\n------WebKitFormBoundaryVDgDtOD7eB0Tybpv--\r\n`,
    method: 'POST',
  }).then(async (res) => {
    const data = await res.json();
    console.log(data, 'data');
  });
}

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
 * @param {*} userName
 * @param {*} password
 */
export default async function runTest() {
  const {
    USER_NAME, USER_PASSWORD, ECP_URL, V_LIST_API,
  } = process.env;
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 480,
    deviceScaleFactor: 1,
  });
  await page.goto(ECP_URL);
  await login(page, USER_NAME, USER_PASSWORD);
  const { group, platform, project, targetGitBranch } = getState();
  const platformOptionsValueMap = getOptionsValueWithPlatform(platform, group);
  const qkcpFk = platformOptionsValueMap[project];
  const cookies = await page.cookies();

  const platformMap = {
    JT: '河北平台',
    QK: '祺鲲平台',
  };
  const cookieValue = cookies[0].value;
  console.log(cookieValue, 'cookieValuecookieValue');
  fetch('http://ecp.bravowhale-uat.com:8000/ecp/rel/adminVersions', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/json;charset=UTF-8',
      'proxy-connection': 'keep-alive',
      'x-requested-with': 'XMLHttpRequest',
      cookie: `tenantList_name=; tenantList_domain=; tenantList_status=-1; tenantList_qkcp=; appList_name=; appList_domain=; appList_status=-1; appList_qkcp=; activeId_1=rel; activeId_2=version_release; JSESSIONID=${cookieValue}`,
      Referer: 'http://ecp.bravowhale-uat.com:8000/ecp/rel/versionRelease',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: JSON.stringify(
      {
        pageSize: 10,
        pageNow: 1,
        pageStart: 0,
        sorter: '',
        sortOrder: '',
        name: '',
        state: '-1',
        platform: platformMap[platform],
        qkcp_fk: qkcpFk.toString(),
      },
    ),
    method: 'POST',
  }).then(async (res) => {
    const { message, list } = await res.json();
    if (message !== 'search success') {
      console.warn('版本查詢失敗', message);
    }
    console.log(list);

    const lastVersion = list[0].name;

    const version = nextVersion(lastVersion);

    addVersionAction(cookieValue, platformMap[platform], qkcpFk, targetGitBranch, version);
  });
}