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
 * 平台
 */
 const platform = process.argv[3];
/**
 * 项目
 */
const project = process.argv[4];
/**
 * git分支
 */
const targetGitBranch = process.argv[5];

setState({
  task,
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
