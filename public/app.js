
class App {
    constructor(containerName) {
        this.container = document.querySelector(`.${containerName}`) || document.body
        this.city = 'Lublin'
        this.country = 'pl'
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
        input.addEventListener('change', () => {
            this.city = input.value
        })
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

    fetchData(param1, param2) {

        param1 = this.city
        param2 = this.country
        let url = `http://localhost:3030//api?city=${param1}&country=${param2}`

        fetch(url)
            .then(response => { return response.json() })
            .then((json) => {

                let jsonHtml = JSON.stringify(json, null, 2)
                console.log(json)


                this.divWeather.innerHTML = ''

                this.divWeather.innerHTML = jsonHtml
            })
            .catch(error => { console.log(error) })
    }
}

const app = new App('container')
app.render()