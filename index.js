'use strict';

const fillArray = (arr, size) => { // Наполнение массива случайными числами
	for (let i = 0; i < size; i++) {
		const arrItem = Math.round(Math.random() * 10 + 1);
		arr.push(arrItem);
	}
};

/**
 * Task #1
 *
 * Создать массив из 10 случайных чисел и написать несколько
 * функций для работы с ним.
 *
 */

const array = [];

fillArray(array, 10);

// 1. Функция принимает массив и выводит его на экран.

/**
 *
 * @param arr
 */
const getArrItems = arr => {
	console.log(`Array: ${arr}`);
};
console.group();
getArrItems(array);
console.groupEnd();

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

getEvenItems(array);

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
};

getSumOfItems(array);

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
};

getMaxItem(array);

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
};

addNewItem(array, 25, 3);

// 6. Функция удаления элемента из массива по указанному индексу.

/**
 *
 * @param arr
 * @param {number} index
 */
const removeItem = (arr, index) => {
	arr.splice(index, 1);
	console.log(`Array with removed item: ${arr}`);
};

removeItem(array, 3);

/**
 * Task #2
 *
 * Создать еще один массив из 5 случайных чисел и написать следующие функции.
 *
 */

const array2 = [];

fillArray(array2, 5);

console.group();
console.log(`Array 1: ${array}`);
console.log(`Array 2: ${array2}`);
console.groupEnd();

/*
	1. Функция принимает 2 массива и возвращает новый массив,
	в котором собраны все элементы из двух массивов без повторений.
*/

/**
 *
 * @param arr1
 * @param arr2
 * @returns {array}
 */
const combineArrays = (arr1, arr2) => {
	return arr1.concat(arr2);
};

console.log(`Combined arrays: ${combineArrays(array, array2)}`);

/*
	2. Функция принимает 2 массива и возвращает новый массив,
	в котором собраны общие элементы (то есть элементы, которые
	встречаются и в первом и во втором массивах) без повторений.
*/

/**
 *
 * @param arr1
 * @param arr2
 * @returns {array}
 */
const combineArrays2 = (arr1, arr2) => {
	const newArr = [];
	arr1.forEach(item => {
		if (arr2.includes(item) && !newArr.includes(item)) {
			newArr.push(item);
		}
	});
	return newArr;
};

console.log(`v2 Combined arrays: ${combineArrays2(array, array2)}`);

/*
	3. Функция принимает 2 массива и возвращает новый массив,
	в котором собраны все элементы из первого массива, которых нет во втором массиве.
*/

/**
 *
 * @param arr1
 * @param arr2
 * @returns {array}
 */
const combineArrays3 = (arr1, arr2) => {
	const newArr = [];
	arr1.forEach(item => {
		if (!arr2.includes(item)) {
			newArr.push(item);
		}
	});
	return newArr;
};

console.log(`v3 Combined arrays: ${combineArrays3(array, array2)}`);