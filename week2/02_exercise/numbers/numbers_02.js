/* Create a variable price and assign it the value 19.56789.
Use .toFixed() to:
 */

let price = 19.56789;


// Round the price to 2 decimal places.
// Round the price to no decimal places.

let two_decimal = price.toFixed(2);
let no_decimal = price.toFixed();


// Print both results using console.log() with messages:
// "Price with 2 decimals: 19.57"
// "Price with no decimals: 20"

console.log('Price with 2 decimals: ', two_decimal);
console.log('Price with no decimals: ', no_decimal);
