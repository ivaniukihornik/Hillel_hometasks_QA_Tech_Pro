/*ДЗ 14. Сума вартості послуг

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};

"Послуги" можуть додаватися по ходу роботи:
services['Розбити скло'] = "200 грн";

Умови виконання ДЗ
1 створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
2 створити метод minPrice() - який повертає мінімальний price
3 створити метод maxPrice() - який повертає максимальний price
*/
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price() {
        let sum = 0;
        for(let service in this) {
            if(typeof(this[service]) != `function`) sum += parseInt(this[service])
        }
        return `${sum} грн`;
    },

    minPrice() {
        let minPrice = 9999;
        for (let service in services) {
            let serviceValue = parseInt(services[service])
            if(serviceValue < minPrice) minPrice = serviceValue
        }

        resultObj = {};
        for (let service in this) {
            if(parseInt(this[service]) == minPrice) {
                resultObj[service] = minPrice;
            } 
        }

        return resultObj
    },

    maxPrice() {
        let maxPrice = 0;
        for (let service in services) {
            let serviceValue = parseInt(services[service])
            if(serviceValue > maxPrice) maxPrice = serviceValue
        } 

        resultObj = {};
        for (let service in this) {
            if(parseInt(this[service]) == maxPrice) {
                resultObj[service] = maxPrice;
            } 
        }

        return resultObj
    }
};

console.log(`Загальна ціна послуг: ${services.price()}`)

console.log(`Мінімальна ціна послуг: `)
for(i in services.minPrice()) {
    console.log(`\t${i} - ${services.minPrice()[i]}`)
}

console.log(`Максимальна ціна послуг: `)
for(i in services.maxPrice()) {
    console.log(`\t${i} - ${services.maxPrice()[i]}`)
}
