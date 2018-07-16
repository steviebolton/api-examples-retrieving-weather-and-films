let request = new XMLHttpRequest();
let APIKEY = "b8f23e5abf6669f11f6287afb03e02b9";
console.log
function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    let sunsetTime = new Date(+newData.sys.sunset*1000).toString()
    let temp = +newData.main.temp - 273.15;
    let wind = +newData.wind.speed;
    let clouds = +newData.clouds.all;
    let theLink = "<img src='http://openweathermap.org/img/w/" + newData.weather[0].icon + ".png' />"; 
    
    
    console.log(newData);
    let htmlString = "<div><strong>City:</strong> " + newData.name + "</div>";
    htmlString += "<div><strong>Current Weather:</strong> " + newData.weather[0].description + "</div>"
    
    htmlString += theLink + "<div><strong>Current Temerature:</strong> " + sunsetTime + "</div>"
    
    htmlString += theLink + "<div><strong>Current Temperature:</strong> " + temp + "</div>";
    
    htmlString += theLink + "<div><strong>Current Wind Speed:</strong> " + wind + "</div>";
    
    htmlString +=  theLink + "<div><strong>Clouds:</strong> " + clouds + "</div>";
    
    
    

    
    
    
    
    
    document.getElementById("data").innerHTML = htmlString;
}



function submitCity() {
    city = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKEY)

        request.send();
}

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>City not found. Please try again!</strong>";
    }
}








