let score = 0;
let clickPower = 1;
let upgradeCost = 10;

const balanceDisplay = document.getElementById("balance");
const clickBtn = document.getElementById("main-button");
const upgradeBtn = document.getElementById("upgrade-btn");
const costDisplay = document.getElementById("upgrade-cost");
const powerDisplay = document.getElementById("click-power");

clickBtn.addEventListener("click", () => {
  score += clickPower;
  updateUI();
});

upgradeBtn.addEventListener("click", () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    clickPower++;
    upgradeCost = Math.round(upgradeCost * 1.5);

    updateUI();
  } else {
    alert("Недостатньо BTC!");
  }
});

function updateUI() {
  balanceDisplay.innerText = score;
  costDisplay.innerText = upgradeCost;
  powerDisplay.innerText = clickPower;
}

const clickSound = new Audio("assets/click.mp3");
const buySound = new Audio("assets/buy.mp3");

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

clickBtn.addEventListener("click", () => {
  score += clickPower;
  playSound(clickSound);
  updateUI();
});

upgradeBtn.addEventListener("click", () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    clickPower++;
    upgradeCost = Math.round(upgradeCost * 1.5);

    playSound(buySound);
    updateUI();
  } else {
    alert("Недостатньо BTC!");
  }
});

function showFloatingNumber(x, y) {
  const number = document.createElement("span");
  number.innerText = `+${clickPower}`;
  number.className = "floating-number";

  number.style.left = `${x}px`;
  number.style.top = `${y}px`;

  document.body.appendChild(number);
  setTimeout(() => {
    number.remove();
  }, 1000);
}

clickBtn.addEventListener("click", (event) => {
  score += clickPower;
  showFloatingNumber(event.clientX, event.clientY);

  playSound(clickSound);
  updateUI();
});
