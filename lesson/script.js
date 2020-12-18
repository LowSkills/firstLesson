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

let money = prompt("Ваш бюджет на месяц?", '');
let names = prompt("Название магазина?", '');

let mainList = {
    Budget: money,
    MaGname: names,
    shopGoods: [],
    employers: {},
    open: true
};

for (let i = 0; i < 3; i++) {
    mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", '');
    console.log(mainList.shopGoods[i]);
};

let BudgetDay = mainList.Budget/30;
console.log(BudgetDay);

