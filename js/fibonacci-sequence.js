var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    },
    goldenRectangle : function(n) {
    	if ([0, 1].includes(n)) {
        	return n;
        } else {
    		return Math.round(((1.6180339887**n) - ((1-1.6180339887)**n)) / Math.sqrt(5)); 
        }
    }
};


// console.log("0:", yourself.fibonacci(0));
// console.log("0:", yourself.goldenRectangle(0));
// console.log("1:", yourself.fibonacci(1));
// console.log("1:", yourself.goldenRectangle(1));
// console.log("2:", yourself.fibonacci(2));
// console.log("2:", yourself.goldenRectangle(2));
// console.log("3:", yourself.fibonacci(3));
// console.log("3:", yourself.goldenRectangle(3));
// console.log("4:", yourself.fibonacci(4));
// console.log("4:", yourself.goldenRectangle(4));
// console.log("6:", yourself.fibonacci(6));
// console.log("6:", yourself.goldenRectangle(6));
// console.log("10:", yourself.fibonacci(10));
// console.log("10:", yourself.goldenRectangle(10));
console.log("35:", yourself.goldenRectangle(35));