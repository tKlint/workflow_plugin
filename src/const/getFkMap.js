import fs from 'fs';

export default function getFKMap() {
  const { FK_MAP_PATH } = process.env;
  const map = fs.readFileSync(FK_MAP_PATH, {
    encoding: 'utf-8',
  });
  if (map) {
    return JSON.parse(map);
  }
  return {};
}
