const inputElem = document.getElementById("inputElem");

const cityNameElem = document.getElementById("cityName");
const tempElem = document.getElementById("temp");
const descriptionElem = document.getElementById("description");
const feelsLikeElem = document.getElementById("feelsLike");
const humidityElem = document.getElementById("humidity");
const windSpeedElem = document.getElementById("windSpeed");
const visibilityElem = document.getElementById("visibility");
const aqiElem = document.getElementById("aqi");

const cardBody = document.getElementById("cardBody");

const eyeLoaderIcon = document.getElementById("eyeLoaderIcon");
const rainyIcon = document.getElementById("rainyIcon");
const sunnyIcon = document.getElementById("sunnyIcon");
const thunderStormIcon = document.getElementById("thunderStormIcon");
const cloudyIcon = document.getElementById("cloudyIcon");
const snowIcon = document.getElementById("snowIcon");

let activeIcon = eyeLoaderIcon;

function onSearch() {
	getWeatherData(inputElem.value);
	activeIcon == eyeLoaderIcon ? null : changeIcon(eyeLoaderIcon);
}

// Calling API
async function getWeatherData(location) {
	if (!location) {
		toastNotification("Location Missing!");
		return;
	}
	inputElem.blur();
	inputElem.disabled = true;
	goBtn.disabled = true;
	inputElem.value = "Loading...";
	try {
		const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${location}&key=6d78b3d1b4864ea3a763c63a729942d2`);
			console.log(response)
		if (response.status === 429) {
			throw new Error("Limit Reached! Come back tomorrow", { cause: 429 });
		} else if (response.status === 403) {
			throw new Error("API key expired!", { cause: 403 });
		}
		const data = await response.json();
		if (!!data.error) {
			throw new Error("Enter a Valid Input", { cause: 400 });
		}
		const {
			city_name: cityName,
			temp,
			weather: { description, code: weatherCode },
			app_temp: feelsLike,
			rh: humidity,
			wind_spd: windSpeed,
			vis: visibility,
			aqi,
		} = data.data[0];

		updateUI(cityName, temp, description, feelsLike, humidity, windSpeed, visibility, aqi, weatherCode);
	} catch (error) {
		if (error.cause === 400) {
			toastNotification(error.message);
		} else if (error.cause === 429) {
			toastNotification(error.message);
		} else if (error.cause === 403) {
			toastNotification(error.message);
		}
	}
	inputElem.value = "";
	inputElem.disabled = false;
	goBtn.disabled = false;
}

// Update UI
function updateUI(cityName, temp, description, feelsLike, humidity, windSpeed, visibility, aqi, weatherCode) {
	cityNameElem.innerText = cityName;
	tempElem.innerText = temp + " °C";
	descriptionElem.innerText = description;
	feelsLikeElem.innerText = feelsLike + " °C";
	humidityElem.innerText = humidity + " %";
	windSpeedElem.innerText = windSpeed + " m/s";
	visibilityElem.innerText = visibility + " km";
	aqiElem.innerText = aqi;

	if ([200, 201, 202, 230, 231, 232, 233].includes(weatherCode)) {
		changeIcon(thunderStormIcon);
	} else if ([300, 301, 302, 500, 501, 502, 511, 520, 521, 522, 900].includes(weatherCode)) {
		changeIcon(rainyIcon);
	} else if ([600, 601, 602, 610, 611, 612, 621, 622, 623].includes(weatherCode)) {
		changeIcon(snowIcon);
	} else if (800 === weatherCode) {
		changeIcon(sunnyIcon);
	} else if ([801, 802, 803, 804, 700, 711, 721, 731, 741, 751].includes(weatherCode)) {
		changeIcon(cloudyIcon);
	}
}

function changeIcon(iconToChangeTo) {
	activeIcon.style.display = "none";
	activeIcon = iconToChangeTo;
	activeIcon.style.display = "flex";
	cardBody.style.display = activeIcon === eyeLoaderIcon ? "none" : "flex";
}

// Toasts
function toastNotification(message) {
	Toastify({
		text: message,
		duration: 2500,
		gravity: "top",
		position: "right",
		stopOnFocus: true,
		style: {
			background: "#BF3131",
		},
	}).showToast();
}

const goBtn = document.getElementById("goBtn");
goBtn.addEventListener("click", onSearch);
inputElem.addEventListener("keypress", (e) => {
	if (e.key == "Enter") goBtn.click();
});
