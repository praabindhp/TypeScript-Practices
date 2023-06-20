abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle2 extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log(`Circle With Radius ${this.radius} And Color ${this.color}`);
    }
}

let shape: Shape = new Circle2(10, "Red");
shape.render();

/*
Output :
Circle With Radius 10 And Color Red
*/