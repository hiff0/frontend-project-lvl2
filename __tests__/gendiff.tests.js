
import gendiff from '../index.js';

const path1 = 'file1.json';
const path2 = 'file2.json';
const resultFile1File2 = '{"- follow":false,"  host":"hexlet.io","- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}';

test('It is a string', () => {
    expect(typeof gendiff(path1, path2) === 'string').toBe(true);
})

test('two json file', () => {
    expect(gendiff(path1, path2)).toEqual(resultFile1File2);
});
