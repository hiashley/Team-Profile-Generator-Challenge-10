const Intern = require('../lib/intern');
const intern = new Intern('Ashley', 23, 'hiashleyyu@gmail.com', 'UCI');

test('Intern School', () => {
  expect(intern.getSchool()).toEqual('UCI');
});

test('Intern Role', () => {
  expect(intern.getRole()).toEqual('Intern');
});