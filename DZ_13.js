/* ДЗ 13. Робота з обьектом

Опис ДЗ: Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі 
властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей 
до об'єкта.

Наприклад так:
obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
*/
let footballerRonaldo = {
    name: `Cristiano Ronaldo`,
    pac: 94, // Pace (or speed)
    sho: 98, // Shoot
    pas: 85, // Pass
    dri: 95, // Dribbling
    def: 34, // Defence 
    phy: 98, // Physics

    getInfo() {
        for(let property in this) {
            if(String(typeof(this[property])) != `function`) console.log(`${property}: ${this[property]}`)
        }
    },
}
