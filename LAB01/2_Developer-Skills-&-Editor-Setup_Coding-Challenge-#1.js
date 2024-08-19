// Data 1: [17, 21, 23]
let data1 = [17, 21, 23]
// Data 2: [12, 5, -5, 0, 4]
let data2 = [12, 5, -5, 0, 4]

// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
printForecast = (arr) => {
    let str = "... ";
    for(let i = 0; i < arr.length; i++){
        str += `${arr[i]} ºC in ${(i+1)} days ...`;
    }
    console.log(str);
}

printForecast(data1);
printForecast(data2);

// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
/*
1. Understand the Problem
2. Plan the Solution
3. Implement the Solution
4. Test and Optimize
*/
