'use strict';

/**
 * This function is available in the entire file.
 *
 * @return {number} The integer 1.
 */
function myFunc() {
  return 1;
}
console.log(myFunc());

{
  /**
   * This function is available in the block, which is delimited by
   * curly brackets.
   *
   * @return {number} The integer 1.
   */
  function myFunc() {
    return 2;
  }
  console.log(myFunc());
}

console.log(myFunc());

for (let i=0; i<5; i++) {
  console.log(i);
}
console.log(i);
