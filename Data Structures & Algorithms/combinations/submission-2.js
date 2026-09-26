class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = []

        this.helper(1, [], res, n, k)

        return res 
    }

    helper(index, curr, combs, n, k) {
        if (curr.length === k) {
            combs.push([...curr])
            
            return
        }

        if (index > n) {
            return
        }

        curr.push(index)
        this.helper(index + 1, curr, combs, n, k)
        curr.pop()
        
        this.helper(index + 1, curr, combs, n, k)
    }
}
