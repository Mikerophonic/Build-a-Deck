let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
let suits = ["clubs", "diamonds", "spades", "hearts"];



for(let suitCounter = 0; suitCounter < 4; suitCounter++) {
    for(let rankCounter = 0; rankCounter < 13; rankCounter++) {
        console.log(ranks[rankCounter] + " of " + suits[suitCounter]);
    }

}



