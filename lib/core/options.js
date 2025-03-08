// cli 实现帮助模块
// 使用: custom-cli -v ...

const config = require("../../config");

module.exports = function (program) {
  program.action((options, command) => {
    if (options.verbose) console.log(`当前版本为：${program.version()}`);
    if (options.framwork) console.log(`框架设置为：${options.framwork}`);
    if (options.list) console.log(config.framwork);
    if (options.time) console.log(`当前时间为：${new Date().toLocaleString()}`);
    if (options.debug) console.error('Called %s with options %o', options);
  });
}