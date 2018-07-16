let xhr = new XMLHttpRequest();
let APIKEY = "35e16679c616a21b9ddebb66272c5902";

function submitMovie() {
    
    let query = document.getElementById("movieForm")["movie"].value;
    xhr.open("GET", "//api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&language=en-US&query=" + query + "&page=1&include_adult=false");
    xhr.send();
}

function displayText(data) {
    data = JSON.parse(data);
    let list = "";
    
    for (let i in data.results) {
        list += "<li>" + data.results[i].title + "</li>";
    }
    
    document.getElementById("data").innerHTML = "<ul>" + list + "</ul>";
    
    $("li").click(function() {
        alert(this.textContent);
    })
    
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayText(this.responseText);
    };
}