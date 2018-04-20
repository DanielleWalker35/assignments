const express = require("express");
const bountyRouter = express.Router();

// const uuid = require("uuid");

const BountyModel = require("../models/bountyModel.js");

bountyRouter.route("/")
    .get((req, res) => {
        // const { query } = req;
        BountyModel.find(req.query, (err, foundBounties) => {
            if (err)
                res.send(err);
            else
                res.status(200).send(foundBounties);
        });
        //check ceach bounty in the array
        //filter it by matching properties/values
        // const queriedBounties = bounties.filter(bounty => {
        //     for (let key in query) {
        //         if (!bounty.hasOwnProperty(key) || String(bounty[key]).toLowerCase !== query[key].toLowerCase) {
        //             return false;
        //         }
        //     }
        //     return true;
        // })
        // res.status(200).send(queriedBounties);
    })
    .post((req, res) => {
        //use save() to add to the database
        const newBounty = new BountyModel(req.body);
        newBounty.save((err, addedBounty) => {
            if (err) return res.send(err);
            res.status(201).send(addedBounty);
        })
        // const newBounty = req.body;
        // newBounty._id = uuid();
        // bounties.push(newBounty);
        // res.status(201).send(newBounty);
    })

bountyRouter.route("/:id")
    .get((req, res) => {
        //use findOne() to get a particular bounty
        BountyModel.findOne({ _id: req.params.id }, (err, foundBounty) => {
            if (err) return res.send(err);
            if (!foundBounty) return res.status(404).send({ message: "Bounty not found." })
            res.status(200).send(foundBounty);
        })
        // const { id } = req.params;
        // const foundBounty = bounties.filter(bounty => bounty._id === id)[0];
        // re.status(200).send(foundBounty);
    })
    .delete((req, res) => {
        //use findByIdAndDelete() to delete a particular bounty
        BountyModel.findOneAndRemove({ _id: req.params.id }, (err, deletedBounty) => {
            if (err) return res.send(err)
            if (!deletedBounty) return res.status(404).send({ message: "Bounty not found." })
            res.status(200).send({message: `${deletedBounty.name} 'was succuessfully deleted'`});
        })

        // const { id } = req.params;
        // bounties = bounties.filter(bounty => bounty._id !== id);
        // res.status(204).send();
    })
    .put((req, res) => {
        //use findByIdAndUpdate() to update a particular bounty
        BountyModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},(err, updatedBounty)=>{
            if (err) return res.send(err)
            if (!updatedBounty) return res.status(404).send({ message: "Bounty not found." })
            res.status(200).send(updatedBounty);
        })
        // const { id } = req.params;
        // let editedBounty = req.body;
        // bounties = bounties.map(bounty => bounty._id === id ? editedBounty = { ...bounty, ...editedBounty } : bounty);
        // res.status(200).send(editedBounty);
    })


module.exports = bountyRouter;
