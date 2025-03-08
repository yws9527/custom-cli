// cli 命令模块
// 使用: custom-cli create my-project

const action = require('./action');

module.exports = function (program) {
  program.command('creat <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(action);
}