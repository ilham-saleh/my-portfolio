//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();
const path = require('path');

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

// app.post("/send-email", async (req, res) => {
//   const { name, email, subject, message } = req.body;
//   try {
//     const { name, email, message } = req.body;

//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "ilham2saleh@gmail.com", // replace with your email
//         pass: "Family769896", // replace with your email password or app password
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: "your-email@gmail.com", // replace with your email
//       to: "recipient-email@example.com", // replace with the recipient's email
//       subject: "New Form Submission",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);

//     console.log("Email sent:", info.response);
//     res.status(200).send("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const messageDB = await prisma.message.create({
    data: {
      name,
      email,
      subject,
      message,
    },
  });

  if (!name || !email || !message) {
    res
      .status(406)
      .json({ error: "Necessary fields are required to fill in!" });
  }

  if (message.length < 10) {
    res
      .status(406)
      .json({ error: "Message must be above 10 charachters or more!" });
  }

  res.json({ message: messageDB });
});

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "frontend/build")));

// Serve the frontend for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

module.exports = app;
