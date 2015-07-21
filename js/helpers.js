function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntsArray(n, min, max) {
	var randomInts = [];
	for(var i = 0; i < n; ++i) {
		var random = getRandomInt(min, max);
		randomInts.push(random);
	}
	return randomInts;		
}

function getArrayRandomItem(items) {
	var random = getRandomInt(0, items.length-1);
	return items[random];		
}

function getSomeArrayRandomItems(n, items) {
	var randomItems = [];
	for(var i = 0; i < n; ++i) {
		var random = getArrayRandomItem(items);
		randomItems.push(random);
	}
	return randomItems;		
}