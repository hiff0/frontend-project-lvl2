import { readFileSync } from 'fs';
import path from 'path';
import { cwd } from 'node:process';

export default (filepath1, filepath2) => {
    const resultDiffObj = {};
    //сохраняем полный путь к файлам
    const file1Path = path.resolve(`${cwd()}`, `${filepath1}`);
    const file2Path = path.resolve(`${cwd()}`, `${filepath2}`);

    //сохраняем содержимое файлов
    const objFile1 = JSON.parse(readFileSync(file1Path, 'utf-8'));
    const objFile2 = JSON.parse(readFileSync(file2Path, 'utf-8'));

    const entriesFile1 = Object.entries(objFile1);
    const entriesFile2 = Object.entries(objFile2);

    const firstAndSecondHas = []; //есть в обоих файла и нет различий
    const firstHasSecondNo = []; //есть в первом, но нет во втором (-)
    const firstNoSecondHas = []; //нет в первом, но есть во втором (+)

    //записываем разницу между объектами
    for (const [key, value] of entriesFile1) {
        if (objFile2.hasOwnProperty(key) && value === objFile2[key]) {
            firstAndSecondHas.push([key, value]);
        } else if (!objFile2.hasOwnProperty(key) || (objFile2.hasOwnProperty(key) && value !== objFile2[key])) {
            firstHasSecondNo.push([key, value]);
        }
    }
    for (const [key, value] of entriesFile2) {
        if (!objFile1.hasOwnProperty(key) || (objFile1.hasOwnProperty(key) && value !== objFile1[key])) {
            firstNoSecondHas.push([key, value]);
        }
    }

    //записываем результат в объект
    for (const [key, value] of firstAndSecondHas) {
        resultDiffObj[`  ${key}`] = value;
    }
    for (const [key, value] of firstHasSecondNo) {
        resultDiffObj[`- ${key}`] = value;
    }
    for (const [key, value] of firstNoSecondHas) {
        resultDiffObj[`+ ${key}`] = value;
    }

    return JSON.stringify(Object.entries(resultDiffObj).sort((value1, value2) => {
        const value1Split = value1[0].split(' ');
        const value2Split = value2[0].split(' ');
        if (value1Split[value1Split.length - 1] < value2Split[value2Split.length - 1]) {
            return -1;
        }
    })
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {}));
};
