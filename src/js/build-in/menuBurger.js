import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default function menuBurger() {
    const burger = document.querySelector('.header__burger')
    const menuBurger = document.querySelector('.menu-burger');
    const closeButton = document.querySelector('.menu-burger__close-button');

    burger.addEventListener('click', () => {
        menuBurger.classList.add('active');
        disableScroll();
    })

    closeButton.addEventListener('click', () => {
        menuBurger.classList.remove('active');
        enableScroll();
    })
}