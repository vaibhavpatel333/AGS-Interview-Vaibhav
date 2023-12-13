const topKFrequent = require('./solution');

describe('topKFrequent', () => {
    it('should return the k most frequent elements for test case 1', () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    });

    it('should return the k most frequent elements for test case 2', () => {
        expect(topKFrequent([1, 1, 2, 2, 3, 3, 3], 3)).toEqual([1, 2, 3]);
    });

    it('should return the k most frequent elements for test case 3', () => {
        expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([-1, 2]);
    });

    it('should return the k most frequent elements for test case 4', () => {
        expect(topKFrequent([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
    });
});
