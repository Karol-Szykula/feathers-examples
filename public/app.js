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
            fetch('http://localhost:3030/api/weather', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
                body: JSON.stringify({ "text": "Hello from the command line!" }), // body data type must match "Content-Type" header
            })
                .then(response => { return response.json() })
                .then((json) => { container.innerHTML = JSON.stringify(json) })
                .catch(error => { console.log(error) })
        });
    }
}

app = new App()
