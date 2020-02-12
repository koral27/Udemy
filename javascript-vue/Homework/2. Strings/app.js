/**
 * Дана строка: let string = "some test string";
 * 
 * ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ
 * 
 * Вопросы к заданию:
 * 
 */

let string = "some test string";

// Получить первую и последнюю буквы строки
let firstLetter = string.slice(0, 1);
let lastLetter = string.slice(-1);

// Сделать первую и последнюю буквы в верхнем регистре
firstLetter = firstLetter.toUpperCase();
lastLetter = lastLetter.toUpperCase();

// Найти положение слова ‘string’ в строке
let pos = string.indexOf('string') // 10

// Найти положение второго пробела (“вручную” ничего не считать)
let firstSpace = string.indexOf(' ') // 4
let secondSpace = string.indexOf(' ', firstSpace + 1) // 9

// Получить строку с 5-го символа длиной 4 буквы
console.log( string.substr(5, 4) ); // test

// Получить строку с 5-го по 9-й символы
console.log( string.slice(5, 9) ); // test

// Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6-ти символов)
let newString = string.slice(0, -6); // some test

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
const a = 20;
const b = 16;
string = a + '' + b; // или
string = String(a) + b

