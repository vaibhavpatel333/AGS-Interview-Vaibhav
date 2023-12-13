const selectionSort = require('./solution');

test('sorts array [34, 19, 42, -9, 2018, 0, 2005, 77]', () => {
    expect(selectionSort([34, 19, 42, -9, 2018, 0, 2005, 77])).toEqual([-9, 0, 19, 34, 42, 77, 2005, 2018]);
});

test('sorts array [5, 1, 4, 2, 8]', () => {
    expect(selectionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
});
