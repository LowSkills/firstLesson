let money, names, time, price;  


function start() {
    money = prompt("Ваш бюджет?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?", "");
    };

    names = prompt("Название магазина?", "").toUpperCase();
    time  = 21;
};
//start();

let mainList = {
    budget: money,
    ShopName: names,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Какой тип товаров будем продавать?", "");    
            
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
                console.log('Всё верно!' + i);
                discountPrice(i);
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    },
    workTime: function workTime(time){
        if (time < 0) {
            console.log('Такого времени не может быть');
        } else if (time > 8 && time < 20) {
            console.log('Время работать!');
            mainList.open = true;
            } else if (time < 24) {
                console.log('Уже слишком поздно');
                } else {
                    console.log('В сутках только 24 часа!');
                    }
    },
    dayBudget: function dayBudget() {
        console.log("Ежедневный бюджет " + mainList.budget / 30);
    },

    makediscount: function makediscount() {
        if (mainList.discount == true) {
            price = (price / 100) * 80;
        }
    },
    hireEmployers: function hireEmployers() {
        for ( let i = 0; i < 4; i++) {
            let name = prompt("Имя сотрудника ", "");        
            mainList.employers[i] = name;
        }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt("Перечислите ваши товары через запятую", "");

        mainList.shopItems = items.split(",");
        mainList.shopItems.push(prompt("Продолжить ещё?", ""));
        mainList.shopItems.sort();
    }
};

console.log(mainList);