'use strict';

/**
 * A sample function.
 *
 * @param {number} a The first param.
 * @param {number} [b=2] The second param.
 * @param {number} [c=3] The third param.
 * @return {number} The sum of all params.
 */
function funcWithDefParam(a, b = 2, c = 3) {
  return a + b + c;
}

console.log(funcWithDefParam(1));
