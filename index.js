// code your solution here

const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

// function superbowlWin(gamesObject) {
//     for (const stat of gamesObject) {
//         if (stat.result === "W") {
//             return stat;
//         } 
//     }
// };


// function superbowlWin(game) {
//     return game.result === "W"
// };

// console.log(record.find(superbowlWin));

function superbowlWin(gamesArray) {
    const win = gamesArray.find(stat => stat.result === "W")
    if (win) {
        return win.year 
    }else {
        return undefined
    }
}