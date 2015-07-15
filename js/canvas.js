var canvas;
var ctx;

function initCanvas() {
	canvas = document.getElementById("canvas");  
	ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function drawBestScoreScreen(bestScore) {
	drawBestScoreText(bestScore);
  	drawPlayButton();
}

function drawTextAt(text, x, y) {
	ctx.font = '900 small-caps 55px Arial';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'purple';
  	ctx.fillText(text, x, y);
}

function drawStartText() {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt('Time to draw!', x, y);
}

function drawGoodText() {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt('Good! Try next level', x, y);
}

function drawGameOverText() {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt('Game Over! You lose!', x, y);
}

function drawBestScoreText(bestScore) {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt('Best score: '+bestScore, x, y);
}

function drawPlayButton() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	//Circle
	ctx.arc(w/2, h/2, Math.min(60, w/2-15, h/2-15), 0, 2 * Math.PI, false);
	ctx.fillStyle = 'mediumpurple';
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
	ctx.closePath();
	//Triangle
	ctx.strokeStyle = 'purple';
	ctx.beginPath();
	ctx.moveTo(w/2.15, h/2.25);
	ctx.lineTo(w/2.15, h/1.8);
	ctx.lineTo(w/1.8, h/2);
	ctx.lineTo(w/2.15, h/2.25);
	ctx.fillStyle = 'purple';
	ctx.fill();
}

function drawFigure(figure) {
	switch(figure) {
		case 'triangle':
			drawTriangle();
			break;

		case 'rectangle':
			drawRectangle();
			break;

		case 'circle':
			drawCircle();
			break;

		case 'check':
			drawCheck();
			break;

		case 'x':
			drawX();
			break;

		case 'v':
			drawV();
			break;

		case 'delete':
			drawDelete();
			break;
	}
}

function drawTriangle() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	ctx.moveTo(w/1.8, h/3.5);
	ctx.lineTo(w/2.5, h/1.9);
	ctx.lineTo(w/1.5, h/1.9);
	ctx.lineTo(w/1.84, h/3.5);
	ctx.lineWidth = 15;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
}

function drawRectangle() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	ctx.moveTo(w/3.5, h/3);
	ctx.lineTo(w-w/3.5, h/3);
	ctx.lineTo(w-w/3.5, h-h/3);
	ctx.lineTo(w/3.5, h-h/3);
	ctx.lineTo(w/3.5, h/3.1);
	ctx.lineWidth = 15;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
}

function drawCircle() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	ctx.arc(w/2, h/2, Math.min(120, w/2-20, h/2-20), 0, 2 * Math.PI, false);
	ctx.lineWidth = 15;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
	ctx.closePath();
}

function drawCheck() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	ctx.moveTo(w/3, h/2);
	ctx.lineTo(w/2, h-h/3);
	ctx.lineTo(w-w/3, h-h/1.5);
	ctx.lineWidth = 15;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
}

function drawX() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	ctx.moveTo(w/3, h/3);
	ctx.lineTo(w-w/3, h-h/3);
	ctx.lineTo(w-w/3, h/3);
	ctx.lineTo(w/3, h-h/3);
	ctx.lineWidth = 15;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
}

function drawV() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	ctx.moveTo(w/3, h/3);
	ctx.lineTo(w/2, h-h/3);
	ctx.lineTo(w-w/3, h/3);
	ctx.lineWidth = 15;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
}

function drawDelete() {
	var w = canvas.width
	var h = canvas.height
	ctx.beginPath();
	ctx.moveTo(w/3, h/3);
	ctx.lineTo(w-w/3, h-h/3);
	ctx.lineTo(w/3, h-h/3);
	ctx.lineTo(w-w/3, h/3);
	ctx.lineWidth = 15;
	ctx.strokeStyle = 'purple';
	ctx.stroke();
}