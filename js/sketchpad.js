$(document).ready(function() {
	
	drawGrid(24);

});

function drawGrid(x) {
	var squareW = (720/x);
//	var squareH = (960/x); // just in case I need a rectangle element instead of square later
	if($(".square")[0]) {
		$(".square").remove();
	}

	for (var i = 0; i < (x*x); i++) {
		$(".container").append("<div class ='square'></div>"); // adding square of squares

	}

	$(".square").width(squareW);	// ok, that's width
	$(".square").height(squareW);	// and height, but it's width too, because it's square dude

	draw(); //
}



function draw() { 
	$(".square").mouseenter(function(event) {
		$(this).css("background-color", "white");
	});
}

// functions that change colors

function randomColours() {
	$(".square").mouseenter(function(event) {
		var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background-color", randomColor);

	});
}



function opacity() {
	$(".square").mouseenter(function(event) {
			var currentOpacity = $(this).css("opacity");
			if(!(currentOpacity === 0)){
				$(this).css("opacity", currentOpacity - 0.1);
		}
	});
}


function trails() {
	$(".square").mouseenter(function(event) {
		$(this).fadeTo('slow', 0);
	});

	$(".square").mouseleave(function(event) {
		$(this).fadeTo('slow', 1);
	});
}



var num2 = 0; // one little zero for a rainbow

function rainbow() {
	$(".square").mouseenter(function(event) {
		
		var rainbowArr = ["#FF0000", "#FF6600", "#FFFF00", "#008000", "#00FFFF", "#0000FF", "#800080"]
		
	//	var rainbowColor = rainbowArr[Math.floor(Math.random()*rainbowArr.length)];
		num = num2;
		num2 = num2 + 1;
		if (num2 > 6) { 
			num2 = 0;
		}
		var rainbowColor = rainbowArr[num];
		$(this).css("background-color", rainbowColor);



	});
}

function bw() { // generates black and white tiles only
	$(".square").mouseenter(function(event) {
		
		var rainbowArr = ["000000", "#FFFFFF"]
		
	//	var rainbowColor = rainbowArr[Math.floor(Math.random()*rainbowArr.length)];
		num = num2;
		num2 = num2 + 1;
		if (num2 > 1) { 
			num2 = 0;
		}
		var rainbowColor = rainbowArr[num];
		$(this).css("background-color", rainbowColor);



	});
}


// yeah, it's not working, nevermind

//function minecraft(x) {
//	$(".square").mouseenter(function(event) {
//		$('<img src="images/mcblock.jpg">').appendTo($(this));
//
//	});
//}



// options

function setGrid() {
	do {
		var size = prompt("Enter an enteger between 1 and 64:");

	} while (size < 1 || size > 64);

	return size;
}


function resetAll() {
	drawGrid(24);
}


function secretButton() {
	var showSecret = "visible"
	$(".superbuttons").css("visibility", showSecret);

}


// buttons for all functions

$("button").click(function(event) { // removes all previous events when you click any button
    $(".square").unbind();
    
});


$("#random").click(function(event) {
	randomColours();

});

$("#opacity").click(function(event) {
	opacity();

});

$("#trails").click(function(event) {
	trails();

});

$("#default").click(function(event) {
	draw();

});

$("#rainbow").click(function(event) {
	rainbow();

});

//$("#minecraft").click(function(event) {
//	minecraft();
//
//});

$("#bw").click(function(event) {
	bw();

});

$("#setGrid").click(function(event) {
	drawGrid(setGrid());

});

$("#reset").click(function(event) {
	resetAll();

});

$("#secretButton").click(function(event) {
	secretButton();

});