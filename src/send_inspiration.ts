import { transporter } from "./config";
import { getRandomQuote } from "./quotes";
import { prepMessage } from "./message";
import { getJoke } from "./joke";
import { getGif } from "./gif";

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
  const gif = await getGif();
  const joke = await getJoke();
  const message = prepMessage(gif, joke, quote);
  options.text = message.messageText;
  options.html = message.messageHTML;
  transporter.sendMail(options);
  console.log(`Email sent!`);
}

export { getRecipients, mailOptions, sendEmail };
