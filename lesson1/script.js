// let num = '33721';
// let end = 0;

// for (let i = 0; i < num.length ; i++ )
// {    
//     if ( i == 0 ) {
//         end = num[0];        
//     } else {
//         end *= num[i];
//         }
//     console.log(end);

// }

// console.log(Math.pow(end, 3));
// let x = 5;
// console.log(x++);//6
// console.log('------------');
// console.log([] + false - null + true); //all index
// console.log('------------');
// let y = 1;
// let r = y = 2;
// console.log(r); //2
// console.log('------------');
// console.log([] + 1 + 2); //4
// console.log('------------');
// console.log("1"[0]);
// console.log('------------');
// console.log(2 && 1 && null && 0 && undefined);
// console.log('------------');
// console.log(null || 2 && 3 || 4 );
// console.log('------------');
// let a = [1, 2, 3]; let b = [1, 2, 3]; 
// console.log(a == b);
// console.log('------------');
// console.log(+"Infinity");
// console.log('------------');
// console.log("ёжик" > "яблоко");
// console.log('------------');
// console.log(0 || "" || 2 || undefined || true || falsе);
// console.log('------------');

// var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// function getWeekDay(date) {
//     date = date || new Date();
//     var day = date.getDay();
//     return days[day];
// };

// var date = new Date();
// for ( let i = 0; i < 7; i++ ) {
//     if (i == 0 || i == 6) {
//         document.getElementById("main").innerHTML += "<br>" + days[i].bold();
//     } else if (getWeekDay(date) == days[i] && (i == 0 || i == 6)) {
//         document.getElementById("main").innerHTML += "<br>" + getWeekDay(date).italics().bold();
//         } else {
//             document.getElementById("main").innerHTML += "<br>" + days[i];
//             };
    
// };
var arr = [];
for ( let i = 0; i < 7; i++) {
    arr[i] = Math.floor(Math.random()*(999 - 100 + 1) + 100);
    console.log(arr[i]);
    let str = arr[i].toString();    
    if (str[0] == '3' || str[0] == '7') {   
        console.log(str);
    };
};