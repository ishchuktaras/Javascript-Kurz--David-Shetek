// Základní proměnné

var totalScore, roundScore, activePlayer, dice;
totalScore = [0,0];
roundScore = 0;
activePlayer = 0;

// Vynulování a odstraněni kostky

document.getElementById('totalScorePlayer-0').textContent = 0;
document.getElementById('totalScorePlayer-1').textContent = 0;
document.getElementById('currentScore-0').textContent = 0;
document.getElementById('currentScore-1').textContent = 0;

document.querySelector('.diceImage').style.display = 'none';