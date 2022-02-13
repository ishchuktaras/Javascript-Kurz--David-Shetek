// Základní proměnné

var totalScore, roundScore, activePlayer, dice, diceElement;
totalScore = [0, 0];
roundScore = 0;
activePlayer = 0;

// Vynulování a odstraněni kostky

document.getElementById('totalScorePlayer-0').textContent = 0;
document.getElementById('totalScorePlayer-1').textContent = 0;
document.getElementById('currentScore-0').textContent = 0;
document.getElementById('currentScore-1').textContent = 0;

document.querySelector('.diceImage').style.display = 'none';

document.querySelector('.rollDice').addEventListener('click', function () {

  // Generování náhodné čislo mezi 1 a 6
  dice = Math.ceil(Math.random() * 6);

  // Zobrazít správný obrázek
  diceElement = document.querySelector('.diceImage');
  diceElement.style.display = 'block';
  console.log(diceElement.src = 'images/' + dice + '.jpg');

  // Nasčítáme čislá z kostky
  if (dice !== 1) {
    roundScore = roundScore + dice;
    document.getElementById('currentScore-0').textContent = roundScore;
  } else {
    // Přepínání hráčů a zvýraznění aktuálního hráče
    nextPleyer();
  }
  roundScore = roundScore + dice;
  document.getElementById('currentScore-0').textContent = roundScore;
});
function nextPleyer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0
  }
  roundScore = 0;
document.getElementById('currentScore-0').textContent = 0;
document.getElementById('currentScore-1').textContent = 0;

document.querySelector('.diceImage').style.display = 'none';

document.querySelector('.totalScore0').classList.toggle('active');
document.querySelector('.totalScore1').classList.toggle('active');

}



