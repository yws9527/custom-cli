// cli 终端样式模块

const pc = require('picocolors');

module.exports = function (text, color) {
  return pc[color](text);
}