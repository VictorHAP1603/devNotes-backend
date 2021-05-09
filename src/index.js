const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");

require("dotenv").config({ path: "./variables.env" });

const app = express();
require("./config/db_config");

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
