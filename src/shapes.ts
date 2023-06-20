export class Circle {
  constructor(public radius: number) {}

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

export class Square {
  constructor(public side: number) {}

  area() {
    return this.side * this.side;
  }
}
