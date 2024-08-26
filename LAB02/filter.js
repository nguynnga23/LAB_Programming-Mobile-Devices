/*
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
 */
// Filtering out all small values
function isBigEnough(value){
    return value >= 10;
}
const filtered = [12, 5, 8, 10, 44].filter(isBigEnough);
console.log(filtered);

// Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num){
    for (let i = 2; num > i; i++){
        if(num % i === 0){
            return false;
        }
    }
G}
console.log(array.filter(isPrime));