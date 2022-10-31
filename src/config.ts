import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

declare var process: {
  env: {
    SMTP_SERVER: string;
    SMTP_PORT: number;
    SMTP_LOGIN: string;
    SMTP_PASSWORD: string;
  };
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER || "smtp-relay.sendinblue.com",
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_LOGIN || "ngoakor12@gmail.com",
    pass: process.env.SMTP_PASSWORD,
  },
});
export { transporter };
