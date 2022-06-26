#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/gendiff-logic.js';

program
    .name('gendiff')
    .argument('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .option('-f, --format <type>', 'output format')
    .action((filepath1, filepath2) => {
        console.log(genDiff(filepath1, filepath2));
    });

program.parse(process.argv);

