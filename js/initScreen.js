function showWelcomeScreen() {
	hideAllScreens();
	setInitScreenListeners();
    $("#initScreen").show();
}

function setWelcomeScreenListeners() {
	setRotaryListener(showCountdownScreen);
	setClickListener($("#moodSet"), showCalendarScreen);
}