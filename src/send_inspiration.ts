const { transporter } = require("./config");
const getRandomQuote = require("./quotes");
const prepMessage = require("./message");
const getJoke = require("./joke");

type MailOptions = {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
};

const recipientsArray: string[] = process.argv.slice(2);

function getRecipients(recipients = recipientsArray): string {
  return recipients.join(",");
}

const recipients: string = getRecipients() || "ngoakor12@gmail.com";

const quote = getRandomQuote();

const mailOptions: MailOptions = {
  from: `Lovely human being <${process.env.SMTP_LOGIN}>`,
  to: recipients,
  replyTo: process.env.SMTP_LOGIN,
  subject: "Random Inspirational Quote",
  text: "",
  html: "",
};

async function sendEmail(options = mailOptions) {
  const joke = await getJoke();
  const message = prepMessage(joke, quote);
  options.text = message.messageText;
  options.html = message.messageHTML;
  transporter.sendMail(options);
  console.log(`Email sent!`);
}

export { getRecipients, mailOptions, sendEmail };
