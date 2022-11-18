import assert from 'assertion'

let iterable = [3, 5, 7];

const arrResult = new Array<number>();

for (const i of iterable) {
  arrResult.push(i);
}
assert.deepEqual(arrResult, [3, 5, 7]);

let flag = iterable.some(x=>x>4);
assert.equal(flag,true);
flag = false;
for(const i of iterable) {
  if (i > 4) {
    console.log(i);
    flag = true;
    break;
  }
}
assert.equal(flag,true);
