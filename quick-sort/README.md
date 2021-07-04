## Quicksort

### Algorithm

1. Choose a pivot
2. Put elements less than pivot on the left
3. Put elements greater than pivot on the right

### Time complexity

Average (also best): O(n log n)

Worst: O(n^2)

n for going through each element to sort.
n for the stack size, where recursing enough to divide and conquer the array. 
Worst case when choosing a bad pivot (eg, index 0).

## Filter implementation

- Simpler code
- Not in-place
- Immutable
- Space complexity?
- Difference in time complexity?
