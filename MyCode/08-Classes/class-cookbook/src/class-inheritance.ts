/* eslint-disable max-classes-per-file */
// This is the parent class

console.group('class-inheritance');
class Shape {
  getArea(): number | null {
    // eslint-disable-line class-methods-use-this
    return null;
  }
}

// This is a child class
class Triangle extends Shape {
  base: number;
  height: number;
  constructor(base: number, height: number) {
    // Call the base class constructor
    super();

    this.base = base;
    this.height = height;
  }

  getArea(): number {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  length: number;
  constructor(length: number) {
    super();
    this.length = length;
  }

  getArea() {
    return this.length ** 2;
  }
}

// Create an array of different shapes
const shapes = [new Triangle(15, 8), new Circle(8), new Square(7)];
// Log each shape separately so we're not fooled by lazy evaluation in the devtools.
shapes.forEach((shape) => console.log(shape));

// Sort them by area from smallest to largest
console.log('Short shapes by area (smallest to largest)');
shapes.sort((a, b) => a.getArea() - b.getArea());

console.log(shapes);
// New order: Square, Triangle, Circle

const triangle = new Triangle(15, 8);

if (triangle instanceof Shape) {
  console.log('Triangle is a Shape');
}

console.groupEnd();
export {};
