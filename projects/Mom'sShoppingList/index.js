var groceryList = document.getElementById("shoppingList");

var input = groceryList.groceries;
var items = document.getElementById("items");
//creating my boxes and place for my entries
var data = JSON.parse(localStorage.getItem("data")) || [];
console.log(data);
function displayData (){
    for (var i = 0; i< data.length; i++){
        input.value = data[i];
        create();
        input.value = "";
    }
}
displayData();
function create() {
    var listItem = document.createElement("li");
    listItem.id = input.value;
    var button = document.createElement("button");
    button.innerHTML = "X";
    var span = document.createElement("span");
    //adding my boxes and enteries to my list
    listItem.appendChild(button);
    listItem.appendChild(span);
    items.appendChild(listItem);
    span.innerHTML = input.value;
    button.addEventListener('click', function (event) {
        items.removeChild(listItem);
        data.splice(data.indexOf(input.value),1);
        localStorage.setItem("data", JSON.stringify(data));
    });
}

function addToList(event) {
    event.preventDefault();
    create();
    data.push(input.value);
    input.value = "";
    localStorage.setItem("data", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("data")));
};

groceryList.addEventListener("submit", addToList);