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

// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: mongoStore.create({
//       mongoUrl: process.env.DB_STRING,
//       collection: "sessions",
//     }),
//     cookie: {
//        maxAge: 60 * 60 * 1000,
//     },
//   })
// );

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({
      mongoUrl: process.env.DB_STRING,
      collection: "sessions",
    }),
    cookie: {
      secure: true,
      httpOnly: false,
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
