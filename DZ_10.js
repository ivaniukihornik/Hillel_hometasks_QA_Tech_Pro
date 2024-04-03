/*ДЗ 10. Свій padEnd/padStart

Опис ДЗ: Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true),
яка приймає чотири аргументи:

1 рядок, до якого буде додаватися символ.
2 символ, який буде додаватися.
3 Скільки додавати символів
4 булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.

Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6,
то додаєте тільки один символ
*/
function customPadEndPadStard (row, symbol, symbolsCount, position) {
    let rowLength = row.length

    if (rowLength >= symbolsCount) return row

    if (position) {
        return (symbol.repeat(symbolsCount).substr(0, symbolsCount-rowLength) + row);
    }

    return (row + symbol.repeat(symbolsCount)).substr(0, symbolsCount);
}

let string = '123';
let symbol = 'qwe';
let len = 8;
let pos = true;

console.log(`Результат: ` + customPadEndPadStard(string, symbol, len, pos))
pos ? console.log(`Перевірка: ` + string.padStart(len, symbol)) : console.log(`Перевірка: ` + string.padEnd(len, symbol))
