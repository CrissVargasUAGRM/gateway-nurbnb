require('dotenv').config();
const argv = require('yargs').config({PORT: 'PORT'}).argv;
const path = require('path');
const gateway = require('express-gateway');

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
