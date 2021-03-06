// 1. Чему равно а, почему?

let a = 0 || 'string'; 
// a равно 'string', т.к. оператор ИЛИ ищет совпадение на true, а 0 в булевом представлении это false

let a = 1 && 'string';
// а равно 'string', т.к. оператор И ищет совпадение с false и не находит его, возравщая в таком случае последний операнд

let a = null || 25;
// а равно 25, т.к. null это false, a 25 - true

let a = null && 25;
// a равно null, т.к. оператор ищет false и находит его в null

let a = null || 0 || 35;
// a равно 35, т.к. оператор ИЛИ ищет true, и вданном случае он находит число 35

let a = null && 0 && 35;
// a равно null, т.к. оператор И ищет первый попавшийся false, и вданном случае первым он находит null


// 2. Что отобразится в консоли. Почему?

12 + 14 + '12'
// 2612 - сначала складывается два числа 12 + 14 = 26, потом идет сложение со строкой, в этом случае соседние операнды приводятся к строке и значения конкатенируются

3 + 2 - '1'
// 4 - сначала складывается два числа, потом когда вычитается строка, она приводится к числовому типу и получается выражение 5 - 1 = 4

'3' + 2 - 1
// 31 - сначала идет сложение числа со строкой, поэтому число приводится к строке '3' + '2' = '32', потом при вычитании строка приводится к числовому типу: 32 - 1 = 31

true + 2
// 3 - при сложении с булевыми значениями они приводятся к числовому типу (false = 0, true = 1). Соответсвенно получается 1 + 2 = 3

+ '10' + 1
// 11 - строка '10' приводится к числу из-за стоящего перед ней знака +, потом идет простое сложение

undefined + 2
// NaN - любые вычисления с undefined дадут NaN

null + 5
// 5 - null приравнивается к 0, далее 0 + 5 = 5

true + undefined
// NaN - любые вычисления с undefined дадут NaN

// 3. Создать произвольную переменную, присвоить ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let b = 'hidden';
if (b === 'hidden') {
    b = 'visible';
} else {
    b = 'hidden';
}

// 4. Создать переменную и присвоить ей число.
//    Используя if, записать условие:
//    - если переменная равна нулю, присвоить ей 1;
//    - если меньше нуля - строку “less then zero”;
//    - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let c = 1;

if (c === 0) {
    c = 1;
} else if (c < 0) {
    c = 'less then zero';
} else {
    c *= 10;
}

// 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

// 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};
if (item.discount && item.discount != '') {
    item.priceWithDiscount = parseInt(item.price) * (100 - parseInt(item.discount)) / 100;
    console.log(`Цена со скидкой: ${item.priceWithDiscount} долларов`);
} else if (!item.discount) {
    console.log(`Цена без скидки: ${item.price} долларов`);
}

// 7. Дан следующий код:
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
    name: 'Яблоко',
    price: '10 $'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if( parseInt(product.price) >= min && parseInt(product.price) <= max ){
    console.log(product.name);
} else {
    console.log('Товаров не найдено');
}
