// Выводим объектный тип
const objectType: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string
        address: {
            city: string
        }
    }
} = {
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

console.log(`In ${objectType.contacts.address.city} office №${objectType.officeId} is ${objectType.isOpened ? 'opened' : 'closed'}`);
