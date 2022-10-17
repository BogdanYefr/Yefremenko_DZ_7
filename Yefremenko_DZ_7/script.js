//1
//let admin;
//let name = 'Bogdan';
//admin = name;
//alert(admin);

//2
/*Не свосем понял задание))
Отвечу так. JS - Регистрозависимый язык и если нужно использовать переменную либо константу уже ранее объявленную - то
нужно соблюдать такой же регистр. В целом большими буквами назвать костанту можно. Такие названия записываются большими буквами
как псевдонимы для сложно запоминаемых значений и слова соеденяются нижним подчеркиванием. Соответственно в предложенном
примере использовать большие буквы можно.*/

//3
//let name = "Ilya ";
//alert ( ` hello ${ 1 } ` );// Виведе hello 1.
//alert ( ` hello ${ "name " } ); // Тут взагалі нічого, код помилковий, немає закриваючої зворотньої лапки.
//alert ( ` hello ${ name } ` ); //  hello Ilya

//4
//"" + 1 + 0    // 10 (string)
//"" - 1 + 0    // -1 (number)
//true + false  // 1 (number)
//6 / "3"       // 2 (number) 
//"2" * "3"     // 6 (number)
//4 + 5 + "px"  // 9px (string)
//"$" + 4 + 5   // $45 (sring)
//"4" - 2       // 2 (number)
//"4px" - 2     // NaN
//7 / 0         // infinity
//" – 9 " + 5   // -95 (string)
//" – 9 " - 5   // NaN
//null + 1      // 1 (number)
//undefined + 1 // NaN

//5
//let a = 1, b = 1;
//let c = ++a; // 2 збільшує та повертає нове значення
//let d = b++; // 1 збільшує та повертає старе значення

//6
//let a = 2;
//let x = 1 + (a *= 2 ); // a = 4, x = 5

//7
//5 > 4                   //true
//"ананас" > "яблуко"     //false
//"2" > "12"              //true
//undefined == null       //true
//undefined === null      //false
//null == "\n0\n"         //false
//null === +"\n0\n "      //false

//8
//let name = prompt('What is your name?');
//alert(`Hello, ${name}!`);

//9
//if ("0") {
//  alert( ' Привіт'); //Так виведеться, тому, що у дужках не пустий рядок.
// }

//10
//let question = prompt('Яка «офіційна» назва JavaScript ?');

//if (question === 'ECMAScript') {
//  alert('Правильно!');
//} else {
//  alert('Не знаєте? ECMAScript!')
//}

//11
//let num = prompt('Введіть число!');

//if (num > 0) {
//  alert('1');
//} else if (num < 0) {
//  alert('-1');
//} else if (num == 0) {
//  alert('0');
//}

//12
//let result;

//if(a + b < 4) {
//result = ' Мало ';
//} else {
//result = 'Багато';
//}

//(a + b < 4) ? result = ' Мало ' : result = 'Багато';

//13
//let message;

//if (login == ' Співробітник') {
//message = ' Привіт ';
//} else if (login == 'Директор') {
//message = ' Добрий день! ';
//} else if (login == '') {
//message = 'Відсутній логін';
//} else {
//message = '';
//}

//(login == ' Співробітник') ?
//  message = ' Привіт ' :
//(login == 'Директор') ?
//  message = ' Добрий день! ' :
//(login == '') ?
//  message = 'Відсутній логін' :
//  message = '';

//14
//alert( null || 2 || undefined ); //2 (перше справжнє значення)

//15
//alert(alert (1) || 2 || alert(3)); // Виведе 1, потім 2 та зупиниться. Тому, що 2 - це перше true. А алерт зі значенням 1 відпрацює та поверне андефайнд, тому false.

//16
//alert(1 && null && 2); //Виведе null, це перше хибне значення.

//17
//alert(alert(1) && alert(2)); // Виконає перший алерт, виведе 1, але це хибне значення, друге теж хибне, та віведе його як останній хибний.

//18
//alert(null || 2 && 3 || 4 ); // Виведе 3. Тому, що для "або" перший тру це 2&&3, а "&&" поверне останнє, тобто 3.

//19
//if (age >= 14 && age <= 90);

//20
//if (age < 14 || age > 90);

//if (age != 14 && age < 14 || age != 90 && age > 90);

//21
//if (-1 || 0) alert( 'first'); //Виконується, -1 це перший тру
//if (-1 && 0) alert( 'second' ); //Не виконується, значення умови буде 0. Два різних числа не можуть буди одночасно тру.
//if (null || -1 && 1) alert('third' ); //Виконується, значення умов буде 1. (-1 && 1) поверне 1, а для "або" напевно ця одиниця буде як тру.

//22
//let login = prompt('Введіть логін');

//if (login === 'Адмін') {
//  let password = prompt('Введіть пароль');
//  if (password === 'Я головний') {
//    alert('Здрастуйте!');
//  } else if (password === '' || password === null) {
//    alert('Скасовано');
//  } else {
//    alert('Невірний пароль!');
//  }
//} else if (login === '' || login === null) {
//    alert('Скасовано');
//} else {
//    alert('Я Вас не знаю');
//}

//23
//if(browser == 'Edge') {
//  alert("You've got the Edge!");
//} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//  alert( 'Okay we support these browsers too' );
//} else {
//  alert( 'We hope that this page looks ok!' );
//}

//24
//let a = +prompt( 'a?', '');

//switch (a) {
//  case 0:
//    alert(0);
//break;
//  case 1:
//    alert(1);
//break;
//  case 2: 
//  case 3:
//    alert('2,3');
//}

//25
//let num;

//if (num > 0) {
//  num += 1;
//  alert(num);
//} else {
//  alert(num);
//}

//26
//let num;

//if (num > 0) {
//  num += 1;
//  alert(num);
//} else if (num < 0) {
//  num -= 2;
//  alert(num);
//}

//27
//let num = 0;
//let num2 = 10;

//if (num > 0) {
//  num += 1;
//  alert(num);
//} else if (num < 0) {
//  num -= 2;
//  alert(num);
//} else if (num === 0) {
//  num = num2;
//  alert(num);
//}

//28
//let num1 = -2;
//let num2 = 2;
//let num3 = 5;

//let count = 0;

//if (num1 > 0) {
//  count += 1;
//  if (num2 > 0) {
//    count += 1;
//} if (num3 > 0) {
//  count += 1;
//}
//} else if (num1 <= 0) {
//  count += 0;
//  if (num2 > 0) {
//    count += 1;
//} if (num3 > 0) {
//  count += 1;
//}
//}
//alert(count);

//29
//let num1 = 3;
//let num2 = -4;
//let num3 = 5;

//let countPlus = 0;
//let countMinus = 0;

//if (num1 > 0) {
//  countPlus += 1;
//} else if (num1 < 0) {
//  countMinus += 1;
//}

//if (num2 > 0) {
//  countPlus += 1;
//} else if (num2 < 0) {
//  countMinus += 1;
//}

//if (num3 > 0) {
//  countPlus += 1;
//} else if (num3 < 0) {
//  countMinus += 1;
//}
//alert(`Негативних ${countMinus}`);
//alert(`Позитивних ${countPlus}`);

//30
//let num1 = 1;
//let num2 = 2;

//if (num1 > num2) {
//  alert(num1);
//} else if (num1 < num2) {
//  alert(num2);
//} else {
//  alert('числа рівні')
//}

//31
//let num1 = 1;
//let num2 = 2;

//if (num1 < num2) {
//  alert(num1);
//} else if (num1 > num2) {
//  alert(num2);
//} else {
//  alert('числа рівні')
//}

//32
//let num1 = 5;
//let num2 = 2;

//if (num1 > num2) {
//  alert(num1);
//} else if (num1 < num2) {
//  alert(num2);
//} else {
//  alert('числа рівні')
//} if (num1 < num2) {
//  alert(num1);
//} else if (num1 > num2) {
//  alert(num2);
//} else {
//  alert('числа рівні')
//}

//33
//let A = 5;
//let B = 3;

//let temp;

//if (A > B) {
//  temp = A;
//  A = B;
//  B = temp;
//  alert(A);
//  alert(B);
//} else {
//  alert(A);
//  alert(B);
//}

//34
//let A = 2;
//let B = 3;

//let temp1 = 0;
//let temp2 = 0;

//if (A != B) {
//  temp1 = A + B;
//  A = temp1;
//  B = temp1;
//  alert(A);
//  alert(B);
//} else {
//  A = temp2;
//  B = temp2;
//  alert(A);
//  alert(B);
//}

//35
//let A = 2;
//let B = 3;

//let temp1 = 0;
//let zero = 0;

//36
//let num1 = 7;
//let num2 = 7;
//let num3 = 67;

//let result = 0;

//if (num1 <= num2) {
//  result = num1;
//} else {
//  result = num2;
//}
//if (num3 < result) {
//  result = num3;
//}
//alert(result);

//37
//let a = 2;
//let b = 5;
//let c = 4;

//if ((b < a && a < c) || (c < a && a < b)) {
//  alert(a);
//} 
//if ((a < b && b < c) || (c < b && b < a )) {
//  alert(b);
//} 
//if ((a < c && c < b) || (b < c && c < a)) {
//  alert(c);
//} 

//38
//let a = 1;
//let b = 2;
//let c = 3;

//if (a <= b && a <= c) {
//  alert(`Найменьше ${a}`);
//} 
//if (b <= a && b <= c) {
//  alert(`Найменьше ${b}`);
//} 
//if (c <= a && c <= b) {
//  alert(`Найменьше ${c}`);
//} 

//if (a >= b && a >= c) {
//  alert(`Найбільше ${a}`);
//} 
//if (b >= a && b >= c) {
//  alert(`Найбільше ${b}`);
//} 
//if (c >= a && c >= b) {
//  alert(`Найбільше ${c}`);
//} 

//39
//let a = 3;
//let b = 4;
//let c = 4;

//let sum = 0;

//if (a < b && a < c) {
//  sum += b + c;
//  alert(`Сума двох найбільших ${sum}`);
//}
//if (b < a && b < c) {
//  sum += a + c;
//  alert(`Сума двох найбільших ${sum}`);
//}
//if (c < b && c < a) {
//  sum += a + b;
//  alert(`Сума двох найбільших ${sum}`);
//}

//40
//let a = 4;
//let b = 3;
//let c = 4;

//if (a < b && a < c) {
//  alert(`Число відмінне від інших ${a}`);
//}
//if (b < a && b < c) {
//  alert(`Число відмінне від інших ${b}`);
//}
//if (c < b && c < a) {
//  alert(`Число відмінне від інших ${c}`);
//}




















  
  

