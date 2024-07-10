function createScoreBoard() {
    const scoreBoard = 
    {
        'The Best Ever': 1000000
    }
    return scoreBoard
}

 
function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score
    return scoreBoard
}
  
function removePlayer(scoreBoard, player) {
    delete scoreBoard[player]
    return scoreBoard
}

function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points
    return scoreBoard
}
  
function applyMondayBonus(scoreBoard) {
    Object.keys(scoreBoard).forEach((key) => {scoreBoard[key] += 100 });
    return scoreBoard;
}
  
function normalizeScore(params) {
    return params.normalizeFunction(params.score);
}
console.log(normalizeScore(
    {
        score: 45,
        normalizeFunction: function (score) {
          return score * 3 - 10;
        },
    }
))