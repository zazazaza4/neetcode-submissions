class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length <= 1) {
            return nums[0]
        }

        for (let i = 2; i <nums.length; i++) {
            const val = Math.max(nums[i - 2], (nums[i - 3] ?? 0))
            
            nums[i] += val
        }

        return Math.max(nums.at(-1), nums.at(-2))
    }
}
