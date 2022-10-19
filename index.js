import dotenv from 'dotenv';
import runBuild from './src/build.js';
import runTest from './src/test.js';
import { setState } from './src/utils/store.js';

/**
 * 任务
 * build | release
 * 打包 | 发布
 */
const task = process.argv[2];
/**
 * 小组
 * frontend | backend
 * 前端 | 后端
 */
const group = process.argv[3];
/**
 * 项目 CJ | HZ | YY | ZC
 * 采集端 核证端 运营端 | 资产端
 */
const project = process.argv[4];
/**
 * 平台
 * JT | QK
 * 河北建投 | 祺坤
 */
const platform = process.argv[5];
/**
 * git分支
 */
const targetGitBranch = process.argv[6];

setState({
  task,
  group,
  project,
  platform,
  targetGitBranch,
});

dotenv.config();

function dispatchTask() {
  switch (task) {
    case 'build':
      console.log('开始构建任务.....');
      runBuild();
      break;
    case 'release':
      console.log('开始发布任务.....');
      break;
    case 'test':
      runTest();
      break;
    default:
      console.log('任务类型不支持[中断程序]', task);
      process.exit(-1);
  }
}
dispatchTask();
