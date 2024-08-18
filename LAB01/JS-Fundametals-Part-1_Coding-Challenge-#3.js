// Data 1:
let dolpinsScore = [96, 108, 89];
let koalasScore = [88, 91, 110];

// Data Bonus 1:
dolpinsScoreBonus1 = [97, 112, 101];
koalasScoreBonus1 = [109, 95, 123];

dolpinsScoreBonus2 = [97, 112, 101];
koalasScoreBonus2 = [109, 95, 106];

// 1. Calculate the average score for each team, using the test data below
function  calculateTheAverage(arrayScore){
    let sum = 0;
    for(let i = 0; i < arrayScore.length; i++){
        sum += arrayScore[i];
    }
    let average = sum / arrayScore.length;
    return average;
}

let dolpinsScoreAverage = calculateTheAverage(dolpinsScore);
let koalasScoreAverage = calculateTheAverage(koalasScore);

let dolpinsScoreBonus1Average = calculateTheAverage(dolpinsScoreBonus1);
let koalasScoreBonus1Average = calculateTheAverage(koalasScoreBonus1);

let dolpinsScoreBonus2Average = calculateTheAverage(dolpinsScoreBonus2);
let koalasScoreBonus2Average = calculateTheAverage(koalasScoreBonus2);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

function compareTheAverageScore(a, b){
    if(a > b){
        console.log("Dolphins team is the winner of the competition !");
    }else if(a === b){
        console.log("Draw !!!");
    }else{
        console.log("Koalas team is the winner of the competition !");
    }
}

compareTheAverageScore(dolpinsScoreAverage, koalasScoreAverage);


// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
function determineWinner(a, b){
    if(a < 100 && b < 100){
        console.log("No team won because both teams scored below 100.");
    }else if(a > b && a >= 100){
        console.log("Dolphins team is the winner of the competition !");
    }else if(b > a && b >= 100){
        console.log("Koalas team is the winner of the competition !")
    }else if(a === b && a >= 100 && b >= 100){
        console.log("Draw !!!!")
    } else{
        console.log("No team won because one of the two teams did not reach the minimum score.");
    }
}

determineWinner(dolpinsScoreBonus1Average, koalasScoreBonus1Average);

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
