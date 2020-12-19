// var first = 1;
// let second = 2;
// const pi = 3.14;


// obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }
// console.log(obj["name"]);

// var arr = ['plum', 'orange', 'apple'];
// console.log(arr[0]);


// //alert("hello");
// //confirm("are you?");

// var anser = +prompt("Вам есть 18?", "18");

// console.log( typeof(anser));

let money = prompt("Ваш бюджет на месяц?");
let names = prompt("Название магазина?");
let time  = 19;

let mainList = {
    Budget: money,
    MaGname: names,
    shopGoods: [],
    employers: {},
    open: true
};

for (let i = 0; i < 3; i++) {
    let a = prompt("Какой тип товаров будем продавать?");    
    
    if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50){
        console.log('Всё верно!');
        mainList.shopGoods[i] = a;
    } else {

    }
};

if (time < 0) {
    console.log('Такого времени не может быть');
} else if (time > 8 && time < 20) {
    console.log('Время работать!');
    } else if (time < 24) {
        console.log('Уже слишком поздно');
        } else {
            console.log('В сутках только 24 часа!');
            };

console.log(mainList.Budget/30);
console.log(mainList);

