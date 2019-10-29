// Your code goes here
let navClick = document.querySelector('header div');
navClick.addEventListener('mouseover', (e) => {
  e.target.style.color = 'blue';

  setTimeout(() => {
    e.target.style.color = "";
  }, 500)
});

window.addEventListener('keydown', () => {
  confirm('Is it okay if we send your key logs to NSA?');
});

window.addEventListener('load', () => {
  let text = "";
  if (navigator.cookieEnabled) {
    text = "Cookies Enabled darling, NSA can read your traffic log!";
  } else {
    text = "Google cannot track you now!";
  }
  alert(text);
});