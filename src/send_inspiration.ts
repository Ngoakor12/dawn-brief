import { transporter } from "./config";
import getRandomQuote from "./quotes";

const recipientsArray = process.argv.slice(2);

function getRecipients(recipients = recipientsArray) {
  return recipients.join(",");
}

const recipients = getRecipients() || "ngoakor12@gmail.com";
const { quoteText, quoteHTML } = getRandomQuote();

const mailOptions = {
  from: `Lovely human being <${process.env.SMTP_LOGIN}>`,
  to: recipients,
  replyTo: process.env.SMTP_LOGIN,
  subject: "Random Inspirational Quote",
  text: quoteText,
  html: quoteHTML,
};

function sendEmail(options = mailOptions) {
  return transporter.sendMail(options, (error: any) => {
    if (error) throw error;
    console.log(`Email sent: ${options.text}`);
  });
}

export { getRecipients, mailOptions, sendEmail };
