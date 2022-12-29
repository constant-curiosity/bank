"Use Strict";

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB | Mongoose.");
});
