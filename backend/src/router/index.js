const express = require("express");
const app = express();

const router = express.Router();

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Configure nodemailer with your email service details
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'gmail'
  auth: {
    user: "ilham2saleh@gmail.com",
    pass: "Family769896",
  },
});

router.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Setup email data
  const mailOptions = {
    from: email, // sender address
    to: "ilham2saleh@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: `You have a new message from ${name}, subject: ${subject} (${email}): ${message}`, // plain text body
    html: `<p>You have a new message from <b>${name}</b> ${subject}, (${email}): ${message}</p>`, // html body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      return res.status(500).send({ error: error.message });
    }
    res.status(200).json({ message: "Email sent successfully!", info });
  });
});

module.exports = router;
