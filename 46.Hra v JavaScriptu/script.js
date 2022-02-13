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

document.querySelector('.rollDice').addEventListener('click', function(){
  // Generování náhodné čislo mezi 1 a 6
  var dice = Math.ceil(Math.random()*6);
  // Zobrazít správný obrázek
  var diceElement = document.querySelector('.diceImage');
  diceElement.style.display = 'block';
  console.log(diceElement.src = 'images/' + dice + '.jpg');
});