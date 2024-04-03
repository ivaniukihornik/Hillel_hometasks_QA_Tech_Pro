/* ДЗ 7. Написати функцію pow

Опис ДЗ: Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.

Наприклад pow(2,3) функція поверне значення 8.
*/
function powCustom(x, y) {
    xNumber = Number(x);
    yNumber = Number(y);
    
    if (isNaN(xNumber) || isNaN(yNumber)) return `Будь ласка, передайте 2 числа.`;

    return xNumber ** yNumber;
}

console.log(powCustom(2, 3));
