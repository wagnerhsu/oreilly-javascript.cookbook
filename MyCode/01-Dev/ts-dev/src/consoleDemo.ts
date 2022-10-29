console.time('test');
console.warn('Warn message');
console.error('Error message');
console.trace();
console.timeEnd('test');
const number = 3;
console.assert(number % 2 === 0, { number: number, errorMsg: 'errorMsg' });

export {};
