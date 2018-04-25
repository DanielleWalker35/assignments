const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const peopleRouter = require("./routes/peopleRoutes.js");
const choreRouter = require("./routes/choreRoutes.js");

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use("/people", peopleRouter);
app.use("/chores", choreRouter);

mongoose.connect("mongodb://localhost:27017/turn-taker", (err)=>{
    if(err) console.error(err);
    console.log("connected to mongodb");
})

app.listen(port, () => console.log("server running on port " + port));