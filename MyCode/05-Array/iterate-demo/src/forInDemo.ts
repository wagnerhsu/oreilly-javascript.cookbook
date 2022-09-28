import assert from 'assertion'

let iterable = [3, 5, 7];

const arrResult = new Array<string>();

for (const i in iterable) {
  arrResult.push(i);
}
assert.deepEqual(arrResult, ["0", "1", "2"]);
