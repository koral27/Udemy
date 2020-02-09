// 1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color

const device = {
    product: 'iphone'
}

device.price = 1000;
device.currency = 'dollar';
device.details = {};
device.details.model = 5;
device.details.color = 'red';

console.log(device);

// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
