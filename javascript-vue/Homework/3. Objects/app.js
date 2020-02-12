/**
 * Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
 * 
 * Вопросы к этому заданию:
 * 
 */

//  Создать объект с полем product, равным ‘iphone’
let obj = {
    product: 'iphone'
};

// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

obj.price = 1000;
obj.currency = 'dollar';

// Добавить поле details, которое будет содержать объект с полями model и color

obj.details = {};
obj.details.model = 'X';
obj.details.color = 'white';

console.log(obj);
