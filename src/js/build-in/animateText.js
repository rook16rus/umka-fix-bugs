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
            header         = document.querySelector('.header'),
            tabsAnimate    = document.querySelector('.intro-slider'),
            videoBlock     = document.querySelector('.overview__inner'),
            characterBtn   = document.querySelectorAll('.characters__button');
            
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

        if (matchMedia('(max-height: 900px)').matches) {
            window.addEventListener('scroll', () => {
                if(titleVideo && titleVideo[0].getBoundingClientRect().y <= 900) {
                    videoBlock.classList.add('active')
                    setTimeout(() => {
                        titleVideo.forEach(item=> {
                            item.classList.add('animateTextWhite')
                        })
                    }, 2000);
                }
                if(titleConfig && titleConfig.getBoundingClientRect().y <= 800) {
                    titleConfig.querySelectorAll('span')[0].classList.add('animateTextBlack')
                    titleConfig.querySelectorAll('span')[1].classList.add('animateTextBlue')
                }
                if(titleUmka && titleUmka.getBoundingClientRect().y <= 650) {
                    titleUmka.classList.add('animateTextWhite')
                }
                if(titleWhy && titleWhy.getBoundingClientRect().y <= 730) {
                    titleWhy.classList.add('animateTextBlack')
                }
                if(titleGet && titleGet.getBoundingClientRect().y <= 790) {
                    titleGet.classList.add('animateTextWhite')
                }
                if(titleMedia && titleMedia.getBoundingClientRect().y <= 750) {
                    titleMedia.classList.add('animateTextBlack')
                }
                if(titleCharacter && titleCharacter.getBoundingClientRect().y <= 750) {
                    titleCharacter.classList.add('animateTextBlack')
                }
                if(titleReview && titleReview.getBoundingClientRect().y <= 720){
                    titleReview.classList.add('animateTextBlack')
                }
                if(titleOrder && titleOrder.getBoundingClientRect().y <= 690) {
                    titleOrder.classList.add('animateTextWhite')
                }
                if(titleCenter && titleCenter.getBoundingClientRect().y <= 690) {
                    titleCenter.classList.add('animateTextBlack')
                }
                if(titlePlant && titlePlant.getBoundingClientRect().y <= 680) {
                    titlePlant.classList.add('animateTextBlack')
                }
            })
        } else {
            window.addEventListener('scroll', () => {
                if(titleVideo && titleVideo[0].getBoundingClientRect().y <= 1200) {
                    videoBlock.classList.add('active')
                    setTimeout(() => {
                        titleVideo.forEach(item=> {
                            item.classList.add('animateTextWhite')
                        })
                    }, 2000);
                }
                if(titleConfig && titleConfig.getBoundingClientRect().y <= 1250) {
                    titleConfig.querySelectorAll('span')[0].classList.add('animateTextBlack')
                    titleConfig.querySelectorAll('span')[1].classList.add('animateTextBlue')
                }
                if(titleUmka && titleUmka.getBoundingClientRect().y <= 1250) {
                    titleUmka.classList.add('animateTextWhite')
                }
                if(titleWhy && titleWhy.getBoundingClientRect().y <= 1250) {
                    titleWhy.classList.add('animateTextBlack')
                }
                if(titleGet && titleGet.getBoundingClientRect().y <= 1250) {
                    titleGet.classList.add('animateTextWhite')
                }
                if(titleMedia && titleMedia.getBoundingClientRect().y <= 1250) {
                    titleMedia.classList.add('animateTextBlack')
                }
                if(titleCharacter && titleCharacter.getBoundingClientRect().y <= 1250) {
                    titleCharacter.classList.add('animateTextBlack')
                }
                if(titleReview && titleReview.getBoundingClientRect().y <= 1250){
                    titleReview.classList.add('animateTextBlack')
                }
                if(titleOrder && titleOrder.getBoundingClientRect().y <= 1250) {
                    titleOrder.classList.add('animateTextWhite')
                }
                if(titleCenter && titleCenter.getBoundingClientRect().y <= 1250) {
                    titleCenter.classList.add('animateTextBlack')
                }
                if(titlePlant && titlePlant.getBoundingClientRect().y <= 1250) {
                    titlePlant.classList.add('animateTextBlack')
                }
            })
        }


    }  else {
        document.querySelector('.header').classList.add('active')
        document.querySelector('.callback__content-container__first h2') ? document.querySelector('.callback__content-container__first h2').classList.add('animateTextWhite') : null;
    } 
}

