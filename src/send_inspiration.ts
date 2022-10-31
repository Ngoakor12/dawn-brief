import { transporter } from "./config";
import getRandomQuote from "./quotes";

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

const { quoteText, quoteHTML } = getRandomQuote();

const mailOptions: MailOptions = {
  from: `Lovely human being <${process.env.SMTP_LOGIN}>`,
  to: recipients,
  replyTo: process.env.SMTP_LOGIN,
  subject: "Random Inspirational Quote",
  text: quoteText,
  html: quoteHTML,
};

function sendEmail(options = mailOptions): void {
  transporter.sendMail(options);
  console.log(`Email sent: ${options.text}`);
}

export { getRecipients, mailOptions, sendEmail };
