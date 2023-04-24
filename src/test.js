const puppeteer = require('puppeteer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
process.env.LANG = 'zh_CN.UTF-8';
process.env.LC_ALL = 'zh_CN.UTF-8';
app.get('/html-to-pdf', async (req, res) => {
  const {
    url = 'http://localhost:8000/#/irecReport?assetPacketIRECNo=IRECPack1682068526041&token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NWNiM2NmNC0yNmVkLTQ4ZDYtOTA4Zi1kMjUwMGQyZDhiYWYiLCJleHAiOjE2ODI5MDYwMjQsImlhdCI6MTY4MjMwMTIyNH0.nkttKhjmyAL9D4YUxu1cyJyoQh3e88c7ODh19Efps5QI0D27Cjwh_YMvDFnZ2yvHOR3w4w8bE4iLIiHfnPQgFQ',
    options,
    wait = 0,
  } = req.body;
  if (!url) {
    return res.send({ code: 500, msg: '请传入html地址!' });
  }
  // try {
  //     options = JSON.parse(options)
  // } catch {
  //     console.log("json error");
  //     options = {};
  // }
  try {
    const browser = await puppeteer.launch({
      headless: 'chrome',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--font-render-hinting=none', // 禁用字体平滑处理
      ],
    });
    console.log('launch');
    const page = await browser.newPage();
    const dpi = 96; // set dpi to 96 (or desired value)
    await page.setViewport({
      width: Math.round(210 * dpi / 25.4), // calculate width in pixels
      height: Math.round(297 * dpi / 25.4), // calculate height in pixels
      deviceScaleFactor: dpi / 96, // set device scale factor to adjust for dpi
    });
    await page.goto(url, {
      waitUntil: 'networkidle0',
    });
    // 等待时常
    console.log('等待时常');
    if (wait) {
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      dpi,
      ...options,
    });
    await browser.close();
    console.log('browser.close');
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': buffer.length,
    });
    res.send(buffer);
  } catch (err) {
    console.log(err);
    res.send({ code: 500, msg: ` ${err}` });
  }
});
const server = app.listen(3009, () => console.log('Server started on port 3000'));
server.setTimeout(60000);
