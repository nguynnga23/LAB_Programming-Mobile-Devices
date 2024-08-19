// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? (15/100*bill) : (20/100*bill);
}
console.log(calcTip(100))
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
let bills = [125, 555, 44];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
let tips = [];
for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
}
console.log(tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
let totals = [];
for(let i = 0; i < tips.length; i++){
    const total = bills[i] + tips[i];
    totals.push(total);
}
console.log(totals);