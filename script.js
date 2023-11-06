const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const ulEdit = document.querySelector('ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry',
	'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut',
	'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit',
	'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin',
	'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
	'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat',
	'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe',
	'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive',
	'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach',
	'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo',
	'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma',
	'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
// const fruitMap = new Map(fruit);


function search(str) {
	let results = [];
	if (str.length) {
		results = fruit.filter((keyword) => {
			return keyword.toLowerCase().includes(str.toLowerCase())
		});
		showSuggestions(results)
		console.log(`${results}, values ${results.length}`);
	}

	
}

function searchHandler(e) {
	e.preventDefault();
	let fruitInput = input.value;
	search(fruitInput);
}

// oppted for .innerHTML instead of doucment.innerText or document.appendCHild beacuse innterHTML will reset the list everytime without
// needing to be manually reset

//originally called a new Map at the begining but was not sure if it would need to be manually reset everytime

function showSuggestions(results) {
	const searchResults = results.map((v) => {
		return "<li>" + v + "<li>";
	});
	suggestions.innerHTML = "<ul>" + searchResults + "</ul>";
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);