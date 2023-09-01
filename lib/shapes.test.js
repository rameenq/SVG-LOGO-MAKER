import { Triangle, Circle, Square } from './shapes';

test('Triangle render', () => {
  const triangle = new Triangle('red', 3, 4, 5);
  expect(triangle.render()).toBe('<polygon points="0,0 3,0 0,4" style="fill:red"/>');
});

test('Circle render', () => {
  const circle = new Circle('blue', 5);
  expect(circle.render()).toBe('<circle cx="100" cy="100" r="5" fill="blue" />');
});

test('Square render', () => {
  const square = new Square('green', 4);
  expect(square.render()).toBe('<rect width="4" height="4" style="fill:green"/>');
});






