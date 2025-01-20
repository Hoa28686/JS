/* Create a variable userInput and assign it the value "25.75 apples".
 */
let userInput = '25.75 apples';


// Use parseFloat() to extract the numeric part from the input.
let input = parseFloat(userInput);


// Use .toFixed() to round the number to 1 decimal place.
let one_decimal = input.toFixed(1);


// Print the result using console.log().
// (If userInput doesn't start with a number, the result will be NaN.)
// Example outputs:
// "25.8" (if the input starts with a valid number).
// "NaN" (if the input is invalid).
console.log('Result: ', one_decimal);