//Создать функцию, которая убирает из строчки все символы, которые мы передали вторым аргументом.
//    'func("hello world", ['l', 'd'])' вернет нам "heo wor". Выходную строку и символы для удаления
//    задает пользователь.

const userFrase = prompt('Write: "Hello world"')

function replace_string(string, pattern) {

    let strPatt = pattern.join('');

    return string.replace(new RegExp(`[${strPatt}]`, 'gi'), '')

}

console.log(replace_string('Hello world', ['l', 'd']))