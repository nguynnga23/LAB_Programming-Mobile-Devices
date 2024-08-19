
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary operator!)
function calculateTheTip(bill){
    // if (bill >= 50 && bill <= 300){
    //     return 15/100 * bill;
    // }else{
    //     return 20/100 * bill;
    // }
    return (bill >= 50 && bill <= 300) ? (15/100*bill) : (20/100*bill);
}
console.log(calculateTheTip(40));

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
function printAString(bill){
    let tip = calculateTheTip(bill);
    let final = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${final}`);
}

printAString(275);
printAString(40);
printAString(430);

