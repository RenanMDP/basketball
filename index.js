const elements = {
  checkbox: getElement(`#checkbox`),
  mainWrapper: getElement(`.main-wrapper`),
  
};
const { checkbox, mainWrapper } = elements;

function getElement(element) {
  return document.querySelector(element);
}

// Give the ability to user to change dark/light mode
checkbox.addEventListener(`change`, () => {
  const prefersDarkTheme = window.matchMedia(`(prefers-color-scheme: dark)`);

  if (prefersDarkTheme.matches) {
    mainWrapper.classList.toggle(`light`);
  } else {
    mainWrapper.classList.toggle(`dark`);
  }
});


