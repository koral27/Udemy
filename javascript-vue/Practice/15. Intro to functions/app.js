/**
 * #1
 * Функция должна принимать на вход любое кол-во чисел и возврощать их произведение
 */
function multiply() {
    const params = Array.prototype.slice.call(arguments);
    
    if (!params.length) return 0;

    return params.reduce(function (prev, next) {
        return prev * next;
    });
}

multiply(2, 4, 5, 6);
multiply();


/**
 * #2
 * Функция должна возращать переданные параметры в виде строки наоборот 
 */
function reverseString(str) {
    str = String(str);
    const result = str.split('').reverse('').join('');
    return result;
}

reverseString('test');
reverseString('');
reverseString(null);
reverseString(undefined);
reverseString();

/**
 * #3
 * Создать функцию, которая в качестве аргумента принимает строку из букв 
   и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
   charCodeAt
   trim
 */

function getCodeStringFromText(str) {
    str = String(str); 
    let result = str.split('');
    for(let i=0; i<result.length; i++){
        result[i] = str.charCodeAt(i); 
    }
    result = result.join(' ');
    return result;
}

getCodeStringFromText(null);

/**
 * #4
 * Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
 */

function guessTheNumber(num) {
    if(num & 0 < num && num < 10){
        const randomNum = Math.round( Math.random() * 10 );
        if(num === randomNum){
            return 'Вы выиграли';
        } else {
            return `“Вы не угадали ваше число ${num}, а выпало число ${randomNum}`;
        }
    }
    return Error();
}
console.log(
    guessTheNumber('fwd')
);
