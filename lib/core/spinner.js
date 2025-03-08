// cli 终端动画模块

const ora = require('ora');
const color = require('./color');

module.exports = function (project, framwork) {
  const spinner = ora(`正在下载${framwork}中`).start();

  return {
    success: function (text) {
      spinner.succeed(color(text, 'green'));
      console.log('------------------------------------- \n');
      console.log('Done. You can run: \n');
      console.log(color('cd ' + project + '\n', 'blue'));
      console.log(color('pnpm i\n', 'blue'));
      console.log(color('pnpm run dev', 'blue'));
    },
    failed: function (error) {
      spinner.fail(color('代码下载失败', 'red'));
      console.error(error);
    }
  }
}