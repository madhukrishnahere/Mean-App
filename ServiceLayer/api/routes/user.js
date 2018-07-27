const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const userController = require("../controllers/user");
const jwt = require("jsonwebtoken");
const authCheck = require("../middleware/authentication-check");

router.post("/signup", userController.user_singnup);

router.post("/login", userController.user_login);

router.post("/verifytoken", userController.token_verify);

router.delete("/:userId", authCheck, userController.user_delete);

router.get("/:userId", authCheck, userController.user_by_id);

module.exports = router;
