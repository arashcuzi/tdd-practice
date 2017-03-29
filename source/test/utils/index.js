import test from 'tape';

import { getMaxProfit } from 'utils';

test('getMaxProfit()', assert => {
  let actual = typeof getMaxProfit;
  let expected = 'function';

  assert.equal(actual, expected,
    'should return a function');

  actual = getMaxProfit([10, 7, 5, 8, 11, 9]);
  expected = 6;

  assert.equal(actual, expected,
    'should return the max profit for the day based on the passed in args');

  actual = getMaxProfit([10, 9, 7, 3, 2, 1]);
  expected = -1;

  assert.equal(actual, expected,
    'should return the max profit for the day based on the passed in args, even if it went down all day');

  actual = getMaxProfit([10, 10, 10, 10, 10, 10]);
  expected = 0;

  assert.equal(actual, expected,
    'should return the max profit for the day based on the passed in args, even if it stayed the same');

  actual = () => getMaxProfit([10]);
  expected = /Getting a profit requires at least two values/;

  assert.throws(actual, expected,
    'should throw an error when less than two values are passed');

  assert.end();
});
