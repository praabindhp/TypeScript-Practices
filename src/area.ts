import { Circle, Square } from './shapes'

// Imported Circle
let circle = new Circle(10);
console.log(`Radius Is : ${circle.radius}`);
console.log(`Area Is : ${circle.area()}`);

// Imported Square
let square = new Square(10);
console.log(`Side Is : ${square.side}`);
console.log(`Area Is : ${square.area()}`);

/*
Output :
Radius Is : 10
Area Is : 314.1592653589793
Side Is : 10
Area Is : 100
*/