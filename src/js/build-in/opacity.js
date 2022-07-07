import app from './media';

export default window.onload = function opacity() {
    if (document.querySelector('.media')) {
        var box = document.getElementsByClassName('card');

        if (!box) return;

        var btn = document.getElementById('loadMore');
        for (let i = 18; i < box.length; i++) {
            box[i].classList.add('hide');
        }

        var countD = 10;
        btn.addEventListener('click', function () {
            var box = document.getElementsByClassName('card');
            countD += 10;
            if (countD <= box.length) {
                for (let i = 0; i < countD; i++) {
                    box[i].classList.add('show');
                    box[i].classList.remove('hide');
                }

                for (let i = 0; i < box.length; i++) {
                    box[i].classList.contains('show');
                }
                btn.style.display = 'none';
                // app();
                // opacity();
            }
        });

        const filterBtns = document.querySelectorAll('.media__filter-btn');

        for (let j = 0; j < box.length; j++) {
            document.querySelector('.btn_type_img').addEventListener('click', function () {
                btn.style.display = 'none';

                filterBtns.forEach(item => {
                    item.classList.remove('active')
                })
                this.classList.add('active')

                if (box[j].classList.contains('video')) {
                    box[j].classList.remove('show');
                    box[j].classList.add('hide');
                }
            });

            document.querySelector('.btn_type_video').addEventListener('click', function () {
                btn.style.display = 'none';

                filterBtns.forEach(item => {
                    item.classList.remove('active')
                })
                this.classList.add('active')

                if (box[j].classList.contains('images')) {
                    box[j].classList.remove('show');
                    box[j].classList.add('hide');
                }
            });
        }
    }
};
