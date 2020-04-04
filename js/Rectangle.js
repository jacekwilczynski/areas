class Rectangle {
  type = 'rectangle';
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}

export default Rectangle;
