const menuBtn = document.querySelector('.menu-btn');
const sideDrawer = document.getElementById('side-drawer');
const closeBtn = document.querySelector('.close-btn');
const closespan = document.querySelector('.close-btn-span');
menuBtn.addEventListener('click', () => {
  sideDrawer.classList.add('show-side-drawer');
});
closeBtn.addEventListener('click', () => {
  sideDrawer.classList.remove('show-side-drawer');
});
closeBtn.addEventListener('mouseover', () => {
  closespan.classList.add('show-close-span');
});
closeBtn.addEventListener('mouseout', () => {
  closespan.classList.remove('show-close-span');
});
