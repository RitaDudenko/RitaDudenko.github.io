const button = document.querySelector(".btn");
button.addEventListener("click", toggleMenu);


function toggleMenu() {
    const menu = document.getElementsByTagName('ul')[0];
    if (button.classList.contains('btn-show')) {
        menu.classList.add('header__nav-menu--active');
        button.classList.replace("btn-show", "btn-hidden");
    } else {
        menu.classList.remove('header__nav-menu--active');
        button.classList.replace("btn-hidden", "btn-show");
    }
}
