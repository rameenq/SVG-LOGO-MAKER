class Shape {
  constructor(color) {
    this.color = color;
  }
  

  render() {
    throw new Error('This method should be overridden by a subclass');
  }
}


export class Triangle extends Shape {
  constructor(color, sideA, sideB, sideC) {
    super(color);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  getCenter() {
    return { x: this.sideA / 2, y: 100 - this.sideB / 2 };
  }
  area() {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }

  render() {
    return `<polygon points="0,0 ${this.sideA},0 0,${this.sideB}" style="fill:${this.color}"/>`;
  }
}


export class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getCenter() {
      return { x: 100, y: 100 };
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }

  render() {
    return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}


export class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }
  getCenter() {
    return { x: this.sideLength / 2, y: this.sideLength / 2 };
  }
  area() {
    return this.sideLength * this.sideLength;
  }

  render() {
    return `<rect width="${this.sideLength}" height="${this.sideLength}" style="fill:${this.color}"/>`;
  }
}


