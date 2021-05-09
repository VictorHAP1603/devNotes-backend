const mongoose = require("mongoose");
require("dotenv").config({ path: "./variables.env" });

const db_config = process.env.DB_CONNECT;

const connection = mongoose.connect(db_config, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
