'use strict';

/**
 * Prints the specified values.
 *
 * @param {any} a The first value to print.
 * @param {any} b The second value to print.
 * @param  {...any} c The remaining values to print.
 */
function func(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

func(1, 2, 3, 4, 5, 6, 7, 8, 9);
