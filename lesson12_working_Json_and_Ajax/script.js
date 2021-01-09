// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: "16px",
//         color: "#fff"
//     }
// }

// console.log(JSON.stringify(options))

// -------------------------------

let request = new XMLHttpRequest();
// 1) Создаем объект запроса

request.open("GET", 'server.php', true, login, password);

// 2) Настройка запроса
request.send()
// 3) Отпрвка запроса
request.status
request.statusText
request.responseText
request.readyState