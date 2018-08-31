const API_KEY = "5ffe16b516cb6afbc171fad9c8b9922c"

function handleFormSubmit(event) {
  //handle submit event. preventdefault prevents page from refreshing.
  event.preventDefault()
  const input = document.getElementById('city')
  const value = input.value
  
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + value + `&APPID=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(responseJSON => displayCurrentWeather(responseJSON))

  fetchFiveDayForecast(value)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city

}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  //current temp, low, hi, humidity, cloud cover
  const mainData = json.main
  const temp = document.getElementById('temp')
  const low = document.getElementById('low')
  const high = document.getElementById('high')
  const humidity = document.getElementById('humidity')
  const cloudCover = document.getElementById('cloudCover')

  temp.innerHTML = mainData.temp
  low.innerHTML = mainData.temp_min
  high.innerHTML = mainData.temp_max
  humidity.innerHTML = mainData.humidity + '%'
  cloudCover.innerHTML = json.clouds.all + '%'
  
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + `&APPID=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(responseJSON => displayFiveDayForecast(responseJSON))
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json)
  const forecast = json.list
  const aside = document.querySelector('aside')
  const counter = 0
  const averageTemp = 0
  forecast.forEach((eachForecastItem) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <p>${eachForecastItem.dt_txt}</p>
    <p>${eachForecastItem.dt_temp_min}</p>
    <p>${eachForecastItem.dt_temp_max}</p>`
  })
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS

}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.addEventListener('submit', handleFormSubmit)
})
