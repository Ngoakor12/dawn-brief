const { transporter } = require("./config");
const { getRandomQuote } = require("./quotes");

const recipientsArray = process.argv.slice(2);

function getRecipients() {
  return recipientsArray.join(",");
}

const mailOptions = {
  from: `Lovely human being <${process.env.SMTP_LOGIN}>`,
  to: getRecipients(),
  subject: "Random Inspirational Quote",
  text: getRandomQuote(),
};

function sendEmail() {
  return transporter.sendMail(mailOptions, (error) => {
    if (error) throw error;
    console.log(`Email sent: ${mailOptions.text}`);
  });
}

module.exports = {
  getRecipients,
  mailOptions,
  sendEmail,
};
