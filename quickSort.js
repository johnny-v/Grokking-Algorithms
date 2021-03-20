function quickSort(array) {
    // Base case
    if (array.length < 2)  {
        return array;
    }

    //choosing the pivot
    const [pivot, ...remaining] = array;
    //divide and conquer
    const less = remaining.filter(e => e <= pivot);
    const greater = remaining.filter(e => e > pivot);

    //return the sorted lees + pivot + sorted greater
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([1, 5, 21, 44, 0, 2, 3, 4.5]));
console.log(quickSort([]));
console.log(quickSort([433434, 4]));
console.log(quickSort([433434, -4, 2323]));
