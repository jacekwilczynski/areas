class Square {
  type = 'square';
  side;

  constructor(side) {
    this.side = side;
  }

  calcArea() {
    return this.side ** 2;
  }
}

export default Square;
