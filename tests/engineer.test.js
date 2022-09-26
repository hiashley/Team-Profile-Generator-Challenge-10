const Engineer = require('../lib/engineer');
const engineer = new Engineer('Ashley', 23, 'hiashleyyu@gmail.com', 'hiashley');

test('Engineer Github', () => {
  expect(engineer.getGithub()).toEqual('hiashley');
});

test('Engineer Role', () => {
  expect(engineer.getRole()).toEqual('Engineer');
});