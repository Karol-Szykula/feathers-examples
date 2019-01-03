
class App {
    constructor(containerName) {
        this.container = document.querySelector(`.${containerName}`) || document.body
    }

    renderUI() {
        // const container = document.querySelector('.container')
        this.container.innerHTML = ''

        const buttonGetWeatherApi = document.createElement("button");
        buttonGetWeatherApi.innerHTML = "Get weather";

        buttonGetWeatherApi.addEventListener("click", () => {
            this.renderWeather()
        });

        const divButton = document.createElement('div')
        divButton.innerHTML = ''
        divButton.appendChild(buttonGetWeatherApi)

        this.container.appendChild(divButton)

        this.container.appendChild(buttonGetWeatherApi)
    }

    render() {
        this.renderUI()
    }

    renderWeather() {

        return fetch(`http://localhost:3030//api`)
            .then(response => { return response.json() })
            .then((json) => {

                let jsonHtml = JSON.stringify(json, null, 2)

                const divWeather = document.createElement('div')
                divWeather.innerHTML = ''

                divWeather.innerHTML = jsonHtml
                this.container.appendChild(divWeather)
            })
            .catch(error => { console.log(error) })
    }
}

const app = new App('container')
app.render()