// Random
var possibleMoves = [];
if(canMoveUp) {
	possibleMoves.push('Up');
}
if(canMoveDown) {
	possibleMoves.push('Down');
}
if(canMoveLeft) {
	possibleMoves.push('Left');
}
if(canMoveRight) {
	possibleMoves.push('Right');
}
var nextMoveIndex = Math.floor(Math.random() * (possibleMoves.length - 0)) + 0;

// Find out where my next move will take me
var nextMoveX = this.x;
var nextMoveY = this.y;

if(possibleMoves[nextMoveIndex] == 'Up') {
	nextMoveY = this.y - 1;
}
else if(possibleMoves[nextMoveIndex] == 'Down') {
	nextMoveY = this.y + 1;
}
else if(possibleMoves[nextMoveIndex] == 'Left') {
	nextMoveX = this.x - 1;
}
else if(possibleMoves[nextMoveIndex] == 'Right') {
	nextMoveX = this.x + 1;
}

console.log(possibleMoves);

// If I am walking back to where I just came from
if(this.previousX == nextMoveX && this.previousY == nextMoveY) {
	// If we have more than one possible move
	if(possibleMoves.length >= 2) {
		// Remove the current index from the array
		possibleMoves.splice(nextMoveIndex, 1);

		// Pick another one
		nextMoveIndex = Math.floor(Math.random() * (possibleMoves.length - 0)) + 0;
	}
}
console.log(possibleMoves);
// console.log('nextMoveIndex', nextMoveIndex)

this['move'+possibleMoves[nextMoveIndex]]();