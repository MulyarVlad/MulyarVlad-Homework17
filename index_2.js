// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function arrAdd() {
    const amount = +prompt("Enter the amount of the elements in the first massive");
    const arr = [];

    for (let i = 0; i < amount; i++) {
        arr.push([]);
    }

    for (let i = 0; i < amount; i++) {
        let secondAmount = +prompt("Enter the amount of elements in " + (i + 1) + "the massive");
        for (let i = 0; i < secondAmount; i++){
            arr[i].push([]);
        }
    }
    console.log(arr);   
}

let functionResult = arrAdd();