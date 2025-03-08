const ora = require('ora');

const spinner = ora('loading unnnn').start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
}, 1500);