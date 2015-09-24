if(canMoveUp && !hasVisitedUp) {
	this.moveUp();
}
else if(canMoveDown && !hasVisitedDown) {
	this.moveDown();
}
else if(canMoveLeft && !hasVisitedLeft) {
	this.moveLeft();
}
else if(canMoveRight && !hasVisitedRight) {
	this.moveRight();
}
else {
	// Go to where you have gone the least first
	var leastVisitedCount = null;
	var leastVisitedDirection = null;

	// Up
	if((canMoveUp && hasVisitedUp < leastVisitedCount) || canMoveUp && leastVisitedCount === null) {
		leastVisitedDirection = 'Up';
		leastVisitedCount = hasVisitedUp;
	}
	// Down
	if((canMoveDown && hasVisitedDown < leastVisitedCount) || canMoveDown && leastVisitedCount === null) {
		leastVisitedDirection = 'Down';
		leastVisitedCount = hasVisitedDown;
	}
	// Left
	if((canMoveLeft && hasVisitedLeft < leastVisitedCount) || canMoveLeft && leastVisitedCount === null) {
		leastVisitedDirection = 'Left';
		leastVisitedCount = hasVisitedLeft;
	}
	// Right
	if((canMoveRight && hasVisitedRight < leastVisitedCount) || canMoveRight && leastVisitedCount === null) {
		leastVisitedDirection = 'Right';
		leastVisitedCount = hasVisitedRight;
	}

	this['move'+leastVisitedDirection]();
}