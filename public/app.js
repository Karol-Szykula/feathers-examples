
class App {
    constructor(containerName) {
        this.container = document.querySelector(`.${containerName}`) || document.body
    }



    renderUI() {
        this.container.innerHTML = ''

        this.container.style.display = 'flex'
        this.container.style.flexDirection = 'column'
        this.container.style.justifyContent = 'center'
        this.container.style.alignItems = 'center'

        this.container.style.backgroundColor = 'aqua'

        this.container.appendChild(this.renderInput())
        this.container.appendChild(this.renderGetWeatherButton())
        this.container.appendChild(this.renderWeather())

    }

    renderInput() {
        const divInput = document.createElement('div')
        divInput.style.backgroundColor = 'green'
        const input = document.createElement('input')

        divInput.appendChild(input)

        return divInput
    }

    renderGetWeatherButton() {
        const buttonGetWeatherApi = document.createElement("button");
        buttonGetWeatherApi.innerHTML = "Get weather";

        buttonGetWeatherApi.addEventListener("click", () => {
            this.fetchData()
        });


        const divButton = document.createElement('div')
        divButton.innerHTML = ''
        divButton.style.backgroundColor = 'red'

        divButton.appendChild(buttonGetWeatherApi)

        return divButton
    }

    renderWeather() {
        this.divWeather = document.createElement('div')
        this.divWeather.innerHTML = 'loading'

        this.divWeather.style.backgroundColor = 'orange'

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