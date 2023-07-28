// These get the first element of the respective class.
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarItems = document.getElementsByClassName('nav-items')[0];

toggleButton.onclick = () => {
  // This hides the menu if it is visible and vice versa.
  navbarItems.classList.toggle('active');
};