'use strict';

const target = {foo: 'Gotcha!'};
const proxy = new Proxy(target, {
  get(receiver, propertyName) {
    console.log(receiver);
    console.log(propertyName);
    return propertyName in receiver
      ? receiver[propertyName]
      : `Hello, ${propertyName}`;
  },
});
console.log(proxy.foo);
console.log(proxy.olle);
