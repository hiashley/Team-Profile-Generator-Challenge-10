const Employee = require('../lib/employee');
const employee = new Employee('Ashley', 23, 'hiashleyyu@gmail.com')

test('Employee Name', () => {
  expect(employee.getName()).toEqual('Ashley');
});

test('Employee ID', () => {
  expect(employee.getId()).toEqual(23);
});

test('Employee Email', () => {
  expect(employee.getEmail()).toEqual('hiashleyyu@gmail.com');
});

test('Employee Role', () => {
  expect(employee.getRole()).toEqual('Employee');
});
