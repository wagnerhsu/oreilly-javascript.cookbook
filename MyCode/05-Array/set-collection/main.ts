const animals = new Set(['elephant', 'tiger', 'lion', 'zebra', 'cat', 'dog']);

console.log('List Set using for...of');
for (const animal of animals) {
  console.log(animal);
}
Array.from(animals).forEach((x) => console.log(x));
