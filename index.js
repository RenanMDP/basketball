const elements = {
  checkbox: getElement(`#checkbox`),
  mainWrapper: getElement(`.main-wrapper`),
  scoreboard: getElement(`.scoreboard-wrapper .points`, `all`),
  homeScore: getElement(`.scoreboard.home .score`),
  guestScore: getElement(`.scoreboard.guest .score`),
  newGame: getElement(`.newGame h1`)
};
const { checkbox, mainWrapper, homeScore, guestScore, scoreboard, newGame } =
  elements;

checkbox.addEventListener(`change`, toggleTheme);
scoreboard.forEach(item => {
  item.addEventListener(`click`, currentTarget);
});
newGame.addEventListener(`click`, resetScore);

// Get HTML element based on query
function getElement(element, type = `single`) {
  if (type === `single`) {
    return document.querySelector(element);
  } else if (type === `all`) {
    return document.querySelectorAll(element);
  }
}

// Give the ability to user to change dark/light mode
function toggleTheme() {
  const prefersDarkTheme = window.matchMedia(`(prefers-color-scheme: dark)`);

  if (prefersDarkTheme.matches) {
    mainWrapper.classList.toggle(`light`);
  } else {
    mainWrapper.classList.toggle(`dark`);
  }
}

// Detects which point was clicked and sums it to the current score
function currentTarget({ target }) {
  const targetPoint =
    !isNaN(target.dataset.point) && Number(target.dataset.point);
  const homeClass = target.closest(`.points.home`);
  const guestClass = target.closest(`.points.guest`);

  if (homeClass) {
    homeScore.textContent = Number(homeScore.textContent) + targetPoint;
  } else if (guestClass) {
    guestScore.textContent = Number(guestScore.textContent) + targetPoint;
  }
}

function resetScore() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
