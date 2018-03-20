var groceryList = document.getElementById("shoppingList");

var input = groceryList.groceries;
var items = document.getElementById("items");
//creating my boxes and place for my entries
var data = [];

// input.addEventListener("input", function (event) {
//     data.push(event.target.value);
// })


function addToList(event) {
    event.preventDefault();
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
    data.push(input.value);
    input.value = "";
    localStorage.setItem("data", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("data")));
    button.addEventListener('click', function (event) {
        items.removeChild(listItem);
    })
}

groceryList.addEventListener("submit", addToList);