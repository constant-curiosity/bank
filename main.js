"Use Strict";

const express = require("express"),
  app = express(),
  router = require("./routes/index"),
  session = require("express-session"),
  mongoStore = require("connect-mongo"),
  passport = require("passport");
require("./config/database");
require("dotenv").config();
require("./config/passport");

app.use(express.static("client"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true, 
    proxy: true, 
    name: "community-bank",  
    store: mongoStore.create({
      mongoUrl: process.env.DB_STRING,
      collection: "sessions",
    }),
    cookie: {
      httpOnly: true, 
      secure: true, 
      maxAge: 1000 * 60 * 60 * 48,
      sameSite: "none", 
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set("port", process.env.PORT || 5000);

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`Server on localhost:${app.get("port")}`);
});
