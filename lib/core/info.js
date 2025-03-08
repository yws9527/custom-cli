const pkg = require('../../package.json');

module.exports = function (program) {
  program.version(pkg.version);
  program.description(pkg.description);
}