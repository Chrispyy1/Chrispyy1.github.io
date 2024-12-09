const apiKey = "your_api_key_here";
function getWeatther(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const weatherContainer = document.querySelector("#weather");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const description =data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn${data.weather[0].icon}.png`;
            weatherContainer.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>${description.toUpperCase()}</p>
                <p>Temperature: ${temp}degreesF</p>
                <img src="${icon}" alt="${description}">
            `;
        });
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherContainer.innerHTML ="<p>Unable to fetch weather data. Please try again later.</p>";
        });
}
getWeather("New York");
