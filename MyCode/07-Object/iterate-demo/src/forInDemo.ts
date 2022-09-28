import assert from 'assertion'
const obj = {
  a: "a",
  b: {
    b1: 1
  }
}

const arrResult = new Array();
for (const i in obj) {
  arrResult.push(i);
  console.log(obj[i]);
}
assert.deepEqual(arrResult, ["a", "b"]);
assert.deepEqual(arrResult, Object.keys(obj));
