const Manager = require('../lib/manager');
const manager = new Manager('Ashley', 23, 'hiashleyyu@gmail.com', 1);

test('Manager Office Number', () => {
  expect(manager.getofficeNumber()).toEqual(1);
});

test('Manager Role', () => {
  expect(manager.getRole()).toEqual('Manager');
});