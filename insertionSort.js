function insertionSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    for (let j = 1; j < arr.length; j++) {
        const element = arr[j];

        let i = j - 1;

        while (i >= 0 && arr[i] < element) {
            arr[i+1] = arr[i];
            i = i-1;
        }
        arr[i+1] = element;
    }

    return arr;
}

const unsortedArray = [5, 2, 4, 6, 1, 3];

console.log(insertionSort(unsortedArray));
