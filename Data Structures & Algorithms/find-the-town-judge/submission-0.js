class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let d = new Array(n + 1).fill(0)

        for (let [src, dst] of trust) {
            d[src]--
            d[dst]++
        }

        for (let i = 1; i <= n; i++) {
            if (d[i] === n-1) return i
        }

        return -1
    }
}
