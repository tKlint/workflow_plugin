function getSQLOrderCode() {
  fetch('http://ecp.bravowhale-uat.com:8000/ecp/tms/getVersionsSqlSort', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest',
      cookie: 'menumin=0; activeId_1=rel; activeId_2=version_controller; JSESSIONID=0B8429C49A75745B5452274E7D379F41; mp_7ccb86f5c2939026a4b5de83b5971ed9_mixpanel=%7B%22distinct_id%22%3A%20%22183ef1267c06e6-092213765bb359-19525635-13c680-183ef1267c14b7%22%2C%22%24device_id%22%3A%20%22183ef1267c06e6-092213765bb359-19525635-13c680-183ef1267c14b7%22%2C%22site_type%22%3A%20%22similarweb%20extension%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D',
      Referer: 'http://ecp.bravowhale-uat.com:8000/ecp/tms/toAddVersion',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: 'qkcp_fk=14077',
    method: 'POST',
  });
  // {
  //   "msg": "S",
  //   "result": "97350"
  // }
}

function addBuild() {
  fetch('http://ecp.bravowhale-uat.com:8000/ecp/tms/addVersion', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryS84NHH578nNlusqw',
      'x-requested-with': 'XMLHttpRequest',
      cookie: 'menumin=0; activeId_1=rel; activeId_2=version_controller; JSESSIONID=0B8429C49A75745B5452274E7D379F41; mp_7ccb86f5c2939026a4b5de83b5971ed9_mixpanel=%7B%22distinct_id%22%3A%20%22183ef1267c06e6-092213765bb359-19525635-13c680-183ef1267c14b7%22%2C%22%24device_id%22%3A%20%22183ef1267c06e6-092213765bb359-19525635-13c680-183ef1267c14b7%22%2C%22site_type%22%3A%20%22similarweb%20extension%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D',
      Referer: 'http://ecp.bravowhale-uat.com:8000/ecp/tms/toAddVersion',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: '------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="platform"\r\n\r\n河北平台\r\n------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="qkcp_fk"\r\n\r\n14077\r\n------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="createFile"\r\n\r\n\r\n------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="updateFile"\r\n\r\n\r\n------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="version"\r\n\r\nv1.0.0.11.4\r\n------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="sqlSort"\r\n\r\n97350\r\n------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="memo"\r\n\r\nv1.0.0.11.4\r\n------WebKitFormBoundaryS84NHH578nNlusqw\r\nContent-Disposition: form-data; name="isFirstVersion"\r\n\r\n0\r\n------WebKitFormBoundaryS84NHH578nNlusqw--\r\n',
    method: 'POST',
  });

  const body = `
  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="platform"

  河北平台
  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="qkcp_fk"

  14077
  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="createFile"


  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="updateFile"


  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="version"

  v1.0.0.11.4
  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="sqlSort"

  97350
  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="memo"

  v1.0.0.11.4
  ------WebKitFormBoundaryS84NHH578nNlusqw
  Content-Disposition: form-data; name="isFirstVersion"

  0
  ------WebKitFormBoundaryS84NHH578nNlusqw--
`;
  console.log(body);
}

function addUserVersion() {
  fetch('http://ecp.bravowhale-uat.com:8000/ecp/tms/appUpdate', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest',
      cookie: 'menumin=0; activeId_1=tms; activeId_2=tms_version; appList_qkcp=14077; appList_name=; appList_domain=; appList_status=0; JSESSIONID=0B8429C49A75745B5452274E7D379F41; mp_7ccb86f5c2939026a4b5de83b5971ed9_mixpanel=%7B%22distinct_id%22%3A%20%22183ef1267c06e6-092213765bb359-19525635-13c680-183ef1267c14b7%22%2C%22%24device_id%22%3A%20%22183ef1267c06e6-092213765bb359-19525635-13c680-183ef1267c14b7%22%2C%22site_type%22%3A%20%22similarweb%20extension%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D',
      Referer: 'http://ecp.bravowhale-uat.com:8000/ecp/tms/PG15WOGBGHTDYZJDJYZ7I721150VDNRS/toAppUpdate',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: 'tenantName=%E6%B2%B3%E5%8C%97%E5%BB%BA%E6%8A%95%E8%BF%90%E8%90%A5%E7%AB%AFfronted&tenant_fk=PG15WOGBGHTDYZJDJYZ7I721150VDNRS&domain=hebeijtoperatefrontdev&tenant_domain=hebeijtoperatefrontdev&oldVersionName=v1.0.0.11.02&oldVersion=9734&dateOfUpdate=2022-10-17+18%3A19%3A22&qkcp=%E6%B2%B3%E5%8C%97%E5%BB%BA%E6%8A%95%E9%9B%86%E5%9B%A2-%E8%BF%90%E8%90%A5%E7%AB%AF-frontend&qkcp_fk=14077&newVersion=9786&updateVersion=9786',
    method: 'POST',
  });
  /**
 * tenantName=%E6%B2%B3%E5%8C%97%E5%BB%BA%E6%8A%95%E8%BF%90%E8%90%A5%E7%AB%AFfronted&tenant_fk=PG15WOGBGHTDYZJDJYZ7I721150VDNRS&domain=hebeijtoperatefrontdev&tenant_domain=hebeijtoperatefrontdev&oldVersionName=v1.0.0.11.02&oldVersion=9734&dateOfUpdate=2022-10-17+18%3A19%3A22&qkcp=%E6%B2%B3%E5%8C%97%E5%BB%BA%E6%8A%95%E9%9B%86%E5%9B%A2-%E8%BF%90%E8%90%A5%E7%AB%AF-frontend&qkcp_fk=14077&newVersion=9786&updateVersion=9786
 */
}

/**
 * 添加版本
 */
export default function addVersion() {
  getSQLOrderCode();
  addBuild();
}

// v1.0.0.11.4
