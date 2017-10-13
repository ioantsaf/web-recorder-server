#!/usr/bin/env node

// https://github.com/angular/angular-cli/issues/4318#issuecomment-293829342

const fs = require('fs');
const path = require('path');

const ejs = require('ejs');

const environmentFilesDirectory = path.join(__dirname, 'src/environments');

// Define default values in case there are no defined ones,
// but you should define only non-crucial values here,
// because build should fail if you don't provide the correct values
// for your production environment
const defaultEnvValues = {
  BACKEND_URL: 'localhost:4000',
  FRONTEND_URL: 'localhost:8080'
};

var environmentTemplate, output;

// Load template file
environmentTemplate = fs.readFileSync(
  path.join(environmentFilesDirectory, 'environment.ts.template'),
  {encoding: 'utf-8'}
);

// Generate output data
output = ejs.render(environmentTemplate, Object.assign({}, defaultEnvValues, JSON.parse(process.env.staging)));
// Write environment file
fs.writeFileSync(path.join(environmentFilesDirectory, 'environment.ts'), output);

// Load template file
environmentTemplate = fs.readFileSync(
  path.join(environmentFilesDirectory, 'environment.prod.ts.template'),
  {encoding: 'utf-8'}
);

// Generate output data
output = ejs.render(environmentTemplate, Object.assign({}, defaultEnvValues, JSON.parse(process.env.prod)));
// Write environment file
fs.writeFileSync(path.join(environmentFilesDirectory, 'environment.prod.ts'), output);

process.exit(0);
