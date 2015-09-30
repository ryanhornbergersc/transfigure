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

this['move'+possibleMoves[nextMoveIndex]]();