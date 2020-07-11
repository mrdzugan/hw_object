'use strict';

/**
 * Task #1
 *
 * Создать массив из 10 случайных чисел и написать несколько
 * функций для работы с ним.
 *
 */

const arr = [];

for (let i = 0; i < 10; i++) {
	const arrItem = Math.round(Math.random() * 10 + 1);
	arr.push(arrItem);
}

// 1. Функция принимает массив и выводит его на экран.
/**
 *
 * @param arr
 */
const getArrItems = arr => {
	console.log(arr);
};

getArrItems(`Array: ${arr}`);

// 2. Функция принимает массив и выводит только четные элементы.
/**
 *
 * @param arr
 */
const getEvenItems = arr => {
	const newArr = [];
	arr.forEach(item => {
		if (item % 2 === 0) {
			newArr.push(item);
		}
	});
	console.log(`Even elements: ${newArr}`);
};

getEvenItems(arr);

// 3. Функция принимает массив и возвращает сумму всех элементов массива.
/**
 *
 * @param arr
 */
const getSumOfItems = arr => {
	let sum = 0;
	arr.forEach(item => {
		sum += item;
	});
	console.log(`Sum = ${sum}`);
}

getSumOfItems(arr);

// 4. Функция принимает массив и возвращает его максимальный элемент.
/**
 *
 * @param arr
 */
const getMaxItem = arr => {
	let max = 0;
	arr.forEach(item => {
		if (item > max) {
			max = item;
		}
	});
	console.log(`Max value = ${max}`);
}
getMaxItem(arr);

// 5. Функция добавления нового элемента в массив по указанному индексу.
/**
 *
 * @param arr
 * @param item
 * @param {number} index
 */
const addNewItem = (arr, item, index) => {
	arr.splice(index, 0, item);
	console.log(`Array with new value '${item}': ${arr}`);
}

addNewItem(arr, 25, 3);

// 6. Функция удаления элемента из массива по указанному индексу.
/**
 *
 * @param arr
 * @param {number} index
 */
const removeItem = (arr, index) => {
	arr.splice(index, 1);
	console.log(`Array with removed item: ${arr}`);
}

removeItem(arr, 3);