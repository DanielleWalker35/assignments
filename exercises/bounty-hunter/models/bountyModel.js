const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema is a constructor function
//determines the template for all documents in a collection

const bountySchema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: String,
    bountyAmount: Number,
    living: Boolean,
    type: String
})

const BountyModel = mongoose.model("bounties", bountySchema);

module.exports = BountyModel;