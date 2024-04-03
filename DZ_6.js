/*ДЗ 6. Кратність чисел

Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.
*/
let sumOfDigits = 0

for (number = 1; number <= 100; number++) {
    if (number % 3 != 0) {
        sumOfDigits += number
    }
}
console.log(`Сума чисел від 1 до 100, не кратних 3: ${sumOfDigits}`)
