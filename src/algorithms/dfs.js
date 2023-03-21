export function dfs(grid, row = 10, col = 10) {
	if (
		row > grid.length ||
		row < 0 ||
		col > grid[0].length ||
		col < 0 ||
		grid[row][col].isVisited
	) {
		return;
	}
	if (grid[row][col].isTarget === true) return;

	grid[row][col].isVisited = true;
	dfs(grid, row, col + 1);
	dfs(grid, row, col - 1);
	dfs(grid, row + 1, col);
	dfs(grid, row - 1, col);
}