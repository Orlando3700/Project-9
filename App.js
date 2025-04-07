// Replace with your actual OpenWeatherMap API key
var apiKey = "dcf1d0a077126ba4cc7925ac2dcd5132";  

function getWeather() {
    var city = document.getElementById("cityInput").value;

    // Check if the city input is empty
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    // URL for OpenWeatherMap API with city name and API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found. Please check the city name.");
            } else {
                // Redirect to weather.html and pass weather data as query parameters
                var weatherData = encodeURIComponent(JSON.stringify(data));
                window.location.href = `getWeather.html?weatherData=${weatherData}`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("An error occurred while fetching the weather data.");
        });
}

