// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         alert("hello " + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     alert("Пользователь " + this.name + " ушёл");
// }


// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// 1 Просто вызов функции - windows / underfined
// 2 Метод - this = объект
// 3 конструктор (new) = this = созданный объект
// 4 Указывание конктректного контекств - Call, Apply, bind
// let user = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// };

// console.log(sayName.call(user, ' Smith'));
// console.log(sayName.apply(user, [' Snow']));



// Удваивание (bind)
// function count(number) {
//     return this * number;
// };

// let double = count.bind(3);

// console.log(double(3));
// console.log(double(10));

let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function() {
    //this.style.backgroundColor = 'red'; присвоить цвет
    console.log(this)
})

// // ivan.hello();
// // alex.hello();

// ivan.exit();

// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return this.a + this.b
//     }
//     console.log(sum());
// };

// showThis(4, 5);
// // showThis(5, 5);

// let obj  = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }

// obj.sum();

