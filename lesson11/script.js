// let names = "Ivan",
//     age = 30,
//     mail = 'ex@ya.ru';

// // document.write("Пользователь " + names + ' ' + age + ' лет. Его почтовый адрес ' + mail);

// document.write(`Пользователь ${names} ${age} лет. Его почтовый адрес ${mail}`);


// function makeArray() {

//     let items = [];

//     for( let i = 0; i < 10; i++ ){
//         let item = function() {
//             console.log(i);
//         }

//         items.push(item);
//     }

//     return items;
// };

// let arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();


// --------------------------------

// let fun = () => {
//     console.log(this);
// }

// fun();

// -------------------------------------


// let obj = {
//     number: 5,
//     sayNumber: function () {
//         let say = () => {
//             console.log(this)
//         }
//         say();
//     }
// }

// obj.sayNumber();

// ---------------------------------------

// let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', function () {
//     let show = () => {
//         console.log(this);
//     }
//     show();
// });

// -------------------------------

// function calcOrDouble( number, basic = 2) {
//     console.log(number * basic);
// }

// calcOrDouble(3);

// ------------------------------


// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 15);

// console.log(square.calcArea());

//-----------------------------------
// Добавление нового элемента на экран.
var elem = document.createElement("div");

elem.style.cssText = `height: 200px; 
    width: 200px; 
    background-color: red;
    font-size: 20px; 
    text-align: center;`;

document.body.appendChild(elem); 

class NewDiv {
    constructor(height, width, bg,  fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDiv(){
        for( let i = 0; i < 5; i++){
            var elemDiv = document.createElement("div");
            elemDiv.style.cssText = `
            height: ${this.height}px; 
            width: ${this.width}px; 
            background-color: ${this.bg};
            font-size: ${this.fontSize}px; 
            text-align: ${this.textAlign};
            margin-bottom: 10px`;

            document.body.appendChild(elemDiv);
        }
    }
}

let asd = new NewDiv(200, 200, "blue", 20, "center");
asd.newDiv();



