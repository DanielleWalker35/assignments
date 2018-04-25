const mongoose = require("mongoose");
const { Schema } = mongoose;

const issueSchema = new Schema({
    title:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    totalVotes: Number
})

const IssueModel = mongoose.model("issues", issueSchema);

module.exports = IssueModel;