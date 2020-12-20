// let money, names, time, price;  


// function start() {
//     money = prompt("Ваш бюджет?");

//     while (isNaN(money) || money == "" || money == null) {
//         money = prompt("Ваш бюджет?");
//     };

//     names = prompt("Название магазина?");
//     time  = 21;
// };
// start();

// let mainList = {
//     budget: money,
//     ShopName: names,
//     shopGoods: [],
//     employers: {},
//     open: false,
//     discount: false
// };

// function discountPrice(i) {
    
// let a = confirm("Будет скидка?");
// if (a == true) {
//     console.log('Yes!' + i);
//     mainList.discount[i] = a;
// } else {
//     console.log('No!' + i);
//     mainList.discount[i] = a;
//     }    
// };

// function chooseGoods() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Какой тип товаров будем продавать?");    
        
//         if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
//             console.log('Всё верно!' + i);
//             discountPrice(i);
//             mainList.shopGoods[i] = a;
//         } else {
//             i = i - 1;
//         }
//     }
// };

// chooseGoods();

// function workTime(time){
//     if (time < 0) {
//         console.log('Такого времени не может быть');
//     } else if (time > 8 && time < 20) {
//         console.log('Время работать!');
//         } else if (time < 24) {
//             console.log('Уже слишком поздно');
//             } else {
//                 console.log('В сутках только 24 часа!');
//                 };
// };

// workTime(18);

// function BudgetDay() {
//     console.log(mainList.budget/30);
// };
// BudgetDay();

// function hireEmployers() {
//     let a = prompt("Имя сотрудника");
//     let b = prompt("Номер телефона?");
//     mainList.employers = a + b;

// };

// console.log(mainList);

let str = 'урок-3-был слишком легким';

function Up() {
    document.getElementById("main").innerHTML += str[0].toUpperCase().bold() + str.substring(1);
    let dubleStr = str.replace(new RegExp("-",'g')," ");
    document.getElementById("main").innerHTML += "<br>" + dubleStr;
    let assa = dubleStr.replace(new RegExp("легким",'g'),"");
    document.getElementById("main").innerHTML += "<br>" + assa.substring(0, assa.length - 3) + "o";
}   
Up();