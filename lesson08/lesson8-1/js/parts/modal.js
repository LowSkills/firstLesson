function modals(){
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
    
};

module.exports = modals;
