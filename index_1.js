// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {

    if (!isNaN(x) && !isNaN(y)) {
        switch (znak) {
            case "+" :
                console.log(x + y);
                break

            case "-" :
                console.log(x - y);
                break

            case "*" :
                console.log(x * y);
                break

            case "/" :
                console.log(x / y);
                break

            case "%" :
                console.log(x % y);
                break

            case "^" :
                console.log(x ^ y);
                break

            default:
                console.log(`Znak ${znak} is not find!`);
        }

    } else {
        console.log("You haven't put a number");
    }

}

let x = +prompt('Enter number')
let znak = prompt('Enter znak')
let y = +prompt('Enter number')

doMath(x, znak, y);