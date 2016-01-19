// ../../bower_components/jquery/dist/jquery.js
// загрузка свг-спрайта в локарсторейдж
// partials/svgCash.js

'use strict';

var data = [1, 2, 3, null, , undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53, , function () { }, {}, 'd', [], 15, 55, 4, 47];
var descrip = [
	'Очищающая сыворотка',
	'Крем ночной, придающий сияние, 50 мл',
	'Сыворотка с эффектом лифтинга Lumene Time Freeze, 30 мл',
	'С эффектом моментального лифтинга для облассти вокруг глаз Time Freeze',
	'Придающий сияние для склонной к сухости коже Bright New Vitamin C, 30мл',
	'Крем для умывания очищающий деликатный Sensitive Touch, 150 мл',
	'Крем для умывания очищающий освежающий Bright Touch, 150 мл',
	'30 мл',
	'Очищающая сыворотка',
	'Крем ночной, придающий сияние, 50-250 мл',
	'Сыворотка с эффектом лифтинга Lumene Time Freeze, 30 мл',
	'С эффектом моментального лифтинга для облассти вокруг глаз Time Freeze',
	'Очищающая сыворотка',
	'Крем ночной, придающий сияние, 50-250 мл',
	'Сыворотка с эффектом лифтинга Lumene Time Freeze, 30 мл',
	'С эффектом моментального лифтинга для облассти вокруг глаз Time Freeze',
	'Очищающая сыворотка',
	'Крем ночной, придающий сияние, 50-250 мл',
	'Сыворотка с эффектом лифтинга Lumene Time Freeze, 30 мл',
	'С эффектом моментального лифтинга для облассти вокруг глаз Time Freeze',
	'Очищающая сыворотка',
	'Крем ночной, придающий сияние, 50-250 мл',
	'Сыворотка с эффектом лифтинга Lumene Time Freeze, 30 мл',
	'С эффектом моментального лифтинга для облассти вокруг глаз Time Freeze'
];
var exter = build(data);

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function build(arr) {
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		obj[i] = [];
		obj[i].img = 'img/item_'+(i+1)+'.png';
		obj[i].desc = descrip[i];
		obj[i].counter = i + 1;
		obj[i].name = elementCheck(arr[i]);
		obj[i].indexVisibility = '';

		switch (typeof(arr[i])) {
			case 'string':
				obj[i].indexVisibility = 'item__index--visible';
				break;
			case 'function':
				obj[i].indexVisibility = 'item__index--visible';
				break;
		}
	}

	return obj;
}

function elementCheck(elem) {
	switch(typeof(elem)) {

		// если неопределен
		case 'undefined':
			return 'element is undefined';

		// если число
		case 'number':
			if ((elem % 3 === 0) && (elem % 5 === 0)) {
				return'FizzBuzz';
			} else if (elem % 3 === 0) {
				return 'Fizz';
			} else if (elem % 5 === 0) {
				return 'Buzz';
			} else {
				return elem;
			}
			
		// если строка
		case 'string':
			if (elem === '') {
				return 'string is empty';
			} else {
				return elem;
			}

		// если тру/фолс
		case 'boolean':
			return elem;

		// если функция
		case 'function':
			return 'element is a function';

		// если объект, null или массив
		case 'object':
			if (elem === null) {
				return 'element is null';
			} else if (Array.isArray(elem)) {
				return 'element is an array';
			} else {
				return 'element is an object';
			}
	}
}
var insert;
var elemCounter = 0;
for (var elem in exter) {
	elemCounter++;
	if (elemCounter < 13) {
		insert = document.getElementById('insert');
	} else {
		insert = document.getElementById('secondInsert')
	}
	var item = document.createElement('did');
	item.className = 'col-md-4 col-lg-3 col-xl-2';
	item.innerHTML = '<div class="item" data-id='+ exter[elem].counter +'><div class="item__holder"></div><div class="item__face"><img src="'+exter[elem].img+'" alt="изображение товара" class="item__img"/>	<div class="item__index '+exter[elem].indexVisibility+'">'+exter[elem].counter+'</div></div><h3 class="item__title">'+exter[elem].name+'</h3><p class="item__desc">'+exter[elem].desc+'</p><button class="item__buy" onclick=\'addToCart(this)\'>Добавить</button></div>';
	insert.appendChild(item);
}

function addToCart(prop) {
	var a = prop.parentNode;
	a.querySelectorAll('.item__index')[0].classList.add('see');
	console.log(a.getAttribute('data-id'));
}