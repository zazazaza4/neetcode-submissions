class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length

        let count = 0
        
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    
                    const neighbors = [[0, 1], [1, 0], [0, -1], [-1, 0]] 
                    
                    for (let [dr, dc] of neighbors) {
                        const rIndex = r + dr
                        const cIndex = c + dc

                        if (Math.min(rIndex, cIndex) < 0 
                        || rIndex === ROWS 
                        || cIndex === COLS 
                        || grid[rIndex][cIndex] == 0
                        ) { 
                            count++  
                        }
                    }
                }
            }
        }

        return count
    }
}
