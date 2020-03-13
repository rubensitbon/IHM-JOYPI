const { readdirSync } = require('fs');
const IFTTTChecker = require('../services/IFTTTChecker');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

async function IFTTTReqMiddleware(req, res, next) {
  console.log('IN MIDDLEWARE : url', req.url);
  const apiEndpoint = req.url.substr(5);
  console.log('IN MIDDLEWARE : apiEndpoint', apiEndpoint);
  const directories = getDirectories('./components');
  console.log('IN MIDDLEWARE : directories', directories);
  if (directories.includes(apiEndpoint)) {
    console.log('IN THE IF');
    IFTTTChecker.check({
      name: apiEndpoint,
      label: 'status',
      value: req.body || 'true'
    });
  }
  next();
}

async function IFTTTResMiddleware(req, res, next) {
  console.log('IN IFTTTResMiddleware : url', req.url);
  const apiEndpoint = req.url.substr(5);
  console.log('IN IFTTTResMiddleware : apiEndpoint', apiEndpoint);
  const directories = getDirectories('./components');
  console.log('IN IFTTTResMiddleware : directories', directories);
  console.log('IN IFTTTResMiddleware : res.get(body)', res.get('body'));
  next();
}

// Syntax to export functions
module.exports = {
  IFTTTReqMiddleware,
  IFTTTResMiddleware
};
