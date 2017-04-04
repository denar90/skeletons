#!/usr/bin/env node

'use strict';

const jsonPaths = ['./skeletons.json'];

jsonPaths.forEach(file => {
  try {
    const content = require(file);
    JSON.stringify(content);
  } catch(error) {
    error.message = `Failed parsing ${file}, make sure it has valid syntax\n`;
    throw error;
  }
});