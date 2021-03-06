const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");

require("dotenv").config({ path: "./variables.env" });

const app = express();
require("./config/db_config");

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors({ origin: 'https://dev-notes-app-frontend.herokuapp.com' }));
    next();
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
