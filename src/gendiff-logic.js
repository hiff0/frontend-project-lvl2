import { read, readFile, readFileSync } from 'fs';
import path from 'path';
import { cwd } from 'node:process';
import _ from 'lodash';

export default (filepath1, filepath2) => {
    //сохраняем полный путь к файлам
    console.log(filepath1);
    console.log(filepath2);
    const currentPath = cwd();
    const file1Path = path.resolve(`${currentPath}`, `${filepath1}`);
    const file2Path = path.resolve(`${currentPath}`, `${filepath2}`);
    console.log(file1Path);
    console.log(file2Path);
    //сохраняем содержимое файлов
    //const file1 = readFileSync(file1Path, 'utf-8');
    //const file2 = readFileSync(file2Path, 'utf-8');
    //console.log(file1);
    //console.log(file2);

    /*
    const file1 = JSON.parse(readFileSync(path.resolve(filepath1), 'utf-8'));
    const file2 = JSON.parse(readFileSync(path.resolve(filepath2), 'utf-8'));

    const entries1 = Object.entries(file1);
    const entries2 = Object.entries(file2);
    const concatEntries = entries1.concat(entries2)
        .map(JSON.stringify)
        .filter((item, index, arr) => arr.indexOf(item, index + 1) === -1)
        .sort()
        .map(JSON.parse)

    return concatEntries;
    */
};
