// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         alert(`Имя пользователя: ${this.name}, возвраст: ${userAge}`);    
//     }

//     this.getAge = function() {
//         return userAge
//     }

//     this.setAge = function(age) {
//         if( typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('недопустимое значение');
//         }
//     }

// }

// let Ivan = new User("Ivan", 19);
// console.log(Ivan.name);
// console.log(Ivan.getAge());
// Ivan.setAge(23);
// console.log(Ivan.getAge());

// Ivan.say();



// ===============================
//Модули


// let number = 1;

// (function(){

//     let number = 2;
//     console.log(number);

//     return console.log(number+3);
// }())

// console.log(number);


let user = (function(){
    // приватные функции
    let privet = function() {
        console.log('I.m privet')
    };
    
    let sayHello =  function() {
        console.log('Hello')
    };
    // инициализация в глабоальную
    return {
        sayHello: sayHello,
        privet: privet
    }
        
}());

console.log(user.privet());
