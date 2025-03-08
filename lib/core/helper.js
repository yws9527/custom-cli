// cli 帮助模块
// 使用: custom-cli -h

module.exports = function (program) {
  program.option('-v, --verbose', '查看当前版本');
  program.option('-f, --framwork <framwork>', '设置框架');
  program.option('-l, --list', '查看列表');
  program.option('-t, --time', '查看时间');
  program.option('-d, --debug', '显示调试信息');
}