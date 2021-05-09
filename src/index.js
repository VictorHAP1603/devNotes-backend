const express = require("express");
const routes = require("./routes/routes");

require("dotenv").config({ path: "./variables.env" });

const app = express();
require("./config/db_config");

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
