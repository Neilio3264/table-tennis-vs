function generateLeague(players, number) {
  var holder = players;
  var baseNum = players.length / number;
  var leftover = players.length % number;
  var output = [];
  for (i = number - 1; i >= 0; i--) {
    var league = [];
    var loopLength = baseNum;
    if (leftover > 0) {
      loopLength++;
      leftover--;
    }
    for (j = 0; j < loopLength - 1; j++) {
      league.push(holder[holder.length - 1]);
      holder.pop();
    }
    output.push(league.reverse());
  }
  return output.reverse();
}

function shufflePlayers(players) {
  var output = [];
  for (i = 0; i < players.length - 1; i++) {
    for (j = i + 1; j < players.length; j++) {
      var pair = [players[i], players[j]];
      output.push(pair);
    }
  }
  return output;
}
