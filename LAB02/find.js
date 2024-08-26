/*
    Find the value of the first element
 */

// Find an object in an array by one of its properties
const inventory = [
    {name: "apples", quantity: 2},
    {name: "bananas", quantity: 0},
    {name: "cherries", quantity: 5},
]

function isCherries(fruit){
    return fruit.name === "cherries";
}

const result = inventory.find(({name}) => name === "cherries");
console.log(result);
console.log(inventory.find(isCherries));

// Find a prime number in an array
function isPrime(element, index, array){
    let start = 2;
    while(start <= Math.sqrt(element)){
        if(element % start++ < 1){
            return false;
        }
    }
    return element > 1;
}
const arr = [3, 4, 5, 8, 12];
console.log(arr.find(isPrime));