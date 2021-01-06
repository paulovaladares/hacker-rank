// Complete the arrayManipulation function below.
function arrayManipulation_1(n, queries) {
	let arr = Array(n+2).fill(0, 0), bigger = 0;

	function addItem(index, value) {
		arr[index] += value;
		if (arr[index] > bigger) bigger = arr[index];
	}

	function searchItemns(a, b, k) {
		for (let j = a; j<=b; j++) {
			addItem(j, k);
		}
	}
	for (let i = 0; i < queries.length; i++) {
		searchItemns(queries[i][0]-1, queries[i][1]-1, queries[i][2]);
	}
	return bigger;
}

function arrayManipulation(n, queries) {
	let arr = Array(n+2).fill(0, 0), bigger = 0;

	function searchItemns(a, b, k) {
		arr[a] += k;
		arr[b+1] += -k;
	}
	for (let i = 0; i < queries.length; i++) {
		searchItemns(queries[i][0]-1, queries[i][1]-1, queries[i][2]);
	}
	arr.reduce((acc, value) => {
		acc += value;
		if (acc > bigger) bigger = acc;
		return acc;
	}, 0);
	console.log(arr)
	return bigger;
}

console.log("200 =>", arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]));

console.log("10 =>", arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));

console.log("31 =>", arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]));

console.log("882 =>", arrayManipulation(4, [[2, 3, 603], [1, 1, 286], [4, 4, 882]]));

console.log("998 =>", arrayManipulation(5, [[3, 4, 603], [1, 1, 286], [5, 5, 882], [1, 2, 712]]));

console.log("2497169732 =>", arrayManipulation(10000000, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]));


/*

a b k
1 5 3
4 8 7
6 9 1

 1 2 3  4  5 6 7 8 9 10
[0,0,0, 0, 0,0,0,0,0, 0]
   3 3  3  3 
[0,3,3, 3, 3,0,0,0,0, 0] 1 => [2, 5, 3]
        7  7 7 7 7
[3,3,3,10,10,7,7,7,2, 2] 2 => [4, 8, 7] 
                   2  2 
[0,3,3, 3, 3,0,0,0,0, 0] 3 => [9, 10, 2]
             1 1 1 1
[3,3,3,10,10,8,8,8,3, 0] 4 => [6, 9, 1]



 1 2 3  4  5  6 7 8  9 10
[0,0,0, 0, 0, 0,0,0, 0, 0]
   3         -3
[0,3,0, 0, 0,-3,0,0, 0, 0] 1 => [2, 5, 3]
        7           -7
[0,3,0, 7, 0,-3,0,0,-7, 0] 2 => [4, 8, 7] 
                     2    -2 
[0,3,0, 7, 0,-3,0,0,-5, 0] 3 => [9, 10, 2]
              1        -1
[0,3,0, 7, 0,-2,0,0,-5,-1] 4 => [6, 9, 1]

 */