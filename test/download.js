const download = require('download-git-repo');
const { gitRepo } = require('../config');


download(`direct:${gitRepo.express}`, 'test/tmp', { clone: true }, (error) => {
  console.error(error ? 'Error' : 'Success');
});
