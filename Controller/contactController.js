// controllers/contactController.js
const transporter = require("../Config/mailer.js");

exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  let mailOptions = {
    from: email,
    to: "YOUR_GMAIL@gmail.com",   // jaha tu receive karna chahta hai
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};