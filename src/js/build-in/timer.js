export default function timer() {
    const timer = document.querySelector('.js-timer');
    if (!timer) return;

    let deadline = timer.dataset.deadline.split(':').map((item, index) => index === 1 ? item - 1 : item).reverse();
    deadline = new Date(...deadline);

    let timerId = null;

    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();

        if (diff <= 0) {
            clearInterval(timerId);
        }

        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // получаем элементы, содержащие компоненты даты
    const $days = timer.querySelector('.js-timer-days');
    const $hours = timer.querySelector('.js-timer-hours');
    const $minutes = timer.querySelector('.js-timer-minutes');
    const $seconds = timer.querySelector('.js-timer-seconds');

    // вызываем функцию countdownTimer
    countdownTimer();

    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);


    /*let mydata = document.querySelector('.intro__button-bottom-timer');
    if(mydata != null) {
        let maindate = mydata.dataset.date;

        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24);
            return {
                total: t,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }

        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                // days = timer.querySelector("#days"),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds');

                setInterval(updateClock, 1000);

            function updateClock() {
                const t = getTimeRemaining(endtime);
                // days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        setClock('.intro__button-bottom-timer', maindate);
    }*/
}
