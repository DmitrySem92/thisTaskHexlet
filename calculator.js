const readlineSync = require('readline-sync');

const calculator = {
    read: function() {
        this.a = parseFloat(readlineSync.question('Введите число: '));
        this.b = parseFloat(readlineSync.question('Введите второе число: '));
    },
    sum: function() {
        if (this.a === undefined || this.b === undefined) {
            console.log('Что бы выполнить операцию, сначала введите числа с помощью метода read().');
            return;
        }
        return this.a + this.b;
    },
    mul: function() {
        if (this.a === undefined || this.b === undefined) {
            console.log('Что бы выполнить операцию, сначала введите числа с помощью метода read().');
            return;
        }
        return this.a * this.b;
    },
};

module.exports = calculator;