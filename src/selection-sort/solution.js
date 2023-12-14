/**
 * Sorts an array of numbers using selection sort algorithm.
 * @param {number[]} arr - An array of numbers.
 * @returns {number[]} - The sorted array.
 */
function selectionSort(arr) {

    let n = arr.length;
    for (let i=0; i<n; i++){

        let init = 1
        for (let j = 0; j < n; j++) {
            if (arr[j] < arr[init]){
                init = j
            }

        }

        [arr[i], arr[init]] = []


    }
    return arr
    // Candidate's solution goes here
}

module.exports = selectionSort;
