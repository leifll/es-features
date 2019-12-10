const arr = [1, 3, 4, 2, 5];
console.log(arr.find((x) => x > 3));
console.log(arr.findIndex((x) => x > 3));
console.log();

console.log('foo'.repeat(3));
console.log();

console.log('hello'.startsWith('ello', 1));
console.log('hello'.endsWith('hel', 3));
console.log('hello'.includes('ell'));
console.log('hello'.includes('lo', 3));
console.log('hello'.includes('ell', 2));
console.log();

console.log(0.1 + 0.2 === 0.3);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log();
