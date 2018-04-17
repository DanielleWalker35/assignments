const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger.js")

const bountyRouter = require("./routes/bounties.js");
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(logger);

app.use("/bounties", bountyRouter)

app.listen(port, () => console.log("server running on port " + port));