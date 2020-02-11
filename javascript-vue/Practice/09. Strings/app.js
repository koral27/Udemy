let string = 'some test string';
// 1. Получить первую и последнюю буквы строки

let firstChar = string[0];
let lastChar = string[string.length-1]

// 2. Сделать первую и последнюю буквы в верхнем регистре

firstChar = firstChar.toUpperCase();
lastChar = firstChar.toUpperCase();

// 3. Найти положение слова ‘string’ в строке

let pos = string.indexOf('string');

// 4. Найти положение второго пробела (“вручную” ничего не считать)

let firstSpace = string.indexOf(' ')
let secondSpace = string.indexOf(' ', firstSpace+1)

// 5. Получить строку с 5-го символа длиной 4 буквы

let substr = string.substr(5,4)

// 6. Получить строку с 5-го по 9-й символы

let substr2 = string.slice(5,9)

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)

let substr3 = string.slice(-6);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”

let a = 20;
let b = 16;
string = '' + 20 + 16
