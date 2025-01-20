/* 
Create two variables:
num1 with the value "10".
num2 with the value "notANumber".
*/

let num1 = '10';
let num2 ='notANumber';


// Convert num1 and num2 using parseFloat().

let num1_float = parseFloat(num1);
let num2_float = parseFloat(num2);


// Print the sum of num1 and num2 using console.log().
// (Note: If one value is NaN, the result will be NaN, which will be printed automatically.)
// Example output:
// NaN (if the addition involves invalid input).
// 10 (if both inputs are valid numbers).

console.log('The sum of num1 and num2: ', num1_float + num2_float);