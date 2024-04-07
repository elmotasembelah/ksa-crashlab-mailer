const {
  transporter,
  defaultMailOptions,
  generateMailOptions,
} = require("../lib/nodemailer.js");
const { sendEmail } = require("../lib/sendEmail.js");

const sendEmailUsingGmail = async (req, res) => {
  const contactInfo = req.body;
  console.log(contactInfo);

  const mailOptions = generateMailOptions(contactInfo);

  // const { success, error } = await sendEmail(transporter, defaultMailOptions);
  const { success, error } = await sendEmail(transporter, mailOptions);

  if (success) {
    res.status(200).json({ message: "email sent succesfully" });
  } else {
    res.status(500).json({
      message: "something went wrong and email was not sent successfully",
      error: error,
    });
  }

  // res.send("email sent");
};

module.exports = { sendEmailUsingGmail };
