//Grab references to form, inputs
var formEl = document.querySelector('form')
var inputEl = document.querySelector('input[type="text"]')
var weatherEl = document.getElementById('weather')
console.log(formEl, textInput)
var current = document.getElementById('current')
var clouds = document.getElementById('clouds')
var feels = document.getElementById('feels')
var update = document.getElementById('update')
var city = document.querySelector('h2')

//form onsubmit, formData obj
formEl.onsubmit = function(e) {
    e.preventDefault()
    var query = inputEl.value
    console.log(query)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=imperial&appid=21ff80b2840f9b055798e2a0e6391ba5')
    .then(function(res) {
        return res.json()
    })
    .then(function(result) {
        if (result.Error === 'City not found!') return
        renderWeather(result)
        inputEl.value = ""
        console.log(result)
    })

    //calls the OpenWeather API and returns ann object of weather info 
function getWeather(query) {
    // default search to USA
    if (!query.includes(",")) query += ',us'
    //return the fetch call which returns a promise
    //allows us to call .then on this function 
    return fetch (
        'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=imperial&appid=21ff80b2840f9b055798e2a0e6391ba5'
    )

    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        //location not found. throw error/reject promise
        if (data cod === "404") throw new Error('location not found')
        //locate weather icon url
    }
}

//form submit event listener, input elements
formEl.addEventListener('submit', function(event) {
    event.preventDefault()
    var formData = Object.fromEntries(new FormData(event.target))
    console.log(formData)

    function renderWeather(weatherObj) {
        weatherEl.innerHTML = ""
    
    //change text on app
        city.textContent = weatherObj.city + " (" + ")" 
        weatherEl.appendChild(city)
    
        clouds.textContent = weatherObj.clouds + " (" + ")" 
        weatherEl.appendChild(clouds)
        
        current.textContent = weatherObj.current + " (" + ")" 
        weatherEl.appendChild(current)
    
        feels.textContent = weatherObj.feels + " (" + ")" 
        weatherEl.appendChild(feels)
    
        update.textContent = weatherObj.update + " (" + ")" 
        weatherEl.appendChild(update)
    }
})




.catch(displayLocNotFound)

//reset form field to a blank state
inputEl.value = ""
}