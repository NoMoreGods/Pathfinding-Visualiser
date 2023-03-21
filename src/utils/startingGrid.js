export function getGrid(width=60,height=20){
	let grid=[]
	for (let row = 0 ; row < height ; row++){
		const currentRow=[]
		for (let col = 0 ; col < width ; col++){
			const currentNode = {id:`${row} ${col}`,row,col, isStart: false, isTarget: false,weight:1,iswall:false, isVisited: false}
			currentRow.push(currentNode);
				}
		grid.push(currentRow)
		}
	grid[10][10].isStart=true
	grid[10][50].isTarget=true
	return  grid
	}

