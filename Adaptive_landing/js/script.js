const button = document.querySelector(".menu_button");
button.addEventListener("click", showMenu);

function showMenu() {
      const menu = document.getElementsByTagName('ul')[0];
       menu.classList.toggle('active');


}
