// let options = {
//     name: "test",
//     width: 1024,
//     heigt: 1024
// }

// options.bool = false;
// options.colors = {
//     border: "black",
//     background: 'red'
// }

// delete options.bool;

// for (let key in options){
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// }

// let first = [];
// let i = prompt("","");
// first = i.split(",");
// first[99] = 99;
// console.log(first);

// let first = [1, 14, 325, 5, 3, 54];

// function sorfNumbers(a, b) {
//     return a - b;
// }

// let i = first.sort(sorfNumbers);

// console.log(i);

let solder = {
    health: 400,
    armor: 35
}

let john = {
    health: 100
}

john.__proto__ = solder;

console.log(john);
console.log(john.armor);


