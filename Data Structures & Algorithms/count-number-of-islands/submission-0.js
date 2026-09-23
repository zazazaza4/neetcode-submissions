class Solution {
    getKey(i, j) {
        return `${i} ${j}`
    }
 
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0) {
            return 0
        }

        const ROWS = grid.length
        const COLS = grid[0].length

        const visit = new Set()
        let count = 0

        const bfs = (i, j) => {
            const q = []
            visit.add(this.getKey(i, j))
            q.push([i, j])

            while (q.length !== 0) {
                const [r, c] = q.pop()

                const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

                for (const [dr, dc] of directions) {
                    const row = r + dr
                    const col = c + dc

                    if (Math.min(row, col) >= 0 &&
                        row < ROWS && 
                        col < COLS &&
                        grid[row][col] === '1' &&
                        !visit.has(this.getKey(row, col))
                    ) {
                        visit.add(this.getKey(row, col))
                        q.push([row, col])
                    }
                }
            }
        }


        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                const item = grid[i][j]

                if (item === '1' && !visit.has(this.getKey(i, j))) {
                    bfs(i, j)
                    count++
                }
            }
        }

        return count
    }
}
