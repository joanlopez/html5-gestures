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
  	drawCenteredAsset(0); //Play icon is the asset 0
}

function drawTextAt(text, x, y) {
	ctx.font = '900 small-caps 55px Arial';
	if(canvas.width < 400) ctx.font = '900 small-caps 35px Arial';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'purple';
  	ctx.fillText(text, x, y);
}

function drawStartText() {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt('Hora de pintar!', x, y);
}

function drawGoodText() {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt("Bien, sigue así!", x, y);
}

function drawGameOverText() {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt('Has perdido!', x, y);
}

function drawBestScoreText(bestScore) {
	var x = canvas.width / 2;
  	var y = canvas.height / 4;
  	drawTextAt('Mejor marca: '+bestScore, x, y);
}

function drawCenteredAsset(index) {
	var asset = assetsManager.downloads[index];
	
	var iW = asset.width;
	var iH = asset.height;
	
	var cW = canvas.width;
	var cH = canvas.height;

	ctx.drawImage(asset, cW/2 - iW/2, cH/2 - iH/2);
}