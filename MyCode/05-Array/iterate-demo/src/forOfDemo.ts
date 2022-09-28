import assert from 'assertion'

let iterable = [3, 5, 7];

const arrResult = new Array<number>();

for (const i of iterable) {
  arrResult.push(i);
}
assert.deepEqual(arrResult, [3, 5, 7]);
