// ../../bower_components/jquery/dist/jquery.js
// загрузка свг-спрайта в локарсторейдж
// partials/svgCash.js

'use strict';

var	data = [1, 2, 3, null, , undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53, , function () { }, {}, 'd', [], 15, 55, 4, 47],
		descrip = [
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
		],
		exter = buildObject(data);

function buildObject(arr) {
	var obj = {};

	// перебор заданного массива
	for (var i = 0; i < arr.length; i++) {
		obj[i] = [];
		obj[i].img = 'img/item_'+(i+1)+'.png';
		obj[i].desc = descrip[i];
		obj[i].counter = i + 1;
		obj[i].name = elementCheck(arr[i]);
		obj[i].indexVisibility = '';

		// для функции и строки добаляется красный квадрат с жирным id
		switch (typeof(arr[i])) {
			case 'string':
				obj[i].indexVisibility = '<div class="item__index">'+(i + 1)+'</div>';
				break;
			case 'function':
				obj[i].indexVisibility = '<div class="item__index">'+(i + 1)+'</div>';
				break;
		}
	}

	return obj;
}

// проверка элемента
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

		// если булевая
		case 'boolean':
			return elem;

		// если функция
		case 'function':
			return 'element is a function';

		// если объект, null или массив
		case 'object':

			// если null
			if (elem === null) {
				return 'element is null';

			// если массив
			} else if (Array.isArray(elem)) {
				return 'element is an array';

			// если объект
			} else {
				return 'element is an object';
			}
	}
}

var	insert,
		elemCounter = 0;

// перебор полученного объекта
for (var elem in exter) {
	elemCounter++;

	// первая половина
	if (elemCounter <= (Math.floor(Object.keys(exter).length / 2))) {
		insert = document.getElementById('insert');

	// вторая половина
	} else {
		insert = document.getElementById('secondInsert');
	}

	var item = document.createElement('div');
	
	item.className = 'col-md-4 col-lg-3 col-xl-2';
	item.innerHTML = '<div class="item" data-id='+ exter[elem].counter +'><div class="item__face"><img src="'+exter[elem].img+'" alt="изображение товара" class="item__img"/>'+exter[elem].indexVisibility+'</div><h3 class="item__title">'+exter[elem].name+'</h3><p class="item__desc">'+exter[elem].desc+'</p><button class="item__buy" onclick=\'addToCart(this)\'>Добавить</button></div>';
	
	insert.appendChild(item);
}

// обработка клика по кнопке "добавить"
function addToCart(prop) {

	var	a = prop.parentNode,
			b = a.querySelectorAll('.item__index')[0];

	if (b) b.classList.add('item__index--visible');

	console.log(a.getAttribute('data-id'));
}