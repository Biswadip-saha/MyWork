// Geolocation API

// Current Position

function curSuccess(pos) {
	const coords = pos.coords;
	console.log(`Latitude: ${coords.latitude}`);
	console.log(`Latitude: ${coords.longitude}`);
	console.log(`Latitude: ${coords.accuracy} m`);
}
function curError(err) {
	console.log(`Error: ${err.code}-${err.message}`);
}
const curOptions = {
	enableHighAccuracy: true, // Use GPS
	timeout: 5000, // Time to wait to stop trying for location
	maximumAge: 0, // Do not use cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Watch Position

const target = {
	latitude: 41.32243,
	longitude: -71.34242,
};

function watchSuccess(pos) {
	const coords = pos.coords;

	if (
		target.latitude === coords.latitude &&
		target.longitude === coords.longitude
	) {
		console.log('You Have Reached Your Location');
		navigator.geolocation.clearWatch(watchId);
	}
}
function watchError(err) {
	console.log(`Error: ${err.code}-${err.message}`);
}
const watchOptions = {
	enableHighAccuracy: true, // Use GPS
	timeout: 5000, // Time to wait to stop trying for location
	maximumAge: 0, // Do not use cached position
};

const watchId = navigator.geolocation.watchPosition(
	watchSuccess,
	watchError,
	watchOptions
);

// Canvas API

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Rectangle
context.fillStyle = 'green';
context.fillRect(10, 10, 150, 100);

// Circle
context.fillStyle = 'red';
context.arc(300, 300, 100, 0, Math.PI * 2);
context.fill();

// Lines
context.beginPath();
context.strokeStyle = 'orange';
context.lineWidth = 5;
context.moveTo(10, 10);
context.lineTo(300, 300);
context.stroke();

// Text
context.font = '30px Arial';
context.fillStyle = 'blue';
context.fillText('Hello World', 300, 100, 300);
context.lineWidth = 1;
context.strokeText('Hello World', 300, 500, 300);

// Image
const img = document.querySelector('#image1');
img.style.display = 'none';
img.addEventListener('load', () => {
	context.drawImage(img, 250, 250, 100, 100);
});

// Request Animation Frame

const image = document.querySelector('#image2');
let start;
let done;

function step(timestamp) {
	if (start == undefined) {
		start = timestamp;
	}
	const elapsed = timestamp - start;

	if (elapsed > 5000) {
		done = true;
	}
	if (done) {
		return;
	}

	image.style.transform = `translateX(${elapsed / 20}px) rotate(${
		elapsed / 20
	}deg)`;

	requestAnimationFrame(step);
}

requestAnimationFrame(step);

// Audio API

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
	audio.pause();
	audio.currentTime = 0;
});
audio.addEventListener('timeupdate', () => {
	currentTime.innerText = audio.currentTime;
});
volume.addEventListener('change', () => (audio.volume = volume.value));

// Video API

const video = document.getElementById('video');
const playVid = document.getElementById('playVid');
const pauseVid = document.getElementById('pauseVid');
const stopVid = document.getElementById('stopVid');
const currentVid = document.getElementById('current-timeVid');
playVid.addEventListener('click', () => video.play());
pauseVid.addEventListener('click', () => video.pause());
stopVid.addEventListener('click', () => {
	video.pause();
	video.currentTime = 0;
});
video.addEventListener('timeupdate', () => {
	currentTime.innerText = audio.currentTime;
});