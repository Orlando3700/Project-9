window.onload = function() {
    // Get the query parameter containing the weather data
    var urlParameters = new URLSearchParams(window.location.search);
    var weatherData = urlParameters.get('weatherData');

    if (weatherData) {
        var parsedData = JSON.parse(decodeURIComponent(weatherData));
        displayWeather(parsedData);
    } else {
        alert("No weather data found.");
    }
};

function displayWeather(data) {
    var city = data.name;
    var country = data.sys.country;
    var temperature = data.main.temp;
    var weatherDescription = data.weather[0].description;

    var weatherContainer = document.getElementById("weatherContainer");

	// Create and append the current date
    var dateHeader = document.createElement("h3");
    dateHeader.textContent = getCurrentDate();
    weatherContainer.appendChild(dateHeader);

    // Create and append the city and country header
    var cityHeader = document.createElement("h2");
    cityHeader.textContent = `${city}, ${country}`;
    weatherContainer.appendChild(cityHeader);

    // Create and append the temperature paragraph
    var tempParameter = document.createElement("p");
    tempParameter.textContent = `Temperature: ${temperature}°C`;
    weatherContainer.appendChild(tempParameter);

    // Create and append the weather description paragraph
    var weatherParameter = document.createElement("p");
    weatherParameter.textContent = `Weather: ${weatherDescription}`;
    weatherContainer.appendChild(weatherParameter);
}

// Function to get the current date
function getCurrentDate() {
    var currentDate = new Date();

    var months = [ "January", "February", "March", "April", "May", 
	"June", "July", "August", "September", "October", "November", 
	"December" ];

    var day = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var year = currentDate.getFullYear();

    return `${month} ${day}, ${year}`;
}


