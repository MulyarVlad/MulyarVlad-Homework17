// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function countArr() {

let arr = ['a', 3, 'b', 41, 'c', 6, 'd', 7, 34, 'mom', 'dad'];

let sum = 0;

let count = 0;

for (let i = 0; i <= arr.length; i++) {
    if (!isNaN(arr[i])) {
        count += 1;
        sum += countArr[i];
    }
    console.log(count);
}
return count;

}

let result = countArr();
console.log(result);