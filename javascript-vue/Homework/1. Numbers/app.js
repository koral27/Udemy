// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
const pi = Number(Math.PI.toFixed(2));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log( Math.min(15, 11, 16, 12, 51, 12, 13, 51) )
console.log( Math.max(15, 11, 16, 12, 51, 12, 13, 51) )

// 3. Работа с Math.random:
//      a. Получить случайное число и округлить его до двух цифр после запятой

const random = Number(Math.random().toFixed(2));

//      b. Получить случайное целое число от 0 до X. X - любое произвольное число.
var max = 1000;
var x = Math.floor(Math.random() * Math.floor(max));
console.log(x)
console.log( Math.floor( ( Math.random() * x ) ) )

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

console.log( (0.6 + 0.7).toFixed(1) )

// 5. Получить число из строки ‘100$’

console.log(parseInt('100$'))
