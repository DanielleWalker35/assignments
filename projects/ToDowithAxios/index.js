var toDoList = document.getElementById("toDo");
var myList = "https://api.vschool.io/danielle/todo/"
//put data object and inputs and define my form
var newData = {
    title: "",
    description: "",
    price: "",
    completed: "",
};
var form = document.submit;
var titleInput = document.submit.title;
var descriptInput = document.submit.description;
var priceInput = document.submit.price;

titleInput.addEventListener("input", function (event) {
    newData.title = event.target.value;
});
descriptInput.addEventListener("input", function (event) {
    newData.description = event.target.value;
});
priceInput.addEventListener("input", function (event) {
    newData.price = event.target.value;
})

axios.get(myList).then(function (response) {
    for (var i = 0; i < response.data.length; i++) {
        var listItem = document.createElement("li");
        var checkBox = document.createElement("input");
        let spanItem = document.createElement("span");
        spanItem.innerHTML = response.data[i].title;
        spanItem.id = response.data[i]._id;
        checkBox.type = "checkbox";
        checkBox.checked = response.data[i].completed;

        if (checkBox.checked) {
            spanItem.style.textDecoration = "line-through";
        }
        checkBox.addEventListener("change", function (event) {
            //do a put request
            axios.put(myList + spanItem.id, {
                completed: event.target.checked
            }).then(function (response) {
                console.log(spanItem.id);
                if (event.target.checked) {
                    spanItem.style.textDecoration = "line-through";
                } else {
                    spanItem.style.textDecoration = "none";
                }
            })
        })
        listItem.appendChild(checkBox);
        listItem.appendChild(spanItem);
        toDoList.appendChild(listItem);
    };


});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    axios.post(myList, newData).then(function (response){
    axios.post(myList, newData).then(function (response) {
        let listItem = document.createElement("li");
        let checkBox = document.createElement("input");
        let spanItem = document.createElement("span");
        spanItem.innerHTML = response.data.title;
        spanItem.id = response.data._id;
        checkBox.type = "checkbox";
        checkBox.checked = newData.completed;
        listItem.appendChild(checkBox);
        listItem.appendChild(spanItem);
        toDoList.appendChild(listItem);
        checkBox.addEventListener("change", function (event) {
            //do a put request
            axios.put(myList + spanItem.id, {
                completed: event.target.checked
            }).then(function (response) {
                console.log(spanItem.id);
                if (event.target.checked) {
                    spanItem.style.textDecoration = "line-through";
                } else {
                    spanItem.style.textDecoration = "none";
                }
            })
        })
    });
    });
});