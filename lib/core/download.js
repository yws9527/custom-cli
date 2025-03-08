// cli 下载模块

const download = require('download-git-repo');
const spinner = require('./spinner');

module.exports = function (project, repoUrl, repoName) {
  const { success, failed } = spinner(project, repoName);

  download(`direct:${repoUrl}`, project, { clone: true }, function (error) {
    error? failed(error) : success('代码下载成功');
  });
}