// Assuming Prisma is installed at the root level
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = async (event, context) => {
  const { name, email, subject, message } = JSON.parse(event.body);

  try {
    const messageDB = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        data: messageDB,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
