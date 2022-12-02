// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

a = new Array();
do {
    elementCount = +prompt("Введите количество чисел");
} while (isNaN(elementCount));

console.log(elementCount);

for(i = 0; i < elementCount; i++) {
    a[i] = +prompt("Введите число");
    a.push();
}
document.write(`<p>Новый массив: ${a}</p>`);

for (let i = 0, endI = a.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (a[j] > a[j + 1]) {
            [a[j], a[j + 1]] = [a[j + 1], a[j]];
            wasSwap = true;
        };
    }
    if (!wasSwap) break;
}

document.write(`<p>Отсортированный массив по возростанию: ${a}</p>`);
console.log(a.splice(2, 3));
document.write(`<p>Измененный массив: ${a}</p>`);


