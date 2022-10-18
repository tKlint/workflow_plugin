export default function nextVersion(currentVersion = '') {
  const versionItems = currentVersion.split('.');
  const iterationCode = parseInt(versionItems.at(-1), 10) || 0;
  if (parseInt(iterationCode, 10) === 99) {
    const featureCode = parseInt(versionItems.at(-2), 10);
    const nextFeatureCode = `${featureCode + 1}`;
    versionItems.splice(-2, 2, nextFeatureCode, '00');
  } else {
    const nextIterationCode = `${iterationCode + 1}`;
    versionItems.splice(-1, 1, nextIterationCode);
  }
  return versionItems.join('.');
}
