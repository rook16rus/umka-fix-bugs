import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default function menuBurger() {
    const burger = document.querySelector('.header__burger')
    const menuBurger = document.querySelector('.menu-burger');
    const closeButton = document.querySelector('.menu-burger__close-button');
    const twinkLogo = document.querySelector('.header.twink .header__logo');

    burger.addEventListener('click', () => {
        menuBurger.classList.add('active');
        disableScroll();

        if (twinkLogo) {
            twinkLogo.style.color = '#fff'
        }
    })

    closeButton.addEventListener('click', () => {
        menuBurger.classList.remove('active');
        enableScroll();

        if (twinkLogo) {
            twinkLogo.style.color = '#1B74E3'
        }
    })
}