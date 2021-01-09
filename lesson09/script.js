let box = document.querySelector('.box'),
    width = box.clientWidth,
    height = box.clientHeight,
    btn = document.getElementsByTagName('button')[0];

// увеличить блок до фулл выстоты
// btn.onclick = function () {
//     box.style.height = box.scrollHeight + 'px';
// }; 
 // опрделить сколько прокрутили
// btn.onclick = function () {
//     console.log(box.scrollTop);
// };

// console.log(width);
// console.log(height);

// console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
