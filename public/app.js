
class App {
    constructor(containerName) {
        this.container = document.querySelector(`.${containerName}`) || document.body
    }



    renderUI() {
        this.container.innerHTML = ''

        this.container.style.display = 'flex'
        this.container.style.justifyContent = 'center'

        this.container.appendChild(this.renderGetWeatherButton())
        this.container.appendChild(this.renderWeather())

    }

    renderGetWeatherButton() {
        const buttonGetWeatherApi = document.createElement("button");
        buttonGetWeatherApi.innerHTML = "Get weather";

        buttonGetWeatherApi.addEventListener("click", () => {
            this.fetchData()
        });

        buttonGetWeatherApi.style.color = 'red'

        const divButton = document.createElement('div')
        divButton.innerHTML = ''

        divButton.appendChild(buttonGetWeatherApi)

        return divButton
    }

    renderWeather() {
        this.divWeather = document.createElement('div')
        this.divWeather.innerHTML = 'loading'

        return this.divWeather
    }

    render() {
        this.renderUI()
    }

    fetchData(url) {

        url = url || `http://localhost:3030//api`

        fetch(url)
            .then(response => { return response.json() })
            .then((json) => {

                let jsonHtml = JSON.stringify(json, null, 2)

                this.divWeather.innerHTML = ''

                this.divWeather.innerHTML = jsonHtml
            })
            .catch(error => { console.log(error) })
    }
}

const app = new App('container')
app.render()