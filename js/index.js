// Your code goes here
let navClick = document.querySelector('header div');
navClick.addEventListener('mouseover', (e) => {
  e.target.style.color = 'blue';

  setTimeout(() => {
    e.target.style.color = "";
  }, 500)
});