class Circle {
  type = 'circle';
  radius;

  constructor(radius) {
    this.radius = radius;
  }

  calcArea() {
    return Math.PI * (this.radius ** 2);
  }
}

export default Circle;
