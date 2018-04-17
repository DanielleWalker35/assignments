## Axios Todo Practice
Create a Todo list.


For the requirements below, you'll be building a frontend site that pulls your list of todos down from the API to display them, and allows the user to perform other CRUD methods on them as well.

For example, when the user adds a new todo, it will also POST that todo to the database using the provided API. This way, once the change it made, it's made permanently. When you refresh the page, since it's pulling from the data on the API, it should pull the current list of todos.

Basic Requirements (Bronze)
The user can see their current list of todos. (Preferably they show up as soon as the page loads.)
The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item.
A user should be able to give the item a price.
A user should be able to give the item a description.
For now, if you need to delete items that you have created, you can use Postman to delete the items. Read through the "using id" section in the API documentation to learn how to delete items using the item's unique id.

Tier two requirements (Silver)
Each todo will have a checkbox where it can be marked complete or incomplete
If a todo item is complete, it should have a strikethrough line on it
A user should be able to attach an imgUrl to the item (and if there is an imgUrl, the image should be displayed)
Tier three requirements (Gold)
A user will be able to delete todos (this is different from marking a todo as "completed")
Extra credit

A user will be able to edit todos
