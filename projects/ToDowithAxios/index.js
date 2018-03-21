var myList = "https://api.vschool.io/danielle/todo/"
document.onload = pullToDos();
var toDoList = document.getElementById("toDo");
//put data object and inputs and define my form

var form = document.submit;

function createDOMStuff(toDoItem) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let spanItem = document.createElement("span");
    let description = document.createElement("p");
    // description.innerHTML = "description";
    let price = document.createElement("p");
    let image = document.createElement("img");
    checkBox.type = "checkbox";
    checkBox.checked = toDoItem.completed;

    if (checkBox.checked) {
        spanItem.style.textDecoration = "line-through";
        description.style.textDecoration = "line-through";
    }
    var id = toDoItem._id;
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = "Delete";
    spanItem.innerHTML = toDoItem.title;
    description.innerHTML = "description: " + toDoItem.description;
    price.innerHTML = "price: $" + toDoItem.price;
    image.innerHTML = toDoItem.image;
    deleteButton.addEventListener("click", function (event) {
        toDoList.removeChild(listItem);
        axios.delete("https://api.vschool.io/danielle/todo/" + id, {id: event.target.value}).then(function (response) {
        })
    })
    checkBox.addEventListener("change", function (event) {
        //do a put request
        var id = toDoItem._id;
        if (event.target.checked) {
            spanItem.style.textDecoration = "line-through";
            description.style.textDecoration = "line-through";
        } else {
            spanItem.style.textDecoration = "none";
            description.style.textDecoration = "none";
        }
        axios.put("https://api.vschool.io/danielle/todo/" + id, {
            completed: event.target.checked
        }).then(function (response) {
        })
    })
    listItem.appendChild(checkBox);
    listItem.appendChild(spanItem);
    listItem.appendChild(description);
    listItem.appendChild(price);
    listItem.appendChild(deleteButton);
    listItem.appendChild(image);
    toDoList.appendChild(listItem);

}

function pullToDos() {
    axios.get(myList).then(function (response) {
        // console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            createDOMStuff(response.data[i]);
        };
    });
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var newData = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        image: form.image.value,
        completed: false
    };
    createDOMStuff(newData);
    axios.post("https://api.vschool.io/danielle/todo/", newData).then(function (response) {
        })
        .catch(error => {
            console.error(error);
        })
    form.title.value = "";
    form.description.value = "";
    form.price.value = "";
    form.image.value = "";
});