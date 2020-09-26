const powerStrikeMaxValue = 10;
const superForceStrikeMinValue = 11;
const superForceStrikeMaxValue = 20;

let currentStep = 1;

const $powerStrikeBtn = document.getElementById('power-strike');
const $superForceStrikeBtn = document.getElementById('super-force-trike');
const $restartGameBtn = document.getElementById('restart-game');
const $currentStep = document.getElementById('current-step');

const character = document.querySelector('.character');
const enemy = document.querySelector('.enemy');

const pokemon1 = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
};

const pokemon2 = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
};

$powerStrikeBtn.addEventListener('click', function () {
  changeHP(random(1, powerStrikeMaxValue), pokemon1, character);
  changeHP(random(1, powerStrikeMaxValue), pokemon2, enemy);

  $restartGameBtn.disabled = false;
  changeStep();
  $superForceStrikeBtn.disabled = currentStep !== 5
});

$superForceStrikeBtn.addEventListener('click', function () {
  changeHP(random(superForceStrikeMinValue, superForceStrikeMaxValue), pokemon1, character);
  changeHP(random(superForceStrikeMinValue, superForceStrikeMaxValue), pokemon2, enemy);

  $superForceStrikeBtn.disabled = true;
  changeStep();
});

$restartGameBtn.addEventListener('click', function () {
  pokemon1.damageHP = 100;
  pokemon2.damageHP = 100;

  renderHP(pokemon1);
  renderHP(pokemon2);

  clearStep();
  $powerStrikeBtn.disabled = false;
  $superForceStrikeBtn.disabled = true;
  character.classList.remove('pokemon_lost');
  enemy.classList.remove('pokemon_lost');
});

function init() {
  renderHP(pokemon1);
  renderHP(pokemon2);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = `${person.damageHP} / ${person.defaultHP}`;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = `${person.damageHP}%`;
}

function changeHP(count, person, element) {
  if (person.damageHP < count) {
    person.damageHP = 0;

    element.classList.add('pokemon_lost');
    alert(`Бедный ${person.name} проиграл бой!`);

    $powerStrikeBtn.disabled = true;
    $superForceStrikeBtn.disabled = true;
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(min, max) {
  const value = min + Math.random() * (max + 1 - min);
  return Math.floor(value);
}

function changeStep() {
  currentStep++;
  $currentStep.innerText = currentStep;
}

function clearStep() {
  currentStep = 1;
  $currentStep.innerText = '1';
}

init();
