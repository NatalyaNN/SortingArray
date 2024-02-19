"use strict";

let min = Number(process.argv[2]);
let max = Number(process.argv[3]);
let arrLength = Number(process.argv[4]);

let arr = randomArr(min, max, arrLength);

console.log(`Исходный массив: ${arr.join("; ")}`);

quicksort(arr);

console.log(`Отсортированный массив: ${arr.join("; ")}`);

function random(min, max) {
   let randNum = min + Math.random() * (max - min);
   return +randNum.toFixed(3);
}

function randomArr(min, max, arrLength) {
   let arr = [];

   for (let i = 0; i < arrLength; i++) {
      arr.push(random(min, max));
   }
   return arr;
}

function partition(items, left, right, pivot) {
   while (true) {
      while (items[left] < pivot) {
         left += 1;
      }

      while (items[right] > pivot) {
         right -= 1;
      }

      if (left >= right) {
         return right + 1;
      }

      const temporary = items[left];
      items[left] = items[right];
      items[right] = temporary;

      left += 1;
      right -= 1;
   }
}

function sort (items, left, right) {
   const length = right - left + 1;

   if (length < 2) {
      return;
   }

   const pivot = items[left];

   const splitIndex = partition(items, left, right, pivot);
   sort(items, left, splitIndex - 1);
   sort(items, splitIndex, right);
}

function quicksort (items) {
   sort(items, 0, items.length - 1);
}