const topKFrequent = require('./solution');

describe('topKFrequent', () => {
    it('should return the k most frequent elements', () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual(expect.arrayContaining([1, 2]));
        expect(topKFrequent([1, 1, 2, 2, 3, 3, 3], 3)).toEqual(expect.arrayContaining([1, 2, 3]));
        expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual(expect.arrayContaining([-1, 2]));
        expect(topKFrequent([1, 2, 3, 4, 5], 5)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
    });

    it('should handle empty array', () => {
        expect(topKFrequent([], 2)).toEqual([]);
    });

    it('should handle k greater than array length', () => {
        expect(topKFrequent([1, 2, 3], 5)).toEqual(expect.arrayContaining([1, 2, 3]));
    });
});
