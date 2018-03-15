var pokemonList = document.getElementById("toDoList");

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var pokemon = data.objects[0].pokemon;
        pokemon.forEach(pokemonObj => {
            var li = document.createElement("li");
            li.innerHTML = pokemonObj.name;
            pokemonList.appendChild(li);
        });
        // for(var i =0; i< pokemon.length; i++) {
        //     var pokemonObj = pokemon[i];
        //     var li = document.createElement("li");
        //     li.innerHTML = pokemonObj.name;
        //     pokemonList.appendChild(li);
        // }
    }
}
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();


//when the page loads, send a request for some data
//with that data, convert it to javascript
//create the necessary html elements which will: display that data
