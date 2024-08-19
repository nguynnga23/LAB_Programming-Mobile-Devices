// Coding Challenge #1
// 1. Store Mark's and John's mass and height in variables
    // Data 1:
let markMass1 = 78;
let markHeight1 = 1.69;

let johnMass1 = 92;
let johnHeight1 = 1.95;

    // Data 2:
let markMass2 = 95;
let markHeight2 = 1.88;

let johnMass2 = 85;
let johnHeight2 = 1.76;

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
function BMIs(mass, height){
    return mass / height ** 2;
}
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

    // Data 1 :
let markBMI1 = BMIs(markMass1, markHeight1);
let johnBMI1 = BMIs(johnMass1, johnHeight1);
let markHigherBMI1 = markBMI1 >  johnBMI1;

    // Data 2:
let markBMI2 = BMIs(markMass2, markHeight2);
let johnBMI2 = BMIs(johnMass2, johnHeight2);
let markHigherBMI2 = markBMI2 >  johnBMI2;

// Coding Challenge #2
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
function PrintOutput(markHigherBMI){
    if(markHigherBMI){
        console.log("Mark's BMI is higher than John's!");
    }else{
        console.log("John's BMI is higher than Mark's!");
    }
}

PrintOutput(markHigherBMI1);
PrintOutput(markHigherBMI2);
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
function PrintOutputIncludeBMIValues(markHigherBMI, markBMI, johnBMI){
    if(markHigherBMI){
        console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    }else{
        console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    }
}

PrintOutputIncludeBMIValues(markHigherBMI1, markBMI1, johnBMI1);
PrintOutputIncludeBMIValues(markHigherBMI2, markBMI2, johnBMI2);



