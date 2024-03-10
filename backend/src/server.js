//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

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
module.exports = app;
