'use strict'

// 1.1

let Tc = 25;
let Tf = (9 / 5) * Tc + 32;

console.log(Tf);

//1.2

let name = "Василий";
let admin = name;

console.log(admin);

//1.3

/*
1. 10 плюс 10 получаем 20
2. 20 плюс "10" получаем "2010"
3. "2010" присваиваем в переменную result1
4. с помощью console.log выводим result1 в консоль
*/

let result1 = 10 + 10 + "10";
console.log(result1);


/*
1. 10 плюс "10" получаем "1010"
2. "1010" плюс 10 получаем "101010"
3. "101010" присваиваем в переменную result2
4. с помощью console.log выводим result2 в консоль
*/
let result2 = 10 + "10" + 10;
console.log(result2);

/*
1. +"10" преобразуем в число 10 
2. 10 плюс 10 получаем 20
3. 20 плюс 10 получаем 30
4. 30 присваиваем в переменную result3
5. с помощью console.log выводим result3 в консоль
*/
let result3 = 10 + 10 + +"10";
console.log(result3);

/*
1. -"" преобразуем в число -0
2. 10 разделить на -0 получаем -Infinity
3. -Infinity присваиваем в переменную result4
4. с помощью console.log выводим result4 в консоль
*/
let result4 = 10 / -"";
console.log(result4);

/*
1. +"2,5" преобразуется в NaN 
2. 10 разделить на NaN получаем NaN
3. NaN присваиваем в переменную result5
4. с помощью console.log выводим result5 в консоль
*/
let result5 = 10 / +"2,5";
console.log(result5);