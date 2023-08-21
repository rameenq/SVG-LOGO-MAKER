class Triangle {
    constructor(color, sideA, sideB, sideC) {
      this.color = color;
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    perimeter() {
      return this.sideA + this.sideB + this.sideC;
    }
  
    area() {
      const s = this.perimeter() / 2;
      return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
  }

  class Circle {
    constructor(color, radius) {
      this.color = color;
      this.radius = radius;
    }
  
    circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    diameter() {
      return this.radius * 2;
    }
  }

  class Square {
    constructor(color, sideLength) {
      this.color = color;
      this.sideLength = sideLength;
    }
  
    perimeter() {
      return this.sideLength * 4;
    }
  
    area() {
      return Math.pow(this.sideLength, 2);
    }
  
    diagonal() {
      return this.sideLength * Math.sqrt(2);
    }
  }
  
  