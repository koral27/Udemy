//  Map - перебирает массив и выполняет операцию с элементами и возвращает новый массив
const arr1 = ['a', 'b', 'c'];

// const arr2 = arr1.map(function(item){
//     return item.toUpperCase();
// })

const arr2 = arr1.map(item => item.toUpperCase());

// console.log(arr2);

// Filter - перебирает элементы массива с проверкой на условие, выполняет операцию с элементами и возвращает новый массив
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];

const fullAge = persons.filter(function(person){
    return person.age >= 18
});
//   const fullAge = persons.filter(person => person.age >= 18);
// console.log(fullAge);

// Reduce - аккумулирует элементы массива в одно значение
const arrForReduce = [5, 5, 5, 5];

const arrReduce = arrForReduce.reduce(function(prev, current){return prev + current});
// console.log(arrReduce);



function fnFirst(arr, fn){
    let returnValue = [];
    for(let i = 0; i < arr.length; i++){
        returnValue.push(fn(arr[i]));
    }
    returnValue.join('-');
    console.log(returnValue);
    return `New value: ${returnValue}`
}
function fnToUpperCase(item){
    return item.toUpperCase();
}
function fn10(item){
    return item * 10;
}

// console.log(fnFirst(['my', 'name', 'is', 'Trinity'], fnToUpperCase));
// console.log(fnFirst(['10', '20', '30', '40'], fn10));



function every(arr, func){
    if( arr.length !== 0 && typeof func === 'function' ){
        for(let i=0; i<arr.length; i++){
            return func(arr[i]);
        }
    } else {
        return false;
    }
}
function check(elem){
    return elem >= 5
}

// console.log( every([6,9,7], check) )
