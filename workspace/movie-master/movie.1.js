let xhr = new XMLHttpRequest();
let APIKEY = "35e16679c616a21b9ddebb66272c5902";

function submitMovie() {
    
    let query = document.getElementById("movieForm")["movie"].value;
    xhr.open("GET", "//api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&language=en-US&query=" + query + "&page=1&include_adult=false");
    xhr.send();
}

function displayText(data) {
    data = JSON.parse(data);
    let name = "<h2>" + data.results[0].title + "</h2>";
    let popularity = "Popularity: "  + data.results[0].popularity + "</br>";
    let poster_path = "<img src=\"" + "https://image.tmdb.org/t/p/w200/" + data.results[0].poster_path + "\">" ;
    let overview = data.results[0].overview ;
    let release_date = "<p><strong>Release date:</strong> " + data.results[0].release_date + "</br>";
    let backdrop = "<img src=\"" + "https://image.tmdb.org/t/p/w200/" + data.results[0].backdrop_path + "\">" ;

  
    
   
    document.getElementById("data").innerHTML =  backdrop + name  + release_date + popularity + "<br>" + poster_path  + "<p>" + overview + "</p>" ;
    
    
    
    
    
}






xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayText(this.responseText);
    };
}

console.log(data);