function quickSort(array) {
    // Base case
    if (array.length < 2)  {
        return array;
    }

    //choosing the pivot
    // const [pivot, ...remaining] = array; this includes the worst case;

    //this is to fix from O(n) to O(n log n);
    const randomIndex =  Math.floor(Math.random() * array.length);
    const pivot = array[randomIndex];
    const remaining = array.filter((e, i) => i !== randomIndex);

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

//selection sort is faster then merge sort if bot On notations are O(nlogn). However there is a case in quick sort that can be O(n)
// to avoid this and enable quick sort to be on average case and not on worst case, the pivot must be selected randomly.
