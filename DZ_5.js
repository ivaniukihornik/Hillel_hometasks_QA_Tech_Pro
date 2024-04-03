/*ДЗ 5. Ялинка

Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): 
на першому рядку - одна зірочка, на другій дві, і так далі. Рішення оформіть у вигляді функції, куди передаються два параметри: 
висота трикутника та символ, яким його потрібно "малювати".

Приклад:
drawTriangle(5, *);
*/

function drawTriangleFirstMethod(height, symbol) {
    let heightNumber = Number(height);
    let symbolString = String(symbol);
    if (isNaN(heightNumber) || (heightNumber < 1 && heightNumber > 100) || Math.floor(heightNumber) != heightNumber) {
        if (symbolString.length != 1) {
            console.log(`Будь ласка, передайте ціле число від 1 до 100 і одиничний символ.`);
            return;
        }
        console.log(`Будь ласка, передайте ціле число від 1 до 100.`);
        return;
    }
    if (symbolString.length != 1) {
        console.log(`Будь ласка, передайте одиничний символ.`);
        return;
    }
    let rowSymbols = 1;
    while (rowSymbols <= heightNumber) {
        console.log(symbolString.repeat(rowSymbols))
        rowSymbols++;
    }
}

function drawTriangleSecondMethod(height, symbol) {
    let heightNumber = Number(height);
    let symbolString = String(symbol);
    if (isNaN(heightNumber) || (heightNumber < 1 && heightNumber > 100) || Math.floor(heightNumber) != heightNumber) {
        if (symbolString.length != 1) {
            console.log(`Будь ласка, передайте ціле число від 1 до 100 і одиничний символ.`);
            return;
        }
        console.log(`Будь ласка, передайте ціле число від 1 до 100.`);
        return;
    }
    if (symbolString.length != 1) {
        console.log(`Будь ласка, передайте одиничний символ.`);
        return;
    }
    for (rowSymbols = 1; rowSymbols <= heightNumber; rowSymbols++) {
        console.log(symbolString.repeat(rowSymbols))
    }
}

drawTriangleFirstMethod(100, `*`)
drawTriangleSecondMethod('8', 0)