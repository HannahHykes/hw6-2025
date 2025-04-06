var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

window.addEventListener("load", function () {
    console.log("Good job opening the window");

    const video = document.getElementById("player1");
    const playButton = document.getElementById("play");
    const volumeDisplay = document.getElementById("volume");
	const pauseButton = document.getElementById("pause");
	const slowerButton = document.getElementById("slower");
	const fasterButton = document.getElementById("faster");
	const skipButton = document.getElementById("skip");
	const muteButton = document.getElementById("mute");
	const volumeSlider = document.getElementById("slider");
	const vintageButton = document.getElementById("vintage");
	const originalButton = document.getElementById("orig");

    // Ensure autoplay and loop are off
    video.autoplay = false;
    video.loop = false;
    video.load();

	volumeDisplay.innerHTML = Math.round(video.volume * 100) + "%";

    // Play button functionality
    playButton.addEventListener("click", function () {
        video.play();
        // Update volume display (as percent)

		video.volume = volumeSlider.value / 100;

        const volumePercent = Math.round(video.volume * 100);
        volumeDisplay.innerHTML = volumePercent + "%";
		
    });

	pauseButton.addEventListener("click", function (){
		video.pause();
	})

	slowerButton.addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New speed is:", video.playbackRate.toFixed(2));
	})

	fasterButton.addEventListener("click", function() {
		video.playbackRate *= (1/0.9);
		console.log("New speed is", video.playbackRate.toFixed(2));
	})

	skipButton.addEventListener("click", function(){
		if(video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		}
		else {
			video.currentTime += 10;
		}

		console.log("Current location:", video.currentTime.toFixed(2));
	})

	muteButton.addEventListener("click", function () {
		if(video.muted) {
			video.muted = false;
			muteButton.innerHTML = "Mute";
		}
		else {
			video.muted = true;
			muteButton.innerHTML = "Unmute";
		}
	})

	volumeSlider.addEventListener("input", function () {
		const newVolume = volumeSlider.value / 100;
		video.volume = newVolume;
		volumeDisplay.innerHTML = (newVolume * 100) + "%";
		
	})

	vintageButton.addEventListener("click", function() {
		video.classList.add("oldSchool");
	})

	originalButton.addEventListener("click", function() {
		video.classList.remove("oldSchool");
	})

});





