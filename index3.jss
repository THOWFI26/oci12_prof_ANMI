const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching the weather data');
        });
}
