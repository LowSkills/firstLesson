function ajax(){
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
};


module.exports = ajax;