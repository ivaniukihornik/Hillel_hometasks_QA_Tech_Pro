/*Опис ДЗ: Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. Зверніть увагу: не створювати новий масив, вже перемішаний, 
а саме перемішувати той, який їй передали.

Умови виконання ДЗ
1 Не використовувати функції або інші матеріали які ми не вивчали
2 Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки*/


function myBlend(arr) {
    let len = arr.length
    for (len; len > 0; len--) {
        let randomIndex = Math.round(Math.random()*(len-1))
        temp = arr[randomIndex]
        arr[randomIndex] = arr[len-1]
        arr[len-1] = temp
    }
    return arr
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(`Initial array is: ` + arr)
console.log(`Blended array is: ` + myBlend(arr))