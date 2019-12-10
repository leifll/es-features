// Mainly intended for adding new features to existing code.
// See https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/ for more info.

/**
 * A class with one property.
 */
class SomeClass {
  /**
   * Constructs a new instance with the specified property.
   * @param {any} a The property of the newly created instance.
   */
  constructor(a) {
    this._a = a;
  }
}

const myInstance = new SomeClass(1);
console.log(myInstance);
console.log();

const mySymbol = Symbol('symbolName');
myInstance[mySymbol] = 3;
console.log(myInstance);
console.log(Object.getOwnPropertyNames(myInstance));
console.log(Object.getOwnPropertySymbols(myInstance));
console.log();

console.log(Symbol('b') == Symbol('b'));
console.log(Symbol('b') === Symbol('b'));
console.log();

console.log(Symbol.for('b') == Symbol.for('b'));
console.log(Symbol.for('b') === Symbol.for('b'));
console.log();
