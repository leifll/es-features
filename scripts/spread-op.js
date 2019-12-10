'use strict';

const nums = [1, 2, 3, 4, 5];
const chars = ['a', 'b', 'c', 'd', 'e'];
const both = [...chars, '&', ...nums];

console.log(both);

const me = {name: 'Leif', age: 56};
const myAddr = {street: 'theStreet', no: 100};
const meAndMyAddr = {...me, ...myAddr};

console.log(meAndMyAddr);
