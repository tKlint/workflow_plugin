import fs from 'fs';

export default async function runTest() {
  const { FK_MAP_PATH } = process.env;
  const map = fs.readFileSync(FK_MAP_PATH, {
    encoding: 'utf-8',
  });
  console.log(map);
}
