#! /usr/bin/env node

const { program } = require('commander');
const { helper, command, options, info } = require('../lib/core');

info(program);

helper(program);

command(program);

options(program);

program.parse(process.argv);
