// This code displays the score from each Bubble Gum solution number.
// The solution number is the same as the index from the array.

const scores =  [60, 50, 60, 58, 54, 54,
                 58, 50, 52, 54, 48, 69,
                 34, 55, 51, 52, 44, 51,
                 69, 64, 66, 55, 52, 61,
                 46, 31, 57, 52, 44, 18,
                 41, 53, 55, 61, 51, 44];

const costs =   [.25, .27, .25, .25, .25, .25,
                 .33, .31, .25, .29, .27, .22,
                 .31, .25, .25, .33, .21, .25,
                 .25, .25, .28, .25, .24, .22,
                 .20, .25, .30, .25, .24, .25,
                 .25, .25, .27, .25, .26, .29];

let output;
let highscore = printAndGetHighscores(scores);
let bestSolutions = getBestResults(scores, highscore);

function printAndGetHighscores(scores) {
    let highscore = 0;

    for(var i = 0; i < scores.length; i += 1) {
        output = "Bubble Solution #" + i + " score: " + scores[i];
        if(scores[i] > highscore) {
            highscore = scores[i];
        }
        console.log(output);
    }
    return highscore;
}

function getBestResults(scores, highscore) {
    let bestSolutions = [];

    for(var i = 0; i < scores.length; i += 1) {
        output = "Bubble Solution #" + i + " score: " + scores[i];
        if(scores[i] == highscore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}


function getMostCostEffectiveSolution(scores, costs, highscore) {
    let lowestCostSolution = costs[0];
    let index;

    for(let i = 0; i < scores.length; i += 1) {
        if(scores[i] == highscore && lowestCostSolution > costs[i]) {
            index = i;
            lowestCostSolution = costs[i];
        }
    }
    return index;
}

console.log("Highest Bubble score: " + highscore);
console.log("Amount of Bubble tests: " + scores.length)
console.log("The solutions that have the highest score: " + bestSolutions);
console.log("The most cost effective solution: #" + getMostCostEffectiveSolution(scores, costs, highscore));
