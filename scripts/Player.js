//
// Player
//
Player = function(level) {
	this.moveHistory = [];
	this.moveCount = 0;
	this.moveLimit = 999999;
	this.memoryMap = [];

	this.level = level;

	this.previousX = null;
	this.previousY = null;

	this.x = this.level.playerStart.x;
	this.y = this.level.playerStart.y;

	this.activeCellElement = $('.cell.cellRow'+this.y+'Column'+this.x).addClass('active');
	this.previousCellElement = null;
	this.nextCellElement = null;
}
Player.prototype.canMoveTo = function(x, y) {
	var canMoveTo = false;
	var cellDiv = $('.cell.cellRow'+y+'Column'+x);
	var cellValue = this.level.map[x, y];

	// Row exists
	if(y >= 0 && y < this.level.map.length) {
		//console.log('Row exists');
		// Cell exists
		if(x >= 0 && x < this.level.map[y].length) {
			//console.log('Cell exists');
			// Cell is not a wall
			if(!cellDiv.is('.wall')) {
				canMoveTo = true;
			}
		}
	}

	return canMoveTo;
}
Player.prototype.hasVisited = function(x, y) {
	var hasVisited = 0;

	if(this.memoryMap[y] && this.memoryMap[y][x] !== undefined) {
		hasVisited = this.memoryMap[y][x];
	}

	return hasVisited;
}
Player.prototype.findAndExecuteNextMove = function() {
	var canMoveUp = this.canMoveTo(this.x, this.y - 1);
	var canMoveDown = this.canMoveTo(this.x, this.y + 1);
	var canMoveLeft = this.canMoveTo(this.x - 1, this.y);
	var canMoveRight = this.canMoveTo(this.x + 1, this.y);

	var hasVisitedUp = this.hasVisited(this.x, this.y - 1);
	var hasVisitedDown = this.hasVisited(this.x, this.y + 1);
	var hasVisitedLeft = this.hasVisited(this.x - 1, this.y);
	var hasVisitedRight = this.hasVisited(this.x + 1, this.y);

	// Random
	//var possibleMoves = [];
	//if(canMoveUp) {
	//	possibleMoves.push('Up');
	//}
	//if(canMoveDown) {
	//	possibleMoves.push('Down');
	//}
	//if(canMoveLeft) {
	//	possibleMoves.push('Left');
	//}
	//if(canMoveRight) {
	//	possibleMoves.push('Right');
	//}
	//var nextMoveIndex = Math.floor(Math.random() * (possibleMoves.length - 0)) + 0;
	//this['move'+possibleMoves[nextMoveIndex]]();
	
	// First preference is to move down
	if(canMoveDown && !hasVisitedDown) {
		this.moveDown();
	}
	// Second preference is to move right
	else if(canMoveRight && !hasVisitedRight) {
		this.moveRight();
	}
	// Third preference is to move up
	else if(canMoveUp && !hasVisitedUp) {
		this.moveUp();
	}
	// Fourth preference is to move left
	else if(canMoveLeft && !hasVisitedLeft) {
		this.moveLeft();
	}
	else if(this.moveHistory.length <= 1) {
		console.log('No solution.');
	}
	else {
		// Back track
		$('.active').addClass('struck');
		this.moveHistory.pop();
		var previousMove = this.moveHistory.pop();
		this.move(previousMove.x, previousMove.y);
	}
}
Player.prototype.move = function(x, y) {
	this.activeCellElement.removeClass('active');
	this.nextCellElement = $('.cell.cellRow'+y+'Column'+x);

	this.previousCellElement = this.activeCellElement;
	this.activeCellElement = this.nextCellElement;

	this.activeCellElement.addClass('active');

	if(this.previousCellElement.is('.walkedOnTwice')) {
		this.previousCellElement.addClass('walkedOnThrice');	
	}
	else if(this.previousCellElement.is('.walkedOn')) {
		this.previousCellElement.addClass('walkedOnTwice');	
	}
	else {
		this.previousCellElement.addClass('walkedOn');
	}

	this.previousX = this.x;
	this.previousY = this.y;

	this.x = x;
	this.y = y;

	this.moveHistory.push({
		x: this.x,
		y: this.y,
	});

	// Create the column if it doesn't exist
	if(!this.memoryMap[y]) {
		this.memoryMap[y] = [];
	}
	if(!this.memoryMap[y][x]) {
		this.memoryMap[y][x] = 0;
	}
	this.memoryMap[y][x]++;

	//console.table(this.memoryMap);
	
	//console.log('Moving to', x+', '+y);

	if(this.activeCellElement.is('.finish')) {
		console.log('Done! Took '+this.moveCount+' steps.');
		return;
	}

	this.moveCount++;
	$('.moveCount').html(this.moveCount);
	this.play();
}
Player.prototype.moveUp = function() {
	this.move(this.x, this.y - 1);
}
Player.prototype.moveDown = function() {
	this.move(this.x, this.y + 1);
}
Player.prototype.moveLeft = function() {
	this.move(this.x - 1, this.y);
}
Player.prototype.moveRight = function() {
	this.move(this.x + 1, this.y);
}
Player.prototype.play = function() {
	setTimeout(function() {
		if(this.moveCount < this.moveLimit) {
			this.findAndExecuteNextMove();
		}
		else {
			console.log('Out of moves', this.moveCount);
		}
	}.bind(this), 200);
}
