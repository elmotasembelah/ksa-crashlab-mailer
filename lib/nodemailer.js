require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    // user: "em9002648@gmail.com",
    // pass: "lsbvavjcxrebzstl",
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const defaultMailOptions = {
  from: {
    name: "Web Wizard",
    address: "elmotasembelahelsayed@gmail.com",
  },
  // to: "elmotasembelahelsayed12@gmail.com",
  to: "esraamortada809@gmail.com",
  //   to: "moatasm-belah@spatiumsoftware.com",

  subject: "Send email using nodemailer and gmail",
  text: "Hello world text",
  html: "<b>Hello World html</b>",
};

const generateMailOptions = ({ name, email, phone, message }) => {
  const mailOptions = {
    from: {
      name: "Etmam Contact Form",
      address: "elmotasembelahelsayed@gmail.com",
    },
    to: "elmotasembelahelsayed12@gmail.com",
    // to: "esraamortada809@gmail.com",
    //   to: "moatasm-belah@spatiumsoftware.com",

    subject: "Send email using nodemailer and gmail",
    text: "Hello world text",
    html: `<p>${name}</p>
    <p>${email}</p>
    <p>${phone}</p>
    <p>${message}</p>
    `,
  };

  return mailOptions;
};

module.exports = { transporter, defaultMailOptions, generateMailOptions };
