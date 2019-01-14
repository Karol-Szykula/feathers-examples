// Establish a Socket.io connection
const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();

client.configure(feathers.socketio(socket));
// Use localStorage to store our login token
client.configure(feathers.authentication({
    storage: window.localStorage
}));

class App {
    constructor() {

        this.init()
    }

    init() {
        const buttonGetWeatherApi = document.createElement("button");
        buttonGetWeatherApi.innerHTML = "Get weather";

        const container = document.querySelector('.container')
        container.innerHTML = ''
        container.appendChild(buttonGetWeatherApi)

        // 3. Add event handler
        buttonGetWeatherApi.addEventListener("click", function () {
            fetch('http://localhost:3030/api/weather')
                .then(response => { return response.json() })
                .then((json) => { container.innerHTML = JSON.stringify(json) })
                .catch(error => { console.log(error) })
        });
    }
}

app = new App()
