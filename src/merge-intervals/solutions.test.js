const mergeIntervals = require('./solution');

test('merges overlapping intervals [[1,3],[2,6],[8,10],[15,18]]', () => {
    expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
});

test('merges overlapping intervals [[1,4],[4,5]]', () => {
    expect(mergeIntervals([[1,4],[4,5]])).toEqual([[1,5]]);
});

