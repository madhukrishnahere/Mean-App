const express = require("express");
const app = express();
//const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/user");
const emailRoutes = require("./api/routes/email");
const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/meanapp"; //process.env.MongoURL;
mongoose
  .connect(mongoURL)
  .then(connection => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.log(error.message);
  });

app.use((req, resp, next) => {
  resp.header("Access-Control-Allow-Origin", "*");
  resp.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    resp.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET"
    );
    return resp.status(200).json({});
  }
  next();
});

//app.use(morgan("dev")); // logging middleware
app.use(bodyParser.urlencoded({ extended: false })); //
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/test", emailRoutes);
module.exports = app;

//app.listen(3000, () => console.log(`Server started on port`));
