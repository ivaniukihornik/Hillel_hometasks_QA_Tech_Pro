/*ДЗ 12. Теорія ймовірності

Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде 
воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде 
генеруватися випадкове число.

Умови виконання ДЗ

Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних:
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
*/
function checkProbabilityTheory(count) {
    let counter = 0;
    let countOfEvenNumbers = 0;
    let countOfOddNumbers = 0;

    while(counter < count) {
        randomNumber = Math.round(100 + Math.random() * 900);
        randomNumber % 2 === 0 ? countOfEvenNumbers += 1 : countOfOddNumbers += 1;
        counter++;
    }

    let evenNumbersPercentage = Math.round(countOfEvenNumbers / count * 100);
    let evenToOddPercentage = String(evenNumbersPercentage) + `%/` + String(100 - evenNumbersPercentage) + `%`

    return {count, countOfEvenNumbers, countOfOddNumbers, evenToOddPercentage}
}

let result = checkProbabilityTheory(100);
console.log(`Кількість згенерованих чисел: ${result.count}\nКількість парних чисел: ${result.countOfEvenNumbers}\nКількість непарних чисел: ${result.countOfOddNumbers}\nСпіввідношення парних до непарних: ${result.evenToOddPercentage}`)
