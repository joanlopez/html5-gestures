var gestures = ['triangle', 'x', 'rectangle', 'circle',
				'check', 'v', 'delete'];

/////////////////
// DEMO VARIABLES

var actualDemoGestures;
var actualDemoItem;
var demoInterval;
var figure;

/////////////////
// GAME VARIABLES

var actualGestures;
var actualItem;


var actualScore;

$(document).ready(function() {
	initApp();
});

function initApp() {
	bestScore = window.localStorage.getItem ('bestScore') || 0;
	actualScore = 0;
	initCanvas();
	initStartPlayHandlers();
	drawBestScoreScreen(bestScore);
}

function initStartPlayHandlers() {
	// $(document).bind('touchend', function(e) {
	// 	var touch = e.touches[0];
	// 	if(touch.pageX > canvas.width/2.5 &&
	// 		touch.pageX < canvas.width-canvas.width/2.5 &&
	// 		touch.pageY > canvas.height/2.5 &&
	// 		touch.pageY < canvas.height-canvas.height/2.5)
	// 	initializeDemo();
	// });

	$(document).bind('vmouseup', function(e) {
		if(e.pageX > canvas.width/2.5 &&
			e.pageX < canvas.width-canvas.width/2.5 &&
			e.pageY > canvas.height/2.5 &&
			e.pageY < canvas.height-canvas.height/2.5)
		initializeDemo();
	});
}

function initializeDemo() {
	// Clear canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// Unbind events
	//$(document).unbind('touchend');
	$(document).unbind('vmouseup');
	// Get next randoms
	actualDemoGestures = getSomeArrayRandomItems(actualScore+1, gestures);
	// Set state
	actualDemoItem = 0;
	figure = false;
	demoInterval = setInterval(playDemo, 1000);
}

function playDemo() {
	if(actualDemoItem >= actualDemoGestures.length) {
		//End demo & initialize game game
		clearInterval(demoInterval);
		initializeGame();
	} else {
		if(figure) {
			// Clear canvas
			ctx.clearRect(0,0,canvas.width,canvas.height);
			figure = false;
		} else {
			drawFigure(actualDemoGestures[actualDemoItem]);	
			++actualDemoItem;
			figure = true;
		}
	}
}

function initializeGame() {
	// Clear canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	actualGestures = actualDemoGestures;
	actualItem = 0;
	initGesturesHandlers();
	drawStartText();
}

function nextGesture() {
	// Clear canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	if(actualItem+1 >= actualGestures.length) {
		drawGoodText();
		setTimeout(nextLevel, 1000);
	} else {
		drawStartText();
		++actualItem;
	}
}

function nextLevel() {
	++actualScore;
	endGesturesHandlers();
	initializeDemo();
}

function gameOver() {
	// Clear canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawGameOverText();
	setTimeout(endGame(), 1000);
}

function endGame() {
	// Clear canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	endGesturesHandlers();
	initStartPlayHandlers();
	if(actualScore > bestScore) {
		bestScore = actualScore;
		window.localStorage.setItem ('bestScore', bestScore);
	}
	actualScore = 0;
	drawBestScoreScreen(bestScore);
}

function initGesturesHandlers() {
	// Handling touch platforms
	//$(document).bind('touchstart', touchstartHandler);
	//$(document).bind('touchmove', touchmoveHandler);
	//$(document).bind('touchend', touchendHandler);

	// Handling mouse platforms
	$(document).on('vmousedown', mousedownHandler);
	$(document).on('vmousemove', mousemoveHandler);
	$(document).on('vmouseup', mouseupHandler);
}

function endGesturesHandlers() {
	// Unbinding touch platforms
	//$(document).unbind('touchstart');
	//$(document).unbind('touchmove');
	//$(document).unbind('touchend');

	// Unbinding mouse platforms
	$(document).off('vmousedown');
	$(document).off('vmousemove');
	$(document).off('vmouseup');
}