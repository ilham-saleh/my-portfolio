//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();
const path = require("path");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

// // Configure nodemailer with your email service details
// const transporter = nodemailer.createTransport({
//   service: "gmail", // e.g., 'gmail'
//   auth: {
//     username: "ilham Saleh",
//     password: "Family769896",
//   },
// });

// Endpoint to handle POST requests from your contact form
const emailRouter = require("./router/index.js");
app.use("/", emailRouter);

module.exports = app;
