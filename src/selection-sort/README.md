# Implement Selection Sort Algorithm

## Problem Description

Implement the selection sort algorithm to sort an array of numbers in ascending order. You must not use any built-in sort function provided by your language's standard library.

Selection sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on the order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

## Examples

1. **Input:** [34, 19, 42, -9, 2018, 0, 2005, 77]
   **Output:** [-9, 0, 19, 34, 42, 77, 2005, 2018]

2. **Input:** [5, 1, 4, 2, 8]
   **Output:** [1, 2, 4, 5, 8]

## Constraints

- The array may contain duplicates and negative numbers.
- The array length will not exceed 10,000 elements.
