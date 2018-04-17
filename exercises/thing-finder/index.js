const express = require("express");
const app = express();
const uuid = require("uuid");
const bodyParser = require("body-parser");

let fruits = require("./fruits");

const port = 8080;

app.use(bodyParser.json());

app.route("/fruits")
    .get((req, res) => {
        const { query } = req;
        const queriedFruits = fruits.filter(fruit => {
            for (let key in query) {
                if (!fruit.hasOwnProperty(key) || String(fruit[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        })
        res.status(200).send(queriedFruits);
    })
    .post((req, res) => {
        const newFruit = req.body;
        newFruit._id = uuid();
        fruits.push(newFruit);
        res.status(201).send(newFruit);
    })

app.route("/fruits/:id")
    .get((req, res) => {
        const { id } = req.params;
        const foundFruit = fruits.filter(fruit => fruit._id === id)[0];
        res.status(200).send(foundFruit);
    })
    .delete((req, res) => {
        const { id } = req.params;
        const fruits = fruits.filter(fruit => fruit._id !== id);
        res.status(204).send();
    })
    .put((req, res) => {
        const { id } = req.params;
        const editedFruit = req.body;
        const fruits = fruits.map(fruit => fruit._id === id ? editedFruit = { ...fruit, ...editedFruit } : fruit);
        res.status(200).send(editedFruit);
    })

app.listen(port, () => console.log("server running on port " + port));