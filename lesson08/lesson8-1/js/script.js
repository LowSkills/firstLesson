window.addEventListener('DOMContentLoaded', function() {
    // табы 
    let tab = document.getElementsByClassName('info-header-tab'),
    tabContent = document.getElementsByClassName('info-tabcontent'),
    info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for ( let i = a; i < tabContent.length; i++ ){
            tabContent[i].classList.remove('show');           
            tabContent[i].classList.add('hide');
            
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for ( let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        };
    });

    //timer

    let deadline = '2021-01-07 22:40:00 GMT+0300';// дата окончания + таймзона
    // Время сейчас от винды
    // var time = setInterval(function() {
    //     var date = new Date();
    //     console.log((date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()));
    //   }, 1000);

    
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        
        seconds = Math.floor( (t/1000)%60 ),
        minutes = Math.floor( (t/1000/60)%60 ),
        hours = Math.floor (( t / (1000 * 60 * 60)));
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock (id, endtime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

            function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.innerHTML = t.hours + "ч";
                minutes.innerHTML = t.minutes + "м";
                seconds.innerHTML = t.seconds+ "с";
                
                if (t.total <= 0){
                    clearInterval = setInterval(updateClock, 1000);
                }

            };

            
            updateClock();
            let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadline);

    //Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        
    more.addEventListener('click', function(){
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; //отключить скролл при вызове модального окна
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; //включение скролла после закрытия модального окна
    });

    // Form 
    let message = new Object();
    message.loading = "Загрузка...";
    message.success = "Спасибо! Скоро мы с вами свяжемся";
    message.failure = "Что-то пошло не так...";

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMassage = document.createElement('div');

    statusMassage.classList.add('status');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMassage);

        //Ajax

        let request = new XMLHttpRequest();
        request.open("POST", 'server.php');
        
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);
        
        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4){
                statusMassage.innerHTML = message.loading;
            } else if (request.readyState === 4){
                if (request.status == 200 && request.status < 300){
                    statusMassage.innerHTML = message.success;
                    //добавляем контент на страницу
                } else {
                    statusMassage.innerHTML = message.failure;
                }
            }
        }
        for ( let i = 0; i < input.length; i++){
            input[i].value = '';
            //Очищаем поля ввода
        }
    });

});