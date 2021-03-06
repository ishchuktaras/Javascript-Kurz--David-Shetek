// Základní proměnné
var totalScore, roundScore, activePlayer, dice, diceElement, playGame;

newStart();

function newStart() {
  totalScore = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  playGame = true;

  // Vynulování a odstraněni kostky
  document.getElementById('totalScorePlayer-0').textContent = 0;
  document.getElementById('totalScorePlayer-1').textContent = 0;
  document.getElementById('currentScore-0').textContent = 0;
  document.getElementById('currentScore-1').textContent = 0;

  // Skrytí kostky
  document.querySelector('.diceImage').style.display = 'none';

  // Texty do původního stávu
  document.getElementById('name-0').textContent = 'Score 1. Hráče';
  document.getElementById('name-1').textContent = 'Score 2. Hráče';

  // Vrácení zvýraznění aktivního hráče k prvnímu a odstránění u druhého
  document.querySelector('.totalScore0').classList.add('active');
  document.querySelector('.totalScore1').classList.remove('active');

}
// Měníme obrázek kostky podle náhodného čísla
document.querySelector('.rollDice').addEventListener('click', function () {
  if (playGame) {
    // Generování náhodné čislo mezi 1 a 6
    dice = Math.ceil(Math.random() * 6);

    // Zobrazít správný obrázek
    diceElement = document.querySelector('.diceImage');
    diceElement.style.display = 'block';
    console.log(diceElement.src = 'images/' + dice + '.jpg');

    // Nasčítáme čislá z kostky
    if (dice !== 1) {
      roundScore = roundScore + dice;
      document.getElementById('currentScore-' + activePlayer).textContent = roundScore;
    } else {
      // Přepínání hráčů a zvýraznění aktuálního hráče
      nextPleyer();
    }
  }
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

// Hráči si mohou podržet své skóre
document.querySelector('.holdScore').addEventListener('click', function () {
  if (playGame) {
    // Celkové score se vyplní současným score
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
    //
    document.getElementById('totalScorePlayer-' + activePlayer).textContent = totalScore[activePlayer];

    if (totalScore[activePlayer] >= 100) {
      document.getElementById('name-' + activePlayer).textContent = 'Vítěz! Vítěz!';
      document.querySelector('.diceImage').style.display = 'none';
      playGame = false;
    } else {
      nextPleyer();
    }
  }
});

document.querySelector('.newGame').addEventListener('click', newStart);



