const express = require("express");
const personRouter = express.Router();

const PersonModel = require("../models/personModel.js");

personRouter.route("/")
    .get((req, res) => {
        PersonModel.find(req.query, (err, foundPeople) => {
            if (err) return res.send(err);
            res.status(200).send(foundPeople);
        });
    })
    .post((req, res) => {
        const newPerson = new PersonModel(req.body);
        newPerson.save((err, addedPerson) => {
            if (err) return res.send(err);
            res.status(201).send(addedPerson);
        })
    })

personRouter.route("/:id")
    .get((req, res) => {
        PersonModel.findOne({ _id: req.params.id }, (err, foundPerson) => {
            if (err) return res.send(err);
            if (!foundPerson) return res.status(404).send({ message: "Person not found." })
            res.status(200).send(foundPerson);
        })
    })
    .delete((req, res) => {
        PersonModel.findOneAndRemove({ _id: req.params.id }, (err, deletedPerson) => {
            if (err) return res.send(err);
            if (!deletedPerson) return res.status(404).send({ message: "Person not found." });
            res.status(200).send({ message: `${deletedPerson.name} was successfully deleted` })
        })
    })
    .put((req, res) => {
        PersonModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, updatedPerson) => {
            if (err) return res.send(err);
            if (!updatedPerson) return res.status(404).send({ message: "Person not found." });
            res.status(200).send(updatedPerson)
        })
    })

module.exports = personRouter;