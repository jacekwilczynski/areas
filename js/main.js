import Circle from './Circle';
import Rectangle from './Rectangle';
import Square from './Square';

const buttons = Array.from(document.querySelectorAll('[data-add-shape]'));
const tableBody = document.getElementById('table-body');
const shapes = [];

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const shapeType = e.target.dataset.addShape;
    let shape;

    if (shapeType == 'square') {
      const side = prompt('Enter square side:');
      if (!side) {
        return;
      }
      shape = new Square(side);
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
      shape = new Rectangle(width, height);
    }

    if (shapeType == 'circle') {
      const radius = prompt('Enter circle radius:');
      if (!radius) {
        return;
      }
      shape = new Circle(radius);
    }

    shapes.push(shape);

    tableBody.innerHTML = renderTableBody(shapes);
  });
});

function renderTableBody(shapes) {
  return shapes.map(shape => {
    const propertiesList = Object.keys(shape)
      .map(key => `<li>${key}: ${shape[key]}</li>`)
      .join('');

    return `<tr><td><ul>${propertiesList}</ul></td><td>${shape.calcArea()}</td></tr>`;
  }).join('');
}
