const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send", (req, resp, next) => {
  console.log("entered");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "madhukrishna.mantri@gmail.com",
      pass: "madhu@123"
    }
  });

  var mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: "mail from express service",
    text: "Awesome...!"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      resp.status(500).json({ error: error });
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).json({ message: "email sent...!" });
    }
  });
});

module.exports = router;
