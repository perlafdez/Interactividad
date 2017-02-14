var song = new Audio();
var current_song = "";

$(document).ready(function(){
	var audio = new Audio('audio/night.ogg');
	audio.play();
});


$("#birdy").click( function () {

	if(current_song != "birdy")
	{
		song.pause();
		song = new Audio('audio/birdy.ogg');
		song.play();

		current_song = "birdy";
	}
});

$("#xx").click( function () {

	if(current_song != "thexx")
	{
	song.pause();
	song = new Audio('audio/thexx.ogg');
	song.play();

	current_song = "thexx";
	}
});

$("#lifehouse").click( function () {
	if(current_song != "lifehouse") //if the currrent song not equal to lifehouse
	{
		song.pause(); //stop the other song
		song = new Audio('audio/lifehouse.ogg'); //create a new song with the lifehouse file
		song.play();//start the lifehouse sound

		current_song  = "lifehouse"; //set the current_song to lifehouse
	}
});