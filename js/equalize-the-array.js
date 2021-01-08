function equalizeArray(arr) {
	var bigger = 0;
	if (arr.length > 1) {
		arr.reduce((acc, item) => {
			acc[item] = acc[item] ? acc[item] + 1 : 1;
			bigger = acc[item] > bigger ? acc[item] : bigger;
			return acc;
		}, {});
		return (arr.length - bigger);
	} else {
		return 0;
	}
}

console.log(equalizeArray([]));
console.log(equalizeArray([3, 3, 2, 1, 3]));
console.log(equalizeArray([25]));
console.log(equalizeArray([51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51]));
console.log(equalizeArray([78, 39, 34, 6, 78, 78, 36, 78, 34, 36, 78, 39, 36, 75, 95, 36, 72, 34, 75, 78, 6, 36, 95, 72, 75, 75, 75, 10, 10, 78, 6, 78, 72, 34, 34, 34, 36, 34, 78, 78, 36, 10, 6, 6, 36, 78, 72, 78, 75, 36, 78, 72, 10, 34, 72, 95, 39, 36, 95, 72, 10, 78, 72, 39, 6, 39, 10, 6, 39, 78, 95, 78, 95, 10, 34, 39, 78, 34, 34, 95, 10, 10, 6, 39, 78, 95, 36, 10, 39, 78, 36, 78, 75, 36, 36, 39, 78, 95]));