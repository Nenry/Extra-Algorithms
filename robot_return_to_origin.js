var judgeCircle = function (moves) {
  let vertLoc = 0;
  let horzLoc = 0;
  const sideMoves = {
    R: 1,
    L: -1
  }
  const vertMoves = {
    U: 1,
    D: -1
  }

  for (let i = 0; i < moves.length; i++) {

    if (sideMoves[moves[i]]) {
      horzLoc += sideMoves[moves[i]]
    } else if (vertMoves[moves[i]]) {
      vertLoc += vertMoves[moves[i]]
    }


  }

  if (!vertLoc && !horzLoc) {
    return true;
  } else {
    return false;
  }


};