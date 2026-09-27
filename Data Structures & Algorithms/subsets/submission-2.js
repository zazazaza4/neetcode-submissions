class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = []
        const currSubsets = []

        this.helper(0, nums, currSubsets, subsets)

        return subsets
    }

    helper(index, nums, curr, subsets) {
        if (index >= nums.length) {
            subsets.push([...curr])

            return 
        }

        curr.push(nums[index])

        this.helper(index + 1, nums, curr, subsets)

        curr.pop()

        this.helper(index + 1, nums, curr, subsets)
    }
}
