/**
 * Finds two indices such that the numbers at these indices add up to the target.
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - The indices of the two numbers.
 */
function twoSum(nums, target) {

    const n = nums.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = i + 1; j < n; j++) {
            
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return []
    // Implement your solution here
}

module.exports = twoSum;
