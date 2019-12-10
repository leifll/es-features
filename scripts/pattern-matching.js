'use strict';

const nums = [1,2,3,4,5];

let [a, b, , c] = nums;

console.log(a);
console.log(b);
console.log(c);

[c, b, a] = [a, b, c];
console.log();

console.log(a);
console.log(b);
console.log(c);

const [g, h, i, j, k = 8, l = 9] = nums;
console.log();

console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);

const obj = {p1: 1, p2: {p3: 3, p4: 4}};
const {
  p1: prop1,
  p2: {p4: prop4},
} = obj;
console.log();

console.log(prop1);
console.log(prop4);
