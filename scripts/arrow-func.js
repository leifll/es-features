'use strict';

const nums = [1, 2, 3, 4, 5];
const doubles = nums.map((elem) => elem * 2);

for (const double of doubles) {
  console.log(double);
}
console.log(doubles);

console.log();

const valTimesIndex = nums.map((elem, index) => elem * index);
for (const val of valTimesIndex) {
  console.log(val);
}
