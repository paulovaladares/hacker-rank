// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    console.log(arr);
    let count =0;

    function swapCount (arr, i) {
        let swaps = 0;
        while (arr[i] != i+1) {
            let temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
            swaps++;
            console.log(arr);
        }
        return swaps;
    };

    for (let i=0; i<arr.length; i++) {
        count += swapCount(arr, i);
    }

    return count;
}

console.log("CHANGES: ", minimumSwaps([4, 3, 1, 2]));
console.log("CHANGES: ", minimumSwaps([2, 3, 4, 1, 5]));
console.log("CHANGES: ", minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
console.log("CHANGES: ", minimumSwaps([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log("CHANGES: ", minimumSwaps([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));