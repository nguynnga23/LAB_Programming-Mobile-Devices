// Data 1:
let dolpinsScore1 = [44, 23, 71];
let koalasScore1 = [65, 54, 49];
// Data 2:
let dolpinsScore2 = [85, 54, 41];
let koalasScore2 = [23, 34, 27];

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
let calcAverage = (arrayScore) => {
    let sum = 0;
    for(let i = 0; i < arrayScore.length; i++){
        sum += arrayScore[i];
    }
    let average = sum / arrayScore.length;
    return average;
}
// 2. Use the function to calculate the average for both teams
let dolpinsScoreAverage1 = calcAverage(dolpinsScore1);
let koalasScoreAverage1 = calcAverage(koalasScore1);

let dolpinsScoreAverage2 = calcAverage(dolpinsScore2);
let koalasScoreAverage2 = calcAverage(koalasScore2);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

// A team only wins if it has at least double the average score of the other team.
const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins > avgKoalas && avgDolphins >= (2 * avgKoalas)){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas > avgDolphins && avgKoalas >= (2 * avgDolphins)){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else if (avgDolphins === avgKoalas){
        console.log(`Draw (${avgDolphins} vs. ${avgKoalas}`);
    } else{
        console.log('No team win');
    }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(dolpinsScoreAverage1, koalasScoreAverage1);
checkWinner(dolpinsScoreAverage2, koalasScoreAverage2);
// 5. Ignore draws this time

