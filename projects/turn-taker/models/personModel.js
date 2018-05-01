const mongoose = require("mongoose");
const {Schema} = mongoose;

const personSchema = new Schema ({
    name:{
        required: true,
        type: String
    },
    age:{
        required: true,
        type: Number
    },
    assigned: {
        type:Number,
        default:0
    },
    assignedChores: Array
})

const PersonModel = mongoose.model("people", personSchema);

module.exports = PersonModel;