var oldX; var oldY;
var _r = new DollarRecognizer();
var _points = [];
var isMouseDown = false; // mouse only bool
var threshold = 3; // number of pixels required to be moved for a movement to count
var strokeStyle = "#996600";
var shadowColor = "#FF9900";
var lineWidth = 20;

////////////////////////
///// START PATH ///////
////////////////////////

function startPath(e, pageX, pageY) {
	e.preventDefault();
	_points = [];
	ctx.beginPath();
	ctx.strokeStyle = strokeStyle;
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.lineWidth = lineWidth;
	ctx.shadowColor = shadowColor;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 10;
	oldX = pageX;
	oldY = pageY;
}

function touchstartHandler(e) {
	var touch = e.touches[0];
	startPath(e, touch.pageX, touch.pageY);
}

function mousedownHandler(e) {
	isMouseDown = true;
	startPath(e, e.pageX, e.pageY);
}

////////////////////////
///// TRACK PATH ///////
////////////////////////

function trackPath(pageX, pageY) {
	ctx.moveTo(oldX,oldY);
	oldX = pageX;
	oldY = pageY;
	ctx.lineTo(oldX,oldY);
	ctx.stroke();
	ctx.shadowColor = shadowColor;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 10;
	_points[_points.length] = new Point(oldX,oldY);
}

function touchmoveHandler(e) {
	if (oldX - e.pageX < 3 && oldX - e.pageX > -3) {
		return;
	}
	if (oldY - e.pageY < 3 && oldY - e.pageY > -3) {
		return;
	}
	var touch = e.touches[0];
	trackPath(touch.pageX, touch.pageY);
}

function mousemoveHandler(e) {
	if (!isMouseDown) {
		return;
	}
	if (oldX - e.pageX < 3 && oldX - e.pageX > -3) {
		return;
	}
	if (oldY - e.pageY < 3 && oldY - e.pageY > -3) {
		return;
	}
	trackPath(e.pageX, e.pageY);
}

////////////////////////
///// END PATH ///////
////////////////////////

function endPath() {
	ctx.closePath();
	if (_points.length >= 10) {
		var result = _r.Recognize(_points);
		if(actualGestures[actualItem] == result.Name) {
			nextGesture();
		} else {
			gameOver();
		}
	}
	_points = [];
}

function touchendHandler(e) {
	endPath();
}

function mouseupHandler(e) {
	isMouseDown = false;
	endPath();
}