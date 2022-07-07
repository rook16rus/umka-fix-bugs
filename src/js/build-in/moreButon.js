export default function moreButon() {
    if(window.matchMedia('(min-width: 789px)').matches) return;

    const whySection = document.querySelector('.why');
    if (!why) return;

    const items = document.querySelectorAll('.why__item');
    const button = document.querySelector('.why__button');
    const count = document.querySelector('#count');
    const visibleItemsCount = 4;
    console.log(items);

    count.innerHTML = items.length - 4 + '';

    items.forEach((item, index) => {
        if (index > 3) item.style.display = 'none';
    })

    button.addEventListener('click', function () {
        button.style.display = 'none';

        items.forEach((item, index) => {
            if (index > 3) item.style.display = 'flex';
        })
    });
}
