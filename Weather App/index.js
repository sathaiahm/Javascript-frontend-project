let butu = document.querySelector(".search button");

async function checkWeather(city_name){

    let icon = document.querySelector(".wheather-icon");
    let error = document.querySelector(".error");

    const apikey = "3d60e4aff06615059b4a72b4f7e122ad";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&units=metric`;

    const response = await fetch(apiurl)
    let data = await response.json();
    console.log(data);

    if(response.status == 404){
        error.style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main == "Clouds"){
            icon.src = "clouds.png";
        }else if (data.weather[0].main == "Clear"){
            icon.src = "clear.png";
        }else if (data.weather[0].main == "Rain"){
            icon.src = "rain.png";
        }else if (data.weather[0].main == "Mist"){
            icon.src = "clear.png";
        }else if (data.weather[0].main == "Drizzle"){
            icon.src = "drizzle.png";
        }

        document.querySelector(".weather").style.display = "block";
        error.style.display = "none";

    }

    
}


butu.addEventListener("click",()=>{
    let city = document.querySelector(".search input").value;
    checkWeather(city);
});


