// Import the Triangle, Circle, Square shape classes from the 'shapes.js' module
const { Triangle, Circle, Square } = require("./shapes.js");

// Test for triangle shape to render
describe('Triangle', () => {
  test('renders triangle shape correctly', () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
  });
});

// Test for circle shape to render
describe('Circle', () => {
  test('renders circle shape correctly', () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="yellow" />');
  });
});

// Square Shape
describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
    });
});