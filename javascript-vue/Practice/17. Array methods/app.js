/**
 * 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
 * каждый элемент которого будет хранить информацию о числе и его четности:
 * [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
 */

const arr1 = [1, 2, 3, 5, 8, 9, 10];
const result1 = arr1.map((item) => ({
    digit: item,
    odd: Boolean(item % 2 == 0)
}))
// console.table(result1);

/**
 * 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. 
 * Если да - вернуть true.
 */

const arr2 = [12, 4, 50, 1, 0, 18, 40];
const result2 = arr2.some((item) => item === 0);
// console.log(result2);

/**
 * 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
 */

const arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];
const result3 = arr3.some((item) => item.length > 3);
// console.log(result3);

/**
 * Дан массив объектов, где каждый объект содержит информацию о букве и месте её положении в строке {буква: “a”, позиция_в_предложении: 1}:

    [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

 */

const arr4 = [{
        char: "a",
        index: 12
    }, {
        char: "w",
        index: 8
    }, {
        char: "Y",
        index: 10
    }, {
        char: "p",
        index: 3
    }, {
        char: "p",
        index: 2
    },
    {
        char: "N",
        index: 6
    }, {
        char: " ",
        index: 5
    }, {
        char: "y",
        index: 4
    }, {
        char: "r",
        index: 13
    }, {
        char: "H",
        index: 0
    },
    {
        char: "e",
        index: 11
    }, {
        char: "a",
        index: 1
    }, {
        char: " ",
        index: 9
    }, {
        char: "!",
        index: 14
    }, {
        char: "e",
        index: 7
    }
];
const arrSort = arr4.sort((prev, next) => prev.index - next.index)
const result4 = arrSort.reduce((acc, current) => {
    return acc + current.char;
}, '')
// console.log(result4);

/**
 * 5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): 
 * [  [14, 45],  [1],  ['a', 'c', 'd']  ] 
 * → 
 * [ [1], [14, 45], ['a', 'c', 'd'] ]
 */

const arr5 = [
    [14, 45],
    [1],
    ['a', 'c', 'd']
];
const result5 = arr5.sort((prev, next) => prev.length - next.length);

// console.log(result5);

/**
 * 6. Есть массив объектов:
[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).
 */

const arr6 = [{
        cpu: 'intel',
        info: {
            cores: 2,
            сache: 3
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            сache: 4
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            сache: 1
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            сache: 2
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 4,
            сache: 2
        }
    }
];
const result6 = arr6.sort((prev, next) => prev.info.cores - next.info.cores)
// console.log(result6);

/**
 * 7. Создать функцию, которая будет принимать массив продуктов и две цены. 
 * Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
 * filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
 */

let products = [{
        title: 'prod1',
        price: 5.2
    }, {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15
    }, {
        title: 'prod4',
        price: 25
    },
    {
        title: 'prod5',
        price: 18.9
    }, {
        title: 'prod6',
        price: 8
    },
    {
        title: 'prod7',
        price: 19
    }, {
        title: 'prod8',
        price: 63
    }
];

function filterCollection(products, min, max) {
    let result = products.filter((item) => {
        return item.price >= min && item.price <= max
    })
    result = result.sort((prev, next) => prev.price - next.price)
    return result;
}
console.log(
    // filterCollection(products, 15, 30)
);


// Практические задания

/**
 * #1 
 * Создать функцию, которая принимат число n и возвращает массив, заполненный числами от 0 до n
 */

function getArray(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i)
    }
    return arr;
}

console.log(
    getArray(10)
);

/**
 * #2
 * Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
 */

function doubleArray(arr) {
    return arr.concat(arr);
}
doubleArray([1, 2, 3]) // [1,2,3,1,2,3]

/**
 * #3
 * Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
 * 
 * changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]
 * 
 * Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);
 */

function changeCollection() {
    let arrs = Array.prototype.slice.call(arguments);
    for (let i = 0; i < arrs.length; i++) {
        if(Array.isArray(arrs[i])){
            arrs[i].shift();
        }
    }
    return arrs;
}
console.log(
    // changeCollection([1,2,3],['a','b','c'])
)

/**
 * #4
 * Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле. 
 * Проверять что все аргументы переданы. 
 * Если что-то не переданно, то возвращать объект ошибки return new Error('Error message'). 
 * Возвращать новый массив с пользователями, соответсвующими указанным параметрам.
 */

const users = [
    {
        "_id": "5e36b779dc76fe3db02adc32",
        "balance": "$1,955.65",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Berg Zimmerman",
        "gender": "male"
    },
    {
        "_id": "5e36b779d117774176f90e0b",
        "balance": "$3,776.14",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Deann Winters",
        "gender": "female"
    },
    {
        "_id": "5e36b779daf6e455ec54cf45",
        "balance": "$3,424.84",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
    }
]

function filterUsers(arr, key, value) {
    // Проверка что все аргументы переданы
    if(arguments.length !== filterUsers.length) return new Error('Error message');

    let result = [];
    for(let i=0; i<arr.length; i++){
        if( arr[i][key] === value ){
            result.push(arr[i])
        }
    }
    return result;
}

console.log(
    // filterUsers(users, "age", 36)
)
