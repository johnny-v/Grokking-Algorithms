function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

function selectionSort(arr) {
    const newArr = [];

    for (let i = 0; i <= arr.length; i++) {
        const smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1).pop());
    }

    return newArr;
}

console.log(selectionSort([1, 213123, 213123,13,1312,31,2312312,312,312,-2]));
