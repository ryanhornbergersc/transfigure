//
// Game
//
Game = function() {
	this.player = null;
	this.currentLevel = null;
	this.levels = [
	{
		name: 'Level 1',
		map: [
		[ 1, 5, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 0, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 0, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 5 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 0, 5, 5, 5, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5 ],
		[ 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 0, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 0, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 0, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 5 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 0, 5, 5, 5, 5, 0 ],
		[ 0, 5, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0 ],
		[ 0, 5, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 0, 0, 0 ],
		[ 0, 0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 0, 5, 5, 0, 5, 0, 0, 5, 0, 5, 0, 0, 5, 5 ],
		[ 0, 5, 0, 5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 9 ],
		],
		//playerStart: {
		//	x: 14,
		//	y: 20,
		//},
		//playerStart: {
		//	x: 0,
		//	y: 0,
		//},
		playerStart: {
			x: 0,
			y: 0,
		},
	},
	];
};
Game.prototype.renderLevel = function(level) {
  // Create row
  function createRow(rowIndex) {
  	$('.level').append($('<div />').addClass('row row'+rowIndex));
  }

  // Create column
  function createCell(rowIndex, columnIndex, cellValue) {
    // Get the current row div
    var rowDiv = $('.row'+rowIndex);
    
    // Create a new cell div
    var cellDiv = $('<div />').addClass('cell cellRow'+rowIndex+'Column'+columnIndex);
    
    // Start
    if(cellValue === 1) {
    	cellDiv.addClass('start');
    }
    // Wall
    else if(cellValue === 5) {
    	cellDiv.addClass('wall');
    }
    // Finish
    else if(cellValue === 9) {
    	cellDiv.addClass('finish');
    }
    
    rowDiv.append(cellDiv);
}

  // Create the rows and columns
  for(var rowIndex = 0; rowIndex < level.map.length; rowIndex++) {
  	createRow(rowIndex);
  	for(var columnIndex = 0; columnIndex < level.map[rowIndex].length; columnIndex++) {
  		createCell(rowIndex, columnIndex, level.map[rowIndex][columnIndex]);
  	}
  }
}
Game.prototype.playLevel = function(levelIndex) {
  // Get the level
  var level = this.levels[levelIndex];

  level.map = this.generateMap(15, 25);

  // Render the level
  this.renderLevel(level);

  // Create the player and play the game
  this.player = new Player(level);
  this.player.play();
}

Game.prototype.generateMap = function(height, width) {
	var map = [];

	// Generate a map
	for(var y = 0; y < height; y++) {
		map[y] = [];
		for(var x = 0; x < width; x++) {
			if((x % 2 == 0) && (y % 2 == 0)) {
				map[y][x] = -1;
			}
			else {
				map[y][x] = 5;
			}
		}
	}

	//return map;

	// Intialize
	var movesHistory = [];
	var currentY = map.length - 1;
	var currentX = map[map.length - 1].length - 1;

	// Randomly cut holes in walls
	while(true) {
		var possibleMoves = [];

		// Set my current position to visited
		map[currentY][currentX] = 0;

		// Can move up
		if(map[currentY - 2] !== undefined && map[currentY - 2][currentX] == -1) {
			possibleMoves.push({
				x: currentX,
				y: currentY - 2,
				holeX: currentX,
				holeY: currentY - 1,
			});
		}

		// Can move down
		if(map[currentY + 2] !== undefined && map[currentY + 2][currentX] == -1) {
			possibleMoves.push({
				x: currentX,
				y: currentY + 2,
				holeX: currentX,
				holeY: currentY + 1,
			});
		}

		// Can move left
		if(map[currentY][currentX - 2] !== undefined && map[currentY][currentX - 2] == -1) {
			possibleMoves.push({
				x: currentX - 2,
				y: currentY,
				holeX: currentX - 1,
				holeY: currentY,
			});
		}

		// Can move right
		if(map[currentY][currentX + 2] !== undefined && map[currentY][currentX + 2] == -1) {
			possibleMoves.push({
				x: currentX + 2,
				y: currentY,
				holeX: currentX + 1,
				holeY: currentY,
			});
		}

		// Check if there are no available moves
		if(!possibleMoves.length) {
			if(!movesHistory.length) {
				break; // Breaks the while loop
			}
			else {
				var nextMove = movesHistory.pop();
				currentX = nextMove.x;
				currentY = nextMove.y;

				continue;
			}			
		}

		// Randomly pick an available move
		var nextMoveIndex = Math.floor(Math.random() * (possibleMoves.length - 0)) + 0;

		movesHistory.push({
			x: currentX,
			y: currentY,
		});

		var nextMove = possibleMoves[nextMoveIndex];

		// Remove the wall
		map[nextMove.holeY][nextMove.holeX] = 0;

		currentX = nextMove.x;
		currentY = nextMove.y;
	}

	// Start
	map[0][0] = 1;

	// End
	map[map.length - 1][map[map.length - 1].length - 1] = 9;

	return map;
}