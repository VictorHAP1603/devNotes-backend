const mongoose = require("mongoose");

const db_config =
  "mongodb+srv://victor:Rafagarrafa1603@cluster0.wogka.mongodb.net/annotations?retryWrites=true&w=majority";

const connection = mongoose.connect(db_config, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
