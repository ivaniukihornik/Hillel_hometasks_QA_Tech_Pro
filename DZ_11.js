/*ДЗ 11. Своя функція NaN

Опис ДЗ: Написати свою реалізацію функції isNaN.
*/
function customIsNaN(num) {
    return String(Number(num)) === `NaN` ? true: false
}

let data = `123`
console.log(`Результат: ` + customIsNaN(data));
console.log(`Перевірка: ` + isNaN(data));
