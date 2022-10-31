class Book {
  constructor(
    private title: string,
    private author: string,
    private price: number,
    private publishedDate: Date
  ) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishedDate = publishedDate;
  }

  raisePrice(percent: number) {
    const increase = this.price * percent;
    this.price += Math.round(increase) / 100;
    return this;
  }

  releaseNewEdition() {
    // Set the pulishedDate to today
    this.publishedDate = new Date();
    return this;
  }
}

console.group('method-chaining');
const book = new Book(
  'I Love Mathematics',
  'Adam Up',
  15.99,
  new Date(2010, 2, 2)
);

// Raise the price 15% and then change the edition, using method chaining
console.log(book.raisePrice(15).releaseNewEdition());
console.groupEnd();

export {};
