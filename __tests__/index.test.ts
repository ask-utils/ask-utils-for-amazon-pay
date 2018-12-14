import { helloWorld } from '../libs/index';

test('basic', () => {
  expect(helloWorld('John')).toBe('Hello John');
});