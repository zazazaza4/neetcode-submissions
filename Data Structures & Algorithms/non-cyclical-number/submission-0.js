class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set()

        function helper(val) {
            let sum = 0

            while (val > 0) {
                const d = val % 10
                sum+= d*d

                val = Math.floor(val / 10)
            }

            return sum
        }

        while (!seen.has(n)) {
            if (n === 1) {
                return true
            }
            
            seen.add(n)
            n = helper(n)
        }

        return false
    }
}
