const express = require("express");
const routes = require("./routes/routes");

const app = express();
require("./config/db_config");

app.use(express.json());
app.use(routes);

app.listen(3333);
