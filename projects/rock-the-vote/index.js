const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger.js");
const mongoose = require("mongoose");

const issueRouter = require("./routes/issues.js");
const commentRouter = require("./routes/comments.js");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(logger);

app.use("/issues", issueRouter);
app.use("/comments", commentRouter);

mongoose.connect("mongodb://localhost:27017/rock-the-vote", (err)=>{
    if(err) console.error(err);
    console.log("connected to mongodb");
})
//runs the server
app.listen(port, () => console.log("server running on port " + port));