#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command;

program
    .name('gendiff')
    .argument('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .option('-f, --format <type>', 'output format')

program.parse();
