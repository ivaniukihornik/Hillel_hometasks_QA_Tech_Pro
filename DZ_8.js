/*ДЗ 8. Скільки тобі років ?

Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".

Умови виконання ДЗ

1 Рік отримувати через prompt()
2 Зробити перевірку що користувачь ввів число та це число не є відємним
3 Не використовувати функції або інші матеріали які ми не вивчали
4 Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки.
 */

do {
    let age = Number(prompt('Будь ласка, введіть ваш вік: '));
    if (isNaN(age)) {
        console.log(`Ви ввели не число!`);
        continue;
    };
    if (age < 0) {
        console.log(`Ви ввели від\'ємне число!`);
        continue;
    };
    if (age > 130) {
        console.log(`Вітаємо! Ви - вже мертві`);
        break;
    }
    let lastDigitOfAge = age % 10;
    let lastTwoDigitsOfAge = age % 100;
    switch(lastDigitOfAge) {
        case 1: {
            if(lastTwoDigitsOfAge >= 10 && lastTwoDigitsOfAge <= 20) {
                console.log(`Вам ${age} років`);
                    break;
            }
            console.log(`Вам ${age} рік`);
            break;
        }
        case 2:
        case 3:
        case 4:
            console.log(`Вам ${age} роки`);
            break;
        default:
            console.log(`Вам ${age} років`);
            break;
    }
    break;
} while (true);