const button=document.querySelector(".btn");function toggleMenu(){const t=document.getElementsByTagName("ul")[0];button.classList.contains("btn-show")?(t.classList.add("header__nav-menu--active"),button.classList.replace("btn-show","btn-hidden")):(t.classList.remove("header__nav-menu--active"),button.classList.replace("btn-hidden","btn-show"))}button.addEventListener("click",toggleMenu);