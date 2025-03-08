// cli 输入模块

const { framwork, gitRepo } = require('../../config');
const { createPromptModule } = require('inquirer');
const myInquirer = createPromptModule();
const download = require('./download');

module.exports = async function (project, args) {
  // console.log(project, args);
  try {
    const answers = await myInquirer([
      {
        type: 'list',
        name: 'framwork',
        choices: framwork,
        message: '请选择你所使用的框架'
      }
    ]);
    const repoUrl = gitRepo[answers.framwork];
    download(project, repoUrl, answers.framwork);
  } catch (error) {
    console.log(error);
  }
}