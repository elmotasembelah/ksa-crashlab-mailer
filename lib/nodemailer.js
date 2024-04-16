require("dotenv").config();
const nodemailer = require("nodemailer");


const createTransporter = () => {
const user = process.env.SMTP_USER
const password = process.env.SMTP_PASSWORD



  console.log("createTransporter is called")
  console.log("user from env:",process.env.SMTP_USER)
  console.log("password from env:",process.env.SMTP_PASSWORD)


  try {

    if(user === undefined || password === undefined){
      throw new Error("missing env variables (user, password)")
    }
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

    return transporter

  } catch (error) {
    console.log("error occured while creating the transporter")
    console.log(error)
    return 0
  }
}


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

module.exports = { defaultMailOptions, generateMailOptions,  createTransporter};
