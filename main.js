// 	       ____________ __     ________    ____  ________ __
// 	      / / ___<  / // /    / ____/ /   / __ \/ ____/ //_/
// 	 __  / /\__ \/ / // /_   / /   / /   / / / / /   / ,<   
// 	/ /_/ /___/ / /__  __/  / /___/ /___/ /_/ / /___/ /| |  
// 	\____//____/_/  /_/     \____/_____/\____/\____/_/ |_|  
                                                       
$(function() {

	// What I'll need:
	// Full Clock Div
	// Outer Shell (dark gray)
	// Inner Shell (black)
	// Left AM/PM & Auto Labels (white)
	// Clock Screen (dark red)
	// Clock AM/PM indicator (red)
	// Clock Text (red)
	// Bottom AM Label & Frequencies (white)
	// Bottom FM Label & Frequencies (white)

	// Declare HTML Divs in small variable blocks
	var clock = $('<div class="clock">');

	var clockTitle = $('<div class="title">The Best Kind of Clock</div>');

	var outerShell = $('<div class="outer-shell">');

	var innerShell = $('<div class="inner-shell">');

	var pm = $('<div class="pm">PM</div></div>'); //Closing div for outer shell so nested inner-shell

	var clockFace = $('<div class="face">')

	var clockScreen = $('<div class="screen">');

	var amPm = $('<div class="am-pm">•</div>');

	var auto = $('<div class="auto">AUTO</div>');

	var clockText = $('<div class="clock-text">4:20</div></div></div>');

	var topRadioLabel = $('<div class="top-label">88 - 92 - 96 - 100 - 104 - 108                MHz</div>');

	var bottomRadioLabel = $('<div class="bottom-label">53 - 60 - 70 - 80 - 100 - 130 - 170 x10KHz</div>');

	// Start appending outer shells inner shells etc
	clock.append(outerShell);
	outerShell.append(innerShell);

	innerShell.append(clockTitle)
	innerShell.append(clockFace)
	innerShell.append(topRadioLabel);
	innerShell.append(bottomRadioLabel);


	clockFace.append(pm);
	clockFace.append(auto);
	clockFace.append(clockScreen);

	clockScreen.append(amPm);
	clockScreen.append(clockText);

	// final append to container
	$('.container').append(clock);



	setInterval('updateClock()', 1000);


});

// 	    __    _____    ________
// 	   / /   /  _/ |  / / ____/
// 	  / /    / / | | / / __/   
// 	 / /____/ /  | |/ / /___   
// 	/_____/___/  |___/_____/   
// 	                           

//Pulled from jQuery clock demo

function updateClock() {
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();

	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = (currentHours < 12) ? "AM" : "PM";

	// Convert the hours component to 12-hour format if needed
	currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

	// Convert an hours component of "0" to "12"
	currentHours = (currentHours == 0) ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;


	$(".clock-text").html(currentTimeString);

}