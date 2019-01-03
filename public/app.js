
const buttonGetWeatherApi = document.createElement("button");
buttonGetWeatherApi.innerHTML = "Get weather";

const container = document.querySelector('.container')
container.innerHTML = ''
container.appendChild(buttonGetWeatherApi)

// 3. Add event handler
buttonGetWeatherApi.addEventListener("click", function () {
    fetch('http://localhost:3030//api')
        .then(response => { return response.json() })
        .then((json) => { console.log(json) })
        .catch(error => { console.log(error) })
});

function showWeather(whereDiv, json) {
    whereDiv.innerHTML = json
}