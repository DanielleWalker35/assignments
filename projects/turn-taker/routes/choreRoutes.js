const express = require("express");
const choreRouter = express.Router();

const ChoreModel = require("../models/choreModel.js");

choreRouter.route("/")
    .get((req, res) => {
        ChoreModel.find(req.query, (err, foundChores) => {
            if (err) return res.send(err);
            res.status(200).send(foundChores);
        })
    })
    .post((req, res) => {
        const newChore = new ChoreModel(req.body);
        newChore.save((err, addedChore) => {
            if (err) return res.send(err);
            res.status(201).send(addedChore);
        })
    })

choreRouter.route("/:id")
    .get((req, res) => {
        ChoreModel.findOne({ _id: req.params.id }, (err, foundChore) => {
            if (err) return res.send(err);
            if (!foundChore) return res.status(404).send({ message: "Chore not found." })
            res.status(200).send(foundChore);
        })
    })
    .delete((req, res)=>{
        ChoreModel.findOneAndRemove({_id: req.params.id}, (err, deletedChore)=>{
            if(err) return res.send(err);
            if(!deletedChore) return res.status(404).send({message: "Chore not found."});
            res.status(200).send({message: `${deletedChore.title} was successfully deleted.`});
        })
    })
    .put((req, res)=>{
        ChoreModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedChore)=>{
            if(err) return res.send(err);
            if(!updatedChore) return res.status(404).send({message: "Chore not found."});
            res.status(200).send(updatedChore);
        })
    })

module.exports = choreRouter;