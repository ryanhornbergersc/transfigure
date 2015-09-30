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