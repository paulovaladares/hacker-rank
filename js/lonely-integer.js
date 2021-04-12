function lonelyinteger(a) {
    return a.reduce( (acc, item) => acc ^ item);
}

function lonelyinteger2(a) {
    return a.reduce( (acc, item, index, arr) => {
    	if(arr[index-1] <= item) {
    		acc = item - acc;
    	} else {
    		acc = item + acc;
    	} 
    	console.log(acc);
    	return acc;
    });
}

console.log(lonelyinteger2([1, 3, 5, 8, 3, 1, 8, 16, 5]));
console.log(lonelyinteger([18, 49, 15, 30, 56, 20, 49, 67, 82, 69, 84, 63, 93, 87, 66, 17, 38, 32, 17, 32, 94, 66, 67, 63, 48, 64, 84, 82, 87, 18, 79, 64, 79, 15, 71, 94, 59, 5, 22, 59, 4, 98, 81, 4, 98, 73, 69, 88, 30, 81, 48, 56, 71, 20, 93, 22, 73, 5, 88]));
