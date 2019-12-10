const customer = {name: 'Nisse'};
const itemsBought = {amt: 2, product: 'milk', price: 42};

console.log(`${customer.name} bought ${itemsBought.amt} ${
  itemsBought.product
} for 
a total of ${itemsBought.amt * itemsBought.price} SEK.`);

/**
 * Parses the specified template literal and prints its parts.
 *
 * @param {[String]} strs An array with the strings of the template literal.
 * @param  {...any} vals  The values of the template literal.
 */
function rawStringParts(strs, ...vals) {
  console.log(strs);
  console.log(strs.raw);
  console.log(vals);
}

rawStringParts`part1\npart2${42}part3${'someVal'}part4${true}`;
