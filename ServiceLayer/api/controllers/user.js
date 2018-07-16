const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.user_singnup = (req, res, next) => {
  User.find({ email: req.body.email })
    .then(result => {
      console.log(result);
      if (result.length) {
        res.status(422).json({
          message: "email already exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(404).json({ message: "something went wrong" });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });

            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({ message: "user created" });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json(err);
              });
          }
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
};

exports.user_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .then(result => {
      if (result.length) {
        bcrypt.compare(req.body.password, result[0].password, (err, resp) => {
          if (err) {
            return res.status(401).json({ message: "Auth failed." });
          } else {
            if (resp) {
              const token = jwt.sign(
                {
                  email: result[0].email,
                  userId: result[0]._id
                },
                process.env.JWT_KEY,
                {
                  expiresIn: process.env.JWT_EXPIRESIN
                }
              );
              return res.status(200).json({
                message: "Loging successful",
                token: token
              });
            }
          }
        });
      } else {
        res.status(401).json({ message: "Auth failed" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "something went wrong"
      });
    });
};

exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.body._id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "user delted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "something went wrong",
        error: err
      });
    });
};

exports.user_by_id = (req, res, next) => {
  console.log(req.body._id);
  User.find({ _id: req.body._id })
    .exec()
    .then(result => {
      console.log(result);
      if (result.length) {
        console.log("exists");
        res.status(200).json({
          message: "user fetched",
          userDetails: result
        });
      } else {
        res.status(404).json({
          message: "User not found"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "something went wrong",
        error: err
      });
    });
};
