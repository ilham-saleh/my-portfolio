// sendEmail.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const sendEmail = async ({ name, email, subject, message }) => {
  try {
    const messageDB = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return { message: "Email sent successfully", data: messageDB };
  } catch (error) {
    return { error: "Internal Server Error" };
  }
};

module.exports = sendEmail;
