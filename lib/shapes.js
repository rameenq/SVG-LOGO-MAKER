class Triangle {
    constructor(color, sideA, sideB, sideC) {
      this.color = color;
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    // Method to calculate the perimeter of the triangle
    perimeter() {
      return this.sideA + this.sideB + this.sideC;
    }
  
    // Method to calculate the area of the triangle using Heron's formula
    area() {
      const s = this.perimeter() / 2;
      return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
  
    // Method to check if the triangle is equilateral
    isEquilateral() {
      return this.sideA === this.sideB && this.sideB === this.sideC;
    }
  
    // Method to check if the triangle is isosceles
    isIsosceles() {
      return this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC;
    }
  

  }
  