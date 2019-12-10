/* eslint-disable max-len */
// More information at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// and https://developers.google.com/web/fundamentals/primers/async-functions

/**
 * Returns a Promise that sleeps the spevified number of milliseconds, and then resolves with the specified number of milliseconds + 1000. Fails if the specified number of milliseconds is equal to 2500.
 *
 * @param {number} ms The number of milliseconds to wait.
 * @return {Promise} A new Promise with the behaviour specified above.
 */
function wait(ms) {
  console.log('pos1, ms = ' + ms);
  return new Promise((resolve, reject) => {
    console.log('pos2, ms = ' + ms);
    if (ms === 2500) {
      console.log('pos3');
      //   reject('wrong value');
      //   return;
      throw new Error('wrong value');
    }
    setTimeout(() => {
      console.log('pos4');
      resolve(ms + 1000);
    }, ms);
  });
}

// Using promises
// wait(1000)
//        .then(result => wait(result))
//        .then(result => wait(result))
//        .then(result => {
//            console.log(`Got the final result: ${result}`);
//        })
//        .catch(error => console.log("Failed with reason:" + error));

wait(500)
    .then((result) => wait(result))
    .then((result) => wait(result))
    .then((result) => {
      console.log(`Got the final result: ${result}`);
    })
    .catch((error) => console.log('Failed with reason:' + error));

//  The same code using async/await.
//  async function runTheCode(sleepTime) {
//    try {
//        let result = await wait(sleepTime);
//        result = await wait(result);
//        console.log(`Got the final result: ${await wait(result)}`);
//    } catch (error) {
//        console.log("Failed with reason:" + error)
//    }
//  }
//
//  runTheCode(1000);
//  runTheCode(500);
