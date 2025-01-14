// Your code goes here
let navClick = document.querySelector('header div');
navClick.addEventListener('mouseover', (e) => {
  e.target.style.color = 'blue';

  setTimeout(() => {
    e.target.style.color = "";
  }, 500)
});

navClick.addEventListener('click', (e) => {
  e.target.style.color = 'red';
  e.preventDefault();
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

let buttons = document.querySelectorAll('.btn');

buttons.forEach(item => {
  item.addEventListener('mouseover', (e) => {
    e.target.textContent = "Onto the FUN BUS!";
    e.target.style.color = "darkslategray";
  })
});

buttons.forEach(item => {
  item.addEventListener('mouseout', (e) => {
    e.target.textContent = "Sign Me Up!";
    e.target.style.color = "white";
  })
});

buttons.forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.textContent = "Thank you!"
    e.target.style.color = 'red';
  })
});

window.addEventListener('scroll', () => {
  navClick.style.backgroundColor = 'gainsboro';
});

let img = document.querySelector('.home .intro img');
window.addEventListener('resize', () => {
  img.style.display = 'none';
});

img.addEventListener('dblclick', event => {
  console.log(event);
  event.target.style.visibility = 'hidden';
});

window.addEventListener('keypress', () => {
  alert('We believe your hand is resting on your keyboard');
});

window.addEventListener('copy', (event) => {
  event.preventDefault();
  alert('We have a strong policy against content thieves.');
});