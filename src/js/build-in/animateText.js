export default function animateText() {
    if(document.querySelector('.main-title') !== null ) {
      const title          = document.querySelector('.main-title'),
            titleVideo     = document.querySelectorAll('.overview__video-description span'),
            titleConfig    = document.querySelector('.configure-poster__text'),
            titleUmka      = document.querySelector('.configure__title'),
            titleWhy       = document.querySelector('.why__expert-title'),
            titleGet       = document.querySelector('.expert__expert-title'),
            titleMedia     = document.querySelector('.gallery__wrapper'),
            titleCharacter = document.querySelector('.characters__title'),
            titleReview    = document.querySelector('.reviews__inner-wrapper'),
            titleOrder     = document.querySelector('.order__inner-content-wrapper'),
            titleCenter    = document.querySelector('.all__title'),
            titlePlant     = document.querySelector('.plant__title'),
            titleContact   = document.querySelector('.callback__content-container__first'),
            header         = document.querySelector('.header'),
            tabsAnimate    = document.querySelector('.intro-slider'),
            videoBlock     = document.querySelector('.overview__inner'),
            characterBtn   = document.querySelectorAll('.characters__button')
            
        window.addEventListener('DOMContentLoaded', () => {
            title.classList.add('animateTextWhite')
            header.classList.add('active')
            setTimeout(() => {
                tabsAnimate.classList.add('active')
            }, 2300);

            if(window.innerWidth < 1024) {
                characterBtn.forEach(btn => {
                    btn.classList.add('disableHover')
                })
            }
        })

        window.addEventListener('scroll', () => {
            if(titleVideo[0].getBoundingClientRect().y <= 900) {
                videoBlock.classList.add('active')
                setTimeout(() => {
                    titleVideo.forEach(item=> {
                        item.classList.add('animateTextWhite')
                    })
                }, 2000);
            }
            if(titleConfig.getBoundingClientRect().y <= 800) {
                titleConfig.querySelectorAll('span')[0].classList.add('animateTextBlack')
                titleConfig.querySelectorAll('span')[1].classList.add('animateTextBlue')
            }
            if(titleUmka.getBoundingClientRect().y <= 650) {
                titleUmka.classList.add('animateTextWhite')
            }
            if(titleWhy.getBoundingClientRect().y <= 730) {
                titleWhy.classList.add('animateTextBlack')
            }
            if(titleGet.getBoundingClientRect().y <= 790) {
                titleGet.classList.add('animateTextWhite')
            }
            if(titleMedia.getBoundingClientRect().y <= 750) {
                titleMedia.classList.add('animateTextBlack')
            }
            if(titleCharacter.getBoundingClientRect().y <= 750) {
                titleCharacter.classList.add('animateTextBlack')
            }
            if(titleReview.getBoundingClientRect().y <= 720){
                titleReview.classList.add('animateTextBlack')
            }
            if(titleOrder.getBoundingClientRect().y <= 690) {
                titleOrder.classList.add('animateTextWhite')
            }
            if(titleCenter.getBoundingClientRect().y <= 690) {
                titleCenter.classList.add('animateTextBlack')
            }
            if(titlePlant.getBoundingClientRect().y <= 680) {
                titlePlant.classList.add('animateTextBlack')
            }
            if(titleContact.getBoundingClientRect().y <= 780) {
                titleContact.classList.add('animateTextWhite')
            }
        })
    }  else {
        document.querySelector('.header').classList.add('active')
        document.querySelector('.callback__content-container__first h2').classList.add('animateTextWhite')
    } 
}

