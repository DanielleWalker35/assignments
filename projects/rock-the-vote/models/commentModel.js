const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    name: String,
    comment: {
        required: true,
        type: String
    },
    issueId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "issues"
    }
})

const CommentModel = mongoose.model("comments", commentSchema);

module.exports = CommentModel;