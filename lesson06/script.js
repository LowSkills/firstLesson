let box = document.getElementById('box'), 
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';

btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';


let div = document.createElement('div');
let text = document.createTextNode('Тут был я');

div.classList.add("black"); 
document.body.appendChild(div); // добавить в конец
document.body.insertBefore(div, circle[0]); // заменить на
document.body.removeChild(circle[1]); // удалить элемент
document.body.replaceChild(heart[0], circle[0]); // заменить

div.textContent = 'Hello world'; 
