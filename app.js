// 1. Напишите функцию, которая в цикле выводит числа от 0 до 50.

function box(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

box(50);

// 2. Напишите функцию, которая в цикле выводит числа от 50 до 0.

function box(num) {
  for (let i = 50; i >= num; i--) {
    console.log(i);
  }
}

box(0);

/* 3. Дан массив с элементами 2, 5, 9, 15, 0, 4 . С помощью цикла for  и оператора if
 выведите на консоль столбец тех элементов массива, которые больше 2-х , но меньше 5 */

let listArr = [2, 5, 9, 0, 4];

for (let i = 0; i < listArr.length; i++) {
  if (listArr[i] > 2 && listArr[i] < 5) {
    console.log(listArr[i]);
  }
}
