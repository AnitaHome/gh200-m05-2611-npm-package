const test = require('node:test');
const assert = require('node:assert/strict');
const { capitalize, reverse } = require('../src/index.js');

test('capitalize 應該正確將首字母大寫', () => {
  assert.equal(capitalize('github'), 'Github');
  assert.equal(capitalize('actions'), 'Actions');
  assert.equal(capitalize(''), '');
});

test('reverse 應該正確反轉字串', () => {
  assert.equal(reverse('hello'), 'olleh');
  assert.equal(reverse('gh200'), '002hg');
});