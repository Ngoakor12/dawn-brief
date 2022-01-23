const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER || "smtp-relay.sendinblue.com",
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_LOGIN || "ngoakor12@gmail.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

module.exports = { transporter };
