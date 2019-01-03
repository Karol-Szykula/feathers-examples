
class App {
    constructor(containerName) {
        this.container = document.querySelector(`.${containerName}`) || document.body
    }

    render() {
        // const container = document.querySelector('.container')
        this.container.innerHTML = ''

        const buttonGetWeatherApi = document.createElement("button");
        buttonGetWeatherApi.innerHTML = "Get weather";

        const divButton = document.createElement('div')
        divButton.innerHTML = ''
        divButton.appendChild(buttonGetWeatherApi)

        const divWeather = document.createElement('div')
        divWeather.innerHTML = ''


        // 3. Add event handler
        buttonGetWeatherApi.addEventListener("click", function () {
            fetch('http://localhost:3030//api')
                .then(response => { return response.json() })
                .then((json) => { this.render(divWeather, JSON.stringify(json, null, 2)) })
                .catch(error => { console.log(error) })
        });

        this.container.appendChild(divButton)
        this.container.appendChild(divWeather)

        this.container.appendChild(buttonGetWeatherApi)
    }

    renderWeather(where, what) {
        where.innerHTML = ''
        where.innerHTML = what
    }
}

const app = new App('container')
app.render()