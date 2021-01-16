function timer(){ 
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
};


module.exports = timer;