const { createPromptModule } = require('inquirer');

const prompt = createPromptModule();

prompt([
  {
    type: 'input',
    name: 'username',
    message: '你的名字'
  }
])
  .then((answers) => {
    console.log('answers', answers);
    
  })
  .catch((error) => {
    console.log('error', error);
  });