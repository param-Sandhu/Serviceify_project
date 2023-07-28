// These get all the necessary objects from the document 
const apiKey = "40e71b626b27546d319e726ae05c6ee4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDes = document.querySelector(".weather-des");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){ // If there is an error in loading the page
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        var data = await response.json();

        // console.log(data);

        //These populate the card with the data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        // These change the image and weather description based on the current weather
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "../openWeatherImages/images/clouds.png";
            weatherDes.innerHTML = "Clouds";

        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "../openWeatherImages/images/clear.png";
            weatherDes.innerHTML = "Clear";
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "../openWeatherImages/images/rain.png";
            weatherDes.innerHTML = "Rain";
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "../openWeatherImages/images/drizzle.png";
            weatherDes.innerHTML = "Drizzle";
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "../openWeatherImages/images/mist.png";
            weatherDes.innerHTML = "Mist";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
// checkWeather();