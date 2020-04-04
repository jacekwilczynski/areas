const buttons = Array.from(document.querySelectorAll('[data-add-shape]'));

window.shapes = [];

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const shapeType = e.target.dataset.addShape;
    const shape = { type: shapeType };

    if (shapeType == 'square') {
      const side = prompt('Enter square side size:');
      if (!side) {
        return;
      }
      shape.side = side;
    }

    if (shapeType == 'rectangle') {
      const width = prompt('Enter rectangle width:');
      if (!width) {
        return;
      }
      const height = prompt('Enter rectangle height:');
      if (!height) {
        return;
      }
      shape.width = width;
      shape.height = height;
    }

    if (shapeType == 'circle') {
      const radius = prompt('Enter circle radius:');
      if (!radius) {
        return;
      }
      shape.radius = radius;
    }

    shapes.push(shape);
  });
});
