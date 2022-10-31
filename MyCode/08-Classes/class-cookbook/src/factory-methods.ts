class Book {
  constructor(
    private title: string,
    private firstName: string,
    private lastName: string
  ) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static createSequel(prevBook: Book, title: string) {
    return new Book(title, prevBook.firstName, prevBook.lastName);
  }
}

console.group('factory-methods');
// Create a Book with the usual constructor
const book = new Book('Good Design', 'Polly', 'Morfissim');
console.log('First book:');
console.log(book);

// Create a sequel with a factory method
const sequel = Book.createSequel(book, 'Even Gooder Design');
console.log('Sequel:');
console.log(sequel);
console.groupEnd();
export {};
