// Выводим объектный тип
var objectType = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
console.log("In ".concat(objectType.contacts.address.city, " office \u2116").concat(objectType.officeId, " is ").concat(objectType.isOpened ? 'opened' : 'closed'));
