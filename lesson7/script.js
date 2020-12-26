let btn = document.getElementsByTagName('button');
let overlay = document.querySelector('.overlay');
let link = document.getElementsByTagName('a');


link[0].addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + " на элемент " + event.target);
});


btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + " на элемент " + event.target);
});

overlay.addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + " на элемент " + event.target);
});


btn[2].addEventListener('mouseenter', function(event) {
    console.log('Произошло событие: ' + event.type + " на элемент " + event.target);
});




// btn[0].onclick = function() {
//     alert('Вы нажали первую кнопку!');
// }

// btn[0].onclick = function() {
//     alert('Вы опять нажали первую кнопку!');
// }

// btn[0].addEventListener('click', function() {
//     alert('Вы нажали первую кнопку!');
// });

// btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали первую кнопку!');
// });

// btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали первую кнопку!');
// });

// btn[1].addEventListener('mouseenter', function() {
//     console.log('Вы опять нажали первую кнопку!');
// });

// btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали первую кнопку!');
// });

// btn[1].addEventListener('mouseleave', function() {
//     console.log('Вы опять нажали первую кнопку!');
// });

