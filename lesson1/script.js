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

var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
function getWeekDay(date) {
    date = date || new Date();
    var day = date.getDay();
    return days[day];
};

var date = new Date();
for ( let i = 0; i < 7; i++ ) {
    if (i == 0 || i == 6) {
        document.getElementById("main").innerHTML += "<br>" + days[i].bold();
    } else if (getWeekDay(date) == days[i] && (i == 0 || i == 6)) {
        document.getElementById("main").innerHTML += "<br>" + getWeekDay(date).italics().bold();
        } else {
            document.getElementById("main").innerHTML += "<br>" + days[i];
            };
    
};
// for ( let i = 0; i < 7; i++) {
//     let a = days[i];
//     if ( a == "Воскресенье" || a == "Суббота") {
//     document.getElementById("main").innerHTML += '\n'+ a;
//     } else if (a == getWeekDay(date)){
//         let as = a.bold();
//         document.getElementById("main").innerHTML += as;
//         } else {
//             document.getElementById("main").innerHTML += '\n' + a;
//             }
    
    
// }