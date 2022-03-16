let randomLocation = Math.floor(Math.random() * 5);
let location1 = randomLocation;
let location2 = location1 + 1;
let location3 = location2 + 1;

let currentGuess;
let guessesAmount = 0;
let hits = 0;
let isSunk = false;

while(!isSunk) {
    currentGuess = prompt("Where would you like to fire? (Enter a number between 0-6)");
    if(currentGuess < 0 || currentGuess > 6){
        alert("Enter a valid number!")
    }
    else if(currentGuess == location1 || currentGuess == location2 || currentGuess == location3){
        hits += 1;
        alert("Hit!");
        if(hits == 3) {
            isSunk = true;
            alert("You've sunk all my Battleships! :(");
        }
    } else {
        alert("You missed!");
    }
    guessesAmount += 1;
}

document.write("Stats: <br>");
document.write("Amount of guesses: " + guessesAmount);
document.write("<br>Hits: " + hits);
document.write("<br>Hit Ratio: " + (hits / guessesAmount));

