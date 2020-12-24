//https://www.devmedia.com.br/algoritmos-de-ordenacao-analise-e-comparacao/28261

function bubbleSorting(arr) {
    console.log("------------------------------------------- ");
    console.log(arr);
    let temp = null, changed = false, changes = 0, length = arr.length-1;
    do {
        changed = false;
        for (let i = 0; i < length; i++) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                changed = true;
                changes++;
            } 
        }
        length--;
    } while (changed);
    console.log("CHANGES:", changes);
    return arr;
}

function selectionSorting(arr) {
    console.log("------------------------------------------- ");
    console.log(arr);
    let temp = null, changes = 0, index = 0;
    for (let i=0; i<arr.length; i++) {
        index = i;
        for (let j = i + 1; j<arr.length; j++) {
            if (arr[index] > arr[j]) {
                index = j;    
            }
        }
        if (index != i) {
            temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            changes++;
        }
    }
    console.log("CHANGES: ", changes);
    return arr;
}


function insertionSorting(arr) {
    console.log("------------------------------------------- ");
    console.log(arr);
    let temp = null, changes = 0, index = 0;
    for (let i=1; i < arr.length; i++) {
        index = i;
        while (index-1 >= 0 && arr[index] < arr[index-1]) {
            temp = arr[index];
            arr[index] = arr[index-1];
            arr[index-1] = temp;
            changes++;
            index--;
        }
    }
    console.log("CHANGES: ", changes);
    return arr;
}


function quickSorting(arr) {
    console.log("------------------------------------------- ");
    console.log(arr);
    let changes = 0;

    function swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
        console.log("CHANGES: ", ++changes);
    }
    function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    function quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(items, index, right);
            }
        }
        return items;
    }

    return quickSort(arr, 0, arr.length - 1);
}


let arr1 = [1, 2, 3, 4, 5, 6, 7],
    arr2 = [7, 6, 5, 4, 3, 2, 1],
    arr3 = [6, 2, 4, 7, 5, 1, 3],
    arr4 = [3, 2, 4, 1, 5, 6, 7];


console.log("BUBBLE SORTING: compara os valores das posições N e N+1 e troca os valores caso seja verdadeiro. Repet-se a vericação ate que não haja mais trocas. Obs: a cada looping o maior valor sempre será empurrado para a direita");
console.log(bubbleSorting(arr1.slice()));
console.log(bubbleSorting(arr2.slice()));
console.log(bubbleSorting(arr3.slice()));
console.log(bubbleSorting(arr4.slice()));
console.log(" ______________________________________________________________________")
console.log("SELECTION SORTING: consiste em trocar a posição do item atual com a posição do proximo menor item encontrado na lista. repe-se ate estar ordenado.")
console.log(selectionSorting(arr1.slice()));
console.log(selectionSorting(arr2.slice()));
console.log(selectionSorting(arr3.slice()));
console.log(selectionSorting(arr4.slice()));
console.log(" ______________________________________________________________________")
console.log("INSERTION SORTING: compara o item atual da lista com seus antecessores até que não tenha item maior. Dai ele pula para o proximo item")
console.log(insertionSorting(arr1.slice()));
console.log(insertionSorting(arr2.slice()));
console.log(insertionSorting(arr3.slice()));
console.log(insertionSorting(arr4.slice()));
console.log(" ______________________________________________________________________")
console.log("QUICK SORTING:")
console.log(quickSorting(arr1.slice()));
console.log(quickSorting(arr2.slice()));
console.log(quickSorting(arr3.slice()));
console.log(quickSorting(arr4.slice()));