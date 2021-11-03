'use strict'

//1 задание

//пример 1
let a = 1, b = 1, c, d;
c = ++a; //сначала ++a = 1, затем с = с + а = 2
alert(c); // ответ: 2

//пример 2

d = b++; // сначала d = b = 1, затем b++ = 2
alert(d); //ответ: 1

//пример 3

c = 2 + ++a; // cначала ++a = 3, затем с = 2 + a = 5
alert(c); //ответ: 5

//пример 4

d = 2 + b++; // cначала d = 2 + 2 = 4, затем b++ = 3;
alert(d); //ответ: 4

alert(a); //3
alert(b); //3

// 2 задание

let a = 2;
let x = 1 + (a *= 2);

// 1 + (a*=2) => 1 + (a = a * 2) => 1 + 4 => 5

// 3 задание

let a = 4, b = 4;

function fun(a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    }
    else if (a < 0 && b < 0) {
        return a * b;
    }
    else if (a * b < 0) {
        return a + b;
    }
}

console.log(fun(a, b));

//4 задание

let sum = (a, b) => a + b;
let min = (a, b) => a - b;
let div = (a, b) => a / b;
let mult = (a, b) => a * b;

// 5 задание

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'sum':
            return sum(a, b);
            break;
        case 'min':
            return min(a, b);
            break;
        case 'div':
            return div(a, b);
            break;
        case 'mult':
            return mult(a, b);
            break;
    }
}

console.log(mathOperation(3, 5, 'sum'));


